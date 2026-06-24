'use client';

import React, { useState } from 'react';

const PortfolioMockup = ({ type }) => {
  const isWeb = type === 'web';
  return (
    <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', borderRadius: '12px' }}>
      <rect width="500" height="320" rx="12" fill="#0f172a" />
      {/* Browser Header */}
      <rect x="0" y="0" width="500" height="30" rx="12" fill="#1e293b" />
      <circle cx="20" cy="15" r="5" fill="#ef4444" />
      <circle cx="35" cy="15" r="5" fill="#f59e0b" />
      <circle cx="50" cy="15" r="5" fill="#10b981" />
      <rect x="80" y="7" width="340" height="16" rx="8" fill="#0f172a" />

      {isWeb ? (
        // Web Application Design
        <g>
          {/* Sidebar */}
          <rect x="15" y="45" width="90" height="260" rx="6" fill="#1e293b" opacity="0.6" />
          <rect x="25" y="65" width="70" height="12" rx="4" fill="#3b82f6" />
          <rect x="25" y="95" width="70" height="8" rx="4" fill="#475569" />
          <rect x="25" y="115" width="70" height="8" rx="4" fill="#475569" />
          <rect x="25" y="135" width="70" height="8" rx="4" fill="#475569" />
          
          {/* Main Area */}
          <rect x="120" y="45" width="365" height="260" rx="6" fill="#1e293b" opacity="0.3" />
          
          {/* Cards */}
          <rect x="135" y="65" width="160" height="100" rx="8" fill="#1e293b" />
          <text x="150" y="95" fill="#fff" fontSize="12" fontWeight="bold">Nikhal Words</text>
          <text x="150" y="115" fill="#94a3b8" fontSize="8">Content Management System</text>
          <rect x="150" y="130" width="60" height="15" rx="4" fill="#10b981" />
          <text x="180" y="140" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">Active</text>

          <rect x="310" y="65" width="160" height="100" rx="8" fill="#1e293b" />
          <circle cx="390" cy="115" r="30" fill="none" stroke="#6366f1" strokeWidth="8" strokeDasharray="140 40" />
          <text x="390" y="119" fill="#fff" fontSize="12" textAnchor="middle" fontWeight="bold">78%</text>

          {/* Graph/Chart below */}
          <rect x="135" y="180" width="335" height="110" rx="8" fill="#1e293b" />
          <path d="M150 260 L200 220 L250 240 L300 200 L350 230 L400 195 L450 215" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M150 260 L200 220 L250 240 L300 200 L350 230 L400 195 L450 215 L450 270 L150 270 Z" fill="url(#chartGrad)" opacity="0.1" />
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </g>
      ) : (
        // Mobile Application Design
        <g>
          {/* Phone Frame */}
          <rect x="175" y="40" width="150" height="270" rx="20" fill="#1e293b" stroke="#475569" strokeWidth="4" />
          <rect x="230" y="48" width="40" height="8" rx="4" fill="#0f172a" />
          
          {/* Phone Screen */}
          <rect x="183" y="65" width="134" height="235" rx="12" fill="#0f172a" />
          
          {/* App Header */}
          <text x="250" y="85" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">Fintech App</text>
          
          {/* Card */}
          <rect x="193" y="100" width="114" height="60" rx="8" fill="url(#grad1)" />
          <text x="205" y="120" fill="#fff" fontSize="8">Balance</text>
          <text x="205" y="140" fill="#fff" fontSize="14" fontWeight="bold">$12,450.00</text>
          
          {/* List items */}
          <rect x="193" y="175" width="114" height="25" rx="6" fill="#1e293b" />
          <circle cx="205" cy="187.5" r="6" fill="#10b981" />
          <rect x="220" y="183" width="50" height="8" rx="3" fill="#94a3b8" />
          <text x="295" y="190" fill="#10b981" fontSize="8" textAnchor="end">+$250</text>

          <rect x="193" y="208" width="114" height="25" rx="6" fill="#1e293b" />
          <circle cx="205" cy="220" r="6" fill="#ef4444" />
          <rect x="220" y="216" width="60" height="8" rx="3" fill="#94a3b8" />
          <text x="295" y="223" fill="#ef4444" fontSize="8" textAnchor="end">-$89</text>

          <rect x="193" y="241" width="114" height="25" rx="6" fill="#1e293b" />
          <circle cx="205" cy="253" r="6" fill="#3b82f6" />
          <rect x="220" y="249" width="45" height="8" rx="3" fill="#94a3b8" />
          <text x="295" y="256" fill="#3b82f6" fontSize="8" textAnchor="end">+$1,200</text>
        </g>
      )}
    </svg>
  );
};

const portfolioItems = [
  {
    id: 0,
    title: 'Project Title',
    desc: 'We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.',
    image: '/images/side2.png'
  },
  {
    id: 1,
    title: 'Earth Skincare',
    desc: 'A premium design and e-commerce experience for organic skincare products. We crafted a minimal visual language, eco-friendly packaging layouts, and a lightning-fast Shopify storefront that elevates brand presence globally.',
    image: '/images/side2.png'
  },
  {
    id: 2,
    title: 'Roof Hotel',
    desc: 'An elegant, interactive booking system and branding package for luxury hospitality. We built custom booking flows, guest portal animations, and a rich, responsive corporate site that enhances direct bookings.',
    image: '/images/side2.png'
  },
  {
    id: 3,
    title: 'Mattia Restaurant',
    desc: 'Art direction, logo design, and high-performance menus for an upscale restaurant group. We designed a cohesive digital identity and table reservation platform that drove bookings up by 45%.',
    image: '/images/side2.png'
  }
];

export default function Portfolio() {
  const [activePortfolio, setActivePortfolio] = useState(0);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color : '#000000', fontSize : '1.75rem', fontWeight : '700' }}>Contribution To Our Customers' Success</h2>

        <div className="portfolio-grid">
          <div className="portfolio-showcase-new">
            <img 
              src={portfolioItems[activePortfolio].image} 
              alt={portfolioItems[activePortfolio].title} 
              className="portfolio-image-new" 
            />
          </div>
          <div className="portfolio-details">
            <h3 className="portfolio-title-new">{portfolioItems[activePortfolio].title}</h3>
            <p className="portfolio-desc-new">{portfolioItems[activePortfolio].desc}</p>
            
            <div className="portfolio-thumbnails-container">
              <div className="portfolio-thumbnails-new">
                {portfolioItems.map((item, idx) => (
                  <div 
                    key={item.id}
                    className={`portfolio-thumb-new ${activePortfolio === idx ? 'active' : ''}`}
                    onClick={() => setActivePortfolio(idx)}
                  >
                    <img src={item.image} alt={item.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { PortfolioMockup, portfolioItems };
