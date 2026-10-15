"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Layout tokens shared by every section on this page
const CONTAINER = "max-w-[1184px] mx-auto px-6";
const SECTION = "py-20 lg:py-24";
const HEADING_FONT = "[font-family:var(--font-plus-jakarta),sans-serif]";
const HERO_BG = "bg-[#0b1530] bg-[radial-gradient(ellipse_at_10%_100%,rgba(236,32,36,0.28),transparent_55%),radial-gradient(ellipse_at_95%_10%,rgba(37,99,235,0.35),transparent_55%)]";

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs sm:text-[0.8rem] font-bold tracking-[0.14em] uppercase ${light ? 'text-[#ff7a85]' : 'text-ssg-red'}`}>{children}</p>
  );
}

function SectionIntro({ eyebrow, title, intro, dark = false }: { eyebrow?: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <div className="reveal max-w-3xl">
      {eyebrow && <Eyebrow light={dark}>{eyebrow}</Eyebrow>}
      <h2 className={`${eyebrow ? 'mt-2' : ''} text-3xl lg:text-[2.35rem] font-bold leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      {intro && <p className={`mt-4 text-base lg:text-lg leading-relaxed text-justify hyphens-auto ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{intro}</p>}
    </div>
  );
}

function IconTile({ icon }: { icon: string }) {
  return (
    <span className="w-11 h-11 rounded-lg bg-[#eaf0fb] text-[#1e3a8a] flex items-center justify-center text-xl shrink-0">
      <i className={`ph ${icon}`}></i>
    </span>
  );
}

const pillars = [
  { letter: "G", color: "bg-[#2f6fde]", title: "Governance", text: "Clear ownership, current policies and accountable decisions." },
  { letter: "R", color: "bg-ssg-red", title: "Risk", text: "Find, rank and treat the risks that matter to your business." },
  { letter: "C", color: "bg-[#1fa971]", title: "Compliance", text: "Meet ISO 27001, SOC 2, PCI-DSS 4.0, RMiT and MAS TRM." }
];

const certifications = ["ISO 27001", "SOC 2 Type 2", "CREST Pentesting", "ISO 9001", "ISO 20000", "ISO 14001", "ISO 45001", "Malaysia Digital"];

const challenges = [
  { icon: "ph-user", title: "Unclear Enterprise Risk Ownership", description: "Nobody is explicitly put in charge, ownership needs to be clearly assigned when a security gap gets flagged, leaving important fixes hanging." },
  { icon: "ph-warning", title: "Compliance Gaps", description: "Daily processes, tools, and configurations may fall short of regulatory requirements." },
  { icon: "ph-wrench", title: "Missed Security Maintenance", description: "Over time essential tasks may be neglected by the team such as user permission reviews, log checks, and software updates." },
  { icon: "ph-file-text", title: "Outdated Enterprise Risk Management Policies", description: "Written manuals describe office routines and security practices that changed years ago." },
  { icon: "ph-timer", title: "Audit Preparation Difficulties", description: "Teams lose valuable time pulling evidence and documents together right before an audit." },
  { icon: "ph-eye", title: "Limited Risk Visibility", description: "Keeping track of servers and security will be difficult over the time when business grows." }
];

const consultingServices = [
  { icon: "ph-check-square", title: "Regulatory Compliance Consulting Services", description: "Ssquad Global works parallelly with your team to provide comprehensive SOC 2 readiness support, ISO 27001 certification support, and PCI-DSS compliance services support for your applications and IT infrastructure." },
  { icon: "ph-chart-bar", title: "Enterprise Risk Management Consulting Services", description: "Our Enterprise Risk Management Consulting Services focus on identifying, examining, and managing cybersecurity and technology risks that could affect your organisation." },
  { icon: "ph-compass", title: "Evaluating Your Baseline", description: "Our GRC Consulting team examines each and every part of the existing security system and IT infrastructure and ongoing processes of development/deployment so we identify operational blind spots. This helps your core team understand where things stand before making changes." },
  { icon: "ph-note-pencil", title: "Updating Enterprise Risk Management Internal Policies", description: "Policies that are outdated can create confusion between documented procedures and daily operations. So we pitch and fix it up." },
  { icon: "ph-target", title: "Targeting Real Risks", description: "Every vulnerability carries a different level. We examine your cloud environments, networks, and applications security to highlight security weaknesses that need attention." },
  { icon: "ph-shield", title: "Testing Security Defenses", description: "We run manual and automated checks and penetration testing to fix the process and to check whether existing safeguards can withstand potential threats." }
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
  { icon: "ph-cloud", title: "Cloud Security Governance", description: "Moving IT infra to the cloud brings fresh challenges around user permissions, configurations, and data exposed to public networks. We help organizations review cloud security through infrastructure assessments, identity and access checks, and security posture reviews." },
  { icon: "ph-broadcast", title: "Security Monitoring and Reporting", description: "Security risks do not follow office hours. Our Compliance Solutions handles a day to day activity, our automated system will generate timely reports and run systems over the time." },
  { icon: "ph-lock-key", title: "Data Protection and Sovereignty", description: "User data protection should be business at most priority, our team will help in reviewing the protection of data." },
  { icon: "ph-medal", title: "ISO 27001, SOC 2 & PCI-DSS Support in Framework", description: "Central bank mandates and the modern enterprise system should maintain standard global security standards. Ssquad Global's GRC practice supports your team through structured gap analysis, control implementation, and audit documentation for ISO 27001, SOC 2 Type II, and PCI-DSS 4.0." }
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
  { icon: "ph-gas-pump", title: "Oil, Gas & Energy", description: "High end systems like energy infrastructure require reliable protection against cyber attacks and disruptions. We support risk assessments, industrial network security, and business continuity planning." },
  { icon: "ph-first-aid-kit", title: "Healthcare & Life Sciences", description: "Protecting PHI records and sensitive data of healthcare requires strict access controls and data security measures. Our compliance support helps in data protection, governance identity, and compliance readiness." },
  { icon: "ph-shield", title: "Insurance", description: "Policy holder details to processing claims, insurers handle each and every sensitive data across multiple infrastructure. We do support in and out and focus on data privacy, third-party risks, and regulatory alignment." },
  { icon: "ph-buildings", title: "Public Sector & Government", description: "Public institutions must and think of secure essential digital data while maintaining accountability and data sovereignty. We support security governance, sovereign cloud controls, and audit completion." }
];

const presence = [
  { icon: "ph-buildings", value: "Singapore", label: "Headquarters" },
  { icon: "ph-map-pin", value: "Malaysia", label: "Operations" },
  { icon: "ph-users-three", value: "India", label: "Centres of excellence" },
  { icon: "ph-clock", value: "24/7", label: "Managed security monitoring" }
];

const faqs = [
  { question: "What are Governance, Risk & Compliance Services?", answer: ["Governance, Risk, and Compliance (GRC) is a systematic way of achieving business goals parallel with government regulations, maintaining industry best practice and identifying the security risk and resolve it when it is spotted. Companies use GRC to achieve organisational goals reliably, remove uncertainty, and meet compliance requirements."] },
  { question: "What does a GRC Consultant actually do?", answer: ["Ssquad Global's GRC consultant reviews your organisation, manages security risks, helps you to do proper governance practices, and identifies compliance requirements."] },
  { question: "Why does a business need GRC consulting?", answer: ["Security does not work on guesswork, security strategy usually needs industry experience, IT infrastructure knowledge, clarity on responsibilities, visibility into your security controls.", "This is where Ssquad Global's GRC consulting team steps in and handles all the above responsibilities."] },
  { question: "Does Ssquad Global support RMiT and MAS TRM requirements?", answer: ["Yes. Ssquad Global supports financial institutions with technology with enterprise GRC, risk assessments, control reviews, gap identification, and regulatory alignment activities related to Bank Negara Malaysia RMiT and MAS TRM guidelines."] }
];

const consultationSteps = [
  { title: "Tell us your goal", text: "Share your framework, industry and concerns." },
  { title: "Audit call", text: "A GRC consultant reviews your current position with you." },
  { title: "Clear next steps", text: "Receive practical, prioritised recommendations." }
];

const helpTopics = ["ISO 27001", "SOC 2 Type II", "PCI-DSS 4.0", "RMiT / MAS TRM", "Risk assessment", "Policy update", "Audit preparation", "Not sure"];

const inputClass = "w-full bg-white text-slate-900 border border-slate-300 rounded-lg px-4 py-3 outline-none transition-all placeholder:text-slate-400 focus:border-ssg-red focus:ring-4 focus:ring-red-500/10";

function ConsultationForm() {
  const [form, setForm] = useState({ fname: '', wemail: '', cname: '', pnumber: '', cmessage: '', consent: false });
  const [topics, setTopics] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    setForm(prev => ({ ...prev, [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const toggleTopic = (topic: string) => {
    setTopics(prev => prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.fname,
          email: form.wemail,
          number: form.pnumber,
          subject: `GRC Consultation Request - ${form.cname}`,
          message: `Company: ${form.cname}\nNeeds help with: ${topics.length ? topics.join(', ') : 'Not specified'}\n\n${form.cmessage || 'No additional details provided.'}`
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit the form');

      setStatus('success');
      setMessage(data.message);
      setForm({ fname: '', wemail: '', cname: '', pnumber: '', cmessage: '', consent: false });
      setTopics([]);
    } catch (err: unknown) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'An unexpected error occurred.');
    }
  };

  return (
    <form id="grc-consultation" onSubmit={handleSubmit} autoComplete="off" className="reveal scroll-mt-28 h-full flex flex-col bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
      <p className={`${HEADING_FONT} text-2xl font-bold text-slate-900`}>Request a GRC consultation</p>
      <p className="mt-1 text-sm text-slate-500">Fields marked * are required.</p>

      <div className="mt-6 grid sm:grid-cols-2 gap-3">
        <input id="fname" type="text" required value={form.fname} onChange={handleChange} placeholder="Full name *" aria-label="Full name" autoComplete="new-password" className={inputClass} />
        <input id="wemail" type="email" required value={form.wemail} onChange={handleChange} placeholder="Work email *" aria-label="Work email" autoComplete="new-password" className={inputClass} />
        <input id="cname" type="text" required value={form.cname} onChange={handleChange} placeholder="Company *" aria-label="Company" autoComplete="new-password" className={inputClass} />
        <input id="pnumber" type="tel" value={form.pnumber} onChange={handleChange} placeholder="Phone (optional)" aria-label="Phone" autoComplete="new-password" className={inputClass} />
      </div>

      <p className="mt-6 font-semibold text-slate-900">What do you need help with?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {helpTopics.map((topic) => {
          const selected = topics.includes(topic);
          return (
            <button
              key={topic}
              type="button"
              aria-pressed={selected}
              onClick={() => toggleTopic(topic)}
              className={`px-2.5 py-1.5 rounded-full border text-[0.8125rem] font-semibold transition-colors ${selected ? 'border-[#2f6fde] bg-[#eaf0fb] text-[#1d4ed8]' : 'border-slate-300 text-slate-800 hover:border-slate-400'}`}
            >
              {selected && <i className="ph ph-check mr-1"></i>}{topic}
            </button>
          );
        })}
      </div>

      <textarea id="cmessage" rows={3} value={form.cmessage} onChange={handleChange} placeholder="Tell us about your requirements…" aria-label="Your requirements" autoComplete="new-password" className={`${inputClass} mt-5 resize-none flex-1 min-h-[7rem]`}></textarea>

      <label className="mt-4 flex items-start gap-2.5 text-sm text-slate-600">
        <input id="consent" type="checkbox" required checked={form.consent} onChange={handleChange} className="mt-0.5 accent-ssg-red" />
        <span>I agree to be contacted about my request. See our <Link href="/privacy" className="underline hover:text-ssg-red">Privacy Policy</Link>.</span>
      </label>

      {status === 'success' && (
        <div className="mt-4 p-3.5 rounded-lg bg-green-50 border border-green-200 text-green-700 flex items-center gap-2.5 text-sm font-medium">
          <i className="ph-fill ph-check-circle text-lg"></i>{message}
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-center gap-2.5 text-sm font-medium">
          <i className="ph-fill ph-warning-circle text-lg"></i>{message}
        </div>
      )}

      <button type="submit" disabled={status === 'loading'} className="mt-5 w-full bg-ssg-red hover:bg-red-600 disabled:opacity-70 text-white font-semibold text-lg py-3.5 rounded-lg transition-colors">
        {status === 'loading' ? 'Sending…' : 'Request a GRC Consultation'}
      </button>
      <p className="mt-3 text-center text-sm text-slate-500 flex items-center justify-center gap-1.5">
        <i className="ph ph-lock-simple"></i> Confidential. We reply within one business day.
      </p>
    </form>
  );
}

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
      {/* Hero */}
      <section className={`${HERO_BG} pt-36 pb-20 lg:pt-44 lg:pb-24`}>
        <div className={`${CONTAINER} grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center`}>
          <div>
            <Eyebrow light>Cyber Security · Governance, Risk &amp; Compliance</Eyebrow>
            <h1 className="mt-4 text-white text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight">
              Governance, Risk &amp; Compliance <span className="text-[#ff6b78]">Services</span>
            </h1>
            <p className="mt-6 text-slate-300 text-base lg:text-lg leading-relaxed text-justify hyphens-auto max-w-xl">
              Worried about security gaps and changing compliance requirements? Ssquad Global helps review your business&apos;s security controls, identify IT infrastructure risks, and update internal Enterprise Risk policies. Our GRC consulting team works alongside yours to find practical solutions and improve compliance readiness.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#grc-consultation" className="inline-flex justify-center items-center bg-ssg-red hover:bg-red-600 text-white font-semibold px-6 py-3.5 rounded-md transition-colors">Request a GRC Consultation</a>
              <Link href="/contact" className="inline-flex justify-center items-center border border-white/50 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-md transition-colors">Talk to a GRC Consultant</Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm p-6 sm:p-7">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-300">The three pillars of GRC</p>
            <div className="mt-5 space-y-3">
              {pillars.map((pillar) => (
                <div key={pillar.letter} className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.07] p-4">
                  <span className={`${pillar.color} w-11 h-11 rounded-lg text-white font-bold text-lg flex items-center justify-center shrink-0`}>{pillar.letter}</span>
                  <div>
                    <p className={`${HEADING_FONT} text-white font-semibold text-lg`}>{pillar.title}</p>
                    <p className="text-slate-300 text-sm leading-relaxed text-justify hyphens-auto">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#4ade80]">
              <span><i className="ph ph-check mr-1"></i>Practical, hands-on consulting</span>
              <span><i className="ph ph-check mr-1"></i>Audit-ready evidence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications strip */}
      <section className="bg-slate-50 border-b border-slate-200 py-5">
        <div className={`${CONTAINER} flex flex-wrap items-center justify-center gap-2`}>
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500 mr-1">Certified &amp; aligned</span>
          {certifications.map((cert) => (
            <span key={cert} className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-[0.8125rem] font-semibold text-slate-900">{cert}</span>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className={`bg-white ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionIntro
            eyebrow="The problem"
            title="Governance, Risk and Compliance Challenges We Help Address"
            intro="Security snags and compliance issues don't just appear out of nowhere. They stack up bit by bit while everyone is busy running the business."
          />
          <p className={`reveal mt-6 inline-block bg-ssg-red/10 border border-ssg-red/20 text-ssg-red rounded-full px-5 py-2 ${HEADING_FONT} font-semibold`}>
            Usually organizations security concerns are
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map((item) => (
              <li key={item.title} className="reveal bg-white border border-slate-200 border-t-[3px] border-t-ssg-red rounded-xl p-6 hover:shadow-lg transition-shadow">
                <IconTile icon={item.icon} />
                <strong className={`mt-4 block ${HEADING_FONT} font-bold text-slate-900 text-[1.05rem] leading-snug`}>{item.title}</strong>
                <p className="mt-2 text-slate-600 text-[0.95rem] leading-relaxed text-justify hyphens-auto">{item.description}</p>
              </li>
            ))}
          </ul>
          <p className="reveal mt-10 max-w-3xl text-slate-600 text-base lg:text-lg leading-relaxed text-justify hyphens-auto">
            Our expert GRC team communicates and helps in identifying these risks, reviewing existing systems, and prioritizing corrective actions so your business knows what needs fixing first.
          </p>
        </div>
      </section>

      {/* GRC Consulting Services */}
      <section className={`bg-slate-50 ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionIntro
            title="Our GRC Consulting Services"
            intro="Solid security begins with a clear view of your current setup. Ssquad Global's GRC Consulting Services connect compliance requirements with hands-on cybersecurity risk management to keep things practical."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {consultingServices.map((item) => (
              <div key={item.title} className="reveal bg-white border border-slate-200 border-t-[3px] border-t-[#2f6fde] rounded-xl p-6 hover:shadow-lg transition-shadow">
                <IconTile icon={item.icon} />
                <h3 className="mt-4 font-bold text-slate-900 text-[1.05rem] leading-snug">{item.title}</h3>
                <p className="mt-2 text-slate-600 text-[0.95rem] leading-relaxed text-justify hyphens-auto">{item.description}</p>
              </div>
            ))}
          </div>

          <p className={`reveal mt-12 ${HEADING_FONT} font-bold text-slate-900 text-lg`}>Our approach covers six important areas</p>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {riskAreas.map((area, idx) => (
              <li key={area.title} className="reveal bg-white border border-slate-200 rounded-2xl px-5 py-4">
                <p className="font-semibold text-slate-900"><span className="text-ssg-red mr-2">{idx + 1}</span>{area.title}</p>
                <p className="mt-1.5 text-slate-600 text-sm leading-relaxed text-justify hyphens-auto">{area.description}</p>
              </li>
            ))}
          </ul>
          <p className="reveal mt-6 text-slate-600 text-base lg:text-lg leading-relaxed text-justify hyphens-auto">
            This structured approach helps organisations focus their security efforts where it matters the most.
          </p>
        </div>
      </section>

      {/* Enterprise GRC Solutions */}
      <section className={`bg-white ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionIntro
            title="Enterprise GRC Solutions"
            intro="Good governance works best when backed by reliable technology processes. Ssquad Global combines cybersecurity expertise with infrastructure capabilities to support practical Enterprise GRC Solutions."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {enterpriseSolutions.map((item) => (
              <div key={item.title} className="reveal bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <IconTile icon={item.icon} />
                <h3 className="mt-4 font-bold text-slate-900 text-[1.05rem] leading-snug">{item.title}</h3>
                <p className="mt-2 text-slate-600 text-[0.95rem] leading-relaxed text-justify hyphens-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Approach */}
      <section className={`bg-[#0b1631] ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionIntro
            dark
            title="Our GRC Consulting Approach"
            intro="Each and every business has different IT infrastructure, security risks, and regulatory responsibilities. Our process GRC Consulting begins by understanding those differences before recommending improvements."
          />
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-5">
            {approachSteps.map((step, idx) => (
              <li key={step.title} className="reveal relative">
                <span aria-hidden="true" className="relative z-10 w-10 h-10 rounded-full bg-ssg-red text-white font-bold flex items-center justify-center">{idx + 1}</span>
                {idx < approachSteps.length - 1 && (
                  <span aria-hidden="true" className="hidden lg:block absolute top-5 left-14 -right-2 h-px bg-white/20"></span>
                )}
                <h3 className="mt-5 text-white font-semibold text-lg leading-snug"><span className="sr-only">{idx + 1}. </span>{step.title}</h3>
                <p className="mt-2 text-slate-300 text-[0.8125rem] leading-relaxed text-justify hyphens-auto">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section className={`bg-white ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionIntro
            title="Industries We Support"
            intro="Ssquad Global GRC specialist guides business to address industry specific threats and problems, helps in maintaining IT-infrastructure, and enhances complex regulatory requirements."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((item) => (
              <div key={item.title} className="reveal bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="flex items-center gap-2.5 font-bold text-slate-900 text-[1.05rem] leading-snug">
                  <i className={`ph ${item.icon} text-xl text-[#1e3a8a]`}></i>{item.title}
                </h3>
                <p className="mt-2.5 text-slate-600 text-[0.95rem] leading-relaxed text-justify hyphens-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className={`bg-slate-50 ${SECTION}`}>
        <div className={CONTAINER}>
          <SectionIntro
            eyebrow="Why Ssquad Global"
            title="Why Choose Our GRC Consulting Services?"
            intro="Good GRC consulting requires more than understanding regulations. It also requires knowing how security controls work across real technology environments."
          />
          <div className="mt-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="reveal flex flex-col">
              <div className="space-y-4 text-slate-600 text-base lg:text-lg leading-relaxed text-justify hyphens-auto">
                <p>Ssquad Global arranges cybersecurity examination, vulnerability management, penetration testing, cloud security, and managed security capabilities with governance and regulatory alignment support.</p>
                <p>Our work addresses technology risk management requirements relevant to Malaysia and Singapore, including RMiT and MAS TRM.</p>
                <p>With headquarters in Singapore, operations in Malaysia, and centres of excellence in India, Ssquad Global supports organisations across international markets. Our managed security capabilities can also provide ongoing monitoring support where required.</p>
              </div>
              <a href="#grc-consultation" className="mt-8 self-start inline-flex items-center bg-[#0b1631] hover:bg-[#16244a] text-white font-semibold px-6 py-3.5 rounded-md transition-colors">Talk to a GRC Consultant</a>
            </div>
            <div className="grid grid-cols-2 lg:grid-rows-2 gap-4">
              {presence.map((item) => (
                <div key={item.value} className="reveal bg-[#101d42] rounded-xl p-5 sm:p-6 flex flex-col justify-between gap-6">
                  <i className={`ph ${item.icon} text-2xl text-[#ff7a85]`}></i>
                  <div>
                    <p className={`${HEADING_FONT} text-[#ff7a85] text-2xl lg:text-[1.75rem] font-bold`}>{item.value}</p>
                    <p className="mt-1 text-slate-300 text-sm">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`bg-white ${SECTION}`}>
        <div className={`${CONTAINER} grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16`}>
          <div className="reveal">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-2 text-3xl lg:text-[2.35rem] font-bold leading-tight text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-600 text-lg">Short answers to the questions we hear most.</p>
          </div>
          <div className="reveal">
            {faqs.map((faq, idx) => (
              <details key={faq.question} open={idx === 0} className="group border-b border-slate-200">
                <summary className="flex items-start gap-3 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <i className="ph-fill ph-caret-right mt-1 text-sm text-slate-900 transition-transform group-open:rotate-90"></i>
                  <h3 className="font-semibold text-slate-900 text-lg leading-snug">{faq.question}</h3>
                </summary>
                <div className="pb-5 pl-7 space-y-3 text-slate-600 leading-relaxed text-justify hyphens-auto">
                  {faq.answer.map((para) => <p key={para}>{para}</p>)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Discuss Requirements + Consultation Form */}
      <section className={`${HERO_BG} ${SECTION}`}>
        <div className={`${CONTAINER} grid lg:grid-cols-2 gap-12 items-stretch`}>
          <div className="reveal">
            <h2 className="text-white text-3xl lg:text-[2.35rem] font-bold leading-tight">Discuss Your Governance, Risk and Compliance Requirements</h2>
            <div className="mt-5 space-y-4 text-slate-300 text-base lg:text-lg leading-relaxed text-justify hyphens-auto">
              <p>Not sure whether your current security setup can handle new threats? Are you worried about risk or security concerns in your IT infrastructure or applications? Let&apos;s have an audit call with our team and let&apos;s find out what needs attention.</p>
              <p>Ssquad Global keeps things practical with cybersecurity risk assessments, governance reviews, regulatory guidance, and audit preparation support.</p>
              <p>Drop us a line to discuss your requirements.</p>
            </div>

            <ol className="mt-8 space-y-5">
              {consultationSteps.map((step, idx) => (
                <li key={step.title} className="flex gap-4">
                  <span aria-hidden="true" className="w-9 h-9 rounded-full bg-ssg-red text-white font-bold flex items-center justify-center shrink-0">{idx + 1}</span>
                  <div>
                    <p className={`${HEADING_FONT} text-white font-semibold`}>{step.title}</p>
                    <p className="text-slate-300 text-sm">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 pt-8 border-t border-white/15 space-y-3 text-white font-semibold">
              <p className="flex items-center gap-2.5"><i className="ph ph-envelope-simple text-lg text-slate-300"></i><span>Email: <a href="mailto:sales@ssquad.com" className="hover:text-[#ff7a85] transition-colors">sales@ssquad.com</a></span></p>
              <p className="flex items-center gap-2.5"><i className="ph ph-globe text-lg text-slate-300"></i><span>Contact: <Link href="/contact" className="hover:text-[#ff7a85] transition-colors">www.ssquad.com/contact</Link></span></p>
              <p className="flex items-center gap-2.5"><i className="ph ph-phone text-lg text-slate-300"></i><a href="tel:+60322765856" className="hover:text-[#ff7a85] transition-colors">+603 2276 5856</a></p>
              <p className="flex items-center gap-2.5"><i className="ph ph-map-pin text-lg text-slate-300"></i>71 Robinson Rd, Singapore 068895</p>
            </div>
          </div>

          <ConsultationForm />
        </div>
      </section>
    </main>
  );
}
