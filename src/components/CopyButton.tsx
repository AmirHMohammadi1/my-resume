'use client';

import { useState } from 'react';
import { Icon } from './Icon';

interface Props {
  value: string;
  label: string;
  doneLabel: string;
}

export function CopyButton({ value, label, doneLabel }: Props) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = value;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch {
        /* nothing else to try */
      }
      ta.remove();
    }
    setDone(true);
    window.setTimeout(() => setDone(false), 1800);
  }

  return (
    <button type="button" className={`copy-btn${done ? ' is-done' : ''}`} onClick={copy}>
      <Icon name={done ? 'check' : 'copy'} size={14} />
      <span aria-live="polite">{done ? doneLabel : label}</span>
    </button>
  );
}
