import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cybersecurity for AI Systems | AI Security Services | Ssquad Global",
  description: "Protect AI systems with AI security services from Ssquad Global covering model protection, adversarial defense, secure data pipelines and AI threat monitoring.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
