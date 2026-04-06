import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Hizmet Bölgelerimiz',
  description: 'Anka Veteriner Kliniği Batıkent merkez olmak üzere Ankara genelinde veteriner hizmeti sunmaktadır.',
  keywords: 'Batıkent veteriner, Yenimahalle veteriner, Etimesgut veteriner, Sincan veteriner, Keçiören veteriner, Ankara veteriner',
  openGraph: {
    title: 'Hizmet Bölgelerimiz | Anka Veteriner Kliniği Batıkent',
    description: 'Batıkent merkez, Ankara genelinde veteriner hizmeti sunuyoruz.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: { canonical: 'https://batikentankavet.com/bolge' },
};

export default function BolgePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmet Bölgeleri', href: '/bolge' }]} />

      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <div className="paw-bg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hizmet Bölgelerimiz</h1>
            <p className="text-lg text-primary-100">Batıkent merkez olmak üzere Ankara genelinde hizmet veriyoruz</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.slug} delay={i * 0.05}>
                <Link href={`/bolge/${loc.slug}`} className="group block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex items-center justify-center"><svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">{loc.name}</h2>
                      <p className="text-sm text-gray-500 mb-3">{loc.region} • {loc.distanceFromCenter}</p>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{loc.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {loc.services.slice(0, 3).map((s) => (
                          <span key={s} className="px-2 py-0.5 bg-primary-50 text-primary-700 rounded-full text-xs">{s}</span>
                        ))}
                        {loc.services.length > 3 && (
                          <span className="px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full text-xs">+{loc.services.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
