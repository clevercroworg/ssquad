export default function ProviderSelection() {
  const criteria = [
    {
      title: "Testing Capabilities",
      points: ["SAST, DAST, IAST solutions", "API security scanning", "Container scanning"],
      icon: "ph-test-tube"
    },
    {
      title: "Runtime Protection",
      points: ["WAF and RASP systems", "Microservices security", "Bot traffic management"],
      icon: "ph-activity"
    },
    {
      title: "Cloud Security",
      points: ["CSPM cloud natives", "Serverless integrations", "Continuous monitoring"],
      icon: "ph-cloud-arrow-up"
    },
    {
      title: "Compliance Support",
      points: ["Vulnerability guidance protocols", "Audit ready reports", "Developer training", "Remediation guidance"],
      icon: "ph-file-dashed"
    },
    {
      title: "Vendor Expertise",
      points: ["Threat intelligence service", "Architecture integrations", "Customer support priority", "Industry standards aligned"],
      icon: "ph-medal"
    },
    {
      title: "Comprehensive Solutions",
      points: ["Global SOC presence", "24/7 Operations Delivery", "End-to-end focus (code-to-prod)", "Incident response"],
      icon: "ph-circles-four"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl text-center mx-auto reveal mb-16">
          <p className="section-eyebrow">Evaluation Criteria</p>
          <h2 className="section-title text-slate-900">Selecting An Application Security Provider</h2>
          <p className="mt-4 text-slate-600" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            When evaluating application security providers, consider these essential capabilities to secure modern workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {criteria.map((item, idx) => (
            <div key={idx} className="reveal bg-slate-50 rounded-2xl p-7 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-darkGlow hover:border-ssg-red/20 group">
              <div className="flex items-center gap-3 mb-5 border-b border-slate-200 pb-4 transition-colors group-hover:border-ssg-red/20">
                <i className={`ph ${item.icon} text-2xl text-ssg-red transform transition-transform group-hover:scale-110`}></i>
                <h3 className="font-heading font-semibold text-lg text-slate-900">{item.title}</h3>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, pidx) => (
                  <li key={pidx} className="flex gap-2 text-slate-600 text-sm">
                    <span className="text-ssg-red mt-0.5">•</span>
                    <span>{point}</span>
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
