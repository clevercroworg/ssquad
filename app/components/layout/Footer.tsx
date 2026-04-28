"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="bg-ssg-dark py-16">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 text-slate-300 items-start">
          <div className="lg:col-span-5 footer-col">
            <Image src="/images/logon.png" alt="SSquad Global logo" width={160} height={40} className="h-10 w-auto" />
            <p className="mt-5 max-w-md text-sm text-slate-400">
              SSquad Global delivers enterprise-grade cybersecurity, infrastructure, cloud, and managed security services for organizations operating in high-stakes environments.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xl text-slate-300">
              <a href="https://www.linkedin.com/company/ssquad-global/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/people/Ssquad-Global/100063703443364/#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social"><i className="ph ph-facebook-logo"></i></a>
            </div>
          </div>

          <div className="lg:col-span-3 footer-col">
            <h3>Contact Info</h3>
            <ul>
              <li><strong>Phone:</strong><br />+603 2276 5856</li>
              <li><strong>Email:</strong><br />sales@ssquad.com</li>
              <li><strong>Address:</strong><br />71 Robinson Rd, Singapore 068895</li>
            </ul>
          </div>
          <div className="lg:col-span-2 footer-col">
            <h3>Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/cybersecurity-consulting" className="hover:text-ssg-red transition-colors">Cyber Security</Link></li>
              <li><Link href="/services/infrastructure-management" className="hover:text-ssg-red transition-colors">Infrastructure</Link></li>
              <li><Link href="/services/cloud-consulting" className="hover:text-ssg-red transition-colors">Cloud</Link></li>
              <li><Link href="/services/custom-app-development" className="hover:text-ssg-red transition-colors">Application</Link></li>
              <li><a href="https://www.harpydefence.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ssg-red transition-colors">Harpy Defence</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2 footer-col">
            <h3>Company</h3>
            <ul>
              <li><Link href="/company" className="hover:text-ssg-red transition-colors">About Us</Link></li>
              <li><Link href="/industries" className="hover:text-ssg-red transition-colors">Industries</Link></li>
              <li><Link href="/insights" className="hover:text-ssg-red transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-ssg-red transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} SSquad Global. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ssg-red transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ssg-red transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
