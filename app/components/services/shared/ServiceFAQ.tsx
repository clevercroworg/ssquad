"use client";

import { useState, useEffect, useRef } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title?: string;
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate velit?",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    question: "Curabitur pretium tincidunt lacus, vel convallis nisl?",
    answer: "Curabitur pretium tincidunt lacus, vel convallis nisl pellentesque nec. Nulla facilisi. In hac habitasse platea dictumst. Vivamus sit amet massa sed neque iaculis sodales."
  },
  {
    question: "Phasellus vehicula justo eget diam posuere?",
    answer: "Phasellus vehicula justo eget diam posuere, sed scelerisque lectus sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat."
  },
  {
    question: "Vestibulum ante ipsum primis in faucibus?",
    answer: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin bibendum, justo sit amet varius vulputate, mauris tellus magna, a porta lectus nisi sit amet ante."
  },
  {
    question: "Donec elementum elit at tellus facilisis?",
    answer: "Donec elementum elit at tellus facilisis, in viverra diam varius. Pellentesque vitae feugiat dolor. Integer nec elit a nisl aliquet iaculis. Nulla at dictum felis, a tempor velit."
  }
];

export default function ServiceFAQ({ title = "Frequently Asked Questions", faqs = defaultFAQs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = (entry.target as HTMLElement).dataset.index;
            if (index === 'header') {
              setHeaderVisible(true);
            } else if (index !== undefined) {
              setVisibleIndices((prev) => {
                const newSet = new Set(prev);
                newSet.add(parseInt(index));
                return newSet;
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-trigger');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [faqs]);

  return (
    <section ref={sectionRef} className="bg-slate-50 py-16 lg:py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          data-index="header"
          className={`text-center mb-12 reveal-trigger reveal ${headerVisible ? 'visible' : ''}`}
        >
          <p className="text-ssg-red font-semibold text-sm tracking-widest uppercase mb-3 text-center w-full">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ssg-dark">
            {title}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-index={index}
              className={`
                bg-white rounded-xl border transition-all duration-300 reveal-trigger reveal
                ${visibleIndices.has(index) ? 'visible' : ''}
                ${openIndex === index 
                  ? 'border-ssg-red/20 shadow-lg shadow-ssg-red/5' 
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
                aria-expanded={openIndex === index}
              >
                <span className={`
                  text-base md:text-lg font-semibold pr-4 transition-colors duration-200
                  ${openIndex === index ? 'text-ssg-red' : 'text-ssg-dark group-hover:text-ssg-red/80'}
                `}>
                  {faq.question}
                </span>
                <span className={`
                  flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300
                  ${openIndex === index
                    ? 'bg-ssg-red text-white rotate-180'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-ssg-red/10 group-hover:text-ssg-red'}
                `}>
                  <i className="ph ph-caret-down text-sm"></i>
                </span>
              </button>

              <div className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <div className="px-6 pb-5 border-t border-slate-100">
                  <p className="text-slate-600 text-base leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
