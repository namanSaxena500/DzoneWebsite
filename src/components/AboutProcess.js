import React from 'react';
import Link from 'next/link';

export default function AboutProcess() {
  return (
    <section className="features" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="features-grid">
          
          {/* Left Column: Serpentine Timeline Image */}
          <div className="features-image-container">
            <img 
              src="/images/sideimage.png" 
              alt="Dzone Unique Development Process Timeline" 
              className="features-image" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
              }}
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="features-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap : '0.65rem' }}>
            <h2 className="features-focus-title" style={{ lineHeight: '1.25', color: '#0f172a', textAlign: 'left', fontSize: '1.65rem' }}>
              Maintain Your Business Growth Timeline With our Unique Development Process
            </h2>
            <p className="features-section-subtitle" style={{ fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'left', marginBottom: '1rem' }}>
              We follow a serpentine development process designed to validate visual aesthetics and user flows at each milestone. Our goal is to launch stable applications with zero bottlenecks.
            </p>
            
            <div className="features-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
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
              <div className="feature-item">
                <img src="/images/bullet.png" alt="check" className="feature-bullet-img" />
                <p className="feature-text-new">
                  <strong>Security-First Architecture</strong> that safeguards critical data and ensures compliance.
                </p>
              </div>
            </div>

            <div>
              <Link href="/#contact" className="btn btn-reach-out">
                Reach Out To Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
