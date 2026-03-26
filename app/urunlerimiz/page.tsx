import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Ürünlerimiz | Kedi Köpek Mama & Bakım Ürünleri',
  description: 'Batıkent Ankara veteriner kliniği ürünleri. Kedi köpek mama, vitamin, bakım ürünleri, medikal ürünler. (0312) 354 26 52',
  keywords: 'kedi mama, köpek mama, Royal Canin, Hills, evcil hayvan ürünleri, vitamin, bakım ürünleri, Batıkent veteriner',
  openGraph: {
    title: 'Ürünlerimiz | Anka Veteriner Kliniği Batıkent',
    description: 'Kedi köpek mama, vitamin ve bakım ürünleri.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: { canonical: 'https://batikentankavet.com/urunlerimiz' },
};

export default function UrunlerimizPage() {
  const kategoriler = [
    {
      title: 'Kedi Mamaları',
      icon: 'kedi',
      items: ['Royal Canin', 'Hills Science Diet', 'Pro Plan', 'Acana', 'Orijen', 'Brit Care'],
    },
    {
      title: 'Köpek Mamaları',
      icon: 'kopek',
      items: ['Royal Canin', 'Hills Science Diet', 'Pro Plan', 'Acana', 'Orijen', 'Brit Care'],
    },
    {
      title: 'Vitamin & Takviyeler',
      icon: 'vitamin',
      items: ['Tüy bakım vitaminleri', 'Eklem destekleyiciler', 'Bağışıklık güçlendiriciler', 'Omega yağ asitleri'],
    },
    {
      title: 'Bakım Ürünleri',
      icon: 'bakim',
      items: ['Şampuanlar', 'Kulak temizleyiciler', 'Göz bakım ürünleri', 'Diş bakım ürünleri'],
    },
    {
      title: 'Parazit Ürünleri',
      icon: 'parazit',
      items: ['İç parazit tabletleri', 'Dış parazit damlaları', 'Pire-kene tasmaları', 'Çevre spreyleri'],
    },
    {
      title: 'Medikal Ürünler',
      icon: 'medikal',
      items: ['Yara bakım ürünleri', 'Elizabeth yakalıklar', 'Bandajlar', 'Sterilizasyon ürünleri'],
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Ürünlerimiz', href: '/urunlerimiz' }]} />

      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <svg className="w-12 h-12 text-white mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ürünlerimiz</h1>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">Evcil dostlarınız için en kaliteli ürünler</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/products/urunlerimiz.jpeg" alt="Veteriner Ürünleri" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Güvenilir Ürünler</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Kliniğimizde evcil hayvanlarınız için ihtiyaç duyabileceğiniz tüm ürünleri bulabilirsiniz. Mama, vitamin, bakım ürünleri ve medikal malzemeler stoklarımızda mevcuttur.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hekimlerimiz, hayvanınızın durumuna ve ihtiyaçlarına uygun ürünleri önerir. Tüm ürünlerimiz orijinal ve Tarım Bakanlığı onaylıdır.
              </p>
              <div className="space-y-3">
                {['Orijinal ve onaylı ürünler', 'Veteriner hekim tavsiyeleri', 'Uygun fiyat garantisi', 'Geniş ürün yelpazesi'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/products/klinik-ici-urunlerimiz.jpeg" alt="Klinik İçi Ürünlerimiz" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Neden Kliniğimizden Alışveriş?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold">1.</span>
                    <span className="text-gray-700">Hekiminiz hayvanınıza en uygun ürünü birebir önerir.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold">2.</span>
                    <span className="text-gray-700">Sahte veya son kullanma tarihi geçmiş ürün riski yoktur.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold">3.</span>
                    <span className="text-gray-700">Muayene sonrası hemen ihtiyacınız olan ürünleri temin edebilirsiniz.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 font-bold">4.</span>
                    <span className="text-gray-700">Ürün kullanım talimatları hekim tarafından detaylıca açıklanır.</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Ürün Kategorileri</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kategoriler.map((kategori) => {
                const iconMap: Record<string, React.ReactNode> = {
                  kedi: <svg className="w-10 h-10 text-purple-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18c-2.21 0-4-1.79-4-4 0-1.66 2-5 4-5s4 3.34 4 5c0 2.21-1.79 4-4 4zm-3.5-9C7.67 9 7 8.33 7 7.5S7.67 6 8.5 6 10 6.67 10 7.5 9.33 9 8.5 9zm7 0c-.83 0-1.5-.67-1.5-1.5S14.67 6 15.5 6 17 6.67 17 7.5 16.33 9 15.5 9zm-10 3c-.83 0-1.5-.67-1.5-1.5S4.67 8 5.5 8 7 8.67 7 9.5 6.33 12 5.5 12zm13 0c-.83 0-1.5-.67-1.5-1.5S17.67 8 18.5 8 20 8.67 20 9.5 19.33 12 18.5 12z" /></svg>,
                  kopek: <svg className="w-10 h-10 text-purple-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18c-2.21 0-4-1.79-4-4 0-1.66 2-5 4-5s4 3.34 4 5c0 2.21-1.79 4-4 4zm-3.5-9C7.67 9 7 8.33 7 7.5S7.67 6 8.5 6 10 6.67 10 7.5 9.33 9 8.5 9zm7 0c-.83 0-1.5-.67-1.5-1.5S14.67 6 15.5 6 17 6.67 17 7.5 16.33 9 15.5 9zm-10 3c-.83 0-1.5-.67-1.5-1.5S4.67 8 5.5 8 7 8.67 7 9.5 6.33 12 5.5 12zm13 0c-.83 0-1.5-.67-1.5-1.5S17.67 8 18.5 8 20 8.67 20 9.5 19.33 12 18.5 12z" /></svg>,
                  vitamin: <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  bakim: <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                  parazit: <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  medikal: <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                };
                return (
                <div key={kategori.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="mb-3">{iconMap[kategori.icon]}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{kategori.title}</h3>
                  <ul className="space-y-1">
                    {kategori.items.map((item) => (
                      <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ürün Bilgisi İçin Bizi Arayın</h2>
              <p className="text-gray-600 mb-6">Aradığınız ürünün stok durumu ve fiyat bilgisi için bize ulaşabilirsiniz.</p>
              <a href="tel:+903123542652" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors shadow-lg text-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> (0312) 354 26 52</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
