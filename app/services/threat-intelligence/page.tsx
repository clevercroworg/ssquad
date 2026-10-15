"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewCards from '@/app/components/services/shared/ServiceOverviewCards';
import ServiceFeatureGrid from '@/app/components/services/shared/ServiceFeatureGrid';
import ServiceSolutionsGrid from '@/app/components/services/shared/ServiceSolutionsGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';

import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function ThreatIntelligencePage() {
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
        title="Threat Intelligence And Analytics" 
        subtitle="Transform raw data into tactical foresight. Proactively disrupt advanced adversaries before they breach your perimeter."
        breadcrumbs={[]} 
      />

      <ServiceOverviewCards 
        eyebrow="Predictive Intelligence"
        title="Elevating Cyber Defense Through Deep Analytics"
        description={`Threat Intelligence involves collecting and correlating global data about emerging risks, attacker methodologies, and system vulnerabilities. It helps organizations understand adversary behavior and anticipate incoming attack vectors.

By utilizing high-fidelity intelligence, businesses can proactively defend against sophisticated cyberattacks, improve security posture, and respond to incidents with surgical precision—detecting danger before it impacts mission-critical systems.`}
        points={[
          { title: "Identification of advanced attacker end points", icon: "ph-crosshair" },
          { title: "Plays role against attacker attacks", icon: "ph-shield-warning" },
          { title: "Contextual indicators to employ software", icon: "ph-code" },
          { title: "Strategic for physical threat actor vectors", icon: "ph-globe-hemisphere-east" }
        ]}
      />

      <ServiceFeatureGrid 
        title="Why Threat Intelligence Matters"
        subtitle="It equips businesses with actionable information to anticipate threats, understand their intelligence, services, vulnerabilities, and improve defenses against new threats."
        bgColor="slate"
        columns={2}
        cards={[
          { title: "Proactive Threat Prevention", description: "Cyber security threat intelligence provides early warning of cyber threats before an attack occurs or compromises." },
          { title: "Enhanced Detection Capabilities", description: "Integrating threat intelligence with security management tools helps improve correlation and indicators of compromise." },
          { title: "Strategic Risk Management", description: "Understanding the threat landscape helps plan lifecycle practice security investments based on actual risks." },
          { title: "Compliance Requirements", description: "Many regulatory environments mandate robust intelligence logic structures for comprehensive security programs." }
        ]}
      />

      <ServiceSolutionsGrid 
        title="Key Components Of Threat Intelligence"
        eyebrow="Intelligence Framework"
        subtitle="Harness deep-web telemetry and advanced analytics to anticipate coordinated cyber attacks."
        solutions={[
          {
            title: "Strategic Intelligence",
            description: "Gain high-level visibility into emerging global cyber risks and adversary motivations.",
            icon: "ph-globe",
            features: [
              "Geopolitical Risk Analysis",
              "Industry-Specific Threat Trends",
              "Long-Term Adversary Forecasts"
            ]
          },
          {
            title: "Tactical Intelligence",
            description: "Understand specific attacker methodologies to actively fortify mission-critical defenses.",
            icon: "ph-crosshair",
            features: [
              "Adversary TTPs Profiling",
              "Advanced Malware Analysis",
              "Zero-Day Vulnerability Insights"
            ]
          },
          {
            title: "Operational Intelligence",
            description: "Track active threat campaigns and intercept hostile adversary communications.",
            icon: "ph-radar",
            features: [
              "Dark Web Reconnaissance",
              "Active Campaign Tracking",
              "Indicators of Compromise (IOCs)"
            ]
          },
          {
            title: "Technical Intelligence",
            description: "Automate machine-level threat blocking with high-fidelity, real-time indicator feeds.",
            icon: "ph-cpu",
            features: [
              "Real-time Malware Signatures",
              "Dynamic IP/Domain Blacklists",
              "Predictive Behavioral Models"
            ]
          }
        ]}
      />

      <ServiceFeatureGrid 
        title="Selecting A Threat Intelligence Provider"
        subtitle="When evaluating threat intelligence providers, consider:"
        bgColor="slate"
        columns={2}
        cards={[
          { title: "Intelligence Quality", points: ["Relevance to your industry/region", "Accuracy and low false positives", "Actionable insights"] },
          { title: "Delivery Mechanisms", points: ["API integrations", "STIX/TAXII integrations", "Alert formats and timeliness"] },
          { title: "Industry Specialization", points: ["Threat landscapes specifics", "Regional threat coverage", "Compliance alignment"] },
          { title: "Service Features", points: ["Threat intelligence management platform", "Analyst support", "Custom reporting"] },
          { title: "Vendor Reputation", points: ["Track record of success", "Client references", "Independent evaluations"] }
        ]}
      />

      <ServiceCTA />
      


      <GlobalIndustriesSection />
    </main>
  );
}
