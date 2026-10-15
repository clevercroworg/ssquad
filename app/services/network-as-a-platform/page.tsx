"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function NaaPPage() {
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
        title="Network As A Platform (NaaP)" 
        subtitle="Programmable, intelligent transport. Evolve your network from a passive conduit into an automated, service-aware driver of enterprise agility."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Network Evolution"
        title="The Intelligent, Programmable Network Foundation"
        description={`Network as a Platform (NaaP) is the definitive paradigm shift in enterprise telecommunications. The network is no longer a passive transport layer—it is an intelligent, highly programmable, and dynamically service-aware foundation. This evolution transforms rigid infrastructure into a strategic enabler that natively delivers absolute business agility and boundless innovation.

At its core, NaaP leverages advanced Software-Defined Networking (SDN) and deep telemetry APIs to expose the network as a fully programmable platform. It is capable of real-time service deployment and security enforcement, ensuring your enterprise remains connected and secure in an increasingly complex digital world.`}
        points={[
          { title: "Software-Defined Routing", icon: "ph-graph" },
          { title: "API-Driven Architecture", icon: "ph-plugs-connected" },
          { title: "Zero-Touch Automation", icon: "ph-lightning" },
          { title: "AI-Augmented Telemetry", icon: "ph-brain" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="The NaaP Strategic Advantage"
        eyebrow="Agile Infrastructure"
        subtitle="Unleashing the future of agile, smart, and highly monetizable network architectures."
        solutions={[
          { 
            title: "Dynamic Automation & Intelligence", 
            description: "Harness AI telemetry and policy-driven orchestration to automatically adapt to network conditions—rerouting traffic and mitigating outages instantly without human intervention.",
            icon: "ph-cpu",
            features: [
              "Self-Healing Tents",
              "Automated Rerouting",
              "AI Traffic Prediction"
            ]
          },
          { 
            title: "API-driven Service Deployment", 
            description: "Ditch manual CLI configurations. Empower applications to interface directly with the network via unified APIs to request dynamic bandwidth and enforce security on the fly.",
            icon: "ph-code",
            features: [
              "Programmable Interfaces",
              "Instant Provisioning",
              "Dynamic QoS Scaling"
            ]
          },
          { 
            title: "Value-Added Monetization", 
            description: "Service providers can radically expand revenue boundaries by exposing core network capabilities (like location intelligence or edge computing) to 3rd party enterprise developers.",
            icon: "ph-currency-dollar",
            features: [
              "API Monetization",
              "Edge Compute Access",
              "B2B Ecosystems"
            ]
          },
          { 
            title: "Strategic Digital Transformation", 
            description: "Reimagine the network as a dynamic product. NaaP is the ultimate accelerant for edge computing, 5G deployments, and next-generation IoT matrices.",
            icon: "ph-rocket",
            features: [
              "5G Integration",
              "IoT Backhaul Ready",
              "Cloud-Native Core"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
