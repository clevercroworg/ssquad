"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const serviceData: Record<string, { title: string; desc: string; href: string }[]> = {
  cyber: [
    { title: 'Application Security', desc: 'Comprehensive protection for modern software and digital applications.', href: '/services/application-security' },
    { title: 'AI-Powered Cybersecurity Solutions', desc: 'AI-assisted detection and response against fast-moving cyber threats.', href: '/services/ai-cybersecurity' },
    { title: 'Cybersecurity for AI Systems', desc: 'Engineer AI-specific security frameworks to safeguard machine learning models against adversarial attacks.', href: '/services/security-for-ai' },
    { title: 'Human-Centric Security', desc: 'Security designed around people, not just systems, ensuring frictionless enterprise protection.', href: '/services/human-centric-cybersecurity' },
    { title: 'Threat Intelligence and Analytics', desc: 'Intelligence-led monitoring with risk-prioritized defensive actions.', href: '/services/threat-intelligence' },
    { title: 'Penetration Testing Services', desc: 'Adversarial validation to uncover exploitable weaknesses early.', href: '/services/penetration-testing' },
    { title: 'Identity and Access Management (IAM)', desc: 'Identity-first access controls and governance for enterprise systems.', href: '/services/iam' },
    { title: 'OT Security Services', desc: 'Tailored security controls for industrial and operational technology.', href: '/services/ot-security' },
    { title: 'Browser Security as a Service', desc: 'Secure the gateway to your digital world and shield against web-based threats.', href: '/services/browser-security' },
    { title: 'Governance, Risk & Compliance', desc: 'Transform regulatory complexity into competitive advantage with enterprise GRC.', href: '/services/grc-services' },
    { title: 'Integrated SOC Services', desc: 'Unify threat detection and incident response across IT and OT environments.', href: '/services/integrated-soc' },
    { title: 'Cybersecurity Consulting', desc: 'Strategic advisory services to strengthen defense postures and optimize investments.', href: '/services/cybersecurity-consulting' },
    { title: 'Quantum-Safe Cybersecurity', desc: 'Engineer post-quantum cryptographic frameworks that protect against Q-Day threats.', href: '/services/quantum-safe-cybersecurity' },
  ],
  infra: [
    { title: 'End-to-End IT Infrastructure Management', desc: 'Modernize and operate resilient enterprise infrastructure at scale.', href: '/services/infrastructure-management' },
    { title: 'Auxiliary Services', desc: 'Specialized technology services aligned with business priorities.', href: '/services/auxiliary-services' },
    { title: 'End-User Computing', desc: 'Secure and flexible end-user environments for enterprise teams.', href: '/services/end-user-computing' },
    { title: 'IoT Services', desc: 'Connect data and devices to improve operations and reduce risk.', href: '/services/iot-services' },
    { title: 'Network as a Platform', desc: 'Stabilize and modernize data center and enterprise networks.', href: '/services/network-as-a-platform' },
  ],
  cloud: [
    { title: 'Cloud Data Migration & Modernization', desc: 'Seamless cloud migration with modernized architecture and controls.', href: '/services/cloud-data-migration' },
    { title: 'Cloud Consulting Services', desc: 'Strategic guidance for scalable, high-confidence cloud decisions.', href: '/services/cloud-consulting' },
    { title: 'Cloud Native Solutions', desc: 'Cloud-native engineering for agility, scalability, and innovation.', href: '/services/cloud-native-solutions' },
    { title: 'Cloud Assurance Services', desc: 'Secure, compliant, and resilient cloud operating environments.', href: '/services/cloud-assurance' },
    { title: 'Cloud Security', desc: 'Layered cloud protection with proactive threat defense.', href: '/services/cloud-security' },
    { title: 'Cloud Operations & Intelligent Automation', desc: 'Automated cloud operations to improve reliability and speed.', href: '/services/cloud-operations' },
    { title: 'Distributed & Hybrid Cloud Solutions', desc: 'Flexibility, performance, and control wherever you need it.', href: '/services/distributed-hybrid-cloud' },
    { title: 'Industry Cloud Solutions', desc: 'Tailored cloud platforms designed for your industry unique needs.', href: '/services/industry-cloud' },
  ],
  app: [
    { title: 'Custom Application Development', desc: 'Tailor-built applications aligned to unique business workflows.', href: '/services/custom-app-development' },
    { title: 'Legacy Application Modernization', desc: 'Re-engineer legacy systems for modern platforms and outcomes.', href: '/services/legacy-app-modernization' },
    { title: 'Application Integration Services', desc: 'Connect systems and data sources for unified digital operations.', href: '/services/application-integration' },
    { title: 'API Development & Integration', desc: 'Build secure APIs that extend platform capabilities.', href: '/services/api-development' },
    { title: 'Workflow Automation & Optimization', desc: 'Automate repetitive work to improve speed and efficiency.', href: '/services/workflow-automation' },
    { title: 'Security & Compliance Customization', desc: 'Align applications with security and regulatory controls.', href: '/services/security-compliance' },
  ],
};

const serviceLabels: Record<string, string> = {
  cyber: 'Cyber Security Services',
  infra: 'Infrastructure Services',
  cloud: 'Cloud Services',
  app: 'Application Services',
};

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('cyber');
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const headerRef = useRef<HTMLElement>(null);
  const megaNavRef = useRef<HTMLDivElement>(null);
  const headerShellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMegaOpen(false);
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMegaOpen &&
        megaNavRef.current &&
        !megaNavRef.current.contains(e.target as Node) &&
        headerShellRef.current &&
        !headerShellRef.current.contains(e.target as Node)
      ) {
        setIsMegaOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMegaOpen]);

  const openMega = (key: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (activeService !== key) {
      setIsSwitching(true);
      setActiveService(key);
      setTimeout(() => setIsSwitching(false), 110);
    }
    setIsMegaOpen(true);
  };

  const closeMega = () => {
    setIsMegaOpen(false);
  };

  const toggleMobileCategory = (key: string) => {
    setActiveMobileCategory(activeMobileCategory === key ? null : key);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileCategory(null);
  };

  const handleMouseEnterShell = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const handleMouseLeaveShell = () => {
    closeTimerRef.current = setTimeout(closeMega, 180);
  };

  const currentItems = serviceData[activeService] || [];

  if (pathname?.startsWith('/admin') || pathname?.startsWith('/ciso-roundtable-2026')) return null;

  return (
    <header 
      id="site-header" 
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'header-scrolled' : ''}`}
    >
      <div 
        id="scroll-progress" 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div className="max-w-container mx-auto px-6 lg:px-8">
          <div 
            ref={headerShellRef}
            className={`header-shell transition-all duration-300 ${
              isMobileMenuOpen || isScrolled 
              ? 'bg-ssg-dark border-white/20 shadow-2xl mt-0 rounded-none lg:rounded-2xl lg:mt-4' 
              : 'mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md'
            }`}
            onMouseEnter={handleMouseEnterShell}
            onMouseLeave={handleMouseLeaveShell}
          >
          <div className="flex items-center justify-between px-5 py-4 lg:px-7">
            <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Ssquad Global Home">
              <Image src="/images/logon.png" alt="Ssquad Global logo" width={144} height={36} className="h-9 w-auto" priority />
            </Link>

            <nav id="desktop-nav" className="hidden lg:flex items-center gap-8 text-sm text-slate-100/90 font-medium">
              <Link className="nav-link" href="/company" onMouseEnter={closeMega}>Company</Link>
              {(['cyber', 'infra', 'cloud', 'app'] as const).map((key) => (
                <button 
                  key={key}
                  className={`nav-link nav-service-trigger ${activeService === key && isMegaOpen ? 'nav-service-active' : ''}`} 
                  type="button" 
                  aria-expanded={activeService === key && isMegaOpen}
                  onMouseEnter={() => openMega(key)}
                  onClick={() => openMega(key)}
                  onFocus={() => openMega(key)}
                >
                  {serviceLabels[key].replace(' Services', '')}
                </button>
              ))}
              <a className="nav-link" href="https://www.harpydefence.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={closeMega}>Harpy Defence</a>
              <Link className="nav-link" href="/contact" onMouseEnter={closeMega}>Contact</Link>
            </nav>

            <div className="hidden lg:block">
              <Link href="/contact" className="btn-outline-violet">
                Talk to an Expert <i className="ph ph-arrow-up-right"></i>
              </Link>
            </div>

            <button 
              id="mobile-menu-btn" 
              className="lg:hidden text-white ml-2" 
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="ph ph-list text-3xl"></i>
            </button>
          </div>

          <div
            id="mega-menu"
            ref={megaNavRef}
            className={`mega-menu hidden lg:block ${isMegaOpen ? 'open' : ''}`}
            role="region"
            aria-label="Services navigation"
            aria-hidden={!isMegaOpen}
          >
            <div className="mega-menu-inner">
              <div className="mega-content-wrap">
                <div id="mega-title" className="mega-title flex justify-between items-end border-b border-white/10 pb-2 mb-4">
                  <span>{serviceLabels[activeService]}</span>
                  <span className="text-xs font-medium text-ssg-red/80 tracking-widest uppercase mb-1 flex items-center gap-1.5"><i className="ph-fill ph-list-dashes"></i> {currentItems.length} Services</span>
                </div>
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-3 transition-all duration-150 max-h-[60vh] overflow-y-auto pr-2 overflow-x-hidden ${isSwitching ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`} id="mega-content" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}>
                  {currentItems.map((item, idx) => (
                    <article className="mega-item !rounded-[0.75rem]" key={idx}>
                      <Link onClick={closeMega} className="mega-link !flex !flex-col !h-full !p-3 sm:!p-4" href={item.href}>
                        <h3 className="!text-[0.92rem] !leading-[1.3]">{item.title}</h3>
                        <p className="!mt-1 !text-[0.82rem] !leading-[1.35]">{item.desc}</p>
                        <span className="mega-link-cta !mt-auto !pt-2">View service <i className="ph ph-arrow-up-right"></i></span>
                      </Link>
                    </article>
                  ))}
                </div>
                {currentItems.length > 9 && (
                  <div className="text-center mt-3 text-[10px] text-slate-400 font-medium tracking-wider uppercase flex items-center justify-center gap-1.5 opacity-70">
                    <i className="ph ph-mouse-scroll text-sm"></i> Scroll down to explore all {currentItems.length} services
                  </div>
                )}
              </div>
            </div>
          </div>

          <div id="mobile-menu" className={`lg:hidden border-t border-white/10 px-5 pb-8 max-h-[85vh] overflow-y-auto ${isMobileMenuOpen ? 'block animate-in fade-in slide-in-from-top-4 duration-300' : 'hidden'}`}>
            <nav className="pt-6 flex flex-col gap-1 text-sm text-white font-medium">
              <Link href="/company" className="mobile-link" onClick={closeMobileMenu}>Company</Link>
              
              {(['cyber', 'infra', 'cloud', 'app'] as const).map((key) => (
                <div key={key} className="flex flex-col">
                  <button 
                    onClick={() => toggleMobileCategory(key)}
                    className={`mobile-link flex items-center justify-between w-full text-left ${activeMobileCategory === key ? 'text-ssg-red font-bold' : ''}`}
                  >
                    {serviceLabels[key]}
                    <i className={`ph ph-caret-down transition-transform duration-300 ${activeMobileCategory === key ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileCategory === key ? 'max-h-[1000px] opacity-100 mt-2 pb-2' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 flex flex-col gap-3 border-l border-white/10 ml-1 py-1">
                      {serviceData[key].map((item, idx) => (
                        <Link 
                          key={idx} 
                          href={item.href} 
                          className="text-white/60 hover:text-ssg-red transition-colors py-1.5"
                          onClick={closeMobileMenu}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <a href="https://www.harpydefence.com/" target="_blank" rel="noopener noreferrer" className="mobile-link" onClick={closeMobileMenu}>Harpy Defence</a>
              <Link href="/contact" className="mobile-link" onClick={closeMobileMenu}>Contact</Link>
              
              <Link href="/contact" className="btn-outline-violet mt-4 inline-flex justify-center" onClick={closeMobileMenu}>
                Talk to an Expert <i className="ph ph-arrow-up-right"></i>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
