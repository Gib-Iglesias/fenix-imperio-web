import { getDictionary, locales } from '@/lib/getDictionary';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = params;
  const titles = {
    en: 'Fenix Fragrance Holdings | Brazilian Perfumery Ecosystem for Europe & UK',
    pt: 'Fenix Fragrance Holdings | Ecossistema de Perfumaria Brasileira para Europa e Reino Unido',
    es: 'Fenix Fragrance Holdings | Ecosistema de Perfumería Brasileña para Europa y Reino Unido',
  };
  return {
    title: titles[lang] || titles.en,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', pt: '/pt', es: '/es' },
    },
  };
}

export default function LangLayout({ children, params }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fenix Fragrance Holdings',
    description: 'A Brazilian perfumery ecosystem: fragrances, talent discovery, summits, investor networking, and wholesale partnerships for the UK and EU.',
    url: 'https://fenixfragrance.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-7XXX-XXXXXX',
      contactType: 'sales',
      areaServed: ['GB', 'EU', 'BR'],
      availableLanguage: ['English', 'Portuguese', 'Spanish'],
    },
    sameAs: [
      'https://instagram.com/fenixfragrance',
      'https://tiktok.com/@fenixfragrance',
      'https://youtube.com/@fenixfragrance',
      'https://linkedin.com/company/fenix-fragrance-holdings',
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {children}
    </>
  );
}
