/**
 * ─────────────────────────────────────────────────────────────
 *  تنظیمات مرکزی سایت  ·  Central site settings
 *  بیشتر چیزهایی که لازمه عوض کنی همین‌جاست.
 * ─────────────────────────────────────────────────────────────
 */
export const siteConfig = {
  // ── کلید بلاگ · Blog switch ───────────────────────────────
  // true  → بلاگ فعال (لینک منو + صفحه‌ها ساخته می‌شن)
  // false → بلاگ کاملاً از سایت حذف می‌شه
  // بعد از تغییر، commit کن؛ سایت خودکار دوباره منتشر می‌شه.
  blog: true,

  // ── زبان پیش‌فرض (صفحه‌ی اول بر اساس انتخاب قبلی/زبان مرورگر هدایت می‌شه)
  defaultLang: 'fa' as 'fa' | 'en',

  // ── آدرس سایت (برای سئو). در GitHub Actions خودکار تنظیم می‌شه.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://amirhmohammadi1.github.io',

  name: {
    fa: 'امیرحسین محمدی',
    en: 'Amir Hosein Mohammadi',
  },

  yearsOfExperience: 8,

  // ── اطلاعات تماس ──────────────────────────────────────────
  // ایمیل و شماره الان نمونه‌ست؛ با مقدار واقعی جایگزین کن.
  contact: {
    email: 'your.email@example.com', // TODO: ایمیل واقعی
    phone: '+98 900 000 0000', // TODO: شماره‌ی واقعی (با کد کشور)
    telegram: 'mr_amir_developer',
    linkedin: 'amirhmohammadi', // linkedin.com/in/<این مقدار>
    github: 'AmirHMohammadi1',
  },

  // ── فایل رزومه PDF (فایل‌ها در public/resume هستن) ──────────
  resume: {
    enabled: true,
    fa: '/resume/Amir-Hosein-Mohammadi-Resume-fa.pdf',
    en: '/resume/Amir-Hosein-Mohammadi-Resume-en.pdf',
  },
};

export type SiteConfig = typeof siteConfig;
