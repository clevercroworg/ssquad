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
            entry.target.classList.remove("translate-y-2", "opacity-0");
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
          <div className="w-full lg:col-start-1 lg:col-span-6 lg:row-start-1 flex flex-col items-start text-left quantum-reveal opacity-0 translate-y-2 transition-all duration-1000 ease-out relative">
            
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
            
            <p className="mt-4 text-[#9ca3af] text-lg leading-relaxed max-w-2xl font-normal tracking-wide" style={{ textAlign: 'justify', hyphens: 'auto', WebkitHyphens: 'auto', wordSpacing: '-0.5px' } as React.CSSProperties}>
              Security designed around NIST-approved post-quantum algorithms. We engineer cryptographic frameworks that protect against Q-Day threats and "Harvest-Now-Decrypt-Later" attacks, ensuring your enterprise operations remain unbreakable.
            </p>
          </div>

          {/* ── 2. ALTERNATIVE VISUAL PANEL (Mobile: Middle, Desktop: Right-Spanning) ── */}
          <div className="w-full lg:col-start-7 lg:col-span-6 lg:row-start-1 lg:row-span-2 relative quantum-reveal opacity-0 translate-y-2 transition-all duration-1000 delay-200 ease-out flex items-center justify-center min-h-[350px] sm:min-h-[500px]">
            
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#3b82f6]/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

            <div className="relative w-full max-w-[350px] aspect-square flex items-center justify-center mt-8 lg:mt-0">
              
              {/* Central Shield Core */}
              <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#4c1d95] shadow-[0_0_60px_rgba(59,130,246,0.5),inset_0_0_30px_rgba(255,255,255,0.3)] z-20 flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite] border border-white/20">
                 <div className="absolute inset-2 rounded-full border border-white/10 animate-[spin_10s_linear_infinite] border-t-transparent border-b-transparent"></div>
                 <i className="ph-fill ph-shield-check text-white/95 text-5xl sm:text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"></i>
              </div>

              {/* Force Field Rings */}
              {[
                { size: '100%', duration: 25, style: 'border-dashed border-2 opacity-30', color: 'border-[#60a5fa]' },
                { size: '135%', duration: 35, style: 'border-solid border opacity-20', reverse: true, color: 'border-[#a78bfa]' },
                { size: '170%', duration: 45, style: 'border-dotted border-[3px] opacity-25', color: 'border-[#3b82f6]' }
              ].map((ring, idx) => (
                <div 
                  key={idx}
                  className={`absolute rounded-full ${ring.color} ${ring.style}`}
                  style={{
                    width: ring.size,
                    height: ring.size,
                    animation: `spin ${ring.duration}s linear infinite ${ring.reverse ? 'reverse' : 'normal'}`,
                  }}
                >
                  {/* Floating Data Nodes on Rings */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white]"></div>
                  {idx !== 1 && <div className="absolute bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#60a5fa] shadow-[0_0_10px_#60a5fa]"></div>}
                  {idx !== 0 && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#a78bfa] shadow-[0_0_12px_#a78bfa]"></div>}
                </div>
              ))}
              
            </div>
            
            {/* Tech Tag Alternative */}
            <div className="absolute bottom-4 left-0 sm:bottom-10 sm:left-4 bg-gradient-to-r from-[#1e3a8a]/40 to-transparent border-l-2 border-[#60a5fa] p-3 sm:p-4 backdrop-blur-md z-30 shadow-lg animate-[panelFloat_5s_ease-in-out_infinite]">
               <div className="text-[#93c5fd] text-[0.65rem] font-mono uppercase tracking-[0.2em] mb-1">Protection Layer</div>
               <div className="text-white text-sm sm:text-base font-bold flex items-center gap-2">
                 <i className="ph-fill ph-check-circle text-[#10b981] animate-pulse"></i>
                 Quantum-Resistant
               </div>
            </div>

          </div>

          {/* ── 3. MINI CARDS & BUTTON (Mobile: Bottom, Desktop: Bottom-Left) ── */}
          <div className="w-full lg:col-start-1 lg:col-span-6 lg:row-start-2 flex flex-col items-start quantum-reveal opacity-0 translate-y-2 transition-all duration-1000 delay-100 ease-out relative">
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
    </section>
  );
});

export default QuantumSafeSection;
