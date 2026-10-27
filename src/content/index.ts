import type { Locale } from '@/i18n/config';
import type { Dict } from './types';
import { fa } from './fa';
import { en } from './en';

const dictionaries: Record<Locale, Dict> = { fa, en };

export function getDict(lang: Locale): Dict {
  return dictionaries[lang];
}

export type { Dict };
