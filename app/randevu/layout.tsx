import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Randevu Al | Batıkent Veteriner',
  description: 'Anka Veteriner Kliniği Batıkent online randevu. Kedi, köpek ve evcil hayvan muayene, aşılama, kısırlaştırma randevusu. (0312) 354 26 52',
  keywords: 'veteriner randevu, online randevu, Batıkent veteriner randevu, kedi muayene randevu, köpek muayene randevu',
  openGraph: {
    title: 'Online Randevu | Anka Veteriner Kliniği Batıkent',
    description: 'Hızlı ve kolay online veteriner randevusu oluşturun.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: { canonical: 'https://batikentankavet.com/randevu' },
};

export default function RandevuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
