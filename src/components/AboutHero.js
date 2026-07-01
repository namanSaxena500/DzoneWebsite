import React from 'react';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="service-hero">
      <div className="container">
        <div className="service-hero-grid">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Growth.Impact.Buisness</h1>
            <p className="service-hero-desc">
              Teams ranging early-stage startups to big businesses approach us when they need web-based solutions that are reliable, come to life, and deliver real-world results.
            </p>
            <p className="service-hero-launch">
              Launch faster . Grow with confidence . Stay ahead of the competition
            </p>
            <div className="service-hero-buttons">
              <Link href="/#contact" className="btn btn-reach-out">
                Reach Out To Us
              </Link>
              <Link href="/#portfolio" className="btn-explore-projects">
                Explore Projects →
              </Link>
            </div>
          </div>
          <div className="service-hero-image-container">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src="/images/Logo.png" 
                alt="Dzone logo" 
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '120px',
                  objectFit: 'contain'
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
