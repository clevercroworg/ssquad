"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CybersecurityConsultingPage() {
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
        title="Cybersecurity Consulting Services" 
        subtitle="Transform security challenges into strategic advantages. Deploy expert cybersecurity advisory services that strengthen defense postures, optimize security investments, and build resilient cyber frameworks across your enterprise."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Strategic Security Excellence"
        title="Comprehensive Cybersecurity Consulting Services for Enterprise Transformation"
        description={`In today's threat landscape where 83% of organizations lack adequate cybersecurity strategies, traditional security approaches create gaps and inefficiencies. Our cybersecurity consulting company delivers managed cybersecurity consulting services designed around strategic risk assessment, security architecture optimization, and comprehensive defense planning—addressing the $4.45 million average cost of inadequate security strategies.

Ssquad's cybersecurity advisory services experts deploy strategic security frameworks that strengthen organizational resilience while maximizing security ROI. We rapidly assess, strategize, and implement cybersecurity consulting provider solutions that serve as comprehensive blueprints for security transformation—seamlessly integrated into business objectives without compromising operational efficiency or growth initiatives.`}
        points={[
          { title: "Strategic Security Planning", icon: "ph-strategy" },
          { title: "Managed Consulting Services", icon: "ph-handshake" },
          { title: "Strategic Innovation", icon: "ph-lightbulb" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="What We Offer"
        subtitle="Uncompromising cybersecurity consulting design focused entirely on strategic security excellence while delivering measurable business value and risk reduction."
        eyebrow="Consulting Solutions"
        solutions={[
          { 
            title: "Cybersecurity Consulting Company Expertise", 
            description: "From strategy development to implementation guidance, our cybersecurity advisory services ensure comprehensive security transformation, risk mitigation, and strategic alignment across all business operations and technology domains.",
            icon: "ph-certificate",
            features: [
              "Strategic Security Planning",
              "Risk Assessment & Analysis",
              "Security Architecture Design",
              "Technology Selection Guidance"
            ]
          },
          { 
            title: "Managed Cybersecurity Consulting Services", 
            description: "Consulting engineered for continuous improvement. Our managed cybersecurity consulting services provide ongoing strategic guidance and implementation support to directly elevate both security posture and business resilience.",
            icon: "ph-arrows-clockwise",
            features: [
              "Continuous Strategic Guidance",
              "Implementation Support",
              "Security Program Optimization",
              "Ongoing Risk Management"
            ]
          },
          { 
            title: "Cross-Industry Security Expertise", 
            description: "Deploy consistent cybersecurity consulting provider solutions across multiple industries, regulatory environments, and technology platforms without compromising strategic effectiveness or compliance requirements.",
            icon: "ph-globe",
            features: [
              "Industry-Specific Expertise",
              "Regulatory Compliance Guidance",
              "Technology-Agnostic Consulting",
              "Scalable Security Strategies"
            ]
          },
          { 
            title: "Embedded Intelligence & Strategic Innovation", 
            description: "AI-powered cybersecurity consulting company capabilities that adapt to emerging threats, guaranteeing forward-thinking security strategies and continuous optimization through our comprehensive cybersecurity advisory services approach.",
            icon: "ph-rocket",
            features: [
              "Threat Intelligence Integration",
              "Emerging Technology Assessment",
              "Strategic Innovation Planning",
              "Continuous Strategy Evolution"
            ]
          }
        ]}
      />
      
      <GlobalIndustriesSection 
        title="Industries We Protect"
        description="Delivering cybersecurity consulting services tailored for organizations requiring strategic security transformation and expert guidance across complex threat landscapes."
        industries={[
          { name: 'FINANCIAL SERVICES', icon: 'ph-bank' },
          { name: 'HEALTHCARE', icon: 'ph-heartbeat' },
          { name: 'GOVERNMENT', icon: 'ph-buildings' },
          { name: 'MANUFACTURING', icon: 'ph-factory' },
          { name: 'TECHNOLOGY', icon: 'ph-cpu' }
        ]}
      />

      <ServiceCTA />


    </main>
  );
}
