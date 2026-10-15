import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Ssquad Global",
  description: "Review the standard terms and conditions for engaging with Ssquad Global services and accessing our digital platforms.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
