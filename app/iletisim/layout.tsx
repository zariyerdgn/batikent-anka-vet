import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Adres, Telefon & Ulaşım',
  description: 'Anka Veteriner Kliniği Batıkent iletişim bilgileri. Adres, telefon, WhatsApp, çalışma saatleri ve ulaşım bilgileri. (0312) 354 26 52',
  keywords: 'veteriner iletişim, Batıkent veteriner adres, Batıkent veteriner telefon, veteriner çalışma saatleri',
  openGraph: {
    title: 'İletişim | Anka Veteriner Kliniği Batıkent',
    description: 'Bize ulaşın: adres, telefon, WhatsApp ve çalışma saatleri.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: { canonical: 'https://batikentankavet.com/iletisim' },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
