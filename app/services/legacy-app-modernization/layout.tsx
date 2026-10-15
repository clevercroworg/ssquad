import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Legacy Application Modernization Services | Ssquad Global",
  description: "Modernize legacy applications through cloud migration, replatforming, refactoring and microservices to reduce technical debt and improve scalability with Ssquad Global.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
