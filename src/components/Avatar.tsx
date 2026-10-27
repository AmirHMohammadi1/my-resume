/**
 * Graphic (illustrated) avatar — a stylised developer at a laptop.
 * Pure SVG, themed with CSS variables, no external assets.
 */
export function Avatar({ label }: { label: string }) {
  return (
    <div className="avatar" role="img" aria-label={label}>
      <div className="avatar__glow" aria-hidden="true" />
      <svg className="avatar__art" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id="av-bg" cx="50%" cy="30%" r="80%">
            <stop offset="0%" style={{ stopColor: 'var(--accent)' }} stopOpacity="0.55" />
            <stop offset="100%" style={{ stopColor: 'var(--bg-soft)' }} stopOpacity="1" />
          </radialGradient>
          <linearGradient id="av-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: 'var(--accent)' }} />
            <stop offset="100%" style={{ stopColor: 'var(--accent-2)' }} />
          </linearGradient>
          <linearGradient id="av-face" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f6f1ff" />
            <stop offset="100%" stopColor="#c8b9fb" />
          </linearGradient>
          <linearGradient id="av-screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#141836" />
            <stop offset="100%" stopColor="#0b0d1f" />
          </linearGradient>
          <clipPath id="av-clip">
            <circle cx="200" cy="200" r="190" />
          </clipPath>
        </defs>

        {/* background disc */}
        <circle cx="200" cy="200" r="190" fill="url(#av-bg)" />
        <circle cx="200" cy="200" r="190" fill="none" style={{ stroke: 'var(--border-strong)' }} strokeWidth="2" />
        <circle
          cx="200"
          cy="200"
          r="168"
          fill="none"
          style={{ stroke: 'var(--accent-2)' }}
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="3 9"
          strokeLinecap="round"
        />

        <g clipPath="url(#av-clip)">
          {/* shoulders */}
          <path
            d="M52 410 C52 322 112 282 200 276 C288 282 348 322 348 410 Z"
            fill="url(#av-body)"
          />
          <path
            d="M160 282 L200 330 L240 282"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.35"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* neck */}
          <rect x="177" y="226" width="46" height="62" rx="18" fill="#b6a4f2" />

          {/* head */}
          <ellipse cx="200" cy="182" rx="61" ry="70" fill="url(#av-face)" />
          {/* ears */}
          <ellipse cx="139" cy="188" rx="9" ry="15" fill="#d6caf9" />
          <ellipse cx="261" cy="188" rx="9" ry="15" fill="#d6caf9" />

          {/* hair */}
          <path
            d="M137 176 C128 116 164 92 202 94 C246 96 274 124 263 178 C254 150 236 136 202 136 C168 136 146 148 137 176 Z"
            fill="#1a1442"
          />
          <path
            d="M150 128 C166 112 190 106 214 108"
            fill="none"
            stroke="#3a2f8f"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* face details */}
          <circle cx="178" cy="190" r="5" fill="#1a1442" />
          <circle cx="222" cy="190" r="5" fill="#1a1442" />
          <path d="M184 218 Q200 232 216 218" fill="none" stroke="#1a1442" strokeWidth="5" strokeLinecap="round" />

          {/* headphones */}
          <path
            d="M132 186 C128 124 168 96 200 96 C234 96 272 124 268 186"
            fill="none"
            style={{ stroke: 'var(--accent-3)' }}
            strokeWidth="7"
            strokeLinecap="round"
          />
          <rect x="120" y="172" width="22" height="46" rx="10" style={{ fill: 'var(--accent-3)' }} />
          <rect x="258" y="172" width="22" height="46" rx="10" style={{ fill: 'var(--accent-3)' }} />

          {/* laptop */}
          <g>
            <rect x="106" y="304" width="188" height="120" rx="14" fill="url(#av-screen)" />
            <rect
              x="106"
              y="304"
              width="188"
              height="120"
              rx="14"
              fill="none"
              style={{ stroke: 'var(--accent-2)' }}
              strokeOpacity="0.6"
              strokeWidth="2.5"
            />
            <g strokeLinecap="round" strokeWidth="6">
              <path d="M126 328 H168" style={{ stroke: 'var(--accent)' }} />
              <path d="M178 328 H226" style={{ stroke: 'var(--accent-2)' }} />
              <path d="M140 346 H196" style={{ stroke: 'var(--accent-3)' }} />
              <path d="M206 346 H252" stroke="#6b7390" />
              <path d="M140 364 H178" style={{ stroke: 'var(--accent-2)' }} />
              <path d="M188 364 H262" stroke="#6b7390" />
              <path d="M126 382 H152" style={{ stroke: 'var(--accent)' }} />
            </g>
          </g>
        </g>
      </svg>

      <span className="avatar__chip" style={{ insetBlockStart: '6%', insetInlineStart: '-2%' }} aria-hidden="true">
        {'</>'}
      </span>
      <span className="avatar__chip" style={{ insetBlockStart: '22%', insetInlineEnd: '-6%' }} aria-hidden="true">
        {'{ API }'}
      </span>
      <span className="avatar__chip" style={{ insetBlockEnd: '24%', insetInlineStart: '-8%' }} aria-hidden="true">
        TS
      </span>
      <span className="avatar__chip" style={{ insetBlockEnd: '8%', insetInlineEnd: '2%' }} aria-hidden="true">
        npm run dev
      </span>
    </div>
  );
}
