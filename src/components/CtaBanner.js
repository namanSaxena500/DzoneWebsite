'use client';

import React from 'react';
import Link from 'next/link';

export default function CtaBanner({ 
  text = "Teams ranging from early-stage startups to big businesses approach us when they need web-based solutions that are reliable, come to life, and deliver real-world results.", 
  buttonText = "Reach Out To Us", 
  buttonHref = "/#contact" 
}) {
  const handleCtaClick = (e) => {
    if (buttonHref.endsWith('#contact') && typeof document !== 'undefined') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-box">
          <p className="cta-text-new">
            {text}
          </p>
          {buttonHref.startsWith('/') ? (
            <Link href={buttonHref} className="btn btn-reach-out" onClick={handleCtaClick}>
              {buttonText}
            </Link>
          ) : (
            <a href={buttonHref} className="btn btn-reach-out" onClick={handleCtaClick}>
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
