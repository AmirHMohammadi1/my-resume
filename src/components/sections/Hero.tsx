import type { CSSProperties } from 'react';
import type { Locale } from '@/i18n/config';
import { formatNumber } from '@/i18n/config';
import type { Dict } from '@/content/types';
import { siteConfig } from '../../../site.config';
import { withBase } from '@/lib/paths';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { Rotator } from '../Rotator';

export function Hero({ lang, t }: { lang: Locale; t: Dict }) {
  const { contact, resume } = siteConfig;
  const showResume = resume.enabled;

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="grid-bg" />
        <div className="aurora aurora--1" />
        <div className="aurora aurora--2" />
        <div className="aurora aurora--3" />
      </div>

      <div className="container">
        <div className="hero__grid">
          <div className="hero__text">
            <span className="badge reveal">
              <span className="pulse" aria-hidden="true" />
              {t.hero.available}
            </span>

            <h1 id="hero-title" className="hero__title reveal" style={{ '--d': '80ms' } as CSSProperties}>
              <span className="hero__hello">{t.hero.greeting}</span>
              <span className="gradient-text">{t.hero.name}</span>
            </h1>

            <div className="reveal" style={{ '--d': '140ms' } as CSSProperties}>
              <Rotator items={t.hero.roles} />
            </div>

            <p className="hero__lead reveal" style={{ '--d': '200ms' } as CSSProperties}>
              {t.hero.lead}
            </p>

            <div className="hero__cta reveal" style={{ '--d': '260ms' } as CSSProperties}>
              <a className="btn btn--primary" href="#projects">
                {t.hero.ctaProjects}
                <Icon name="arrow" size={18} />
              </a>
              {showResume && (
                <a className="btn btn--ghost" href={withBase(resume[lang])} download>
                  <Icon name="download" size={18} />
                  {t.hero.ctaResume}
                </a>
              )}
              <a className="btn btn--ghost" href="#contact">
                {t.hero.ctaContact}
              </a>
            </div>

            <div className="hero__socials reveal" style={{ '--d': '320ms' } as CSSProperties}>
              <a
                className="icon-btn"
                href={`https://github.com/${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.github}
                title={t.contact.github}
              >
                <Icon name="github" size={18} />
              </a>
              <a
                className="icon-btn"
                href={`https://www.linkedin.com/in/${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.linkedin}
                title={t.contact.linkedin}
              >
                <Icon name="linkedin" size={18} />
              </a>
              <a
                className="icon-btn"
                href={`https://t.me/${contact.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.telegram}
                title={t.contact.telegram}
              >
                <Icon name="send" size={18} />
              </a>
              <a className="icon-btn" href={`mailto:${contact.email}`} aria-label={t.contact.email} title={t.contact.email}>
                <Icon name="mail" size={18} />
              </a>
            </div>
          </div>

          <div className="hero__visual reveal" style={{ '--d': '160ms' } as CSSProperties}>
            <Avatar label={t.hero.name} />
          </div>
        </div>

        <div className="stats">
          {t.hero.stats.map((s, i) => (
            <div key={s.label} className="stat reveal" style={{ '--d': `${i * 70}ms` } as CSSProperties}>
              <div className="stat__value gradient-text ltr">
                {formatNumber(lang, s.value)}
                {s.suffix}
              </div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
