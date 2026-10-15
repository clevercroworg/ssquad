import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cybersecurity Consulting Services | Ssquad Global",
  description: "Improve your security posture with Ssquad Global cybersecurity consulting, risk assessments, security architecture, compliance guidance and cyber risk management.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
