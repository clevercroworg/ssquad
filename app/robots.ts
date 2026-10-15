import type { MetadataRoute } from 'next';

// Vercel hosts the demo/preview copy of this repo; the VPS hosts the live site.
// Vercel sets VERCEL=1 during its builds, so only the Vercel copy blocks crawlers.
// Everywhere else (the VPS) allows everything, which matches having no robots.txt.
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    };
  }

  return {
    rules: { userAgent: '*', allow: '/' },
  };
}
