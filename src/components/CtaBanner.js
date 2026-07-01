import React from 'react';
import Link from 'next/link';

export default function CtaBanner({ 
  text = "Teams ranging early-stage startups to big businesses approach us when they need web-based solutions that are reliable, come to life, and deliver real-world results.", 
  buttonText = "Reach Out To Us", 
  buttonHref = "/#contact" 
}) {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-box">
          <p className="cta-text-new">
            {text}
          </p>
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
    </section>
  );
}
