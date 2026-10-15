import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Identity & Access Management (IAM) Services | Ssquad Global",
  description: "Secure identities with IAM services from Ssquad Global including MFA, SSO, PAM, identity governance and zero-trust access for enterprise environments.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
