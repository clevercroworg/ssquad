export default function StrategicDefenceSection() {
  return (
    <section className="relative bg-[#020810] py-16 lg:py-20 overflow-hidden border-y border-white/5">
      
      {/* ── Fingerprint Background ── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-[0.04] pointer-events-none select-none mix-blend-screen z-0">
        <i className="ph-fill ph-fingerprint text-[800px] md:text-[1000px] text-white"></i>
      </div>

      {/* ── Background Glow ── */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-ssg-red/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* ── Horizontal Scan Lines ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-overlay opacity-20 z-0">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
      </div>

      {/* ── Vertical Laser Scanner ── */}
      <div className="absolute left-0 w-full h-[2px] bg-white z-0 shadow-[0_0_15px_#fff,0_0_40px_#ec2024,0_0_80px_#ec2024] laser-sweep opacity-60 pointer-events-none mix-blend-screen">
        <div className="absolute top-[2px] left-0 w-full h-[150px] bg-gradient-to-b from-[var(--ssg-red)]/20 to-transparent"></div>
        <div className="absolute -top-[150px] left-0 w-full h-[150px] bg-gradient-to-t from-[var(--ssg-red)]/20 to-transparent"></div>
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 reveal">
            <p className="text-ssg-red font-bold uppercase tracking-[0.15em] text-sm mb-3">Strategic Defence</p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white tracking-tight leading-tight drop-shadow-md">
              Intelligence-Led Proactive Cyber Defence
            </h2>
            <p className="mt-5 text-slate-300 text-[1.05rem] leading-relaxed">
              SSquad Global combines predictive threat intelligence, operational discipline, and rapid execution to strengthen enterprise resilience before attacks escalate.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-4 text-slate-200 bg-[#0f172a]/60 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-white/10 hover:border-ssg-red/30 transition-all group shadow-md">
                <div className="w-9 h-9 rounded-lg bg-ssg-red/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="ph ph-eye text-lg text-ssg-red drop-shadow-[0_0_8px_rgba(236,32,36,0.6)]"></i>
                </div>
                <span className="text-[0.85rem] sm:text-sm font-medium">End-to-end threat visibility across users, endpoints, and workloads</span>
              </li>
              <li className="flex items-center gap-4 text-slate-200 bg-[#0f172a]/60 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-white/10 hover:border-ssg-red/30 transition-all group shadow-md">
                <div className="w-9 h-9 rounded-lg bg-ssg-red/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="ph ph-target text-lg text-ssg-red drop-shadow-[0_0_8px_rgba(236,32,36,0.6)]"></i>
                </div>
                <span className="text-[0.85rem] sm:text-sm font-medium">Proactive defense strategy tuned to your business risk posture</span>
              </li>
              <li className="flex items-center gap-4 text-slate-200 bg-[#0f172a]/60 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-white/10 hover:border-ssg-red/30 transition-all group shadow-md">
                <div className="w-9 h-9 rounded-lg bg-ssg-red/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="ph ph-timer text-lg text-ssg-red drop-shadow-[0_0_8px_rgba(236,32,36,0.6)]"></i>
                </div>
                <span className="text-[0.85rem] sm:text-sm font-medium">Faster detection, triage, and incident response across teams</span>
              </li>
              <li className="flex items-center gap-4 text-slate-200 bg-[#0f172a]/60 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-white/10 hover:border-ssg-red/30 transition-all group shadow-md">
                <div className="w-9 h-9 rounded-lg bg-ssg-red/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="ph ph-shield-star text-lg text-ssg-red drop-shadow-[0_0_8px_rgba(236,32,36,0.6)]"></i>
                </div>
                <span className="text-[0.85rem] sm:text-sm font-medium">Enterprise-wide risk reduction through continuous hardening</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 reveal">
            <div className="rounded-3xl p-5 md:p-6 bg-[#0a1120]/90 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] relative overflow-hidden">
              
              {/* Subtle inner grid for the dashboard card */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] mix-blend-overlay pointer-events-none"></div>

              <div className="relative w-full aspect-[2.2/1] rounded-2xl overflow-hidden bg-[#02050a] border border-white/10 p-3 shadow-inner mb-5">
                {/* Custom glowing graph */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 640 260" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="intelAreaDark" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(236,32,36,0.4)" />
                      <stop offset="100%" stopColor="rgba(236,32,36,0)" />
                    </linearGradient>
                    <linearGradient id="intelLineDark" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#ec2024" />
                    </linearGradient>
                  </defs>
                  
                  {/* Background Grid lines */}
                  <g className="stroke-white/10" strokeWidth="1" strokeDasharray="4 4">
                     <path d="M0,50 L640,50 M0,100 L640,100 M0,150 L640,150 M0,200 L640,200 M0,250 L640,250" />
                     <path d="M100,0 L100,260 M200,0 L200,260 M300,0 L300,260 M400,0 L400,260 M500,0 L500,260 M600,0 L600,260" />
                  </g>
                  
                  {/* Area & Line */}
                  <path className="intel-path-anim" d="M40,210 C110,190 155,85 220,118 C285,151 340,85 400,108 C470,135 510,85 590,95 L590,260 L40,260 Z" fill="url(#intelAreaDark)"></path>
                  <path className="intel-path-anim" d="M40,210 C110,190 155,85 220,118 C285,151 340,85 400,108 C470,135 510,85 590,95" fill="none" stroke="url(#intelLineDark)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 10px rgba(236,32,36,0.8))' }}></path>
                  
                  {/* Glowing Points */}
                  <circle cx="220" cy="118" r="6" fill="#ec2024" className="point-anim point-1 shadow-[0_0_15px_#ec2024]" />
                  <circle cx="400" cy="108" r="6" fill="#ec2024" className="point-anim point-2 shadow-[0_0_15px_#ec2024]" />
                  <circle cx="590" cy="95" r="6" fill="#ec2024" className="point-anim point-3 shadow-[0_0_15px_#ec2024]" />
                </svg>

                <div className="absolute top-3 left-3 flex gap-3 z-10 bg-[#0a1120]/90 backdrop-blur-xl border border-white/20 rounded-lg px-2.5 py-1.5 shadow-2xl">
                  <span className="flex items-center gap-1.5 text-[10px] text-slate-200 font-bold uppercase tracking-wider"><div className="w-2 h-2 rounded-full bg-ssg-red shadow-[0_0_10px_#ec2024]"></div>Threat Trend</span>
                  <span className="flex items-center gap-1.5 text-[10px] text-slate-200 font-bold uppercase tracking-wider"><div className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]"></div>Correlation</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 relative z-10">
                <div className="bg-[#050a15]/80 rounded-xl p-4 border border-white/10 hover:border-ssg-red/50 hover:bg-[#050a15] transition-all duration-300 group hover:shadow-[0_0_25px_rgba(236,32,36,0.15)]">
                  <p className="text-white font-heading font-bold text-xl lg:text-2xl group-hover:text-ssg-red transition-colors drop-shadow-md">99.9%</p>
                  <p className="text-slate-400 text-[11px] sm:text-xs mt-1 font-medium">Threat Event Uptime</p>
                </div>
                <div className="bg-[#050a15]/80 rounded-xl p-4 border border-white/10 hover:border-ssg-red/50 hover:bg-[#050a15] transition-all duration-300 group hover:shadow-[0_0_25px_rgba(236,32,36,0.15)]">
                  <p className="text-white font-heading font-bold text-xl lg:text-2xl group-hover:text-ssg-red transition-colors drop-shadow-md">24/7</p>
                  <p className="text-slate-400 text-[11px] sm:text-xs mt-1 font-medium">Managed Security Operations</p>
                </div>
                <div className="bg-[#050a15]/80 rounded-xl p-4 border border-white/10 hover:border-ssg-red/50 hover:bg-[#050a15] transition-all duration-300 group hover:shadow-[0_0_25px_rgba(236,32,36,0.15)]">
                  <p className="text-white font-heading font-bold text-xl lg:text-2xl group-hover:text-ssg-red transition-colors drop-shadow-md">150+</p>
                  <p className="text-slate-400 text-[11px] sm:text-xs mt-1 font-medium">Threat Sources Correlated</p>
                </div>
                <div className="bg-[#050a15]/80 rounded-xl p-4 border border-white/10 hover:border-ssg-red/50 hover:bg-[#050a15] transition-all duration-300 group hover:shadow-[0_0_25px_rgba(236,32,36,0.15)]">
                  <p className="text-white font-heading font-bold text-xl lg:text-2xl group-hover:text-ssg-red transition-colors drop-shadow-md">Real-time</p>
                  <p className="text-slate-400 text-[11px] sm:text-xs mt-1 font-medium">Executive Security Visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes laserSweep {
          0% { top: -10%; opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { top: 110%; opacity: 0; }
        }
        .laser-sweep {
          animation: laserSweep 5s ease-in-out infinite alternate;
        }

        /* 
          Using clip-path inset(top right bottom left) ensures a perfect 
          linear reveal from left to right, entirely ignoring bezier curve length.
        */
        @keyframes revealClip {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        
        .intel-path-anim {
          clip-path: inset(0 100% 0 0);
        }
        .reveal.visible .intel-path-anim {
          animation: revealClip 2.5s linear forwards;
        }

        @keyframes popIn {
          0% { opacity: 0; transform: scale(0); }
          60% { transform: scale(1.4); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes glowPulse {
          0% { filter: drop-shadow(0 0 5px #ec2024); }
          100% { filter: drop-shadow(0 0 15px #ec2024); }
        }
        .point-anim {
          opacity: 0;
          transform-origin: center;
        }
        
        /* 
          Clip-path timing calculations:
          Width is 640. Reveal is 2.5s linear.
          Dot 1 at x=220: (220/640) * 2.5s = 0.859s
          Dot 2 at x=400: (400/640) * 2.5s = 1.562s
          Dot 3 at x=590: (590/640) * 2.5s = 2.304s
        */
        .reveal.visible .point-1 {
          animation: popIn 0.4s ease-out 0.86s forwards, glowPulse 1.5s infinite alternate 1.26s;
        }
        .reveal.visible .point-2 {
          animation: popIn 0.4s ease-out 1.56s forwards, glowPulse 1.5s infinite alternate 1.96s;
        }
        .reveal.visible .point-3 {
          animation: popIn 0.4s ease-out 2.3s forwards, glowPulse 1.5s infinite alternate 2.7s;
        }
      `}</style>
    </section>
  );
}
