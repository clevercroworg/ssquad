"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function EndUserComputingPage() {
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
        title="End-User Computing" 
        subtitle="Empower your workforce. Deploy zero-friction, highly secure desktop and identity environments to accelerate enterprise productivity."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Workforce Empowerment"
        title="Frictionless Access, Uncompromising Security"
        description={`End User Computing (EUC) is the foundational layer of modern operational velocity. As enterprises shift toward distributed, agile workflows, employees demand instantaneous, secure access to enterprise data and applications—directly from any device, anywhere in the world.

Our EUC frameworks empower your teams to execute at the highest level. By provisioning secure digital workspaces and centralizing device management, we eliminate operational friction and IT bottlenecks, allowing true business innovation to scale unimpeded for your organization.`}
        points={[
          { title: "Rapid Desktop Provisioning", icon: "ph-desktop" },
          { title: "Zero-Trust Identity Control", icon: "ph-fingerprint" },
          { title: "Centralized Remote Mgmt", icon: "ph-broadcast" },
          { title: "Seamless Application Access", icon: "ph-app-window" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our EUC Ecosystem"
        eyebrow="User-Centric Architecture"
        subtitle="Deploying robust, user-friendly architectures engineered for modern distributed workforces."
        solutions={[
          { 
            title: "Desktop Deployment & MDM", 
            description: "Execute centralized provisioning, hyper-secure configuration, and automated fleet monitoring across the entire global device matrix.",
            icon: "ph-devices",
            features: [
              "Zero-Touch Provisioning",
              "Automated Security Patching",
              "Remote Troubleshooting"
            ]
          },
          { 
            title: "Identity & Access Management", 
            description: "Enforce rigorous Zero-Trust architectures governing access to critical digital assets alongside seamless multi-factor authentication (MFA).",
            icon: "ph-identification-badge",
            features: [
              "SSO & MFA Deployment",
              "Role-Based Access Control",
              "Identity Lifecycle Policies"
            ]
          },
          { 
            title: "Enterprise Systems Management", 
            description: "Command absolute oversight over applications and infrastructure via performance telemetry, dynamic tuning, and rapid incident response.",
            icon: "ph-control",
            features: [
              "Fleet Uptime Optimization",
              "Predictive Resolution Systems",
              "Asset Lifecycle Auditing"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
