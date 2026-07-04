'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { technologiesData } from '@/data/technologiesData';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'technologies' | null

  const handleDropdownToggle = (type) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleContactClick = (e) => {
    if (typeof document !== 'undefined') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <img src="/images/Logo.png" alt="Dzone | IT Services" className="logo-image" />
        </Link>

        {/* Hamburger Menu Toggle Button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {/* Services Link & Dropdown */}
          <li
            className="nav-item has-dropdown"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="nav-dropdown-trigger">
              <Link href="/services" className="nav-link" onClick={closeMenu}>
                Services
              </Link>
              <button
                className="dropdown-caret-btn"
                onClick={() => handleDropdownToggle('services')}
                aria-label="Toggle Services Dropdown"
              >
                <ChevronDown size={14} className={`caret-icon ${activeDropdown === 'services' ? 'open' : ''}`} />
              </button>
            </div>

            <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                     href={`/services/${service.slug}`}
                     className="dropdown-item"
                     onClick={closeMenu}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Technologies Link & Dropdown */}
          <li
            className="nav-item has-dropdown"
            onMouseEnter={() => setActiveDropdown('technologies')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="nav-dropdown-trigger">
              <Link href="/technology" className="nav-link" onClick={closeMenu}>
                Technologies
              </Link>
              <button
                className="dropdown-caret-btn"
                onClick={() => handleDropdownToggle('technologies')}
                aria-label="Toggle Technologies Dropdown"
              >
                <ChevronDown size={14} className={`caret-icon ${activeDropdown === 'technologies' ? 'open' : ''}`} />
              </button>
            </div>

            <ul className={`dropdown-menu tech-dropdown-menu ${activeDropdown === 'technologies' ? 'show' : ''}`}>
              {technologiesData.filter(t => ['react', 'nextjs', 'angular', 'vue', 'nodejs', 'reactnative', 'flutter', 'postgresql', 'mongodb', 'figma'].includes(t.id)).map((tech) => (
                <li key={tech.id}>
                  <Link
                    href={`/technology/${tech.slug}`}
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    {tech.title}
                  </Link>
                </li>
              ))}
              <li className="dropdown-divider"></li>
              <li>
                <Link href="/technology" className="dropdown-item view-all-link" onClick={closeMenu}>
                  View All Technologies
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link href="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>

          {/* Action button inside links list for mobile view */}
          <li className="nav-item nav-mobile-action">
            <Link href="/#contact" className="btn btn-contact" onClick={handleContactClick}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop-only action button */}
        <div className="nav-action">
          <Link href="/#contact" className="btn btn-contact" onClick={handleContactClick}>
            Contact
          </Link>
        </div>
      </div>

    </nav>
  );
}
