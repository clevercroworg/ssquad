"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudConsultingPage() {
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
        title="Cloud Consulting Services" 
        subtitle="Architect your cloud vision. Expert guidance to navigate multi-cloud complexities and build resilient, scalable digital foundations."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Strategic Advisory"
        title="Strategic Guidance For Smarter, Scalable Cloud Solutions"
        description={`Partner with seasoned cloud experts at Ssquad to develop and execute a cloud strategy tailored to your business vision and IT landscape. Whether you are managing a multi-cloud ecosystem or enhancing your performance, our consulting services ensure your environment is optimized, resilient, and future-ready.

Adopting a cloud-first approach is no longer optional—it is a strategic imperative. For IT to meet evolving business demands and for businesses to deliver exceptional customer experiences, the cloud must become a foundational enabler of innovation, agility, and scalability for your enterprise.`}
        points={[
          { title: "Strategic Cloud Planning", icon: "ph-strategy" },
          { title: "Migration Assessment", icon: "ph-magnifying-glass" },
          { title: "Multi-Cloud Optimization", icon: "ph-cloud-network" },
          { title: "Cloud FinOps & Efficiency", icon: "ph-currency-dollar" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="What We Deliver"
        eyebrow="Expert Consulting"
        subtitle="Actionable intelligence to accelerate your cloud transformation journey."
        solutions={[
          { 
            title: "Strategic Cloud Planning", 
            description: "Define a clear cloud roadmap that aligns with your ultimate business objectives and maximizes long-term technological value.",
            icon: "ph-map-trifold",
            features: [
              "Cloud Readiness Assessments",
              "Executive Roadmap Design",
              "Vendor Selection Strategy"
            ]
          },
          { 
            title: "Migration Assessment & Execution", 
            description: "Evaluate architectural readiness, choose the optimal deployment model (public, private, hybrid), and confidently migrate workloads.",
            icon: "ph-rocket",
            features: [
              "Workload Profiling",
              "Risk Mitigation Playbooks",
              "Zero-Downtime Planning"
            ]
          },
          { 
            title: "Multi-Cloud Optimization", 
            description: "Standardize operations across disparate platforms (AWS, Azure, GCP) to enforce compliance and eliminate vendor lock-in.",
            icon: "ph-infinity",
            features: [
              "Platform Interoperability",
              "Cross-Cloud Networking",
              "Unified Governance Model"
            ]
          },
          { 
            title: "Security & Cost Efficiency", 
            description: "Implement zero-trust security policies while utilizing FinOps frameworks to identify waste and dramatically reduce OpEx.",
            icon: "ph-shield-check",
            features: [
              "Regulatory Auditing",
              "FinOps Consumption Tuning",
              "Resource Right-Sizing"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
