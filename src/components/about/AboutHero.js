import React from 'react';

export default function AboutHero() {
  return (
    <section className="service-hero">
      <div className="container">
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-content">
              <h1 className="service-hero-title">Growth.Impact.Buisness</h1>
              <p className="service-hero-desc">
                Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Rhoncus sociis nunc libero id eros id etiam pharetra..
              </p>
              <p className="service-hero-launch">
                Launch faster . Grow with confidence . Stay ahead of the competition
              </p>
              <div className="service-hero-buttons">
                <a href="#contact" className="btn btn-reach-out">Reach Out To Us</a>
                <a href="#portfolio" className="btn-explore-projects">
                  Explore Projects →
                </a>
              </div>
            </div>
            <div className="service-hero-image-container">
              <div 
                // style={{
                //   backgroundColor: '#ffffff',
                //   padding: '3rem',
                //   borderRadius: '24px',
                //   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                //   display: 'flex',
                //   alignItems: 'center',
                //   justifyContent: 'center',
                //   width: '100%',
                //   maxWidth: '450px',
                //   border: '1px solid rgba(226, 232, 240, 0.8)'
                // }}
              >
                <img 
                  src="/images/Logo.png" 
                  alt="Dzone logo" 
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
