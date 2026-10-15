"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudSecurityPage() {
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
        title="Cloud Security" 
        subtitle="Safeguard your elastic infrastructure. Deploy continuous posture management and real-time threat detection across multi-cloud environments."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Proactive Defense"
        title="Protecting Your Cloud Environment With Comprehensive Security"
        description={`As organizations migrate to distributed cloud platforms, securing multi-tenant environments becomes paramount to protect sensitive data and maintain mission-critical continuity. Our Cloud Security solutions deliver robust, end-to-end protection tailored specifically to your unique architecture—whether public, private, or hybrid workloads.

The shift to elastic computing introduces new threat vectors, including misconfigurations and evolving ransomware. Without embedded security measures, organizations risk severe financial and reputational damage. We integrate high-fidelity defense protocols seamlessly into your cloud operations.`}
        points={[
          { title: "Identity & Access Management (IAM)", icon: "ph-fingerprint" },
          { title: "Data Protection & Encryption", icon: "ph-lock-key" },
          { title: "Cloud Security Posture Management", icon: "ph-shield-check" },
          { title: "Secure DevOps (DevSecOps)", icon: "ph-brackets-curly" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our Cloud Security Architecture"
        eyebrow="Robust Defense"
        subtitle="End-to-end protection designed for the complexity of modern multi-cloud workloads."
        solutions={[
          { 
            title: "Identity & Access Management", 
            description: "Control who can access your cloud resources with granular permissions and multi-factor authentication to prevent unauthorized entry.",
            icon: "ph-users",
            features: [
              "Zero-Trust Access Controls",
              "Privileged Access Management",
              "Federated Single Sign-On"
            ]
          },
          { 
            title: "Cloud Posture Management", 
            description: "Continuously assess and remediate dangerous cloud misconfigurations and compliance gaps across your infrastructure.",
            icon: "ph-chart-line-up",
            features: [
              "Automated Configuration Audits",
              "Drift Detection",
              "Compliance Benchmarking"
            ]
          },
          { 
            title: "Threat Detection & Response", 
            description: "Leverage AI-powered telemetry and analytics to detect suspicious lateral movement and respond instantly.",
            icon: "ph-radar",
            features: [
              "Cloud-Native SIEM Integration",
              "Behavioral Threat Analytics",
              "Automated Incident Response"
            ]
          },
          { 
            title: "Secure DevOps Pipeline", 
            description: "Integrate security directly into your CI/CD pipelines with automated vulnerability scanning and code analysis.",
            icon: "ph-code",
            features: [
              "Infrastructure as Code Scanning",
              "Container Vulnerability Checks",
              "Shift-Left Security Protocols"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
