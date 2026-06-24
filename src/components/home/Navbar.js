import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="/" className="logo">
          <img src="/images/Logo.png" alt="Dzone | IT Services" className="logo-image" />
        </a>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="/services" className="nav-link dropdown-toggle">
              Services <span className="caret">▼</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/#expertise" className="nav-link dropdown-toggle">
              Technologies <span className="caret">▼</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/#portfolio" className="nav-link dropdown-toggle">
              Solution <span className="caret">▼</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
        </ul>
        <div className="nav-action">
          <a href="/#contact" className="btn btn-contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
