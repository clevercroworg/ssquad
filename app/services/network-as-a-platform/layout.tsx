import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Network as a Platform (NaaP) Services | Ssquad Global",
  description: "Modernize enterprise networking with Network as a Platform services, SDN, API-driven networking, automation and AI-powered network intelligence from Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
