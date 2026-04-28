"use client";

import Image from 'next/image';
import Link from 'next/link';
import { managementData } from '@/app/data/management';
import { useRef, useEffect, useState } from 'react';

export default function LeadershipSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-slate-100">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        
        {/* Header matching original site vibe */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
          <div className="text-left">
            <p className="section-eyebrow">The Experts</p>
            <h2 className="section-title text-slate-900">Our Leadership Team</h2>
            <p className="text-slate-500 mt-3 text-[17px] md:whitespace-nowrap">
               Driven by experience, led by visionaries. Meet the team driving our <span className="font-bold text-[#0077b5]">global cybersecurity efforts</span>.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-ssg-red hover:text-white hover:border-ssg-red transition-all duration-300 shadow-sm"
              aria-label="Scroll left"
            >
              <i className="ph-bold ph-arrow-left text-xl"></i>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-ssg-red hover:text-white hover:border-ssg-red transition-all duration-300 shadow-sm"
              aria-label="Scroll right"
            >
              <i className="ph-bold ph-arrow-right text-xl"></i>
            </button>
          </div>
        </div>

        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 sm:gap-8 lg:gap-12 pb-8 pt-4 snap-x snap-mandatory hide-scrollbar justify-start"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {managementData.map((leader, idx) => (
              <div key={idx} className="w-[calc(50%-8px)] sm:w-[180px] md:w-[200px] lg:w-[calc(25%-2.25rem)] snap-start flex-shrink-0 text-center">
                <Link href={`/management/${leader.id}`} className="block group h-full">
                  <div className="reveal flex flex-col items-center">
                     {/* Small Circular Photo matching cyfirma reference but with Ssquad light styling */}
                     <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-4 sm:mb-6 rounded-full overflow-hidden bg-slate-100 ring-4 ring-slate-50 group-hover:ring-ssg-red/20 transition-all duration-500 mx-auto shadow-sm">
                        <Image 
                           src={leader.image}
                           alt={leader.name}
                           fill
                           className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                           style={{ objectPosition: leader.imagePosition || 'center' }}
                           unoptimized
                        />
                     </div>
                     
                     <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-ssg-red transition-colors leading-tight">{leader.name}</h3>
                     <p className="text-ssg-red font-medium text-[11px] sm:text-xs md:text-sm mt-1.5 sm:mt-2 mb-4 line-clamp-2">{leader.title}</p>
                     
                     <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-300 mx-auto">
                        <i className="ph-fill ph-linkedin-logo text-base sm:text-lg"></i>
                     </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
