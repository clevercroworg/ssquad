export default function PlatformSpotlightSection() {
  return (
    <section className="bg-ssg-dark2 py-20 lg:py-24 overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="harpy-shell reveal">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm uppercase tracking-[0.14em] text-slate-400">Platform Spotlight</p>
              <h2 className="font-heading text-3xl lg:text-4xl text-white mt-3">Harpy Defence SecOps Platform</h2>
              <p className="mt-4 text-slate-300 leading-relaxed max-w-3xl">
                Harpy Defence provides a fully managed SecOps platform that captures, normalizes, and correlates
                security telemetry across endpoints, cloud, SaaS, and network layers to accelerate detection and response.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <div className="harpy-point">
                  <i className="ph ph-activity"></i>
                  <span>Integrated SIEM, XDR, NDR, Threat Intelligence, and Automation</span>
                </div>
                <div className="harpy-point">
                  <i className="ph ph-lightning"></i>
                  <span>Real-time alerting with SOC workflows and escalation playbooks</span>
                </div>
                <div className="harpy-point">
                  <i className="ph ph-cloud"></i>
                  <span>Coverage across O365, Azure, AWS, and GCP environments</span>
                </div>
                <div className="harpy-point">
                  <i className="ph ph-chart-line"></i>
                  <span>Executive dashboards, compliance reporting, and 24x7 visibility</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://www.harpydefence.com/secopsplatform.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Explore Harpy Defence
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="harpy-visual">
                <span className="harpy-icon" aria-hidden="true"><i className="ph ph-shield-star"></i></span>
                <h3>Enterprise SecOps Readiness</h3>
                <p>
                  Unified monitoring, threat context, and response orchestration to help security teams move from
                  alert overload to measurable resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
