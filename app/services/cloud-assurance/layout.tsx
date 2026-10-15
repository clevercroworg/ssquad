import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud Security Assessment & Assurance Services | Ssquad Global",
  description: "Identify cloud vulnerabilities, misconfigurations, compliance gaps and security risks with expert cloud security assessment and assurance services from Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
