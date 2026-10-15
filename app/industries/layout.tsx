import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industry-Specific Cybersecurity Solutions | Ssquad Global",
  description: "Explore cybersecurity solutions for banking, manufacturing, energy, healthcare, insurance and government. Protect critical systems with Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
