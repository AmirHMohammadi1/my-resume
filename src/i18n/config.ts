import { siteConfig } from '../../site.config';

export const locales = ['fa', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = siteConfig.defaultLang;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dirOf(lang: Locale): 'rtl' | 'ltr' {
  return lang === 'fa' ? 'rtl' : 'ltr';
}

export function otherLocale(lang: Locale): Locale {
  return lang === 'fa' ? 'en' : 'fa';
}

/** Format a number with locale digits (Persian digits on the fa site). */
export function formatNumber(lang: Locale, n: number): string {
  return new Intl.NumberFormat(lang === 'fa' ? 'fa-IR' : 'en-US', { useGrouping: false }).format(n);
}
