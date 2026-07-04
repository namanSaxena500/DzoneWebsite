'use client';

import React from 'react';

/**
 * Premium SVG Visual Mockups for Technology and Service Detail Pages.
 * Ensures 100% unique, zero-duplication graphics across all sub-pages.
 */
export default function UniquePageVisual({ slug, type = 'intro', fallbackImage = '/images/side1.png' }) {
  const normalizedSlug = (slug || '').toLowerCase();

  // Helper for rendering a premium smartphone template
  const renderPhoneFrame = (accentColor, title, children) => {
    return (
      <svg viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', maxWidth: '280px', margin: '0 auto', display: 'block' }}>
        {/* Shadow */}
        <rect x="10" y="10" width="300" height="460" rx="36" fill="rgba(0, 0, 0, 0.25)" filter="blur(8px)" />
        {/* Outer Bezel */}
        <rect x="10" y="10" width="300" height="460" rx="36" fill="#1e293b" stroke="#334155" strokeWidth="4" />
        {/* Screen Frame */}
        <rect x="18" y="18" width="284" height="444" rx="28" fill="#0f172a" />
        {/* Dynamic Island / Notch */}
        <rect x="100" y="26" width="120" height="18" rx="9" fill="#020617" />
        <circle cx="112" cy="35" r="3.5" fill="#1e293b" />
        
        {/* Status Bar */}
        <text x="35" y="38" fill="#94a3b8" fontSize="8" fontWeight="bold">9:41</text>
        <rect x="250" y="31" width="14" height="8" rx="2" stroke="#94a3b8" strokeWidth="1" fill="none" />
        <rect x="252" y="33" width="8" height="4" fill="#94a3b8" />
        <circle cx="270" cy="35" r="1.5" fill="#94a3b8" />
        <circle cx="275" cy="35" r="1.5" fill="#94a3b8" />
        
        {/* Phone Content Area */}
        <g transform="translate(18, 50)">
          <rect x="0" y="0" width="284" height="45" fill="#1e293b" opacity="0.4" />
          <text x="20" y="26" fill="#ffffff" fontSize="12" fontWeight="bold">{title}</text>
          <circle cx="250" cy="22" r="10" fill={accentColor} opacity="0.8" />
          
          {children}
        </g>
        <rect x="110" y="450" width="100" height="4" rx="2" fill="#94a3b8" />
      </svg>
    );
  };

  // ==========================================
  // 1. REACT NATIVE VISUALS (Mobile Store UI)
  // ==========================================
  if (normalizedSlug === 'reactnative') {
    if (type === 'intro') {
      return renderPhoneFrame('#61dafb', 'React Native Store', (
        <g>
          <rect x="15" y="60" width="254" height="90" rx="12" fill="url(#rnPromoGrad)" />
          <text x="30" y="95" fill="#ffffff" fontSize="14" fontWeight="bold">Summer Sale</text>
          <text x="30" y="115" fill="#e0f2fe" fontSize="9">Get up to 50% off tech items</text>
          
          <text x="15" y="175" fill="#ffffff" fontSize="11" fontWeight="bold">Featured Products</text>

          <rect x="15" y="190" width="117" height="110" rx="8" fill="#1e293b" />
          <rect x="25" y="200" width="97" height="50" rx="6" fill="#0f172a" />
          <circle cx="73.5" cy="225" r="14" fill="#61dafb" opacity="0.15" />
          <path d="M65 225 L70 230 L82 218" stroke="#61dafb" strokeWidth="2" strokeLinecap="round" />
          <text x="25" y="268" fill="#ffffff" fontSize="9" fontWeight="bold">React Watch</text>
          <text x="25" y="284" fill="#61dafb" fontSize="9" fontWeight="bold">$199.00</text>

          <rect x="148" y="190" width="117" height="110" rx="8" fill="#1e293b" />
          <rect x="158" y="200" width="97" height="50" rx="6" fill="#0f172a" />
          <circle cx="206.5" cy="225" r="14" fill="#61dafb" opacity="0.15" />
          <rect x="196.5" y="215" width="20" height="20" rx="4" fill="#61dafb" opacity="0.4" />
          <text x="158" y="268" fill="#ffffff" fontSize="9" fontWeight="bold">Native Pods</text>
          <text x="158" y="284" fill="#61dafb" fontSize="9" fontWeight="bold">$149.00</text>
          
          <rect x="0" y="340" width="284" height="45" fill="#1e293b" />
          <circle cx="50" cy="362.5" r="6" fill="#61dafb" />
          <circle cx="142" cy="362.5" r="6" fill="#94a3b8" />
          <circle cx="234" cy="362.5" r="6" fill="#94a3b8" />

          <defs>
            <linearGradient id="rnPromoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#2E3092" />
            </linearGradient>
          </defs>
        </g>
      ));
    }
    return renderPhoneFrame('#61dafb', 'Sales Analytics', (
      <g>
        <rect x="15" y="60" width="117" height="60" rx="8" fill="#1e293b" />
        <text x="25" y="80" fill="#94a3b8" fontSize="8">TOTAL REVENUE</text>
        <text x="25" y="102" fill="#ffffff" fontSize="14" fontWeight="bold">$14,230</text>

        <rect x="148" y="60" width="117" height="60" rx="8" fill="#1e293b" />
        <text x="158" y="80" fill="#94a3b8" fontSize="8">ACTIVE VISITORS</text>
        <text x="158" y="102" fill="#0df" fontSize="14" fontWeight="bold">1,840</text>

        <rect x="15" y="135" width="250" height="150" rx="10" fill="#1e293b" />
        <text x="30" y="158" fill="#ffffff" fontSize="10" fontWeight="bold">Weekly Conversions</text>
        
        <line x1="30" y1="210" x2="250" y2="210" stroke="#334155" strokeWidth="1" />
        <line x1="30" y1="250" x2="250" y2="250" stroke="#334155" strokeWidth="1" />

        <path d="M40 250 L80 200 L120 220 L160 180 L200 230 L240 190" stroke="#61dafb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="160" cy="180" r="4" fill="#ffffff" stroke="#61dafb" strokeWidth="2" />

        <text x="40" y="272" fill="#94a3b8" fontSize="7" textAnchor="middle">Mon</text>
        <text x="100" y="272" fill="#94a3b8" fontSize="7" textAnchor="middle">Wed</text>
        <text x="160" y="272" fill="#94a3b8" fontSize="7" textAnchor="middle">Fri</text>
        <text x="220" y="272" fill="#94a3b8" fontSize="7" textAnchor="middle">Sun</text>
      </g>
    ));
  }

  // ==========================================
  // 2. FLUTTER VISUALS (Mobile Fitness/Travel UI)
  // ==========================================
  if (normalizedSlug === 'flutter') {
    if (type === 'intro') {
      return renderPhoneFrame('#02569B', 'Flutter Fitness', (
        <g>
          <rect x="15" y="60" width="250" height="140" rx="12" fill="#1e293b" />
          <circle cx="140" cy="120" r="40" fill="none" stroke="#0f172a" strokeWidth="8" />
          <circle cx="140" cy="120" r="40" fill="none" stroke="#0175C2" strokeWidth="8" strokeDasharray="180 80" strokeLinecap="round" />
          <text x="140" y="123" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">7,480</text>
          <text x="140" y="135" fill="#0175C2" fontSize="7" textAnchor="middle">STEPS TODAY</text>

          <rect x="15" y="215" width="117" height="60" rx="8" fill="#1e293b" />
          <text x="25" y="235" fill="#94a3b8" fontSize="8">CALORIES BURNED</text>
          <text x="25" y="258" fill="#ffffff" fontSize="13" fontWeight="bold">342 kcal</text>

          <rect x="148" y="215" width="117" height="60" rx="8" fill="#1e293b" />
          <text x="158" y="235" fill="#94a3b8" fontSize="8">ACTIVE TIME</text>
          <text x="158" y="258" fill="#0175C2" fontSize="13" fontWeight="bold">45 min</text>
          
          <rect x="0" y="340" width="284" height="45" fill="#1e293b" />
          <circle cx="50" cy="362.5" r="6" fill="#0175C2" />
          <circle cx="142" cy="362.5" r="6" fill="#94a3b8" />
          <circle cx="234" cy="362.5" r="6" fill="#94a3b8" />
        </g>
      ));
    }
    return renderPhoneFrame('#02569B', 'Travel Explorer', (
      <g>
        <rect x="15" y="60" width="250" height="30" rx="6" fill="#1e293b" />
        <text x="30" y="78" fill="#94a3b8" fontSize="9">Search flights, hotels...</text>

        <rect x="15" y="105" width="250" height="100" rx="10" fill="#1e293b" />
        <rect x="25" y="115" width="80" height="80" rx="8" fill="#0f172a" />
        <circle cx="65" cy="155" r="15" fill="#0175C2" opacity="0.3" />
        
        <text x="120" y="135" fill="#ffffff" fontSize="11" fontWeight="bold">Bali Island Resort</text>
        <text x="120" y="152" fill="#94a3b8" fontSize="8">Indonesia . Beach Hotel</text>
        
        <circle cx="123" cy="165" r="2.5" fill="#f59e0b" />
        <circle cx="130" cy="165" r="2.5" fill="#f59e0b" />
        <circle cx="137" cy="165" r="2.5" fill="#f59e0b" />
        <circle cx="144" cy="165" r="2.5" fill="#f59e0b" />
        
        <text x="120" y="188" fill="#0175C2" fontSize="11" fontWeight="bold">$120 / night</text>

        <rect x="15" y="220" width="250" height="80" rx="10" fill="#1e293b" />
        <rect x="25" y="230" width="60" height="60" rx="8" fill="#0f172a" />
        <text x="100" y="250" fill="#ffffff" fontSize="11" fontWeight="bold">Paris Boutique Hotel</text>
        <text x="100" y="265" fill="#94a3b8" fontSize="8">France . Luxury Suite</text>
      </g>
    ));
  }

  // ==========================================
  // 3. REACT WEB ENGINE VISUALS
  // ==========================================
  if (normalizedSlug === 'react') {
    if (type === 'intro') {
      return (
        <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
          <rect width="500" height="340" rx="12" fill="#0f172a" />
          <rect x="15" y="15" width="470" height="30" rx="6" fill="#1e293b" />
          <circle cx="35" cy="30" r="5" fill="#ef4444" />
          <circle cx="50" cy="30" r="5" fill="#f59e0b" />
          <circle cx="65" cy="30" r="5" fill="#10b981" />
          <text x="250" y="35" fill="#94a3b8" fontSize="11" textAnchor="middle">React Virtual DOM Tree</text>
          
          <circle cx="250" cy="180" r="16" fill="#61dafb" />
          <ellipse cx="250" cy="180" rx="45" ry="16" stroke="#61dafb" strokeWidth="2" fill="none" transform="rotate(30 250 180)" opacity="0.6" />
          <ellipse cx="250" cy="180" rx="45" ry="16" stroke="#61dafb" strokeWidth="2" fill="none" transform="rotate(-30 250 180)" opacity="0.6" />
          <ellipse cx="250" cy="180" rx="45" ry="16" stroke="#61dafb" strokeWidth="2" fill="none" transform="rotate(90 250 180)" opacity="0.6" />

          <line x1="250" y1="196" x2="250" y2="240" stroke="#61dafb" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="234" y1="180" x2="160" y2="200" stroke="#61dafb" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="266" y1="180" x2="340" y2="200" stroke="#61dafb" strokeWidth="1.5" strokeDasharray="3 3" />

          <rect x="120" y="185" width="80" height="30" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
          <text x="160" y="204" fill="#38bdf8" fontSize="9" textAnchor="middle" fontWeight="bold">props change</text>

          <rect x="300" y="185" width="80" height="30" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
          <text x="340" y="204" fill="#38bdf8" fontSize="9" textAnchor="middle" fontWeight="bold">state change</text>

          <rect x="210" y="240" width="80" height="30" rx="4" fill="#0284c7" />
          <text x="250" y="259" fill="#fff" fontSize="9" textAnchor="middle" fontWeight="bold">Render DOM</text>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
        <rect width="500" height="340" rx="12" fill="#0f172a" />
        <text x="30" y="60" fill="#f43f5e" fontSize="12" fontFamily="monospace">import </text>
        <text x="80" y="60" fill="#fff" fontSize="12" fontFamily="monospace">React, &#123; useState &#125;</text>
        <text x="240" y="60" fill="#f43f5e" fontSize="12" fontFamily="monospace"> from </text>
        <text x="290" y="60" fill="#38bdf8" fontSize="12" fontFamily="monospace">'react';</text>

        <text x="30" y="90" fill="#e2e8f0" fontSize="12" fontFamily="monospace">function CounterComponent() &#123;</text>
        <text x="50" y="120" fill="#f43f5e" fontSize="12" fontFamily="monospace">  const </text>
        <text x="100" y="120" fill="#fff" fontSize="12" fontFamily="monospace">[count, setCount] = </text>
        <text x="240" y="120" fill="#38bdf8" fontSize="12" fontFamily="monospace">useState(0);</text>

        <text x="50" y="160" fill="#f43f5e" fontSize="12" fontFamily="monospace">  return (</text>
        <text x="70" y="190" fill="#38bdf8" fontSize="12" fontFamily="monospace">    &lt;div className="react-card"&gt;</text>
        <text x="90" y="220" fill="#38bdf8" fontSize="12" fontFamily="monospace">      &lt;button onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;</text>
        <text x="110" y="250" fill="#fff" fontSize="12" fontFamily="monospace">        Count: &#123;count&#125;</text>
        <text x="90" y="280" fill="#38bdf8" fontSize="12" fontFamily="monospace">      &lt;/button&gt;</text>
        <text x="70" y="310" fill="#38bdf8" fontSize="12" fontFamily="monospace">    &lt;/div&gt;</text>
        <text x="30" y="330" fill="#e2e8f0" fontSize="12" fontFamily="monospace">  &#125;</text>
      </svg>
    );
  }

  // 4. NEXT.JS VISUALS
  if (normalizedSlug === 'nextjs') {
    if (type === 'intro') {
      return (
        <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
          <rect width="500" height="340" rx="12" fill="#000000" stroke="#1e1e1e" strokeWidth="1" />
          <rect x="20" y="20" width="460" height="30" rx="6" fill="#111111" />
          <text x="250" y="38" fill="#ffffff" fontSize="12" fontWeight="bold" letterSpacing="2" textAnchor="middle">NEXT.JS EDGE ROUTING</text>
          
          <rect x="40" y="130" width="100" height="40" rx="8" fill="#111111" stroke="#333333" strokeWidth="1" />
          <text x="90" y="154" fill="#ffffff" fontSize="10" textAnchor="middle">Client Request</text>
          <path d="M150 150 L200 150" stroke="#ffffff" strokeWidth="2" />
          
          <rect x="210" y="120" width="90" height="60" rx="8" fill="#1e1e1e" stroke="#ffffff" strokeWidth="1.5" />
          <text x="255" y="145" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Edge Server</text>
          <text x="255" y="160" fill="#888888" fontSize="8" textAnchor="middle">Middleware.js</text>
          <path d="M310 150 L360 150" stroke="#ffffff" strokeWidth="2" />

          <rect x="370" y="90" width="90" height="35" rx="6" fill="#111" stroke="#0070f3" strokeWidth="1" />
          <text x="415" y="112" fill="#0070f3" fontSize="9" fontWeight="bold" textAnchor="middle">Server Component</text>

          <rect x="370" y="140" width="90" height="35" rx="6" fill="#111" stroke="#00dfd8" strokeWidth="1" />
          <text x="415" y="162" fill="#00dfd8" fontSize="9" fontWeight="bold" textAnchor="middle">Static pre-render</text>

          <rect x="370" y="190" width="90" height="35" rx="6" fill="#111" stroke="#ff0080" strokeWidth="1" />
          <text x="415" y="212" fill="#ff0080" fontSize="9" fontWeight="bold" textAnchor="middle">Client Hydrate</text>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
        <rect width="500" height="340" rx="12" fill="#000" />
        <text x="40" y="60" fill="#888" fontSize="12" fontFamily="monospace">▲ Next.js Build Compiler</text>
        <text x="40" y="100" fill="#00ff00" fontSize="12" fontFamily="monospace">✓ Compiled successfully</text>
        <text x="40" y="140" fill="#fff" fontSize="11" fontFamily="monospace">Route (app)                           Size     Type</text>
        <text x="40" y="165" fill="#888" fontSize="11" fontFamily="monospace">┌ ○ /                                 2.4 kB   (Static)</text>
      </svg>
    );
  }

  // 5. VUE VISUALS
  if (normalizedSlug === 'vue') {
    if (type === 'intro') {
      return (
        <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
          <rect width="500" height="340" rx="12" fill="#1a1a1a" />
          <rect x="20" y="20" width="460" height="30" rx="6" fill="#2d2d2d" />
          <text x="250" y="38" fill="#42b883" fontSize="12" fontWeight="bold" textAnchor="middle">Vue Single File Component (.vue)</text>

          <rect x="40" y="80" width="420" height="60" rx="6" fill="#2d2d2d" stroke="#42b883" strokeWidth="1" />
          <text x="60" y="105" fill="#42b883" fontSize="11" fontWeight="bold">&lt;template&gt;</text>
          <text x="60" y="125" fill="#888" fontSize="10">&lt;div class="card"&gt; &#123;&#123; message &#125;&#125; &lt;/div&gt;</text>

          <rect x="40" y="160" width="420" height="80" rx="6" fill="#2d2d2d" stroke="#35495e" strokeWidth="1" />
          <text x="60" y="185" fill="#35495e" fontSize="11" fontWeight="bold">&lt;script setup&gt;</text>
          <text x="60" y="205" fill="#888" fontSize="10">import &#123; ref &#125; from 'vue';</text>
          <text x="60" y="225" fill="#888" fontSize="10">const message = ref('Hello Vue!');</text>

          <rect x="40" y="260" width="420" height="60" rx="6" fill="#2d2d2d" stroke="#42b883" strokeWidth="1" />
          <text x="60" y="285" fill="#42b883" fontSize="11" fontWeight="bold">&lt;style scoped&gt;</text>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
        <rect width="500" height="340" rx="12" fill="#1a1a1a" />
        <text x="40" y="60" fill="#42b883" fontSize="12" fontFamily="monospace">const app = createApp(&#123;</text>
      </svg>
    );
  }

  // 6. ANGULAR VISUALS
  if (normalizedSlug === 'angular') {
    if (type === 'intro') {
      return (
        <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
          <rect width="500" height="340" rx="12" fill="#1e1e24" />
          <rect x="20" y="20" width="460" height="30" rx="6" fill="#121214" />
          <text x="250" y="38" fill="#dd0031" fontSize="12" fontWeight="bold" textAnchor="middle">Angular Component Architecture</text>

          <rect x="40" y="80" width="420" height="70" rx="6" fill="#121214" stroke="#dd0031" strokeWidth="1.5" />
          <text x="60" y="110" fill="#dd0031" fontSize="11" fontWeight="bold">@Component decorator</text>
          <text x="60" y="130" fill="#a4a4a8" fontSize="10">selector: 'app-root', template: '&lt;router-outlet&gt;&lt;/router-outlet&gt;'</text>

          <rect x="40" y="170" width="200" height="130" rx="6" fill="#121214" stroke="#a4a4a8" strokeWidth="1" />
          <text x="60" y="195" fill="#ffffff" fontSize="10" fontWeight="bold">app.component.ts</text>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
        <rect width="500" height="340" rx="12" fill="#1e1e24" />
        <text x="40" y="60" fill="#dd0031" fontSize="12" fontFamily="monospace">import &#123; Component &#125; from '@angular/core';</text>
      </svg>
    );
  }

  // 7. FIGMA VISUALS
  if (normalizedSlug === 'figma') {
    if (type === 'intro') {
      return (
        <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
          <rect width="500" height="340" rx="12" fill="#2c2c2c" />
          <rect x="30" y="40" width="120" height="260" rx="8" fill="#1e1e1e" stroke="#333" strokeWidth="1" />
          <text x="45" y="70" fill="#ffffff" fontSize="11" fontWeight="bold">Components</text>
          
          <rect x="45" y="90" width="90" height="25" rx="4" fill="#333" />
          <circle cx="60" cy="102.5" r="5" fill="#f24e1e" />

          <rect x="45" y="125" width="90" height="25" rx="4" fill="#333" />
          <circle cx="60" cy="137.5" r="5" fill="#a259ff" />

          <rect x="175" y="40" width="295" height="260" rx="8" fill="#1e1e1e" />
          <circle cx="280" cy="150" r="40" fill="#a259ff" opacity="0.6" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
        <rect width="500" height="340" rx="12" fill="#2c2c2c" />
        <text x="30" y="60" fill="#ffffff" fontSize="12" fontWeight="bold">Inspect CSS Properties</text>
      </svg>
    );
  }

  // ==========================================
  // 8. POSTGRESQL VISUALS (Relational Tables)
  // ==========================================
  if (normalizedSlug === 'postgresql') {
    if (type === 'intro') {
      return (
        <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
          <rect width="500" height="340" rx="12" fill="#1e293b" />
          <rect x="15" y="15" width="470" height="30" rx="6" fill="#0f172a" />
          <text x="250" y="34" fill="#94a3b8" fontSize="11" textAnchor="middle" fontWeight="bold">PostgreSQL Relational Schema</text>

          {/* Users Table */}
          <rect x="30" y="70" width="180" height="105" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
          <rect x="30" y="70" width="180" height="25" rx="6" fill="#3b82f6" opacity="0.2" />
          <text x="40" y="87" fill="#3b82f6" fontSize="10" fontWeight="bold">Table: users</text>
          <text x="40" y="112" fill="#ffffff" fontSize="9">🔑 id: SERIAL (PK)</text>
          <text x="40" y="132" fill="#94a3b8" fontSize="9">📧 email: VARCHAR(255)</text>
          <text x="40" y="152" fill="#94a3b8" fontSize="9">👤 name: VARCHAR(100)</text>

          {/* Orders Table */}
          <rect x="290" y="150" width="180" height="125" rx="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
          <rect x="290" y="150" width="180" height="25" rx="6" fill="#3b82f6" opacity="0.2" />
          <text x="300" y="167" fill="#3b82f6" fontSize="10" fontWeight="bold">Table: orders</text>
          <text x="300" y="192" fill="#ffffff" fontSize="9">🔑 id: SERIAL (PK)</text>
          <text x="300" y="212" fill="#10b981" fontSize="9">🔗 user_id: INTEGER (FK)</text>
          <text x="300" y="232" fill="#94a3b8" fontSize="9">💰 amount: DECIMAL(10,2)</text>
          <text x="300" y="252" fill="#94a3b8" fontSize="9">📅 created_at: TIMESTAMP</text>

          {/* Relational connection line */}
          <path d="M210 112 L250 112 L250 212 L290 212" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <circle cx="210" cy="112" r="3" fill="#10b981" />
          <polygon points="290 212, 284 209, 284 215" fill="#10b981" />

          {/* Indexing card */}
          <rect x="30" y="195" width="180" height="80" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="40" y="215" fill="#10b981" fontSize="9" fontWeight="bold">B-Tree Database Index</text>
          <text x="40" y="235" fill="#94a3b8" fontSize="8" fontFamily="monospace">CREATE INDEX idx_users_email</text>
          <text x="40" y="250" fill="#94a3b8" fontSize="8" fontFamily="monospace">ON users(email);</text>
        </svg>
      );
    }
    // PostgreSQL Feature: SQL console
    return (
      <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
        <rect width="500" height="340" rx="12" fill="#0f172a" />
        <rect x="20" y="20" width="460" height="300" rx="6" fill="#020617" />
        {/* Terminal Header */}
        <path d="M20 50 L480 50" stroke="#1e293b" strokeWidth="1" />
        <circle cx="35" cy="35" r="4" fill="#ef4444" />
        <circle cx="47" cy="35" r="4" fill="#f59e0b" />
        <circle cx="59" cy="35" r="4" fill="#10b981" />
        <text x="250" y="38" fill="#475569" fontSize="9" fontFamily="monospace" textAnchor="middle">postgres-cli --console</text>

        {/* SQL text */}
        <text x="35" y="80" fill="#38bdf8" fontSize="11" fontFamily="monospace">postgres=# BEGIN;</text>
        <text x="35" y="105" fill="#e2e8f0" fontSize="11" fontFamily="monospace">postgres=# SELECT * FROM users WHERE active = true;</text>
        
        {/* Mock query response rows */}
        <text x="35" y="130" fill="#888" fontSize="9" fontFamily="monospace"> id |       email        |   name    | active </text>
        <text x="35" y="145" fill="#888" fontSize="9" fontFamily="monospace">----+--------------------+-----------+--------</text>
        <text x="35" y="160" fill="#e2e8f0" fontSize="9" fontFamily="monospace">  1 | user@domain.com    | Alex Dev  | t      </text>
        <text x="35" y="175" fill="#e2e8f0" fontSize="9" fontFamily="monospace">  2 | guest@jaipur.org   | Jpr Guest | t      </text>
        <text x="35" y="190" fill="#888" fontSize="9" fontFamily="monospace">(2 rows)</text>

        <text x="35" y="225" fill="#e2e8f0" fontSize="11" fontFamily="monospace">postgres=# UPDATE users SET active = false WHERE id = 2;</text>
        <text x="35" y="245" fill="#10b981" fontSize="9" fontFamily="monospace">UPDATE 1</text>
        
        <text x="35" y="275" fill="#38bdf8" fontSize="11" fontFamily="monospace">postgres=# COMMIT;</text>
        <text x="35" y="295" fill="#10b981" fontSize="9" fontFamily="monospace">COMMIT TRANSACTION</text>
      </svg>
    );
  }

  // ==========================================
  // 9. MONGODB VISUALS (JSON Document Tree)
  // ==========================================
  if (normalizedSlug === 'mongodb') {
    if (type === 'intro') {
      return (
        <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
          <rect width="500" height="340" rx="12" fill="#0b0f19" />
          <rect x="15" y="15" width="470" height="30" rx="6" fill="#131b2e" />
          <text x="250" y="34" fill="#00ed64" fontSize="11" textAnchor="middle" fontWeight="bold">MongoDB NoSQL BSON Document</text>

          {/* JSON Tree lines */}
          <text x="40" y="80" fill="#f43f5e" fontSize="12" fontFamily="monospace">&#123;</text>
          <text x="60" y="105" fill="#00ed64" fontSize="11" fontFamily="monospace">"_id": </text>
          <text x="110" y="105" fill="#38bdf8" fontSize="11" fontFamily="monospace">ObjectId("65a0b73c2a12")</text>

          <text x="60" y="130" fill="#00ed64" fontSize="11" fontFamily="monospace">"customer": </text>
          <text x="145" y="130" fill="#fff" fontSize="11" fontFamily="monospace">"Freelance Jaipur Client",</text>

          <text x="60" y="155" fill="#00ed64" fontSize="11" fontFamily="monospace">"metrics": </text>
          <text x="135" y="155" fill="#f43f5e" fontSize="11" fontFamily="monospace">&#123;</text>

          <text x="80" y="180" fill="#00ed64" fontSize="11" fontFamily="monospace">"sales": </text>
          <text x="140" y="180" fill="#38bdf8" fontSize="11" fontFamily="monospace">480,</text>

          <text x="80" y="205" fill="#00ed64" fontSize="11" fontFamily="monospace">"rating": </text>
          <text x="145" y="205" fill="#38bdf8" fontSize="11" fontFamily="monospace">4.9</text>

          <text x="60" y="230" fill="#f43f5e" fontSize="11" fontFamily="monospace">&#125;,</text>

          <text x="60" y="255" fill="#00ed64" fontSize="11" fontFamily="monospace">"tags": </text>
          <text x="110" y="255" fill="#a4a4a8" fontSize="11" fontFamily="monospace">[ "React Storefront", "Tailwind", "Next.js" ]</text>

          <text x="40" y="285" fill="#f43f5e" fontSize="12" fontFamily="monospace">&#125;</text>

          {/* Green cluster dots decoration */}
          <circle cx="430" cy="90" r="4" fill="#00ed64" />
          <circle cx="450" cy="110" r="5" fill="#00ed64" opacity="0.5" />
          <circle cx="420" cy="130" r="3" fill="#00ed64" opacity="0.3" />
        </svg>
      );
    }
    // MongoDB Feature: aggregation pipeline
    return (
      <svg viewBox="0 0 500 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="premium-svg-visual">
        <rect width="500" height="340" rx="12" fill="#0b0f19" />
        <rect x="20" y="20" width="460" height="300" rx="6" fill="#020617" />
        <path d="M20 50 L480 50" stroke="#131b2e" strokeWidth="1" />
        <circle cx="35" cy="35" r="4" fill="#ef4444" />
        <circle cx="47" cy="35" r="4" fill="#f59e0b" />
        <circle cx="59" cy="35" r="4" fill="#10b981" />
        <text x="250" y="38" fill="#475569" fontSize="9" fontFamily="monospace" textAnchor="middle">mongosh --pipeline</text>

        {/* MongoDB Shell aggregate query */}
        <text x="35" y="80" fill="#00ed64" fontSize="11" fontFamily="monospace">test&gt; db.orders.aggregate([</text>
        
        <text x="55" y="105" fill="#fff" fontSize="11" fontFamily="monospace">  &#123; $match: &#123; status: "A" &#125; &#125;,</text>
        
        <text x="55" y="130" fill="#fff" fontSize="11" fontFamily="monospace">  &#123; $group: &#123;</text>
        <text x="75" y="155" fill="#38bdf8" fontSize="11" fontFamily="monospace">    _id: "$cust_id",</text>
        <text x="75" y="180" fill="#38bdf8" fontSize="11" fontFamily="monospace">    totalSales: &#123; $sum: "$amount" &#125;</text>
        <text x="55" y="205" fill="#fff" fontSize="11" fontFamily="monospace">  &#125; &#125;,</text>
        
        <text x="55" y="230" fill="#fff" fontSize="11" fontFamily="monospace">  &#123; $sort: &#123; totalSales: -1 &#125; &#125;</text>
        
        <text x="35" y="255" fill="#00ed64" fontSize="11" fontFamily="monospace">])</text>
        
        {/* Output */}
        <text x="35" y="280" fill="#888" fontSize="10" fontFamily="monospace">[ &#123; _id: "Cust901", totalSales: 42500 &#125;, &#123; _id: "Cust102", totalSales: 18400 &#125; ]</text>
      </svg>
    );
  }

  // DEFAULT OR SLUG-BASED VECTOR FALLBACK
  return (
    <div className="hero-image-container premium-fallback-container">
      <img 
        src={fallbackImage} 
        alt="Visual preview" 
        className="features-image"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: '12px'
        }}
      />
    </div>
  );
}
