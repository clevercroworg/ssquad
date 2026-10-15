"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface AppServiceHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
  theme?: 'cyber' | 'clean';
  actions?: { label: string; href: string; variant?: 'primary' | 'secondary' }[];
}

const DecryptingTitle = ({ text, theme = 'cyber' }: { text: string, theme?: 'cyber' | 'clean' }) => {
  const words = text.split(" ");
  const lastWord = words.pop() || "";
  const staticText = words.join(" ");

  const [displayLast, setDisplayLast] = useState(lastWord);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let iter = 0;
    const interval = setInterval(() => {
      let newStr = "";
      for (let i = 0; i < lastWord.length; i++) {
        if (i < iter / 3) {
          newStr += lastWord[i];
        } else {
          newStr += Math.random() > 0.5 ? "0" : "1";
        }
      }
      setDisplayLast(newStr);
      iter += 1;
      if (iter >= lastWord.length * 3 + 10) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [lastWord]);

  return (
    <>
      <span className="font-heading">{staticText} </span>
      <span className={`inline-block font-mono tracking-widest ${theme === 'cyber' ? 'text-cyan-50' : 'text-ssg-red'}`}>
        {mounted ? displayLast : lastWord}
      </span>
    </>
  );
};

export default function AppServiceHeader({ title, subtitle, breadcrumbs, theme = 'cyber', actions }: AppServiceHeaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; baseRadius: number; radius: number; alpha: number }[] = [];
    let animationFrameId: number;
    let scanLineX = -200;
    let isVisible = true;
    
    // Pause animation when offscreen to save main thread CPU (improves INP)
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(drawParticles);
      }
    }, { threshold: 0.05 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    // Track mouse safely over document body
    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      if (e.clientY <= rect.bottom + 100) {
          mouse.x = e.clientX - rect.left;
          mouse.y = e.clientY - rect.top;
      } else {
          mouse.x = -1000;
          mouse.y = -1000;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(Math.floor((canvas.width * canvas.height) / 20000), 40);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          baseRadius: Math.random() * 1.5 + 0.5,
          radius: 0,
          alpha: Math.random() * 0.3 + 0.1
        });
      }
    };

    const drawParticles = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Radar Scanner Sweep
      scanLineX += 3;
      if (scanLineX > canvas.width + 300) scanLineX = -300;

      const scanGradient = ctx.createLinearGradient(scanLineX - 150, 0, scanLineX, 0);
      scanGradient.addColorStop(0, "rgba(236, 32, 36, 0)");
      scanGradient.addColorStop(1, "rgba(236, 32, 36, 0.12)");
      ctx.fillStyle = scanGradient;
      ctx.fillRect(scanLineX - 150, 0, 150, canvas.height);
      
      ctx.beginPath();
      ctx.moveTo(scanLineX, 0);
      ctx.lineTo(scanLineX, canvas.height);
      ctx.strokeStyle = "rgba(236, 32, 36, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const distToScan = Math.abs(p.x - scanLineX);
        const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        
        let intensity = p.alpha;
        
        if (distToScan < 120 && (scanLineX - p.x > 0)) { 
            intensity = Math.max(intensity, 1 - distToScan / 120);
        }

        if (distToMouse < 200) {
            intensity = Math.max(intensity, 1.2 - distToMouse / 200);
            
            if (distToMouse < 100) {
              const angle = Math.atan2(p.y - mouse.y, p.x - mouse.x);
              p.x += Math.cos(angle) * 0.8;
              p.y += Math.sin(angle) * 0.8;
            }
        }
        
        p.radius = p.baseRadius * (1 + intensity * 1.5);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            const connectionAlpha = ((100 - dist) / 100) * (0.15 + intensity * 0.2);
            if (distToMouse < 200) {
               ctx.strokeStyle = `rgba(91, 46, 255, ${connectionAlpha * 1.5})`; 
            } else if (distToScan < 100 && (scanLineX - p.x > 0)) {
               ctx.strokeStyle = `rgba(236, 32, 36, ${connectionAlpha})`;
            } else {
               ctx.strokeStyle = `rgba(255, 255, 255, ${connectionAlpha * 0.5})`;
            }
            ctx.lineWidth = 0.6 + intensity * 0.4;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        if (intensity > 0.8) {
            ctx.fillStyle = `rgba(236, 32, 36, ${intensity})`;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(236, 32, 36, ${intensity * 0.25})`;
            ctx.fill();
        } else if (distToMouse < 200 && intensity > 0.5) {
            ctx.fillStyle = `rgba(91, 46, 255, ${intensity})`;
        } else {
            ctx.fillStyle = `rgba(148, 163, 184, ${intensity})`;
        }
        ctx.fill();
      });
      
      if (isVisible) {
        animationFrameId = requestAnimationFrame(drawParticles);
      }
    };

    window.addEventListener("resize", resize, { passive: true });
    resize();
    drawParticles();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero relative overflow-hidden pt-44 pb-20 lg:pt-52 lg:pb-28 bg-ssg-dark">
      {/* Background Image Texture */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/banner.jpeg)' }}
      ></div>

      {/* Dark Context Overlay */}
      <div className="absolute inset-0 z-0 bg-[#060912]/80 mix-blend-multiply"></div>

      {/* Cyber Grid Overlays */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         <div className="hero-grid-overlay !opacity-50"></div>
         <div className="hero-3d-waves !opacity-30"></div>
         {/* Hex overlay pattern */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMTAgMEwyMCAxMEwxMCAyMEwwIDEweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIwMCwyMDAsMjAwLDAuMSkiIHN0cm9rZS13aWR0aD0iMC41Ij48L3BhdGg+Cjwvc3ZnPg==')] opacity-[0.07]"></div>
      </div>

      {/* Interactive Shield Node Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 w-full h-full pointer-events-auto"
        style={{ cursor: 'crosshair' }}
      ></canvas>

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10 text-center pointer-events-none">
        
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex justify-center items-center gap-2 mb-6 opacity-90 pointer-events-auto">
             {breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-ssg-grayLight font-mono">
                   {idx > 0 && <i className="ph ph-caret-right text-ssg-red text-[10px]"></i>}
                   <Link href={crumb.href} className="hover:text-white transition-colors uppercase tracking-widest">{crumb.label}</Link>
                </div>
             ))}
          </nav>
        )}

        {/* Decrypting Headline */}
        <div className="flex flex-col gap-3 min-h-[120px] md:min-h-0 items-center justify-center relative w-full overflow-hidden">
          {theme === 'cyber' && (
            <span className="text-ssg-red/90 text-[0.65rem] sm:text-[0.85rem] md:text-xl block tracking-[0.2em] md:tracking-[0.3em] uppercase mb-1 font-heading">
              [ SECURE // PROTOCOL // ACTIVE ]
            </span>
          )}
          <h1 className="text-white font-bold tracking-tight drop-shadow-lg overflow-visible leading-[1.1] tabular-nums text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-balance">
            <DecryptingTitle text={title} theme={theme} />
          </h1>
        </div>
        
        {/* Terminal Subtitle Box */}
        {subtitle && (
          <div className="mt-8 flex justify-center pointer-events-auto">
            {theme === 'cyber' ? (
              <div className="bg-[#0B0F19]/60 backdrop-blur-xl border border-ssg-cyber/30 rounded-xl py-3 flex items-start gap-4 max-w-3xl shadow-[0_0_30px_rgba(91,46,255,0.15)] relative overflow-hidden group hover:border-ssg-cyber/60 transition-colors duration-500 pl-5 pr-7">
                
                {/* Terminal glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                
                <div className="bg-ssg-cyber/20 p-2 rounded-lg shrink-0 border border-ssg-cyber/30 relative shadow-[0_0_15px_rgba(91,46,255,0.4)]">
                   <i className="ph ph-fill ph-terminal-window text-cyan-300 text-xl md:text-xl animate-pulse"></i>
                </div>
                
                <div className="flex-1 text-justify font-mono mt-0.5 text-sm md:text-[0.95rem]">
                  <p 
                    className="text-slate-300 leading-relaxed drop-shadow-sm font-medium"
                    style={{ textAlign: 'justify', hyphens: 'auto', WebkitHyphens: 'auto', wordSpacing: '-0.5px' } as React.CSSProperties}
                  >
                    <span className="text-cyan-400 font-bold mr-2"></span>
                    {subtitle}
                    <span className="inline-block w-2.5 h-[14px] ml-2 bg-ssg-red animate-pulse align-middle opacity-80"></span>
                  </p>
                </div>

                {/* Decorative terminal edge styling */}
                <div className="absolute bottom-0 right-0 w-6 h-[2px] bg-ssg-cyber/50"></div>
                <div className="absolute bottom-0 right-0 w-[2px] h-6 bg-ssg-cyber/50"></div>
              </div>
            ) : (
              <div className="bg-[#0B0F19]/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl py-4 flex items-center justify-center max-w-3xl shadow-xl px-8">
                <p className="text-slate-300 leading-relaxed font-medium md:text-lg" style={{ textAlign: 'justify', hyphens: 'auto', WebkitHyphens: 'auto', wordSpacing: '-0.5px' } as React.CSSProperties}>
                  {subtitle}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Optional CTA Buttons */}
        {actions && actions.length > 0 && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
            {actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={action.variant === 'secondary'
                  ? "w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 backdrop-blur-md text-white font-semibold py-3.5 px-8 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  : "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-ssg-red via-rose-500 to-ssg-red text-white font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_35px_rgba(220,38,38,0.8)] hover:-translate-y-0.5 transition-all duration-300"}
              >
                {action.label} <i className="ph ph-arrow-up-right font-bold"></i>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
