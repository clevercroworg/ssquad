"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ContactCTASection from '@/app/components/sections/ContactCTASection';

const industries = [
  {
    id: 'banking',
    title: 'Banking & Financial Services',
    icon: 'ph ph-bank',
    desc: 'Protecting digital banking ecosystems, payment gateways, and core financial systems against sophisticated fraud and nation-state actors.',
    points: [
      'Regulatory compliance (PCI-DSS, SWIFT CSCF)',
      'Fraud detection and prevention',
      'Secure customer identity management',
      'Core system modernization and security'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial',
    icon: 'ph ph-factory',
    desc: 'Securing the convergence of Information Technology (IT) and Operational Technology (OT) to ensure production continuity and supply chain integrity.',
    points: [
      'ICS/SCADA security monitoring',
      'Industrial endpoint protection',
      'Supply chain risk management',
      'Disaster recovery for production lines'
    ]
  },
  {
    id: 'oil-gas',
    title: 'Oil, Gas & Energy',
    icon: 'ph ph-drop',
    desc: 'Reducing cyber risk across critical national infrastructure, remote offshore assets, and highly distributed energy networks.',
    points: [
      'Critical infrastructure protection',
      'Remote asset security monitoring',
      'Threat visibility for legacy OT',
      'Incident response for energy grids'
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    icon: 'ph ph-heartbeat',
    desc: 'Safeguarding sensitive patient health records (PHI) and medical devices while ensuring continuous clinical availability.',
    points: [
      'HIPAA / GDPR data protection',
      'Medical IoT device security',
      'Healthcare cloud migration security',
      'Patient data privacy governance'
    ]
  },
  {
    id: 'insurance',
    title: 'Insurance',
    icon: 'ph ph-shield-check',
    desc: 'Defending policyholder databases and core underwriting systems under strict global regulatory and data privacy frameworks.',
    points: [
      'Policyholder data encryption',
      'Data breach prevention and response',
      'Compliance automation',
      'Identity-first access controls'
    ]
  },
  {
    id: 'public-services',
    title: 'Public Sector & Government',
    icon: 'ph ph-buildings',
    desc: 'Strengthening the cyber resilience of essential citizen services, public infrastructure, and national digital transformations.',
    points: [
      'Digital government security frameworks',
      'Public infrastructure hardening',
      'Sensitive data classification',
      'State-grade threat detection'
    ]
  }
];

export default function IndustriesPage() {
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
    <main className="bg-slate-50 min-h-screen">
      <InnerHeader 
        title="Industry Expertise" 
        subtitle="Specialized security programs designed for the unique operational realities of your sector."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' }
        ]}
      />

      <section className="py-20 lg:py-24">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item, idx) => (
              <article key={item.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-premium reveal flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${idx % 2 === 0 ? 'bg-ssg-red/10 text-ssg-red' : 'bg-ssg-cyber/10 text-ssg-cyber'}`}>
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4">Core Focus Areas</h4>
                  <ul className="space-y-3">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-700">
                        <i className="ph ph-check-circle text-ssg-red mt-0.5 flex-none"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <section className="py-20 lg:py-24 max-w-container mx-auto px-6 lg:px-8 text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 text-ssg-red text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ssg-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ssg-red"></span>
            </span>
            Ready to secure your sector?
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">Global Compliance. Local Resilience.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
            S-squad Global helps enterprises worldwide master the complexity of industry-specific security, 
            empowering you to scale with risk-aligned confidence.
          </p>
          <a href="/contact" className="btn-primary">
            Speak to an Industry Strategist <i className="ph ph-arrow-up-right"></i>
          </a>
        </section>
      </div>

      <ContactCTASection />
    </main>
  );
}
