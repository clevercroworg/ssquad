"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function HumanCentricSecurityPage() {
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
        title="Human-Centric Cybersecurity Solutions" 
        subtitle=">_Security that adapts to people, not the other way around. Prioritize user experience while maintaining protection against human-centric breaches."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Human-Centric Security"
        title="Security Designed Around People, Not Just Systems"
        description={`In today's threat landscape where employees often take high-risk actions, traditional security creates friction. Our Human-Centric Solutions deliver zero-friction protection designed around user behavior and workflow realities—directly addressing the massive costs of employee-initiated breaches.

Ssquad's behavioral security experts build defense systems that enhance productivity while strengthening protection. We rapidly deploy adaptive frameworks that serve as invisible shields for your enterprise operations—seamlessly integrated without compromising the human element that drives success.`}
        points={[
          { title: "Human Risk Management (HRM)", icon: "ph-users" },
          { title: "Security Awareness & Training", icon: "ph-graduation-cap" },
          { title: "Behavioral Security Analytics", icon: "ph-chart-line-up" },
          { title: "Friction-Free Authentication", icon: "ph-fingerprint" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="What We Offer"
        eyebrow="Human Risk Assurance"
        subtitle="Uncompromising security design focused entirely on human usability and measurable behavior change."
        solutions={[
          {
            title: "Human Risk Assessment & Mitigation",
            description: "From behavioral analysis to deployment, we address social, economic, technological, and environmental factors ensuring maximum adoption, minimal resistance, and absolute effectiveness.",
            icon: "ph-shield-check",
            features: [
              "Behavioral Risk Profiling",
              "Insider Threat Detection",
              "Cultural Security Assessment",
              "Continuous Monitoring Programs"
            ]
          },
          {
            title: "Adaptive Security Architecture",
            description: "Security engineered around how people actually work. We eliminate friction while addressing the 74% of breaches with human elements to directly elevate both protection and productivity.",
            icon: "ph-git-branch",
            features: [
              "Workflow-Integrated Security",
              "Context-Aware Controls",
              "User-Friendly Interfaces",
              "Productivity-First Design"
            ]
          },
          {
            title: "Cross-Platform Human Experience",
            description: "Deploy consistent security experiences across mobile, desktop, and cloud environments that align with natural human instincts and behaviors.",
            icon: "ph-devices",
            features: [
              "Unified User Experience",
              "Seamless Multi-Device Security",
              "Intuitive Security Interfaces"
            ]
          },
          {
            title: "Embedded Intelligence & Behavior Analytics",
            description: "AI and machine learning shift-left into security architecture, guaranteeing personalized protection and continuous adaptation to human behavior patterns.",
            icon: "ph-brain",
            features: [
              "Behavioral AI Integration",
              "Dynamic Risk Adjustment",
              "Predictive Human Risk Modeling"
            ]
          }
        ]}
      />

      <ServiceCTA />
      
      <GlobalIndustriesSection />
    </main>
  );
}
