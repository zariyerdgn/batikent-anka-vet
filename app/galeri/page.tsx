'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const galleryImages = [
  { src: '/images/hero/klinik-dis.jpeg', alt: 'Anka Veteriner Kliniği Dış Görünüm' },
  { src: '/images/clinic/bekleme-alani.jpeg', alt: 'Bekleme Alanı' },
  { src: '/images/clinic/danisma.jpeg', alt: 'Danışma' },
  { src: '/images/clinic/klinik-ici.jpeg', alt: 'Klinik İçi' },
  { src: '/images/surgery/ameliyathane.jpeg', alt: 'Ameliyathane' },
  { src: '/images/surgery/ameliyathane-ici.jpeg', alt: 'Ameliyathane İçi' },
  { src: '/images/surgery/ameliyathane-ekipman.jpeg', alt: 'Ameliyathane Ekipmanları' },
  { src: '/images/surgery/operasyon.jpeg', alt: 'Operasyon' },
  { src: '/images/surgery/operasyon-2.jpeg', alt: 'Operasyon 2' },
  { src: '/images/surgery/operasyon-3.jpeg', alt: 'Operasyon 3' },
  { src: '/images/surgery/kedi-ameliyati.jpeg', alt: 'Kedi Ameliyatı' },
  { src: '/images/lab/laboratuvar.jpeg', alt: 'Laboratuvar' },
  { src: '/images/lab/laboratuvar-ekipman.jpeg', alt: 'Laboratuvar Ekipmanları' },
  { src: '/images/lab/laboratuvar-ekipman-2.jpeg', alt: 'Laboratuvar Ekipmanları 2' },
  { src: '/images/equipment/profesyonel-ekipman.jpeg', alt: 'Profesyonel Ekipman' },
  { src: '/images/equipment/cihazlar.jpeg', alt: 'Tıbbi Cihazlar' },
  { src: '/images/equipment/ekg.jpeg', alt: 'EKG Cihazı' },
  { src: '/images/equipment/anestezi-ekipman.jpeg', alt: 'Anestezi Ekipmanı' },
  { src: '/images/equipment/sterilizator.jpeg', alt: 'Sterilizatör' },
  { src: '/images/equipment/kan-sayim-cihazi.jpeg', alt: 'Kan Sayım Cihazı' },
  { src: '/images/equipment/kuvez.jpeg', alt: 'Küvez' },
  { src: '/images/gallery/ultrason.jpeg', alt: 'Ultrason' },
  { src: '/images/gallery/ultrason-bolumu.jpeg', alt: 'Ultrason Bölümü' },
  { src: '/images/gallery/rontgen-goruntusu.jpeg', alt: 'Röntgen Görüntüsü' },
  { src: '/images/gallery/mikroskobik-goruntuler.jpeg', alt: 'Mikroskobik Görüntüler' },
  { src: '/images/gallery/mikroskobik-inceleme.jpeg', alt: 'Mikroskobik İnceleme' },
  { src: '/images/gallery/mikroskoplar.jpeg', alt: 'Mikroskoplar' },
  { src: '/images/team/uzman-hekimlerimiz.jpeg', alt: 'Uzman Hekimlerimiz' },
  { src: '/images/team/hekimimiz.jpeg', alt: 'Hekimimiz' },
  { src: '/images/team/hekim-klinik-mudahale.jpeg', alt: 'Klinik Müdahale' },
  { src: '/images/services/kopek-muayene.jpeg', alt: 'Köpek Muayene' },
  { src: '/images/services/detartraj.jpeg', alt: 'Detartraj İşlemi' },
];

export default function GaleriPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Galeri</h1>
            <p className="text-lg text-primary-100">Kliniğimizden görüntüler</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={img.src} delay={i * 0.03}>
                <button onClick={() => setLightbox(i)} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer w-full">
                  <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                    <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity font-medium">{img.alt}</p>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10">&times;</button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox(Math.max(0, lightbox - 1)); }} className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10">&lsaquo;</button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox(Math.min(galleryImages.length - 1, lightbox + 1)); }} className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10">&rsaquo;</button>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[lightbox].src} alt={galleryImages[lightbox].alt} fill className="object-contain" sizes="90vw" />
          </div>
          <p className="absolute bottom-4 text-white text-center">{galleryImages[lightbox].alt}</p>
        </div>
      )}
    </>
  );
}
