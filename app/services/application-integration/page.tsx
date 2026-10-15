"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function AppIntegrationPage() {
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
        title="Application Integration Services" 
        subtitle="Unify your digital ecosystem. Eradicate data silos and orchestrate seamless interoperability across cloud and legacy infrastructure."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Ecosystem Synchronization"
        title="Unify Systems. Streamline Workflows. Maximize Business Velocity."
        description={`In today's complex IT environments, enterprise scale is often restricted by fragmented software. Businesses relying on disconnected, siloed applications suffer from data latency, operational friction, and costly inefficiencies. Our Application Integration services fuse your disparate technology layers into a single, high-velocity operational engine.

We deploy robust middleware and API architectures to orchestrate seamless data exchange between your internal systems, third-party SaaS vendors, and expansive cloud platforms—ensuring total agility and smarter, real-time decision-making for your enterprise.`}
        points={[
          { title: "Enterprise System Integration", icon: "ph-building" },
          { title: "Cloud & Hybrid Connectivity", icon: "ph-cloud-network" },
          { title: "Real-Time Data Streaming", icon: "ph-database" },
          { title: "Middleware & ESB Solutions", icon: "ph-arrows-left-right" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="What We Deliver"
        eyebrow="Seamless Connectivity"
        subtitle="Architectural solutions designed to forge unbreakable links across your IT landscape."
        solutions={[
          { 
            title: "Core System Integration", 
            description: "Synchronize massive data flows across your ERP, CRM, HR, and finance mainframes to secure a consolidated, real-time operational view.",
            icon: "ph-cpu",
            features: [
              "ERP/CRM Synchronization",
              "Legacy System Bridging",
              "Data Consistency Enforcement"
            ]
          },
          { 
            title: "Hybrid Cloud Orchestration", 
            description: "Seamlessly bind elastic cloud-based applications with rigid on-premise infrastructure for high-performance hybrid operations.",
            icon: "ph-cloud-arrow-up",
            features: [
              "Public/Private Convergence",
              "Multi-Cloud Routing",
              "Secure Tunneling"
            ]
          },
          { 
            title: "API & Middleware Engineering", 
            description: "Design custom API gateways and deploy robust Enterprise Service Bus (ESB) architectures for structured, scalable data routing.",
            icon: "ph-plugs-connected",
            features: [
              "Custom API Development",
              "MuleSoft / Boomi Integration",
              "Microservices Orchestration"
            ]
          },
          { 
            title: "Real-Time Synchronization", 
            description: "Eliminate batch-processing delays. Stream continuous, real-time telemetry across your enterprise to authorize instantaneous business intelligence.",
            icon: "ph-clock-counter-clockwise",
            features: [
              "Event-Driven Architecture",
              "Kafka Data Streaming",
              "Instant BI Analytics"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
