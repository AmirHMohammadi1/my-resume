'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/i18n/config';
import { otherLocale } from '@/i18n/config';

interface Props {
  lang: Locale;
  label: string;
  short: string;
  /** Section currently in view on the home page, so the language switch keeps the reader's place. */
  anchor?: string;
  /** Which article slugs exist per language, so the switch never links to a missing translation. */
  blogSlugs?: Record<Locale, string[]>;
}

export function LangSwitch({ lang, label, short, anchor, blogSlugs }: Props) {
  const pathname = usePathname() || `/${lang}/`;
  const other = otherLocale(lang);

  let target = pathname.replace(/^\/(fa|en)(?=\/|$)/, `/${other}`);
  if (!target.endsWith('/')) target += '/';

  // Article without a translation → send the reader to the blog list in the other language.
  const post = target.match(/^\/(?:fa|en)\/blog\/([^/]+)\/$/);
  if (post && blogSlugs && !blogSlugs[other].includes(post[1])) target = `/${other}/blog/`;
  if (anchor && target === `/${other}/`) target += `#${anchor}`;

  return (
    <Link
      href={target}
      className="icon-btn"
      lang={other}
      hrefLang={other}
      aria-label={label}
      title={label}
      onClick={() => {
        try {
          localStorage.setItem('lang', other);
        } catch {
          /* ignore */
        }
      }}
    >
      {short}
    </Link>
  );
}
