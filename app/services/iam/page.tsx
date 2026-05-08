"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceFeatureGrid from '@/app/components/services/shared/ServiceFeatureGrid';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function IamSolutionsPage() {
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
        title="Identity And Access Management (IAM) Solutions" 
        subtitle="Enforce Zero-Trust architecture. Deploy granular access controls, identity governance, and biometric authentication for the modern borderless enterprise."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Identity Governance"
        title="Secure Identity and Access Management Solutions"
        description={`Identity and Access Management (IAM) is a critical security framework that ensures the right individuals have the right access to the right resources at the right time. By managing identities and enforcing granular controls, IAM protects your enterprise against unauthorized access and credential-based threats.

Our premium IAM solutions integrate behavioral analytics and automated identity governance to safeguard data across cloud and hybrid environments—streamlining user provisioning while maintaining absolute compliance and security posture.`}
        points={[
          { title: "Centralized Identity Management", icon: "ph-users" },
          { title: "Unified SaaS/PaaS Application Access", icon: "ph-cloud-check" },
          { title: "Real-time Access Analytics", icon: "ph-chart-line-up" },
          { title: "Automated Anomaly Detection", icon: "ph-shield-warning" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Why IAM Is Critical For Modern Cybersecurity"
        eyebrow="The Identity Imperative"
        subtitle="Protect against credential-based attacks with dynamic identity intelligence."
        solutions={[
          { 
            title: "Expanding Attack Surfaces", 
            description: "With 81% of breaches involving compromised credentials, modern IAM relies on robust passwordless controls and MFA to neutralize risks.",
            icon: "ph-scan",
            features: [
              "Multi-Factor Authentication (MFA)",
              "Passwordless Secure Access",
              "Credential Compromise Mitigation"
            ]
          },
          { 
            title: "Cloud Security Imperative", 
            description: "Ensure consistent and hardened security policies across decentralized public cloud environments and SaaS applications.",
            icon: "ph-cloud-warning",
            features: [
              "Federated Identity Models",
              "Cloud App Protection",
              "SaaS Identity Governance"
            ]
          },
          { 
            title: "Compliance Requirements", 
            description: "Automate adherence to regulations like GDPR, HIPAA, and SOX with robust access control reporting and continuous audits.",
            icon: "ph-certificate",
            features: [
              "Regulatory Audit Reporting",
              "Access Certification Workflows",
              "Data Privacy Enforcement"
            ]
          },
          { 
            title: "Digital Transformation Challenges", 
            description: "Enable secure access for modern workforces operating from any location, bridging the gap of traditional boundary-based security perimeters.",
            icon: "ph-devices",
            features: [
              "Zero-Trust Network Access",
              "Remote Workforce Security",
              "Hybrid Environment Support"
            ]
          }
        ]}
      />

      <ServiceFeatureGrid 
        title="Key Components Of Effective IAM Solutions"
        bgColor="white"
        columns={2}
        cards={[
          { title: "Identity Governance And Administration", points: ["Automated user lifecycle management", "Role-based access control (RBAC)", "Access certification and attestation", "Separation of duties enforcement"] },
          { title: "Privileged Access Management", points: ["Administration of privileged credentials", "Just-in-time access provisioning", "Session monitoring and recording", "Play synchronization prevention"] },
          { title: "Adaptive Authentication", points: ["Risk-based multi-factor authentication", "Context-aware access policies", "Behavioral biometrics", "Passwordless authentication options"] },
          { title: "Access Management", points: ["Single sign-on (SSO) for enterprise apps", "Federation standards support (SAML, OAuth)", "API access security", "Microservices authentication"] }
        ]}
      />

      <ServiceFeatureGrid 
        title="Selecting The Right IAM Provider"
        subtitle="When evaluating identity and access management providers, consider:"
        bgColor="slate"
        columns={2}
        cards={[
          { title: "Preventive Capabilities", points: ["Multi-factor authentication methods", "Privileged access security", "Adaptive authentication intelligence"] },
          { title: "Deployment Flexibility", points: ["Cloud, on-premise, and hybrid options", "Microservices architecture support", "Legacy system compatibility"] },
          { title: "Management Features", points: ["Centralized policy administration", "Automated user lifecycle management", "Comprehensive auditing and reporting"] },
          { title: "Compliance Support", points: ["Pre-built compliance frameworks", "Access certification workflows", "Audit-ready reporting"] },
          { title: "Vendor Expertise", points: ["Years in IAM market", "Implementation experience", "Customer support quality"] }
        ]}
      />

      <ServiceCTA />
      



      <GlobalIndustriesSection />
    </main>
  );
}
