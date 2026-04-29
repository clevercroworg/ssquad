"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { managementData } from '@/app/data/management';


export default function LeadershipSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number | null>(null);
  const isHovered = useRef(false);
  const isInteracting = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Triple the data to ensure infinite loop buffer
  const extendedData = [...managementData, ...managementData, ...managementData];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Start in the middle set for infinite feel
    const itemWidth = container.scrollWidth / 3;
    container.scrollLeft = itemWidth;

    const startAutoScroll = () => {
      if (!isHovered.current && !isInteracting.current) {
        container.scrollLeft += 0.8; // Slightly faster crawl
        
        // Loop check
        if (container.scrollLeft >= itemWidth * 2) {
          container.scrollLeft = itemWidth;
        }
      }
      autoScrollRef.current = requestAnimationFrame(startAutoScroll);
    };

    autoScrollRef.current = requestAnimationFrame(startAutoScroll);

    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleManualScroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    isInteracting.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Calculate scroll amount: 2 profiles + gaps
    // Mobile: 180px per profile + 40px gap = 220px per item
    // Desktop: 260px per profile + 40px gap = 300px per item
    const isMobile = window.innerWidth < 768;
    const itemFullWidth = isMobile ? 220 : 300;
    const scrollAmount = itemFullWidth * 2; // Always scroll 2 profiles
    
    const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });

    // Resume auto-scroll after animation
    timeoutRef.current = setTimeout(() => {
      isInteracting.current = false;
    }, 1500);
  };

  const onScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const itemWidth = container.scrollWidth / 3;
    
    // Use a small buffer to prevent flickering at boundaries
    if (container.scrollLeft < itemWidth * 0.5) {
      container.scrollLeft += itemWidth;
    } else if (container.scrollLeft >= itemWidth * 2.5) {
      container.scrollLeft -= itemWidth;
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header matching original site vibe */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
          <div className="text-left">
            <p className="section-eyebrow">The Experts</p>
            <h2 className="section-title text-slate-900">Our Leadership Team</h2>
            <p className="text-slate-500 mt-3 text-[17px] md:whitespace-nowrap">
               Driven by experience, led by visionaries.
            </p>
          </div>

        </div>

        <div className="mt-12 relative">
          <button
            onClick={() => handleManualScroll('left')}
            aria-label="Scroll left"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-ssg-red hover:text-white hover:border-ssg-red transition-all duration-300 shadow-lg"
          >
            <i className="ph ph-caret-left text-lg"></i>
          </button>
          {/* Right Arrow */}
          <button
            onClick={() => handleManualScroll('right')}
            aria-label="Scroll right"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-ssg-red hover:text-white hover:border-ssg-red transition-all duration-300 shadow-lg"
          >
            <i className="ph ph-caret-right text-lg"></i>
          </button>

          <div 
            ref={scrollRef} 
            onScroll={onScroll}
            onMouseEnter={() => { isHovered.current = true; }}
            onMouseLeave={() => { isHovered.current = false; }}
            className="overflow-x-hidden w-full group cursor-grab active:cursor-grabbing"
          >
            <div className="flex w-max gap-10 pb-8 pt-4">
              {extendedData.map((leader, idx) => (
                <div key={idx} className="w-[180px] md:w-[200px] lg:w-[260px] flex-shrink-0 text-center">
                    <Link href={`/management/${leader.id}`} className="block group h-full">
                      <div className="reveal flex flex-col items-center">
                         <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-4 sm:mb-6 rounded-full overflow-hidden bg-slate-100 ring-4 ring-slate-50 group-hover:ring-ssg-red/20 transition-all duration-500 mx-auto shadow-sm">
                            <Image 
                               src={leader.image}
                               alt={leader.name}
                               fill
                               className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                               style={{ objectPosition: leader.imagePosition || 'center', ...(leader.imageStyle || {}) }}
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
      </div>
    </section>
  );
}
