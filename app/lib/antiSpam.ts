// Anti-Spam & Abuse Defense Engine for Contact and Lead Inquiries

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

// In-memory sliding window rate limiter: max 3 requests per 10 minutes per IP
const ipRequestMap = new Map<string, RateLimitRecord>();

// Clean up stale IP records every 15 minutes to prevent memory leak
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of ipRequestMap.entries()) {
      if (now > record.resetAt) {
        ipRequestMap.delete(ip);
      }
    }
  }, 15 * 60 * 1000);
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) return cfConnectingIp.trim();
  return '127.0.0.1';
}

export function checkIpRateLimit(ip: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
  const MAX_REQUESTS = 5; // Allow max 5 submissions per 10 minutes per IP

  const record = ipRequestMap.get(ip);

  if (!record || now > record.resetAt) {
    ipRequestMap.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS) {
    const retryAfterSeconds = Math.ceil((record.resetAt - now) / 1000);
    return { allowed: false, retryAfterSeconds };
  }

  record.count += 1;
  return { allowed: true };
}

/**
 * Checks for machine-generated random alphanumeric strings (e.g., 'onWTQcBNvuBItOECVLZf')
 */
export function isGibberishToken(str: string): boolean {
  if (!str) return false;
  const trimmed = str.trim();

  // If single word >= 12 characters with mixed casing or numbers, and no spaces
  if (!trimmed.includes(' ') && trimmed.length >= 12) {
    const hasLower = /[a-z]/.test(trimmed);
    const hasUpper = /[A-Z]/.test(trimmed);
    const hasDigit = /[0-9]/.test(trimmed);

    if ((hasLower && hasUpper) || (hasLower && hasDigit) || (hasUpper && hasDigit)) {
      return true;
    }
  }

  return false;
}

export interface AntiSpamInput {
  name: string;
  email: string;
  subject?: string;
  message: string;
  honeypot?: string;       // Hidden decoy field (_hp_company or company_fax)
  timestamp?: number | string; // Form render timestamp (_ts)
}

export interface AntiSpamResult {
  isSpam: boolean;
  reason?: string;
  shouldSilentDrop: boolean; // Return 200 OK to fool the bot, but drop email
}

export function evaluateSpamRules(input: AntiSpamInput): AntiSpamResult {
  const { name, email, subject, message, honeypot, timestamp } = input;

  // 1. Honeypot Trap Check
  // Bots auto-fill all form inputs. If the hidden decoy field has any content, it is a bot.
  if (honeypot && honeypot.trim().length > 0) {
    return {
      isSpam: true,
      reason: 'Honeypot field was filled by automated bot.',
      shouldSilentDrop: true,
    };
  }

  // 2. Submission Speed / Time-Elapsed Check
  // Humans take at least 3 seconds to complete a 5-field form.
  // Bots submit in < 1 second or omit the timestamp entirely.
  if (timestamp) {
    const tsNum = typeof timestamp === 'string' ? parseInt(timestamp, 10) : timestamp;
    if (!isNaN(tsNum)) {
      const elapsedMs = Date.now() - tsNum;
      if (elapsedMs < 2500) {
        return {
          isSpam: true,
          reason: `Submission too fast (${elapsedMs}ms). Typical bot automated submit.`,
          shouldSilentDrop: true,
        };
      }
      // If timestamp is from more than 24 hours ago, or in the future
      if (elapsedMs > 24 * 60 * 60 * 1000 || elapsedMs < -10000) {
        return {
          isSpam: true,
          reason: 'Stale or invalid submission timestamp token.',
          shouldSilentDrop: true,
        };
      }
    }
  }

  // 3. Subject Gibberish Check (Targets the exact attack vector reported: 'onWTQcBNvuBItOECVLZf')
  if (subject && isGibberishToken(subject)) {
    return {
      isSpam: true,
      reason: `Subject is a recognized machine-generated random token (${subject}).`,
      shouldSilentDrop: true,
    };
  }

  // 4. Name & Subject Link Injection Check
  const urlRegex = /(https?:\/\/|www\.|ftp:\/\/|\.ru\/|\.xyz\/|\.top\/)/i;
  if (urlRegex.test(name) || (subject && urlRegex.test(subject))) {
    return {
      isSpam: true,
      reason: 'Name or subject contains URL spam injection.',
      shouldSilentDrop: true,
    };
  }

  // 5. Basic Email Structure Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    return {
      isSpam: true,
      reason: 'Invalid email address syntax.',
      shouldSilentDrop: false, // Standard form validation failure
    };
  }

  // 6. Message Link Stuffing (> 3 URLs in a contact form inquiry is 99% spam)
  const matches = message.match(/(https?:\/\/[^\s]+)/g);
  if (matches && matches.length > 3) {
    return {
      isSpam: true,
      reason: 'Excessive URLs detected in inquiry message.',
      shouldSilentDrop: true,
    };
  }

  return {
    isSpam: false,
    shouldSilentDrop: false,
  };
}

