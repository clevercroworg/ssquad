"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function QuantumSafeCybersecurityPage() {
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
        title="Quantum-Safe Cybersecurity Services" 
        subtitle="Security that survives the quantum revolution. Engineer post-quantum cryptographic frameworks that protect against Q-Day threats while maintaining seamless enterprise operations across the 2030+ quantum computing era."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Quantum-Safe Security"
        title="Protection Designed for the Post-Quantum Era"
        description={`In today's threat landscape where adversaries are harvesting encrypted data for future quantum decryption, traditional cryptography creates a ticking time bomb. Our Quantum-Safe Cybersecurity Services deliver quantum-resistant protection designed around NIST-approved post-quantum algorithms, addressing the inevitable obsolescence of RSA and ECC encryption by 2030.

Ssquad's quantum security experts build defense systems that future-proof your digital assets while maintaining operational continuity. We rapidly assess, design, and deploy quantum-resistant frameworks that serve as unbreakable shields for enterprise operations—seamlessly integrated into existing infrastructure without compromising the performance that drives business success.`}
        points={[
          { title: "Risk Assessment", icon: "ph-shield-check" },
          { title: "Post-Quantum Architecture", icon: "ph-hard-drives" },
          { title: "Cross-Platform Readiness", icon: "ph-devices" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="What We Offer"
        subtitle="Uncompromising quantum-safe design focused entirely on enterprise continuity and measurable cryptographic resilience."
        eyebrow="Quantum Solutions"
        solutions={[
          { 
            title: "Cryptographic Risk Assessment & Migration", 
            description: "From vulnerability analysis to deployment, we address cryptographic, operational, regulatory, and technical factors ensuring maximum protection, minimal disruption, and absolute quantum resistance.",
            icon: "ph-magnifying-glass",
            features: [
              "Quantum Risk Profiling",
              "Harvest-Now-Decrypt-Later Threat Detection",
              "Cryptographic Estate Assessment",
              "Continuous Quantum Monitoring Programs"
            ]
          },
          { 
            title: "Post-Quantum Cryptographic Architecture", 
            description: "Security engineered around quantum-resistant algorithms. We eliminate cryptographic vulnerabilities while addressing the 100% certainty of quantum computing threats to directly elevate both protection and operational resilience.",
            icon: "ph-cpu",
            features: [
              "NIST PQC Standards Implementation",
              "Hybrid Classical-Quantum Cryptography",
              "Zero-Disruption Migration",
              "Performance-Optimized Design"
            ]
          },
          { 
            title: "Cross-Platform Quantum Readiness", 
            description: "Deploy consistent quantum-safe experiences across mobile, desktop, cloud, and IoT environments that align with enterprise operational requirements and regulatory mandates.",
            icon: "ph-globe-hemisphere-west",
            features: [
              "Unified Quantum Protection",
              "Seamless Multi-Environment Security",
              "Regulatory-Compliant Interfaces"
            ]
          },
          { 
            title: "Embedded Quantum Intelligence & Analytics", 
            description: "AI and machine learning shift-left into quantum security architecture, guaranteeing personalized protection and continuous adaptation to evolving quantum threat landscapes.",
            icon: "ph-brain",
            features: [
              "Quantum Threat AI Integration",
              "Dynamic Cryptographic Adjustment",
              "Predictive Quantum Risk Modeling"
            ]
          }
        ]}
      />
      
      <GlobalIndustriesSection 
        title="Industries We Protect"
        description="Delivering quantum-safe cybersecurity services tailored for organizations where long-term data protection and regulatory compliance are mission-critical."
        industries={[
          { name: 'FINANCIAL SERVICES', icon: 'ph-bank' },
          { name: 'HEALTHCARE', icon: 'ph-heartbeat' },
          { name: 'GOVERNMENT', icon: 'ph-buildings' },
          { name: 'MANUFACTURING', icon: 'ph-factory' },
          { name: 'TELECOMMUNICATIONS', icon: 'ph-broadcast' }
        ]}
      />

      <ServiceCTA />


    </main>
  );
}
