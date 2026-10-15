import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Security Compliance Services | ISO 27001, SOC 2 & GDPR | Ssquad Global",
  description: "Strengthen security compliance with ISO 27001, SOC 2, GDPR, HIPAA and PCI-DSS services from Ssquad Global, including assessments, remediation and compliance monitoring.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
