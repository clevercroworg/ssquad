"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function InfraManagementPage() {
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
    <main className="bg-white px-0 m-0">
      <AppServiceHeader 
        title="End-To-End IT Infrastructure Management" 
        subtitle="Unify and fortify your operational backbone. Deploy world-class managed infrastructure backed by relentless 24/7 monitoring and engineering."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Managed Infrastructure"
        title="Upgrade Your Operations With Next-Generation Cloud & Hardware Solutions"
        description={`Ssquad Global has operated as the technology partner to over 100 enterprise clients across the APAC region for more than 12 years. We specialize in designing, deploying, and defending end-to-end IT infrastructure matrices. With 10 regional centers across 50+ locations, our engineering presence guarantees uncompromising reach and instantaneous responsiveness.

As cyber-kinetic threats evolve, we empower organizations to remain resilient, compliant, and infinitely scalable for their mission-critical operations. Operating 24/7/365, we relentlessly safeguard the core systems for telecom giants, multi-branch banking institutions, and classified government entities across the globe.`}
        points={[
          { title: "Enterprise Networking", icon: "ph-graph" },
          { title: "Data Center Security", icon: "ph-hard-drives" },
          { title: "Cloud Integration", icon: "ph-cloud-network" },
          { title: "IT Lifecycle Management", icon: "ph-arrows-clockwise" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our Infrastructure Transformation Capabilities"
        eyebrow="Technology Ecosystems"
        subtitle="By leveraging Ssquad's managed engineering teams, enterprises unlock absolute technological superiority without the paralyzing CapEx of internal staffing."
        solutions={[
          { 
            title: "Complex System Integration", 
            description: "Architect, deploy, and meticulously manage complex hardware and software topologies to ensure zero-friction enterprise interoperability.",
            icon: "ph-intersect",
            features: [
              "Hardware/Software Fusion",
              "OEM Vendor Management",
              "Network Topology Design"
            ]
          },
          { 
            title: "Proactive Infrastructure Management", 
            description: "Relentless 24/7 monitoring, preventative maintenance, and aggressive optimization of physical, virtual, and edge environments.",
            icon: "ph-pulse",
            features: [
              "24/7 NOC Monitoring",
              "Predictive Maintenance",
              "Asset Lifecycle Tracking"
            ]
          },
          { 
            title: "Hybrid Cloud Operations", 
            description: "Securely migrate colossal workloads and aggressively manage multi-cloud architectures to exponentially accelerate operational fluidity.",
            icon: "ph-cloud-check",
            features: [
              "Zero-Downtime Migration",
              "Multi-Cloud Orchestration",
              "Workload Right-Sizing"
            ]
          },
          { 
            title: "Outsourced Managed Services", 
            description: "Completely offload your IT operational burden to our elite technical squads, providing ironclad 24/7 incident response and strategic consulting.",
            icon: "ph-headset",
            features: [
              "L1/L2/L3 Engineering Helpdesk",
              "Remote Hands Services",
              "Disaster Recovery Ops"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
