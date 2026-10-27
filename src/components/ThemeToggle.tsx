'use client';

import { Icon } from './Icon';

export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const el = document.documentElement;
    const next = el.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    el.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage can be unavailable (private mode) — theme still switches */
    }
  }

  return (
    <button type="button" className="icon-btn theme-toggle" onClick={toggle} aria-label={label} title={label}>
      <Icon name="sun" className="i-sun" />
      <Icon name="moon" className="i-moon" />
    </button>
  );
}
