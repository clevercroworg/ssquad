import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GRC Services | Governance, Risk & Compliance | Ssquad Global",
  description: "Strengthen governance, risk and compliance with Ssquad Global's GRC services for regulatory compliance, risk management, audits and enterprise governance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
