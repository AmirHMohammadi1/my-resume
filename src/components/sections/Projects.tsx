import type { CSSProperties } from 'react';
import type { Dict } from '@/content/types';
import { projects } from '@/content/projects';
import { siteConfig } from '../../../site.config';
import { Icon } from '../Icon';
import { SectionHead } from './SectionHead';

// Layout: 2 wide (featured) · 3 regular · 2 wide (last project + client placeholder)
const WIDE_INDEXES = new Set([0, 1, 5, 6]);

export function Projects({ t }: { t: Dict }) {
  const p = t.projects;
  const gh = siteConfig.contact.github;

  return (
    <section id="projects" className="section section--alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead eyebrow={p.eyebrow} title={p.title} intro={p.intro} id="projects-title" />

        <ul className="projects__grid">
          {projects.map((proj, i) => (
            <li
              key={proj.id}
              className={`card project reveal${WIDE_INDEXES.has(i) ? ' project--wide' : ''}${
                proj.featured ? ' project--featured' : ''
              }`}
              style={{ '--d': `${(i % 3) * 80}ms` } as CSSProperties}
            >
              <div className="project__top">
                <span className="icon-box">
                  <Icon name="folder" />
                </span>
                {proj.featured && (
                  <span className="project__badge">
                    <Icon name="star" size={13} />
                    {p.featured}
                  </span>
                )}
              </div>

              <h3 className="project__name">{proj.name}</h3>
              <p>{p.items[proj.id].text}</p>

              <ul className="tags" dir="ltr">
                {proj.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>

              <a
                className="project__link"
                href={`https://github.com/${gh}/${proj.repo}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" size={18} />
                {p.code}
                <Icon name="arrow" size={16} />
              </a>
            </li>
          ))}

          <li
            className="card project project--wide project--client reveal"
            style={{ '--d': '80ms' } as CSSProperties}
          >
            <div className="project__top">
              <span className="icon-box">
                <Icon name="briefcase" />
              </span>
              <span className="tag">{p.client.badge}</span>
            </div>
            <h3 className="project__name" style={{ direction: 'inherit' }}>
              {p.client.title}
            </h3>
            <p>{p.client.text}</p>
          </li>
        </ul>

        <div className="projects__more reveal">
          <a className="btn btn--ghost" href={`https://github.com/${gh}?tab=repositories`} target="_blank" rel="noopener noreferrer">
            <Icon name="github" size={18} />
            {p.allRepos}
          </a>
        </div>
      </div>
    </section>
  );
}
