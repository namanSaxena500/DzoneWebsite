'use client';

import React, { useState } from 'react';
import { 
  Check,
  HeartPulse,
  Shield,
  Landmark,
  Film,
  Monitor,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

const expertises = [
  { 
    id: 'healthcare', 
    label: 'Healthcare', 
    icon: <HeartPulse size={18} />, 
    desc: <>Healthcare Software Development Service Dubai <strong>Dzone</strong> delivers innovative healthcare platforms that help medical organizations enhance patient care and operational efficiency. As a trusted Healthcare Software Development Company in Australia & Dubai, we provide reliable Healthcare Software Development Service Australia & Dubai for hospitals, clinics, and healthcare startups.</>,
    features: [
      'Blazing-Fast Performance that eliminates friction and keeps users engaged.',
      'Robust Scalability that supports massive traffic and long-term growth.',
      'Pixel-Perfect UX that feels completely effortless and intuitive.'
    ]
  },
  { 
    id: 'insurance', 
    label: 'Insurance', 
    icon: <Shield size={18} />, 
    desc: <>Insurance Software Development Service Dubai <strong>Dzone</strong> delivers secure insurtech platforms that automate claims management, policy administration, and underwriting workflows. We build user-centric portals and mobile apps with seamless payment pathways and instant quote calculators.</>,
    features: [
      'End-to-end claim processing automation to reduce turnaround time.',
      'Robust security protocols that ensure 100% data privacy.',
      'Self-service portals with real-time claims tracking for customers.'
    ]
  },
  { 
    id: 'finance', 
    label: 'Banking & Finance', 
    icon: <Landmark size={18} />, 
    desc: <>Financial Technology Solutions Dubai <strong>Dzone</strong> provides bank-grade encryption, real-time transaction ledgers, and secure integration with global payment networks. We design and engineer next-gen wealth management platforms, banking dashboards, and investment portals.</>,
    features: [
      'Strict regulatory compliance design including PCI-DSS standards.',
      'Real-time analytics dashboards for asset tracking and portfolio growth.',
      'Multi-tenant architectures with end-to-end data encryption.'
    ]
  },
  { 
    id: 'retail', 
    label: 'Media & Entertainment', 
    icon: <Film size={18} />, 
    desc: <>Digital Media & Entertainment Platforms Dubai <strong>Dzone</strong> delivers content delivery network (CDN) optimizations, live streaming solutions, and interactive portals that scale to millions of active users. We create responsive video interfaces and retail shopping networks.</>,
    features: [
      'Blazing-fast content caching and low-latency video streaming.',
      'Multi-device layout designs ensuring pixel-perfect UX on mobile and TV.',
      'Interactive features including real-time chat, sharing, and ratings.'
    ]
  },
  { 
    id: 'it', 
    label: 'Information Technology', 
    icon: <Monitor size={18} />, 
    desc: <>Custom Software & SaaS Infrastructure Dubai <strong>Dzone</strong> engineering helps modern tech companies deploy highly scalable microservices, cloud workflow automations, and developer utilities. We design and optimize cloud databases for maximum availability and reliability.</>,
    features: [
      'Continuous integration and delivery pipelines for zero-downtime releases.',
      'Containerized Docker and Kubernetes deployments for microservice setups.',
      'High-performance API designs supporting massive concurrent requests.'
    ]
  },
  { 
    id: 'education', 
    label: 'Education', 
    icon: <GraduationCap size={18} />, 
    desc: <>e-Learning & Education Management Platforms Dubai <strong>Dzone</strong> empowers online universities, private academies, and school districts with robust Learning Management Systems (LMS). We design student portals, grade books, and live virtual classrooms.</>,
    features: [
      'Interactive whiteboard and real-time student-teacher portal features.',
      'Automated graded assessments and lesson progress trackers.',
      'Extensible video conferencing integration supporting HD streaming.'
    ]
  }
];

export default function Expertise({ 
  isStatic = false, 
  title = "IT Outsourcing Domain Expertise",
  subtitle = "don't just write code; we build digital foundations.",
  staticText = "Healthcare Software Development Service Dubai Dzone delivers innovative healthcare platforms that help medical organizations enhance patient care and operational efficiency. As a trusted Healthcare Software Development Company in Australia & Dubai, we provide reliable Healthcare Software Development Service Australia & Dubai for hospitals, clinics, and healthcare startups.",
  staticFeatures = [
    'Blazing-Fast Performance that eliminates friction and keeps users engaged.',
    'Robust Scalability that supports massive traffic and long-term growth.',
    'Pixel-Perfect UX that feels completely effortless and intuitive.'
  ]
}) {
  const [activeExpertise, setActiveExpertise] = useState('it');

  if (isStatic) {
    return (
      <section 
        className="expertise" 
        style={{ 
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Image Container */}
        <div 
          style={{
            position: 'absolute',
            top: '-35px',
            left: '0',
            width: '100%',
            height: 'calc(100% + 35px)',
            backgroundImage: "url('/images/expertise.jpg?v=2')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '80px' }}>
          {/* Section Header */}
          <h2 style={{ color: '#000000', textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            {title}
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.15rem', color: '#000000', fontWeight: 500, marginBottom: '1.5rem' }}>
            {subtitle}
          </p>

          {/* Glassmorphic Panel */}
          <div 
            className="expertise-content-panel-new" 
            style={{ 
              maxWidth: '1000px', 
              margin: '0 auto', 
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(20px) saturate(140%)',
              WebkitBackdropFilter: 'blur(20px) saturate(140%)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
              color: '#000000'
            }}
          >
            {/* Paragraph */}
            <div style={{ fontSize: '0.85rem', lineHeight: '1.65', marginBottom: '0.5rem', fontWeight: 500 }}>
              {staticText}
            </div>
            
            {/* Bullets List */}
            <div className="expertise-bullets-new" style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
              {staticFeatures.map((feat, index) => (
                <div key={index} className="expertise-bullet-new" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <img 
                    src="/images/blacktick.png" 
                    alt="check" 
                    style={{ 
                      width: '28px', 
                      height: '28px', 
                      objectFit: 'contain',
                      flexShrink: 0
                    }} 
                  />
                  <div className="expertise-bullet-text-new" style={{ color: '#000000', fontSize: '0.85rem', fontWeight: 600 }}>
                    {feat}
                  </div>
                </div>
              ))}
            </div>

            {/* Overlapping Primary CTA Button */}
            <div 
              style={{ 
                position: 'absolute',
                bottom: '-56px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10
              }}
            >
              <Link 
                href="/#contact" 
                className="btn btn-reach-out" 
                style={{ 
                  backgroundColor: '#2E3092', 
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  padding: '0 2.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(46, 48, 146, 0.3)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  height: '48px',
                  whiteSpace: 'nowrap'
                }}
              >
                Reach Out To Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // TABBED MODE
  const activeExpertiseData = expertises.find(e => e.id === activeExpertise);

  return (
    <section id="expertise" className="expertise">
      <div className="container">
        <h2>{title}</h2>
        <p className="expertise-subtitle">{subtitle}</p>

        <div className="expertise-tabs-new">
          {expertises.map((item) => (
            <button
              key={item.id}
              className={`expertise-tab-new ${activeExpertise === item.id ? 'active' : ''}`}
              onClick={() => setActiveExpertise(item.id)}
            >
              <span className="tab-icon-container">
                {item.icon}
              </span>
              <span className="tab-text-container">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="expertise-content-panel-new">
          <div className="expertise-panel-desc-new">
            {activeExpertiseData.desc}
          </div>
          <div className="expertise-bullets-new">
            {activeExpertiseData.features.map((feat, index) => (
              <div key={index} className="expertise-bullet-new">
                <div className="expertise-bullet-icon-new">
                  <Check size={14} />
                </div>
                <div className="expertise-bullet-text-new">
                  {feat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export { expertises };
