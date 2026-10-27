import type { Metadata } from 'next';
import { siteConfig } from '../../site.config';
import { locales, type Locale } from '@/i18n/config';
import { getDict } from '@/content';

const base = () => siteConfig.siteUrl.replace(/\/$/, '');

/** Absolute URL of a page, e.g. pageUrl('fa', 'blog/') → https://…/fa/blog/ */
export function pageUrl(lang: Locale, path = ''): string {
  return `${base()}/${lang}/${path}`;
}

export function ogImageUrl(): string {
  return `${base()}/og.png`;
}

/** hreflang map for a path that exists in both languages. */
export function languageAlternates(path = ''): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of locales) map[l] = pageUrl(l, path);
  map['x-default'] = pageUrl(siteConfig.defaultLang, path);
  return map;
}

interface PageMeta {
  lang: Locale;
  title: string;
  description: string;
  /** path after the language prefix, '' for home */
  path?: string;
  type?: 'website' | 'article';
  /** set false for pages that exist in one language only */
  bothLanguages?: boolean;
}

export function buildMetadata({ lang, title, description, path = '', type = 'website', bothLanguages = true }: PageMeta): Metadata {
  const url = pageUrl(lang, path);
  return {
    title,
    description,
    authors: [{ name: siteConfig.name[lang] }],
    alternates: {
      canonical: url,
      ...(bothLanguages ? { languages: languageAlternates(path) } : {}),
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name[lang],
      locale: lang === 'fa' ? 'fa_IR' : 'en_US',
      images: [{ url: ogImageUrl(), width: 1200, height: 630, alt: siteConfig.name[lang] }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl()],
    },
    icons: { icon: `${siteConfig.siteUrl.replace(/\/$/, '')}/favicon.svg` },
  };
}

export function homeMetadata(lang: Locale): Metadata {
  const t = getDict(lang);
  return buildMetadata({ lang, title: t.meta.title, description: t.meta.description });
}

/** schema.org Person for the home page. */
export function personJsonLd(lang: Locale) {
  const t = getDict(lang);
  const c = siteConfig.contact;
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name[lang],
    alternateName: siteConfig.name[lang === 'fa' ? 'en' : 'fa'],
    jobTitle: lang === 'fa' ? 'توسعه‌دهنده فول‌استک' : 'Full Stack Developer',
    description: t.meta.description,
    url: pageUrl(lang),
    sameAs: [
      `https://github.com/${c.github}`,
      `https://www.linkedin.com/in/${c.linkedin}`,
      `https://t.me/${c.telegram}`,
    ],
    knowsAbout: ['Next.js', 'React', 'TypeScript', 'Node.js', 'NestJS', 'Python', 'Django', 'Web development'],
  };
}
