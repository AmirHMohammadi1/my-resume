import type { Locale } from '@/i18n/config';
import { getDict } from '@/content';
import { RevealObserver } from './RevealObserver';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';

export function HomePage({ lang }: { lang: Locale }) {
  const t = getDict(lang);
  return (
    <>
      <Hero lang={lang} t={t} />
      <About t={t} />
      <Services t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Journey t={t} />
      <Contact lang={lang} t={t} />
      <RevealObserver />
    </>
  );
}
