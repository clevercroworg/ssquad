import Link from 'next/link';

export default function ContactCTASection() {
  return (
    <section id="contact" className="bg-ssg-dark2 py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8 reveal">
        <div className="cta-shell rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="cta-grid">
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-ssg-grayLight">Take Action</p>
              <h2 className="font-heading text-white text-3xl lg:text-5xl mt-4 max-w-3xl">Secure Your Business Before the Next Attack</h2>
              <p className="mt-6 text-slate-300 max-w-2xl text-lg">
                Get a focused security assessment from our experts and build a stronger, intelligence-led defense posture.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#" className="btn-primary"><i className="ph ph-calendar-check"></i>Book Security Assessment</Link>
                <Link href="#" className="btn-secondary"><i className="ph ph-headset"></i>Speak with an Expert</Link>
              </div>
            </div>

            <div className="cta-visual-wrap" aria-hidden="true">
              <div className="cta-3d-card">
                <div className="cta-orb orb-a"></div>
                <div className="cta-orb orb-b"></div>
                <div className="cta-cube">
                  <span className="face face-front"><i className="ph ph-shield-check"></i></span>
                  <span className="face face-right"></span>
                  <span className="face face-top"></span>
                </div>
                <div className="cta-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
