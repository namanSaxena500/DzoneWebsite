import React from 'react';
import Link from 'next/link';

export default function ServiceBest({
  title = "The Best We Got",
  desc = "We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand. We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand. We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.",
  buttonText = "Reach Out To Us",
  buttonHref = "/#contact",
  imageSrc = "/images/bg4.png"
}) {
  return (
    <section className="best-we-got-section">
      <div className="container">
        <div className="best-we-got-grid">
          <div className="best-we-got-content">
            <h2 className="best-we-got-title">{title}</h2>
            <p className="best-we-got-desc">
              {desc}
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
          <div className="best-we-got-image-container">
            <img src={imageSrc} alt={title} className="best-we-got-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
