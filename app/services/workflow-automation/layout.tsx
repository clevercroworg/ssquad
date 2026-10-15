import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Workflow Automation Services | RPA & Business Process Automation | Ssquad Global",
  description: "Streamline business processes with workflow automation, RPA, system integration and Power Automate from Ssquad Global to reduce manual work, errors and operational costs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
