"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudDataMigrationPage() {
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
        title="Cloud Data Migration" 
        subtitle="Accelerate your digital transition. Seamlessly transfer massive enterprise datasets with zero-downtime and uncompromised integrity."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Data Modernization"
        title="Seamlessly Transition To Modern Cloud Data Ecosystems"
        description={`Legacy systems inevitably limit agility, scalability, and modernization. At Ssquad, we help businesses move beyond outdated infrastructures with secure, efficient, and strategic cloud data migration and modernization services that lay the foundation for your data-driven transformation.

Whether you are migrating on-premises databases to the cloud or transforming your analytics architecture, our experts guide you through every step—ensuring minimal disruption and maximum business value for your modern digital enterprise.`}
        points={[
          { title: "Cloud Database Migration", icon: "ph-database" },
          { title: "Data Platform Modernization", icon: "ph-cloud-arrow-up" },
          { title: "Data Governance & Security", icon: "ph-shield-check" },
          { title: "Performance Tuning", icon: "ph-gauge" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our Migration & Modernization Solutions"
        eyebrow="Data Transformation"
        subtitle="End-to-end execution methodologies designed to minimize operational friction and maximize ROI."
        solutions={[
          { 
            title: "Cloud Data Migration", 
            description: "Seamlessly transition your structured and unstructured data from legacy systems to leading cloud providers (AWS, Azure, GCP).",
            icon: "ph-cloud-arrow-up",
            features: [
              "Zero-Downtime Replication",
              "Schema Conversion",
              "Heterogeneous Database Migration"
            ]
          },
          { 
            title: "Data Platform Modernization", 
            description: "Re-architect monolithic data environments into elastic, cloud-native lakes optimized for real-time analytics and scalable AI/ML.",
            icon: "ph-cpu",
            features: [
              "Cloud-Native Data Lakes",
              "Real-time Data Streaming",
              "Serverless Architecture"
            ]
          },
          { 
            title: "End-To-End Strategy Execution", 
            description: "Assess your current topology, design a tailored roadmap, and manage the complete pilot-to-production lifecycle.",
            icon: "ph-strategy",
            features: [
              "Workload Dependency Mapping",
              "Risk Mitigation Planning",
              "Automated Validation"
            ]
          },
          { 
            title: "Data Governance & Tuning", 
            description: "Enforce strict compliance protocols during transition and tune workloads post-migration for peak cost-efficiency.",
            icon: "ph-shield-check",
            features: [
              "Continuous Data Integrity",
              "Encryption at Rest & Transit",
              "FinOps Cost Optimization"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
