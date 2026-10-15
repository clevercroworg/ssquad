import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '@phosphor-icons/web/regular';
import '@phosphor-icons/web/bold';
import '@phosphor-icons/web/fill';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ssquad.com'),
  title: 'Enterprise Cybersecurity & Managed Security Services | Ssquad Global',
  description: 'Ssquad Global provides enterprise cybersecurity, managed security, threat intelligence, cloud and IT solutions to protect organizations from evolving cyber threats.',
  verification: {
    google: 'v90I0PUZa531VInOqruqXnDT_08ZrA-GACf5up5h_do',
  },
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/fonts/Phosphor.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-body bg-white text-slate-900 antialiased`}>
        {/* Google Analytics GA4 (lazyOnload to prevent render blocking) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G32EVGJ757"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G32EVGJ757');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
