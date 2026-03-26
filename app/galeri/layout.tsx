import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri | Klinik Görüntüleri & Tesislerimiz',
  description: 'Anka Veteriner Kliniği Batıkent galeri. Kliniğimiz, ameliyathane, laboratuvar, ekipmanlar ve ekibimizin fotoğrafları.',
  keywords: 'veteriner klinik galeri, Batıkent veteriner fotoğraf, ameliyathane, laboratuvar, veteriner ekipman',
  openGraph: {
    title: 'Galeri | Anka Veteriner Kliniği Batıkent',
    description: 'Modern tesislerimiz ve profesyonel ekipmanlarımızın fotoğraflarını inceleyin.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: { canonical: 'https://batikentankavet.com/galeri' },
};

export default function GaleriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
