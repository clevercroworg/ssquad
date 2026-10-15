"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudAssurancePage() {
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
        title="Cloud Assurance Services" 
        subtitle="Fortify your digital operations. Comprehensive verification, compliance, and resilience engineering for mission-critical cloud environments."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Continuous Verification"
        title="Secure, Compliant, And Highly Resilient Cloud Ecosystems"
        description={`In today's digital era, cloud technology is the cornerstone of innovation. From enabling complex AI models to supporting advanced data analytics, the cloud offers powerful velocity that helps organizations scale faster. Yet, dynamic architectures introduce challenges around security, compliance, and operational reliability.

As enterprises scale their cloud adoption, a robust assurance strategy becomes a non-negotiable imperative. Guaranteeing the integrity and hardened security of your cloud environments is vital to protect sensitive data, outmaneuver modern threats, and uphold absolute trust with your customers.`}
        points={[
          { title: "Security Posture Evaluation", icon: "ph-shield-check" },
          { title: "Quality Engineering & Testing", icon: "ph-test-tube" },
          { title: "Risk Management & Readiness", icon: "ph-warning-circle" },
          { title: "Compliance & Governance", icon: "ph-certificate" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our Cloud Assurance Capabilities"
        eyebrow="Operational Integrity"
        subtitle="Uncompromising verification methodologies that guarantee your infrastructure performs flawlessly under stress."
        solutions={[
          { 
            title: "Security Posture Evaluation", 
            description: "Identify complex vulnerabilities and dangerous misconfigurations through continuous cloud telemetry monitoring and automated threat assessments.",
            icon: "ph-crosshair",
            features: [
              "Vulnerability Scanning",
              "Misconfiguration Detection",
              "Penetration Testing"
            ]
          },
          { 
            title: "Compliance & Governance", 
            description: "Automate adherence to stringent industry regulations and standards to ensure your environments are constantly audit-ready.",
            icon: "ph-scroll",
            features: [
              "ISO 27001 / GDPR / HIPAA",
              "Governance Dashboards",
              "Automated Evidence Collection"
            ]
          },
          { 
            title: "Quality Engineering & Testing", 
            description: "Maintain flawless application reliability and extreme performance with comprehensive chaos engineering and load testing.",
            icon: "ph-gauge",
            features: [
              "Chaos Engineering",
              "Automated Load Testing",
              "Resilience Benchmarking"
            ]
          },
          { 
            title: "Incident Readiness & Monitoring", 
            description: "Optimize uptime and detect devastating anomalies within seconds, backed by rigorous incident response frameworks.",
            icon: "ph-activity",
            features: [
              "24/7 Threat Monitoring",
              "Incident Response Playbooks",
              "Disaster Recovery Drills"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
