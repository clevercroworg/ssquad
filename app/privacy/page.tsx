"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ContactCTASection from '@/app/components/sections/ContactCTASection';

export default function PrivacyPage() {
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
        title="Privacy Policy" 
        subtitle="How we collect, use, and protect your data in accordance with global privacy standards."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '/privacy' }
        ]}
      />

      <section className="py-20 lg:py-24 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="reveal prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-10">
            Last Updated: March 30, 2026
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">1. Introduction</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            S-squad Global ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">2. Information Collection</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We collect information that you provide directly to us, such as:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-8">
            <li>Contact information (name, email, phone number)</li>
            <li>Professional information (company name, job title)</li>
            <li>Information provided in contact forms or inquiries</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">3. How We Use Your Information</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-8">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about services, offers, and news</li>
            <li>Monitor and analyze trends, usage, and activities</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">4. Data Security</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            As a cybersecurity firm, we take data security extremely seriously. We implement robust technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">5. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            If you have any questions about this Privacy Policy, please contact our Data Protection Officer at:
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p className="font-bold text-slate-900">S-squad Global Privacy Team</p>
            <p className="text-slate-600">Email: dpo@ssquad.com</p>
            <p className="text-slate-600">Address: 71 Robinson Rd, Singapore 068895</p>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </main>
  );
}
