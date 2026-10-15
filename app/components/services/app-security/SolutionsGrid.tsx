export default function SolutionsGrid() {
  const solutions = [
    {
      title: "Continuous Security Testing",
      description: "Identify vulnerabilities across the full code lifecycle.",
      icon: "ph-shield-check",
      features: [
        "Proactive SAST & DAST",
        "Real-time IAST Analysis",
        "Open-Source Risk (SCA)"
      ]
    },
    {
      title: "Active Runtime Defense",
      description: "Neutralize active threats in real-time environments.",
      icon: "ph-activity",
      features: [
        "Next-Gen Web Firewall",
        "Self-Protecting Assets",
        "API Surface Reduction"
      ]
    },
    {
      title: "Cloud-Native Protection",
      description: "Secure decentralized and container architectures.",
      icon: "ph-cloud-check",
      features: [
        "Continuous Posture Mgmt.",
        "Microservices Shielding",
        "CI/CD Pipeline Hardening"
      ]
    },
    {
      title: "Governance & Intelligence",
      description: "Transform raw data into actionable developer workflows.",
      icon: "ph-chart-line-up",
      features: [
        "Context-Aware Prioritization",
        "Automated Remediation",
        "Secure Code Training"
      ]
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto reveal mb-12 md:mb-16">
          <p className="text-ssg-red font-bold tracking-widest uppercase text-sm mb-4 font-heading">Enterprise Defenses</p>
          <h2 
            className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 text-balance mx-auto"
            style={{ textWrap: 'balance' }}
          >
            Comprehensive Application Security Solutions
          </h2>
          <p 
            className="text-slate-600 text-[1.1rem] leading-relaxed max-w-2xl mx-auto"
            style={{ textAlign: 'justify', textJustify: 'inter-word' }}
          >
            Deploy a full spectrum of security layers covering your applications from source code repository to production deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, idx) => (
            <div 
              key={idx} 
              className="reveal bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-ssg-red/20 transition-all duration-300 group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-ssg-red text-2xl mb-6 group-hover:bg-red-50 group-hover:scale-110 transition-all duration-300 shadow-sm relative z-10">
                <i className={`ph-fill ${sol.icon}`}></i>
              </div>
              
              <h3 className="text-[1.15rem] font-heading font-semibold text-slate-800 mb-2.5 leading-snug">{sol.title}</h3>
              <p className="text-slate-500 text-[0.95rem] mb-6 min-h-[44px] leading-relaxed">{sol.description}</p>
              
              <ul className="space-y-3 pt-4 border-t border-slate-100">
                {sol.features.map((feature, fidx) => (
                  <li key={fidx} className="flex gap-2.5 text-slate-600 items-start text-[0.9rem]">
                    <i className="ph-bold ph-check text-ssg-red mt-1 shrink-0 transition-transform group-hover:scale-125"></i>
                    <span className="leading-snug font-medium text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
