'use client';

import { useEffect } from 'react';
import { defaultLocale, locales, type Locale } from '@/i18n/config';
import { BASE_PATH } from '@/lib/paths';

function preferredLocale(): Locale {
  try {
    const saved = localStorage.getItem('lang');
    if (saved && (locales as readonly string[]).includes(saved)) return saved as Locale;
  } catch {
    /* storage unavailable */
  }
  const nav = (navigator.languages?.[0] || navigator.language || '').toLowerCase();
  if (nav.startsWith('fa')) return 'fa';
  if (nav.startsWith('en')) return 'en';
  return defaultLocale;
}

/**
 * "/" has no content of its own: it forwards to the visitor's saved language,
 * then their browser language, then the default. Without JavaScript the two
 * links below still let anyone choose.
 */
export function LangRedirect() {
  useEffect(() => {
    window.location.replace(`${BASE_PATH}/${preferredLocale()}/`);
  }, []);

  return (
    <main className="container" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div style={{ display: 'grid', gap: '1.2rem' }}>
        <h1 className="gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
          Amir Hosein Mohammadi · امیرحسین محمدی
        </h1>
        <p style={{ color: 'var(--muted)' }}>
          <a href={`${BASE_PATH}/fa/`} hrefLang="fa" lang="fa">
            فارسی
          </a>
          {' · '}
          <a href={`${BASE_PATH}/en/`} hrefLang="en" lang="en">
            English
          </a>
        </p>
      </div>
    </main>
  );
}
