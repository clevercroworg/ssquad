import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Browser Security Services | Managed Browser Security | Ssquad Global",
  description: "Protect users from web threats with managed browser security from Ssquad Global, including phishing defense, malicious site isolation, zero-trust controls and SASE integration.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
