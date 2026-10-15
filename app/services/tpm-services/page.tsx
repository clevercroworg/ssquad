"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function TPMPage() {
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
        title="Third-Party Maintenance (TPM)" 
        subtitle="Sever vendor lock-in. Radically extend hardware lifespans and obliterate OEM maintenance costs with our vendor-agnostic defense frameworks."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Asset Lifespan Optimization"
        title="Maximize Operational Velocity, Slash OEM Budgets"
        description={`OEM maintenance contracts are notoriously exorbitant, restrictive, and engineered to force premature infrastructure upgrades. Ssquad’s Third-Party Maintenance (TPM) services shatter these commercial constraints, offering a hyper-flexible, cost-effective alternative to monopolistic OEM support for your enterprise.

We empower organizations to maintain critical server, storage, and networking ecosystems far beyond End-of-Life dictates—extending operational continuity while optimizing your IT fiscal parameters and ensuring your hardware continues to perform at peak efficiency.`}
        points={[
          { title: "Multi-Vendor Agnostic Support", icon: "ph-infinity" },
          { title: "Post-EOL Hardware Lifeline", icon: "ph-heartbeat" },
          { title: "Proactive NOC Monitoring", icon: "ph-activity" },
          { title: "Rapid Parts Dispatch", icon: "ph-rocket" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="The Ssquad TPM Advantage"
        eyebrow="Uncompromising Maintenance"
        subtitle="Surgical maintenance operations designed to keep your physical infrastructure running flawlessly."
        solutions={[
          { 
            title: "Comprehensive Hardware Defense", 
            description: "Deploy ironclad coverage matrices for high-tier servers, enterprise storage arrays, and robust networking backbones spanning dozens of disparate manufacturers.",
            icon: "ph-hard-drives",
            features: [
              "Server & Storage Support",
              "Network Chassis Defense",
              "Unified SLA Contracts"
            ]
          },
          { 
            title: "Aggressive Cost Arbitrage", 
            description: "Realize immense cost reductions against bloated OEM contracts. Experience absolute hardware dominance without ever compromising on critical repair quality.",
            icon: "ph-currency-dollar",
            features: [
              "Slash OpEx Budgets",
              "Eradicate Forced Upgrades",
              "Transparent Pricing"
            ]
          },
          { 
            title: "Rapid Tactical Resolution", 
            description: "When silicon fails, we strike. Gain direct access to our dedicated 24/7 technical desk and elite field engineers for immediate part extraction and replacement.",
            icon: "ph-wrench",
            features: [
              "Global Logistics Chain",
              "4-Hour Response Times",
              "On-Site Field Engineering"
            ]
          },
          { 
            title: "Proactive Uptime Optimization", 
            description: "We don't wait for failures. We execute rigorous health diagnostics, firmware patching, and aggressive preventative maintenance to guarantee maximum uptime.",
            icon: "ph-shield-check",
            features: [
              "Predictive Diagnostics",
              "Firmware Optimization",
              "Routine Health Audits"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
