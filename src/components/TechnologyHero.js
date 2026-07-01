import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import TechLogo from '@/components/TechLogo';

export default function TechnologyHero({
  title = "React Native",
  desc = "Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Rhoncus sociis nunc libero id eros id etiam pharetra..",
  launchText = "Launch faster . Grow with confidence . Stay ahead of the competition",
  techId = null
}) {
  return (
    <section className="service-hero">
      <div className="container">
        <div className="service-hero-grid">
          <div className="service-hero-content">
            <h1 className="service-hero-title" style={{ fontSize: '2.5rem' }}>{title}</h1>
            <p className="service-hero-desc">
              {desc}
            </p>
            <p className="service-hero-launch">
              {launchText}
            </p>
            <div className="service-hero-buttons">
              <Link href="/#contact" className="btn btn-reach-out">
                Reach Out To Us
              </Link>
              <Link href="/#portfolio" className="btn-explore-projects">
                Explore Projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="service-hero-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {techId ? (
              <div style={{ width: '100%', maxWidth: '280px', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TechLogo id={techId} className="hero-logo-svg" />
              </div>
            ) : (
              <svg viewBox="0 0 250 250" style={{ width: '100%', height: 'auto', maxWidth: '280px' }}>
                <polygon points="125 30, 225 65, 208 195, 125 230, 42 195, 25 65" fill="#3b82f6" />
                <polygon points="125 30, 125 230, 208 195, 225 65" fill="#1d4ed8" />
                <text x="125" y="145" fill="#FFFFFF" fontSize="48" fontWeight="bold" textAnchor="middle">{"</>"}</text>
              </svg>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
