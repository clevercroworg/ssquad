import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "OT Security Services | Industrial & ICS Cybersecurity | Ssquad Global",
  description: "Protect industrial and critical infrastructure with OT security services from Ssquad Global covering risk assessments, compliance, consulting, threat detection and network security.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
