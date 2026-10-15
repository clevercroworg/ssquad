export default function TrustSection() {
  return (
    <section className="dark-phase arc-section py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="arc-heading text-center max-w-3xl mx-auto reveal">
          <span className="arc-icon"><i className="ph ph-seal-check"></i></span>
          <p className="text-sm uppercase tracking-[0.14em] text-slate-400">Trusted by security-conscious enterprises</p>
          <h2 className="font-heading text-3xl lg:text-4xl mt-3 text-white">Built for Confidence. Proven in High-Risk Environments.</h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <article className="trust-card reveal">
            <h3>12+ Years of Expertise</h3>
            <p>A decade of mission-critical cyber defense across complex enterprise infrastructure.</p>
          </article>
          <article className="trust-card reveal">
            <h3>Global Presence</h3>
            <p>Security programs delivered across regions with consistent operational governance.</p>
          </article>
          <article className="trust-card reveal">
            <h3>Managed Security Services</h3>
            <p>Continuous monitoring and managed operations aligned to enterprise priorities.</p>
          </article>
          <article className="trust-card reveal">
            <h3>Intelligence-Led Defence</h3>
            <p>Threat intelligence fused with response execution to reduce exposure fast.</p>
          </article>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-slate-300 reveal">
          Logo strip placeholder for customer and partner trust marks.
        </div>
      </div>
    </section>
  );
}
