import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Cybersecurity Services | AI-Powered Threat Detection | Ssquad Global",
  description: "Strengthen security with AI cybersecurity services from Ssquad Global for threat detection, automated response, UEBA, predictive analytics and SOC operations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
