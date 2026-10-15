import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud Security Services | AWS, Azure & Multi-Cloud | Ssquad Global",
  description: "Protect AWS, Azure and multi-cloud environments with cloud security services from Ssquad Global covering CSPM, IAM, threat detection and DevSecOps.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
