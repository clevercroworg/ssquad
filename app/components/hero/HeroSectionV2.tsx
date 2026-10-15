"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSectionV2({
  badge = "Zero-Trust Perimeter",
  heading = "Powering the Modern",
  headingAccent = "Enterprise",
  subheading = "Drive your business forward with intelligent infrastructure and seamless integration. Experience the next generation of digital transformation."
}: {
  badge?: string;
  heading?: string;
  headingAccent?: string;
  subheading?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

    // ── Canvas Digital Matrix Rain ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = [];

    const initGrid = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * height; // Start at random Y positions
      }
    };

    initGrid();
    window.addEventListener('resize', initGrid);

    const startTime = Date.now();

    const render = () => {
      // Black background with slight opacity to create motion trail
      // Because we use mix-blend-screen, this black will become transparent and the trails will show over the image
      ctx.fillStyle = 'rgba(2, 4, 10, 0.15)';
      ctx.fillRect(0, 0, width, height);

      const elapsed = Date.now() - startTime;
      const centerX = width / 2;
      const centerY = height / 2;
      const pulseSpeed = 0.15;
      const pulseRadius = (elapsed * pulseSpeed) % (Math.max(width, height) * 1.2);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Use mostly blue, occasionally red for danger aesthetic
        const isRed = Math.random() > 0.95;
        if (isRed) {
          ctx.fillStyle = 'rgba(236, 32, 36, 0.8)'; // ssg-red
          ctx.shadowColor = '#ec2024';
        } else {
          ctx.fillStyle = 'rgba(59, 130, 246, 0.35)'; // blue
          ctx.shadowColor = '#3b82f6';
        }
        
        ctx.shadowBlur = 5;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        ctx.shadowBlur = 0; // Reset for performance

        // Reset drop to top if it goes off screen (with randomness to stagger them)
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      // ── Radar Sweep & Crosshairs ──
      ctx.lineWidth = 1.5;
      
      // Crosshair lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Primary Radar Ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
      ctx.stroke();

      // Secondary Inner Red Ring
      if (pulseRadius > 150) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, pulseRadius - 150, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(236, 32, 36, 0.3)'; // ssg-red
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', initGrid);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // ── Entrance Animations ──
  useEffect(() => {
    const reveals = document.querySelectorAll('.hero-v2-reveal');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0', 'scale-100');
        el.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
      }, 100 + i * 150);
    });
  }, []);

  return (
    <section className="relative w-full bg-[#02040a] overflow-hidden min-h-[100svh] flex items-center justify-center pt-24 pb-16">
      
      {/* ═══ AI TACTICAL BACKGROUND IMAGE ═══ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/tactical-cyber-bg.png" 
          alt="Tactical Cyber Command" 
          fill 
          priority 
          quality={100}
          className="object-cover object-center opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040a]/40 via-transparent to-[#02040a]/80"></div>
      </div>

      {/* ═══ CANVAS BACKGROUND ═══ */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] opacity-90 mix-blend-screen" />

      {/* ═══ AMBIENT GLOW ═══ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3b82f6]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* ═══ FOREGROUND HUD ═══ */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* The Tactical Card Wrapper */}
        <div className="relative w-full max-w-4xl hero-v2-reveal opacity-0 scale-95 translate-y-12 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.3,1)]">
          
          {/* HUD Corner Brackets */}
          <div className="absolute -top-6 -left-6 w-16 h-16 border-t-[3px] border-l-[3px] border-[#3b82f6] rounded-tl-lg opacity-70"></div>
          <div className="absolute -top-6 -right-6 w-16 h-16 border-t-[3px] border-r-[3px] border-[#3b82f6] rounded-tr-lg opacity-70"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-[3px] border-l-[3px] border-[#3b82f6] rounded-bl-lg opacity-70"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-[3px] border-r-[3px] border-[#3b82f6] rounded-br-lg opacity-70"></div>

          {/* MAIN CARD CONTENT */}
          <div className="relative bg-[#020612]/70 backdrop-blur-xl border border-[#3b82f6]/20 rounded-xl p-8 md:p-14 lg:p-20 text-center shadow-[0_0_80px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(59,130,246,0.05)] overflow-hidden">
             
             {/* CRT Scanline Overlay */}
             <div className="absolute inset-0 v2-crt-lines opacity-30 pointer-events-none z-0"></div>
             
             {/* Moving Light Bar */}
             <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-transparent via-[#3b82f6]/10 to-transparent animate-[v2ScanDown_6s_linear_infinite] pointer-events-none z-0"></div>
             
             {/* Headline */}
             <h1 className="font-heading text-[2.5rem] leading-[1.1] sm:text-5xl md:text-[4rem] font-extrabold tracking-tight text-white mb-8 uppercase">
               {heading} <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-white relative inline-block mt-2">
                 {headingAccent}
               </span>
             </h1>
             
             {/* Subheading */}
             <p className="text-white text-sm md:text-[1.05rem] leading-relaxed max-w-2xl mx-auto mb-12 font-mono tracking-tight opacity-90">
               &gt; {subheading}
             </p>
             
             {/* Action Buttons */}
             <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto relative z-10">
               <Link href="/contact" className="group relative w-full sm:w-auto justify-center px-8 py-4 text-sm font-bold bg-transparent text-[var(--ssg-red)] overflow-hidden rounded border border-[var(--ssg-red)] hover:bg-[var(--ssg-red)] hover:text-white transition-all duration-300 flex items-center gap-3 uppercase tracking-wider shadow-[0_0_20px_rgba(236,32,36,0.15)] hover:shadow-[0_0_40px_rgba(236,32,36,0.4)]">
                 Talk to an Expert
                 <i className="ph-bold ph-arrow-right text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[v2Sweep_1s_ease-in-out]"></div>
               </Link>
               <Link href="/#solutions" className="group w-full sm:w-auto text-center px-8 py-4 text-sm font-bold text-white hover:text-[#60a5fa] transition-colors duration-300 flex items-center justify-center gap-2 uppercase tracking-wider">
                 <i className="ph-bold ph-squares-four text-lg"></i>
                 Explore Services
               </Link>
             </div>
          </div>
          
          {/* Side Data Feed Decorators */}
          <div className="absolute top-1/2 -right-24 -translate-y-1/2 flex flex-col gap-3 opacity-60 hidden xl:flex pointer-events-none">
             {[...Array(6)].map((_, i) => (
                <div key={i} className="flex gap-3 items-center">
                   <div className={`h-[2px] bg-[#3b82f6] ${i%3===0 ? 'w-10' : 'w-5'}`}></div>
                   <div className="text-[0.45rem] font-mono text-[#60a5fa] tracking-widest">SEC_P{i+1}</div>
                </div>
             ))}
          </div>
          <div className="absolute top-1/2 -left-24 -translate-y-1/2 flex flex-col gap-3 opacity-60 hidden xl:flex items-end pointer-events-none">
             {[...Array(6)].map((_, i) => (
                <div key={`l-${i}`} className="flex gap-3 items-center flex-row-reverse">
                   <div className={`h-[2px] bg-[var(--ssg-red)] ${i%2===0 ? 'w-8' : 'w-4'}`}></div>
                   <div className="text-[0.45rem] font-mono text-[var(--ssg-red)] tracking-widest">TRT_{i+1}</div>
                </div>
             ))}
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .v2-crt-lines {
          background: repeating-linear-gradient(
            0deg,
            rgba(59, 130, 246, 0.05) 0px,
            rgba(59, 130, 246, 0.05) 1px,
            transparent 1px,
            transparent 4px
          );
        }

        @keyframes v2ScanDown {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes v2Sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}} />
    </section>
  );
}
