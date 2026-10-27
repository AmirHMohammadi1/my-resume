import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { formatNumber } from '@/i18n/config';
import type { Dict } from '@/content/types';
import { siteConfig } from '../../site.config';
import { Icon } from './Icon';

export function Footer({ lang, t }: { lang: Locale; t: Dict }) {
  const year = formatNumber(lang, new Date().getFullYear());
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {siteConfig.name[lang]} · {t.footer.rights}
        </p>
        <p>{t.footer.built}</p>
        <Link href={`/${lang}/#home`} className="btn btn--ghost" style={{ minHeight: 40, padding: '0.4rem 1rem' }}>
          {t.footer.top}
          <Icon name="arrow" size={16} style={{ transform: 'rotate(-45deg)' }} />
        </Link>
      </div>
    </footer>
  );
}
