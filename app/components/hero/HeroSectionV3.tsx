"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSectionV3() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.hero-v3-anim');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
        el.classList.remove('opacity-0', 'translate-y-10', 'translate-x-10', '-translate-x-10');
      }, 100 + i * 150);
    });
  }, []);

  return (
    <section className="relative w-full bg-[#020408] overflow-hidden min-h-[100svh] flex items-center pt-24 pb-16">
      
      {/* PREMIUM CLEAN BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full bg-[#010204] overflow-hidden">
        
        {/* AI GENERATED NEURAL BACKGROUND IMAGE */}
        <div className="absolute inset-0 opacity-50 mix-blend-screen">
           <Image src="/hero-v3-bg-globe.png" alt="Neural Background" fill className="object-cover" priority quality={100} />
        </div>
        
        {/* Subtle glowing orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--ssg-cyber)]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--ssg-red)]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

        {/* Minimal Grid */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        
        {/* Floating Ambient Particles */}
        <div className="absolute inset-0">
           {[...Array(100)].map((_, i) => {
             const size = Math.random() > 0.8 ? 3 : (Math.random() > 0.4 ? 2 : 1);
             const glow = Math.random() > 0.7 ? 'shadow-[0_0_10px_rgba(255,255,255,0.8)]' : '';
             return (
               <div key={i} className={`absolute bg-white rounded-full v3-particle ${glow}`} 
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${4 + Math.random() * 15}s`
                    }}>
               </div>
             )
           })}
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full py-20 lg:py-32">
          
          <div className="hero-v3-anim opacity-0 -translate-y-10 transition-all duration-1000 ease-out inline-flex items-center gap-2.5 px-4 py-1.5 rounded-md border border-[var(--ssg-red)]/30 bg-gradient-to-r from-[var(--ssg-red)]/10 via-[var(--ssg-red)]/5 to-transparent mb-8 backdrop-blur-sm">
            <i className="ph ph-hard-drives text-[var(--ssg-red)] text-base drop-shadow-[0_0_8px_var(--ssg-red)]"></i>
            <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white">Global Server Database</span>
          </div>
          
          <h1 className="hero-v3-anim opacity-0 translate-y-10 transition-all duration-1000 delay-100 ease-out font-heading text-[2.5rem] leading-[1.1] sm:text-5xl md:text-[4rem] lg:text-[5rem] font-extrabold tracking-tight text-white w-full">
            Intelligence-Led <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--ssg-red)] relative inline-block pb-1">Proactive Defence</span>
          </h1>
          
          <p className="hero-v3-anim opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out mt-6 md:mt-8 text-slate-300 text-[1rem] sm:text-[1.1rem] leading-[1.7] max-w-2xl font-light mx-auto lg:mx-0 lg:pl-6 lg:border-l border-white/10 relative">
            <span className="hidden lg:block absolute left-[-1px] top-0 w-[2px] h-1/3 bg-[var(--ssg-red)] shadow-[0_0_10px_var(--ssg-red)]"></span>
            Unify your global server database with real-time threat intelligence. Leverage AI-driven automation to detect, investigate, and respond across the entire worldwide network.
          </p>
          
          <div className="hero-v3-anim opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 items-center w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto justify-center px-8 py-3.5 text-[0.95rem] font-bold bg-[var(--ssg-red)] text-white hover:bg-[#ff3337] transition-all duration-300 flex items-center gap-2 rounded-sm shadow-[0_0_20px_rgba(236,32,36,0.3)] hover:shadow-[0_0_30px_rgba(236,32,36,0.5)] hover:-translate-y-1">
              Deploy Protection
              <i className="ph ph-rocket-launch"></i>
            </Link>
            <Link href="/#solutions" className="w-full sm:w-auto justify-center px-8 py-3.5 text-[0.95rem] font-bold bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-sm transition-all duration-300 flex items-center gap-2 hover:-translate-y-1">
              View Global Network
            </Link>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Background Particle Float */
        .v3-particle {
          animation-name: v3FloatParticle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        @keyframes v3FloatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.1; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.85; }
        }

        /* Dashboard Float and Tilt (Desktop) */
        @keyframes v3FloatDash {
          0% { transform: rotateY(-15deg) rotateX(5deg) translateY(0); }
          100% { transform: rotateY(-12deg) rotateX(8deg) translateY(-20px); }
        }

        /* Dashboard Float and Tilt (Mobile) */
        @keyframes v3FloatDashMobile {
          0% { transform: rotateY(0deg) rotateX(5deg) translateY(0); }
          100% { transform: rotateY(0deg) rotateX(8deg) translateY(-10px); }
        }

        /* Widget Float (Desktop) */
        @keyframes v3FloatWidget {
          0%, 100% { transform: translateZ(60px) translateY(0); }
          50% { transform: translateZ(80px) translateY(-15px); }
        }

        /* Widget Float (Mobile) */
        @keyframes v3FloatWidgetMobile {
          0%, 100% { transform: translateZ(40px) translateY(0); }
          50% { transform: translateZ(50px) translateY(-10px); }
        }

        /* Radar Sweep */
        @keyframes v3RadarSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Chart Height Animation */
        @keyframes v3ChartHeight {
          0% { transform: scaleY(0.3); transform-origin: bottom; }
          100% { transform: scaleY(1); transform-origin: bottom; }
        }

        /* Pulse Width for progress bars */
        @keyframes v3PulseWidth {
          0% { width: 5%; }
          100% { width: 40%; }
        }

        /* Terminal Log Scroll */
        @keyframes v3LogScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}} />
    </section>
  );
}
