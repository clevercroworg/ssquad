"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudOperationsPage() {
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
        title="Cloud Operations & AIOps" 
        subtitle="Automate your cloud lifecycle. Deploy predictive analytics and intelligent operations to achieve self-healing infrastructure at enterprise scale."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Intelligent Infrastructure"
        title="Unleashing Agility And Resilience Across Your Cloud Ecosystem"
        description={`In today's digital era, cloud infrastructure is the engine that powers innovation, scalability, and agility. From AI and machine learning to advanced analytics and DevOps, modern businesses rely on mature, cloud-native operations to stay competitive and remain future-ready for their customers.

Ssquad's Cloud Operations services offer a comprehensive approach to managing public, private, and hybrid cloud environments. We deliver fully automated, full-stack cloud ops that ensure your infrastructure is always performing at its best—secure, cost-efficient, and dynamically aligned with business loads.`}
        points={[
          { title: "Predictive Analytics & AIOps", icon: "ph-robot" },
          { title: "Intelligent Workload Placement", icon: "ph-chart-polar" },
          { title: "DevOps & Container Orchestration", icon: "ph-hard-drives" },
          { title: "Real-time Monitoring & Self-Healing", icon: "ph-activity" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Next-Generation Cloud Management at Scale"
        eyebrow="AIOps & Automation"
        subtitle="Transform passive infrastructure into predictive, self-optimizing ecosystems."
        solutions={[
          { 
            title: "Full-Stack Lifecycle Management", 
            description: "Seamlessly manage IaaS, PaaS, and cloud-native frameworks across your entire ecosystem, from initial deployment to legacy modernization.",
            icon: "ph-arrows-clockwise",
            features: [
              "IaaS & PaaS Optimization",
              "Microservices Integration",
              "Zero-Downtime Updates"
            ]
          },
          { 
            title: "AIOps & Intelligent Automation", 
            description: "Leverage machine learning to automate routine tasks, detect hidden anomalies, and trigger self-healing protocols before performance degrades.",
            icon: "ph-cpu",
            features: [
              "Predictive Fault Detection",
              "Automated Remediation",
              "Telemetry Analytics"
            ]
          },
          { 
            title: "Generative AI Integration", 
            description: "Embed advanced AI models seamlessly into your cloud operations, transforming raw data into actionable insights for the business layer.",
            icon: "ph-sparkle",
            features: [
              "LLM Infrastructure Support",
              "Vertex AI / Bedrock Tuning",
              "Automated FinOps"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
