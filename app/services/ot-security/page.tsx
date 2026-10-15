"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceFeatureGrid from '@/app/components/services/shared/ServiceFeatureGrid';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function OtSecurityPage() {
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
        title="Discover Our OT Security Services" 
        subtitle="Shield your operational technology. Hardened cybersecurity for industrial control systems, manufacturing pipelines, and critical infrastructure."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Industrial Defense"
        title="Industrial OT Security Services"
        description={`OT Security Services are specialized cybersecurity solutions designed to protect Operational Technology within critical industrial environments. These systems control physical operations like manufacturing and energy distribution, yet often rely on legacy protocols that are vulnerable to modern cyber threats.

Our services include risk assessments, network segmentation, and threat detection tailored specifically for industrial contexts. Unlike traditional IT, our OT security measures prioritize operational continuity and safety above all else, ensuring your critical infrastructure remains resilient.`}
        points={[
          { title: "OT Security Assessments", icon: "ph-shield-check" },
          { title: "OT Compliance Assessments", icon: "ph-certificate" },
          { title: "OT Security Consulting", icon: "ph-strategy" }
        ]}
      />

      <ServiceFeatureGrid 
        title="OT Security Assessments"
        subtitle="In today's connected landscape, Operational Technology is more exposed than ever. Our assessments help you identify critical vulnerabilities, mitigate risks, and protect your industrial infrastructure from sophisticated cyber threats."
        bgColor="slate"
        columns={3}
        cards={[
          { title: "Comprehensive Risk Analysis", description: "We perform a deep risk assessment of your OT network architectures, assets, and vulnerabilities." },
          { title: "Threat Detection & Vulnerability Identification", description: "Using advanced threat detection technologies, we pinpoint hidden vulnerabilities before they are exploited." },
          { title: "Compliance & Standards Review", description: "Our assessments map your OT security posture to industry standards like IEC 62443 and NIST." },
          { title: "Actionable Recommendations", description: "Detailed analysis and prioritized action plans to address your unique requirements, enabling you to strengthen operational integrity." },
          { title: "Continuous Improvement", description: "We focus on creating a sustainable monitoring and management framework to maintain optimal system operating levels." }
        ]}
      />

      <ServiceSolutionsGrid 
        title="OT Compliance Assessments"
        subtitle="Ensure Regulatory Alignment and Secure Your Operational Technology Environments against industrial threat actors."
        eyebrow="Regulatory Alignment"
        solutions={[
          { 
            title: "Standards Mapping", 
            description: "We map your current OT security posture against relevant regulations and critical infrastructure frameworks.",
            icon: "ph-map-trifold",
            features: [
              "IEC 62443 Assessment",
              "NIST Framework Alignment",
              "Gap Analysis Scoping"
            ]
          },
          { 
            title: "Policy & Procedure Review", 
            description: "Evaluate the effectiveness of your existing security policies, incident response plans, and governance models.",
            icon: "ph-file-text",
            features: [
              "Incident Response Evaluation",
              "Governance Model Audits",
              "Policy Modernization"
            ]
          },
          { 
            title: "Technical Control Evaluation", 
            description: "Assess critical technical controls such as access management, network segmentation, and patch management.",
            icon: "ph-faders",
            features: [
              "Air-gapped Network Audits",
              "Legacy Patch Management",
              "Access Protocol Review"
            ]
          },
          { 
            title: "Audit Preparation", 
            description: "Ready your staff and complex architectures for rigorous compliance audits and industrial certifications.",
            icon: "ph-check-circle",
            features: [
              "Continuous Readiness Training",
              "Evidence Gathering Automation",
              "Mock Certification Audits"
            ]
          }
        ]}
      />
      
      <ServiceFeatureGrid 
        title="OT Security Consulting"
        subtitle="Our OT Consulting Services provide the expert insights, strategic planning, and technical support you need to protect your operations and advance resilience in a rapidly evolving threat landscape."
        bgColor="slate"
        columns={2}
        cards={[
          { title: "Security Strategy & Roadmap Development", description: "Align your OT security objectives with business goals. We help you develop a comprehensive, long-term security strategy that represents maturity and standard alignment." },
          { title: "Architecture Review & Design", description: "Evaluate and optimize your OT network architecture for security and overall performance. We design segmented secure architectures that limit exposure without disrupting operations." },
          { title: "Risk & Threat Assessments", description: "Identify vulnerabilities and assess real-world threat actors scenarios. Understand specific OT risk maturity environments, providing a realistic, actionable calculation of risk priorities." },
          { title: "Policy & Governance Support", description: "Develop or refine OT security policies, procedures, and governance models to ensure regulatory and cross-platform alignment." },
          { title: "Incident Response Planning", description: "Develop, nature or attach response policies. We help public IT and local network instances standard resolve OT compromises, ensuring rapid recovery and minimal down-time." },
          { title: "Training & Awareness Programs", description: "Educate your teams on best practices for OT cybersecurity, managing internal disruptions and creating a secure aware professional organization." }
        ]}
      />

      <ServiceCTA />
      



      <GlobalIndustriesSection />
    </main>
  );
}
