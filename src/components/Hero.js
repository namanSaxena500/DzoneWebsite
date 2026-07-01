import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroIllustration = () => (
  <svg viewBox="0 0 500 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="10" stdDeviation="8" floodOpacity="0.15" />
      </filter>
    </defs>
    {/* Background Decorative Circles */}
    <circle cx="400" cy="100" r="80" fill="url(#grad1)" opacity="0.1" />
    <circle cx="100" cy="350" r="120" fill="url(#grad1)" opacity="0.05" />
    
    {/* Office/Desk Line */}
    <line x1="50" y1="380" x2="450" y2="380" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
    
    {/* Left Character (Developer) */}
    <g transform="translate(100, 180)">
      {/* Chair */}
      <path d="M20 180 H80 V200 H20 Z" fill="#64748b" />
      <path d="M40 200 H60 V230 H40 Z" fill="#475569" />
      <path d="M30 230 H70 V240 H30 Z" fill="#334155" />
      <path d="M70 120 V180" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
      {/* Body */}
      <path d="M30 120 C30 100 80 100 80 120 V180 H30 Z" fill="#f97316" /> {/* Orange Shirt */}
      {/* Head */}
      <circle cx="55" cy="75" r="22" fill="#fed7aa" />
      {/* Hair */}
      <path d="M33 75 C33 55 77 55 77 75 C77 65 33 65 33 75 Z" fill="#1e293b" />
      {/* Glasses */}
      <rect x="42" y="70" width="12" height="8" rx="2" fill="none" stroke="#1e293b" strokeWidth="2" />
      <rect x="58" y="70" width="12" height="8" rx="2" fill="none" stroke="#1e293b" strokeWidth="2" />
      <line x1="54" y1="74" x2="58" y2="74" stroke="#1e293b" strokeWidth="2" />
      {/* Laptop */}
      <path d="M80 150 L120 150 L130 180 L70 180 Z" fill="#e2e8f0" filter="url(#shadow)" />
      <path d="M120 150 L120 120 L80 120 L80 150 Z" fill="#94a3b8" />
      {/* Hands */}
      <circle cx="85" cy="155" r="6" fill="#fed7aa" />
      <circle cx="105" cy="155" r="6" fill="#fed7aa" />
    </g>

    {/* Right Character (Manager/Designer) */}
    <g transform="translate(280, 160)">
      {/* Chair */}
      <path d="M20 200 H80 V220 H20 Z" fill="#475569" />
      <path d="M40 220 H60 V250 H40 Z" fill="#334155" />
      <path d="M30 250 H70 V260 H30 Z" fill="#1e293b" />
      <path d="M30 140 V200" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
      {/* Body */}
      <path d="M25 140 C25 120 75 120 75 140 V200 H25 Z" fill="#2563eb" /> {/* Blue Shirt */}
      {/* Head */}
      <circle cx="50" cy="95" r="22" fill="#fde047" />
      {/* Hair */}
      <path d="M28 95 C28 75 72 75 72 95 C72 85 28 85 28 95 Z" fill="#78350f" />
      {/* Glasses */}
      <rect x="37" y="90" width="12" height="8" rx="2" fill="none" stroke="#78350f" strokeWidth="2" />
      <rect x="53" y="90" width="12" height="8" rx="2" fill="none" stroke="#78350f" strokeWidth="2" />
      <line x1="49" y1="94" x2="53" y2="94" stroke="#78350f" strokeWidth="2" />
      {/* Laptop */}
      <path d="M10 170 L50 170 L60 200 L0 200 Z" fill="#cbd5e1" filter="url(#shadow)" />
      <path d="M10 170 L10 140 L50 140 L50 170 Z" fill="#94a3b8" />
      {/* Hands */}
      <circle cx="20" cy="175" r="6" fill="#fde047" />
      <circle cx="40" cy="175" r="6" fill="#fde047" />
    </g>

    {/* Floating Tech Icons / Elements */}
    <g filter="url(#shadow)">
      <rect x="220" y="80" width="60" height="40" rx="8" fill="#fff" />
      <text x="250" y="105" textAnchor="middle" fill="#2563eb" fontWeight="bold" fontSize="14">&lt;/&gt;</text>
      
      <circle cx="80" cy="80" r="20" fill="#22c55e" />
      <path d="M73 80 L78 85 L87 75" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="380" y="240" width="80" height="50" rx="8" fill="#fff" />
      <line x1="395" y1="255" x2="445" y2="255" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
      <line x1="395" y1="265" x2="430" y2="265" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
      <line x1="395" y1="275" x2="415" y2="275" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
    </g>
  </svg>
);

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          
          <h1 className="hero-title">Build Your Project with <span>US</span></h1>
          <p className="hero-desc">
           We turn your ideas into scalable digital products. From concept to launch, our team handles design, development, and deployment so you don't have to juggle multiple vendors. <br/>
          <b> Launch faster. Grow with confidence. Stay ahead of the competition.</b>
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Reach Out To Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
