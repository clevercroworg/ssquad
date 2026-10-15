export interface ServiceCard {
  title: string;
  description?: string;
  points?: string[];
  highlight?: boolean;
}

export interface ServiceFeatureGridProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  cards: ServiceCard[];
  bgColor?: 'white' | 'slate';
  columns?: 2 | 3 | 4;
}

export default function ServiceFeatureGrid({
  title,
  subtitle,
  eyebrow,
  cards,
  bgColor = 'slate',
  columns = 2
}: ServiceFeatureGridProps) {
  
  const bgClass = bgColor === 'slate' ? 'bg-slate-50 border-y border-slate-100' : 'bg-white';
  const gridColsClass = columns === 3 ? 'lg:grid-cols-3' : columns === 4 ? 'lg:grid-cols-4 md:grid-cols-2' : 'md:grid-cols-2';

  return (
    <section className={`${bgClass} py-20 lg:py-24`}>
      <div className="max-w-container mx-auto px-6 lg:px-8">
        
        <div className="text-center reveal mb-16">
          {eyebrow && <p className="section-eyebrow text-center mx-auto">{eyebrow}</p>}
          <h2 className="section-title text-slate-900 text-center mx-auto max-w-4xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-[1.1rem] leading-relaxed" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid gap-6 lg:gap-8 ${gridColsClass}`}>
          {cards.map((card, idx) => (
            <div key={idx} className={`reveal rounded-2xl p-8 border shadow-sm transition-all duration-300 hover:-translate-y-2 group ${card.highlight ? 'bg-ssg-red text-white border-red-500 shadow-red-500/20' : 'bg-white border-slate-200 hover:shadow-premium hover:border-ssg-cyber/30'}`}>
              <h3 className={`text-xl font-heading font-bold mb-4 ${card.highlight ? 'text-white' : 'text-slate-800'}`}>{card.title}</h3>
              
              {card.description && (
                <p className={`leading-relaxed text-[15px] text-left ${card.highlight ? 'text-white/90' : 'text-slate-600'}`}>
                  {card.description}
                </p>
              )}
              
              {card.points && card.points.length > 0 && (
                <ul className="space-y-3 mt-4">
                  {card.points.map((point, pIdx) => (
                    <li key={pIdx} className={`flex gap-3 items-start text-[14px] font-medium ${card.highlight ? 'text-white/90' : 'text-slate-600'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${card.highlight ? 'bg-white' : 'bg-ssg-red'}`}></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
