export default function TrustSection() {
  const trustFeatures = [
    {
      icon: "ph-shield-star",
      title: "14+ Years of Expertise",
      description: "A decade of mission-critical cyber defense across complex enterprise infrastructure."
    },
    {
      icon: "ph-globe-hemisphere-west",
      title: "Global Presence",
      description: "Security programs delivered across regions with consistent operational governance."
    },
    {
      icon: "ph-cpu",
      title: "Managed Security Services",
      description: "Continuous monitoring and managed operations aligned to enterprise priorities."
    },
    {
      icon: "ph-brain",
      title: "Intelligence-Led Defence",
      description: "Threat intelligence fused with response execution to reduce exposure fast."
    }
  ];

  return (
    <section className="relative dark-phase arc-section py-24 lg:py-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ssg-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-container mx-auto px-6 lg:px-8">
        <div className="arc-heading text-center max-w-3xl mx-auto reveal mb-16">
          <span className="arc-icon"><i className="ph ph-seal-check text-ssg-red"></i></span>
          <p className="text-sm uppercase font-semibold tracking-[0.15em] text-slate-400">Trusted by enterprises globally</p>
          <h2 className="font-heading text-3xl lg:text-5xl mt-4 text-white font-bold tracking-tight">Built for Confidence. <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Proven in High-Risk Environments.</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className="reveal group relative bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-ssg-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(239,35,60,0.12)] flex flex-col items-center text-center"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-ssg-red/10 group-hover:border-ssg-red/30 transition-all duration-500">
                <i className={`ph ${feature.icon} text-3xl text-slate-300 group-hover:text-ssg-red transition-colors`}></i>
              </div>
              <h3 className="text-white font-heading font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Subtle bottom highlight on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-ssg-red to-transparent group-hover:w-1/2 transition-all duration-500 opacity-0 group-hover:opacity-100 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
