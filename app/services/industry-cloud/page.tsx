"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function IndustryCloudPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    reveals.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(index * 40, 300)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      <AppServiceHeader 
        title="Industry Cloud Solutions" 
        subtitle="Sector-specific architecture. Deploy tailored cloud platforms engineered to dominate the exact operational and regulatory demands of your industry."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Specialized Frameworks"
        title="Bespoke Cloud Platforms Designed For Total Industry Dominance"
        description={`Generic infrastructure often limits your competitive velocity. Industry Cloud solutions deliver specialized architectures built to meet the distinct operational workflows, extreme compliance standards, and rigorous data challenges of your specific market sector for long-term growth.

By fusing hyperscale cloud capabilities with domain expertise, Ssquad engineers platforms for healthcare, finance, manufacturing, and retail. These architectures arrive pre-loaded with native applications and tailored AI analytics—drastically accelerating your time-to-market and operational efficiency.`}
        points={[
          { title: "Native Sector Functionality", icon: "ph-bank" },
          { title: "Pre-Configured Compliance", icon: "ph-shield-check" },
          { title: "Accelerated Time-to-Market", icon: "ph-rocket" },
          { title: "Integrated Partner Ecosystems", icon: "ph-plugs-connected" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="The Industry Cloud Advantage"
        eyebrow="Targeted Optimization"
        subtitle="Shatter generic limitations with hyper-focused cloud architectures designed for zero friction."
        solutions={[
          { 
            title: "Pre-Built Native Functionality", 
            description: "Deploy environments actively pre-configured with the exact specialized tools, protocols, and workflows required to dominate your sector's operational processes.",
            icon: "ph-puzzle-piece",
            features: [
              "Sector-Specific APIs",
              "Pre-loaded Workflows",
              "Domain Analytics"
            ]
          },
          { 
            title: "Automated Governance & Compliance", 
            description: "Eradicate audit anxiety. Our industry clouds possess built-in, unyielding compliance frameworks (HIPAA, PCI-DSS, GDPR) that autonomously enforce security controls.",
            icon: "ph-certificate",
            features: [
              "Automated Auditing",
              "Data Sovereignty Control",
              "Zero-Trust Architecture"
            ]
          },
          { 
            title: "Accelerated Time-to-Market", 
            description: "Eliminate years of costly customization. We deploy comprehensive, ready-to-use digital blueprints that radically accelerate enterprise digital transformation.",
            icon: "ph-trend-up",
            features: [
              "Rapid Blueprint Deployment",
              "Reduced CapEx",
              "Instant Operational Readiness"
            ]
          },
          { 
            title: "Integrated Vertical Ecosystems", 
            description: "Plug directly into an expansive network of curated technology partners, specialized SaaS vendors, and native data providers fully tailored to your industry.",
            icon: "ph-share-network",
            features: [
              "B2B App Marketplaces",
              "Third-Party Interoperability",
              "Seamless Vendor Bridging"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
