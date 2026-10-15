"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceFeatureGrid from '@/app/components/services/shared/ServiceFeatureGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function AiCybersecurityPage() {
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
        title="AI-Powered Cybersecurity" 
        subtitle="Deploy autonomous defense matrices. Leverage artificial intelligence to predict, hunt, and neutralize zero-day threats in milliseconds."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Autonomous Defense"
        title="AI-Powered Threat Detection For Real-Time Defense"
        description={`The modern threat landscape has outpaced human operational capacity. Legacy, signature-based approaches are useless against today's polymorphic and fileless attacks. Enterprises require AI-driven strategies that offer real-time correlation, automated disruptions, and predictive threat analytics.

At Ssquad, we deploy Artificial Intelligence and Machine Learning models to revolutionize your security posture—transforming reactive, alert-heavy operations into proactive, intelligent, and infinitely scalable defense systems.`}
        points={[
          { title: "AI-Augmented SOC", icon: "ph-brain" },
          { title: "Predictive Analytics", icon: "ph-trend-up" },
          { title: "Autonomous SOAR", icon: "ph-lightning" },
          { title: "Behavioral Intel (UEBA)", icon: "ph-users" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="The AI Security Advantage"
        eyebrow="Machine Intelligence"
        subtitle="Defend faster and smarter. Elevate your cybersecurity posture beyond human limitations with autonomous detection systems."
        solutions={[
          { 
            title: "Real-Time Threat Telemetry", 
            description: "Instantaneously analyze petabytes of data across endpoints, networks, and cloud perimeters to identify sub-perceptual anomalies and active threats.",
            icon: "ph-radar",
            features: [
              "Sub-Second Detection",
              "Cross-Vector Correlation",
              "Anomaly Identification"
            ]
          },
          { 
            title: "Autonomous Incident Response", 
            description: "Enable superhuman containment speeds. AI-driven playbooks autonomously isolate compromised nodes and neutralize threats before damage occurs.",
            icon: "ph-robot",
            features: [
              "Automated Remediation",
              "Zero-Trust Isolation",
              "Downtime Eradication"
            ]
          },
          { 
            title: "Behavioral Analytics (UEBA)", 
            description: "Obliterate insider threats and hidden APTs by dynamically baselining entity behavior and flagging deviations from established neural models.",
            icon: "ph-user-focus",
            features: [
              "Insider Threat Hunting",
              "Identity Baselines",
              "Contextual Alerting"
            ]
          },
          { 
            title: "Predictive Attacker Profiling", 
            description: "Shift from reactive defense to proactive offense. Utilize deep-learning models to anticipate and intercept breaches before execution.",
            icon: "ph-crystal-ball",
            features: [
              "Zero-Day Prevention",
              "Threat Vector Forecasting",
              "Proactive Hardening"
            ]
          }
        ]}
      />

      <ServiceFeatureGrid 
        title="Our AI-Driven Cybersecurity Offerings"
        bgColor="white"
        columns={3}
        cards={[
          { title: "AI-Augmented SOC", description: "Empower your Security Operations Center with intelligent triage, alert prioritization, and contextual enrichment — reducing noise and boosting analyst productivity." },
          { title: "Threat Intelligence Automation", description: "Leverage AI to aggregate, correlate, and analyze global threat intelligence feeds, identifying Indicators of Compromise (IOCs) with precision." },
          { title: "User & Entity Behavior Analytics (UEBA)", description: "Detect abnormal behavior patterns and potential insider threats using machine learning models trained on your organization's activity baseline." },
          { title: "AI-Powered Endpoint Protection", description: "Protect endpoints with continuous active learning algorithms that detect malware, ransomware, and fileless attacks — even if those have never been seen before." },
          { title: "Advanced Phishing Detection", description: "AI models analyze emails, links, and attachments in real-time to spot spoofing, BEC, and social engineering attempts before they reach users." },
          { title: "Security Orchestration, Automation, And Response (SOAR)", description: "Automate repetitive security tasks and orchestrate complex workflows using AI-driven decision engines." },
        ]}
      />

      <ServiceCTA />
      


      <GlobalIndustriesSection />
    </main>
  );
}
