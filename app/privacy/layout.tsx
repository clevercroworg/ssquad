import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Ssquad Global",
  description: "Read Ssquad Global's Privacy Policy to learn how we collect, use, protect and safeguard personal information in accordance with applicable privacy standards.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
