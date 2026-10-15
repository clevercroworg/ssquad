"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ContactCTASection from '@/app/components/sections/ContactCTASection';

export default function TermsPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <InnerHeader 
        title="Terms of Service" 
        subtitle="The standard terms and conditions for engaging with Ssquad Global services."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Service', href: '/terms' }
        ]}
      />

      <section className="py-20 lg:py-24 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="reveal prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-10">
            Last Updated: March 30, 2026
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">1. Acceptance of Terms</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">2. Use License</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on Ssquad Global's website for personal, non-commercial transitory viewing only.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-8">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display;</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
            <li>Remove any copyright or other proprietary notations from the materials.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">3. Disclaimer</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The materials on Ssquad Global's website are provided on an 'as is' basis. Ssquad Global makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">4. Limitations</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            In no event shall Ssquad Global or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ssquad Global's website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">5. Governing Law</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            These terms and conditions are governed by and construed in accordance with the laws of Singapore and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </section>

      <ContactCTASection />
    </main>
  );
}
