"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function WorkflowAutomationPage() {
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
        title="Workflow Automation" 
        subtitle="Demolish operational bottlenecks. Deploy hyper-intelligent robotic automation to optimize, accelerate, and scale enterprise processes instantly."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Operational Velocity"
        title="Digitize Operations. Eradicate Inefficiency. Accelerate Output."
        description={`In a data-driven enterprise, manual and repetitive processes create friction that chokes productivity and introduces human error. Workflow Automation redefines operational limits by digitizing and autonomously executing critical business logic at machine speed for your organization.

At Ssquad, we deploy highly evolved Robotic Process Automation (RPA) to systematically remove operational bottlenecks. Whether refining HR onboarding or accelerating financial orchestration, our architectures scale flawlessly to drive permanent efficiency and measurable ROI.`}
        points={[
          { title: "Robotic Process Automation", icon: "ph-robot" },
          { title: "Custom Logic Design", icon: "ph-code" },
          { title: "Cross-Platform Interoperability", icon: "ph-plugs-connected" },
          { title: "Real-Time KPI Auditing", icon: "ph-chart-line-up" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our Automation Capabilities"
        eyebrow="Intelligent Processes"
        subtitle="Unleashing software bots and intelligent logic streams to automate extreme-volume workloads."
        solutions={[
          { 
            title: "Robotic Process Automation (RPA)", 
            description: "Deploy highly capable software bots to assume control over high-volume, rule-based tasks. We mimic precise human interactions across legacy systems to execute massive workflows error-free and instantaneously.",
            icon: "ph-robot",
            features: [
              "UiPath / Automation Anywhere",
              "Data Scraping & Entry",
              "24/7 Digital Workforces"
            ]
          },
          { 
            title: "Advanced Workflow Orchestration", 
            description: "Meticulously analyze, deconstruct, and radically re-engineer vast enterprise workflows to decisively remove logistical bottlenecks, slash latencies, and drastically boost throughput.",
            icon: "ph-tree-structure",
            features: [
              "End-to-End Workflow Mapping",
              "Bottleneck Elimination",
              "Logic Stream Deployment"
            ]
          },
          { 
            title: "Deeper Systems Integration", 
            description: "Seamlessly bind isolated CRMs, ERPs, and specialized third-party software layers into unified operations utilizing APIs, Power Automate, and custom scripting architectures.",
            icon: "ph-arrows-merge",
            features: [
              "Microsoft Power Automate",
              "API Flow Connections",
              "Data Synchronization"
            ]
          },
          { 
            title: "Dynamic KPI Telemetry", 
            description: "Implement extremely precise telemetry dashboards to track automated performance output. We execute continuous optimization cycles to guarantee maximum ROI for all logic matrices.",
            icon: "ph-gauge",
            features: [
              "Real-Time Output Dashboards",
              "Predictive Bottlenecking",
              "Continual Process Tuning"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
