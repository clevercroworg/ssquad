import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud Operations Services | AIOps & Automation | Ssquad Global",
  description: "Optimize cloud operations with AIOps, automation, monitoring, DevOps and self-healing infrastructure across public, private and hybrid cloud environments from Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
