"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function GrcServicesPage() {
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
        title="Governance, Risk and Compliance Services" 
        subtitle="Transform regulatory complexity into competitive advantage. Deploy enterprise GRC solutions that streamline governance frameworks, mitigate operational risks, and ensure continuous compliance across all business operations."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Enterprise GRC Excellence"
        title="Comprehensive Governance, Risk and Compliance Solutions Delivered as Managed Services"
        description={`In today's regulatory landscape where compliance violations average $14.8 million in costs, traditional GRC approaches create operational friction and audit fatigue. Our governance risk and compliance solutions deliver integrated protection designed around regulatory requirements, risk mitigation strategies, and governance frameworks—addressing the complex needs of modern enterprises operating across multiple jurisdictions and industry standards.

Ssquad's GRC specialists deploy unified governance frameworks that strengthen compliance posture while enhancing operational efficiency. We rapidly assess, design, and manage managed GRC services that serve as comprehensive shields for regulatory operations—seamlessly integrated into business processes without compromising productivity or strategic initiatives.`}
        points={[
          { title: "Enterprise GRC Solutions", icon: "ph-shield-check" },
          { title: "Managed GRC Services", icon: "ph-chart-bar" },
          { title: "Predictive Compliance", icon: "ph-brain" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="What We Offer"
        subtitle="Uncompromising GRC design focused entirely on regulatory excellence while maintaining operational agility and business growth."
        eyebrow="GRC Solutions"
        solutions={[
          { 
            title: "Enterprise GRC Solutions", 
            description: "From policy development to audit management, our governance risk and compliance solutions ensure regulatory adherence, risk mitigation, and governance excellence across all business operations.",
            icon: "ph-file-text",
            features: [
              "Policy Management & Automation",
              "Regulatory Compliance Monitoring",
              "Risk Assessment Frameworks",
              "Audit Trail Management"
            ]
          },
          { 
            title: "Managed GRC Services", 
            description: "Governance engineered for modern enterprises. Our managed GRC services streamline compliance processes and risk management to directly elevate both regulatory posture and operational efficiency.",
            icon: "ph-shield-check",
            features: [
              "Continuous Compliance Monitoring",
              "Risk Management Automation",
              "Regulatory Change Management",
              "Governance Framework Implementation"
            ]
          },
          { 
            title: "Cross-Industry Compliance Excellence", 
            description: "Deploy consistent governance risk and compliance solutions across multiple jurisdictions, industry standards, and regulatory frameworks without compromising business agility or compliance effectiveness.",
            icon: "ph-globe-hemisphere-west",
            features: [
              "Multi-Regulatory Compliance",
              "Industry-Specific Frameworks",
              "Global Governance Standards",
              "Unified Reporting Dashboards"
            ]
          },
          { 
            title: "Embedded Intelligence & Predictive Compliance", 
            description: "AI-powered enterprise GRC solutions that adapt to regulatory changes, guaranteeing proactive compliance management and continuous risk optimization through our comprehensive GRC service provider capabilities.",
            icon: "ph-brain",
            features: [
              "Predictive Risk Analytics",
              "Automated Compliance Scoring",
              "Regulatory Intelligence Updates",
              "Dynamic Policy Adjustment"
            ]
          }
        ]}
      />
      
      <GlobalIndustriesSection 
        title="Industries We Protect"
        description="Delivering governance risk and compliance solutions tailored for organizations operating in highly regulated environments with complex compliance requirements."
        industries={[
          { name: 'FINANCIAL SERVICES', icon: 'ph-bank' },
          { name: 'HEALTHCARE', icon: 'ph-heartbeat' },
          { name: 'GOVERNMENT', icon: 'ph-buildings' },
          { name: 'MANUFACTURING', icon: 'ph-factory' },
          { name: 'ENERGY & UTILITIES', icon: 'ph-lightning' }
        ]}
      />

      <ServiceCTA />


    </main>
  );
}
