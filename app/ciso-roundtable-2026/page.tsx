"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { submitCisoRsvp } from "@/app/actions/cisoActions";
import "./ciso.css";

export default function CisoRoundtable() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitCisoRsvp(formData);
      if (result.success) {
        router.push("/ciso-roundtable-2026/thank-you");
      } else {
        setError(result.message || "An error occurred. Please try again.");
      }
    });
  };

  return (
    <div className="bg-ssg-light text-slate-800 font-body antialiased selection:bg-ssg-cyber selection:text-white min-h-screen flex flex-col">
      {/* Header Shell */}
      <header className="absolute top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="ciso-header-shell mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 gap-2">
              <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                <Link href="/" aria-label="Ssquad Global Home">
                  <Image src="/images/ciso-roundtable/SSquad_logo_white.svg" alt="Ssquad Global" width={100} height={32} className="h-6 sm:h-8 w-auto" />
                </Link>
                <span className="text-white/40 text-xl sm:text-2xl font-light leading-none">|</span>
                <span aria-label="Securonix Home">
                  <Image src="/images/ciso-roundtable/securonix_logo_reverse.png" alt="Securonix" width={100} height={24} className="h-4 sm:h-6 w-auto opacity-90 relative -top-[1px]" />
                </span>
              </div>
              <div className="flex items-center shrink-0">
                <a href="#rsvp" className="inline-flex items-center justify-center rounded-lg bg-ssg-red px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-ssg-red/30 hover:bg-white hover:text-ssg-red transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 whitespace-nowrap">
                  RSVP<span className="hidden sm:inline">&nbsp;Now</span> <i className="ph ph-arrow-right ml-1 sm:ml-2 opacity-80"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="ciso-hero relative overflow-hidden bg-ssg-dark pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="ciso-hero-grid-overlay"></div>
          <div className="ciso-hero-glow"></div>
          <div className="ciso-hero-network-lines"></div>
          <div className="ciso-hero-signal-waves"></div>
          <div className="ciso-hero-3d-waves"></div>
          <div className="ciso-hero-scan-sweep"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center ciso-animate-fade-in-up">
              <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ssg-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ssg-red"></span>
                </span>
                By Invitation Only
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
                CISO Roundtable <span className="text-ssg-red drop-shadow-[0_0_15px_rgba(236,32,36,0.6)]">2026</span>
              </h1>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
                Join leading cybersecurity executives for a strategic dialogue on building resilience in an age of uncertainty.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-white font-medium">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform cursor-default">
                  <i className="ph ph-calendar-blank text-xl text-ssg-red"></i>
                  <span className="text-sm">21 May 2026</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform cursor-default">
                  <i className="ph ph-clock text-xl text-ssg-red"></i>
                  <span className="text-sm">9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform cursor-default">
                  <i className="ph ph-map-pin text-xl text-ssg-red"></i>
                  <span className="text-sm">Le Méridien Kuala Lumpur</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Overview */}
        <section className="py-20 bg-white relative z-20 border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
              Event Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Decisions Under Uncertainty</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Cyber threats are evolving faster than ever—and now, so are AI-driven risks. Security leaders can't afford to react; they must anticipate. The CISO Roundtable 2026 brings senior CISOs together to debate, challenge, and shape the future of cybersecurity and Cyber for AI. Explore AI agentic meshes, secure AI ecosystems, and human-centric strategies designed to protect both enterprise systems and intelligent agents. Exchange bold ideas, address emerging AI-specific threats, and collaborate with peers to redefine what resilient, future-ready security looks like in today's rapidly evolving digital landscape.
            </p>
          </div>
        </section>

        {/* Content Split Section */}
        <section className="py-20 bg-ssg-light relative z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
              
              {/* Left Column: Agenda */}
              <div className="lg:col-span-5 ciso-animate-fade-in-up ciso-delay-100">
                <div className="sticky top-28 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-10 w-10 rounded-full bg-ssg-red/10 flex items-center justify-center text-ssg-red">
                      <i className="ph ph-list-bullets text-xl"></i>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Program Agenda</h2>
                  </div>

                  <div className="space-y-0 relative">
                    <div className="ciso-agenda-item">
                      <span className="ciso-agenda-time">8:30 AM – 9:00 AM</span>
                      <h3 className="ciso-agenda-title">Arrival & Executive Networking</h3>
                      <p className="ciso-agenda-desc">Registration, morning refreshments, and initial peer greetings.</p>
                    </div>

                    <div className="ciso-agenda-item">
                      <span className="ciso-agenda-time">9:00 AM – 9:10 AM</span>
                      <h3 className="ciso-agenda-title">Opening Perspective: Cybersecurity Leadership in an Age of Uncertainty</h3>
                      <p className="ciso-agenda-desc">Setting the stage for the day's strategic discussions.</p>
                    </div>

                    <div className="ciso-agenda-item">
                      <span className="ciso-agenda-time">9:10 AM – 10:10 AM</span>
                      <h3 className="ciso-agenda-title">AI Agentic Mesh: Scaling Security in a World of Signal and Noise</h3>
                      <p className="ciso-agenda-desc">A deep dive into leveraging AI to combat alert fatigue and enhance threat detection efficacy.</p>
                    </div>

                    <div className="ciso-agenda-item">
                      <span className="ciso-agenda-time">10:10 AM – 10:30 AM</span>
                      <h3 className="ciso-agenda-title">Strategic Pause & Peer Exchange</h3>
                      <p className="ciso-agenda-desc">Morning break and networking session.</p>
                    </div>

                    <div className="ciso-agenda-item">
                      <span className="ciso-agenda-time">10:30 AM – 12:20 PM</span>
                      <h3 className="ciso-agenda-title">Human-Centric Cyber Resilience & Cyber for AI</h3>
                      <p className="ciso-agenda-desc">Focusing on the human element, building resilient teams, and strengthening response to security incidents.</p>
                    </div>

                    <div className="ciso-agenda-item">
                      <span className="ciso-agenda-time">12:20 PM – 1:00 PM</span>
                      <h3 className="ciso-agenda-title">CISO Fireside Dialogue: Decisions Under Uncertainty</h3>
                      <p className="ciso-agenda-desc">Interactive panel discussion featuring veteran CISOs sharing real-world crisis management experiences.</p>
                    </div>

                    <div className="ciso-agenda-item">
                      <span className="ciso-agenda-time">1:00 PM Onwards</span>
                      <h3 className="ciso-agenda-title">Leadership Networking Lunch</h3>
                      <p className="ciso-agenda-desc">Exclusive luncheon and continued closed-door discussions.</p>
                    </div>
                  </div>

                  {/* Presenter / Partner Info */}
                  <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-4">Hosted By</h4>
                    <div className="flex items-center justify-center gap-6">
                      <Image src="/images/ciso-roundtable/SSquad_logo.svg" alt="Ssquad Global" width={120} height={36} className="h-9 w-auto" />
                      <span className="text-slate-400 font-medium">&</span>
                      <Image src="/images/ciso-roundtable/25_securonix_logo-type_dark.png" alt="Securonix" width={160} height={52} className="h-11 sm:h-[52px] w-auto object-contain" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div id="rsvp" className="lg:col-span-6 ciso-animate-fade-in-up ciso-delay-200">
                <div className="ciso-event-card">
                  <div className="mb-8 border-b border-slate-100 pb-6">
                    <h2 className="text-3xl font-bold text-slate-900">Event Registration</h2>
                    <p className="text-slate-500 mt-2 text-lg italic tracking-wide">By invitation only</p>
                  </div>

                  {error && (
                    <div className="mb-6 rounded-xl p-4 text-sm font-medium bg-red-50 text-red-800 border border-red-200 flex items-center">
                      <i className="ph ph-warning-circle mr-2 text-lg"></i>
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                    {/* RSVP Status */}
                    <div className="ciso-form-group space-y-3">
                      <label className="ciso-form-label">RSVP <span className="text-ssg-red">*</span></label>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="radio" name="rsvp_status" value="Attending" required className="ciso-form-radio-custom" />
                          <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">I will be attending the event</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="radio" name="rsvp_status" value="Not Attending" required className="ciso-form-radio-custom" />
                          <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">I will NOT be attending the event</span>
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="ciso-form-group">
                        <label htmlFor="first_name" className="ciso-form-label">First Name <span className="text-ssg-red">*</span></label>
                        <input type="text" id="first_name" name="first_name" required placeholder="John" autoComplete="off" className="ciso-form-input" />
                      </div>
                      <div className="ciso-form-group">
                        <label htmlFor="last_name" className="ciso-form-label">Last Name <span className="text-ssg-red">*</span></label>
                        <input type="text" id="last_name" name="last_name" required placeholder="Doe" autoComplete="off" className="ciso-form-input" />
                      </div>
                    </div>

                    <div className="ciso-form-group">
                      <label htmlFor="company_name" className="ciso-form-label">Company Name <span className="text-ssg-red">*</span></label>
                      <input type="text" id="company_name" name="company_name" required placeholder="Your Organization Ltd." autoComplete="off" className="ciso-form-input" />
                    </div>

                    <div className="ciso-form-group">
                      <label htmlFor="designation" className="ciso-form-label">Designation <span className="text-ssg-red">*</span></label>
                      <input type="text" id="designation" name="designation" required placeholder="Chief Information Security Officer" autoComplete="off" className="ciso-form-input" />
                    </div>

                    <div className="ciso-form-group">
                      <label htmlFor="industry" className="ciso-form-label">Industry <span className="text-ssg-red">*</span></label>
                      <select id="industry" name="industry" required className="ciso-form-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_16px_center] bg-no-repeat pr-10 hover:bg-slate-50">
                        <option value="" disabled defaultValue="">Select your industry</option>
                        <option value="Accounting">Accounting / Finance</option>
                        <option value="Banking">Banking</option>
                        <option value="Technology">Information Technology</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Retail">Retail</option>
                        <option value="Government">Government / Public Sector</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="ciso-form-group">
                        <label htmlFor="email" className="ciso-form-label">Corporate Email <span className="text-ssg-red">*</span></label>
                        <input type="email" id="email" name="email" required placeholder="john.doe@company.com" autoComplete="off" className="ciso-form-input" />
                      </div>
                      <div className="ciso-form-group">
                        <label htmlFor="phone" className="ciso-form-label">Phone Number <span className="text-ssg-red">*</span></label>
                        <input type="tel" id="phone" name="phone" required placeholder="+60 12-345 6789" autoComplete="off" className="ciso-form-input" />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-2">
                      <button 
                        type="submit" 
                        disabled={isPending}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-ssg-red hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ssg-red focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isPending ? (
                          <>Processing... <i className="ph ph-spinner animate-spin"></i></>
                        ) : (
                          <>Submit Registration <i className="ph ph-paper-plane-tilt"></i></>
                        )}
                      </button>
                      <p className="text-center text-xs text-slate-500 mt-4">
                        By submitting this form, you acknowledge that your information will be processed in accordance with our Privacy Policy.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Hosts Section */}
        <section className="py-20 bg-white relative z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                Event Hosts
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Proudly jointly hosted by Ssquad and Securonix.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Ssquad */}
              <div className="border border-slate-100 rounded-3xl p-10 bg-slate-50 text-center hover:shadow-lg transition-shadow">
                <div className="h-20 flex items-center justify-center mb-6">
                  <Image src="/images/ciso-roundtable/SSquad_logo.svg" alt="Ssquad Global" width={160} height={56} className="h-14 w-auto object-contain" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ssquad Global is a premier provider of Intelligence Led Proactive CyberDefence. We partner with global enterprises to build resilient infrastructures capable of withstanding the most sophisticated cyber threats.
                </p>
              </div>

              {/* Securonix */}
              <div className="border border-slate-100 rounded-3xl p-10 bg-slate-50 text-center hover:shadow-lg transition-shadow">
                <div className="h-20 flex items-center justify-center mb-6">
                  <Image src="/images/ciso-roundtable/25_securonix_logo-type_dark.png" alt="Securonix" width={200} height={80} className="h-20 w-auto object-contain" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Securonix is redefining SIEM for today's hybrid cloud, data-driven enterprise. Built on big data architecture, Securonix delivers advanced analytics, behavioral visibility, and automated response capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ssg-dark py-12 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-slate-400 text-sm">
          <div className="flex justify-center mb-6 opacity-80">
            <Image src="/images/ciso-roundtable/SSquad_logo_white.svg" alt="Ssquad Global" width={120} height={40} className="h-10 w-auto" />
          </div>
          <p>© 2026 Ssquad Global. All rights reserved.</p>
          <p className="mt-2 text-xs text-slate-500">Intelligence Led Proactive CyberDefence</p>
        </div>
      </footer>
    </div>
  );
}
