import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { managementData } from '@/app/data/management';

export function generateStaticParams() {
  return managementData.map((profile) => ({
    slug: profile.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const profile = managementData.find((p) => p.id === resolvedParams.slug);

  if (!profile) {
    return {
      title: "Leadership Profile | Ssquad Global",
      description: "Learn about the leadership team driving cybersecurity excellence at Ssquad Global.",
    };
  }

  return {
    title: `${profile.name} - ${profile.title} | Ssquad Global`,
    description: profile.bio[0] || `${profile.name} serves as ${profile.title} at Ssquad Global.`,
  };
}

export default async function ManagementProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const profile = managementData.find((p) => p.id === resolvedParams.slug);

  if (!profile) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      {/* Dark background for the transparent navbar */}
      <div className="h-28 lg:h-36 bg-ssg-dark relative overflow-hidden">
        <div className="hero-grid-overlay"></div>
        <div className="hero-glow"></div>
        <div className="hero-network-lines"></div>
      </div>
      
      <section className="pt-12 lg:pt-16 pb-20 lg:pb-28">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column: Image */}
            <div className="lg:w-1/3 shrink-0">
              <div className="sticky top-32">
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative shadow-premium bg-slate-200">
                  <Image 
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                  <span className="font-heading font-bold text-slate-700">Connect With Me:</span>
                  <Link 
                    href={profile.linkedin}
                    className="w-10 h-10 rounded-full bg-[#0a66c2] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-[#0a66c2]/30 transition-all duration-300"
                  >
                    <i className="ph-fill ph-linkedin-logo text-xl"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Bio */}
            <div className="lg:w-2/3">
              <div className="pb-8 border-b border-slate-200 mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 mb-3">
                  {profile.name}
                </h1>
                <p className="text-lg md:text-xl font-medium text-ssg-red">
                  {profile.title}
                </p>
              </div>

              <div className="prose prose-lg prose-slate max-w-none">
                {profile.bio.map((paragraph, index) => (
                  <p key={index} className="text-slate-600 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-16 pt-8 border-t border-slate-200">
                <Link href="/company" className="inline-flex items-center gap-2 text-ssg-red font-bold hover:text-ssg-dark transition-colors group">
                  <i className="ph-bold ph-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                  Back to Leadership Team
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
