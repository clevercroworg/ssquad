"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionV1Props {
  badge?: string;
  heading?: string;
  headingAccent?: string;
  subheading?: string;
}

export default function HeroSectionV1({
  badge = "Trusted Partner in Digital Innovation",
  heading = "Enterprise Technology,",
  headingAccent = "Reimagined",
  subheading = "Empower your business with quantum-safe security and unshakeable cyber resilience. We build the intelligent infrastructure that protects modern enterprise.",
}: HeroSectionV1Props) {
  
  const [mounted, setMounted] = useState(false);
  const [identities, setIdentities] = useState(0);
  const [groups, setGroups] = useState(0);
  const [devices, setDevices] = useState(0);
  const [apps, setApps] = useState(0);
  const [detectionRate, setDetectionRate] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Initial reveals
    const reveals = document.querySelectorAll('.hero-v1-anim');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
        el.classList.remove('opacity-0', 'translate-y-10', '-translate-x-10');
      }, 100 + i * 150);
    });

    // Smooth Number Count-up Animation
    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;
    
    let currentStep = 0;
    const counterInterval = setInterval(() => {
      currentStep++;
      setIdentities(Math.floor((94 / steps) * currentStep));
      setGroups(Math.floor((46 / steps) * currentStep));
      setDevices(Math.floor((38 / steps) * currentStep));
      setApps(Math.floor((1100 / steps) * currentStep));
      setDetectionRate(Math.floor((97.8 / steps) * currentStep * 10) / 10);
      
      if (currentStep >= steps) {
        clearInterval(counterInterval);
        setIdentities(94);
        setGroups(46);
        setDevices(38);
        setApps(1100);
        setDetectionRate(97.8);
      }
    }, intervalTime);

    // Subtle Live Ticker after initial count to show life
    const liveTicker = setInterval(() => {
      setApps(prev => prev + (Math.random() > 0.5 ? 1 : 0));
    }, 5000);

    return () => {
      clearInterval(counterInterval);
      clearInterval(liveTicker);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#020810] overflow-hidden min-h-[100svh] flex items-center pt-24 pb-16">
      
      {/* ═══════════ AI GENERATED SERVER CLOUD BACKGROUND ═══════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
        
        <Image 
          src="/images/hires-red-blue-server.png" 
          alt="Dual Tone Server Cloud Background" 
          fill 
          priority 
          quality={100}
          className="object-cover object-center scale-105 animate-[v1BgPan_40s_linear_infinite_alternate]"
        />
        
        {/* Deep Blue Cinematic Vignette / Overlays (Reduced on the right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020818] via-[#020818]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,8,16,0.6)_100%)]"></div>

        {/* ── Horizontal Scan Lines ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-overlay opacity-30">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
        </div>

        {/* ── Animated Vertical Data Pulses ── */}
        <div className="absolute inset-0 overflow-hidden opacity-80 mix-blend-screen pointer-events-none">
           {[...Array(20)].map((_, i) => (
             <div 
               key={i} 
               className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#3b82f6]/20 to-transparent"
               style={{ 
                 left: `${5 + (i * 4.5)}%`,
                 opacity: 0.1 + (i % 3) * 0.2,
               }}
             >
               <div 
                 className={`absolute top-0 left-[-1px] w-[3px] h-[150px] blur-[2px] ${i % 3 === 0 ? 'bg-[var(--ssg-red)]' : 'bg-[#3b82f6]'} animate-[v1DataDrop_var(--drop-dur)_linear_infinite]`}
                 style={{ 
                   '--drop-dur': `${3 + (i % 5)}s`,
                   animationDelay: `${(i % 7) * 0.5}s` 
                 } as any}
               ></div>
             </div>
           ))}
        </div>

        {/* ── Vertical Laser Sweep Layer ── */}
        <div className="absolute left-0 w-full h-[2px] bg-white z-10 shadow-[0_0_15px_#fff,0_0_40px_#ec2024,0_0_80px_#ec2024] v1-laser-sweep opacity-70 pointer-events-none mix-blend-screen">
          <div className="absolute top-[2px] left-0 w-full h-[150px] bg-gradient-to-b from-[var(--ssg-red)]/20 to-transparent"></div>
          <div className="absolute -top-[150px] left-0 w-full h-[150px] bg-gradient-to-t from-[var(--ssg-red)]/20 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-20 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-8 items-center">
          
          {/* ── LEFT: TYPOGRAPHY & CTA ── */}
          <div className="lg:col-span-5 flex flex-col items-start text-left relative z-30">
            
            {/* Headline */}
            <h1 className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-100 ease-out font-heading text-[2.5rem] leading-[1.1] sm:text-5xl md:text-[4.5rem] lg:text-[4rem] xl:text-[4.5rem] font-extrabold tracking-tight text-white w-full drop-shadow-2xl">
              {heading} <br/>
              <span className="text-[var(--ssg-red)] drop-shadow-[0_0_15px_rgba(236,32,36,0.4)] relative inline-block pb-1 mt-2">
                {headingAccent}
              </span>
            </h1>
            
            {/* Description */}
            <p className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-200 ease-out mt-6 md:mt-8 text-slate-300 text-[1rem] sm:text-[1.1rem] leading-[1.8] max-w-2xl font-light pl-6 border-l-2 border-[#3b82f6]/40 relative bg-gradient-to-r from-[#050a18]/80 to-transparent p-4 py-3 rounded-r-xl backdrop-blur-sm">
              <span className="absolute left-[-2px] top-0 w-[2px] h-full bg-[#3b82f6] shadow-[0_0_15px_#3b82f6]"></span>
              {subheading}
            </p>

            {/* CTA Buttons */}
            <div className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-300 ease-out mt-10 flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto">
              <Link href="/contact" className="group relative w-full sm:w-auto justify-center px-8 py-4 text-[0.95rem] font-bold bg-[var(--ssg-red)] text-white overflow-hidden rounded shadow-[0_0_20px_rgba(236,32,36,0.4)] hover:shadow-[0_0_40px_rgba(236,32,36,0.6)] transition-all duration-300 flex items-center gap-3 border border-red-400/50">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[v1Sweep_1s_ease-in-out]"></span>
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider text-xs">
                  Talk to an Expert <i className="ph-bold ph-arrow-right text-lg transform group-hover:translate-x-1 transition-transform"></i>
                </span>
              </Link>
              <Link href="/#solutions" className="group w-full sm:w-auto justify-center px-8 py-4 text-[0.95rem] font-bold bg-[#050a18]/80 backdrop-blur-md border border-[#3b82f6]/40 text-white rounded hover:bg-[#3b82f6]/20 transition-colors duration-300 flex items-center gap-3 uppercase tracking-wider text-xs shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
                Explore Our Services <i className="ph-bold ph-squares-four text-lg text-[#3b82f6] group-hover:text-white transition-colors"></i>
              </Link>
            </div>
          </div>

          {/* ── RIGHT: NEW IDENTITY RISK POSTURE DASHBOARD ── */}
          <div className="hidden lg:flex lg:col-span-7 relative z-30 hero-v1-anim opacity-0 translate-x-10 transition-all duration-1000 delay-500 ease-out justify-end xl:pl-4">
            
            <div className="relative w-full max-w-[750px] xl:max-w-[800px] p-5 xl:p-7 rounded-2xl bg-[#0f1522]/95 backdrop-blur-3xl border border-[#1e293b]/80 shadow-[0_30px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)] flex flex-col gap-6">
              
              {/* Scan Line Effect Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none rounded-2xl mix-blend-overlay"></div>

              {/* ── TOP SECTION: POSTURE & STATS ── */}
              <div className="flex flex-col sm:flex-row items-center gap-6 xl:gap-8 pb-5 border-b border-[#1e293b]/60 relative z-10">
                {/* Left: Title & Gauge */}
                <div className="flex items-center gap-5 w-full sm:w-auto justify-between sm:justify-start">
                  <div className="flex flex-col">
                    <h3 className="text-white font-bold text-sm xl:text-base whitespace-nowrap">Identity Risk Posture</h3>
                    <p className="text-slate-400 text-[0.65rem] xl:text-xs mt-0.5">Overall Identity Risk Score</p>
                  </div>
                  
                  <div className="relative w-28 h-14 xl:w-32 xl:h-16 flex-shrink-0">
                    <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible drop-shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#1e293b" strokeWidth="12" strokeLinecap="round" />
                      <path 
                        d="M 10 50 A 40 40 0 0 1 90 50" 
                        fill="none" 
                        stroke="#10b981" 
                        strokeWidth="12" 
                        strokeLinecap="round" 
                        style={{ 
                          strokeDasharray: 125.6, 
                          strokeDashoffset: mounted ? (125.6 * (1 - 0.61)) : 125.6, 
                          transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s' 
                        }} 
                      />
                    </svg>
                    <div className="absolute inset-x-0 bottom-0 text-center flex flex-col items-center justify-end h-full pb-0.5">
                       <span className="text-white font-bold text-lg xl:text-xl leading-none">61%</span>
                       <span className="text-slate-300 text-[0.6rem] xl:text-[0.65rem] mt-0.5">Medium Risk</span>
                    </div>
                  </div>
                </div>

                {/* Right: Divided Stats */}
                <div className="flex-1 flex justify-between items-center sm:pl-6 sm:border-l border-[#1e293b] w-full">
                   <div className="text-center px-1">
                      <p className="text-slate-400 text-[0.65rem] mb-1">Identities</p>
                      <p className="text-white font-bold text-xl xl:text-2xl">{identities}</p>
                   </div>
                   <div className="w-px h-8 bg-[#1e293b]"></div>
                   <div className="text-center px-1">
                      <p className="text-slate-400 text-[0.65rem] mb-1">Groups</p>
                      <p className="text-white font-bold text-xl xl:text-2xl">{groups}</p>
                   </div>
                   <div className="w-px h-8 bg-[#1e293b]"></div>
                   <div className="text-center px-1">
                      <p className="text-slate-400 text-[0.65rem] mb-1">Devices</p>
                      <p className="text-white font-bold text-xl xl:text-2xl">{devices}</p>
                   </div>
                   <div className="w-px h-8 bg-[#1e293b]"></div>
                   <div className="text-center px-1">
                      <p className="text-slate-400 text-[0.65rem] mb-1">Apps</p>
                      <p className="text-white font-bold text-xl xl:text-2xl">{apps.toLocaleString()}</p>
                   </div>
                </div>
              </div>

              {/* ── BOTTOM SECTION: CARDS ── */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 relative z-10">
                
                {/* Threat Detection Rate — animated ring */}
                <div className="sm:col-span-3 bg-[#131b2c] rounded-xl p-4 xl:p-5 border border-[#1e293b]/80 flex flex-col items-center justify-center hover:bg-[#161f33] transition-colors">
                  <h4 className="text-white text-xs xl:text-sm font-bold mb-4 self-start">Detection Rate</h4>
                  <div className="relative w-20 h-20 xl:w-24 xl:h-24">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#1e293b" strokeWidth="8" />
                      <circle 
                        cx="50" cy="50" r="42" 
                        fill="none" 
                        stroke="#10b981" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                        style={{
                          strokeDasharray: 263.9,
                          strokeDashoffset: mounted ? (263.9 * (1 - 0.978)) : 263.9,
                          transition: 'stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
                          filter: 'drop-shadow(0 0 6px rgba(16,185,129,0.4))'
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-white font-bold text-lg xl:text-xl leading-none">{detectionRate}%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></div>
                    <span className="text-[#10b981] text-[0.6rem] xl:text-[0.65rem] font-bold">Real-time Active</span>
                  </div>
                </div>

                {/* Top Findings */}
                <div className="sm:col-span-6 bg-[#131b2c] rounded-xl p-4 xl:p-5 border border-[#1e293b]/80 hover:bg-[#161f33] transition-colors">
                  <h4 className="text-white text-xs xl:text-sm font-bold mb-4">Top Findings</h4>
                  
                  {/* Header */}
                  <div className="grid grid-cols-12 gap-3 mb-2.5">
                    <div className="col-span-2 text-slate-500 text-[0.6rem] uppercase tracking-wider">Risk</div>
                    <div className="col-span-5 text-slate-500 text-[0.6rem] uppercase tracking-wider">Finding</div>
                    <div className="col-span-5 text-slate-500 text-[0.6rem] uppercase tracking-wider">Recommendation</div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {/* Finding 1 */}
                    <div className="grid grid-cols-12 gap-3 items-start">
                      <div className="col-span-2 flex items-center gap-1.5 mt-0.5">
                        <div className="flex gap-[2px]">
                          <div className="w-[2.5px] h-3 bg-[#ef4444] rounded-sm"></div>
                          <div className="w-[2.5px] h-3 bg-[#ef4444] rounded-sm"></div>
                          <div className="w-[2.5px] h-3 bg-[#ef4444] rounded-sm"></div>
                          <div className="w-[2.5px] h-3 bg-[#ef4444] rounded-sm"></div>
                        </div>
                        <span className="text-slate-400 text-[0.65rem]">1</span>
                      </div>
                      <div className="col-span-5">
                        <p className="text-slate-300 text-[0.7rem] leading-snug">Unclaimed DNS names susceptible to subdomain takeover</p>
                      </div>
                      <div className="col-span-5">
                        <p className="text-slate-500 text-[0.7rem] leading-snug">Remove affected redirect_uri from Entra portal</p>
                      </div>
                    </div>
                    
                    {/* Finding 2 */}
                    <div className="grid grid-cols-12 gap-3 items-start">
                      <div className="col-span-2 flex items-center gap-1.5 mt-0.5">
                        <div className="flex gap-[2px]">
                          <div className="w-[2.5px] h-3 bg-[#ef4444] rounded-sm"></div>
                          <div className="w-[2.5px] h-3 bg-[#f59e0b] rounded-sm"></div>
                          <div className="w-[2.5px] h-3 bg-[#f59e0b] rounded-sm"></div>
                          <div className="w-[2.5px] h-3 bg-[#334155] rounded-sm"></div>
                        </div>
                        <span className="text-slate-400 text-[0.65rem]">2</span>
                      </div>
                      <div className="col-span-5">
                        <p className="text-slate-300 text-[0.7rem] leading-snug">MFA not enforced for all admin roles</p>
                      </div>
                      <div className="col-span-5">
                        <p className="text-slate-500 text-[0.7rem] leading-snug">Enable Conditional Access policy for global admins</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Credential Compromise */}
                <div className="sm:col-span-3 bg-[#131b2c] rounded-xl p-4 xl:p-5 border border-[#1e293b]/80 flex flex-col justify-between hover:bg-[#161f33] transition-colors">
                  <h4 className="text-white text-xs xl:text-sm font-bold mb-3">Credential Compromise</h4>
                  
                  <div className="flex flex-col gap-2 mb-3 mt-1">
                     <div className="flex items-center gap-3">
                       <span className="text-3xl xl:text-4xl font-light text-slate-300 leading-none">4</span>
                       <div className="flex gap-2">
                          <div className="flex gap-[2px] items-end h-3.5">
                             <div className="w-[2px] h-full bg-[#ef4444]"></div>
                             <div className="w-[2px] h-[80%] bg-[#ef4444]"></div>
                             <div className="w-[2px] h-[60%] bg-[#ef4444]"></div>
                          </div>
                          <span className="text-[0.6rem] text-slate-500 font-medium">1</span>
                          
                          <div className="flex gap-[2px] items-end h-3.5">
                             <div className="w-[2px] h-full bg-[#f59e0b]"></div>
                             <div className="w-[2px] h-[80%] bg-[#f59e0b]"></div>
                          </div>
                          <span className="text-[0.6rem] text-slate-500 font-medium">1</span>
                          
                          <div className="flex gap-[2px] items-end h-3.5">
                             <div className="w-[2px] h-full bg-[#eab308]"></div>
                          </div>
                          <span className="text-[0.6rem] text-slate-500 font-medium">1</span>
                          
                          <div className="flex gap-[2px] items-end h-3.5">
                             <div className="w-[2px] h-full bg-[#10b981]"></div>
                          </div>
                          <span className="text-[0.6rem] text-slate-500 font-medium">1</span>
                       </div>
                     </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-[0.7rem] text-slate-500 border-t border-[#1e293b]/80 pt-3 mt-auto">
                     <span>Resolved</span>
                     <span className="text-[#10b981] font-bold">2</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ CSS ANIMATIONS ═══════════ */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes v1BgPan {
          0% { transform: scale(1.05) translateX(0); }
          100% { transform: scale(1.05) translateX(-2%); }
        }
        
        /* CTA button sweep */
        @keyframes v1Sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        /* Vertical Data Drops */
        @keyframes v1DataDrop {
          0% { transform: translateY(-150px); opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        /* Laser Sweep */
        .v1-laser-sweep { animation: laserSweepV1 5s ease-in-out infinite alternate; }
        @keyframes laserSweepV1 {
          0% { top: -10%; opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { top: 110%; opacity: 0; }
        }

        /* Dashboard Scan Overlay */
        @keyframes dashboardScan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}} />
    </section>
  );
}
