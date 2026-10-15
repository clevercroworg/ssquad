import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Auxiliary IT Services & Technical Support | Ssquad Global",
  description: "Get auxiliary IT services from Ssquad Global including 24/7 technical support, contact center solutions, on-site support, remote troubleshooting and break-fix services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
