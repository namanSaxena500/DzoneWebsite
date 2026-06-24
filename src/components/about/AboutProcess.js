import React from 'react';

export default function AboutProcess() {
  return (
    <section className="features" style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
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
          <div className="features-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap : '0.65' }}>
            <h2 className="features-focus-title" style={{ lineHeight: '1.25', color: '#0f172a', textAlign: 'left' }}>
              Maintain Your Buisness Growth Timeline With our Unique Develpoment Process
            </h2>
            <p className="features-section-subtitle" style={{ fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'left', marginBottom: '1rem' }}>
              We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.
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
            </div>

            <div>
              <a href="#contact" className="btn btn-reach-out">Reach Out To Us</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
