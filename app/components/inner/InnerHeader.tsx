import Link from "next/link";

interface InnerHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function InnerHeader({ title, subtitle, breadcrumbs }: InnerHeaderProps) {
  return (
    <div className="hero relative overflow-hidden bg-ssg-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
      {/* Home page matching animations */}
      <div className="hero-grid-overlay"></div>
      <div className="hero-glow"></div>
      <div className="hero-network-lines"></div>
      <div className="hero-signal-waves"></div>
      <div className="hero-3d-waves"></div>
      <div className="hero-scan-sweep"></div>

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex justify-center items-center gap-2 mb-6 reveal opacity-60">
             {breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-white/80 font-medium">
                   {idx > 0 && <i className="ph ph-caret-right text-[10px]"></i>}
                   <Link href={crumb.href} className="hover:text-ssg-red transition-colors">{crumb.label}</Link>
                </div>
             ))}
          </nav>
        )}

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight reveal">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-slate-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto reveal">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
