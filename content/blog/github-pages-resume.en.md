---
title: Publishing a Next.js resume on GitHub Pages for free
description: A short, practical guide to shipping a static Next.js site on GitHub Pages with automatic deploys — no hosting bill.
date: 2026-10-26
tags: [Next.js, GitHub Pages, GitHub Actions]
---

A personal site doesn't need a paid host. If your pages can be pre-rendered, **GitHub Pages** serves them for free, on your own `github.io` address, with HTTPS included.

## 1. Export Next.js as a static site

In `next.config.mjs`, tell Next.js to produce plain HTML files:

```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
```

After `next build`, everything you need is in the `out/` folder.

## 2. Name the repository correctly

A repository called `<username>.github.io` is published at the root: `https://<username>.github.io`. Any other name is published under a sub-path (`/repo-name`), which means you need a `basePath` setting. Using the special name keeps things simple.

## 3. Let GitHub Actions deploy it

In the repository open **Settings → Pages** and set **Source** to **GitHub Actions**. Then add a workflow that installs dependencies, runs `npm run build`, uploads `out/` and deploys it. From then on, every push to `main` publishes the site automatically.

## 4. Things worth remembering

- Static means **no server code**: contact forms need an external service, and anything dynamic has to happen in the browser.
- Add `.nojekyll` to the output so GitHub doesn't process your `_next` folder with Jekyll.
- Check the **Actions** tab if a deploy fails — the build log shows the exact error.

That's it: a fast, free and fully versioned site you can update with a single commit.
