import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroIllustration = () => (
  <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <defs>
      <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>

    <circle cx="250" cy="200" r="160" fill="url(#heroGrad1)" />
    <circle cx="250" cy="200" r="130" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="6 6" opacity="0.2" />

    {/* Laptop Stand */}
    <path d="M180 320 L320 320 L300 290 L200 290 Z" fill="#475569" />
    <rect x="140" y="320" width="220" height="8" rx="4" fill="#334155" />

    {/* Laptop Screen Back */}
    <rect x="90" y="70" width="320" height="220" rx="12" fill="#475569" />
    {/* Laptop Screen Front */}
    <rect x="100" y="80" width="300" height="200" rx="6" fill="url(#screenGrad)" />

    {/* Browser Bar */}
    <rect x="100" y="80" width="300" height="24" rx="6" fill="#1e293b" />
    <circle cx="115" cy="92" r="4" fill="#ef4444" />
    <circle cx="127" cy="92" r="4" fill="#f59e0b" />
    <circle cx="139" cy="92" r="4" fill="#10b981" />
    <rect x="160" y="86" width="180" height="12" rx="6" fill="#0f172a" />

    {/* Code Brackets on Screen */}
    <text x="120" y="150" fill="#38bdf8" fontSize="24" fontWeight="bold" fontFamily="monospace">&lt;</text>
    <text x="360" y="240" fill="#38bdf8" fontSize="24" fontWeight="bold" fontFamily="monospace">&gt;</text>

    {/* Floating Code Lines */}
    <rect x="150" y="140" width="120" height="6" rx="3" fill="#64748b" />
    <rect x="150" y="155" width="180" height="6" rx="3" fill="url(#accentGrad)" />
    <rect x="150" y="170" width="90" height="6" rx="3" fill="#10b981" />

    {/* Database Icon */}
    <g transform="translate(310, 130)">
      <rect x="0" y="0" width="60" height="80" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      <ellipse cx="30" cy="20" rx="20" ry="6" fill="#3b82f6" />
      <path d="M10 20 V35 C10 40 50 40 50 35 V20 Z" fill="#2563eb" />
      <ellipse cx="30" cy="35" rx="20" ry="6" fill="#3b82f6" stroke="#2563eb" strokeWidth="0.5" />

      <path d="M10 40 V55 C10 60 50 60 50 55 V40 Z" fill="#1d4ed8" />
      <ellipse cx="30" cy="55" rx="20" ry="6" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="0.5" />
    </g>

    {/* Gear Icon floating */}
    <g transform="translate(320, 230)" opacity="0.8">
      <circle cx="20" cy="20" r="12" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="6 3" />
      <circle cx="20" cy="20" r="8" fill="#0f172a" />
    </g>

    {/* Tech stack tags floating around */}
    <g transform="translate(30, 220)">
      <rect x="0" y="0" width="65" height="26" rx="6" fill="#2563eb" />
      <text x="32" y="17" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">HTML</text>
    </g>
    <g transform="translate(50, 110)">
      <rect x="0" y="0" width="55" height="26" rx="6" fill="#10b981" />
      <text x="27" y="17" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">CSS</text>
    </g>
    <g transform="translate(380, 80)">
      <rect x="0" y="0" width="50" height="26" rx="6" fill="#fb7185" />
      <text x="25" y="17" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">JS</text>
    </g>
    <g transform="translate(390, 180)">
      <rect x="0" y="0" width="70" height="26" rx="6" fill="#6366f1" />
      <text x="35" y="17" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">React</text>
    </g>
  </svg>
);

export default function ServiceHero({ 
  title = "Web Development", 
  desc = "Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Rhoncus sociis nunc libero id eros id etiam pharetra..",
  launchText = "Launch faster . Grow with confidence . Stay ahead of the competition"
}) {
  return (
    <section className="service-hero">
      <div className="container">
        <div className="service-hero-grid">
          <div className="service-hero-content">
            <h1 className="service-hero-title">{title}</h1>
            <p className="service-hero-desc">{desc}</p>
            <p className="service-hero-launch">{launchText}</p>
            <div className="service-hero-buttons">
              <Link href="/#contact" className="btn btn-reach-out">
                Reach Out To Us
              </Link>
              <Link href="/#portfolio" className="btn-explore-projects">
                Explore Projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="service-hero-image-container">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
export { HeroIllustration };
