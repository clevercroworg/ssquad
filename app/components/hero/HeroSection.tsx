"use client";

import { useState, useEffect, useRef, memo } from 'react';
import Link from 'next/link';


export default function HeroSection() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.hero-fade-up');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-10');
      }, 100 + i * 150);
    });
  }, []);

  return (
    <section className="relative w-full bg-[#020408] overflow-hidden">
      
      {/* CYBER NETWORK LOGIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center w-full h-full overflow-hidden bg-[#000205]">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-overlay"></div>
        
        {/* Animated Cyber / Circuit Network */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-80" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="glow-red">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="glow-cyber">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Grid structural dots */}
          <pattern id="dot-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.06)" />
          </pattern>
          <rect x="0" y="0" width="1000" height="1000" fill="url(#dot-grid)" />

          {/* Core connection pathways */}
          <g stroke="rgba(236,32,36,0.12)" strokeWidth="1" fill="none">
            <path d="M-100,200 L200,400 L400,250 L600,500 L800,300 L1100,600" />
            <path d="M-100,800 L300,600 L500,750 L700,500 L1100,200" />
            <path d="M200,-100 L400,300 L250,600 L500,900 L400,1100" />
            <path d="M800,-100 L600,400 L750,700 L500,1100" stroke="rgba(63,18,108,0.25)" />
            
            <path d="M0,450 L350,450 L350,650 L1000,650" />
            <path d="M0,150 L550,150 L550,850 L1000,850" />
          </g>

          {/* Glowing Animated Data Streams */}
          <g strokeWidth="2.5" fill="none">
            <path d="M-100,200 L200,400 L400,250 L600,500 L800,300 L1100,600" stroke="var(--ssg-red)" filter="url(#glow-red)" className="circuit-stream-1" />
            <path d="M-100,800 L300,600 L500,750 L700,500 L1100,200" stroke="var(--ssg-red)" filter="url(#glow-red)" className="circuit-stream-2" />
            <path d="M200,-100 L400,300 L250,600 L500,900 L400,1100" stroke="var(--ssg-red)" filter="url(#glow-red)" className="circuit-stream-3" />
            <path d="M800,-100 L600,400 L750,700 L500,1100" stroke="var(--ssg-cyber)" filter="url(#glow-cyber)" className="circuit-stream-4" />
            
            <path d="M0,450 L350,450 L350,650 L1000,650" stroke="var(--ssg-cyber)" filter="url(#glow-cyber)" className="circuit-stream-5" />
            <path d="M0,150 L550,150 L550,850 L1000,850" stroke="var(--ssg-red)" filter="url(#glow-red)" className="circuit-stream-6" />
          </g>

          {/* Data Nodes */}
          <g fill="var(--ssg-red)">
            <circle cx="200" cy="400" r="4" className="node-pulse-1" />
            <circle cx="400" cy="250" r="3" className="node-pulse-2" />
            <circle cx="600" cy="500" r="5" className="node-pulse-3" />
            <circle cx="800" cy="300" r="3" />
            
            <circle cx="300" cy="600" r="4" className="node-pulse-2" />
            <circle cx="500" cy="750" r="3" className="node-pulse-1" />
            <circle cx="700" cy="500" r="5" className="node-pulse-3" />
            
            <circle cx="400" cy="300" r="4" />
            <circle cx="250" cy="600" r="5" className="node-pulse-3" />
            <circle cx="500" cy="900" r="3" className="node-pulse-2" />
            
            <circle cx="350" cy="450" r="4" fill="white" className="node-pulse-1" />
            <circle cx="350" cy="650" r="4" fill="white" className="node-pulse-2" />
            <circle cx="550" cy="150" r="3" fill="var(--ssg-cyber)" className="node-pulse-3" />
            <circle cx="550" cy="850" r="3" fill="var(--ssg-cyber)" className="node-pulse-1" />

            <circle cx="600" cy="400" r="4" fill="var(--ssg-cyber)" className="node-pulse-2" />
            <circle cx="750" cy="700" r="3" fill="var(--ssg-cyber)" className="node-pulse-1" />
          </g>
        </svg>

        {/* RESTORED FINGERPRINT BACKGROUND */}
        <div className="absolute flex items-center justify-center w-full h-full opacity-80 pointer-events-none z-10 overflow-hidden">
          <i className="ph ph-light ph-fingerprint text-[#1c2438] text-[150vw] sm:text-[120vw] md:text-[120vh] lg:text-[140vh] leading-none"></i>
        </div>

        <div className="absolute inset-0 flex items-center justify-center w-full h-full hero-biometric-reveal pointer-events-none z-20 overflow-hidden">
          <i className="ph ph-light ph-fingerprint text-[var(--ssg-red)] opacity-90 drop-shadow-[0_0_60px_rgba(236,32,36,1)] text-[150vw] sm:text-[120vw] md:text-[120vh] lg:text-[140vh] leading-none"></i>
        </div>

        {/* Laser Sweep Layer */}
        <div className="absolute left-0 w-full h-[2px] bg-white z-30 shadow-[0_0_20px_#fff,0_0_50px_#ec2024,0_0_80px_#ec2024] hero-laser-sweep opacity-90">
          <div className="absolute top-[2px] left-0 w-full h-[150px] bg-gradient-to-b from-[var(--ssg-red)]/20 to-transparent"></div>
          <div className="absolute -top-[150px] left-0 w-full h-[150px] bg-gradient-to-t from-[var(--ssg-red)]/20 to-transparent"></div>
        </div>

        {/* Ambient colored glowing orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--ssg-red)]/15 blur-[150px] rounded-full mix-blend-screen -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--ssg-cyber)]/20 blur-[200px] rounded-full mix-blend-screen translate-y-1/2 -translate-x-1/4"></div>
        
        {/* Center spotlight to ensure text readability */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[100%] max-h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(2,4,8,0.95)_0%,rgba(2,4,8,0.7)_40%,rgba(2,4,8,0)_70%)] z-10"></div>
      </div>

      {/* FULL-SCREEN COMMANDING TYPOGRAPHY (INITIAL VIEW) */}
      <div className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 w-full mx-auto z-20 pt-32 pb-16">
        
        <div className="max-w-7xl mx-auto flex flex-col items-center mt-12 md:mt-8">
          <div className="hero-fade-up opacity-0 translate-y-10 transition-all duration-1000 ease-out inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl mb-6 shadow-[0_0_30px_rgba(236,32,36,0.15)] ring-1 ring-[var(--ssg-red)]/30">
            <i className="ph ph-fill ph-fingerprint text-[var(--ssg-red)] text-lg animate-pulse shadow-[0_0_15px_var(--ssg-red)]"></i>
            <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.3em] uppercase text-white drop-shadow-md">Verified Identity Perimeter</span>
          </div>
          
          <h1 className="hero-fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-100 ease-out font-heading text-[2.2rem] leading-[1.2] min-[400px]:text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4vw] xl:text-[4rem] md:leading-[1] font-extrabold tracking-[-0.03em] text-white drop-shadow-[0_20px_50px_rgba(0,0,0,1)] px-2 w-full xl:whitespace-nowrap">
            Intelligence-Led{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[var(--ssg-red)] pb-2 md:pb-4 drop-shadow-[0_0_40px_rgba(236,32,36,0.2)]">
              Proactive Defence
            </span>
          </h1>
          
          <p className="hero-fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out mt-6 md:mt-8 text-white/90 text-[0.9rem] min-[400px]:text-[0.95rem] sm:text-base md:text-lg lg:text-xl leading-[1.6] sm:leading-[1.7] max-w-6xl font-normal tracking-wide px-4 drop-shadow-[0_5px_10px_rgba(0,0,0,1)] mx-auto text-center">
            Unify your security data with real-time threat intelligence and leverage AI-driven automation<br className="hidden lg:block" /> to detect, investigate, and respond to threats before they impact your business.
          </p>
          
          <div className="hero-fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center w-full max-w-lg sm:max-w-none mx-auto px-4">
            <Link href="/contact" className="epic-pill-btn group w-full sm:w-auto justify-center px-8 md:px-12 py-4 md:py-5 text-base md:text-[1.1rem] font-bold bg-[var(--ssg-red)] text-white rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(236,32,36,0.5)] flex items-center gap-3 relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Talk to an expert
                <i className="ph ph-bold ph-arrow-right text-xl group-hover:translate-x-2 transition-transform"></i>
              </span>
            </Link>
            <Link href="/#solutions" className="w-full sm:w-auto text-center px-8 md:px-12 py-4 md:py-5 text-base md:text-[1.1rem] font-bold bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-full transition-all hover:scale-105 backdrop-blur-md">
              Explore our services
            </Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hero-laser-sweep { animation: laserSweep 4s ease-in-out infinite alternate; }
        .hero-biometric-reveal { animation: biometricReveal 4s ease-in-out infinite alternate; }
        @keyframes laserSweep {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes biometricReveal {
          0% { clip-path: inset(0 0 100% 0); }
          100% { clip-path: inset(0 0 0% 0); }
        }
        
        .circuit-stream-1 { stroke-dasharray: 80 800; animation: streamDraw 8s linear infinite; }
        .circuit-stream-2 { stroke-dasharray: 60 700; animation: streamDraw 12s linear infinite reverse; }
        .circuit-stream-3 { stroke-dasharray: 100 600; animation: streamDraw 10s linear infinite; }
        .circuit-stream-4 { stroke-dasharray: 50 650; animation: streamDraw 9s linear infinite reverse; }
        .circuit-stream-5 { stroke-dasharray: 70 800; animation: streamDraw 11s linear infinite; }
        .circuit-stream-6 { stroke-dasharray: 90 900; animation: streamDraw 14s linear infinite reverse; }
        
        @keyframes streamDraw {
          0% { stroke-dashoffset: 2000; }
          100% { stroke-dashoffset: 0; }
        }

        .node-pulse-1 { animation: nodePulse 3s ease-in-out infinite; }
        .node-pulse-2 { animation: nodePulse 2s ease-in-out infinite 0.5s; }
        .node-pulse-3 { animation: nodePulse 4s ease-in-out infinite 1s; }

        @keyframes nodePulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; fill: #fff; }
        }

        @keyframes eqBar1 { 0%,100%{transform:scaleY(.25)} 50%{transform:scaleY(1)} }
        @keyframes eqBar2 { 0%,100%{transform:scaleY(.4)} 40%{transform:scaleY(.9)} 70%{transform:scaleY(.6)} }
        @keyframes eqBar3 { 0%,100%{transform:scaleY(.3)} 60%{transform:scaleY(1)} }
        @keyframes eqBar4 { 0%,100%{transform:scaleY(.5)} 30%{transform:scaleY(.8)} 80%{transform:scaleY(1)} }
        @keyframes eqBar5 { 0%,100%{transform:scaleY(.2)} 45%{transform:scaleY(.7)} 75%{transform:scaleY(1)} }
        @keyframes wavePulseRipple {
          0% { opacity: 0; transform: scale(0.55); }
          22% { opacity: 0.36; }
          100% { opacity: 0; transform: scale(1.2); }
        }
        @keyframes waveGridShift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 52px 0, 0 34px; }
        }
        @keyframes waveGlow {
          0%,100% { opacity: 0.38; }
          50% { opacity: 0.78; }
        }
        @keyframes cardScanSweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}} />
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// TELEMETRY CARD — Premium design with red wave glow, brighter colors
// Zero-flicker: feed text updated via DOM refs, not React state
// ─────────────────────────────────────────────────────────────────────
const authenticCapabilities = [
  { icon: 'ph-fingerprint', iconColor: 'text-[var(--ssg-red)]', bg: 'bg-[var(--ssg-red)]/10', border: 'border-[var(--ssg-red)]/20', title: 'Zero-Trust Policy Enforced', desc: 'Identity-first perimeter verified for 1,204 active sessions.' },
  { icon: 'ph-cloud-check', iconColor: 'text-[var(--ssg-cyber)]', bg: 'bg-[var(--ssg-cyber)]/10', border: 'border-[var(--ssg-cyber)]/20', title: 'Cloud Posture Scanned', desc: 'Multi-cloud environment compliance verified against CIS benchmarks.' },
  { icon: 'ph-robot', iconColor: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', title: 'MDR AI Core Active', desc: 'Elite human analysts augmented by AI currently monitoring all vectors.' },
  { icon: 'ph-shield-check', iconColor: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', title: 'Endpoint EDR Updated', desc: 'Next-generation telemetry pushed to enterprise devices.' },
  { icon: 'ph-users', iconColor: 'text-[var(--ssg-red)]', bg: 'bg-[var(--ssg-red)]/10', border: 'border-[var(--ssg-red)]/20', title: 'IAM Protocols Synced', desc: 'Granular access controls and MFA integrations actively routing.' },
  { icon: 'ph-activity', iconColor: 'text-[var(--ssg-cyber)]', bg: 'bg-[var(--ssg-cyber)]/10', border: 'border-[var(--ssg-cyber)]/20', title: 'Threat Intel Ingested', desc: 'Global threat feeds continuously updating local detection rules.' },
];

const TelemetryDashboard = memo(function TelemetryDashboard() {
  const [threatCount, setThreatCount] = useState(1458);
  const [endpointCount, setEndpointCount] = useState(87251);
  const [feedIndex, setFeedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll('.hero-fade-up');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-10');
      }, 100 + i * 150);
    });

    const interval = setInterval(() => {
      // Tick numbers up slowly
      setThreatCount(p => p + Math.floor(Math.random() * 3) + 1);
      setEndpointCount(p => p + Math.floor(Math.random() * 5));
      
      // Trigger feed animation
      setIsAnimating(true);
      setTimeout(() => {
        setFeedIndex(p => (p + 1) % authenticCapabilities.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out before swapping data
      
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Get current 3 items to show
  const currentFeed = [
    authenticCapabilities[(feedIndex) % authenticCapabilities.length],
    authenticCapabilities[(feedIndex + 1) % authenticCapabilities.length],
    authenticCapabilities[(feedIndex + 2) % authenticCapabilities.length],
  ];

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_8px_80px_rgba(236,32,36,0.08),0_4px_40px_rgba(0,0,0,0.5)]">
      
      {/* ── RED WAVE ANIMATION EFFECTS ── */}
      <div className="absolute pointer-events-none z-[1]" style={{ width: '320px', height: '320px', right: '12%', top: '15%', borderRadius: '999px', border: '1.5px solid rgba(208,46,50,0.35)', boxShadow: 'inset 0 0 46px rgba(63,18,108,0.2)', opacity: 0, transform: 'scale(0.55)', animation: 'wavePulseRipple 4.2s ease-out infinite' }}></div>
      <div className="absolute pointer-events-none z-[1]" style={{ width: '420px', height: '420px', left: '5%', bottom: '5%', borderRadius: '999px', border: '1.5px solid rgba(63,18,108,0.4)', boxShadow: 'inset 0 0 46px rgba(208,46,50,0.15)', opacity: 0, transform: 'scale(0.55)', animation: 'wavePulseRipple 5s ease-out infinite 0.9s' }}></div>
      <div className="absolute pointer-events-none z-[1]" style={{ width: '260px', height: '260px', left: '40%', top: '30%', borderRadius: '999px', border: '1px solid rgba(236,32,36,0.25)', opacity: 0, transform: 'scale(0.55)', animation: 'wavePulseRipple 3.8s ease-out infinite 1.5s' }}></div>

      <div className="absolute pointer-events-none z-[1]" style={{ left: '-15%', right: '-15%', bottom: '-40px', height: '160px', opacity: 0.5, transform: 'perspective(800px) rotateX(66deg)', transformOrigin: 'center bottom', backgroundImage: 'repeating-linear-gradient(90deg, rgba(208,46,50,0.3) 0, rgba(208,46,50,0.3) 2px, transparent 1px, transparent 40px), repeating-linear-gradient(180deg, rgba(63,18,108,0.25) 0, rgba(63,18,108,0.25) 2px, transparent 1px, transparent 28px)', animation: 'waveGridShift 9s linear infinite', maskImage: 'linear-gradient(180deg, transparent 0, black 22%, black 76%, transparent 100%)', WebkitMaskImage: 'linear-gradient(180deg, transparent 0, black 22%, black 76%, transparent 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 20%, rgba(208,46,50,0.35), transparent 60%)', animation: 'waveGlow 3.8s ease-in-out infinite' }}></div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'linear-gradient(100deg, transparent 16%, rgba(255,255,255,0.06) 34%, rgba(208,46,50,0.12) 47%, rgba(63,18,108,0.08) 55%, transparent 72%)', transform: 'translateX(-120%)', animation: 'cardScanSweep 5s ease-in-out infinite', opacity: 0.7 }}></div>

      <div className="absolute -bottom-16 -right-16 w-[280px] h-[280px] rounded-full bg-[var(--ssg-cyber)]/20 blur-[90px] pointer-events-none z-0"></div>
      <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[var(--ssg-red)]/15 blur-[70px] pointer-events-none z-0"></div>

      {/* ── HEADER BAR ── */}
      <div className="relative z-10 bg-[#0c1019]/90 backdrop-blur-xl border-b border-white/[0.08] px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[var(--ssg-red)]/15 border border-[var(--ssg-red)]/25 flex items-center justify-center shadow-[0_0_20px_rgba(236,32,36,0.15)]">
            <i className="ph ph-fill ph-globe-hemisphere-east text-[var(--ssg-red)] text-xl"></i>
          </div>
          <div>
            <h3 className="text-white text-base sm:text-lg font-bold tracking-wide">Global Security Operations</h3>
            <p className="text-[#5c6578] text-[0.65rem] sm:text-xs font-medium tracking-widest uppercase mt-0.5">Enterprise-grade protection</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Live Equalizer */}
          <div className="hidden sm:flex items-end gap-[2px] h-[16px]">
            <div className="w-[3px] h-full bg-emerald-400 rounded-sm origin-bottom" style={{ animation: 'eqBar1 1.2s ease-in-out infinite' }}></div>
            <div className="w-[3px] h-full bg-emerald-400 rounded-sm origin-bottom" style={{ animation: 'eqBar2 0.9s ease-in-out infinite' }}></div>
            <div className="w-[3px] h-full bg-emerald-400 rounded-sm origin-bottom" style={{ animation: 'eqBar3 1.4s ease-in-out infinite' }}></div>
            <div className="w-[3px] h-full bg-emerald-400 rounded-sm origin-bottom" style={{ animation: 'eqBar4 1.0s ease-in-out infinite' }}></div>
          </div>
          <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-[pulse_2s_ease-in-out_infinite]"></span>
            <span className="text-emerald-400 text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest">Active Defenses</span>
          </span>
        </div>
      </div>

      {/* ── CARD BODY ── */}
      <div className="relative z-10 bg-[#080c14]/85 backdrop-blur-2xl">
        <div className="grid xl:grid-cols-12 divide-y xl:divide-y-0 xl:divide-x divide-white/[0.06]">
          
          {/* LEFT PANEL: Real Business Metrics (Live) */}
          <div className="xl:col-span-4 p-6 sm:p-8 flex flex-col gap-5">
            
            <div className="rounded-2xl bg-gradient-to-br from-[#111827]/80 to-[#0d1117]/60 p-5 sm:p-6 border border-white/[0.07] relative overflow-hidden group hover:border-[var(--ssg-red)]/25 transition-colors duration-300">
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-[var(--ssg-red)]/10 rounded-full blur-3xl group-hover:bg-[var(--ssg-red)]/20 transition-colors duration-500"></div>
              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="text-[#8b95a9] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em]">Threats Neutralized (24h)</span>
                <i className="ph ph-fill ph-shield-slash text-[var(--ssg-red)] text-xl opacity-60"></i>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight relative z-10 flex items-center">
                {threatCount.toLocaleString()}<span className="text-[var(--ssg-red)] ml-0.5 animate-[pulse_1s_ease-in-out_infinite]">_</span>
              </div>
              <div className="mt-3 relative z-10 flex items-center gap-2">
                <i className="ph ph-fill ph-trend-up text-[var(--ssg-red)] text-sm"></i>
                <span className="text-[#5c6578] text-xs font-medium">Continuous active threat hunting.</span>
              </div>
            </div>
            
            <div className="rounded-2xl bg-gradient-to-br from-[#111827]/80 to-[#0d1117]/60 p-5 sm:p-6 border border-white/[0.07] relative overflow-hidden group hover:border-[var(--ssg-cyber)]/25 transition-colors duration-300">
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-[var(--ssg-cyber)]/10 rounded-full blur-3xl group-hover:bg-[var(--ssg-cyber)]/20 transition-colors duration-500"></div>
              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="text-[#8b95a9] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em]">Active Nodes Secured</span>
                <i className="ph ph-fill ph-monitor text-[var(--ssg-cyber)] text-xl opacity-60"></i>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight relative z-10 flex items-center">
                {endpointCount.toLocaleString()}<span className="text-[var(--ssg-cyber)] ml-0.5 animate-[pulse_1s_ease-in-out_infinite]">_</span>
              </div>
              <div className="mt-3 relative z-10 flex items-center gap-2">
                <i className="ph ph-fill ph-check-circle text-emerald-400 text-sm"></i>
                <span className="text-[#5c6578] text-xs font-medium">99.99% infrastructure uptime SLA.</span>
              </div>
            </div>
            
          </div>

          {/* RIGHT PANEL: Live Feed of Core Capabilities */}
          <div className="xl:col-span-8 p-6 sm:p-8 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <i className="ph ph-fill ph-crosshair text-amber-400 text-base sm:text-lg"></i>
                <span className="text-xs sm:text-sm uppercase tracking-[0.15em] font-bold text-white/50">Active Security Matrix</span>
              </div>
              <span className="text-[0.6rem] sm:text-xs uppercase tracking-widest font-semibold text-[#5c6578] animate-pulse">Syncing...</span>
            </div>
            
            <div className="flex flex-col gap-3 flex-1 relative min-h-[280px]">
              {currentFeed.map((cap, index) => (
                <div 
                  key={cap.title + index} 
                  className={`flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl bg-white/[0.025] border border-white/[0.06] transition-all duration-500 ease-in-out absolute w-full`}
                  style={{ 
                    top: `${index * 33}%`,
                    opacity: isAnimating ? 0 : 1,
                    transform: isAnimating ? 'translateY(10px) scale(0.98)' : 'translateY(0) scale(1)',
                    transitionDelay: `${isAnimating ? 0 : index * 100}ms`
                  }}
                >
                  <div className={`w-10 h-10 rounded-lg ${cap.bg} flex items-center justify-center flex-shrink-0 border ${cap.border}`}>
                    <i className={`ph ph-fill ${cap.icon} ${cap.iconColor} text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white text-sm sm:text-base font-bold tracking-wide mb-1 flex items-center gap-2">
                      {cap.title}
                      {index === 0 && <span className="w-1.5 h-1.5 rounded-full bg-[var(--ssg-red)] animate-ping"></span>}
                    </h4>
                    <p className="text-[#9aa3b5] text-xs sm:text-sm font-medium leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});
