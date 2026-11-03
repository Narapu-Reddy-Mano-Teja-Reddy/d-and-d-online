import React from 'react';

interface DivineDropsLogoProps {
  className?: string;
  variant?: 'gold-on-dark' | 'gold-full' | 'monochrome-dark' | 'compact';
  showTagline?: boolean;
}

export const DivineDropsLogo: React.FC<DivineDropsLogoProps> = ({
  className = '',
  variant = 'gold-on-dark',
  showTagline = true,
}) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Intertwined DD Crest with Crown & Laurel */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-10 h-10 md:w-11 md:h-11 drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#DFC064" />
              <stop offset="70%" stopColor="#B3892A" />
              <stop offset="100%" stopColor="#E5C775" />
            </linearGradient>
            <linearGradient id="goldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EAD07C" />
              <stop offset="50%" stopColor="#9C731A" />
              <stop offset="100%" stopColor="#F9E69A" />
            </linearGradient>
            <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Crown / Tiara at Top */}
          <path
            d="M 36 28 L 43 35 L 50 22 L 57 35 L 64 28 L 61 40 L 39 40 Z"
            fill="url(#goldGrad1)"
            stroke="url(#goldGrad2)"
            strokeWidth="0.8"
          />
          {/* Jewels on Crown */}
          <circle cx="50" cy="21" r="2" fill="#FFFFFF" />
          <circle cx="36" cy="27" r="1.5" fill="#FFE899" />
          <circle cx="64" cy="27" r="1.5" fill="#FFE899" />

          {/* Laurel branch flourishes left */}
          <path
            d="M 28 38 C 22 48 24 64 32 74 C 30 68 30 54 35 44"
            stroke="url(#goldGrad1)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M 25 46 Q 21 44 23 41 Q 26 43 27 47" fill="url(#goldGrad1)" />
          <path d="M 24 57 Q 20 56 21 52 Q 25 54 26 58" fill="url(#goldGrad1)" />
          <path d="M 28 67 Q 24 67 26 63 Q 29 64 30 68" fill="url(#goldGrad1)" />

          {/* Laurel branch flourishes right */}
          <path
            d="M 72 38 C 78 48 76 64 68 74 C 70 68 70 54 65 44"
            stroke="url(#goldGrad1)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path d="M 75 46 Q 79 44 77 41 Q 74 43 73 47" fill="url(#goldGrad1)" />
          <path d="M 76 57 Q 80 56 79 52 Q 75 54 74 58" fill="url(#goldGrad1)" />
          <path d="M 72 67 Q 76 67 74 63 Q 71 64 70 68" fill="url(#goldGrad1)" />

          {/* Interlocked Double D Monogram */}
          {/* First 'D' */}
          <path
            d="M 38 38 L 44 38 C 54 38 61 44 61 54 C 61 64 53 70 42 70 L 37 70 C 35 70 34 68 34 66 L 34 42 C 34 39.5 35.5 38 38 38 Z M 41 44 L 41 64 L 44 64 C 50 64 55 60 55 54 C 55 48 50 44 44 44 Z"
            fill="url(#goldGrad1)"
            opacity="0.95"
          />

          {/* Second overlapping 'D' with luxury offset */}
          <path
            d="M 46 42 L 53 42 C 63 42 70 48 70 58 C 70 67 62 74 51 74 L 44 74 C 42 74 41 72 41 70 L 41 46 C 41 43.5 42.5 42 46 42 Z M 48 48 L 48 68 L 52 68 C 58 68 63 64 63 58 C 63 52 58 48 52 48 Z"
            fill="url(#goldGrad2)"
            stroke="#1a1814"
            strokeWidth="0.8"
          />

          {/* Center drop element */}
          <path
            d="M 50 78 C 50 78 47 82 47 84 C 47 85.6 48.3 87 50 87 C 51.7 87 53 85.6 53 84 C 53 82 50 78 50 78 Z"
            fill="url(#goldGrad1)"
          />
        </svg>
      </div>

      {/* Typography: DIVINE DROPS + Style for Every You */}
      <div className="flex flex-col tracking-wider">
        <span
          className={`font-brand text-lg md:text-xl font-bold tracking-[0.16em] uppercase leading-tight ${
            variant === 'monochrome-dark'
              ? 'text-stone-900'
              : 'gold-gradient-text drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]'
          }`}
          style={{ letterSpacing: '0.18em' }}
        >
          DIVINE DROPS
        </span>
        {showTagline && (
          <span
            className="text-[10px] md:text-[11px] tracking-[0.22em] font-light text-amber-200/80 uppercase font-sans -mt-0.5"
            style={{ letterSpacing: '0.22em' }}
          >
            Style For Every You
          </span>
        )}
      </div>
    </div>
  );
};
