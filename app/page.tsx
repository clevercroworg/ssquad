"use client";

import { useEffect } from 'react';
import HeroSectionV1 from './components/hero/HeroSectionV1';
import TrustSection from './components/sections/TrustSection';
import SolutionsSection from './components/sections/SolutionsSection';
import StrategicDefenceSection from './components/sections/StrategicDefenceSection';
import QuantumSafeSection from './components/sections/QuantumSafeSection';
import IndustryExpertiseSection from './components/sections/IndustryExpertiseSection';
import PlatformSpotlightSection from './components/sections/PlatformSpotlightSection';
import InsightsSection from './components/sections/InsightsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ContactCTASection from './components/sections/ContactCTASection';

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 } // Trigger when 12% visible
    );

    reveals.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <HeroSectionV1 />
      <TrustSection />
      <SolutionsSection />
      <StrategicDefenceSection />
      <QuantumSafeSection />
      <PlatformSpotlightSection />
      <IndustryExpertiseSection />
      <InsightsSection />
      <CertificationsSection />
      <ContactCTASection />
    </main>
  );
}
