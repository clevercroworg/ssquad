import type { Metadata } from 'next';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ContactCTASection from '@/app/components/sections/ContactCTASection';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs } from '@/app/actions/blogActions';
import InsightsClient from './InsightsClient';

export const metadata: Metadata = {
  title: 'Cybersecurity Insights & Security Trends | Ssquad Global',
  description: 'Explore cybersecurity insights, threat trends, security research and expert guidance from Ssquad Global to strengthen enterprise cyber resilience.',
};

export default async function InsightsPage() {
  const insights = await getBlogs();

  return (
    <main className="bg-slate-50 min-h-screen">
      <InnerHeader 
        title="Insights & News" 
        subtitle="Thought leadership, security advisories, and the latest trends from the frontline of global cybersecurity."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' }
        ]}
      />

      <section className="py-20 lg:py-24">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <InsightsClient insights={insights} />

          <div className="mt-16 pt-10 border-t border-slate-200 text-center">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Stay Ahead of the Threat Landscape</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              We regularly publish security research, vulnerability reports, and framework guides to help our community build safer digital environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Subscribe to Advisories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </main>
  );
}
