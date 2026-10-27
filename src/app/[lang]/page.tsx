import { notFound } from 'next/navigation';
import { HomePage } from '@/components/HomePage';
import { isLocale } from '@/i18n/config';
import { personJsonLd } from '@/lib/seo';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(lang)) }} />
      <HomePage lang={lang} />
    </>
  );
}
