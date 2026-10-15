import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud Native Solutions & Services | Kubernetes & Microservices | Ssquad Global",
  description: "Accelerate digital transformation with cloud native solutions from Ssquad Global including Kubernetes, microservices, serverless computing and CI/CD for scalable applications.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
