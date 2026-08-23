import React from 'react';

interface MonogramProps {
  size?: number | string;
  variant?: 'gold' | 'white' | 'dark' | 'outline' | 'gold-gradient';
  className?: string;
}

/**
 * Exact geometric vector translation of the MareclMarcio signature interlocking M monogram
 */
export const MonogramSymbol: React.FC<MonogramProps> = ({
  size = 48,
  variant = 'gold',
  className = '',
}) => {
  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          stroke: '#F5F5F2',
          fill: '#F5F5F2',
          gradientId: 'white-grad',
        };
      case 'dark':
        return {
          stroke: '#0B0B0B',
          fill: '#0B0B0B',
          gradientId: 'dark-grad',
        };
      case 'outline':
        return {
          stroke: '#B79B58',
          fill: 'none',
          gradientId: 'outline-grad',
        };
      case 'gold-gradient':
      case 'gold':
      default:
        return {
          stroke: 'url(#marecl-gold-metallic)',
          fill: 'url(#marecl-gold-metallic)',
          gradientId: 'marecl-gold-metallic',
        };
    }
  };

  const colors = getColors();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 transition-transform duration-300 ${className}`}
      aria-label="MareclMarcio Monogram"
    >
      <defs>
        <linearGradient id="marecl-gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9D9B2" />
          <stop offset="35%" stopColor="#C5A869" />
          <stop offset="70%" stopColor="#B79B58" />
          <stop offset="100%" stopColor="#876F37" />
        </linearGradient>
        <filter id="gold-subtle-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#B79B58" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Main Architectural Serif M with graceful flourish & diagonal dynamic slash */}
      <g filter="url(#gold-subtle-glow)">
        {/* Left serif stem with top curve */}
        <path
          d="M 28 92 C 28 92, 33 90, 36 86 C 39 82, 39 38, 39 34 C 39 28, 32 26, 26 26 C 26 26, 38 23, 46 29 C 50 32, 60 56, 61 58 L 65 50 C 65 50, 52 26, 44 26"
          stroke={colors.stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Primary M Left Pillar (Solid Serif Leg) */}
        <path
          d="M 24 94 L 42 94 M 33 94 L 33 34 C 33 28, 29 27, 24 27 L 42 27"
          stroke={colors.stroke}
          strokeWidth="3.8"
          strokeLinecap="square"
        />

        {/* Center Interlocking V-Apex and crossing stroke */}
        <path
          d="M 33 34 L 62 88 L 78 46"
          stroke={colors.stroke}
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Pillar with dynamic upper architectural loop */}
        <path
          d="M 78 46 L 90 28 C 90 28, 97 22, 102 26 C 104 28, 101 35, 96 42 L 68 84 L 92 94"
          stroke={colors.stroke}
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Distinctive Crossing Diagonal Blade */}
        <path
          d="M 45 42 L 98 94"
          stroke={colors.stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Base serifs refinement */}
        <line x1="22" y1="94" x2="42" y2="94" stroke={colors.stroke} strokeWidth="3.5" strokeLinecap="round" />
        <line x1="82" y1="94" x2="100" y2="94" stroke={colors.stroke} strokeWidth="3.5" strokeLinecap="round" />
      </g>
    </svg>
  );
};

interface FullLogoProps {
  variant?: 'gold' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const FullLogo: React.FC<FullLogoProps> = ({
  variant = 'gold',
  size = 'md',
  showTagline = true,
  className = '',
  onClick,
}) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 56 : 42;
  const titleSize = size === 'sm' ? 'text-sm tracking-[0.25em]' : size === 'lg' ? 'text-2xl tracking-[0.3em]' : 'text-lg sm:text-xl tracking-[0.28em]';
  const taglineSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9px] sm:text-[10px]';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[#B79B58]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <MonogramSymbol size={iconSize} variant={variant} className="transform group-hover:scale-105 transition-transform duration-300" />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-display font-medium uppercase transition-colors duration-300 ${titleSize} ${
            variant === 'white'
              ? 'text-[#F5F5F2]'
              : variant === 'dark'
              ? 'text-[#0B0B0B]'
              : 'text-[#F5F5F2] group-hover:text-[#CDB373]'
          }`}
        >
          MARECLMARCIO
        </span>
        {showTagline && (
          <span
            className={`font-sans-refined uppercase tracking-[0.2em] font-light text-[#8A8A8A] transition-colors duration-300 ${taglineSize}`}
          >
            Digital experiences, built with intent.
          </span>
        )}
      </div>
    </div>
  );
};

export const StudioEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 140,
  className = '',
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      {/* Rotating Outer Text Ring */}
      <svg
        className="w-full h-full animate-[spin_32s_linear_infinite]"
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="textPathCircle"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <circle cx="100" cy="100" r="88" fill="none" stroke="#B79B58" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="76" fill="none" stroke="#B79B58" strokeWidth="1" strokeOpacity="0.2" />
        <text fill="#B79B58" fontSize="10.5" letterSpacing="3.8" className="uppercase font-sans-refined font-medium opacity-80">
          <textPath href="#textPathCircle" startOffset="0%">
            ✦ MARECLMARCIO DIGITAL STUDIO ✦ ESTD 2026 ✦ CRAFT &amp; INTENT ✦
          </textPath>
        </text>
      </svg>

      {/* Center Monogram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#121212] border border-[#B79B58]/30 flex items-center justify-center shadow-lg shadow-black/50">
          <MonogramSymbol size={42} variant="gold" />
        </div>
      </div>
    </div>
  );
};
