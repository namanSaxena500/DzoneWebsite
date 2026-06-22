'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  Globe, 
  Smartphone, 
  Cloud, 
  Lock, 
  Activity 
} from 'lucide-react';

const services = [
  {
    id: 'app-design',
    title: 'UI/UX Design',
    icon: <Layers size={20} />,
    desc: 'We design intuitive, modern, and beautiful user interfaces that convert users into loyal customers. Our process involves deep user research, wireframing, prototyping, and stunning visual design systems.',
    features: ['User Persona & Journey Maps', 'Interactive Prototypes', 'Responsive Layout Designs', 'Design Systems & Component Libraries']
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: <Globe size={20} />,
    desc: 'Top-tier, high-performance web development utilizing the latest stack like React, Next.js, and Node.js. We ensure your application is incredibly fast, responsive, secure, and optimized for search engines.',
    features: ['Server-Side Rendering (SSR)', 'SEO Optimizations', 'Headless CMS Integration', 'E-Commerce & Custom Portals']
  },
  {
    id: 'mobile-app',
    title: 'Mobile Application',
    icon: <Smartphone size={20} />,
    desc: 'High quality cross-platform and native mobile application development. We build iOS and Android apps using React Native and Flutter, ensuring native-level performance and smooth, native user experiences.',
    features: ['Cross-platform efficiency', 'App Store deployment assistance', 'Offline-first capabilities', 'Native device API integrations']
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    icon: <Cloud size={20} />,
    desc: 'Scalable cloud infrastructure architectures on AWS, GCP, and Azure. We plan, deploy, and monitor scalable serverless or microservice structures tailored for high-availability requirements.',
    features: ['Microservices Architecture', 'Serverless Functions', 'Continuous Delivery Pipelines', 'Auto-scaling & Monitoring']
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    icon: <Lock size={20} />,
    desc: 'Keep your products and user data secure. We implement secure coding practices, HTTPS/TLS standards, encryption, authentication protocols (OAuth, JWT), and conduct penetration vulnerability checks.',
    features: ['Data Encryption at Rest & Flight', 'OAuth2 & Multi-Factor Auth', 'Vulnerability scanning', 'GDPR & HIPAA compliance design']
  },
  {
    id: 'devops-qa',
    title: 'DevOps & QA',
    icon: <Activity size={20} />,
    desc: 'Automating software integration, testing, and deployment to guarantee flawless product releases. We utilize automated testing frameworks and CI/CD tools to minimize production faults.',
    features: ['Automated Unit & E2E Testing', 'Continuous Integration (CI/CD)', 'Infrastructure as Code (IaC)', 'Zero-downtime Deployments']
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState('app-design');

  const activeServiceData = services.find(s => s.id === activeService);

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="services-section-title">Our Service</h2>
        <p className="services-section-subtitle">don't just write code; we build digital foundations.</p>

        <div className="services-grid">
          <div className="services-left-col">
            <h3 className="services-left-title">Get the Best With Us</h3>
            <p className="services-left-desc">
              Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Rhoncus sociis nunc libero id eros id etiam pharetra..
            </p>
            <div className="services-nav">
              {services.map((item) => (
                <button
                  key={item.id}
                  className={`services-nav-btn ${activeService === item.id ? 'active' : ''}`}
                  onClick={() => setActiveService(item.id)}
                >
                  {item.icon}
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
              <a href="#contact" className="btn btn-explore">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { services };
