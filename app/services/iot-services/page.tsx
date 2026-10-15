"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function IotServicesPage() {
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
        title="IoT Services & Edge Computing" 
        subtitle="Digitize the physical domain. Deploy intelligent sensor networks to extract real-time telemetry and automate global operations."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Connected Ecosystems"
        title="Transform Physical Assets Into Intelligent Data Streams"
        description={`The Internet of Things (IoT) has irreversibly blurred the line between the physical and digital domains. Modern enterprises require more than just connectivity—they require intelligent, autonomous ecosystems capable of processing massive telemetry streams at the extreme edge of the network.

Ssquad engineers deploy high-performance IoT architectures that network disparate sensors and industrial machinery. By aggregating real-time data from the physical world, we empower organizations to predict equipment failures, automate massive workflows, and extract unprecedented operational intelligence.`}
        points={[
          { title: "Industrial IoT (IIoT)", icon: "ph-factory" },
          { title: "Smart City Infrastructure", icon: "ph-buildings" },
          { title: "Edge Analytics Processing", icon: "ph-cpu" },
          { title: "Automated Telemetry", icon: "ph-broadcast" }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Our IoT Integration Capabilities"
        eyebrow="Connected Intelligence"
        subtitle="Unleashing unprecedented operational oversight through massive, interconnected sensor grids."
        solutions={[
          { 
            title: "Industrial Power Management", 
            description: "Optimize the generation, distribution, and consumption of electrical power via smart telemetry grids. We deploy connected sensors to actively monitor industrial machinery, predict load demands, and autonomously orchestrate energy-saving protocols.",
            icon: "ph-lightning",
            features: [
              "Predictive Load Balancing",
              "Sub-meter Telemetry",
              "Automated HVAC Control"
            ]
          },
          { 
            title: "Smart Waste Management", 
            description: "Revolutionize municipal logistics via data-driven waste intelligence. We embed connected spatial sensors directly into infrastructure to track fill levels in real-time—dynamically recalculating collection routes to drastically slash fuel CapEx.",
            icon: "ph-recycle",
            features: [
              "Real-Time Fill Sensors",
              "Dynamic Route AI",
              "Sustainability Compliance"
            ]
          },
          { 
            title: "Predictive Asset Tracking", 
            description: "Command total visibility over your physical supply chain. Utilizing advanced RFID, GPS, and low-power long-range (LoRa) networks to secure high-value assets and predict exactly when machinery will fail.",
            icon: "ph-map-pin-line",
            features: [
              "LoRaWAN Asset Tracking",
              "Predictive Maintenance",
              "Global Fleet Telemetry"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
