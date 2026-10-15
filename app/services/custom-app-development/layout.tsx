import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Application Development Services | Ssquad Global",
  description: "Build secure, scalable custom applications with Ssquad Global. Develop bespoke web and mobile apps, API integrations and cloud-native software for your business.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
