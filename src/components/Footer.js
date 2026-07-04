'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid-new">
          <div className="footer-brand-new">
            <Link href="/" className="footer-logo-link-new">
              <img src="/images/logo2.png" alt="Dzone" className="footer-logo-img-new" />
            </Link>
            <p className="footer-brand-text-new">
              Teams ranging early-stage startups to big businesses approach us when they need web-based solutions that are reliable, come to life, and deliver real-world results.
            </p>
          </div>

          <div className="footer-col-new">
            <h4>Expertise</h4>
            <ul className="footer-links-new">
              <li><Link href="/technology/react">Reactjs Development</Link></li>
              <li><Link href="/technology/nextjs">Nextjs Development</Link></li>
              <li><Link href="/technology/reactnative">React Native Development</Link></li>
              <li><Link href="/technology/figma">Figma UI/UX Design</Link></li>
              <li><Link href="/technology">All Technologies</Link></li>
            </ul>
          </div>

          <div className="footer-col-new">
            <h4>Services</h4>
            <ul className="footer-links-new">
              <li><Link href="/services/web-dev">Web Development</Link></li>
              <li><Link href="/services/mobile-app">Mobile Application</Link></li>
              <li><Link href="/services/app-design">UI/UX Design</Link></li>
              <li><Link href="/services/cloud-services">Cloud Infrastructure</Link></li>
            </ul>
          </div>

          <div className="footer-col-new">
            <h4>Contact</h4>
            <ul className="footer-links-new">
              <li><a href="tel:+917240621224">+91 7240621224</a></li>
              <li>
                <a href="https://maps.app.goo.gl/VAiAnQBA2XLc4Eeq7" target="_blank" rel="noopener noreferrer" style={{ lineHeight: '1.5', display: 'inline-block' }}>
                  258, Katewa Nagar, Devi Nagar,<br />Shyam Nagar, Jaipur,<br />Rajasthan - 302019
                </a>
              </li>
              <li><a href="mailto:digitalinfluencerns@gmail.com">digitalinfluencerns@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
