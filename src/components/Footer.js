import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid-new">
          <div className="footer-brand-new">
            <a href="#" className="footer-logo-link-new">
              <img src="/images/logo2.png" alt="Dzone" className="footer-logo-img-new" />
            </a>
            <p className="footer-brand-text-new">
              Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Lorem ipsum dolor sit amet consectetur. Sed...
            </p>
          </div>
          
          <div className="footer-col-new">
            <h4>Expertise</h4>
            <ul className="footer-links-new">
              <li><a href="#">Reactjs Development</a></li>
              <li><a href="#">Nextjs Development</a></li>
              <li><a href="#">React Native Development</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="footer-col-new">
            <h4>Services</h4>
            <ul className="footer-links-new">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Application</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#">Digital Marketing</a></li>
            </ul>
          </div>

          <div className="footer-col-new">
            <h4>Contact</h4>
            <ul className="footer-links-new">
              <li><a href="tel:+91845168465111">+91 845168465111</a></li>
              <li><a href="#contact">Address</a></li>
              <li><a href="#">Links</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
