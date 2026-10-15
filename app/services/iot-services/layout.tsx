import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IoT Development Services | Industrial IoT & Edge Computing | Ssquad Global",
  description: "Build connected solutions with IoT development services from Ssquad Global for Industrial IoT, smart cities, edge analytics, asset tracking and real-time telemetry.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
