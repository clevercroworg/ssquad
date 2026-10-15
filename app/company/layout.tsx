import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ssquad Global | Cybersecurity & IT Services Company",
  description: "Learn about Ssquad Global, a cybersecurity and IT services company delivering enterprise security, managed IT, cloud, infrastructure and cyber resilience solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
