import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Application Security Services | SAST, DAST & API Security | Ssquad Global",
  description: "Protect applications with Ssquad Global's application security services, including SAST, DAST, API security, cloud security and runtime protection.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
