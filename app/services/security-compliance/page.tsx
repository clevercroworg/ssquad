"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function SecurityCompliancePage() {
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
        title="Security & Compliance Customization" 
        subtitle="Align enterprise architecture with global regulatory frameworks. Rapidly deploy hardened, fully compliant systems."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Holistic Compliance Strategy"
        title="Secure By Design. Compliant By Default"
        description={`In an era where data breaches and regulatory pressures are escalating, application security and compliance are essential. At Ssquad, we specialize in custom security and compliance solutions tailored to your business, ensuring you meet industry regulations and protect your digital assets at every level.

Whether you are building from scratch or enhancing existing systems, our team helps you integrate robust security frameworks and align with global standards such as GDPR, HIPAA, SOC 2, ISO 27001, and PCI-DSS.`}
        points={[
          { title: "Custom Security Implementation", icon: "ph-shield-check" },
          { title: "Compliance Enablement Frameworks", icon: "ph-certificate" },
          { title: "Security Hardening & Monitoring", icon: "ph-radar" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Comprehensive Compliance Frameworks"
        eyebrow="Application Defense"
        subtitle="Empower your enterprise with tailored security implementations that exceed regulatory demands."
        solutions={[
          { 
            title: "Custom Security Architecture", 
            description: "Deploy robust, tailored security frameworks perfectly aligned with your business logic.",
            icon: "ph-shield-check",
            features: [
              "Zero-Trust Identity (IAM)",
              "Granular Access Controls",
              "End-to-End Encryption",
              "Secure API Gateways"
            ]
          },
          { 
            title: "Compliance Enablement", 
            description: "Streamline audit readiness and automate regulatory adherence across your enterprise.",
            icon: "ph-certificate",
            features: [
              "Automated Gap Assessments",
              "Framework Mapping",
              "Continuous Policy Enforcement",
              "Audit Evidence Management"
            ]
          },
          { 
            title: "Active Threat Monitoring", 
            description: "Maintain complete visibility with continuous monitoring and rapid response protocols.",
            icon: "ph-activity",
            features: [
              "Proactive Vulnerability Scans",
              "Enterprise SIEM Integration",
              "Real-time Threat Detection",
              "DevSecOps CI/CD Pipelines"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
