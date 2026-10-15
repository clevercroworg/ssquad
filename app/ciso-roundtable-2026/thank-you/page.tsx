import Image from "next/image";
import Link from "next/link";
import "../ciso.css"; // Reuse the animations and styles

export default function ThankYouPage() {
  return (
    <div className="bg-ssg-dark text-slate-800 font-body antialiased min-h-screen flex flex-col items-center justify-center relative ciso-hero overflow-hidden">
      <div className="ciso-hero-grid-overlay"></div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center ciso-animate-fade-in-up">
        {/* Logo */}
        <div className="flex justify-center items-center gap-6 mb-10">
          <Link href="/ciso-roundtable-2026">
            <Image src="/images/ciso-roundtable/SSquad_logo_white.svg" alt="Ssquad Global" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <span className="text-white/40 text-2xl font-light leading-none">|</span>
          <span aria-label="Securonix">
            <Image src="/images/ciso-roundtable/securonix_logo_reverse.png" alt="Securonix" width={100} height={28} className="h-7 w-auto opacity-90 relative -top-[1px]" />
          </span>
        </div>

        {/* Thank You Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl shadow-black/50">
          <div className="h-20 w-20 bg-ssg-red/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-ssg-red/30">
            <i className="ph ph-check-circle text-4xl text-ssg-red"></i>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Registration Received</h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
            Thank you for RSVPing to the CISO Roundtable 2026. A confirmation email with the event details has been sent to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/ciso-roundtable-2026" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-ssg-red px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-ssg-red shadow-[0_0_15px_rgba(236,32,36,0.3)]">
              <i className="ph ph-arrow-left"></i> Return to Homepage
            </Link>
            <a href="https://ssquad.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              Visit Ssquad Global <i className="ph ph-arrow-up-right"></i>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-slate-500 text-sm">
          <p>© 2026 Ssquad Global. By Invitation Only.</p>
        </div>
      </div>
    </div>
  );
}
