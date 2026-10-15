"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceFeatureGrid from '@/app/components/services/shared/ServiceFeatureGrid';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function PenetrationTestingPage() {
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
        title="Penetration Testing Services" 
        subtitle="Pressure-test your architecture. Deploy authorized simulated attacks to uncover critical vulnerabilities before adversaries do."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Offensive Security"
        title="Secure Your Security Reputation"
        description={`Penetration testing involves authorized simulated cyberattacks conducted by security experts to identify vulnerabilities in your systems, networks, and applications before malicious actors can exploit them.

Our services assess your security posture through controlled exploits and social engineering tests. Delivered by certified professionals, we provide actionable insights to strengthen defenses and meet global compliance standards, ensuring proactive risk management and protection against evolving threats.`}
        points={[
          { title: "Vulnerability detection on networks and apps", icon: "ph-scan" },
          { title: "Industry compliance with standards", icon: "ph-certificate" },
          { title: "Validation of current security controls", icon: "ph-shield-check" },
          { title: "Practical remediation recommendations", icon: "ph-wrench" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Red Teaming Simulation Arrays"
        subtitle="Go beyond traditional testing by deploying full-scale, multi-vector attacks to evaluate how your organization detects, responds to, and recovers from relentless cyber threats."
        eyebrow="Advanced Simulation"
        solutions={[
          { 
            title: "Adversary Emulation", 
            description: "Mirror the exact tactics, techniques, and procedures (TTPs) of sophisticated real-world threat actors.",
            icon: "ph-detective",
            features: [
              "APT Group Simulation",
              "Custom Exploit Development",
              "Evasion Technique Testing"
            ]
          },
          { 
            title: "Social Engineering Operations", 
            description: "Expose human vulnerabilities using precision phishing, baiting, and targeted impersonation.",
            icon: "ph-users",
            features: [
              "Spear-Phishing Campaigns",
              "Vishing & Pretexting",
              "Credential Harvesting"
            ]
          },
          { 
            title: "Physical Intrusions", 
            description: "Evaluate the integrity of on-site barriers, facility access controls, and hardware security.",
            icon: "ph-building",
            features: [
              "Facility Breach Testing",
              "Tailgating & Badge Cloning",
              "Rogue Device Deployment"
            ]
          },
          { 
            title: "Blue Team Calibration", 
            description: "Pressure-test your internal security operations center under active, full-scale attack scenarios.",
            icon: "ph-shield-plus",
            features: [
              "Detection Delta Measurement",
              "Incident Response Validation",
              "SIEM Alert Tuning"
            ]
          }
        ]}
      />




      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
