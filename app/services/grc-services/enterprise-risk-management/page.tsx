"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Design tokens matching parent GRC page
const CONTAINER = "max-w-[1184px] mx-auto px-4 sm:px-6 lg:px-8";
const SECTION = "py-12 sm:py-16 md:py-20 lg:py-24";
const HERO_BG = "bg-[#0b1530] bg-[radial-gradient(ellipse_at_10%_100%,rgba(236,32,36,0.28),transparent_55%),radial-gradient(ellipse_at_95%_10%,rgba(37,99,235,0.35),transparent_55%)]";
const inputClass = "w-full bg-white text-slate-900 border border-slate-300 rounded-lg px-3.5 sm:px-4 py-3 sm:py-3.5 outline-none transition-all placeholder:text-slate-400 focus:border-ssg-red focus:ring-4 focus:ring-red-500/10 text-[16px] sm:text-sm";

// Challenge items from PDF
const challenges = [
  {
    icon: "ph-shield-warning",
    title: "Cybersecurity Risks",
    quote: "The actual issue is not the threats we know, but the threats in our systems that remain unidentified.",
    accent: "border-t-[#EC2024]"
  },
  {
    icon: "ph-activity",
    title: "Operational Disruptions",
    quote: "When important applications stop working or infrastructure fails unexpectedly, daily business activities may be interrupted, affecting employees, customers, and service delivery.",
    accent: "border-t-[#F59E0B]"
  },
  {
    icon: "ph-scales",
    title: "Regulatory Compliance",
    quote: "As our systems continue to grow, it becomes increasingly difficult to maintain compliance with governance rules and audit requirements.",
    accent: "border-t-[#0284C7]"
  }
];

// Strategic Consulting Services from PDF (5 Pillars)
const strategicServices = [
  {
    icon: "ph-magnifying-glass-plus",
    title: "Enterprise Risk Assessment",
    description: "Our expert team of enterprise risk assessment will approach and identify vulnerabilities across IT infrastructure, cloud platforms, production applications, and security controls to determine potential operational threats."
  },
  {
    icon: "ph-tree-structure",
    title: "Enterprise Risk Management Framework",
    description: "We support organisations to develop their own systematic Enterprise Risk Management framework to identify risk and evaluate accountability aligned with business priorities."
  },
  {
    icon: "ph-arrows-clockwise",
    title: "Enterprise Risk Assessment Process",
    description: "Our system for enterprise risk assessment flows examines potential risks, evaluates their impact, and prioritizes appropriate risk treatment measures."
  },
  {
    icon: "ph-lock-key",
    title: "Cybersecurity Risk Management",
    description: "We identify security visibility through threat management, vulnerability intelligence and priority recommendations for fixes."
  },
  {
    icon: "ph-bank",
    title: "Regulatory Risk and Governance",
    description: "We have a track record of handling infrastructure for financial and banking systems with RMiT requirements and MAS Technology Risk Management governance guidelines."
  }
];

// Approach steps from PDF
const approachSteps = [
  {
    number: "01",
    title: "Identify Risks",
    description: "Examine business activities, identify the gaps, and find the potential threats across the system."
  },
  {
    number: "02",
    title: "Examine Impact",
    description: "Our Enterprise Risk Management expert team evaluate operational consequences, security exposure, and business dependencies."
  },
  {
    number: "03",
    title: "Prioritise Risks",
    description: "Classifying risks according to their potential impact and organizational priorities."
  },
  {
    number: "04",
    title: "Recommend Controls",
    description: "Develop practical mitigation recommendations and governance improvements."
  },
  {
    number: "05",
    title: "Review Risk Posture",
    description: "Support ongoing risk visibility through reporting and periodic assessments."
  }
];

// FAQs from PDF
const faqs = [
  {
    question: "What is enterprise risk management consulting?",
    answer: "Enterprise risk management consulting is a process that assists organisations to pinpoint, examine, prioritise, and manage risks that could affect business objectives and operations."
  },
  {
    question: "Why is an enterprise risk management framework important?",
    answer: "A structured framework establishes consistent risk evaluation, accountability, and informed decision-making across business functions."
  },
  {
    question: "How does enterprise risk assessment improve resilience?",
    answer: "It identifies potential disruptions and supports appropriate mitigation strategies before risks affect critical operations."
  }
];

export default function EnterpriseRiskManagementPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [form, setForm] = useState({ fname: '', wemail: '', cname: '', pnumber: '', cmessage: '', terms: false });
  const [honeypot, setHoneypot] = useState('');
  const [formLoadedAt, setFormLoadedAt] = useState<number>(() => Date.now());
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setFormLoadedAt(Date.now());

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    setForm(prev => ({ ...prev, [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          subject: `Enterprise Risk Management Consultation Request - ${form.cname}`,
          message: `Company: ${form.cname}\n\nRequirements:\n${form.cmessage}`,
          _hp_company: honeypot,
          _ts: formLoadedAt,
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit the form');

      setStatus('success');
      setMessage(data.message || 'Your consultation request has been successfully submitted. Our risk advisory specialists will be in touch shortly.');
      setForm({ fname: '', wemail: '', cname: '', pnumber: '', cmessage: '', terms: false });
    } catch (err: unknown) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again or email sales@ssquad.com.');
    }
  };

  return (
    <main className="bg-white">
      {/* 1. Hero Section: Top-Left Breadcrumbs (Wide Container) with Centralized Content */}
      <section className={`${HERO_BG} pt-24 sm:pt-28 lg:pt-30 pb-10 sm:pb-12 lg:pb-14`}>
        {/* Breadcrumbs: Positioned high up and to the far left */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 sm:mb-12 lg:mb-16">
          <nav className="flex flex-wrap items-center justify-start gap-x-1.5 sm:gap-x-2 gap-y-1 text-[10px] sm:text-xs text-slate-300 font-mono text-left tracking-wider">
            <Link href="/" className="hover:text-white transition-colors uppercase">Home</Link>
            <i className="ph ph-caret-right text-ssg-red text-[8px] sm:text-[9px]"></i>
            <Link href="/services/grc-services" className="hover:text-white transition-colors uppercase">Services</Link>
            <i className="ph ph-caret-right text-ssg-red text-[8px] sm:text-[9px]"></i>
            <Link href="/services/grc-services" className="hover:text-white transition-colors uppercase">GRC Services</Link>
            <i className="ph ph-caret-right text-ssg-red text-[8px] sm:text-[9px]"></i>
            <span className="text-white font-semibold uppercase">Enterprise Risk Management</span>
          </nav>
        </div>

        {/* Centralized Contents: Heading, Description, and CTAs */}
        <div className={`${CONTAINER} flex flex-col items-center text-center`}>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-center">
              Enterprise Risk Management Consulting <span className="text-[#ff6b78]">Services</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Technology and infrastructure suspension, regulatory obstacles can impact business continuity and financial resilience. Ssquad Global&apos;s Enterprise Risk Management consulting services assist organisations to identify potential risk, assess business awareness, and develop practical risk management strategies that support informed decisions and operational resilience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3.5 w-full sm:w-auto mx-auto">
              <a
                href="#risk-consultation"
                className="inline-flex justify-center items-center bg-ssg-red hover:bg-red-600 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all w-full sm:w-auto text-center shadow-lg hover:shadow-red-500/20 active:scale-[0.99]"
              >
                Request a Risk Consultation
              </a>
              <a
                href="#strategic-services"
                className="inline-flex justify-center items-center border border-white/40 hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all w-full sm:w-auto text-center"
              >
                Discover ERM Consulting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Common Enterprise Risk Management Challenges Faced by Businesses */}
      <section className={`bg-white ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="reveal max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-slate-900 leading-tight">
              Common Enterprise Risk Management Challenges Faced by Businesses
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed text-left">
              Modern enterprises face interconnected risks across production applications, cloud environments, infrastructure, and third-party services. Without systematic risk management businesses can not handle these challenges.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {challenges.map((c, i) => (
              <div
                key={c.title}
                className={`reveal bg-slate-50 border border-slate-200 ${c.accent} border-t-[4px] rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div>
                  <span className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 text-2xl shadow-sm mb-4">
                    <i className={`ph ${c.icon}`}></i>
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {c.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed text-left">
                    {c.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strategic Risk Management Consulting Services for Enterprises */}
      <section id="strategic-services" className={`bg-slate-50 border-y border-slate-200 scroll-mt-6 ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="reveal text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-slate-900 leading-tight">
              Strategic Risk Management Consulting Services for Enterprises
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed text-left">
              Our experts team maintains cyber-data security, infrastructure security, and governance expertise to help organizations examine technology and infrastructure risks.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6">
            {strategicServices.map((service, idx) => (
              <div
                key={service.title}
                className="reveal w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 lg:p-7 shadow-sm hover:shadow-xl hover:border-ssg-red/30 transition-all duration-300 group"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div>
                  <span className="w-12 h-12 rounded-xl bg-red-50 text-ssg-red border border-red-100 flex items-center justify-center text-2xl mb-4 group-hover:bg-ssg-red group-hover:text-white transition-colors">
                    <i className={`ph ${service.icon}`}></i>
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-ssg-red transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed text-left">
                    {service.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Enterprise Risk Management Approach (5-Step Lifecycle) */}
      <section className={`bg-[#0b1631] text-white ${SECTION}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-tight text-white">
              Our Enterprise Risk Management Approach
            </h2>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 items-stretch">
            {approachSteps.map((step, idx) => (
              <div
                key={step.number}
                className={`reveal bg-white/[0.05] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:bg-white/[0.08] hover:border-white/20 transition-all hover:-translate-y-1 relative group h-full ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div>
                  <span className="block mb-4 font-mono text-2xl sm:text-3xl font-extrabold text-ssg-red">
                    {step.number}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-red-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Ssquad Global? */}
      <section className={`bg-white ${SECTION}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-slate-900 leading-tight">
              Why Choose Ssquad Global?
            </h2>
            <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed text-center max-w-3xl mx-auto">
              We Ssquad Global carry enterprise cybersecurity, cloud infrastructure, and governance expertise to risk management engagements.
            </p>
          </div>

        </div>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className={`bg-slate-50 border-t border-slate-200 ${SECTION}`}>
        <div className={`${CONTAINER} max-w-4xl`}>
          <div className="reveal text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-slate-900 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFAQ === idx;
              return (
                <div
                  key={faq.question}
                  className="reveal bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(isOpen ? null : idx)}
                    className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 font-bold text-slate-900 text-sm sm:text-base lg:text-lg hover:text-ssg-red transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'bg-ssg-red text-white border-ssg-red rotate-180' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                      <i className="ph ph-caret-down text-sm"></i>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed border-t border-slate-100 text-left">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Strengthen Your Enterprise Risk Management Strategy (CTA + Form) */}
      <section id="risk-consultation" className={`bg-[#0b1530] scroll-mt-20 ${SECTION} relative overflow-hidden`}>
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10`}>
          {/* Left Column: Proposition & Direct Contacts */}
          <div className="lg:col-span-6 text-white reveal text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Strengthen Your Enterprise Risk Management Strategy
            </h2>
            <p className="mt-4 sm:mt-5 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed text-left">
              Protect critical operations and improve risk visibility with Ssquad Global&apos;s enterprise risk management consulting expertise. Connect with our specialists to discuss your organization&apos;s risk management requirements.
            </p>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-6 reveal">
            <form onSubmit={handleSubmit} autoComplete="off" className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-9 shadow-2xl flex flex-col gap-3.5 sm:gap-4 border border-slate-100">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Request a Risk Consultation</h3>
              </div>

              {/* Honeypot Trap */}
              <div style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px', height: 0, width: 0, zIndex: -1 }} aria-hidden="true">
                <label htmlFor="_hp_company_erm">Company Website</label>
                <input
                  id="_hp_company_erm"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label htmlFor="fname" className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input id="fname" type="text" required value={form.fname} onChange={handleChange} placeholder="e.g. Johnathan Lee" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="wemail" className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                  <input id="wemail" type="email" required value={form.wemail} onChange={handleChange} placeholder="name@company.com" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label htmlFor="cname" className="block text-xs font-semibold text-slate-700 mb-1">Company Name *</label>
                  <input id="cname" type="text" required value={form.cname} onChange={handleChange} placeholder="e.g. Acme Financial" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="pnumber" className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input id="pnumber" type="tel" value={form.pnumber} onChange={handleChange} placeholder="+60 / +65 / +1..." className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="cmessage" className="block text-xs font-semibold text-slate-700 mb-1">Risk Management Requirements *</label>
                <textarea
                  id="cmessage"
                  required
                  value={form.cmessage}
                  onChange={handleChange}
                  placeholder="Your requirements"
                  className={`${inputClass} resize-none min-h-[6.5rem] sm:min-h-[7.5rem]`}
                ></textarea>
              </div>

              <div className="flex items-start gap-2.5 pt-0.5">
                <input type="checkbox" id="terms" required checked={form.terms} onChange={handleChange} className="mt-1 w-4 h-4 rounded border-slate-300 accent-ssg-red cursor-pointer shrink-0" />
                <label htmlFor="terms" className="text-slate-500 text-xs cursor-pointer leading-relaxed">
                  I accept the <Link href="/terms" className="text-slate-700 hover:text-ssg-red font-semibold underline underline-offset-2">Terms of Service</Link> and acknowledge the <Link href="/privacy" className="text-slate-700 hover:text-ssg-red font-semibold underline underline-offset-2">Privacy Policy</Link>.
                </label>
              </div>

              {status === 'success' && (
                <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 flex items-start gap-2 text-xs font-medium">
                  <i className="ph-fill ph-check-circle text-base shrink-0 mt-0.5"></i>
                  <span>{message}</span>
                </div>
              )}
              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 flex items-start gap-2 text-xs font-medium">
                  <i className="ph-fill ph-warning-circle text-base shrink-0 mt-0.5"></i>
                  <span>{message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-1 sm:mt-2 w-full bg-ssg-red hover:bg-red-600 disabled:opacity-70 text-white font-semibold text-sm sm:text-base py-3 sm:py-3.5 rounded-xl transition-all shadow-lg hover:shadow-red-500/20 flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                {status === 'loading' ? (
                  <>
                    <i className="ph ph-spinner animate-spin text-lg"></i> Submitting...
                  </>
                ) : (
                  <>
                    Request a Risk Consultation <i className="ph ph-arrow-right"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
