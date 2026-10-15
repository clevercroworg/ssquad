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

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="cert-carousel reveal sm:col-span-2 lg:col-span-5">
            <div className="cert-track">
              { /* Original set */ }
              <article className="cert-slide">
                <Image src="https://logo.clearbit.com/isc2.org" unoptimized alt="ISC2 certification logo" width={52} height={52} />
                <p>CISSP</p>
              </article>
              <article className="cert-slide">
                <Image src="https://logo.clearbit.com/isaca.org" unoptimized alt="ISACA certification logo" width={52} height={52} />
                <p>CISM</p>
              </article>
              <article className="cert-slide">
                <Image src="https://logo.clearbit.com/aicpa.org" unoptimized alt="AICPA logo for SOC 2 framework" width={52} height={52} />
                <p>SOC 2</p>
              </article>
              <article className="cert-slide">
                <Image src="https://logo.clearbit.com/iso.org" unoptimized alt="ISO certification logo" width={52} height={52} />
                <p>ISO 27001</p>
              </article>
              <article className="cert-slide">
                <Image src="https://logo.clearbit.com/nist.gov" unoptimized alt="NIST framework logo" width={52} height={52} />
                <p>NIST CSF</p>
              </article>

              { /* Duplicated set for seamless loop */ }
              <article className="cert-slide" aria-hidden="true">
                <Image src="https://logo.clearbit.com/isc2.org" unoptimized alt="" width={52} height={52} />
                <p>CISSP</p>
              </article>
              <article className="cert-slide" aria-hidden="true">
                <Image src="https://logo.clearbit.com/isaca.org" unoptimized alt="" width={52} height={52} />
                <p>CISM</p>
              </article>
              <article className="cert-slide" aria-hidden="true">
                <Image src="https://logo.clearbit.com/aicpa.org" unoptimized alt="" width={52} height={52} />
                <p>SOC 2</p>
              </article>
              <article className="cert-slide" aria-hidden="true">
                <Image src="https://logo.clearbit.com/iso.org" unoptimized alt="" width={52} height={52} />
                <p>ISO 27001</p>
              </article>
              <article className="cert-slide" aria-hidden="true">
                <Image src="https://logo.clearbit.com/nist.gov" unoptimized alt="" width={52} height={52} />
                <p>NIST CSF</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
