export default function IndustryExpertiseSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl reveal">
          <p className="section-eyebrow">Tailored by Sector</p>
          <h2 className="section-title">Industry Expertise</h2>
          <p className="section-copy">
            We design security programs around operational realities, regulatory pressure, and business-critical systems for each industry we serve.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="industry-card reveal">
            <h3 className="industry-head"><span className="industry-icon"><i className="ph ph-bank"></i></span>Banking</h3>
            <p>Protect digital banking channels, transactions, and customer identity at scale.</p>
          </article>
          <article className="industry-card reveal">
            <h3 className="industry-head"><span className="industry-icon violet"><i className="ph ph-factory"></i></span>Manufacturing</h3>
            <p>Secure OT/IT convergence and production continuity across distributed environments.</p>
          </article>
          <article className="industry-card reveal">
            <h3 className="industry-head"><span className="industry-icon"><i className="ph ph-drop"></i></span>Oil and Gas</h3>
            <p>Reduce risk across critical infrastructure, remote assets, and operational networks.</p>
          </article>
          <article className="industry-card reveal">
            <h3 className="industry-head"><span className="industry-icon violet"><i className="ph ph-shield-check"></i></span>Government & Critical Infrastructure</h3>
            <p>Quantum-safe security for national security systems and critical infrastructure protection.</p>
          </article>
          <article className="industry-card reveal">
            <h3 className="industry-head"><span className="industry-icon"><i className="ph ph-buildings"></i></span>Public Services</h3>
            <p>Strengthen cyber resilience for essential digital services and public operations.</p>
          </article>
          <article className="industry-card reveal">
            <h3 className="industry-head"><span className="industry-icon violet"><i className="ph ph-heartbeat"></i></span>Healthcare</h3>
            <p>Protect sensitive patient data and clinical systems without disrupting care.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
