import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Human-Centric Cybersecurity Services | Ssquad Global",
  description: "Reduce human cyber risk with Ssquad Global's human-centric cybersecurity services, including human risk management, behavioral analytics and security awareness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
