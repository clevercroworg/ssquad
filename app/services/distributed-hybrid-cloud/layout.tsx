import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Distributed & Hybrid Cloud Solutions | Ssquad Global",
  description: "Connect public, private and edge environments with secure distributed and hybrid cloud solutions, scalable architecture, orchestration and zero-trust security from Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
