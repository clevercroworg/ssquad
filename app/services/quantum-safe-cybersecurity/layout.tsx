import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Quantum-Safe Cybersecurity Services | Ssquad Global",
  description: "Prepare for quantum threats with post-quantum cryptography, NIST PQC guidance, risk assessment and quantum-safe migration services from Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
