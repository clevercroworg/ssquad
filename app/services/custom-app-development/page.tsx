"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CustomAppDevelopmentPage() {
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
        title="Custom Application Development" 
        subtitle="Build bespoke digital architecture. Engineer scalable, agile, and high-performance applications designed specifically for your operational realities."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Bespoke Software"
        title="Tailored Software Solutions For Unique Business Needs"
        description={`In today's hyper-competitive digital landscape, off-the-shelf software often compromises agility. Our Custom Application Development capabilities deliver zero-compromise ecosystems designed strictly around your proprietary business logic, operational challenges, and unique growth trajectory.

Ssquad's elite engineering squads build software that transcends generic functionality. We rapidly prototype, develop, and deploy cloud-native applications that serve as foundational engines for your enterprise digital transformation—securely embedded into your existing technology stack.`}
        points={[
          { title: "End-to-End Build & Deployment", icon: "ph-code" },
          { title: "UX/UI Strategy & Design", icon: "ph-pen-nib" },
          { title: "Cross-Platform Delivery", icon: "ph-devices" },
          { title: "Enterprise API Integrations", icon: "ph-plugs-connected" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="What We Offer"
        eyebrow="Custom Engineering"
        subtitle="Uncompromising software design focused entirely on competitive market advantages."
        solutions={[
          { 
            title: "End-To-End Platform Build", 
            description: "From rapid prototyping to production deployment, we govern the entire SLDC ensuring aggressive speed, supreme quality, and absolute transparency.",
            icon: "ph-terminal-window",
            features: [
              "Full-Stack Development",
              "Agile Methodology",
              "Cloud-Native Pipelines"
            ]
          },
          { 
            title: "Business-Driven Architecture", 
            description: "Applications engineered strictly around your workflows. We automate critical tasks to directly elevate enterprise productivity.",
            icon: "ph-buildings",
            features: [
              "Workflow Automations",
              "Domain-Driven Design",
              "Data Visualization"
            ]
          },
          { 
            title: "Omnichannel Delivery", 
            description: "Deploy robust application experiences consistently across mobile, web, and internal desktop ecosystems.",
            icon: "ph-device-mobile",
            features: [
              "React Native & Flutter",
              "Progressive Web Apps",
              "Responsive UI/UX"
            ]
          },
          { 
            title: "Embedded Security & Scale", 
            description: "Security and scalability are shift-led into the architecture, guaranteeing regulatory compliance and friction-less growth.",
            icon: "ph-shield-check",
            features: [
              "DevSecOps Integration",
              "Dynamic Auto-Scaling",
              "ISO/GDPR Compliance"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
