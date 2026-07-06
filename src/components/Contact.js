'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phoneCode: '+91',
    phoneNumber: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      // Allow only numbers and restrict to 10 digits
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length > 10) return;
      setFormData((prev) => ({
        ...prev,
        [name]: digitsOnly
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setFormStatus({ 
        type: 'error', 
        message: 'Web3Forms Access Key is missing. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your .env.local file.' 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `New Dzone Lead - ${formData.service}`,
          company: formData.company || 'N/A',
          phone: `${formData.phoneCode} ${formData.phoneNumber}`,
          service: formData.service,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({
          name: '',
          company: '',
          email: '',
          phoneCode: '+91',
          phoneNumber: '',
          service: '',
          message: ''
        });
      } else {
        setFormStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to connect. Please check your internet and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-box-new">
          <div className="contact-text-panel-new">
            <span className="contact-subtitle-new">GET A FREE ESTIMATE</span>
            <h2 className="contact-title-new">Want To Grow your Business ?</h2>
            <p className="contact-desc-new">
              Let's build something amazing together. Reach out to Dzone to consult with our software experts, get a cost projection, and formulate a technical execution path.
            </p>
          </div>

          <div className="contact-form-panel-new">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input-new"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              
              <input
                type="text"
                id="company"
                name="company"
                className="form-input-new"
                placeholder="Company Organization"
                value={formData.company}
                onChange={handleInputChange}
              />

              <input
                type="email"
                id="email"
                name="email"
                className="form-input-new"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <div className="phone-input-wrapper-new">
                <div className="phone-code-badge-new" style={{ cursor: 'default' }}>
                  <span className="flag-emoji">🇮🇳</span>
                  <span className="phone-code-text">+91</span>
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-input-new phone-input-field"
                  placeholder="10-Digit Mobile Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  required
                />
              </div>

              <div className="select-wrapper-new">
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleInputChange}
                  className="form-select-new"
                  required
                >
                  <option value="" disabled hidden>Domain</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Design">App Design (UX/UI)</option>
                  <option value="Mobile Applications">Mobile Application</option>
                  <option value="Cloud Services">Cloud Services</option>
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="DevOps & QA">DevOps & QA</option>
                </select>
                <span className="select-caret-new">▼</span>
              </div>

              <textarea
                id="message"
                name="message"
                className="form-textarea-new"
                placeholder="Description"
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              <div className="form-submit-container-new">
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn-submit-new"
                >
                  {isSubmitting ? 'Sending...' : "Let's Connect"}
                </button>
              </div>

              {formStatus.message && (
                <div className={`form-message-new ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
