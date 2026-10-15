import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Application Integration Services | Enterprise Solutions | Ssquad Global",
  description: "Connect ERP, CRM, APIs, cloud and legacy systems with enterprise application integration services from Ssquad Global for seamless data exchange and connected workflows.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
