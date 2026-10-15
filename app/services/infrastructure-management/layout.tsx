import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IT Infrastructure Management Services | Ssquad Global",
  description: "Manage IT infrastructure with 24/7 monitoring, network management, cloud integration, data center security and IT lifecycle support from Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
