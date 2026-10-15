import Image from 'next/image';

export default function SolutionsApproachSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="reveal group relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-darkGlow border-4 border-white aspect-[4/3] w-full bg-slate-900">
              <Image 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
                alt="Cybersecurity Shield Visualization"
                fill
                className="object-cover opacity-80 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700 ease-out"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-br from-ssg-red/60 to-transparent mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ssg-dark/90 to-transparent pointer-events-none" />
              
              {/* Decorative radial shield glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full border border-ssg-red/50 shadow-[0_0_40px_rgba(239,35,60,0.5)] flex items-center justify-center animate-pulse duration-2000 pointer-events-none">
                 <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-ssg-red/80 shadow-[0_0_20px_rgba(239,35,60,0.8)] flex flex-col justify-center items-center pointer-events-none">
                     <i className="ph-fill ph-shield-check text-4xl text-white"></i>
                 </div>
              </div>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <h2 className="section-title text-slate-900 leading-tight">Cybersecurity-Driven IT Solutions For A Resilient Digital Future</h2>
            
            <div className="mt-8 space-y-6 text-slate-600 leading-relaxed text-lg" style={{ textAlign: 'justify', textJustify: 'inter-word' as const }}>
              <p>
                At Ssquad Global, cybersecurity isn't just a service; it's the foundation of everything we build. 
                As IT environments grow more complex and threats evolve at an unprecedented scale, reactive 
                security is no longer enough. We integrate robust cybersecurity solutions seamlessly into every 
                facet of businesses.
              </p>
              
              <p>
                We help organizations build secure cloud operations, data centers and secure applications, 
                and deliver rapid remediation strategies that navigate compliance hurdles and industry standards. 
                Whether establishing secure perimeters, deploying multi-factor authentication, or maintaining 
                cyber maturity assessments across endpoints and cloud environments, we deliver end-to-end security 
                designed to protect data, scale rapidly and prevent breaches.
              </p>

               <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm mt-6 border-l-4 border-l-ssg-red group hover:shadow-md transition-shadow">
                  <p className="italic text-slate-800 font-medium">
                     "Our vision is to build an interconnected ecosystem fueled by secure architecture, driven by AI 
                     monitoring and predictive risk management, and continuous security optimization."
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
