/** Prefix for URLs that Next does not rewrite for us (plain <a href>, <img src>, PDFs…). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBase(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
}
