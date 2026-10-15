"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function SecurityForAiPage() {
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
      {/* SECTION 1 */}
      <AppServiceHeader 
        title="Cybersecurity for AI Systems" 
        subtitle=">_Protect AI systems from emerging threats with frameworks that safeguard machine learning models and data pipelines against adversarial attacks."
        breadcrumbs={[]} 
      />

      {/* SECTION 2 */}
      <ServiceOverviewCards 
        eyebrow="AI Security"
        title="Cybersecurity Solutions Built for the Age of Artificial Intelligence"
        description={`In today's AI-driven landscape where most organizations deploy machine learning, traditional security falls short. Our AI Solutions deliver comprehensive protection designed around model vulnerabilities and adversarial attacks—addressing urgent detection needs while maintaining model accuracy.

Ssquad's security specialists build defense systems that protect intelligent systems while enhancing productivity. We rapidly deploy AI-native frameworks that serve as adaptive shields for machine learning operations—seamlessly integrated into pipelines without compromising innovation.`}
        points={[
          { title: "AI Model Protection & Governance", icon: "ph-shield-check" },
          { title: "Adversarial Attack Defense", icon: "ph-shield-warning" },
          { title: "Secure AI Data Pipeline", icon: "ph-database" },
          { title: "AI Identity & Access Management", icon: "ph-key" }
        ]}
      />

      {/* SECTION 3 */}
      <ServiceSolutionsGrid 
        title="What We Offer"
        eyebrow="AI Security Frameworks"
        subtitle="Uncompromising AI security design focused entirely on protecting intelligent systems while accelerating threat detection and response."
        solutions={[
          {
            title: "AI Threat Detection & Monitoring",
            description: "Accelerate detection and response with AI-driven security intelligence.",
            icon: "ph-shield-checkered",
            features: [
              "Real-Time Threat Detection & Correlation",
              "AI-Powered Anomaly & Behavior Analysis",
              "Automated Alert Prioritization",
              "Predictive Threat Intelligence"
            ]
          },
          {
            title: "AI-Native Threat Protection",
            description: "From model development to production deployment, we secure AI systems against sophisticated attacks ensuring model integrity, data protection, and absolute security across hybrid cloud environments.",
            icon: "ph-shield-check",
            features: [
              "Model Vulnerability Assessment",
              "Adversarial Defense Systems",
              "AI Attack Simulation",
              "Real-time Threat Monitoring"
            ]
          },
          {
            title: "Accelerated Security Operations",
            description: "Security engineered to optimize analyst productivity. We automate incident responses and provide high-fidelity alerts to directly elevate both AI performance and security team efficiency.",
            icon: "ph-lightning",
            features: [
              "55% Faster Alert Investigation",
              "Automated Incident Response",
              "AI-Powered Risk Analysis",
              "Prioritized Threat Intelligence"
            ]
          },
          {
            title: "Cross-Platform AI Security",
            description: "Deploy consistent security across cloud AI services, edge computing, and enterprise AI environments while maintaining seamless user experience and reducing fraud costs by up to 90%.",
            icon: "ph-devices",
            features: [
              "Multi-Cloud AI Protection",
              "Edge AI Security",
              "Federated Learning Security",
              "Behavioral User Verification"
            ]
          }
        ]}
      />

      {/* SECTION 4 */}
      <GlobalIndustriesSection 
        title="Industries We Protect"
        description="Delivering AI-focused cybersecurity services tailored for organizations deploying mission-critical artificial intelligence systems in high-stakes environments."
        industries={[
          { name: 'FINANCIAL AI TRADING', icon: 'ph-chart-line-up' },
          { name: 'HEALTHCARE AI DIAGNOSTICS', icon: 'ph-heartbeat' },
          { name: 'AUTONOMOUS SYSTEMS', icon: 'ph-robot' },
          { name: 'SMART MANUFACTURING', icon: 'ph-factory' },
          { name: 'GOVERNMENT AI', icon: 'ph-bank' }
        ]}
      />

      {/* SECTION 5 */}
      <ServiceCTA 
        title="Secure Your AI Today"
        description="Get a comprehensive AI security assessment and transform your machine learning operations with AI-native protection frameworks."
        prefixText="we secure your"
        hackingWords={['ARTIFICIAL INTELLIGENCE', 'INTELLIGENT SYSTEMS', 'MACHINE LEARNING', 'NEURAL NETWORKS', 'AUTONOMOUS AGENTS']}
      />
      

    </main>
  );
}
