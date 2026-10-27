// Build-time blog loader. Posts are Markdown files in /content/blog named
//   <slug>.<lang>.md      e.g.  github-pages-resume.fa.md / github-pages-resume.en.md
// with a small front-matter block:
//   ---
//   title: ...
//   description: ...
//   date: 2026-10-26
//   tags: [Next.js, GitHub Pages]
//   draft: false            (optional — true hides the post)
//   ---
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import { locales, type Locale } from '@/i18n/config';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export interface PostMeta {
  slug: string;
  lang: Locale;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  tags: string[];
  minutes: number;
}

export interface Post extends PostMeta {
  html: string;
}

function parseFrontMatter(raw: string): { data: Record<string, string>; body: string } {
  const text = raw.replace(/^﻿/, '');
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: text };
  const data: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i < 1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body: m[2] };
}

function parseTags(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((t) => t.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);
}

function readingMinutes(body: string): number {
  const words = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function load(file: string, slug: string, lang: Locale): (PostMeta & { body: string }) | null {
  const { data, body } = parseFrontMatter(fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'));
  if (data.draft === 'true') return null;
  if (!data.title) throw new Error(`content/blog/${file}: front-matter "title" is required`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date || '')) {
    throw new Error(`content/blog/${file}: front-matter "date" must look like 2026-10-26`);
  }
  return {
    slug,
    lang,
    title: data.title,
    description: data.description || '',
    date: data.date,
    tags: parseTags(data.tags),
    minutes: readingMinutes(body),
    body,
  };
}

function files(): { file: string; slug: string; lang: Locale }[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const out: { file: string; slug: string; lang: Locale }[] = [];
  for (const file of fs.readdirSync(BLOG_DIR)) {
    const m = file.match(/^(.+)\.(fa|en)\.md$/);
    if (m && (locales as readonly string[]).includes(m[2])) out.push({ file, slug: m[1], lang: m[2] as Locale });
  }
  return out;
}

export function getPosts(lang: Locale): PostMeta[] {
  return files()
    .filter((f) => f.lang === lang)
    .map((f) => load(f.file, f.slug, f.lang))
    .filter((p): p is PostMeta & { body: string } => p !== null)
    .map(({ body: _body, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPost(lang: Locale, slug: string): Post | null {
  const f = files().find((x) => x.lang === lang && x.slug === slug);
  if (!f) return null;
  const loaded = load(f.file, f.slug, f.lang);
  if (!loaded) return null;
  const { body, ...meta } = loaded;
  return { ...meta, html: marked.parse(body, { async: false, gfm: true }) as string };
}

/** Every {lang, slug} pair that should become a static page. */
export function getPostParams(): { lang: Locale; slug: string }[] {
  return locales.flatMap((lang) => getPosts(lang).map((p) => ({ lang, slug: p.slug })));
}

/** The same article in the other language, if it exists (for the language switch + hreflang). */
export function hasTranslation(lang: Locale, slug: string): boolean {
  return getPost(lang, slug) !== null;
}

export function formatDate(lang: Locale, iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR' : 'en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(d);
}
