import { getDictionary } from '@/lib/getDictionary';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import Founder from '@/components/Founder';
import Products from '@/components/Products';
import VideoGallery from '@/components/VideoGallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home({ params }) {
  const { lang } = params;
  const dict = getDictionary(lang);

  return (
    <main>
      <Navbar dict={dict.nav} lang={lang} />
      <Hero dict={dict.hero} />
      <Pillars dict={dict.pillars} />
      <Founder dict={dict.founder} />
      <Products dict={dict.products} />
      <VideoGallery dict={dict.videos} lang={lang} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} />
    </main>
  );
}
