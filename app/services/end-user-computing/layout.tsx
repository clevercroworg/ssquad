import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "End User Computing Managed Services | Ssquad Global",
  description: "Secure and manage end-user computing with desktop management, MDM, identity access, remote management and application access services from Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
