import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Penetration Testing Services | VAPT & Security Testing | Ssquad Global",
  description: "Identify vulnerabilities with penetration testing across networks, applications and systems. Get actionable findings and remediation guidance from Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
