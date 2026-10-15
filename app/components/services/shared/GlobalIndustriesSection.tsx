interface GlobalIndustriesSectionProps {
  title?: string;
  description?: string;
  industries?: { name: string; icon: string }[];
}

export default function GlobalIndustriesSection({
  title = "Industries We Protect",
  description = "Delivering elite cybersecurity services tailored for high-risk and complex enterprise environments.",
  industries = [
    { name: 'AIRLINES', icon: 'ph-airplane-tilt' },
    { name: 'AUTOMOTIVE', icon: 'ph-car' },
    { name: 'DATA CENTERS', icon: 'ph-buildings' },
    { name: 'GOVERNMENT', icon: 'ph-bank' },
    { name: 'INSURANCE', icon: 'ph-shield-check' }
  ]
}: GlobalIndustriesSectionProps) {
  return (
    <section className="bg-ssg-dark relative z-10 py-24 border-t border-white/5 shadow-2xl">
      {/* Inline styles for perfect seamless scrolling without CSS conflicts */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes globalScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); }
        }
        .global-marquee-track {
          display: flex;
          width: max-content;
          gap: 3rem;
          animation: globalScroll 28s linear infinite;
        }
        .global-marquee-wrapper:hover .global-marquee-track {
          animation-play-state: paused;
        }
      `}} />

      {/* Dynamic Red Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-ssg-red/20 opacity-40 blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="text-center reveal relative z-10 mb-16">
        <h2 className="section-title text-white">{title}</h2>
        <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="max-w-7xl mx-auto relative px-4 lg:px-0">
        <div className="global-marquee-wrapper [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] overflow-hidden py-4">
          <div className="global-marquee-track">
            {industries.map((ind, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-xl shrink-0 min-w-[200px] md:min-w-[240px] px-8 py-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-ssg-red/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
                <i className={`ph ph-duotone ${ind.icon} text-[2.8rem] text-ssg-red opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.8)] transition-all`}></i>
                <span className="font-heading font-bold text-slate-200 tracking-[0.15em] text-sm md:text-base uppercase group-hover:text-white transition-colors text-center">{ind.name}</span>
              </div>
            ))}
            {industries.map((ind, idx) => (
              <div key={`dup-${idx}`} className="flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-xl shrink-0 min-w-[200px] md:min-w-[240px] px-8 py-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-ssg-red/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] hover:-translate-y-1 transition-all duration-300 group cursor-default" aria-hidden="true">
                <i className={`ph ph-duotone ${ind.icon} text-[2.8rem] text-ssg-red opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.8)] transition-all`}></i>
                <span className="font-heading font-bold text-slate-200 tracking-[0.15em] text-sm md:text-base uppercase group-hover:text-white transition-colors text-center">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
