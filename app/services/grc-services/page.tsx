"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';

// Shared layout tokens so every section uses the same width, spacing and grid
const SECTION = "py-20 lg:py-28";
const CONTAINER = "max-w-7xl mx-auto px-6 lg:px-8";
const GRID = "flex flex-wrap justify-center gap-6 lg:gap-8";
const COL_3 = "w-full md:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_4rem)/3)]";
const COL_2 = "w-full md:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_2rem)/2)]";

function SectionHeader({ title, intro, lead, dark = false }: { title: string; intro?: string; lead?: string; dark?: boolean }) {
  return (
    <div className="reveal max-w-3xl mx-auto text-center mb-12 lg:mb-16">
      <h2 className={`section-title font-bold text-balance ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      {intro && (
        <p className={`mt-5 text-[1.05rem] lg:text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{intro}</p>
      )}
      {lead && (
        <p className="mt-8 inline-block bg-ssg-red/10 border border-ssg-red/20 text-ssg-red rounded-full px-6 py-2.5 [font-family:var(--font-plus-jakarta),sans-serif] font-semibold text-lg">{lead}</p>
      )}
    </div>
  );
}

interface CardProps {
  title: React.ReactNode;
  description: string;
  icon?: string;
  width: string;
  listItem?: boolean;
}

function Card({ title, description, icon, width, listItem = false }: CardProps) {
  const Wrapper = listItem ? 'li' : 'div';
  const Title = listItem ? 'strong' : 'h3';
  return (
    <Wrapper className={`${width} reveal group bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-ssg-red/20 transition-all duration-300`}>
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-ssg-red text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
          <i className={`ph ${icon}`}></i>
        </div>
      )}
      <Title className="block [font-family:var(--font-plus-jakarta),sans-serif] font-semibold text-lg text-slate-900 leading-snug">{title}</Title>
      <p className="mt-3 text-slate-600 text-[0.95rem] leading-relaxed">{description}</p>
    </Wrapper>
  );
}

const challenges = [
  { icon: "ph-user-circle-gear", title: "Unclear Enterprise Risk Ownership", description: "Nobody is explicitly put in charge, ownership needs to be clearly assigned when a security gap gets flagged, leaving important fixes hanging." },
  { icon: "ph-list-checks", title: "Compliance Gaps", description: "Daily processes, tools, and configurations may fall short of regulatory requirements." },
  { icon: "ph-wrench", title: "Missed Security Maintenance", description: "Over time essential tasks may be neglected by the team such as user permission reviews, log checks, and software updates." },
  { icon: "ph-clock-counter-clockwise", title: "Outdated Enterprise Risk Management Policies", description: "Written manuals describe office routines and security practices that changed years ago." },
  { icon: "ph-folder-open", title: "Audit Preparation Difficulties", description: "Teams lose valuable time pulling evidence and documents together right before an audit." },
  { icon: "ph-eye-slash", title: "Limited Risk Visibility", description: "Keeping track of servers and security will be difficult over the time when business grows." }
];

const consultingServices = [
  { icon: "ph-scales", title: "Regulatory Compliance Consulting Services", description: "Ssquad Global works parallelly with your team to provide comprehensive SOC 2 readiness support, ISO 27001 certification support, and PCI-DSS compliance services support for your applications and IT infrastructure." },
  { icon: "ph-chart-line-up", title: "Enterprise Risk Management Consulting Services", description: "Our Enterprise Risk Management Consulting Services focus on identifying, examining, and managing cybersecurity and technology risks that could affect your organisation." },
  { icon: "ph-magnifying-glass", title: "Evaluating Your Baseline", description: "Our GRC Consulting team examines each and every part of the existing security system and IT infrastructure and ongoing processes of development/deployment so we identify operational blind spots. This helps your core team understand where things stand before making changes." },
  { icon: "ph-file-text", title: "Updating Enterprise Risk Management Internal Policies", description: "Policies that are outdated can create confusion between documented procedures and daily operations. So we pitch and fix it up." },
  { icon: "ph-crosshair", title: "Targeting Real Risks", description: "Every vulnerability carries a different level. We examine your cloud environments, networks, and applications security to highlight security weaknesses that need attention." },
  { icon: "ph-shield-check", title: "Testing Security Defenses", description: "We run manual and automated checks and penetration testing to fix the process and to check whether existing safeguards can withstand potential threats." }
];

const riskAreas = [
  { title: "Spotting Enterprise Risks", description: "Finding software flaws, setting misconfiguration, and spotting out security issues before they cause damage to the IT system." },
  { title: "Risk Impact Analysis", description: "Our GRC consultant analyses how much it will cause to the system in production." },
  { title: "Risk Prioritisation", description: "Identifying issues that need immediate attention based on their potential impact." },
  { title: "Risk Treatment", description: "Checking that the existing system is able to protect the system from existing threats." },
  { title: "Evaluation of Control", description: "Checking whether existing safeguards adequately address identified risks." },
  { title: "Risk Monitoring", description: "Our Enterprise Risk Management system checks ongoing system security and monitoring production grade systems with time to time checks." }
];

const enterpriseSolutions = [
  { icon: "ph-cloud-check", title: "Cloud Security Governance", description: "Moving IT infra to the cloud brings fresh challenges around user permissions, configurations, and data exposed to public networks. We help organizations review cloud security through infrastructure assessments, identity and access checks, and security posture reviews." },
  { icon: "ph-chart-bar", title: "Security Monitoring and Reporting", description: "Security risks do not follow office hours. Our Compliance Solutions handles a day to day activity, our automated system will generate timely reports and run systems over the time." },
  { icon: "ph-lock-key", title: "Data Protection and Sovereignty", description: "User data protection should be business at most priority, our team will help in reviewing the protection of data." },
  { icon: "ph-certificate", title: "ISO 27001, SOC 2 & PCI-DSS Support in Framework", description: "Central bank mandates and the modern enterprise system should maintain standard global security standards. Ssquad Global's GRC practice supports your team through structured gap analysis, control implementation, and audit documentation for ISO 27001, SOC 2 Type II, and PCI-DSS 4.0." }
];

const approachSteps = [
  { title: "Examine Requirement", description: "Ssquad reviews your technology environment, business priorities, security concerns, and applicable compliance requirements." },
  { title: "Review Practices", description: "We identify relevant security practices required, governance processes, and technology gaps management measures to understand your current position." },
  { title: "Identifying and Prioritising Vulnerability", description: "Our GRC team review assessment findings, identify gaps that need awareness, and prioritise breach according to tickets that will lead to major business impact over the time." },
  { title: "Recommending Improvements", description: "Based on identifying issues we measure vulnerability and we prioritise it based on risk and we build a complete road map to solve business requirements." },
  { title: "Supporting Ongoing Improvement", description: "Where required, GRC consultants bring up implementation, security monitoring, and continuous improvement of cybersecurity controls." }
];

const industries = [
  { icon: "ph-bank", title: "Banking & Financial Services", description: "Since Banking and Financial Services needs to be protected by high end security, our GRC specialist allows major financial institutions to enhance protection from technology risks, safeguard critical banking systems, and audit readiness through Enterprise GRC Solutions aligned with RMiT and MAS TRM guidelines." },
  { icon: "ph-factory", title: "Manufacturing & Industrial", description: "Manufacturing & Industrial are high end infrastructure and connected machinery, industrial control systems, and operational technology introduce unique security challenges. Our GRC service team focuses on end to end total vulnerability management." },
  { icon: "ph-lightning", title: "Oil, Gas & Energy", description: "High end systems like energy infrastructure require reliable protection against cyber attacks and disruptions. We support risk assessments, industrial network security, and business continuity planning." },
  { icon: "ph-heartbeat", title: "Healthcare & Life Sciences", description: "Protecting PHI records and sensitive data of healthcare requires strict access controls and data security measures. Our compliance support helps in data protection, governance identity, and compliance readiness." },
  { icon: "ph-umbrella", title: "Insurance", description: "Policy holder details to processing claims, insurers handle each and every sensitive data across multiple infrastructure. We do support in and out and focus on data privacy, third-party risks, and regulatory alignment." },
  { icon: "ph-buildings", title: "Public Sector & Government", description: "Public institutions must and think of secure essential digital data while maintaining accountability and data sovereignty. We support security governance, sovereign cloud controls, and audit completion." }
];

const whyChoose = [
  { icon: "ph-stack", text: "Ssquad Global arranges cybersecurity examination, vulnerability management, penetration testing, cloud security, and managed security capabilities with governance and regulatory alignment support." },
  { icon: "ph-scales", text: "Our work addresses technology risk management requirements relevant to Malaysia and Singapore, including RMiT and MAS TRM." },
  { icon: "ph-globe-hemisphere-east", text: "With headquarters in Singapore, operations in Malaysia, and centres of excellence in India, Ssquad Global supports organisations across international markets. Our managed security capabilities can also provide ongoing monitoring support where required." }
];

const faqs = [
  { question: "What are Governance, Risk & Compliance Services?", answer: ["Governance, Risk, and Compliance (GRC) is a systematic way of achieving business goals parallel with government regulations, maintaining industry best practice and identifying the security risk and resolve it when it is spotted. Companies use GRC to achieve organisational goals reliably, remove uncertainty, and meet compliance requirements."] },
  { question: "What does a GRC Consultant actually do?", answer: ["Ssquad Global's GRC consultant reviews your organisation, manages security risks, helps you to do proper governance practices, and identifies compliance requirements."] },
  { question: "Why does a business need GRC consulting?", answer: ["Security does not work on guesswork, security strategy usually needs industry experience, IT infrastructure knowledge, clarity on responsibilities, visibility into your security controls.", "This is where Ssquad Global's GRC consulting team steps in and handles all the above responsibilities."] },
  { question: "Does Ssquad Global support RMiT and MAS TRM requirements?", answer: ["Yes. Ssquad Global supports financial institutions with technology with enterprise GRC, risk assessments, control reviews, gap identification, and regulatory alignment activities related to Bank Negara Malaysia RMiT and MAS TRM guidelines."] }
];

export default function GrcServicesPage() {
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
        title="Governance, Risk & Compliance Services"
        subtitle="Worried about security gaps and changing compliance requirements? Ssquad Global helps review your business's security controls, identify IT infrastructure risks, and update internal Enterprise Risk policies. Our GRC consulting team works alongside yours to find practical solutions and improve compliance readiness."
        breadcrumbs={[]}
        actions={[
          { label: "Request a GRC Consultation", href: "/contact" },
          { label: "Talk to a GRC Consultant", href: "/contact", variant: "secondary" }
        ]}
      />

      {/* Challenges */}
      <section className={`bg-white ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeader
            title="Governance, Risk and Compliance Challenges We Help Address"
            intro="Security snags and compliance issues don't just appear out of nowhere. They stack up bit by bit while everyone is busy running the business."
            lead="Usually organizations security concerns are"
          />
          <ul className={GRID}>
            {challenges.map((item) => (
              <Card key={item.title} listItem icon={item.icon} width={COL_3} title={item.title} description={item.description} />
            ))}
          </ul>
          <p className="reveal mt-12 lg:mt-16 max-w-3xl mx-auto text-center text-slate-600 text-[1.05rem] lg:text-lg leading-relaxed">
            Our expert GRC team communicates and helps in identifying these risks, reviewing existing systems, and prioritizing corrective actions so your business knows what needs fixing first.
          </p>
        </div>
      </section>

      {/* GRC Consulting Services */}
      <section className={`bg-slate-50 border-y border-slate-100 ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeader
            title="Our GRC Consulting Services"
            intro="Solid security begins with a clear view of your current setup. Ssquad Global's GRC Consulting Services connect compliance requirements with hands-on cybersecurity risk management to keep things practical."
          />
          <div className={GRID}>
            {consultingServices.map((item) => (
              <Card key={item.title} icon={item.icon} width={COL_3} title={item.title} description={item.description} />
            ))}
          </div>

          <div className="reveal mt-16 lg:mt-20 bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-10 lg:p-12">
            <p className="text-center text-slate-900 [font-family:var(--font-plus-jakarta),sans-serif] font-semibold text-xl">
              Our approach covers six important areas
            </p>
            <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
              {riskAreas.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="w-10 h-10 shrink-0 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-ssg-red text-xl">
                    <i className="ph ph-check-circle"></i>
                  </span>
                  <div>
                    <strong className="block [font-family:var(--font-plus-jakarta),sans-serif] font-semibold text-slate-900 leading-snug">{item.title}</strong>
                    <p className="mt-1.5 text-slate-600 text-[0.95rem] leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-10 pt-8 border-t border-slate-100 text-center text-slate-600 text-[1.05rem] leading-relaxed">
              This structured approach helps organisations focus their security efforts where it matters the most.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise GRC Solutions */}
      <section className={`bg-white ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeader
            title="Enterprise GRC Solutions"
            intro="Good governance works best when backed by reliable technology processes. Ssquad Global combines cybersecurity expertise with infrastructure capabilities to support practical Enterprise GRC Solutions."
          />
          <div className={GRID}>
            {enterpriseSolutions.map((item) => (
              <Card key={item.title} icon={item.icon} width={COL_2} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className={`bg-slate-50 border-y border-slate-100 ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeader
            title="Our GRC Consulting Approach"
            intro="Each and every business has different IT infrastructure, security risks, and regulatory responsibilities. Our process GRC Consulting begins by understanding those differences before recommending improvements."
          />
          <div className={GRID}>
            {approachSteps.map((step, idx) => (
              <Card
                key={step.title}
                width={COL_3}
                title={<><span className="text-ssg-red">{idx + 1}.</span> {step.title}</>}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className={`bg-ssg-dark relative overflow-hidden ${SECTION}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-ssg-red/20 opacity-40 blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className={`${CONTAINER} relative z-10`}>
          <SectionHeader
            dark
            title="Industries We Support"
            intro="Ssquad Global GRC specialist guides business to address industry specific threats and problems, helps in maintaining IT-infrastructure, and enhances complex regulatory requirements."
          />
          <div className={GRID}>
            {industries.map((item) => (
              <div key={item.title} className={`${COL_3} reveal group bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/[0.07] hover:border-ssg-red/40 hover:-translate-y-1 transition-all duration-300`}>
                <div className="w-12 h-12 rounded-xl bg-ssg-red/15 border border-ssg-red/30 flex items-center justify-center text-[#ff9fa1] text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <i className={`ph ${item.icon}`}></i>
                </div>
                <h3 className="[font-family:var(--font-plus-jakarta),sans-serif] font-semibold text-lg text-white leading-snug">{item.title}</h3>
                <p className="mt-3 text-slate-300 text-[0.95rem] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className={`bg-white ${SECTION}`}>
        <div className={`${CONTAINER} grid lg:grid-cols-12 gap-10 lg:gap-16 items-start`}>
          <div className="reveal lg:col-span-5">
            <h2 className="section-title text-slate-900 font-bold text-balance">Why Choose Our GRC Consulting Services?</h2>
            <p className="mt-5 text-slate-600 text-[1.05rem] lg:text-lg leading-relaxed">
              Good GRC consulting requires more than understanding regulations. It also requires knowing how security controls work across real technology environments.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-5">
            {whyChoose.map((item) => (
              <div key={item.icon} className="reveal flex gap-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 lg:p-7">
                <span className="w-12 h-12 shrink-0 rounded-xl bg-white border border-red-100 flex items-center justify-center text-ssg-red text-2xl shadow-sm">
                  <i className={`ph ${item.icon}`}></i>
                </span>
                <p className="text-slate-700 text-[1rem] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`bg-slate-50 border-y border-slate-100 ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionHeader title="Frequently Asked Questions" />
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="reveal bg-white border border-slate-200 rounded-2xl shadow-sm p-6 lg:p-8">
                <h3 className="[font-family:var(--font-plus-jakarta),sans-serif] font-semibold text-lg text-slate-900 leading-snug">{faq.question}</h3>
                {faq.answer.map((para) => (
                  <p key={para} className="mt-3 text-slate-600 text-[0.95rem] leading-relaxed">{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discuss Requirements CTA */}
      <section className={`relative overflow-hidden text-center ${SECTION}`}>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/banner-2.jpg)' }}
        ></div>
        <div className="absolute inset-0 z-0 bg-ssg-dark/85 mix-blend-multiply"></div>
        <div className="absolute top-0 right-10 w-64 h-64 bg-ssg-red/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>

        <div className="reveal max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-white text-3xl md:text-5xl [font-family:var(--font-plus-jakarta),sans-serif] font-bold drop-shadow-xl text-balance">
            Discuss Your Governance, Risk and Compliance Requirements
          </h2>
          <div className="mt-8 space-y-4 text-slate-200 text-[1.05rem] lg:text-lg leading-relaxed">
            <p>Not sure whether your current security setup can handle new threats? Are you worried about risk or security concerns in your IT infrastructure or applications? Let&apos;s have an audit call with our team and let&apos;s find out what needs attention.</p>
            <p>Ssquad Global keeps things practical with cybersecurity risk assessments, governance reviews, regulatory guidance, and audit preparation support.</p>
            <p>Drop us a line to discuss your requirements.</p>
          </div>

          <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-ssg-red via-rose-500 to-ssg-red font-bold text-lg py-4 px-10 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] text-white hover:shadow-[0_0_35px_rgba(220,38,38,0.8)] hover:-translate-y-1 transition-all duration-300">
            Request a GRC Consultation <i className="ph ph-arrow-up-right font-bold"></i>
          </Link>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-slate-300">
            <p>Email: <a href="mailto:sales@ssquad.com" className="text-white font-semibold hover:text-ssg-red transition-colors">sales@ssquad.com</a></p>
            <p>Contact: <Link href="/contact" className="text-white font-semibold hover:text-ssg-red transition-colors">www.ssquad.com/contact</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
