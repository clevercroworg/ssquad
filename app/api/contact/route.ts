import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { getClientIp, checkIpRateLimit, evaluateSpamRules } from '@/app/lib/antiSpam';

// Helper to save leads locally as a backup
async function saveLeadBackup(leadData: any) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    
    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      await fs.promises.mkdir(dataDir, { recursive: true });
    }
    
    const filePath = path.join(dataDir, 'leads_backup.json');
    let leads: any[] = [];
    
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = await fs.promises.readFile(filePath, 'utf8');
        leads = JSON.parse(fileContent || '[]');
      } catch (err) {
        console.error('Error reading/parsing existing backup file, resetting database:', err);
      }
    }
    
    leads.push({
      ...leadData,
      timestamp: new Date().toISOString(),
    });
    
    await fs.promises.writeFile(filePath, JSON.stringify(leads, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Failed to save lead backup locally:', err);
    return false;
  }
}

// Helper to send to Google Sheets
async function postToGoogleSheets(leadData: any) {
  const googleAppScriptUrl = process.env.GOOGLE_SCRIPT_WEB_APP_URL;
  if (!googleAppScriptUrl) return { success: false, reason: 'URL not configured' };

  try {
    const sheetData = new URLSearchParams();
    sheetData.append("rsvp_status", "Contact Form Inquiry");
    sheetData.append("first_name", leadData.name);
    sheetData.append("last_name", "(Contact Form)");
    sheetData.append("company", leadData.subject || "N/A");
    sheetData.append("designation", leadData.message);
    sheetData.append("industry", "Website Contact Form");
    sheetData.append("email", leadData.email);
    sheetData.append("phone", leadData.number || "N/A");
    sheetData.append("date", new Date().toISOString().replace("T", " ").substring(0, 19));

    const response = await fetch(googleAppScriptUrl, {
      method: "POST",
      body: sheetData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    
    return { success: response.ok, status: response.status };
  } catch (err: any) {
    console.error('Google Sheets backup submission failed:', err);
    return { success: false, error: err.message };
  }
}

export async function POST(request: Request) {
  let name = '', email = '', number = '', subject = '', message = '';
  let honeypot = '', timestamp: any = null;
  
  // 1. IP Rate Limiting Check
  const clientIp = getClientIp(request);
  const rateLimit = checkIpRateLimit(clientIp);
  if (!rateLimit.allowed) {
    console.warn(`[ANTI-SPAM RATE LIMIT] Blocked excessive requests from IP: ${clientIp}`);
    return NextResponse.json(
      { error: `Too many inquiries received from this connection. Please try again in ${rateLimit.retryAfterSeconds || 60} seconds.` },
      { status: 429 }
    );
  }

  // 2. Parse Request Payload
  try {
    const body = await request.json();
    name = (body.name || '').trim();
    email = (body.email || '').trim();
    number = (body.number || '').trim();
    subject = (body.subject || '').trim();
    message = (body.message || '').trim();
    // Catch honeypot fields across variations
    honeypot = body._hp_company || body.company_fax || body.honeypot || body.website_url_hp || '';
    timestamp = body._ts || body.timestamp;
  } catch (err) {
    return NextResponse.json({ error: 'Malformed request JSON' }, { status: 400 });
  }

  // 3. Basic Field Requirement Check
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required fields.' },
      { status: 400 }
    );
  }

  // 4. Multi-Layer Spam & Bot Evaluation
  const spamResult = evaluateSpamRules({
    name,
    email,
    subject,
    message,
    honeypot,
    timestamp,
  });

  if (spamResult.isSpam) {
    console.warn(`[ANTI-SPAM SHIELD] Blocked bot spam from ${clientIp}:`, {
      reason: spamResult.reason,
      lead: { name, email, subject, phone: number },
    });

    if (spamResult.shouldSilentDrop) {
      // Deceive the bot by returning a 200 OK success response so it ceases retries,
      // but drop the submission completely without sending any email or writing to DB.
      return NextResponse.json(
        { 
          message: 'Transmission successful. We will contact you shortly.',
          details: {
            savedLocal: false,
            savedCloud: false,
            notified: false,
            protected: true,
          }
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: spamResult.reason || 'Invalid inquiry submission.' },
      { status: 400 }
    );
  }

  const leadInfo = { name, email, number, subject, message };

  // 5. Save locally as fallback
  const localSaveSuccess = await saveLeadBackup(leadInfo);
  
  // 6. Forward to Google Sheets in background
  const sheetsStatus = await postToGoogleSheets(leadInfo);

  // 7. Email Dispatch
  let emailSent = false;
  let emailErrorMsg = '';

  const rawAlertEmail = process.env.COMPANY_ALERT_EMAIL || 'sales@ssquad.com, ashoka@ssquad.com';
  const alertRecipients = rawAlertEmail
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);
  if (!alertRecipients.includes('ashoka@ssquad.com')) {
    alertRecipients.push('ashoka@ssquad.com');
  }
  const toAlertEmail = alertRecipients.join(', ');

  const mailOptions = {
    from: `"Ssquad Global" <${process.env.SMTP_USER || 'ssquadeventadmin@gmail.com'}>`,
    replyTo: email,
    to: toAlertEmail,
    subject: `New Contact Inquiry: ${subject || 'No Subject'}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0b1530; padding: 24px 20px; text-align: center;">
          <a href="https://ssquad.com" target="_blank" style="display: inline-block; text-decoration: none;">
            <img src="https://ssquad.com/images/logon.png" alt="Ssquad Global" width="140" height="54" style="height: 38px; width: auto; max-width: 170px; display: block; margin: 0 auto; border: 0;" />
          </a>
        </div>
        <div style="padding: 28px 24px;">
          <h2 style="color: #0b1530; font-size: 20px; margin-top: 0; margin-bottom: 16px;">New Contact Inquiry from Website</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 90px;"><strong>Name:</strong></td><td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td style="padding: 6px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #ec2024; text-decoration: none;">${email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td><td style="padding: 6px 0; color: #0f172a;">${number || 'N/A'}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Subject:</strong></td><td style="padding: 6px 0; color: #0f172a;">${subject || 'N/A'}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 14px; background-color: #f8fafc; border-left: 3px solid #ec2024; border-radius: 4px;">
            <p style="margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase; font-weight: bold; color: #64748b;">Message / Requirements:</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
        </div>
        <div style="background-color: #f8fafc; padding: 14px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 11px; color: #64748b; margin: 0;">Automated notification from Ssquad Global website inquiry portal.</p>
        </div>
      </div>
    `,
  };

  const userConfirmationOptions = {
    from: `"Ssquad Global" <${process.env.SMTP_USER || 'ssquadeventadmin@gmail.com'}>`,
    to: email,
    subject: `Thank you for contacting Ssquad Global`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0b1530; padding: 28px 20px; text-align: center;">
          <a href="https://ssquad.com" target="_blank" style="display: inline-block; text-decoration: none;">
            <img src="https://ssquad.com/images/logon.png" alt="Ssquad Global" width="140" height="54" style="height: 42px; width: auto; max-width: 180px; display: block; margin: 0 auto; border: 0;" />
          </a>
        </div>
        <div style="padding: 32px 28px;">
          <p style="font-size: 16px; line-height: 1.6; margin-top: 0; color: #0f172a;">Dear ${name},</p>
          <p style="font-size: 15px; line-height: 1.6; color: #334155;">Thank you for getting in touch with us. We have successfully received your inquiry regarding <strong style="color: #0f172a;">"${subject || 'your message'}"</strong>.</p>
          <p style="font-size: 15px; line-height: 1.6; color: #334155;">One of our global experts will review your request and get back to you shortly.</p>
          <br/>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 6px; color: #475569;">Best regards,</p>
          <p style="font-size: 15px; font-weight: bold; margin-top: 0; color: #0b1530;">The Ssquad Global Team</p>
        </div>
        <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 12px; color: #64748b; margin: 0;">&copy; ${new Date().getFullYear()} Ssquad Global. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  // Try Gmail Port 465 (Secure)
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      console.log('Attempting Gmail SMTP secure delivery (Port 465)...');
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        connectionTimeout: 8000,
      });
      await transporter.sendMail(mailOptions);
      try {
        await transporter.sendMail(userConfirmationOptions);
      } catch (err) {
        console.warn('Failed to send user confirmation, alert sent successfully:', err);
      }
      emailSent = true;
      console.log('Gmail SMTP Port 465 secure delivery successful.');
    } catch (err: any) {
      console.error('Gmail SMTP Port 465 delivery failed:', err.message);
      emailErrorMsg += `Port 465: ${err.message}; `;
    }

    // Fallback 1: Try Gmail Port 587 (STARTTLS)
    if (!emailSent) {
      try {
        console.log('Attempting Gmail SMTP STARTTLS delivery (Port 587)...');
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          connectionTimeout: 8000,
        });
        await transporter.sendMail(mailOptions);
        try {
          await transporter.sendMail(userConfirmationOptions);
        } catch (err) {
          console.warn('Failed to send user confirmation via Port 587:', err);
        }
        emailSent = true;
        console.log('Gmail SMTP Port 587 delivery successful.');
      } catch (err: any) {
        console.error('Gmail SMTP Port 587 delivery failed:', err.message);
        emailErrorMsg += `Port 587: ${err.message}; `;
      }
    }
  } else {
    emailErrorMsg += 'SMTP credentials missing from environment; ';
  }

  // Fallback 2: Try Local Sendmail (Exim MTA on cPanel)
  if (!emailSent) {
    try {
      console.log('Attempting local sendmail binary delivery...');
      const transporter = nodemailer.createTransport({
        sendmail: true,
        path: '/usr/sbin/sendmail',
        newline: 'unix',
      });
      await transporter.sendMail(mailOptions);
      try {
        await transporter.sendMail(userConfirmationOptions);
      } catch (err) {
        console.warn('Failed to send user confirmation via Sendmail:', err);
      }
      emailSent = true;
      console.log('Local sendmail delivery successful.');
    } catch (err: any) {
      console.error('Local sendmail delivery failed:', err.message);
      emailErrorMsg += `Sendmail: ${err.message}; `;
    }
  }

  // Final Evaluation
  if (emailSent || localSaveSuccess || sheetsStatus.success) {
    console.log('Lead processed successfully.', {
      emailSent,
      localSaveSuccess,
      sheetsSaveSuccess: sheetsStatus.success,
      emailErrors: emailErrorMsg || 'None',
    });
    
    return NextResponse.json(
      { 
        message: 'Transmission successful. We will contact you shortly.',
        details: {
          savedLocal: localSaveSuccess,
          savedCloud: sheetsStatus.success,
          notified: emailSent,
        }
      },
      { status: 200 }
    );
  }

  // Only fail completely if absolutely everything failed
  console.error('All contact submission channels failed!', {
    localSaveSuccess,
    sheetsStatus,
    emailErrorMsg,
  });

  return NextResponse.json(
    { 
      error: 'Failed to process inquiry. Our servers are currently undergoing maintenance, please email us directly at sales@ssquad.com',
      reason: emailErrorMsg,
    },
    { status: 500 }
  );
}
