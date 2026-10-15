"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function IntegratedSocPage() {
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
        title="Integrated Security Operations Center Services" 
        subtitle="Unify your security operations across IT and OT environments. Deploy integrated security operations center solutions that converge threat detection, incident response, and security monitoring into a single, powerful defense platform."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Converged Security Excellence"
        title="Comprehensive Integrated Security Operations Center Services for Modern Enterprises"
        description={`In today's hybrid infrastructure landscape where 78% of organizations struggle with security tool sprawl, traditional siloed SOCs miss critical threats spanning IT and OT environments. Our integrated security operations center delivers unified security operations platform protection designed around converged threat detection, cross-domain visibility, and seamless incident response—addressing the $4.88 million average cost of fragmented security operations.

Ssquad's security integration experts deploy converged security operations center services that eliminate blind spots while enhancing threat detection capabilities. We rapidly assess, design, and manage IT OT security integration services that serve as comprehensive shields for hybrid operations—seamlessly integrated across technology domains without compromising operational continuity or security effectiveness.`}
        points={[
          { title: "Integrated SOC", icon: "ph-shield-check" },
          { title: "IT/OT/IoT Integration", icon: "ph-plugs-connected" },
          { title: "Unified Analytics", icon: "ph-chart-line-up" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="What We Offer"
        subtitle="Uncompromising integrated security design focused entirely on unified threat detection while maintaining operational visibility across all technology domains."
        eyebrow="Integrated SOC Solutions"
        solutions={[
          { 
            title: "Integrated Security Operations Center", 
            description: "From threat detection to incident response, our unified security operations platform secures all technology domains ensuring cross-domain visibility, threat correlation, and absolute security coverage across hybrid infrastructures.",
            icon: "ph-shield-check",
            features: [
              "Cross-Domain Threat Detection",
              "Unified Security Analytics",
              "Integrated Incident Response",
              "Comprehensive Asset Visibility"
            ]
          },
          { 
            title: "Converged Security Operations Center Services", 
            description: "Security engineered for modern hybrid environments. Our converged security operations center services eliminate security silos and blind spots to directly elevate both threat detection capabilities and operational security posture.",
            icon: "ph-arrows-merge",
            features: [
              "IT/OT/IoT Integration",
              "Unified Security Dashboards",
              "Cross-Platform Correlation",
              "Automated Response Orchestration"
            ]
          },
          { 
            title: "IT OT Security Integration Services", 
            description: "Deploy consistent security operations across enterprise IT, operational technology, and cloud environments with IT OT security integration services without compromising operational continuity or security effectiveness.",
            icon: "ph-factory",
            features: [
              "Industrial Security Integration",
              "Enterprise IT Protection",
              "Cloud Security Convergence",
              "Unified Policy Management"
            ]
          },
          { 
            title: "Embedded Intelligence & Adaptive Operations", 
            description: "AI-powered integrated security operations center that adapts to hybrid environments, guaranteeing comprehensive threat detection and continuous security optimization through our unified security operations platform capabilities.",
            icon: "ph-brain",
            features: [
              "Behavioral Analytics Integration",
              "Predictive Threat Intelligence",
              "Dynamic Security Orchestration",
              "Continuous Security Optimization"
            ]
          }
        ]}
      />
      
      <GlobalIndustriesSection 
        title="Industries We Protect"
        description="Delivering integrated security operations center services tailored for organizations operating complex hybrid IT/OT environments requiring unified security oversight."
        industries={[
          { name: 'MANUFACTURING', icon: 'ph-factory' },
          { name: 'ENERGY & UTILITIES', icon: 'ph-lightning' },
          { name: 'CRITICAL INFRASTRUCTURE', icon: 'ph-bridge' },
          { name: 'SMART CITIES', icon: 'ph-city' },
          { name: 'INDUSTRIAL AUTOMATION', icon: 'ph-robot' }
        ]}
      />

      <ServiceCTA />


    </main>
  );
}
