import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud Data Migration Services | Secure Cloud Migration | Ssquad Global",
  description: "Migrate enterprise data securely to AWS, Azure or GCP with cloud data migration services from Ssquad Global designed for data integrity, security and minimal downtime.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
