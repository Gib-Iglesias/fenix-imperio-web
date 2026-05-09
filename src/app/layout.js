import './globals.css';

export const metadata = {
  title: 'Fenix Fragrance Holdings | The Future of Brazilian Perfumery',
  description: 'Fenix Fragrance Holdings — a platform ecosystem for Brazilian perfumery. Discover fragrances, talent programs, summits, networking, and wholesale partnerships for UK and EU markets.',
  keywords: 'Fenix fragrance, Brazilian perfume, fragrance holdings, perfumery talent, fragrance summit, wholesale perfume UK EU, tonka bean, vanilla orchid, sweet notes',
  openGraph: {
    title: 'Fenix Fragrance Holdings',
    description: 'Rise with Fenix — Brazilian perfumery reimagined. Fragrances, talent, summits, and global partnerships.',
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['pt_BR', 'es_ES'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fenix Fragrance Holdings',
    description: 'The future of Brazilian fragrance — discover, invest, connect.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-fenix-ivory text-fenix-char-800 antialiased">
        {children}
      </body>
    </html>
  );
}
