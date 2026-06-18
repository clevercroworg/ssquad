import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Ssquad Global | Enterprise Cybersecurity',
  description: 'Ssquad Global delivers enterprise-grade cybersecurity, cloud, infrastructure, and managed security services for modern threat landscapes.',
  verification: {
    google: 'v90I0PUZa531VInOqruqXnDT_08ZrA-GACf5up5h_do',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-body bg-white text-slate-900 antialiased`}>
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G32EVGJ757"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
