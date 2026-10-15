import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Integrated SOC Services | IT/OT Security Monitoring | Ssquad Global",
  description: "Secure IT, OT and IoT environments with integrated SOC services from Ssquad Global, featuring unified threat detection, incident response and 24/7 security monitoring.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
