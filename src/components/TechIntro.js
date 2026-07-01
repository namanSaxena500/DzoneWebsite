import React from 'react';
import Link from 'next/link';

export default function TechIntro({
  title = "Let's Understand Something About This Tech",
  desc = "We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand. We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.",
  buttonText = "Reach Out To Us",
  buttonHref = "/#contact",
  imageSrc = "/images/abouttechleftinmage.png"
}) {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid" style={{ direction: 'ltr' }}>
          
          {/* Left Column: Text */}
          <div className="features-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap : '0.65rem' }}>
            <h2 className="features-focus-title" style={{ fontSize: '1.25rem', lineHeight: '1.25', color: '#0f172a', textAlign: 'left' }}>
              {title}
            </h2>
            <p className="features-section-subtitle" style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.7', textAlign: 'left', marginBottom: '0.5rem' }}>
              {desc}
            </p>
            <div>
              {buttonHref.startsWith('/') ? (
                <Link href={buttonHref} className="btn btn-reach-out">
                  {buttonText}
                </Link>
              ) : (
                <a href={buttonHref} className="btn btn-reach-out">
                  {buttonText}
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Laptop Image Mockup */}
          <div className="hero-image-container">
            <img 
              src={imageSrc} 
              alt={title} 
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
