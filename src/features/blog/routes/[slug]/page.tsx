import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { getDict } from '@/content';
import { formatNumber, isLocale, otherLocale } from '@/i18n/config';
import { formatDate, getPost, getPostParams, hasTranslation } from '@/lib/blog';
import { buildMetadata, pageUrl } from '@/lib/seo';
import { siteConfig } from '../../../../../site.config';

// Only the posts that exist are built; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPostParams();
}

type Params = Promise<{ lang: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const post = getPost(lang, slug);
  if (!post) return {};
  const path = `blog/${slug}/`;
  const meta = buildMetadata({
    lang,
    title: `${post.title} | ${siteConfig.name[lang]}`,
    description: post.description,
    path,
    type: 'article',
    bothLanguages: false,
  });
  // hreflang only for languages in which this article actually exists
  const other = otherLocale(lang);
  meta.alternates = {
    canonical: pageUrl(lang, path),
    ...(hasTranslation(other, slug) ? { languages: { [lang]: pageUrl(lang, path), [other]: pageUrl(other, path) } } : {}),
  };
  return meta;
}

export default async function PostPage({ params }: { params: Params }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const post = getPost(lang, slug);
  if (!post) notFound();
  const t = getDict(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: lang,
    url: pageUrl(lang, `blog/${slug}/`),
    author: { '@type': 'Person', name: siteConfig.name[lang] },
  };

  return (
    <article className="section page-top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        <div className="article">
          <Link href={`/${lang}/blog/`} className="back-link">
            <Icon name="arrow" size={18} style={{ transform: `rotate(${lang === 'fa' ? 45 : -135}deg)` }} />
            {t.blog.back}
          </Link>

          <div className="post-meta">
            <time dateTime={post.date}>{formatDate(lang, post.date)}</time>
            <span>
              {formatNumber(lang, post.minutes)} {t.blog.minutes}
            </span>
          </div>

          <h1 className="article__title">{post.title}</h1>

          {post.tags.length > 0 && (
            <ul className="tags" dir="ltr">
              {post.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </article>
  );
}
