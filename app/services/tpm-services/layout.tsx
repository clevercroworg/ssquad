import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Third-Party Maintenance (TPM) Services | Ssquad Global",
  description: "Extend hardware lifespans, slash OEM maintenance costs, and get multi-vendor enterprise hardware support with Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
