"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function ApiDevelopmentPage() {
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
        title="API Development & Integration" 
        subtitle="Forge hyper-connected ecosystems. Architect secure, high-velocity APIs to unify platforms, automate workflows, and accelerate scalable innovation."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Ecosystem Connectivity"
        title="Build Seamless Connectivity. Unlock New Possibilities."
        description={`In today’s accelerated digital ecosystem, APIs are the foundational backbone of modern, interconnected systems. They empower disparate applications, global platforms, and IoT edge devices to communicate instantaneously, share telemetry securely, and scale effortlessly. At Ssquad, we engineer custom API ecosystems that transform isolated silos into unified, high-velocity operational engines.

Whether you're developing a flagship digital product, bridging legacy core systems to the cloud, or integrating complex third-party vendor platforms, our architecture guarantees frictionless, high-throughput, and rigorously secure data exchanges.`}
        points={[
          { title: "Custom API Engineering", icon: "ph-brackets-curly" },
          { title: "Enterprise Integrations", icon: "ph-plugs-connected" },
          { title: "API Strategy & Governance", icon: "ph-strategy" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our API Engineering Services"
        eyebrow="API Architecture"
        subtitle="Uncompromising connectivity solutions designed to securely scale your enterprise architecture."
        solutions={[
          { 
            title: "Custom API Development", 
            description: "Engineer resilient RESTful, GraphQL, and SOAP interfaces designed to handle extreme scale and high transaction velocities.",
            icon: "ph-code",
            features: [
              "REST & GraphQL APIs",
              "Zero-Trust Access Control",
              "Lifecycle & Version Management"
            ]
          },
          { 
            title: "Enterprise Integration Services", 
            description: "Eradicate data silos by seamlessly stitching together best-in-class SaaS platforms, cloud infrastructure, and legacy core systems.",
            icon: "ph-arrows-merge",
            features: [
              "Salesforce, SAP, AWS Integrations",
              "Microservices Orchestration",
              "Legacy System Bridging"
            ]
          },
          { 
            title: "API Consulting & Strategy", 
            description: "Develop a hardened API-first architecture strategy focused on security posture, developer experience (DX), and monetization.",
            icon: "ph-map-trifold",
            features: [
              "API-First Master Planning",
              "Performance Tuning",
              "OpenAPI Documentation"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
