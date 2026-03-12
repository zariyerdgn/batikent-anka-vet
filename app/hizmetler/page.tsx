import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import HizmetlerAccordion from '@/components/HizmetlerAccordion';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Batıkent ve Ankara genelinde evcil hayvan veteriner hizmetleri. Acil 7/24, cerrahi, dahiliye, dermatoloji, fizik tedavi ve daha fazlası.',
};

const hizmetler = [
  {
    name: 'Acil 7/24',
    desc: 'Gece gündüz demeden, acil sağlık sorunlarında yanınızdayız.',
    subItems: [],
  },
  {
    name: 'Anestezi ve Reanimasyon',
    desc: 'Güvenli anestezi uygulamaları ve yoğun bakım hizmetleri.',
    subItems: [],
  },
  {
    name: 'Beslenme ve Diyet',
    desc: 'Evcil hayvanınız için özel beslenme programları ve diyet danışmanlığı.',
    subItems: [],
  },
  {
    name: 'Check-up',
    desc: 'Kapsamlı sağlık taraması ile hastalıkların erken teşhisi.',
    subItems: [],
  },
  {
    name: 'Dahiliye (İç Hastalıkları)',
    desc: 'İç hastalıkları alanında uzman tanı ve tedavi hizmetleri.',
    subItems: [
      'Enfeksiyon Hastalıkları',
      'Endokrinoloji ve Metabolizma Hastalıkları',
      'Kardiyoloji',
      'Ekokardiyografi',
      'EKG',
      'Endoskopi',
    ],
  },
  {
    name: 'Dermatoloji',
    desc: 'Cilt hastalıkları, alerji, mantar ve paraziter deri sorunlarının tedavisi.',
    subItems: [],
  },
  {
    name: 'Doğum ve Jinekoloji',
    desc: 'Doğum takibi, sezaryen ve üreme sistemi hastalıklarının tedavisi.',
    subItems: [],
  },
  {
    name: 'Fizik Tedavi ve Rehabilitasyon',
    desc: 'Ameliyat sonrası iyileşme, eklem sorunları ve hareket kısıtlılığı tedavisi.',
    subItems: [],
  },
  {
    name: 'Cerrahi',
    desc: 'Modern ameliyathane ve deneyimli ekiple güvenli cerrahi operasyonlar.',
    subItems: [
      'Yumuşak Doku Cerrahisi',
      'Ortopedi ve Travmatoloji',
      'Eklem Cerrahisi',
      'Nöroşirurji',
    ],
  },
  {
    name: 'Görüntüleme Ünitesi',
    desc: 'Son teknoloji görüntüleme cihazlarımız ile doğru ve hızlı tanı.',
    subItems: [
      'X Ray - DR (Dijital Röntgen)',
      'Dental DR (Diş Röntgeni)',
      'Ultrasonografi',
      'Renkli Doppler',
      'Ekokardiyografi',
      'Tomografi',
    ],
  },
  {
    name: 'Laboratuvar',
    desc: 'Tam donanımlı laboratuvarımızda hızlı ve güvenilir test sonuçları.',
    subItems: [
      'Hemogram',
      'Kan Biyokimya',
      'İdrar Biyokimya',
      'Hormon Testleri',
      'PCR Testleri',
      'Koagülasyon Cihazı',
    ],
  },
  {
    name: 'Göz Hastalıkları',
    desc: 'Evcil hayvanların göz sağlığı, teşhis ve tedavi hizmetleri.',
    subItems: [],
  },
  {
    name: 'Yoğun Bakım',
    desc: 'Kritik hastaların yoğun bakım ve takip hizmetleri, 24 saat izleme.',
    subItems: [],
  },
];

export default function HizmetlerPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Hizmetlerimiz', href: '/hizmetler' }]} />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hizmetlerimiz</h1>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Batıkent ve Ankara genelinde evcil hayvan sağlığı alanında kapsamlı veteriner hizmetleri sunuyoruz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Tüm Hizmetlerimiz</h2>
              <p className="text-gray-600">Detayları görmek için hizmete tıklayın</p>
            </div>
          </AnimatedSection>
          <HizmetlerAccordion hizmetler={hizmetler} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Randevu Almak İster Misiniz?</h2>
          <p className="text-gray-600 mb-8">Hizmetlerimiz hakkında detaylı bilgi almak veya randevu oluşturmak için bize ulaşın.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/randevu" className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:from-accent-600 hover:to-accent-700 transition-colors shadow-lg text-lg">
              Randevu Al
            </Link>
            <a href="tel:+905548550590" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-colors border border-primary-200 text-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              0554 855 05 90
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
