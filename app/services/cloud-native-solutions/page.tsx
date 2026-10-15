"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudNativePage() {
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
        title="Cloud Native Solutions" 
        subtitle="Engineer for infinite scale. Harness container orchestration, serverless microservices, and automated CI/CD pipelines to build elastic, resilient platforms."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Modern Architecture"
        title="Unlock Unprecedented Agility With Cloud Native Engineering"
        description={`In today's hyper-accelerated digital marketplace, legacy monolithic architectures are obsolete. Cloud native engineering transforms how software is conceptualized, deployed, and scaled. We architect applications from the ground up to be intrinsically elastic, highly resilient, and capable of instantaneous scaling to meet volatile market demands.

By leveraging microservices, continuous integration pipelines, and serverless compute, our approach strips away monolithic bottlenecks—drastically accelerating release velocity while minimizing operational overhead for your enterprise digital platforms.`}
        points={[
          { title: "Microservices Architecture", icon: "ph-tree-structure" },
          { title: "Container Orchestration", icon: "ph-hard-drives" },
          { title: "Serverless Computing", icon: "ph-lightning" },
          { title: "Automated CI/CD Pipelines", icon: "ph-git-branch" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our Cloud Native Solutions"
        eyebrow="Modern Engineering"
        subtitle="Harness the raw power of the cloud through advanced architectural patterns."
        solutions={[
          { 
            title: "Microservices Architecture", 
            description: "Deconstruct brittle monoliths into agile, API-first microservices that enable independent scaling and asynchronous deployment.",
            icon: "ph-tree-structure",
            features: [
              "API Gateway Integration",
              "Domain-Driven Design",
              "Service Mesh Implementation"
            ]
          },
          { 
            title: "Container Orchestration", 
            description: "Standardize application environments and eliminate 'works on my machine' issues with enterprise-grade Kubernetes clustering.",
            icon: "ph-hard-drives",
            features: [
              "Docker Containerization",
              "Kubernetes Cluster Setup",
              "Auto-Scaling Workloads"
            ]
          },
          { 
            title: "Serverless Computing", 
            description: "Eliminate infrastructure management overhead and optimize OpEx with highly elastic, event-driven serverless architectures.",
            icon: "ph-lightning",
            features: [
              "AWS Lambda / Azure Functions",
              "Event-Driven Architectures",
              "Consumption-based Scaling"
            ]
          },
          { 
            title: "Automated CI/CD Pipelines", 
            description: "Achieve continuous delivery with rigorous automated testing pipelines that push code to production with zero friction.",
            icon: "ph-git-merge",
            features: [
              "Zero-Downtime Deployments",
              "Automated Regression Testing",
              "Infrastructure as Code (IaC)"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
