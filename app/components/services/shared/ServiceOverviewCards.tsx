import React from 'react';

export interface OverviewCardPoint {
  title: string;
  icon: string;
}

interface ServiceOverviewCardsProps {
  eyebrow?: string;
  title: string;
  description: string;
  points: OverviewCardPoint[];
}

export default function ServiceOverviewCards({
  eyebrow,
  title,
  description,
  points
}: ServiceOverviewCardsProps) {
  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center reveal">
          {eyebrow && <p className="text-ssg-red font-bold tracking-widest uppercase text-sm mb-4 font-heading text-center mx-auto">{eyebrow}</p>}
          <h2 className="section-title text-slate-900 font-bold mb-6 text-balance text-center mx-auto">
            {title}
          </h2>
          <p className="text-slate-600 leading-relaxed text-[1.1rem] max-w-3xl mx-auto whitespace-pre-line" style={{ textAlign: 'justify', hyphens: 'auto', WebkitHyphens: 'auto', wordSpacing: '-0.5px' } as React.CSSProperties}>
            {description}
          </p>
        </div>

        <div className={`mt-16 lg:mt-20 grid sm:grid-cols-2 gap-6 lg:gap-8 justify-center max-w-6xl mx-auto ${points.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
          {points.map((point, idx) => (
            <div 
              key={idx} 
              className="reveal bg-white border border-slate-100 rounded-2xl p-8 hover:border-ssg-red/20 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(236,32,36,0.15)] hover:-translate-y-1.5 group relative overflow-hidden"
              style={{ transitionDelay: `${Math.min(idx * 100, 300)}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-ssg-red/5 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-125"></div>
              
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-ssg-red mb-6 group-hover:bg-red-50 group-hover:text-ssg-red transition-colors relative z-10 shadow-sm">
                <i className={`ph ${point.icon} text-3xl`}></i>
              </div>
              
              <h3 className="text-slate-800 font-heading font-semibold text-lg leading-snug relative z-10 pr-2">
                {point.title}
              </h3>
              
              <div className="absolute bottom-0 left-0 h-1 bg-ssg-red w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
