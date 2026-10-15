"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function HybridCloudPage() {
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
        title="Distributed & Hybrid Cloud" 
        subtitle="Unrestrained operational flexibility. Architect a unified fabric across public clouds, private infrastructure, and edge endpoints."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Hybrid Architecture"
        title="Absolute Flexibility, Performance, And Control"
        description={`In today's complex IT landscape, a rigid, one-size-fits-all cloud architecture is a severe operational liability. Enterprises demand the dynamic agility of public cloud environments alongside the ironclad control of private infrastructure. Distributed and Hybrid Cloud solutions deliver this precise equilibrium.

At Ssquad, we engineer sophisticated cloud fabrics that allow workloads to securely traverse the optimal infrastructure—optimizing for speed, sovereignty, and absolute cost efficiency without vendor lock-in, ensuring your enterprise remains resilient and agile in any environment.`}
        points={[
          { title: "Hybrid Cloud Fabrics", icon: "ph-cloud-network" },
          { title: "Distributed Edge Enablement", icon: "ph-broadcast" },
          { title: "Zero-Trust Interoperability", icon: "ph-shield-check" },
          { title: "Centralized Orchestration", icon: "ph-faders" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our Hybrid Cloud Capabilities"
        eyebrow="Distributed Frameworks"
        subtitle="Engineering resilient infrastructure that intelligently bridges local and global systems."
        solutions={[
          { 
            title: "Hybrid Cloud Architecture", 
            description: "Deploy an integrated cloud topology connecting isolated on-premises hardware with hyperscale public platforms (AWS, Azure, GCP).",
            icon: "ph-cloud-check",
            features: [
              "Secure VPC Peering",
              "Direct Cloud Connect",
              "Unified IAM Policies"
            ]
          },
          { 
            title: "Distributed Edge Computing", 
            description: "Push computational power directly to the network edge, minimizing data latency and enforcing strict local compliance mandates.",
            icon: "ph-waves",
            features: [
              "Edge Node Deployment",
              "Local Data Sovereignty",
              "Ultra-Low Latency Ops"
            ]
          },
          { 
            title: "Centralized Orchestration", 
            description: "Regain command over sprawling infrastructure via a single-pane-of-glass governance model that governs workloads and FinOps.",
            icon: "ph-crosshair",
            features: [
              "Multi-Cloud Dashboards",
              "Automated FinOps",
              "Workload Optimization"
            ]
          },
          { 
            title: "Cloud-Native & Legacy Coexistence", 
            description: "Modernize at your own trajectory. We meticulously integrate containerized microservices alongside entrenched legacy mainframes.",
            icon: "ph-arrows-merge",
            features: [
              "Legacy Mainframe APIs",
              "Container Orchestration",
              "Staggered Modernization"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
