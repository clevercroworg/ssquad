"use client";

import { useEffect, useState, memo } from "react";
import Link from "next/link";

const QuantumSafeSection = memo(function QuantumSafeSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-10", "opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".quantum-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#030712] py-24 lg:py-32 overflow-hidden border-t border-white/[0.05]">
      {/* Deep Space / Quantum Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#6d28d9]/10 blur-[150px] rounded-full mix-blend-screen opacity-60 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2563eb]/10 blur-[150px] rounded-full mix-blend-screen opacity-50 -translate-x-1/4 translate-y-1/4"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 lg:items-center">
          
          {/* ── 1. HEADER & SUBTEXT (Mobile: Top, Desktop: Top-Left) ── */}
          <div className="w-full lg:col-start-1 lg:col-span-6 lg:row-start-1 flex flex-col items-start text-left quantum-reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out relative">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 mb-6 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              <i className="ph ph-atom text-[#a78bfa] text-sm animate-[spin_4s_linear_infinite]"></i>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#c4b5fd]">Future-Proof Defense</span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              <span className="block mb-2">Quantum-Safe</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c4b5fd] to-[#8b5cf6] pb-2 inline-block">
                Security
              </span>
            </h2>
            
            <p className="mt-4 text-[#9ca3af] text-lg leading-relaxed max-w-2xl font-normal tracking-wide">
              Security designed around NIST-approved post-quantum algorithms. We engineer cryptographic frameworks that protect against Q-Day threats and "Harvest-Now-Decrypt-Later" attacks, ensuring your enterprise operations remain unbreakable beyond 2030.
            </p>
          </div>

          {/* ── 2. ANIMATION PANEL (Mobile: Middle, Desktop: Right-Spanning) ── */}
          <div className="w-full lg:col-start-7 lg:col-span-6 lg:row-start-1 lg:row-span-2 relative quantum-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out flex items-center justify-center min-h-[350px] sm:min-h-[500px]">
            
            <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-[#6d28d9]/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              
              {/* Central Core */}
              <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[#c4b5fd] to-[#7c3aed] shadow-[0_0_60px_rgba(139,92,246,0.8),inset_0_0_20px_rgba(255,255,255,0.8)] z-20 flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite]">
                 <div className="w-16 h-16 rounded-full bg-[#4c1d95] blur-[4px]"></div>
                 <i className="ph-fill ph-lock-key absolute text-white/90 text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"></i>
              </div>

              {/* Quantum Orbits */}
              {[
                { rotateX: 65, rotateY: 25, duration: 8, color: '#8b5cf6' },
                { rotateX: 75, rotateY: -35, duration: 12, color: '#3b82f6', reverse: true },
                { rotateZ: 55, rotateX: 60, duration: 10, color: '#a855f7' }
              ].map((orbit, idx) => (
                <div 
                  key={idx}
                  className="absolute w-[110%] h-[110%] rounded-full border border-white/20 [transform-style:preserve-3d]"
                  style={{
                    transform: `rotateX(${orbit.rotateX}deg) rotateY(${orbit.rotateY || 0}deg) rotateZ(${orbit.rotateZ || 0}deg)`,
                    animation: `quantumSpin${idx} ${orbit.duration}s linear infinite ${orbit.reverse ? 'reverse' : 'normal'}`,
                    boxShadow: `inset 0 0 20px ${orbit.color}20`
                  }}
                >
                  <div 
                    className="absolute w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      top: '0',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: orbit.color,
                      boxShadow: `0 0 20px ${orbit.color}, 0 0 40px ${orbit.color}`
                    }}
                  >
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>
              ))}
              
            </div>
            
            {/* Overlay UI Panels */}
            <div className="absolute top-10 right-[-1rem] sm:right-4 bg-[#030712]/90 backdrop-blur-xl border border-[#8b5cf6]/30 rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(139,92,246,0.15)] animate-[panelFloat_4s_ease-in-out_infinite] z-30">
               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#8b5cf6]/20 flex items-center justify-center border border-[#8b5cf6]/30 overflow-hidden relative">
                 <i className="ph ph-shield-check text-[#a78bfa] text-lg sm:text-xl"></i>
               </div>
               <div>
                 <div className="text-[#c4b5fd] text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-0.5">Algorithm Status</div>
                 <div className="text-[#a78bfa] text-xs sm:text-sm font-bold flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></div>
                   NIST-Approved
                 </div>
               </div>
            </div>

          </div>

          {/* ── 3. MINI CARDS & BUTTON (Mobile: Bottom, Desktop: Bottom-Left) ── */}
          <div className="w-full lg:col-start-1 lg:col-span-6 lg:row-start-2 flex flex-col items-start quantum-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-100 ease-out relative">
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 w-full">
              {[
                { icon: "ph-shield-check", title: "Risk Assessment", desc: "Quantum threat profiling" },
                { icon: "ph-cpu", title: "Post-Quantum Architecture", desc: "NIST standards implementation" },
                { icon: "ph-globe-hemisphere-west", title: "Cross-Platform", desc: "Seamless multi-environment" },
                { icon: "ph-brain", title: "Embedded Analytics", desc: "Predictive AI risk modeling" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-[#111827]/80 backdrop-blur-md border border-white/[0.06] hover:border-[#8b5cf6]/40 hover:bg-[#111827] transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center shrink-0 group-hover:bg-[#8b5cf6]/20 transition-colors shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                    <i className={`ph ${item.icon} text-[#a78bfa] text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold tracking-wide">{item.title}</h4>
                    <p className="text-[#6b7280] text-[0.7rem] mt-1.5 leading-snug font-medium uppercase tracking-wider">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/services/quantum-safe-cybersecurity" className="inline-flex items-center gap-3 px-8 py-4 text-[0.95rem] font-bold bg-[#7c3aed] text-white rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(124,58,237,0.4)] group border border-[#8b5cf6]/50">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Quantum Security
                  <i className="ph ph-bold ph-arrow-right text-lg group-hover:translate-x-1.5 transition-transform"></i>
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes quantumSpin0 {
          0% { transform: rotateX(65deg) rotateY(25deg) rotateZ(0deg); }
          100% { transform: rotateX(65deg) rotateY(25deg) rotateZ(360deg); }
        }
        @keyframes quantumSpin1 {
          0% { transform: rotateX(75deg) rotateY(-35deg) rotateZ(0deg); }
          100% { transform: rotateX(75deg) rotateY(-35deg) rotateZ(360deg); }
        }
        @keyframes quantumSpin2 {
          0% { transform: rotateZ(55deg) rotateX(60deg) rotateY(0deg); }
          100% { transform: rotateZ(55deg) rotateX(60deg) rotateY(360deg); }
        }
      `}} />
    </section>
  );
});

export default QuantumSafeSection;
