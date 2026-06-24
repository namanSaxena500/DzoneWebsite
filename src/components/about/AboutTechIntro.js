import React from 'react';

export default function AboutTechIntro() {
  return (
    <section className="features" style={{ padding: '5rem 1rem' }}>
      <div className="container">
        <div className="features-grid" style={{ direction: 'ltr' }}>
          
          {/* Left Column: Text */}
          <div className="features-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap : '0.65rem' }}>
            <h2 className="features-focus-title" style={{ fontSize: '1.25rem', lineHeight: '1.25', color: '#0f172a', textAlign: 'left' }}>
              Let's Understand Something About This Tech
            </h2>
            <p className="features-section-subtitle" style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.7', textAlign: 'left', marginBottom: '0.5rem' }}>
              We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.
            </p>
            <div>
              <a href="#contact" className="btn btn-reach-out">Reach Out To Us</a>
            </div>
          </div>

          {/* Right Column: Laptop Image Mockup */}
          <div className="hero-image-container">
            <img 
              src="/images/abouttechleftinmage.png" 
              alt="Development Tech Stack Mockup" 
              className="features-image"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
