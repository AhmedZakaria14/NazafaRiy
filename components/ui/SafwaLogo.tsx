import React from 'react';

interface SafwaLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  textClassName?: string;
  subtextClassName?: string;
  variant?: 'full' | 'mark';
}

export function SafwaLogo({
  size = 36,
  className = '',
  showText = false,
  textClassName = 'text-white font-semibold text-lg tracking-tight',
  subtextClassName = 'text-[10px] text-gray-300 font-light tracking-wider',
  variant = 'full',
}: SafwaLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem SVG */}
      <div
        className="relative shrink-0 flex items-center justify-center rounded-xl liquid-glass border border-white/20 p-1.5 shadow-lg group-hover:border-white/40 transition-all duration-300"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          aria-hidden="true"
        >
          <defs>
            {/* Platinum Linear Gradient */}
            <linearGradient id="safwa-platinum" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#F1F5F9" />
              <stop offset="70%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Glass Accent Gradient */}
            <linearGradient id="safwa-glass" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#E2E8F0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#64748B" stopOpacity="0.2" />
            </linearGradient>

            {/* Radiant Sparkle Gradient */}
            <radialGradient id="safwa-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="60%" stopColor="#E2E8F0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer Geometric Purity Diamond Frame */}
          <path
            d="M 50 6 L 88 32 L 88 68 L 50 94 L 12 68 L 12 32 Z"
            stroke="url(#safwa-platinum)"
            strokeWidth="3.5"
            strokeLinejoin="round"
            fill="url(#safwa-glass)"
            fillOpacity="0.25"
          />

          {/* Inner Precision Facets */}
          <path
            d="M 50 6 L 50 94"
            stroke="url(#safwa-platinum)"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          <path
            d="M 12 32 L 88 68"
            stroke="url(#safwa-platinum)"
            strokeWidth="1.2"
            strokeOpacity="0.3"
          />
          <path
            d="M 12 68 L 88 32"
            stroke="url(#safwa-platinum)"
            strokeWidth="1.2"
            strokeOpacity="0.3"
          />

          {/* Central Liquid Crystal Droplet & Star of Excellence */}
          <path
            d="M 50 20 C 50 20, 68 44, 68 58 C 68 68 59.9 76 50 76 C 40.1 76 32 68 32 58 C 32 44 50 20 50 20 Z"
            fill="url(#safwa-platinum)"
            fillOpacity="0.9"
          />

          {/* Droplet Inner Core Glass Reflection */}
          <path
            d="M 50 26 C 50 26, 62 46, 62 56 C 62 63 56.6 69 50 69 C 43.4 69 38 63 38 56 C 38 46 50 26 50 26 Z"
            fill="#050505"
            fillOpacity="0.6"
          />

          {/* Central 4-Point Sparkling Star of Perfection */}
          <path
            d="M 50 42 Q 50 54 38 54 Q 50 54 50 66 Q 50 54 62 54 Q 50 54 50 42 Z"
            fill="#FFFFFF"
          />

          {/* Subtle Top Crown Diamond Sparkle */}
          <circle cx="50" cy="12" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Optional Typography Brand Text */}
      {showText && variant === 'full' && (
        <div className="flex flex-col text-right">
          <span className={textClassName}>صفوة الرياض</span>
          <span className={subtextClassName}>خدمات نظافة في الرياض</span>
        </div>
      )}
    </div>
  );
}
