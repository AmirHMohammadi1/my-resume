import type { CSSProperties } from 'react';
import type { Dict } from '@/content/types';
import { Icon } from '../Icon';
import { SectionHead } from './SectionHead';

export function About({ t }: { t: Dict }) {
  const a = t.about;
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead eyebrow={a.eyebrow} title={a.title} id="about-title" />

        <div className="about__grid">
          <div className="about__text reveal">
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <figure className="motto" style={{ margin: '2rem 0 0' }}>
              <blockquote className="motto__quote gradient-text" style={{ margin: 0 }}>
                “{a.motto}”
              </blockquote>
              <figcaption className="motto__fact">{a.fact}</figcaption>
            </figure>
          </div>

          <ul className="highlights">
            {a.highlights.map((h, i) => (
              <li key={h.title} className="card highlight reveal" style={{ '--d': `${i * 80}ms` } as CSSProperties}>
                <span className="icon-box">
                  <Icon name={h.icon} />
                </span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
