import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Experience from '@/components/Experience';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Preloader />
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Experience />
      <CTA />
      <Footer />
    </main>
  );
}