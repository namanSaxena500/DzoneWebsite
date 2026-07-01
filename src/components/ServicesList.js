'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { servicesData } from '@/data/servicesData';

export default function ServicesList() {
  const [activeService, setActiveService] = useState('app-design');

  const activeServiceData = servicesData.find(s => s.id === activeService) || servicesData[0];

  // Helper to dynamically render Lucide icons based on servicesData strings or components
  const renderIcon = (service) => {
    // If the data has Lucide react elements, render them, else find icon by string mapping
    if (React.isValidElement(service.icon)) {
      return service.icon;
    }
    
    // Icon mapping fallback
    switch (service.slug) {
      case 'app-design':
        return <LucideIcons.Layers size={20} />;
      case 'web-dev':
        return <LucideIcons.Globe size={20} />;
      case 'mobile-app':
        return <LucideIcons.Smartphone size={20} />;
      case 'cloud-services':
        return <LucideIcons.Cloud size={20} />;
      case 'cyber-security':
        return <LucideIcons.Lock size={20} />;
      case 'devops-qa':
        return <LucideIcons.Activity size={20} />;
      default:
        return <LucideIcons.Layers size={20} />;
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="services-section-title">Our Service</h2>
        <p className="services-section-subtitle">don't just write code; we build digital foundations.</p>

        <div className="services-grid">
          <div className="services-left-col">
            <h3 className="services-left-title">Get the Best With Us</h3>
            <p className="services-left-desc">
              We leverage modern technology, agile serpentine processes, and senior engineering talent to construct robust foundations for your digital products.
            </p>
            <div className="services-nav">
              {servicesData.map((item) => (
                <button
                  key={item.id}
                  className={`services-nav-btn ${activeService === item.id ? 'active' : ''}`}
                  onClick={() => setActiveService(item.id)}
                >
                  {renderIcon(item)}
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          
          <div className="services-content-card">
            <div className="services-card-body">
              <p className="services-card-desc">{activeServiceData.desc}</p>
              
              <div className="services-card-features">
                {activeServiceData.features.map((feat, index) => (
                  <div key={index} className="services-card-feature">
                    <img src="/images/bullet.png" alt="bullet" className="services-card-bullet" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="services-card-footer">
              <Link href={`/services/${activeServiceData.slug}`} className="btn btn-explore">
                Explore Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
