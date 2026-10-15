import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Ssquad Global | Enterprise Cybersecurity Experts",
  description: "Contact Ssquad Global for enterprise cybersecurity, managed security, cloud and IT services. Connect with our cybersecurity experts in global markets.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
