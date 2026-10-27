import type { CSSProperties } from 'react';
import type { Dict } from '@/content/types';
import { Icon } from '../Icon';
import { SectionHead } from './SectionHead';

export function Skills({ t }: { t: Dict }) {
  const s = t.skills;
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead eyebrow={s.eyebrow} title={s.title} intro={s.intro} id="skills-title" />

        <div className="skills__grid">
          {s.groups.map((g, i) => (
            <div key={g.title} className="card skill-group reveal" style={{ '--d': `${(i % 2) * 90}ms` } as CSSProperties}>
              <div className="skill-group__head">
                <span className="icon-box">
                  <Icon name={g.icon} />
                </span>
                <h3>{g.title}</h3>
              </div>
              <ul className="chips">
                {g.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
