import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industry Cloud Solutions | Secure & Scalable Cloud | Ssquad Global",
  description: "Build secure industry cloud solutions for healthcare, finance, manufacturing and retail with compliance, automation and faster deployment from Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
