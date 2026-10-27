// Runs after `next build`: writes robots.txt, sitemap.xml and a bilingual 404.html into ./out
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'out');
if (!fs.existsSync(out)) {
  console.warn('postbuild: ./out not found, skipping');
  process.exit(0);
}

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://amirhmohammadi1.github.io').replace(/\/$/, '');

// Collect every exported index.html as a URL
const urls = [];
(function walk(dir, rel = '') {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_next') || entry.name === '404') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, `${rel}/${entry.name}`);
    else if (entry.name === 'index.html' && rel) urls.push(`${rel}/`);
  }
})(out);

urls.sort();
const today = new Date().toISOString().slice(0, 10);
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${siteUrl}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`;

fs.writeFileSync(path.join(out, 'sitemap.xml'), xml);
fs.writeFileSync(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`✔ sitemap.xml (${urls.length} urls) and robots.txt written`);

// Bilingual, self-contained 404 page (GitHub Pages serves /404.html for unknown URLs).
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
const notFound = `<!doctype html>
<html lang="en" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>404 · Page not found · صفحه پیدا نشد</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 1.5rem; text-align: center;
    font-family: system-ui, -apple-system, "Segoe UI", Tahoma, sans-serif; color: #eef0f8; line-height: 1.8;
    background: radial-gradient(60rem 30rem at 15% 0%, rgba(143,125,255,.28), transparent 60%),
                radial-gradient(50rem 28rem at 90% 100%, rgba(45,212,230,.2), transparent 60%), #090a10; }
  h1 { margin: 0; font-size: clamp(4rem, 16vw, 8rem); line-height: 1; letter-spacing: -.04em;
    background: linear-gradient(120deg, #8f7dff, #2dd4e6); -webkit-background-clip: text; background-clip: text; color: transparent; }
  p { margin: .4rem 0; color: #c6cadb; }
  nav { margin-top: 1.6rem; display: flex; gap: .8rem; justify-content: center; flex-wrap: wrap; }
  a { display: inline-block; padding: .7rem 1.4rem; border-radius: 999px; text-decoration: none; font-weight: 600;
    color: #eef0f8; border: 1px solid rgba(255,255,255,.2); }
  a:hover, a:focus-visible { background: #8f7dff; border-color: #8f7dff; color: #0a0b12; outline: none; }
</style>
</head>
<body>
<main>
  <h1>404</h1>
  <p lang="fa" dir="rtl">این صفحه پیدا نشد.</p>
  <p lang="en">This page could not be found.</p>
  <nav>
    <a href="${basePath}/fa/" lang="fa" hreflang="fa">صفحه اصلی</a>
    <a href="${basePath}/en/" lang="en" hreflang="en">Home</a>
  </nav>
</main>
</body>
</html>
`;
fs.writeFileSync(path.join(out, '404.html'), notFound);
console.log('✔ 404.html written');
