import React from 'react';

export default function TechLogo({ id, className }) {
  switch (id) {
    case 'react':
    case 'reactnative':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} width="100%" height="auto">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" className={className} width="100%" height="auto">
          <circle cx="90" cy="90" r="90" fill="#000000"/>
          <path d="M149.508 157.52L69.142 54.0001H54V126H66.086V71.858L134.422 159.986C139.758 156.402 144.82 152.202 149.508 157.52Z" fill="#ffffff"/>
          <rect x="115" y="54" width="12" height="72" fill="#ffffff"/>
        </svg>
      );
    case 'angular':
      return (
        <svg viewBox="0 0 250 250" className={className} width="100%" height="auto">
          <polygon points="125 30, 225 65, 208 195, 125 230, 42 195, 25 65" fill="#DD0031" />
          <polygon points="125 30, 125 230, 208 195, 225 65" fill="#C3002F" />
          <path d="M125 52 L58 175 L89 175 L102 147 L148 147 L161 175 L192 175 Z M125 90 L139 123 L111 123 Z" fill="#FFFFFF" />
        </svg>
      );
    case 'vue':
      return (
        <svg viewBox="0 0 256 221" className={className} width="100%" height="auto">
          <path d="M204.8 0H256L128 220.8L0 0h51.2L128 132.48L193.28 20.48L204.8 0Z" fill="#41B883"/>
          <path d="M51.2 0H90.88L128 64L165.12 0H204.8L128 132.48L51.2 0Z" fill="#35495E"/>
        </svg>
      );
    case 'html5':
      return (
        <svg viewBox="0 0 512 512" className={className} width="100%" height="auto">
          <path fill="#E34F26" d="M71,460 L37,0 L475,0 L441,460 L256,512 L71,460 Z"/>
          <path fill="#EF652A" d="M256,472 L407,430 L435,48 L256,48 L256,472 Z"/>
          <path fill="#EBEBEB" d="M256,176 L256,128 L154,128 L158,176 L256,176 Z M256,274 L256,226 L204,226 L200,176 L152,176 L162,274 L256,274 Z M256,366 L256,316 L209,303 L206,274 L157,274 L164,366 L256,366 Z"/>
          <path fill="#FFFFFF" d="M256,128 L256,176 L352,176 L343,274 L256,274 L256,322 L303,309 L306,274 L355,274 L347,366 L256,418 L256,470 L382,435 L405,176 L409,128 L256,128 Z"/>
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 512 512" className={className} width="100%" height="auto">
          <path fill="#264DE4" d="M71,460 L37,0 L475,0 L441,460 L256,512 L71,460 Z"/>
          <path fill="#2965F1" d="M256,472 L407,430 L435,48 L256,48 L256,472 Z"/>
          <path fill="#EBEBEB" d="M256,128 L152,128 L160,226 L256,226 L256,128 Z M256,274 L164,274 L171,366 L256,418 L256,366 L209,353 L206,322 L256,322 L256,274 Z"/>
          <path fill="#FFFFFF" d="M256,128 L256,176 L352,176 L347,274 L256,274 L256,322 L303,309 L306,274 L355,274 L347,366 L256,418 L256,470 L382,435 L405,176 L409,128 L256,128 Z"/>
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 256 154" className={className} width="100%" height="auto">
          <path d="M117.8 77H138V97H117.8z" fill="#333333"/>
          <path d="M128 0L24.8 59.6v119.2l103.2 59.6 103.2-59.6V59.6L128 0zm78.2 163.6l-26 15-26-15V133.7l26-15 26 15v29.9z" fill="#43853D"/>
          <path d="M128 35.8l60 34.6v69.3l-60 34.6-60-34.6V70.4l60-34.6zm52.2 64.1l-26-15-26 15v29.9l26 15 26-15V99.9z" fill="#68A063"/>
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 110 110" className={className} width="100%" height="auto">
          <path d="M54.1 0C25.4 0 27.2 12.3 27.2 12.3l.1 12.7h27.1v3.8H18.7S0 26.6 0 54.4c0 27.8 16.3 26.7 16.3 26.7h9.8V67.3s-.4-16.7 16.1-16.7h27.3s15.9.2 15.9-15.6v-23S87 0 54.1 0zm-15.9 7.6a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4z" fill="#3776AB"/>
          <path d="M55.9 110c28.7 0 26.9-12.3 26.9-12.3l-.1-12.7H55.6v-3.8h35.7s18.7 2.2 18.7-25.6c0-27.8-16.3-26.7-16.3-26.7h-9.8v13.8s.4 16.7-16.1 16.7H40.5s-15.9-.2-15.9 15.6v23S23 110 55.9 110zm15.9-7.6a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4z" fill="#FFE052"/>
        </svg>
      );
    case 'go':
      return (
        <svg viewBox="0 0 120 120" className={className} width="100%" height="auto">
          <path d="M15 45c0-12 10-20 25-20h40c15 0 25 8 25 20s-10 20-25 20H40c-15 0-25-8-25-20z" fill="#00ADD8"/>
          <path d="M30 75c0-12 10-20 25-20h40c15 0 25 8 25 20s-10 20-25 20H55c-15 0-25-8-25-20z" fill="#00ADD8" opacity="0.8"/>
          <text x="60" y="68" fill="#FFF" fontSize="28" fontWeight="bold" textAnchor="middle">GO</text>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 100 100" className={className} width="100%" height="auto">
          <path d="M50 5C25 5 5 25 5 50s20 45 45 45 45-20 45-45S75 5 50 5zm0 18c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10zm-5 50l-15-5 5-15 15 5-5 15zm20-5l-5 5-15-5 5-5 15 5z" fill="#5382a1"/>
          <path d="M50 5C25 5 5 25 5 50s20 45 45 45 45-20 45-45S75 5 50 5zm0 18c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10z" fill="#f8981d" opacity="0.6"/>
        </svg>
      );
    case 'flutter':
      return (
        <svg viewBox="0 0 100 120" className={className} width="100%" height="auto">
          <path d="M50 0L0 50l15 15L75 20z" fill="#40D0FB"/>
          <path d="M75 55L35 95l15 15l50-50z" fill="#02569B"/>
          <path d="M35 95l15 15l25-25-15-15z" fill="#0175C2"/>
        </svg>
      );
    case 'swift':
      return (
        <svg viewBox="0 0 100 100" className={className} width="100%" height="auto">
          <path d="M90 60c-5 10-15 20-25 25-15 8-35 5-45-5s-10-30 0-45c10-15 25-20 40-20 15 0 25 5 30 15-5-2-12-2-18 0-10 3-18 10-22 20s-2 20 5 28c8 8 20 10 30 5s15-15 15-23z" fill="#FA6432"/>
          <path d="M72 42c-2 5-6 10-12 12s-12 2-18-2-8-10-6-16c2-5 6-10 12-12s12-2 18 2 8 10 6 16z" fill="#FF8D3F" opacity="0.6"/>
        </svg>
      );
    case 'kotlin':
      return (
        <svg viewBox="0 0 120 120" className={className} width="100%" height="auto">
          <polygon points="0 120, 120 120, 120 0, 0 120" fill="url(#kotlinLogoGrad)"/>
          <polygon points="0 120, 0 0, 120 0, 0 120" fill="url(#kotlinLogoGrad2)" opacity="0.8"/>
          <defs>
            <linearGradient id="kotlinLogoGrad" x1="0" y1="120" x2="120" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F88909"/>
              <stop offset="0.5" stopColor="#E43A15"/>
              <stop offset="1" stopColor="#8A2E8D"/>
            </linearGradient>
            <linearGradient id="kotlinLogoGrad2" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00A2E2"/>
              <stop offset="1" stopColor="#3F52B4"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 100 150" className={className} width="100%" height="auto">
          <path d="M25 0h25c13.8 0 25 11.2 25 25s-11.2 25-25 25H25V0z" fill="#F24E1E"/>
          <path d="M25 50h25c13.8 0 25 11.2 25 25s-11.2 25-25 25V50H25z" fill="#A259FF"/>
          <path d="M50 100c13.8 0 25 11.2 25 25s-11.2 25-25 25-25-11.2-25-25 11.2-25 25-25z" fill="#1ABC9C"/>
          <path d="M25 100h25v50c-13.8 0-25-11.2-25-25V100z" fill="#0ACF83"/>
          <path d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0v50z" fill="#FF7262"/>
        </svg>
      );
    case 'adobexd':
      return (
        <svg viewBox="0 0 100 100" className={className} width="100%" height="auto">
          <rect width="100%" height="100%" rx="16" fill="#2E001F"/>
          <text x="50" y="65" fill="#FF00C4" fontSize="42" fontWeight="bold" textAnchor="middle">Xd</text>
        </svg>
      );
    case 'sketch':
      return (
        <svg viewBox="0 0 100 100" className={className} width="100%" height="auto">
          <polygon points="50 5, 95 30, 80 85, 20 85, 5 30" fill="#FDA100"/>
          <polygon points="50 5, 80 85, 20 85" fill="#EA6C00"/>
          <polygon points="50 5, 95 30, 80 30" fill="#FEE300"/>
          <polygon points="50 5, 5 30, 20 30" fill="#FEE300"/>
        </svg>
      );
    case 'postgresql':
      return (
        <svg viewBox="0 0 120 120" className={className} width="100%" height="auto">
          <path d="M60 10C35 10 15 30 15 55c0 15 8 28 20 35l-5 15h15l5-15c5 2 10 3 15 3 25 0 45-20 45-45S85 10 60 10z" fill="#336791"/>
          <circle cx="45" cy="45" r="8" fill="#FFF"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 100 120" className={className} width="100%" height="auto">
          <path d="M50 0c-5 15-20 40-20 60 0 20 10 35 20 40 10-5 20-20 20-40 0-20-15-45-20-60z" fill="#47A248"/>
          <path d="M50 0v100c10-5 20-20 20-40C70 40 55 15 50 0z" fill="#3F903F"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 100 100" className={className} width="100%" height="auto">
          <path d="M50 10C27.9 10 10 27.9 10 50s17.9 40 40 40 40-17.9 40-40S72.1 10 50 10zm-8 62c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" fill="#00758F"/>
          <path d="M52 46c-1-2-3-4-5-5-2-1-4-1-6 0-2 1-3 3-3 5s1 4 3 5c2 1 4 1 6 0 2-1 4-3 5-5z" fill="#F29111" opacity="0.8"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" className={className} width="100%" height="auto">
          <circle cx="50" cy="50" r="40" fill="#334155" />
          <text x="50" y="58" fill="#FFFFFF" fontSize="24" fontWeight="bold" textAnchor="middle">{"</>"}</text>
        </svg>
      );
  }
}
