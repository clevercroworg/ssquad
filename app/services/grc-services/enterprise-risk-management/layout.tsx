import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Enterprise Risk Management Services | GRC Consulting | Ssquad Global",
  description: "Identify potential risks, evaluate business dependencies, and develop practical enterprise risk management strategies for operational resilience with Ssquad Global.",
  keywords: [
    "Enterprise Risk Management Services",
    "Enterprise Risk Management Consulting",
    "ERM Framework",
    "Technology Risk Management",
    "RMiT Compliance",
    "MAS TRM Guidelines",
    "Cybersecurity Risk Assessment",
    "Operational Resilience",
    "Ssquad Global"
  ],
  openGraph: {
    title: "Enterprise Risk Management Services | Ssquad Global",
    description: "Identify potential risks, evaluate business dependencies, and develop practical enterprise risk management strategies for operational resilience.",
    url: "https://ssquad.com/services/grc-services/enterprise-risk-management",
    siteName: "Ssquad Global",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://ssquad.com/services/grc-services/enterprise-risk-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
