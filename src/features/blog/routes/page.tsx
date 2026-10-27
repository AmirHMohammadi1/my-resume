import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RevealObserver } from '@/components/RevealObserver';
import { SectionHead } from '@/components/sections/SectionHead';
import { getDict } from '@/content';
import { formatNumber, isLocale } from '@/i18n/config';
import { formatDate, getPosts } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDict(lang);
  return buildMetadata({
    lang,
    title: `${t.blog.title} | ${t.hero.name}`,
    description: t.blog.intro,
    path: 'blog/',
  });
}

export default async function BlogIndex({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDict(lang);
  const posts = getPosts(lang);

  return (
    <section className="section page-top" aria-labelledby="blog-title">
      <div className="container">
        <SectionHead eyebrow={t.blog.eyebrow} title={t.blog.title} intro={t.blog.intro} id="blog-title" as="h1" />

        {posts.length === 0 ? (
          <p className="empty-state">{t.blog.empty}</p>
        ) : (
          <ul className="posts">
            {posts.map((p) => (
              <li key={p.slug} className="reveal">
                <Link href={`/${lang}/blog/${p.slug}/`} className="card post-card">
                  <div className="post-meta">
                    <time dateTime={p.date}>{formatDate(lang, p.date)}</time>
                    <span>
                      {formatNumber(lang, p.minutes)} {t.blog.minutes}
                    </span>
                  </div>
                  <h2>{p.title}</h2>
                  {p.description ? <p>{p.description}</p> : null}
                  {p.tags.length > 0 && (
                    <ul className="tags" dir="ltr">
                      {p.tags.map((tag) => (
                        <li key={tag} className="tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <RevealObserver />
    </section>
  );
}
