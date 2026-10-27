import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/lib/fonts';
import '../globals.css';
import { ThemeScript } from '@/components/ThemeScript';
import { dirOf, defaultLocale } from '@/i18n/config';
import { homeMetadata, languageAlternates } from '@/lib/seo';

// Layout for "/" only — a tiny page that sends visitors to /fa or /en.
export const metadata: Metadata = {
  ...homeMetadata(defaultLocale),
  alternates: { canonical: languageAlternates()[defaultLocale], languages: languageAlternates() },
};

export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={defaultLocale} dir={dirOf(defaultLocale)} data-theme="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
