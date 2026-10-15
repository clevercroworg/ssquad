"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import AboutSection from '@/app/components/company/AboutSection';
import SolutionsApproachSection from '@/app/components/company/SolutionsApproachSection';
import DiversitySection from '@/app/components/company/DiversitySection';
import LeadershipSection from '@/app/components/company/LeadershipSection';
import ContactCTASection from '@/app/components/sections/ContactCTASection';

export default function CompanyPage() {
  useEffect(() => {
    // Re-initialize intersection observer for standard reveals
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
    <main className="bg-white">
      <InnerHeader 
        title="About Us" 
        breadcrumbs={[]} 
      />

      <AboutSection />
      <SolutionsApproachSection />
      <DiversitySection />
      <LeadershipSection />
      
      {/* Global CTA at the very end to capture leads */}
      <ContactCTASection />
      
    </main>
  );
}
