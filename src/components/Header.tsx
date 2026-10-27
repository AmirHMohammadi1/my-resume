'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Locale } from '@/i18n/config';
import type { Dict } from '@/content/types';
import { Icon } from './Icon';
import { LangSwitch } from './LangSwitch';
import { ThemeToggle } from './ThemeToggle';

interface Props {
  lang: Locale;
  nav: Dict['nav'];
  name: string;
  blog: boolean;
  blogSlugs?: Record<Locale, string[]>;
}

const SECTION_IDS = ['home', 'about', 'services', 'skills', 'projects', 'journey', 'contact'] as const;

export function Header({ lang, nav, name, blog, blogSlugs }: Props) {
  const pathname = (usePathname() || '').replace(/\/$/, '');
  const isHome = pathname === `/${lang}` || pathname === '';
  const onBlog = pathname.startsWith(`/${lang}/blog`);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const links: { id: string; label: string; href: string; current: boolean }[] = [
    { id: 'about', label: nav.about },
    { id: 'services', label: nav.services },
    { id: 'skills', label: nav.skills },
    { id: 'projects', label: nav.projects },
    { id: 'journey', label: nav.journey },
  ].map((l) => ({
    ...l,
    href: `/${lang}/#${l.id}`,
    current: isHome && active === l.id,
  }));

  if (blog) {
    links.push({ id: 'blog', label: nav.blog, href: `/${lang}/blog/`, current: onBlog });
  }
  links.push({ id: 'contact', label: nav.contact, href: `/${lang}/#contact`, current: isHome && active === 'contact' });

  return (
    <>
      <header className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
        <div className="container header__inner">
          <Link href={`/${lang}/`} className="brand" onClick={() => setOpen(false)}>
            <span className="brand__mark" aria-hidden="true">
              AM
            </span>
            <span className="brand__name">{name}</span>
          </Link>

          <nav className="nav" aria-label={nav.primary}>
            {links.map((l) => (
              <Link key={l.id} href={l.href} aria-current={l.current ? 'true' : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <LangSwitch
              lang={lang}
              label={nav.switchLang}
              short={nav.switchLangShort}
              anchor={isHome && active !== 'home' ? active : undefined}
              blogSlugs={blogSlugs}
            />
            <ThemeToggle label={nav.toggleTheme} />
            <button
              type="button"
              className="icon-btn menu-btn"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? nav.closeMenu : nav.menu}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? 'x' : 'menu'} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label={nav.primary}>
          {links.map((l) => (
            <Link key={l.id} href={l.href} aria-current={l.current ? 'true' : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
