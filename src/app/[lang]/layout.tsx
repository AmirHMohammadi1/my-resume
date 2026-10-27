import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import '@/lib/fonts';
import '../globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeScript } from '@/components/ThemeScript';
import { getDict } from '@/content';
import { dirOf, isLocale, locales } from '@/i18n/config';
import { getPosts } from '@/lib/blog';
import { homeMetadata } from '@/lib/seo';
import { siteConfig } from '../../../site.config';

// Only /fa and /en exist; anything else is a 404 in the static export.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return homeMetadata(lang);
}

export default async function LangLayout({ children, params }: { children: ReactNode; params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDict(lang);
  const blogSlugs = {
    fa: siteConfig.blog ? getPosts('fa').map((p) => p.slug) : [],
    en: siteConfig.blog ? getPosts('en').map((p) => p.slug) : [],
  };

  return (
    <html lang={lang} dir={dirOf(lang)} data-theme="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <a className="skip-link" href="#main">
          {t.nav.skip}
        </a>
        <Header lang={lang} nav={t.nav} name={siteConfig.name[lang]} blog={siteConfig.blog} blogSlugs={blogSlugs} />
        <main id="main">{children}</main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
