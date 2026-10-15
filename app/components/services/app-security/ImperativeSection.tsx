export default function ImperativeSection() {
  const cards = [
    {
      title: "Rising Web Application Attacks",
      desc: "43% of all cyberattacks target web applications, making web application security essential for business.",
      icon: "ph-shield-warning"
    },
    {
      title: "Vulnerability Management",
      desc: "Routine continuous scanning, detection, and remediation of security flaws to ensure defense against dependencies.",
      icon: "ph-magnifying-glass"
    },
    {
      title: "Cloud-Native Challenges",
      desc: "Cloud application security requires specialized engineering teams to ensure secure APIs and public perimeters.",
      icon: "ph-cloud-warning"
    },
    {
      title: "Compliance Mandates",
      desc: "Regulations like HIPAA and PCI DSS explicitly enforce strict compliance thresholds for organization measurements.",
      icon: "ph-file-lock"
    },
    {
      title: "Business Continuity Risks",
      desc: "Application vulnerabilities can lead to service latency, downtime, and severe operational damage.",
      icon: "ph-trend-down"
    },
    {
      title: "Shift-Left Security",
      desc: "Integrating security measures and practices completely from the ground up to prevent data leakage and brand damage.",
      icon: "ph-arrow-arc-left"
    }
  ];

  return (
    <section className="dark-phase arc-section py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="arc-heading text-center max-w-3xl mx-auto reveal">
          <span className="arc-icon"><i className="ph ph-warning-circle"></i></span>
          <p className="section-eyebrow">Risk Landscape</p>
          <h2 className="section-title text-white">The Imperative Of Application Security</h2>
          <p className="mt-4 text-slate-300" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            Modern applications are the primary vector for enterprise compromise. Proactive defense is no longer optional.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article key={idx} className="solution-card reveal">
              <i className={`ph ${card.icon}`}></i>
              <h3 className="font-heading font-semibold">{card.title}</h3>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
