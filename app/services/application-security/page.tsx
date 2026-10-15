"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import OverviewSection from '@/app/components/services/app-security/OverviewSection';
import ImperativeSection from '@/app/components/services/app-security/ImperativeSection';
import SolutionsGrid from '@/app/components/services/app-security/SolutionsGrid';
import ProviderSelection from '@/app/components/services/app-security/ProviderSelection';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function ApplicationSecurityPage() {
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
      <AppServiceHeader 
        title="Application Security" 
        subtitle="Comprehensive protection for your software lifecycle. Secure your applications from code development to cloud deployment."
        breadcrumbs={[]} 
      />

      <OverviewSection />
      <ImperativeSection />
      <SolutionsGrid />
      
      <ServiceCTA />
      
      <section className="bg-slate-50 relative z-10 pb-0">
        <ProviderSelection />
      </section>



      <GlobalIndustriesSection />
    </main>
  );
}
