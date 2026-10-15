import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CISO Roundtable 2026 | Ssquad Global & Securonix",
  description: "Join leading cybersecurity executives at the CISO Roundtable 2026 hosted by Ssquad Global and Securonix. Strategic dialogue on AI resilience and cyber defence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
