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
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ type: 'success', message: data.message || 'Message sent successfully!' });
        setFormData({
          name: '',
          company: '',
          email: '',
          phoneCode: '+91',
          phoneNumber: '',
          service: 'Web Development',
          message: ''
        });
      } else {
        setFormStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
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
              Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Rhoncus sociis nunc libero id eros id etiam pharetra..
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
                <div className="phone-code-badge-new">
                  <div className="flag-select-wrapper">
                    <span className="flag-emoji">
                      {formData.phoneCode === '+91' ? '🇮🇳' : 
                       formData.phoneCode === '+1' ? '🇺🇸' : 
                       formData.phoneCode === '+44' ? '🇬🇧' : 
                       formData.phoneCode === '+61' ? '🇦🇺' : '🇮🇳'}
                    </span>
                    <span className="phone-caret">▼</span>
                    <select 
                      name="phoneCode" 
                      value={formData.phoneCode} 
                      onChange={handleInputChange}
                      className="hidden-flag-select"
                    >
                      <option value="+91">India (+91)</option>
                      <option value="+1">USA (+1)</option>
                      <option value="+44">UK (+44)</option>
                      <option value="+61">Australia (+61)</option>
                    </select>
                  </div>
                  <span className="phone-code-text">{formData.phoneCode}</span>
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-input-new phone-input-field"
                  placeholder="Mobile"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
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
