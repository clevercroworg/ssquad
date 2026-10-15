import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Threat Intelligence Services | Cyber Threat Intelligence | Ssquad Global",
  description: "Detect emerging threats with cyber threat intelligence services from Ssquad Global. Track threat actors, analyze IOCs and gain actionable intelligence to protect your enterprise.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
