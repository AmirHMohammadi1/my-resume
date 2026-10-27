'use client';

import { useEffect, useState } from 'react';

/** Cycles through short role titles in the hero. Static when the user prefers reduced motion. */
export function Rotator({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), 2800);
    return () => window.clearInterval(id);
  }, [items.length]);

  return (
    <div className="rotator" aria-live="off">
      <span key={index} className="rotator__item">
        {items[index]}
      </span>
    </div>
  );
}
