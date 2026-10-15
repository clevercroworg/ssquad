import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <h2 className="section-title text-slate-900">About Ssquad Global</h2>
            
            <div className="mt-6 space-y-6 text-slate-600 leading-relaxed text-lg" style={{ textAlign: 'justify', textJustify: 'inter-word' as const }}>
              <p>
                Ssquad Global is an absolute Cybersecurity & IT services company dedicated to protecting and 
                improving organizations in today&apos;s digital environment. We specialize in delivering 
                comprehensive, modern, robust Cybersecurity, Managed IT Services, Infrastructure 
                Management, and Cloud solutions, ensuring our clients receive paramount service stability and 
                comprehensive security from threats.
              </p>
              
              <p>
                Since our founding in 2012, we have been at the forefront of cyber security innovation helping 
                multi-national and mid-market organizations defend against complex and evolving cyber threats, 
                and achieve remarkable business success. Our approach starts with a comprehensive security 
                posture assessment and deploying custom solutions tailored to your enterprise.
              </p>

              <p>
                Headquartered in Singapore, Ssquad Global has grown to become a leading independent 
                Managed Services Provider (MSP) with a strong operational footprint across Asia-Pacific 
                (APAC), EMEA, and the Americas. Our extensive regional presence is supported by strong 
                partnerships, local expertise, and a global delivery model that enables 24/7 service and 
                support.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-6 reveal" style={{ transitionDelay: '200ms' }}>
               <div className="flex flex-col">
                  <span className="text-4xl font-heading font-bold text-ssg-red">14+</span>
                  <span className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">Years Experience</span>
               </div>
               <div className="w-[1px] h-12 bg-slate-200"></div>
               <div className="flex flex-col">
                  <span className="text-4xl font-heading font-bold text-ssg-red">24/7</span>
                  <span className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">Global Support</span>
               </div>
            </div>
          </div>

          <div className="reveal group relative">
            <div className="relative rounded-3xl overflow-hidden shadow-darkGlow border-4 border-slate-50 aspect-[4/3] w-full bg-slate-900">
              <Image 
                src="/images/about us.png"
                alt="About Ssquad Global - Cybersecurity and IT Services"
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#020810]/60 via-[#020810]/20 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020810]/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
