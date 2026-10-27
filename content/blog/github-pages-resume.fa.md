---
title: انتشار رایگان سایت رزومه‌ی Next.js روی GitHub Pages
description: راهنمای کوتاه و عملی برای انتشار یک سایت استاتیک Next.js روی GitHub Pages با دیپلوی خودکار، بدون پرداخت هزینه‌ی هاست.
date: 2026-10-26
tags: [Next.js, GitHub Pages, GitHub Actions]
---

برای یک سایت شخصی لازم نیست هاست بخری. اگر صفحه‌هات از قبل ساخته (pre-render) بشن، **GitHub Pages** اون‌ها رو رایگان، با آدرس `github.io` و گواهی HTTPS برات سرو می‌کنه.

## ۱. خروجی استاتیک از Next.js بگیر

در فایل `next.config.mjs` به Next.js بگو فایل‌های HTML ساده تولید کنه:

```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
```

بعد از `next build` هرچی لازمه داخل پوشه‌ی `out/` هست.

## ۲. اسم ریپو رو درست انتخاب کن

ریپویی با اسم `<username>.github.io` روی ریشه‌ی آدرس منتشر می‌شه: `https://<username>.github.io`. هر اسم دیگه‌ای زیرمسیر (`/repo-name`) می‌گیره و نیاز به تنظیم `basePath` داره. اسم مخصوص، کار رو ساده نگه می‌داره.

## ۳. بذار GitHub Actions منتشرش کنه

در ریپو به **Settings ← Pages** برو و **Source** رو روی **GitHub Actions** بذار. بعد یک workflow اضافه کن که وابستگی‌ها رو نصب کنه، `npm run build` بزنه، پوشه‌ی `out/` رو آپلود و منتشر کنه. از اون به بعد هر push روی شاخه‌ی `main` سایت رو خودکار به‌روز می‌کنه.

## ۴. چند نکته‌ی مهم

- استاتیک یعنی **بدون کد سمت سرور**؛ فرم تماس به سرویس بیرونی نیاز داره و هر چیز پویا باید داخل مرورگر انجام بشه.
- فایل `.nojekyll` رو به خروجی اضافه کن تا گیت‌هاب پوشه‌ی `_next` رو با Jekyll پردازش نکنه.
- اگر دیپلوی خطا داد تب **Actions** رو ببین؛ لاگ build دقیقاً خطا رو نشون می‌ده.

همین؛ یک سایت سریع، رایگان و کاملاً نسخه‌بندی‌شده که با یک commit به‌روزش می‌کنی.
