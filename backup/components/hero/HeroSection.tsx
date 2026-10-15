"use client";

import { useState, useEffect } from 'react';

const initialEvents = [
  { id: '1', message: 'Phishing campaign blocked - APAC edge', timeStr: 'Now' },
  { id: '2', message: 'Anomalous login contained - Finance IAM', timeStr: '10s ago' },
  { id: '3', message: 'Ransomware indicator quarantined - DC cluster', timeStr: '26s ago' }
];

const mockEvents = [
  'Suspicious lateral movement isolated - IAM segment',
  'Malicious domain request blocked - Web gateway',
  'Privilege escalation attempt denied - Core server',
  'High-risk endpoint behavior contained - EMEA branch',
  'Data exfiltration pattern interrupted - Cloud workload',
  'Unusual VPN sequence flagged - Identity perimeter',
];

const formatResponse = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${String(secs).padStart(2, '0')}s`;
};

export default function HeroSection() {
  const [threatCount, setThreatCount] = useState(1248);
  const [endpointCount, setEndpointCount] = useState(86420);
  const [responseSeconds, setResponseSeconds] = useState(522);
  const [liveFeed, setLiveFeed] = useState(initialEvents);
  
  const [flashStates, setFlashStates] = useState({
    threats: false,
    endpoints: false,
    response: false
  });

  useEffect(() => {
    let tickCount = 0;
    
    const interval = setInterval(() => {
      tickCount++;
      
      const addThreats = Math.floor(Math.random() * 5) + 1;
      const addEndpoints = Math.floor(Math.random() * 32) + 8;
      const diffResponse = Math.floor(Math.random() * 3);
      
      setThreatCount(prev => prev + addThreats);
      setEndpointCount(prev => prev + addEndpoints);
      setResponseSeconds(prev => Math.max(365, prev - diffResponse));
      
      // Trigger flashes
      setFlashStates({ threats: true, endpoints: true, response: true });
      setTimeout(() => {
        setFlashStates({ threats: false, endpoints: false, response: false });
      }, 260);

      // Add a new feed event
      const newEventMsg = mockEvents[Math.floor(Math.random() * mockEvents.length)];
      setLiveFeed(prev => {
        const timeLabels = ['12s ago', '28s ago', '47s ago', '1m ago'];
        const newFeed = [
          { id: `tick-${tickCount}`, message: newEventMsg, timeStr: 'Now', isNew: true },
          ...prev.map((item, i) => ({ ...item, timeStr: timeLabels[i] || '1m ago', isNew: false }))
        ];
        return newFeed.slice(0, 4); // Keep only 4 max
      });

    }, 2300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero relative overflow-hidden bg-ssg-dark pt-36 pb-24 lg:pt-44 lg:pb-28">
      <div className="hero-grid-overlay"></div>
      <div className="hero-glow"></div>
      <div className="hero-network-lines"></div>
      <div className="hero-signal-waves"></div>
      <div className="hero-3d-waves"></div>
      <div className="hero-scan-sweep"></div>

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 text-white reveal">
            <p className="text-sm tracking-[0.16em] uppercase text-ssg-grayLight">Securing Your Future, Built on Trust.</p>
            <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl leading-tight mt-5">
              Intelligence Led Proactive CyberDefence
            </h1>
            <p className="mt-6 text-slate-300 text-lg leading-relaxed max-w-2xl">
              Protect your digital infrastructure with intelligence-led cybersecurity solutions designed to detect,
              prevent, and respond to modern cyber threats.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary"><i className="ph ph-headset"></i>Talk to a Security Expert</a>
              <a href="#solutions" className="btn-secondary"><i className="ph ph-compass-tool"></i>Explore Solutions</a>
            </div>
          </div>

          <div className="lg:col-span-6 reveal">
            <div className="dashboard-panel live-panel rounded-3xl p-6 md:p-8 border border-white/10 bg-white/5 backdrop-blur-xl shadow-darkGlow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-semibold tracking-wide">Threat Intelligence Overview</h2>
                <span className="chip"><span className="live-dot"></span>Live SOC</span>
              </div>

              <div className="space-y-4">
                <div className="metric-row">
                  <span className="label">Critical Threats Blocked</span>
                  <span className={`value ${flashStates.threats ? 'metric-flash' : ''}`}>
                    {threatCount.toLocaleString()}
                  </span>
                </div>
                <div className="metric-row">
                  <span className="label">Global Endpoints Monitored</span>
                  <span className={`value ${flashStates.endpoints ? 'metric-flash' : ''}`}>
                    {endpointCount.toLocaleString()}
                  </span>
                </div>
                <div className="metric-row">
                  <span className="label">Avg Incident Response Time</span>
                  <span className={`value ${flashStates.response ? 'metric-flash' : ''}`}>
                    {formatResponse(responseSeconds)}
                  </span>
                </div>
              </div>

              <div className="live-tracker mt-6">
                <div className="tracker-head">
                  <p>Live Threat Tracking</p>
                  <div className="signal-bars" aria-hidden="true">
                    <span></span><span></span><span></span><span></span>
                  </div>
                </div>
                <ul id="live-feed" className="tracker-feed">
                  {liveFeed.map((event) => (
                    <li key={event.id} className={(event as any).isNew ? 'new-event' : ''}>
                      <span className="feed-dot"></span>
                      {event.message}
                      <time>{event.timeStr}</time>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="mini-card">
                  <i className="ph ph-shield-check"></i>
                  <p>Zero-Trust Enforcement</p>
                </div>
                <div className="mini-card">
                  <i className="ph ph-chart-line-up"></i>
                  <p>Behavioral Analytics</p>
                </div>
                <div className="mini-card">
                  <i className="ph ph-fingerprint"></i>
                  <p>Identity Verification</p>
                </div>
                <div className="mini-card">
                  <i className="ph ph-globe-hemisphere-west"></i>
                  <p>Global SOC Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
