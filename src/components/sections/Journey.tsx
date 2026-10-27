import type { CSSProperties } from 'react';
import type { Dict } from '@/content/types';
import { Icon } from '../Icon';
import { SectionHead } from './SectionHead';

export function Journey({ t }: { t: Dict }) {
  const j = t.journey;
  return (
    <section id="journey" className="section journey" aria-labelledby="journey-title">
      <div className="container">
        <SectionHead eyebrow={j.eyebrow} title={j.title} id="journey-title" />

        <div className="journey__grid">
          <div className="reveal">
            <h3 className="block-title">{j.experienceTitle}</h3>
            <ol className="timeline">
              {j.experience.map((e) => (
                <li key={e.title} className="timeline__item">
                  <span className="timeline__period">{e.period}</span>
                  <h4>{e.title}</h4>
                  <p>{e.text}</p>
                  {e.points.length > 0 && (
                    <ul className="points">
                      {e.points.map((pt) => (
                        <li key={pt}>
                          <Icon name="check" size={16} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="side-stack">
            <section className="card side-card reveal" aria-label={j.educationTitle}>
              <h3>
                <Icon name="graduation" />
                {j.educationTitle}
              </h3>
              <ul>
                {j.education.map((ed) => (
                  <li key={ed.title}>
                    <strong>{ed.title}</strong>
                    <small>{ed.text}</small>
                  </li>
                ))}
              </ul>
            </section>

            <section className="card side-card reveal" style={{ '--d': '80ms' } as CSSProperties} aria-label={j.certsTitle}>
              <h3>
                <Icon name="award" />
                {j.certsTitle}
              </h3>
              <ul>
                {j.certs.map((c) => (
                  <li key={c.title}>
                    <strong>{c.title}</strong>
                    <small>{c.issuer}</small>
                  </li>
                ))}
              </ul>
            </section>

            <section className="card side-card reveal" style={{ '--d': '160ms' } as CSSProperties} aria-label={j.nowTitle}>
              <h3>
                <Icon name="terminal" />
                {j.nowTitle}
              </h3>
              <ul className="points">
                {j.now.map((n) => (
                  <li key={n}>
                    <Icon name="check" size={16} />
                    {n}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
