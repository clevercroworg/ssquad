import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud Consulting Services | Strategy & Optimization | Ssquad Global",
  description: "Get cloud consulting from Ssquad Global for strategy, migration, multi-cloud optimization, security and FinOps to build a scalable, secure and cost-efficient cloud environment.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
