"use client";

import { useEffect, useState } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fname: '', wemail: '', pnumber: '', csubject: '', cmessage: '', terms: false
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      setErrorMessage('Please accept the Terms of Service to continue.');
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    setErrorMessage('');

    try {
      const payload = {
        name: formData.fname,
        email: formData.wemail,
        number: formData.pnumber,
        subject: formData.csubject,
        message: formData.cmessage,
        terms: formData.terms
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit the form');
      }

      setStatus('success');
      setFormData({ fname: '', wemail: '', pnumber: '', csubject: '', cmessage: '', terms: false });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred.');
    }
  };

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    reveals.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(index * 40, 300)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const locations = [
    { country: "Singapore", code: "sg", company: "Ssquad Pte Ltd (HQ)", address: "71 Robinson Rd, Singapore 068895" },
    { country: "Australia", code: "au", company: "Ssquad Pty Ltd", address: "Office 4, 10 Welch Street, Southport QLD 4215, Australia" },
    { country: "Hong Kong", code: "hk", company: "Ssquad Limited", address: "No 5, 17/F Strand 50, 50 Bonham Strand, Sheung Wan, Hong Kong." },
    { country: "India", code: "in", company: "Ssquad Information Systems Pvt Ltd", address: "JBR Tech Park, Plot No. 77, 6th Road, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066" },
    { country: "Indonesia", code: "id", company: "PT Ssquad Information Systems", address: "AXA Tower Lt. 36, Unit 5-6, Kuningan City, Jl. Prof Dr. Satrio Kav 18, Kuningan, Jakarta Selatan, 12940" },
    { country: "Malaysia", code: "my", company: "Ssquad Sdn Bhd", address: "25-7, Level 28-03, Q Sentral, Jalan Stesen Sentral 2, Kuala Lumpur Sentral, 50470" },
    { country: "UK", code: "gb", company: "Ssquad Limited", address: "128 City Road, London, EC1V 2NX, UK" },
    { country: "USA", code: "us", company: "Ssquad Inc", address: "98 Cuttermill Road, Ste 466, Great Neck NY 11021" },
    { country: "Kuwait", code: "kw", company: "Kuwait Agent Partner : Directional Universal For General Trade and Construction", address: "P.O BOX 66803 BAYAN, ALSHARQ 43759", phone: "96522204051-965" },
  ];

  return (
    <main className="bg-white">
      <AppServiceHeader 
        title="Contact Us" 
        subtitle="Global presence, localized expertise. Reach out to our teams worldwide to engineer your next digital transformation."
        breadcrumbs={[]} 
        theme="clean"
      />

      {/* Main Contact Section */}
      <section className="py-20 lg:py-28 relative bg-white overflow-hidden border-b border-slate-100">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Text & Info */}
            <div className="reveal space-y-10 lg:sticky lg:top-32">
              <div>
                <p className="text-ssg-red font-bold tracking-widest text-sm uppercase mb-3">Global Connectivity</p>
                <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-5xl text-slate-900 tracking-tight leading-tight text-balance mb-6">
                  Ready to transform your <span className="text-transparent bg-clip-text bg-gradient-to-r from-ssg-red to-red-500">enterprise?</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed text-balance">
                  Connect with our global consultants today. Whether you need rapid technical triage, custom architectural deployments, or strategic digital transformation, our teams are on standby 24/7.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 shadow-sm border border-slate-100 flex items-center justify-center text-ssg-red group-hover:bg-ssg-red group-hover:text-white transition-colors duration-300 shrink-0">
                    <i className="ph ph-envelope-simple text-2xl"></i>
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-slate-900 font-bold text-lg mb-1">Sales & Partnerships</h3>
                    <p className="text-slate-500">Contact our global sales operations.</p>
                    <a href="mailto:sales@ssquad.com" className="inline-block mt-2 text-ssg-red hover:text-red-700 font-bold hover:underline">sales@ssquad.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 shadow-sm border border-slate-100 flex items-center justify-center text-ssg-red group-hover:bg-ssg-red group-hover:text-white transition-colors duration-300 shrink-0">
                    <i className="ph ph-headset text-2xl"></i>
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-slate-900 font-bold text-lg mb-1">Global Support Desk</h3>
                    <p className="text-slate-500">For active contract support and triage.</p>
                    <a href="mailto:support@ssquad.com" className="inline-block mt-2 text-ssg-red hover:text-red-700 font-bold hover:underline">support@ssquad.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="reveal">
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-100/60 relative overflow-hidden group">
                {/* Form Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-ssg-red to-red-400"></div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Direct Transmission</h3>
                
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit} autoComplete="off">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fname" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name *</label>
                      <input id="fname" type="text" required value={formData.fname} onChange={handleChange} placeholder="John Doe" autoComplete="new-password" className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl px-4 py-3.5 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-ssg-red outline-none transition-all placeholder:text-slate-400 font-medium text-[15px]" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="wemail" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Work Email *</label>
                      <input id="wemail" type="email" required value={formData.wemail} onChange={handleChange} placeholder="john@enterprise.com" autoComplete="new-password" className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl px-4 py-3.5 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-ssg-red outline-none transition-all placeholder:text-slate-400 font-medium text-[15px]" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="pnumber" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                      <input id="pnumber" type="tel" value={formData.pnumber} onChange={handleChange} placeholder="+1 (555) 000-0000" autoComplete="new-password" className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl px-4 py-3.5 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-ssg-red outline-none transition-all placeholder:text-slate-400 font-medium text-[15px]" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="csubject" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Subject</label>
                      <input id="csubject" type="text" value={formData.csubject} onChange={handleChange} placeholder="Inquiry Type" autoComplete="new-password" className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl px-4 py-3.5 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-ssg-red outline-none transition-all placeholder:text-slate-400 font-medium text-[15px]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="cmessage" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Transmission Detail *</label>
                    <textarea id="cmessage" required rows={5} value={formData.cmessage} onChange={handleChange} placeholder="Describe your operational requirements..." className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-xl px-4 py-3.5 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-ssg-red outline-none transition-all placeholder:text-slate-400 font-medium text-[15px] resize-none"></textarea>
                  </div>
                  <div className="flex items-start gap-3 px-1 pt-1">
                    <input type="checkbox" id="terms" checked={formData.terms} onChange={handleChange} className="mt-1 w-4 h-4 rounded border-slate-300 text-ssg-red shadow-sm focus:ring-ssg-red focus:ring-offset-1 transition-all cursor-pointer" />
                    <label htmlFor="terms" className="text-slate-500 text-sm cursor-pointer leading-relaxed">
                      I accept the <a href="#" className="text-slate-700 hover:text-ssg-red font-semibold transition-colors underline decoration-slate-200 underline-offset-4">Terms of Service</a> and <a href="#" className="text-slate-700 hover:text-ssg-red font-semibold transition-colors underline decoration-slate-200 underline-offset-4">Privacy Framework</a>.
                    </label>
                  </div>

                  {status === 'success' && (
                    <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 flex items-center gap-3">
                      <i className="ph-fill ph-check-circle text-xl"></i>
                      <p className="font-medium">Transmission successful. We will contact you shortly.</p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-3">
                      <i className="ph-fill ph-warning-circle text-xl"></i>
                      <p className="font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <div className="pt-4">
                    <button type="submit" disabled={status === 'loading'} className={`w-full ${status === 'loading' ? 'bg-slate-500 cursor-not-allowed' : 'bg-slate-900 hover:bg-ssg-red shadow-lg shadow-slate-900/20 hover:shadow-red-500/25 hover:-translate-y-0.5'} text-white font-bold rounded-xl px-8 py-4 transition-all text-[15px] tracking-wide flex items-center justify-center gap-3`}>
                      {status === 'loading' ? 'Initializing...' : 'Initialize Transmission'} 
                      {status !== 'loading' && <i className="ph-bold ph-arrow-right"></i>}
                      {status === 'loading' && <i className="ph ph-spinner animate-spin"></i>}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Locations Grid */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 reveal max-w-3xl mx-auto">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight mb-6">
              Our Global Nodes
            </h2>
            <p className="text-lg md:text-xl text-slate-600 text-balance leading-relaxed">
              Ssquad maintains an aggressive global presence, ensuring rapid response and on-site intervention wherever your enterprise operates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, idx) => (
              <div key={idx} className="reveal bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200/80 hover:shadow-xl hover:shadow-slate-200/50 hover:border-ssg-red/30 hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-start relative overflow-hidden">
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-red-50/80 transition-colors duration-700"></div>
                
                <div className="flex flex-col gap-6 mb-8 relative z-10">
                  <div className="w-24 h-16 shrink-0 rounded-xl overflow-hidden shadow-md border border-slate-100 group-hover:border-ssg-red/20 transition-colors duration-500 bg-slate-50 p-1">
                    <img 
                      src={`https://flagcdn.com/w160/${loc.code}.png`}
                      alt={`${loc.country} Flag`}
                      className="w-full h-full object-cover rounded-lg" 
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-slate-900 text-2xl tracking-tight group-hover:text-ssg-red transition-colors duration-300">{loc.country}</h3>
                    <h4 className="font-bold text-slate-500 text-xs mt-2 uppercase tracking-widest">{loc.company}</h4>
                  </div>
                </div>

                <div className="relative z-10 flex-grow pt-2">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100/50 group-hover:bg-white group-hover:border-slate-200 transition-colors duration-300 h-full">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-red-100 transition-colors">
                      <i className="ph-fill ph-map-pin text-slate-400 group-hover:text-ssg-red text-lg transition-colors duration-300"></i>
                    </div>
                    <div className="pt-1.5">
                      <p className="text-[15px] font-medium text-slate-600 leading-relaxed">{loc.address}</p>
                      {loc.phone && <p className="text-[15px] font-medium text-slate-600 leading-relaxed mt-1">Ph: {loc.phone}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

