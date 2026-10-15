"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function AuxiliaryServicesPage() {
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
        title="Auxiliary Services" 
        subtitle="Operational continuity. Elite technical support and specialized contact center solutions designed to eliminate enterprise friction."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Specialized Operations"
        title="Complementary Support Designed To Accelerate Core Objectives"
        description={`As a premier global IT Solutions provider, S-squad Global has identified a critical spectrum of IT-Enabled Services (ITES) necessary to guarantee absolute operational continuity for enterprise clients. Operating under our Auxiliary Services division, these specialized capabilities act as a seamless extension of your internal teams.

We provide highly scalable technical support and rapid on-site intervention frameworks, empowering your engineering cores to remain focused on strategic business innovation while we systematically manage and dismantle daily operational friction for your modern business ecosystem.`}
        points={[
          { title: "Tier 1-3 Contact Centers", icon: "ph-headset" },
          { title: "On-Site Hardware Intervention", icon: "ph-wrench" },
          { title: "Remote Technical Audits", icon: "ph-monitor" },
          { title: "Rapid Break-Fix Dispatch", icon: "ph-lightning" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our Specialized Auxiliary Operations"
        eyebrow="Operational Support"
        subtitle="Uncompromising B2B and consumer support architectures designed for infinite scalability."
        solutions={[
          { 
            title: "Contact Center Services (CCS)", 
            description: "Deploy world-class technical support teams. We handle everything from Tier-1 triage to complex multi-tier architectural support, radically elevating your Customer Satisfaction (CSAT) scores.",
            icon: "ph-phone-call",
            features: [
              "24/7 Global Coverage",
              "Tier 1-3 Escalation Ops",
              "Multi-Channel Support"
            ]
          },
          { 
            title: "On-Site Support Operations (OSS)", 
            description: "Instantaneous physical intervention. Our elite field engineers deploy directly to your geographical nodes to install, maintain, and secure complex hardware systems in both consumer and B2B environments.",
            icon: "ph-truck",
            features: [
              "Rapid Dispatch Frameworks",
              "Hardware Installation",
              "Guaranteed SLAs"
            ]
          },
          { 
            title: "Remote Technical Triage", 
            description: "Eliminate costly downtime with our remote engineering command centers. We securely access your infrastructure to diagnose, patch, and repair software anomalies instantaneously.",
            icon: "ph-broadcast",
            features: [
              "Zero-Trust Remote Access",
              "Instant Diagnostics",
              "Automated Patching"
            ]
          },
          { 
            title: "Emergency Break-Fix Services", 
            description: "When catastrophic hardware failure occurs, our break-fix response teams deploy immediately with required components to ensure zero lasting operational blackout.",
            icon: "ph-warning-circle",
            features: [
              "Catastrophic Failure Response",
              "Component Supply Chain",
              "Emergency Uptime Restoration"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
