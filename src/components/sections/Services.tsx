import type { CSSProperties } from 'react';
import type { Dict } from '@/content/types';
import { Icon } from '../Icon';
import { SectionHead } from './SectionHead';

export function Services({ t }: { t: Dict }) {
  const s = t.services;
  return (
    <section id="services" className="section section--alt" aria-labelledby="services-title">
      <div className="container">
        <SectionHead eyebrow={s.eyebrow} title={s.title} intro={s.intro} id="services-title" />

        <ul className="services__grid">
          {s.items.map((item, i) => (
            <li
              key={item.title}
              className="card service reveal"
              style={{ '--d': `${(i % 3) * 80}ms` } as CSSProperties}
            >
              <span className="icon-box">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul className="tags">
                {item.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="cta-band reveal">
          <p>{s.cta}</p>
          <a className="btn btn--primary" href="#contact">
            {s.ctaButton}
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
