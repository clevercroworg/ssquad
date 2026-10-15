import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "API Development & Integration Services | Ssquad Global",
  description: "Build secure, scalable REST, GraphQL and SOAP APIs with Ssquad Global. Connect enterprise systems, cloud platforms and third-party applications.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
