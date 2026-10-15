import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Sign In | Ssquad Global',
  description: 'Sign in to the Ssquad Global administrative management portal.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
