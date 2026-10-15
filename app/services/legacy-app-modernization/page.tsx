"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function LegacyAppModernizationPage() {
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
        title="Legacy Application Modernization" 
        subtitle="Reverse technical debt. Refactor and replatform outdated monolithic systems into agile, cloud-native architectures."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="System Modernization"
        title="Revitalize Outdated Systems. Defeat Technical Debt."
        description={`Legacy systems inevitably become severe bottlenecks to enterprise innovation, scalability, and security. As market demands accelerate, organizations clinging to aging monolithic applications suffer from compounding operational friction and critical vulnerability exposure.

Ssquad delivers surgical modernization frameworks designed to definitively eliminate technical debt. We don't just upgrade software; we fundamentally re-architect it—transforming rigid, siloed operations into elastic, high-velocity digital assets that drive competitive dominance.`}
        points={[
          { title: "Application Re-Architecting", icon: "ph-building" },
          { title: "Cloud Re-Platforming", icon: "ph-cloud-arrow-up" },
          { title: "Codebase Refactoring", icon: "ph-code" },
          { title: "UI/UX System Refresh", icon: "ph-paint-brush-broad" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our Modernization Execution Paths"
        eyebrow="System Overhaul"
        subtitle="Strategic methodologies deployed to seamlessly advance your legacy infrastructure into the modern era."
        solutions={[
          { 
            title: "Rehosting & Replatforming", 
            description: "Seamlessly lift-and-shift or replatform outdated applications directly into high-performance cloud ecosystems with near-zero downtime.",
            icon: "ph-cloud-check",
            features: [
              "Lift-and-Shift Migration",
              "OS & Framework Patches",
              "Cost-optimized Hosting"
            ]
          },
          { 
            title: "Refactoring & Re-Architecting", 
            description: "Deconstruct fragile monoliths into resilient, decoupled microservices built for absolute scalability and hyper-agility.",
            icon: "ph-tree-structure",
            features: [
              "Microservices Extraction",
              "API-First Design",
              "Containerization"
            ]
          },
          { 
            title: "Deep Code Modernization", 
            description: "Surgically update deprecated libraries, obsolete languages, and inefficient algorithms to obliterate technical debt and secure the codebase.",
            icon: "ph-brackets-curly",
            features: [
              "Language Version Upgrades",
              "Security Debt Remediation",
              "Unit Test Automation"
            ]
          },
          { 
            title: "UI/UX System Transformation", 
            description: "Overhaul antiquated, hostile user interfaces with hyper-modern, accessible, and radically intuitive front-end architectures.",
            icon: "ph-magic-wand",
            features: [
              "React/Next.js Migration",
              "Design System Implementation",
              "Workflow Optimization"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
