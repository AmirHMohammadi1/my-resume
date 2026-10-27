import type { Locale } from '@/i18n/config';
import type { Dict } from '@/content/types';
import type { IconName } from '../Icon';
import { siteConfig } from '../../../site.config';
import { withBase } from '@/lib/paths';
import { CopyButton } from '../CopyButton';
import { Icon } from '../Icon';
import { SectionHead } from './SectionHead';

interface Item {
  key: string;
  icon: IconName;
  label: string;
  display: string;
  href: string;
  external: boolean;
  copy?: string;
}

export function Contact({ lang, t }: { lang: Locale; t: Dict }) {
  const c = siteConfig.contact;
  const x = t.contact;

  const items: Item[] = [
    { key: 'email', icon: 'mail', label: x.email, display: c.email, href: `mailto:${c.email}`, external: false, copy: c.email },
    {
      key: 'telegram',
      icon: 'send',
      label: x.telegram,
      display: `@${c.telegram}`,
      href: `https://t.me/${c.telegram}`,
      external: true,
    },
    {
      key: 'linkedin',
      icon: 'linkedin',
      label: x.linkedin,
      display: `in/${c.linkedin}`,
      href: `https://www.linkedin.com/in/${c.linkedin}`,
      external: true,
    },
    {
      key: 'phone',
      icon: 'phone',
      label: x.phone,
      display: c.phone,
      href: `tel:${c.phone.replace(/[^\d+]/g, '')}`,
      external: false,
      copy: c.phone,
    },
    {
      key: 'github',
      icon: 'github',
      label: x.github,
      display: `@${c.github}`,
      href: `https://github.com/${c.github}`,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__panel reveal">
          <div className="contact__head">
            <span className="eyebrow">{x.eyebrow}</span>
            <h2 className="section__title" id="contact-title">
              {x.title}
            </h2>
            <p className="section__intro">{x.text}</p>
          </div>

          <ul className="contact__grid">
            {items.map((it) => (
              <li key={it.key} className="contact-card">
                <span className="icon-box">
                  <Icon name={it.icon} />
                </span>
                <div className="contact-card__body">
                  <span className="contact-card__label">{it.label}</span>
                  <a
                    className="contact-card__value ltr"
                    href={it.href}
                    {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {it.display}
                  </a>
                </div>
                {it.copy ? <CopyButton value={it.copy} label={x.copy} doneLabel={x.copied} /> : null}
              </li>
            ))}
          </ul>

          {siteConfig.resume.enabled && (
            <div className="contact__resume">
              <span>{x.resumeText}</span>
              <a className="btn btn--primary" href={withBase(siteConfig.resume[lang])} download>
                <Icon name="download" size={18} />
                {t.hero.ctaResume}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
