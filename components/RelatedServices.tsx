import Link from 'next/link';
import React from 'react';
import AnimatedSection from './AnimatedSection';

const allServices = [
  { name: 'Kedi & Köpek Muayene', href: '/kedi-kopek-muayene', icon: 'muayene', desc: 'Kapsamlı sağlık kontrolü ve tedavi' },
  { name: 'Kedi Kısırlaştırma', href: '/kedi-kisirlastrma', icon: 'kisir', desc: 'Güvenli kısırlaştırma operasyonları' },
  { name: 'Aşılama', href: '/asilama', icon: 'asi', desc: 'Koruyucu aşılama programları' },
  { name: 'Acil Veteriner', href: '/iletisim', icon: 'acil', desc: '7/24 acil veteriner hizmetleri' },
  { name: 'Ameliyat & Cerrahi', href: '/hizmetler', icon: 'cerrahi', desc: 'Modern ameliyathane ve cerrahi operasyonlar' },
];

const iconMap: Record<string, React.ReactNode> = {
  muayene: <svg className="w-8 h-8 text-primary-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18c-2.21 0-4-1.79-4-4 0-1.66 2-5 4-5s4 3.34 4 5c0 2.21-1.79 4-4 4zm-3.5-9C7.67 9 7 8.33 7 7.5S7.67 6 8.5 6 10 6.67 10 7.5 9.33 9 8.5 9zm7 0c-.83 0-1.5-.67-1.5-1.5S14.67 6 15.5 6 17 6.67 17 7.5 16.33 9 15.5 9zm-10 3c-.83 0-1.5-.67-1.5-1.5S4.67 8 5.5 8 7 8.67 7 9.5 6.33 12 5.5 12zm13 0c-.83 0-1.5-.67-1.5-1.5S17.67 8 18.5 8 20 8.67 20 9.5 19.33 12 18.5 12z" /></svg>,
  kisir: <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121A3 3 0 109.879 9.879m4.242 4.242L9.879 9.879m4.242 4.242L6.343 17.657M9.879 9.879L6.343 6.343" /></svg>,
  asi: <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  acil: <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" /></svg>,
  cerrahi: <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
};

interface RelatedServicesProps {
  showAllLink?: boolean;
  exclude?: string;
}

export default function RelatedServices({ showAllLink = true, exclude }: RelatedServicesProps) {
  const filtered = exclude ? allServices.filter(s => s.href !== exclude) : allServices;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Diğer Hizmetlerimiz</h2>
            <p className="mt-3 text-gray-600">Batıkent ve Ankara genelinde sunduğumuz tüm veteriner hizmetleri</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.05}>
              <Link
                href={service.href}
                className="block p-5 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-3">{iconMap[service.icon]}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {showAllLink && (
          <div className="text-center mt-8">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
            >
              Tüm Hizmetleri Görüntüle
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
