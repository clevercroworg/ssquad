"use client";

import { useEffect, useState, useMemo, memo } from "react";

const PlatformSpotlightSection = memo(function PlatformSpotlightSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-2", "opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".harpy-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Performance Optimization: Cache random particles to prevent hydration mismatches and unnecessary re-renders
  const particles = useMemo(() => Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${Math.random() * 3 + 2.5}s`,
    delay: `${Math.random() * 2}s`,
    size: Math.random() * 2.5 + 1,
    isRed: Math.random() > 0.5
  })), []);

  return (
    <section className="relative w-full bg-[#020408] py-24 lg:py-32 overflow-hidden border-t border-white/[0.05] will-change-transform transform-gpu">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden transform-gpu">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[var(--ssg-cyber)]/10 blur-[150px] rounded-full mix-blend-screen opacity-50 -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--ssg-red)]/5 blur-[150px] rounded-full mix-blend-screen opacity-50 translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        
        {/* Sweeping Red Wave Beam */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-white/80 z-0 shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_40px_rgba(236,32,36,0.8),0_0_80px_rgba(236,32,36,1)] animate-[verticalLaserSweep_5s_ease-in-out_infinite_alternate]">
          <div className="absolute top-[2px] left-0 w-full h-[150px] bg-gradient-to-b from-[var(--ssg-red)]/20 to-transparent"></div>
          <div className="absolute -top-[150px] left-0 w-full h-[150px] bg-gradient-to-t from-[var(--ssg-red)]/20 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* ── LEFT VISUAL PANEL: Global / Satellite Animation ── */}
          <div className="lg:col-span-6 relative harpy-reveal opacity-0 translate-y-2 transition-all duration-1000 delay-200 ease-out flex items-center justify-center min-h-[400px] sm:min-h-[500px] transform-gpu">
            
            {/* Deep Space Glow */}
            <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-[var(--ssg-cyber)]/15 blur-[100px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute w-[250px] h-[250px] bg-[var(--ssg-red)]/15 blur-[80px] rounded-full mix-blend-screen pointer-events-none z-0 translate-x-1/4 translate-y-1/4"></div>

            <div className="relative w-full max-w-[400px] sm:max-w-[500px] aspect-square flex items-center justify-center transform-gpu">
              
              {/* Radar Sweep Background */}
              <div className="absolute w-[85%] h-[85%] rounded-full border border-[var(--ssg-cyber)]/10 bg-[conic-gradient(from_0deg,transparent_70%,rgba(91,46,255,0.15)_90%,rgba(91,46,255,0.5)_100%)] animate-[spin_4s_linear_infinite] [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_70%)] pointer-events-none z-0"></div>

              {/* The Central Globe Element */}
              <div className="absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-[var(--ssg-cyber)]/40 bg-[#060910] shadow-[0_0_60px_rgba(91,46,255,0.5),inset_0_0_30px_rgba(91,46,255,0.6)] overflow-hidden flex items-center justify-center z-10 transform-gpu">
                {/* Globe Grid Texture */}
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:15px_15px] rounded-full [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] animate-[spin_30s_linear_infinite]"></div>
                {/* Globe Core Glow */}
                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(236,32,36,0.25),transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]"></div>
                {/* Harpy Logo / Globe Center */}
                <i className="ph ph-globe-hemisphere-west relative z-10 text-white/70 text-6xl sm:text-7xl drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"></i>
              </div>

              {/* Orbit Ring 1 & Satellite (Cyber Violet) */}
              <div className="absolute w-full h-full sm:w-[120%] sm:h-[120%] rounded-full border-[1.5px] border-[var(--ssg-cyber)]/30 [transform-style:preserve-3d] shadow-[inset_0_0_30px_rgba(91,46,255,0.1)] orbital-ring-1">
                <div className="absolute top-0 left-1/2 -ml-2 -mt-2 w-4 h-4 bg-[var(--ssg-cyber)] rounded-full shadow-[0_0_25px_var(--ssg-cyber)] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-0 right-1/2 -mr-1.5 -mb-1.5 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]"></div>
              </div>

              {/* Orbit Ring 2 & Satellite (Red) */}
              <div className="absolute w-11/12 h-11/12 sm:w-[145%] sm:h-[145%] rounded-full border border-[var(--ssg-red)]/30 [transform-style:preserve-3d] orbital-ring-2">
                <div className="absolute top-1/4 right-0 -mt-2 -mr-2 w-4 h-4 bg-[var(--ssg-red)] rounded-full shadow-[0_0_25px_var(--ssg-red)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
                </div>
                {/* Visual Connection Beam from red sat */}
                <div className="absolute top-1/4 right-0 w-[150px] sm:w-[200px] h-[1px] bg-gradient-to-l from-[var(--ssg-red)] to-transparent origin-right -rotate-45 opacity-60"></div>
              </div>
              
              {/* Orbit Ring 3 (Emerald/White Diagonal) */}
              <div className="absolute w-[70%] h-[150%] sm:w-[80%] sm:h-[180%] rounded-full border border-white/10 [transform-style:preserve-3d] orbital-ring-3 pointer-events-none">
                <div className="absolute bottom-1/4 left-0 -ml-1.5 -mb-1.5 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_20px_#34d399]"></div>
              </div>

            </div>
            
            {/* Floating Data Badges */}
            <div className="absolute top-4 left-0 sm:top-10 sm:left-[-2rem] bg-[#0c1019]/90 backdrop-blur-xl border border-[var(--ssg-cyber)]/40 rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(91,46,255,0.15)] animate-[panelFloat_5s_ease-in-out_infinite] z-20">
               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[var(--ssg-cyber)]/20 flex items-center justify-center border border-[var(--ssg-cyber)]/30 overflow-hidden relative">
                 <div className="absolute inset-0 bg-white/5 animate-[pulse_2s_ease-in-out_infinite]"></div>
                 <i className="ph ph-planet text-[var(--ssg-cyber)] text-lg sm:text-xl"></i>
               </div>
               <div>
                 <div className="text-[#e2d3ff] text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-0.5">Orbital Sync</div>
                 <div className="text-[var(--ssg-cyber)] text-xs sm:text-sm font-bold flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-[var(--ssg-cyber)] animate-pulse"></div>
                   ACTIVE
                 </div>
               </div>
            </div>
            
            <div className="absolute bottom-4 right-0 sm:bottom-10 sm:right-[-2rem] bg-[#0c1019]/90 backdrop-blur-xl border border-[var(--ssg-red)]/40 rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(236,32,36,0.15)] animate-[panelFloat_6s_ease-in-out_infinite_1s] z-20">
               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[var(--ssg-red)]/20 flex items-center justify-center border border-[var(--ssg-red)]/30 overflow-hidden relative">
                 <div className="absolute inset-0 bg-white/5 animate-[pulse_3s_ease-in-out_infinite]"></div>
                 <i className="ph ph-crosshair text-[var(--ssg-red)] text-lg sm:text-xl animate-[spin_4s_linear_infinite]"></i>
               </div>
               <div>
                 <div className="text-[#ffafb1] text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-0.5">Threat Lock</div>
                 <div className="text-[var(--ssg-red)] text-xs sm:text-sm font-bold flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-[var(--ssg-red)] animate-ping"></div>
                   ACQUIRED
                 </div>
               </div>
            </div>

          </div>

          {/* ── RIGHT CONTENT PANEL (Text & Actions) ── */}
          <div className="lg:col-span-6 flex flex-col items-start text-left harpy-reveal opacity-0 translate-y-2 transition-all duration-1000 ease-out relative">
            
            {/* Background Particle Effects behind right content */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              {isMounted && particles.map(p => (
                <div 
                  key={p.id}
                  className="absolute rounded-full opacity-[0.4] mix-blend-screen transform-gpu"
                  style={{
                    left: p.left,
                    top: p.top,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    backgroundColor: p.isRed ? 'var(--ssg-red)' : 'var(--ssg-cyber)',
                    boxShadow: `0 0 ${p.size * 3}px ${p.isRed ? 'var(--ssg-red)' : 'var(--ssg-cyber)'}`,
                    animation: `particleFloat ${p.duration} ease-in-out infinite alternate ${p.delay}`
                  }}
                />
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--ssg-cyber)]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
            </div>

            <div className="relative z-10 w-full">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--ssg-red)]/30 bg-[var(--ssg-red)]/10 mb-6 shadow-[0_0_20px_rgba(236,32,36,0.15)]">
                <i className="ph ph-shield-check text-[var(--ssg-red)] text-sm animate-pulse"></i>
                <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#ffcaca]">Platform Spotlight</span>
              </div>
              
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight relative">
                <span className="glitch-text block">Harpy Defence</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--ssg-red)] pb-2 inline-block">
                  SecOps Platform
                </span>
              </h2>
              
              <p className="mt-4 text-[#8b95a9] text-lg leading-relaxed max-w-2xl font-normal tracking-wide bg-gradient-to-r from-transparent via-[#020408]/50 to-transparent p-2 -mx-2 rounded-lg" style={{ textAlign: 'justify', hyphens: 'auto', WebkitHyphens: 'auto', wordSpacing: '-0.5px' } as React.CSSProperties}>
                A fully managed, intelligence-driven platform that captures, normalizes, and correlates security telemetry across endpoints, cloud, SaaS, and network layers to accelerate your team's detection and response capabilities.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4 lg:gap-5 w-full">
                {[
                  { icon: "ph-activity", title: "Integrated SIEM & XDR", desc: "Threat Intelligence & Automation" },
                  { icon: "ph-lightning", title: "Real-time Alerting", desc: "SOC workflows & playbooks" },
                  { icon: "ph-cloud", title: "Multi-Cloud Coverage", desc: "O365, Azure, AWS, and GCP" },
                  { icon: "ph-chart-line", title: "Executive Visibility", desc: "Dashboards & 24x7 reporting" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-[#0c1019]/80 backdrop-blur-md border border-white/[0.06] hover:border-[var(--ssg-red)]/30 hover:bg-[#0c1019] transition-all duration-300 group shadow-lg">
                    <div className="w-10 h-10 rounded-xl bg-[var(--ssg-red)]/10 border border-[var(--ssg-red)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--ssg-red)]/20 transition-colors shadow-[0_0_15px_rgba(236,32,36,0.1)]">
                      <i className={`ph ${item.icon} text-[var(--ssg-red)] text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold tracking-wide group-hover:text-white transition-colors">{item.title}</h4>
                      <p className="text-[#5c6578] text-[0.7rem] mt-1.5 leading-snug font-medium uppercase tracking-wider">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a href="https://www.harpydefence.com/secopsplatform.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 text-[0.95rem] font-bold bg-[var(--ssg-red)] text-white rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(236,32,36,0.5)] group overflow-hidden relative border border-[var(--ssg-red)]/50">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Harpy Platform
                    <i className="ph ph-bold ph-arrow-right text-lg group-hover:translate-x-1.5 transition-transform"></i>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
});

export default PlatformSpotlightSection;
