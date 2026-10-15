"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/app/data/blogs';

export default function InsightsClient({ insights }: { insights: BlogPost[] }) {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (insights.length === 0) {
    return (
      <div className="py-20 text-center text-slate-500 reveal">
        <p>No insights found.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {insights.map((item) => (
        <article key={item.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-premium reveal group">
          <div className="relative h-64 w-full overflow-hidden">
            <Image 
              src={item.image || "/placeholder.jpg"} 
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
            {item.category && (
              <div className="absolute top-4 left-4 bg-ssg-red text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-md">
                {item.category}
              </div>
            )}
          </div>
          <div className="p-8">
            <div className="text-slate-400 text-xs font-medium mb-3">{item.date || "-"}</div>
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 leading-tight group-hover:text-ssg-red transition-colors line-clamp-2">
              {item.title}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
              {item.summary}
            </p>
            <Link 
              href={`/insights/${item.id}`} 
              className="text-ssg-red font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Read full article <i className="ph ph-arrow-right"></i>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
