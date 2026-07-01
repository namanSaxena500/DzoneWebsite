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
            <Link href="/#portfolio" className="nav-link" onClick={closeMenu}>
              Solution
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>

          {/* Action button inside links list for mobile view */}
          <li className="nav-item nav-mobile-action">
            <Link href="/#contact" className="btn btn-contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop-only action button */}
        <div className="nav-action">
          <Link href="/#contact" className="btn btn-contact">
            Contact
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .nav-dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .dropdown-caret-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
        }
        .caret-icon {
          transition: transform 0.2s ease;
        }
        .caret-icon.open {
          transform: rotate(180deg);
        }
        .has-dropdown {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          min-width: 220px;
          padding: 0.75rem 0;
          margin: 0;
          list-style: none;
          display: none;
          z-index: 1000;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .dropdown-menu.show,
        .has-dropdown:hover .dropdown-menu {
          display: block;
          opacity: 1;
          transform: translateY(0);
        }
        .dropdown-item {
          display: block;
          padding: 0.6rem 1.5rem;
          color: #334155;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: background 0.15s, color 0.15s;
        }
        .dropdown-item:hover {
          background: #f8fafc;
          color: #2E3092;
        }
        .tech-dropdown-menu {
          min-width: 240px;
        }
        .dropdown-divider {
          height: 1px;
          background-color: #e2e8f0;
          margin: 0.5rem 0;
        }
        .view-all-link {
          color: #2E3092;
          font-weight: 600;
        }
        
        @media (max-width: 991px) {
          .nav-dropdown-trigger {
            width: 100%;
            justify-content: space-between;
          }
          .dropdown-menu {
            position: static;
            box-shadow: none;
            border: none;
            padding-left: 1.5rem;
            display: none;
            opacity: 1;
            transform: none;
            width: 100%;
          }
          .dropdown-menu.show {
            display: block;
          }
          .has-dropdown:hover .dropdown-menu {
            display: none;
          }
          .has-dropdown:hover .dropdown-menu.show {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
