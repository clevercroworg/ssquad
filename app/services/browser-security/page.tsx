"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function BrowserSecurityPage() {
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
        title="Browser Security as a Service" 
        subtitle="Secure the gateway to your digital world. Deploy enterprise-grade browser protection that shields against web-based threats, malicious downloads, and credential theft across all endpoints and user sessions."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Browser-First Security"
        title="Comprehensive Browser Security Delivered as a Managed Service"
        description={`In today's remote-first landscape where 90% of cyberattacks originate through web browsers, traditional endpoint security misses the primary attack vector. Our managed browser security solution delivers zero trust browser security platform protection designed around actual browsing behavior, malicious site detection, and real-time threat isolation—addressing the $4.35 million average cost of web-based security incidents.

Ssquad's browser security experts deploy cloud-native protection that secures web sessions while maintaining user productivity. We rapidly assess, configure, and manage enterprise browser security service frameworks that serve as invisible shields for web-based operations—seamlessly integrated into daily workflows without compromising browsing experience or business velocity.`}
        points={[
          { title: "Enterprise Browser Security Service", icon: "ph-shield-check" },
          { title: "Zero Trust Browser Security Platform", icon: "ph-lock-key" },
          { title: "Browser Security SASE Integration", icon: "ph-plugs-connected" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="What We Offer"
        subtitle="Uncompromising browser security design focused entirely on protecting web-based activities while maintaining seamless user experience."
        eyebrow="Browser Security Solutions"
        solutions={[
          { 
            title: "Enterprise Browser Security Service", 
            description: "From threat detection to incident response, our managed browser security solution secures all web interactions ensuring malicious site blocking, download protection, and absolute web safety across distributed workforces.",
            icon: "ph-shield-check",
            features: [
              "Real-time Threat Detection",
              "Malicious Site Isolation",
              "Zero-Day Web Protection",
              "Advanced Phishing Defense"
            ]
          },
          { 
            title: "Zero Trust Browser Security Platform", 
            description: "Security engineered for modern work patterns. Our zero trust browser security platform isolates web sessions and protects endpoints to directly elevate both browsing safety and user productivity.",
            icon: "ph-lock-key",
            features: [
              "Remote Browser Isolation",
              "Endpoint Protection",
              "Session Recording & Analysis",
              "Policy-Based Access Control"
            ]
          },
          { 
            title: "Browser Security SASE Integration", 
            description: "Deploy consistent browser security across Windows, Mac, mobile devices, and cloud environments with browser security SASE integration without compromising browsing performance or user experience.",
            icon: "ph-plugs-connected",
            features: [
              "Multi-Device Protection",
              "SASE Architecture Integration",
              "Unified Policy Management",
              "Seamless User Experience"
            ]
          },
          { 
            title: "Embedded Intelligence & Behavioral Analysis", 
            description: "AI-powered managed browser security solution that adapts to user behavior, guaranteeing personalized protection and continuous adaptation to emerging web threats through our enterprise browser security service.",
            icon: "ph-brain",
            features: [
              "Behavioral Web Analytics",
              "Dynamic Risk Assessment",
              "Predictive Threat Intelligence"
            ]
          }
        ]}
      />
      
      <GlobalIndustriesSection 
        title="Industries We Protect"
        description="Delivering browser security services tailored for organizations where web-based activities are critical to business operations and data protection."
        industries={[
          { name: 'FINANCIAL SERVICES', icon: 'ph-bank' },
          { name: 'HEALTHCARE', icon: 'ph-heartbeat' },
          { name: 'GOVERNMENT', icon: 'ph-buildings' },
          { name: 'LEGAL SERVICES', icon: 'ph-scales' },
          { name: 'REMOTE WORKFORCE', icon: 'ph-laptop' }
        ]}
      />

      {/* Reusing existing generic ServiceCTA for Section 5 */}
      <ServiceCTA />


    </main>
  );
}
