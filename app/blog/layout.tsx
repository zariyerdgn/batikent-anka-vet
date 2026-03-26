import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Veteriner Sağlık Rehberi',
  description: 'Kedi, köpek ve evcil hayvan sağlığı hakkında uzman veteriner hekim makaleleri. Aşılama, beslenme, hastalıklar ve bakım rehberi.',
  keywords: 'veteriner blog, kedi sağlığı, köpek sağlığı, evcil hayvan bakımı, hayvan hastalıkları, veteriner makaleleri, Batıkent veteriner',
  openGraph: {
    title: 'Blog | Anka Veteriner Kliniği Batıkent',
    description: 'Uzman veteriner hekimlerimizden evcil hayvan sağlığı ve bakımı hakkında faydalı bilgiler.',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: { canonical: 'https://batikentankavet.com/blog' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
