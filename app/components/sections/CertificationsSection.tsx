import Image from 'next/image';

export default function CertificationsSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl reveal">
          <p className="section-eyebrow">Assurance</p>
          <h2 className="section-title">Certifications and Compliance</h2>
          <p className="section-copy">
            Our security programs align with globally recognized standards and frameworks to help enterprises operate with confidence, compliance, and audit readiness.
          </p>
        </div>

        <div className="mt-10">
          <div className="cert-carousel reveal">
            <div className="cert-track">
              {[1, 2].map((setIndex) => (
                [
                  { src: "/certificate/Certification-1.png", alt: "ISO 9001" },
                  { src: "/certificate/Certification-2-1.png", alt: "ISO 27001" },
                  { src: "/certificate/Certification-4-1.png", alt: "ISO 20000" },
                  { src: "/certificate/Certification-6-1.png", alt: "ISO 14001" },
                  { src: "/certificate/Certification-7-1.png", alt: "ISO 45001" },
                  { src: "/certificate/Malaysia-Digital-Logo-new.jpg", alt: "Malaysia Digital" },
                  { src: "/certificate/crest-pentesting.png", alt: "CREST Pentesting" },
                  { src: "/certificate/logo-CSMCP-v1-final_CSMCP-strategic.png", alt: "CSMCP Strategic" },
                  { src: "/certificate/soc 2 type 2.jpeg", alt: "SOC 2 Type 2" }
                ].map((cert, i) => (
                  <article key={`${setIndex}-${i}`} className="cert-slide" aria-hidden={setIndex === 2 ? "true" : undefined}>
                    <Image 
                      src={cert.src} 
                      unoptimized 
                      alt={cert.alt} 
                      width={160} 
                      height={90} 
                    />
                  </article>
                ))
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
