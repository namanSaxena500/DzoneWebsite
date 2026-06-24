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

const expertises = [
  { 
    id: 'healthcare', 
    label: 'Healthcare', 
    icon: <HeartPulse />, 
    desc: <>Healthcare Software Development Service Dubai <a href="#">i-HiddenTalent</a> delivers innovative healthcare platforms that help medical organizations enhance patient care and operational efficiency. As a trusted Healthcare Software Development Company in Australia & Dubai, we provide reliable Healthcare Software Development Service Australia & Dubai for hospitals, clinics, and healthcare startups.</>,
    features: [
      'Blazing-Fast Performance that eliminates friction and keeps users engaged.',
      'Robust Scalability that supports massive traffic and long-term growth.',
      'Pixel-Perfect UX that feels completely effortless and intuitive.'
    ]
  },
  { 
    id: 'insurance', 
    label: 'Insurance', 
    icon: <Shield />, 
    desc: <>Insurance Software Development Service Dubai <a href="#">i-HiddenTalent</a> delivers secure insurtech platforms that automate claims management, policy administration, and underwriting workflows. We build user-centric portals and mobile apps with seamless payment pathways and instant quote calculators.</>,
    features: [
      'End-to-end claim processing automation to reduce turnaround time.',
      'Robust security protocols that ensure 100% data privacy.',
      'Self-service portals with real-time claims tracking for customers.'
    ]
  },
  { 
    id: 'finance', 
    label: 'Banking & Finance', 
    icon: <Landmark />, 
    desc: <>Financial Technology Solutions Dubai <a href="#">i-HiddenTalent</a> provide bank-grade encryption, real-time transaction ledgers, and secure integration with global payment networks. We design and engineer next-gen wealth management platforms, banking dashboards, and investment portals.</>,
    features: [
      'Strict regulatory compliance design including PCI-DSS standards.',
      'Real-time analytics dashboards for asset tracking and portfolio growth.',
      'Multi-tenant architectures with end-to-end data encryption.'
    ]
  },
  { 
    id: 'retail', 
    label: 'Media & Entertainment', 
    icon: <Film />, 
    desc: <>Digital Media & Entertainment Platforms Dubai <a href="#">i-HiddenTalent</a> deliver content delivery network (CDN) optimizations, live streaming solutions, and interactive portals that scale to millions of active users. We create responsive video interfaces and retail shopping networks.</>,
    features: [
      'Blazing-fast content caching and low-latency video streaming.',
      'Multi-device layout designs ensuring pixel-perfect UX on mobile and TV.',
      'Interactive features including real-time chat, sharing, and ratings.'
    ]
  },
  { 
    id: 'it', 
    label: 'Information Technology', 
    icon: <Monitor />, 
    desc: <>Custom Software & SaaS Infrastructure Dubai <a href="#">i-HiddenTalent</a> engineering helps modern tech companies deploy highly scalable microservices, cloud workflow automations, and developer utilities. We design and optimize cloud databases for maximum availability and reliability.</>,
    features: [
      'Continuous integration and delivery pipelines for zero-downtime releases.',
      'Containerized Docker and Kubernetes deployments for microservice setups.',
      'High-performance API designs supporting massive concurrent requests.'
    ]
  },
  { 
    id: 'education', 
    label: 'Education', 
    icon: <GraduationCap />, 
    desc: <>e-Learning & Education Management Platforms Dubai <a href="#">i-HiddenTalent</a> empower online universities, private academies, and school districts with robust Learning Management Systems (LMS). We design student portals, grade books, and live virtual classrooms.</>,
    features: [
      'Interactive whiteboard and real-time student-teacher portal features.',
      'Automated graded assessments and lesson progress trackers.',
      'Extensible video conferencing integration supporting HD streaming.'
    ]
  }
];

export default function Expertise() {
  const [activeExpertise, setActiveExpertise] = useState('it');

  const activeExpertiseData = expertises.find(e => e.id === activeExpertise);

  return (
    <section id="expertise" className="expertise">
      <div className="container">
        <h2>IT Outsourcing Domain Expertise</h2>
        <p className="expertise-subtitle">don't just write code; we build digital foundations.</p>

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
