import Image from 'next/image';

export interface ServiceOverviewProps {
  title: string;
  description: string;
  points?: string[];
  imageUrl: string;
  imageAlt?: string;
  imageAlignment?: 'left' | 'right';
}

export default function ServiceOverviewBlock({
  title,
  description,
  points = [],
  imageUrl,
  imageAlt = "Service Visualization",
  imageAlignment = "right"
}: ServiceOverviewProps) {
  const isLeft = imageAlignment === 'left';

  return (
    <section className="bg-white py-20 lg:py-24 overflow-hidden border-b border-slate-100">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className={`reveal ${isLeft ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}`}>
            <h2 
              className="section-title text-slate-900 leading-tight text-balance"
              style={{ textWrap: 'balance' }}
            >
              {title}
            </h2>
            <p 
              className="mt-6 text-slate-600 leading-relaxed text-lg whitespace-pre-line text-balance"
              style={{ textAlign: 'justify', textJustify: 'inter-word', textWrap: 'unset' }}
            >
              {description}
            </p>

            {points.length > 0 && (
              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-700">
                    <i className="ph-fill ph-check-circle text-ssg-red mt-1 text-xl shrink-0 transition-transform hover:scale-110"></i>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={`reveal ${isLeft ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-darkGlow border-4 border-white aspect-[4/3] w-full group">
              <Image 
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
              {/* Subtle global red glow overlays matching the specific mockups */}
              <div className="absolute inset-0 bg-ssg-red/5 mix-blend-color pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
