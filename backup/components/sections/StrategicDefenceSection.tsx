export default function StrategicDefenceSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24 overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 reveal">
            <p className="section-eyebrow">Strategic Defence</p>
            <h2 className="section-title">Intelligence-Led Proactive Cyber Defence</h2>
            <p className="section-copy">
              SSquad Global combines predictive threat intelligence, operational discipline, and rapid execution to strengthen enterprise resilience before attacks escalate.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="feature-row"><i className="ph ph-eye"></i><span>End-to-end threat visibility across users, endpoints, and workloads</span></li>
              <li className="feature-row"><i className="ph ph-target"></i><span>Proactive defense strategy tuned to your business risk posture</span></li>
              <li className="feature-row"><i className="ph ph-timer"></i><span>Faster detection, triage, and incident response across teams</span></li>
              <li className="feature-row"><i className="ph ph-shield-star"></i><span>Enterprise-wide risk reduction through continuous hardening</span></li>
            </ul>
          </div>

          <div className="lg:col-span-6 reveal">
            <div className="intel-visual rounded-3xl p-7 md:p-8 shadow-premium">
              <div className="intel-chart">
                <svg className="intel-svg" viewBox="0 0 640 280" aria-hidden="true">
                  <defs>
                    <linearGradient id="intelArea" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(208,46,50,0.32)" />
                      <stop offset="100%" stopColor="rgba(208,46,50,0)" />
                    </linearGradient>
                    <linearGradient id="intelLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3F126C" />
                      <stop offset="100%" stopColor="#EC2024" />
                    </linearGradient>
                  </defs>
                  <path className="intel-area" d="M40,230 C110,210 155,95 220,132 C285,169 340,95 400,120 C470,150 510,94 590,106 L590,250 L40,250 Z"></path>
                  <path className="intel-line" d="M40,230 C110,210 155,95 220,132 C285,169 340,95 400,120 C470,150 510,94 590,106"></path>
                  <path className="intel-line-secondary" d="M40,218 C120,204 180,170 235,160 C300,148 365,132 420,145 C490,160 535,154 590,142"></path>
                </svg>
                <span className="intel-point p1"></span>
                <span className="intel-point p2"></span>
                <span className="intel-point p3"></span>
                <div className="intel-legend">
                  <span><i className="dot red"></i>Threat Trend</span>
                  <span><i className="dot violet"></i>Signal Correlation</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="intel-stat">
                  <p className="kpi">99.9%</p>
                  <p className="desc">Threat Event Uptime Monitoring</p>
                </div>
                <div className="intel-stat">
                  <p className="kpi">24/7</p>
                  <p className="desc">Managed Security Operations</p>
                </div>
                <div className="intel-stat">
                  <p className="kpi">150+</p>
                  <p className="desc">Threat Sources Correlated</p>
                </div>
                <div className="intel-stat">
                  <p className="kpi">Real-time</p>
                  <p className="desc">Executive Security Visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
