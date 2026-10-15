import Link from 'next/link';

export default function SolutionsSection() {
  return (
    <section id="solutions" className="dark-phase dark-phase-alt arc-section arc-section-alt pt-6 pb-20 lg:pt-8 lg:pb-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="arc-heading text-center max-w-3xl mx-auto reveal">
          <span className="arc-icon violet"><i className="ph ph-circles-three-plus"></i></span>
          <p className="section-eyebrow dark-eyebrow">Core Capabilities</p>
          <h2 className="section-title text-white">Cybersecurity Solutions Built for Modern Threats</h2>
          <p className="section-copy text-slate-300">
            End-to-end services tailored to secure applications, identities, networks, and operations across a rapidly evolving threat landscape.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="solution-card reveal">
            <i className="ph ph-code"></i>
            <h3>Application Security</h3>
            <p>Secure software lifecycles, code assurance, and hardening for cloud-native applications.</p>
            <Link href="/services/application-security">Learn more <span>&rarr;</span></Link>
          </article>
          <article className="solution-card reveal">
            <i className="ph ph-binoculars"></i>
            <h3>Threat Intelligence and Analytics</h3>
            <p>Actionable intelligence and continuous analytics to identify and prioritize real risk.</p>
            <Link href="/services/threat-intelligence">Learn more <span>&rarr;</span></Link>
          </article>
          <article className="solution-card reveal">
            <i className="ph ph-lock-key"></i>
            <h3>Identity and Access Management</h3>
            <p>Modern identity controls, access governance, and policy enforcement across environments.</p>
            <Link href="/services/iam">Learn more <span>&rarr;</span></Link>
          </article>
          <article className="solution-card reveal">
            <i className="ph ph-siren"></i>
            <h3>Incident Response Services</h3>
            <p>Rapid incident containment, forensic response, and resilient recovery planning.</p>
            <Link href="/services/threat-intelligence">Learn more <span>&rarr;</span></Link>
          </article>
          <article className="solution-card reveal">
            <i className="ph ph-network"></i>
            <h3>Network Security Services</h3>
            <p>Zero-trust architecture, segmentation, and perimeter modernization for enterprise networks.</p>
            <Link href="/services/network-as-a-platform">Learn more <span>&rarr;</span></Link>
          </article>
          <article className="solution-card reveal">
            <i className="ph ph-bug-beetle"></i>
            <h3>Penetration Testing Services</h3>
            <p>Real-world adversarial testing to expose weaknesses before attackers do.</p>
            <Link href="/services/penetration-testing">Learn more <span>&rarr;</span></Link>
          </article>
        </div>
      </div>
    </section>
  );
}
