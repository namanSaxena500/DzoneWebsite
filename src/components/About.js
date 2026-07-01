import React from 'react';

const TeamIllustration = () => (
  <svg viewBox="0 0 500 355" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-svg">
    <defs>
      <linearGradient id="officeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    <rect width="500" height="355" rx="12" fill="url(#officeGrad)" />

    {/* Office Background details */}
    <rect x="40" y="40" width="120" height="80" rx="4" fill="#cbd5e1" opacity="0.5" />
    <line x1="50" y1="100" x2="150" y2="100" stroke="#94a3b8" strokeWidth="2" />
    <line x1="70" y1="70" x2="130" y2="70" stroke="#94a3b8" strokeWidth="4" />

    {/* Large Monitor */}
    <rect x="180" y="120" width="140" height="90" rx="6" fill="#1e293b" />
    <rect x="190" y="130" width="120" height="70" rx="2" fill="#384252" />
    <path d="M240 210 H260 V240 H240 Z" fill="#475569" />
    <path d="M220 240 H280 V250 H220 Z" fill="#334155" />

    {/* Code lines on monitor */}
    <line x1="200" y1="145" x2="250" y2="145" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
    <line x1="200" y1="155" x2="280" y2="155" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
    <line x1="200" y1="165" x2="230" y2="165" stroke="#fb7185" strokeWidth="4" strokeLinecap="round" />
    <line x1="200" y1="175" x2="270" y2="175" stroke="#facc15" strokeWidth="4" strokeLinecap="round" />

    {/* Team Members Symbolized */}
    <g transform="translate(100, 160)">
      <circle cx="30" cy="40" r="20" fill="#93c5fd" />
      <path d="M10 90 C10 65 50 65 50 90 Z" fill="#1e3a8a" />
    </g>
    <g transform="translate(320, 150)">
      <circle cx="30" cy="40" r="20" fill="#fca5a5" />
      <path d="M10 90 C10 65 50 65 50 90 Z" fill="#7f1d1d" />
    </g>

    {/* Plant */}
    <rect x="20" y="260" width="30" height="50" rx="4" fill="#a27b5c" />
    <path d="M15 260 C5 220 30 200 35 220 C40 200 65 220 55 260 Z" fill="#22c55e" />
  </svg>
);

export default function About() {
  return (
    <section id="about" className="features">
      <div className="container">
        <h2 className="features-section-title">Creating the Modern Web. Expanding Your Digital Prospects</h2>
        <p className="features-section-subtitle">We don't just write code — we build digital foundations.</p>
        
        <div className="features-grid">
          <div className="features-image-container">
            <img src="/images/side1.png" alt="Team Working" className="features-image" />
          </div>
          <div className="features-content">
            <h3 className="features-focus-title">We focus on:</h3>
            <div className="features-list">
              <div className="feature-item">
                <img src="/images/bullet.png" alt="check" className="feature-bullet-img" />
                <p className="feature-text-new">
                  <strong>Blazing-Fast Performance</strong> that eliminates friction and keeps users engaged.
                </p>
              </div>
              <div className="feature-item">
                <img src="/images/bullet.png" alt="check" className="feature-bullet-img" />
                <p className="feature-text-new">
                  <strong>Robust Scalability</strong> that supports massive traffic and long-term growth.
                </p>
              </div>
              <div className="feature-item">
                <img src="/images/bullet.png" alt="check" className="feature-bullet-img" />
                <p className="feature-text-new">
                  <strong>Pixel-Perfect UX</strong> that feels completely effortless and intuitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { TeamIllustration };
