import React from 'react';

export default function OverviewSection() {
  const points = [
    { title: "Application security assessment", icon: "ph-shield-check" },
    { title: "Cloud systems security in front and PaaS environments", icon: "ph-cloud-check" },
    { title: "Driving risk reduction in any build, up and delivery", icon: "ph-trend-down" },
    { title: "Proactive testing of web application applications", icon: "ph-bug-beetle" },
    { title: "Application security for safeguarding near delivery", icon: "ph-lock-key" },
    { title: "Meeting regulatory mandates for GDPR, HIPAA, and PCI DSS", icon: "ph-certificate" },
  ];

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center reveal">
          <p className="text-ssg-red font-bold tracking-widest uppercase text-sm mb-4 font-heading">Holistic Cyber Defense</p>
          <h2 
            className="section-title text-slate-900 font-bold mb-6 text-balance"
            style={{ textWrap: 'balance' }}
          >
            Comprehensive Protection For Modern Software
          </h2>
          <p 
            className="text-slate-600 leading-relaxed text-[1.1rem]"
            style={{ textAlign: 'justify', textJustify: 'inter-word' }}
          >
            In today's digital-first business environment, application security is a non-negotiable business 
            critical requirement. We help organizations protect software from evolving threats. As 
            organizations accelerate digital transformation, application security solutions provide 
            continuous protection throughout the software development lifecycle (SDLC) and 
            production environments. Are you operating in a secure coding environment?
          </p>
        </div>

        <div className="mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point, idx) => (
            <div 
              key={idx} 
              className="reveal bg-white border border-slate-100 rounded-2xl p-8 hover:border-ssg-red/20 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(236,32,36,0.15)] hover:-translate-y-1.5 group relative overflow-hidden"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Decorative background corner blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-ssg-red/5 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-125"></div>
              
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-ssg-red mb-6 group-hover:bg-red-50 group-hover:text-ssg-red transition-colors relative z-10 shadow-sm">
                <i className={`ph ${point.icon} text-3xl`}></i>
              </div>
              
              <h3 className="text-slate-800 font-heading font-semibold text-lg leading-snug relative z-10">
                {point.title}
              </h3>
              
              {/* Animated bottom border accent on hover */}
              <div className="absolute bottom-0 left-0 h-1 bg-ssg-red w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
