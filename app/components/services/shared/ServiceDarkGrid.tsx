import React from 'react';
import { ServiceCard } from './ServiceFeatureGrid';

interface ServiceDarkGridProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  icon?: string;
  cards: ServiceCard[];
}

export default function ServiceDarkGrid({
  title,
  subtitle,
  eyebrow,
  icon = "ph-shield-check",
  cards
}: ServiceDarkGridProps) {
  return (
    <section className="dark-phase arc-section py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        
        <div className="arc-heading text-center max-w-3xl mx-auto reveal mb-16">
          <span className="arc-icon"><i className={`ph ${icon}`}></i></span>
          {eyebrow && <p className="section-eyebrow text-center mx-auto">{eyebrow}</p>}
          <h2 className="section-title text-white text-center mx-auto">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-slate-300 max-w-3xl mx-auto" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              {subtitle}
            </p>
          )}
        </div>

        <div className={`mt-12 grid gap-6 md:grid-cols-2 ${cards.length % 3 === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-5xl mx-auto'}`}>
          {cards.map((card, idx) => (
            <article key={idx} className="solution-card reveal">
              <i className="ph ph-shield-check text-ssg-red text-3xl mb-4"></i>
              <h3 className="font-heading font-semibold text-lg mb-2 text-white">{card.title}</h3>
              {card.description && <p className="text-slate-400 text-sm leading-relaxed text-left">{card.description}</p>}
              {card.points && card.points.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {card.points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-slate-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-ssg-red mt-1.5 shrink-0"></div>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
}
