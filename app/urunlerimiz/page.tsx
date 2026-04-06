import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title:
    'Ürünlerimiz | Veteriner Mama, Vitamin ve Bakım Ürünleri | Anka Veteriner Kliniği Batıkent',
  description:
    'Batıkent Ankara ANKA Veteriner Kliniği ürünleri. Royal Canin, Hills, YNC, Viyo ve daha fazlası. Orijinal veteriner ürünleri. (0312) 354 26 52',
}; 
const WA = '905548550590';

const urunler = [
  {
    name: 'Royal Canin Hypoallergenic',
    desc: 'Alerji ve gıda hassasiyeti olan kedi ve köpekler için özel veteriner diyeti. Hidrolize protein kaynağı ile sindirim rahatlığı sağlar.',
    category: 'Veteriner Diyetleri',
    badge: 'Reçeteli Mama',
    brandColor: '#C8102E',
    brandBg: 'bg-red-700',
    brandGradient: 'from-red-700 via-red-600 to-red-800',
    brand: 'ROYAL CANIN',
    brandSub: 'Veterinary Diet',
    tagline: 'Hipoalerjenik Veteriner Diyeti',
    icon: 'shield',
    waMsg: 'Merhaba, *Royal Canin Hypoallergenic* mama hakkında bilgi almak istiyorum. Kedim/köpeğimde alerji var, bu ürün uygun olur mu? Stok durumu ve fiyat bilgisi alabilir miyim?',
  },
  {
    name: 'Royal Canin Cardiac',
    desc: 'Kalp yetmezliği olan köpekler için düşük sodyumlu özel diyet maması. Kalp fonksiyonlarını destekler.',
    category: 'Veteriner Diyetleri',
    badge: 'Reçeteli Mama',
    brandColor: '#C8102E',
    brandBg: 'bg-red-700',
    brandGradient: 'from-red-800 via-red-700 to-rose-900',
    brand: 'ROYAL CANIN',
    brandSub: 'Veterinary Diet',
    tagline: 'Kalp Sağlığı Diyeti',
    icon: 'heart',
    waMsg: 'Merhaba, *Royal Canin Cardiac* mama hakkında bilgi almak istiyorum. Köpeğimin kalp sorunu var, bu diyet maması uygun mu? Stok durumu ve fiyatını öğrenebilir miyim?',
  },
  {
    name: 'Royal Canin Dental',
    desc: 'Diş ve ağız sağlığını destekleyen özel formülasyonlu mama. Diş taşı oluşumunu azaltır.',
    category: 'Veteriner Diyetleri',
    badge: 'Ağız Bakım',
    brandColor: '#C8102E',
    brandBg: 'bg-red-700',
    brandGradient: 'from-red-600 via-rose-600 to-red-700',
    brand: 'ROYAL CANIN',
    brandSub: 'Veterinary Diet',
    tagline: 'Diş & Ağız Sağlığı Maması',
    icon: 'sparkle',
    waMsg: 'Merhaba, *Royal Canin Dental* mama hakkında bilgi almak istiyorum. Evcil hayvanımın diş sağlığı için bu ürünü kullanmak istiyorum. Stok durumu ve fiyatı nedir?',
  },
  {
    name: 'Royal Canin Neutered Satiety Balance',
    desc: 'Kısırlaştırılmış kedi ve köpekler için kilo kontrol maması. Tokluk hissi sağlayarak ideal kiloyu korur.',
    category: 'Veteriner Diyetleri',
    badge: 'Kilo Kontrol',
    brandColor: '#C8102E',
    brandBg: 'bg-red-700',
    brandGradient: 'from-red-700 via-rose-700 to-red-800',
    brand: 'ROYAL CANIN',
    brandSub: 'Veterinary Diet',
    tagline: 'Kısırlaştırma Sonrası Kilo Kontrol',
    icon: 'scale',
    waMsg: 'Merhaba, *Royal Canin Neutered Satiety Balance* mama hakkında bilgi almak istiyorum. Kısırlaştırılmış kedim/köpeğim için kilo kontrol maması arıyorum. Stok ve fiyat bilgisi alabilir miyim?',
  },
  {
    name: 'Royal Canin Recovery',
    desc: 'Ameliyat sonrası ve hastalık döneminde iyileşmeyi hızlandıran yüksek enerjili beslenme desteği.',
    category: 'Veteriner Diyetleri',
    badge: 'İyileşme Desteği',
    brandColor: '#C8102E',
    brandBg: 'bg-red-700',
    brandGradient: 'from-red-800 via-red-700 to-red-900',
    brand: 'ROYAL CANIN',
    brandSub: 'Veterinary Diet',
    tagline: 'Ameliyat Sonrası İyileşme Maması',
    icon: 'plus',
    waMsg: 'Merhaba, *Royal Canin Recovery* mama hakkında bilgi almak istiyorum. Evcil hayvanım ameliyat oldu, iyileşme sürecinde bu ürünü kullanmak istiyorum. Stok durumu ve fiyatı nedir?',
  },
  {
    name: "Hill's Prescription Mobility",
    desc: 'Eklem sorunları ve hareket kısıtlılığı olan evcil hayvanlar için klinik beslenme. Eklem sağlığını destekler.',
    category: 'Veteriner Diyetleri',
    badge: 'Eklem Sağlığı',
    brandColor: '#003DA5',
    brandBg: 'bg-blue-800',
    brandGradient: 'from-blue-800 via-blue-700 to-indigo-900',
    brand: "HILL'S",
    brandSub: 'Prescription Diet',
    tagline: 'Eklem & Hareket Desteği',
    icon: 'bone',
    waMsg: "Merhaba, *Hill's Prescription Mobility* mama hakkında bilgi almak istiyorum. Evcil hayvanımın eklem sorunları var, bu ürün uygun mu? Stok durumu ve fiyatını öğrenebilir miyim?",
  },
  {
    name: "Hill's Prescription Sensitivities",
    desc: 'Gıda ve çevresel hassasiyetleri olan evcil hayvanlar için özel formül. Deri ve sindirim sağlığını korur.',
    category: 'Veteriner Diyetleri',
    badge: 'Hassas Sindirim',
    brandColor: '#003DA5',
    brandBg: 'bg-blue-800',
    brandGradient: 'from-blue-700 via-indigo-700 to-blue-800',
    brand: "HILL'S",
    brandSub: 'Prescription Diet',
    tagline: 'Hassas Deri & Sindirim Formülü',
    icon: 'leaf',
    waMsg: "Merhaba, *Hill's Prescription Sensitivities* mama hakkında bilgi almak istiyorum. Evcil hayvanımda gıda hassasiyeti var, bu ürün uygun olur mu? Stok ve fiyat bilgisi alabilir miyim?",
  },
  {
    name: "Hill's Prescription Dental & Safety",
    desc: 'Diş sağlığı ve kilo yönetimi için çift etkili veteriner diyeti. Ağız bakımı ve güvenli beslenme bir arada.',
    category: 'Veteriner Diyetleri',
    badge: 'Diş Sağlığı',
    brandColor: '#003DA5',
    brandBg: 'bg-blue-800',
    brandGradient: 'from-indigo-800 via-blue-700 to-blue-900',
    brand: "HILL'S",
    brandSub: 'Prescription Diet',
    tagline: 'Diş Bakımı & Güvenli Beslenme',
    icon: 'sparkle',
    waMsg: "Merhaba, *Hill's Prescription Dental & Safety* mama hakkında bilgi almak istiyorum. Evcil hayvanımın diş sağlığı için bu ürünü düşünüyorum. Stok durumu ve fiyatını öğrenebilir miyim?",
  },
  {
    name: 'YNC Feline Vitacure Multivitamin',
    desc: 'Kediler için mikronize resveratrol ve multivitamin takviyesi. Bağışıklık sistemi ve metabolik destek sağlar.',
    category: 'Vitamin ve Takviye',
    badge: 'Multivitamin',
    brandColor: '#047857',
    brandBg: 'bg-emerald-700',
    brandGradient: 'from-emerald-700 via-emerald-600 to-teal-800',
    brand: 'YNC',
    brandSub: 'Veterinary Supplements',
    tagline: 'Kediler İçin Multivitamin Takviye',
    icon: 'vitamin',
    waMsg: 'Merhaba, *YNC Feline Vitacure Multivitamin* hakkında bilgi almak istiyorum. Kedim için multivitamin takviyesi arıyorum. Stok durumu ve fiyatı nedir?',
  },
  {
    name: 'YNC Lipozomal Glutatyon',
    desc: 'Güçlü antioksidan desteği sunan lipozomal glutatyon takviyesi. Karaciğer sağlığı ve detoks için idealdir.',
    category: 'Vitamin ve Takviye',
    badge: 'Antioksidan',
    brandColor: '#047857',
    brandBg: 'bg-emerald-700',
    brandGradient: 'from-teal-700 via-emerald-700 to-green-800',
    brand: 'YNC',
    brandSub: 'Veterinary Supplements',
    tagline: 'Güçlü Antioksidan Desteği',
    icon: 'shield',
    waMsg: 'Merhaba, *YNC Lipozomal Glutatyon* hakkında bilgi almak istiyorum. Evcil hayvanım için antioksidan takviyesi düşünüyorum. Stok durumu ve fiyatını öğrenebilir miyim?',
  },
  {
    name: 'Viyo Imune Prebiyotik',
    desc: 'Bağışıklık sistemini destekleyen lezzetli prebiyotik içecek. Veteriner hekimler tarafından geliştirilmiştir.',
    category: 'Vitamin ve Takviye',
    badge: 'Bağışıklık',
    brandColor: '#0891B2',
    brandBg: 'bg-cyan-700',
    brandGradient: 'from-cyan-700 via-cyan-600 to-teal-700',
    brand: 'VIYO',
    brandSub: 'Imune+',
    tagline: 'Bağışıklık Destekleyici Prebiyotik',
    icon: 'shield',
    waMsg: 'Merhaba, *Viyo Imune Prebiyotik* hakkında bilgi almak istiyorum. Evcil hayvanımın bağışıklık sistemini desteklemek istiyorum. Stok durumu ve fiyatı nedir?',
  },
  {
    name: 'Immunpur & Skinpur Veteriner Takviye Seti',
    desc: 'Bağışıklık, deri, böbrek, karaciğer ve eklem sağlığını destekleyen kapsamlı veteriner takviye serisi.',
    category: 'Vitamin ve Takviye',
    badge: 'Takviye Seti',
    brandColor: '#7C3AED',
    brandBg: 'bg-violet-700',
    brandGradient: 'from-violet-700 via-purple-700 to-violet-800',
    brand: 'IMMUNPUR',
    brandSub: '& Skinpur',
    tagline: 'Kapsamlı Sağlık Takviye Seti',
    icon: 'plus',
    waMsg: 'Merhaba, *Immunpur & Skinpur Veteriner Takviye Seti* hakkında bilgi almak istiyorum. Evcil hayvanım için kapsamlı takviye seti arıyorum. Stok durumu ve fiyatını öğrenebilir miyim?',
  },
  {
    name: 'Dr. Animal Ağız-Göz-Kulak Bakım Solüsyonu',
    desc: 'Kedi ve köpekler için ağız, göz ve kulak bakım solüsyonu. Günlük hijyen rutininiz için pratik çözüm.',
    category: 'Bakım Ürünleri',
    badge: 'Hijyen',
    brandColor: '#0284C7',
    brandBg: 'bg-sky-700',
    brandGradient: 'from-sky-700 via-sky-600 to-blue-700',
    brand: 'DR. ANIMAL',
    brandSub: 'Professional Care',
    tagline: 'Ağız · Göz · Kulak Bakım Seti',
    icon: 'droplet',
    waMsg: 'Merhaba, *Dr. Animal Ağız-Göz-Kulak Bakım Solüsyonu* hakkında bilgi almak istiyorum. Evcil hayvanım için bakım solüsyonu arıyorum. Stok durumu ve fiyatı nedir?',
  },
];

const iconMap: Record<string, JSX.Element> = {
  shield: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  heart: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  sparkle: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>,
  scale: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>,
  plus: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  bone: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
  leaf: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  vitamin: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
  droplet: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 009 3c2.123 0 4.047.862 5.438 2.257l.924-.043z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" /></svg>,
};

export default function UrunlerimizPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Ürünlerimiz', href: '/urunlerimiz' },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 overflow-hidden">
        <div className="paw-bg" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Orijinal ve Onaylı Ürünler
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Ürünlerimiz
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto">
              Evcil dostlarınız için veteriner hekim onaylı, orijinal mama, vitamin ve bakım ürünleri
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Kategori Etiketleri */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Veteriner Diyetleri', icon: '🥩', count: 8 },
              { label: 'Vitamin ve Takviye', icon: '💊', count: 4 },
              { label: 'Bakım Ürünleri', icon: '🧴', count: 1 },
            ].map((kat) => (
              <span
                key={kat.label}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
              >
                <span>{kat.icon}</span>
                {kat.label}
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full">
                  {kat.count}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ürün Grid */}
      <section className="relative py-16 bg-gray-50 overflow-hidden">
        <div className="paw-bg-light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {urunler.map((urun, index) => {
              const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(urun.waMsg)}`;
              return (
                <AnimatedSection key={urun.name} delay={index * 0.05}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                    {/* Ürün Görsel Alanı */}
                    <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${urun.brandGradient}`}>
                      {/* Dekoratif arka plan desenleri */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-2xl" />
                        <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-white/50 rounded-full blur-3xl" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full" />
                      </div>

                      {/* Marka adı üstte */}
                      <div className="absolute top-4 left-0 right-0 z-20 text-center">
                        <p className="text-white/90 text-lg font-extrabold tracking-[0.2em] drop-shadow-lg">{urun.brand}</p>
                        <p className="text-white/60 text-[10px] tracking-[0.15em] font-medium">{urun.brandSub}</p>
                      </div>

                      {/* Ortada ikon */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500 text-white">
                          {iconMap[urun.icon]}
                        </div>
                      </div>

                      {/* Badge - sol üst */}
                      <div className="absolute top-3 left-3 z-20">
                        <span
                          className={`inline-flex items-center gap-1 ${urun.brandBg} text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                          </svg>
                          {urun.badge}
                        </span>
                      </div>

                      {/* Veteriner Onaylı rozet - sağ üst */}
                      <div className="absolute top-3 right-3 z-20">
                        <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-gray-800 text-[10px] font-semibold px-2.5 py-1.5 rounded-full shadow-md">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Vet Onaylı
                        </span>
                      </div>

                      {/* Alt tagline bandı */}
                      <div className="absolute bottom-0 inset-x-0 z-20 p-3">
                        <div
                          className="rounded-lg px-3 py-2 backdrop-blur-md"
                          style={{ backgroundColor: `${urun.brandColor}E6` }}
                        >
                          <p className="text-white text-xs font-bold tracking-wide text-center">
                            {urun.tagline}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ürün Bilgileri */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                          {urun.name}
                        </h3>
                      </div>
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                        {urun.category}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">
                        {urun.desc}
                      </p>

                      {/* Alt kısım */}
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="flex items-center justify-center w-5 h-5 bg-green-100 rounded-full">
                            <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-xs text-green-700 font-medium">Stokta</span>
                        </div>
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:from-green-600 hover:to-green-700 active:scale-95 transition-all shadow-md hover:shadow-lg"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Bilgi Al
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Neden Kliniğimizden Ürün Almalısınız?
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              Evcil dostunuz için en doğru ürünü, uzman veteriner hekim danışmanlığıyla temin edin.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '%100 Orijinal',
                text: 'Tüm ürünlerimiz orijinal ve Tarım Bakanlığı onaylıdır.',
                iconPath:
                  'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                color: 'from-green-500 to-emerald-600',
              },
              {
                title: 'Hekim Önerisi',
                text: 'Hekimlerimiz hayvanınıza en uygun ürünü birebir önerir.',
                iconPath:
                  'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
                color: 'from-blue-500 to-indigo-600',
              },
              {
                title: 'Anında Temin',
                text: 'Muayene sonrası ihtiyacınız olan ürünleri hemen alabilirsiniz.',
                iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                color: 'from-amber-500 to-orange-600',
              },
              {
                title: 'Kullanım Rehberliği',
                text: 'Ürün kullanım talimatları hekim tarafından detaylıca açıklanır.',
                iconPath:
                  'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                color: 'from-purple-500 to-violet-600',
              },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 h-full group">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 right-20 w-60 h-60 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-5 left-20 w-80 h-80 bg-green-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hızlı İletişim
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ürün Bilgisi İçin WhatsApp&apos;tan Yazın
            </h2>
            <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
              Stok durumu, fiyat bilgisi ve veteriner hekim önerisi için WhatsApp üzerinden anında dönüş alın.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent('Merhaba, ürünleriniz hakkında bilgi almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-xl text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp ile Bilgi Alın
              </a>
              <a
                href="tel:+903123542652"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-colors shadow-lg text-lg border border-white/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (0312) 354 26 52
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
