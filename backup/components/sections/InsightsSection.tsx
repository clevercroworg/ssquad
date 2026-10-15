import Image from 'next/image';

export default function InsightsSection() {
  return (
    <section className="bg-ssg-light py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Insights</p>
            <h2 className="section-title">Latest Cybersecurity News</h2>
          </div>
          <a href="https://ssquad.com/blog/" target="_blank" rel="noopener noreferrer" className="text-ssg-red font-semibold inline-flex items-center gap-2">View all insights <span>&rarr;</span></a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="insight-card reveal">
            <Image src="https://ssquad.com/wp-content/uploads/2025/05/securtity-advisory-570x600.jpg" unoptimized alt="Security advisory visual from SSquad Global" width={570} height={600} className="w-full h-auto" />
            <div className="content">
              <h3>Security Advisory: Strengthen Your Cyber Defenses With Expert Guidance</h3>
              <p>In today&apos;s volatile cyber landscape, expert guidance helps organizations reduce risk and improve resilience.</p>
              <a href="https://ssquad.com/security-advisory-strengthen-your-cyber-defenses-with-expert-guidance/" target="_blank" rel="noopener noreferrer">Read more <span>&rarr;</span></a>
            </div>
          </article>
          <article className="insight-card reveal">
            <Image src="https://ssquad.com/wp-content/uploads/2020/11/nist-570x600.jpg" unoptimized alt="NIST cybersecurity framework visual from SSquad Global" width={570} height={600} className="w-full h-auto" />
            <div className="content">
              <h3>How Can Organizations Use The NIST Cybersecurity Framework To Strengthen Their Security?</h3>
              <p>Understand how the NIST framework provides a structured path to identify, protect, detect, respond, and recover.</p>
              <a href="https://ssquad.com/how-can-organizations-use-the-nist-cybersecurity-framework-to-strengthen-their-security/" target="_blank" rel="noopener noreferrer">Read more <span>&rarr;</span></a>
            </div>
          </article>
          <article className="insight-card reveal">
            <Image src="https://ssquad.com/wp-content/uploads/2020/11/ransom_banner-570x600.jpg" unoptimized alt="Ransomware awareness visual from SSquad Global" width={570} height={600} className="w-full h-auto" />
            <div className="content">
              <h3>Ransomware For Small Business: Everything You Need To Know About</h3>
              <p>Learn key ransomware risks and practical controls small and mid-sized businesses should implement first.</p>
              <a href="https://ssquad.com/ransomware-for-small-business-everything-you-need-to-know-about/" target="_blank" rel="noopener noreferrer">Read more <span>&rarr;</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
