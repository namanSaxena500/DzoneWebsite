'use client';

import React, { useState } from 'react';
import {
  ChevronDown,
  Check,
  ArrowRight,
  Globe,
  Layers,
  Cpu,
  Shield,
  Layout,
  Database,
  Smartphone,
  Sparkles,
  HeartPulse,
  Landmark,
  Film,
  Monitor,
  GraduationCap
} from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Portfolio from '@/components/home/Portfolio';
import Expertise from '@/components/home/Expertise';
import Contact from '@/components/home/Contact';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/home/Footer';

// Inline SVG illustrations for a high-quality responsive look
const HeroIllustration = () => (
  <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
    <defs>
      <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>

    <circle cx="250" cy="200" r="160" fill="url(#heroGrad1)" />
    <circle cx="250" cy="200" r="130" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="6 6" opacity="0.2" />

    {/* Laptop Stand */}
    <path d="M180 320 L320 320 L300 290 L200 290 Z" fill="#475569" />
    <rect x="140" y="320" width="220" height="8" rx="4" fill="#334155" />

    {/* Laptop Screen Back */}
    <rect x="90" y="70" width="320" height="220" rx="12" fill="#475569" />
    {/* Laptop Screen Front */}
    <rect x="100" y="80" width="300" height="200" rx="6" fill="url(#screenGrad)" />

    {/* Browser Bar */}
    <rect x="100" y="80" width="300" height="24" rx="6" fill="#1e293b" />
    <circle cx="115" cy="92" r="4" fill="#ef4444" />
    <circle cx="127" cy="92" r="4" fill="#f59e0b" />
    <circle cx="139" cy="92" r="4" fill="#10b981" />
    <rect x="160" y="86" width="180" height="12" rx="6" fill="#0f172a" />

    {/* Code Brackets on Screen */}
    <text x="120" y="150" fill="#38bdf8" fontSize="24" fontWeight="bold" fontFamily="monospace">&lt;</text>
    <text x="360" y="240" fill="#38bdf8" fontSize="24" fontWeight="bold" fontFamily="monospace">&gt;</text>

    {/* Floating Code Lines */}
    <rect x="150" y="140" width="120" height="6" rx="3" fill="#64748b" />
    <rect x="150" y="155" width="180" height="6" rx="3" fill="url(#accentGrad)" />
    <rect x="150" y="170" width="90" height="6" rx="3" fill="#10b981" />

    {/* Database Icon */}
    <g transform="translate(310, 130)">
      <rect x="0" y="0" width="60" height="80" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      <ellipse cx="30" cy="20" rx="20" ry="6" fill="#3b82f6" />
      <path d="M10 20 V35 C10 40 50 40 50 35 V20 Z" fill="#2563eb" />
      <ellipse cx="30" cy="35" rx="20" ry="6" fill="#3b82f6" stroke="#2563eb" strokeWidth="0.5" />

      <path d="M10 40 V55 C10 60 50 60 50 55 V40 Z" fill="#1d4ed8" />
      <ellipse cx="30" cy="55" rx="20" ry="6" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="0.5" />
    </g>

    {/* Gear Icon floating */}
    <g transform="translate(320, 230)" opacity="0.8">
      <circle cx="20" cy="20" r="12" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="6 3" />
      <circle cx="20" cy="20" r="8" fill="#0f172a" />
    </g>

    {/* Tech stack tags floating around */}
    <g transform="translate(30, 220)">
      <rect x="0" y="0" width="65" height="26" rx="6" fill="#2563eb" />
      <text x="32" y="17" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">HTML</text>
    </g>
    <g transform="translate(50, 110)">
      <rect x="0" y="0" width="55" height="26" rx="6" fill="#10b981" />
      <text x="27" y="17" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">CSS</text>
    </g>
    <g transform="translate(380, 80)">
      <rect x="0" y="0" width="50" height="26" rx="6" fill="#fb7185" />
      <text x="25" y="17" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">JS</text>
    </g>
    <g transform="translate(390, 180)">
      <rect x="0" y="0" width="70" height="26" rx="6" fill="#6366f1" />
      <text x="35" y="17" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">React</text>
    </g>
  </svg>
);



const serviceCards = [
  {
    id: 1,
    title: 'Custom Web Application Development',
    desc: 'We build bespoke web applications that solve your business challenges. Unlike generic tools, our custom solutions are designed around your workflows, processes, and user needs. From client-facing platforms to internal',
    highlighted: true
  },
  {
    id: 2,
    title: 'Frontend Development',
    desc: 'We build bespoke web applications that solve your business challenges. Unlike generic tools, our custom solutions are designed around your workflows, processes, and user needs. From client-facing platforms to internal'
  },
  {
    id: 3,
    title: 'Backend Development',
    desc: 'We build bespoke web applications that solve your business challenges. Unlike generic tools, our custom solutions are designed around your workflows, processes, and user needs. From client-facing platforms to internal'
  },
  {
    id: 4,
    title: 'Full-Stack Web Development',
    desc: 'We build bespoke web applications that solve your business challenges. Unlike generic tools, our custom solutions are designed around your workflows, processes, and user needs. From client-facing platforms to internal'
  },
  {
    id: 5,
    isImage: true,
    image: '/images/side1.png'
  },
  {
    id: 6,
    title: 'E-commerce Web Development',
    desc: 'We build bespoke web applications that solve your business challenges. Unlike generic tools, our custom solutions are designed around your workflows, processes, and user needs. From client-facing platforms to internal'
  },
  {
    id: 7,
    title: 'Progressive Web App',
    desc: 'We build bespoke web applications that solve your business challenges. Unlike generic tools, our custom solutions are designed around your workflows, processes, and user needs. From client-facing platforms to internal'
  },
  {
    id: 8,
    title: 'CMS Development Service',
    desc: 'We build bespoke web applications that solve your business challenges. Unlike generic tools, our custom solutions are designed around your workflows, processes, and user needs. From client-facing platforms to internal'
  },
  {
    id: 9,
    title: 'Website Modernization & Migration',
    desc: 'We build bespoke web applications that solve your business challenges. Unlike generic tools, our custom solutions are designed around your workflows, processes, and user needs. From client-facing platforms to internal'
  }
];

const techData = {
  frontend: {
    label: 'Frontend',
    activeTech: 'angular',
    techs: [
      { id: 'angular', name: 'Angular', desc: 'We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.' },
      { id: 'react', name: 'React', desc: 'Top-tier component library designed for fluid interfaces. We craft responsive web applications using React and Next.js, assuring state-of-the-art modular structure and clean data flows.' },
      { id: 'vue', name: 'Vue', desc: 'Progressive JavaScript framework for lightweight and highly reactive web experiences. Vue allows rapid prototyping and reliable execution for modern single page apps.' },
      { id: 'nextjs', name: 'Next.js', desc: 'Production-ready framework offering SSR, static generation, and API structures. Essential for highly optimized, SEO-friendly React sites with instant responsiveness.' },
      { id: 'html5', name: 'HTML5', desc: 'Semantically rich foundations for modern web interfaces. We ensure 100% W3C standard compliance and clean document structures for supreme cross-browser rendering.' },
      { id: 'css3', name: 'CSS3', desc: 'Robust styling engine featuring CSS Variables, Grid, and Flexbox layouts. Delivers responsive visual aesthetics, fluid user animations, and modular styling sheets.' }
    ]
  },
  backend: {
    label: 'Backend',
    activeTech: 'nodejs',
    techs: [
      { id: 'nodejs', name: 'Node.js', desc: 'Event-driven, non-blocking I/O server runtime. Node.js enables microservice architectures, real-time socket channels, and high-concurrency API integrations.' },
      { id: 'python', name: 'Python', desc: 'Ideal for machine learning algorithms, scripting tasks, and backend API frameworks like Django or FastAPI. Ensures high readable maintainability.' },
      { id: 'go', name: 'Go (Golang)', desc: 'Compile-to-binary language offering unmatched execution speeds, native concurrency handling, and highly scalable server infrastructure capabilities.' },
      { id: 'java', name: 'Java', desc: 'Enterprise-grade ecosystem supporting multi-tenant microservices, strict typings, and legacy systems integrations with maximum security.' }
    ]
  },
  mobile: {
    label: 'Mobile',
    activeTech: 'reactnative',
    techs: [
      { id: 'reactnative', name: 'React Native', desc: 'Build native iOS and Android apps with React. Saves code sharing efficiency while keeping native performance metrics fully intact.' },
      { id: 'flutter', name: 'Flutter', desc: 'Google\'s UI toolkit for compiling natively compiled applications for mobile, web, and desktop from a single codebase with high-fps widgets.' },
      { id: 'swift', name: 'Swift (iOS)', desc: 'Native Apple platform programming offering optimized memory speeds, modern language syntax, and native integrations with Apple UI kits.' },
      { id: 'kotlin', name: 'Kotlin (Android)', desc: 'Modern native Android programming language replacing Java. Fully concise, secure, and robustly optimized for modern device APIs.' }
    ]
  },
  uiDev: {
    label: 'UI Development',
    activeTech: 'figma',
    techs: [
      { id: 'figma', name: 'Figma', desc: 'Vector graphics and collaborative design prototype platform. Enables real-time wireframing, dev handoff, and component library design systems.' },
      { id: 'adobexd', name: 'Adobe XD', desc: 'Vector-based tool for designing and prototyping user experiences for web and mobile apps. Collaborates easily with Photoshop systems.' },
      { id: 'sketch', name: 'Sketch', desc: 'Legendary Mac design environment for UI vector design, layouts, and artboards. Offers precise layout grids and responsive layout resizing.' }
    ]
  },
  database: {
    label: 'Database',
    activeTech: 'postgresql',
    techs: [
      { id: 'postgresql', name: 'PostgreSQL', desc: 'Advanced open-source relational database. Supports strict transactions (ACID), JSON queries, and high reliability for complex data relationships.' },
      { id: 'mongodb', name: 'MongoDB', desc: 'Leading NoSQL document store. Offers flexible BSON schemas, automated horizontal scaling, and ultra-fast read-writes for modern app catalogs.' },
      { id: 'mysql', name: 'MySQL', desc: 'The most popular open-source SQL database powering millions of web systems, offering high speeds and transactional support.' }
    ]
  }
};

const faqItems = [
  {
    id: 1,
    question: 'Long-term Partner You Can Trust',
    answer: 'long-term technology partner for 200+ clients across Asia, Europe, and Oceania, supporting stable offshore delivery over time. We are also an active member of DBAV and EuroCham, helping strengthen collaboration with European business communities and international partners.'
  },
  {
    id: 2,
    question: 'Long-term Partner You Can Trust',
    answer: 'long-term technology partner for 200+ clients across Asia, Europe, and Oceania, supporting stable offshore delivery over time. We are also an active member of DBAV and EuroCham, helping strengthen collaboration with European business communities and international partners.'
  },
  {
    id: 3,
    question: 'Long-term Partner You Can Trust',
    answer: 'long-term technology partner for 200+ clients across Asia, Europe, and Oceania, supporting stable offshore delivery over time. We are also an active member of DBAV and EuroCham, helping strengthen collaboration with European business communities and international partners.'
  },
  {
    id: 4,
    question: 'Long-term Partner You Can Trust',
    answer: 'long-term technology partner for 200+ clients across Asia, Europe, and Oceania, supporting stable offshore delivery over time. We are also an active member of DBAV and EuroCham, helping strengthen collaboration with European business communities and international partners.'
  },
  {
    id: 5,
    question: 'Long-term Partner You Can Trust',
    answer: 'long-term technology partner for 200+ clients across Asia, Europe, and Oceania, supporting stable offshore delivery over time. We are also an active member of DBAV and EuroCham, helping strengthen collaboration with European business communities and international partners.'
  },
  {
    id: 6,
    question: 'Long-term Partner You Can Trust',
    answer: 'long-term technology partner for 200+ clients across Asia, Europe, and Oceania, supporting stable offshore delivery over time. We are also an active member of DBAV and EuroCham, helping strengthen collaboration with European business communities and international partners.'
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [selectedTech, setSelectedTech] = useState('angular');
  const [expandedFaq, setExpandedFaq] = useState(1); // First item open by default

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    // Auto-select the first technology in the new tab
    const firstTechId = techData[tabKey].techs[0].id;
    setSelectedTech(firstTechId);
  };

  const activeTechData = techData[activeTab].techs.find(t => t.id === selectedTech) || techData[activeTab].techs[0];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-grid">
            <div className="service-hero-content">
              <h1 className="service-hero-title">Web Development</h1>
              <p className="service-hero-desc">
                Lorem ipsum dolor sit amet consectetur. Sed massa dolor placerat sapien dolor. Rhoncus sociis nunc libero id eros id etiam pharetra..
              </p>
              <p className="service-hero-launch">
                Launch faster . Grow with confidence . Stay ahead of the competition
              </p>
              <div className="service-hero-buttons">
                <a href="#contact" className="btn btn-reach-out">Reach Out To Us</a>
                <a href="#portfolio" className="btn-explore-projects">
                  Explore Projects <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="service-hero-image-container">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Our Web Development Services */}
      <section className="service-grid-section">
        <div className="container">
          <h2 className="service-grid-title">Our Web Development Services</h2>
          <p className="service-grid-subtitle">
            We cover the full spectrum of web development as a web development company in India, offering tailored services that align with your business model and industry requirements.
          </p>

          <div className="service-grid-layout">
            {serviceCards.map((card) => {
              if (card.isImage) {
                return (
                  <div key={card.id} className="service-card-new image-card">
                    <img src={card.image} alt="Office team" className="service-card-image" />
                  </div>
                );
              }
              return (
                <div key={card.id} className={`service-card-new ${card.highlighted ? 'highlighted' : ''}`}>
                  <h3 className="service-card-title-new">{card.title}</h3>
                  <p className="service-card-desc-new">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Best We Got */}
      <section className="best-we-got-section">
        <div className="container">
          <div className="best-we-got-grid">
            <div className="best-we-got-content">
              <h2 className="best-we-got-title">The Best We got</h2>
              <p className="best-we-got-desc">
                We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand. We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand. We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand. We deliver creative UI/UX, high-performing websites, and standout visuals to power your brand.
              </p>
              <a href="#contact" className="btn btn-reach-out">Reach Out To Us</a>
            </div>
            <div className="best-we-got-image-container">
              <img src="/images/bg4.png" alt="The Best We Got" className="best-we-got-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Technologies */}
      <section className="tech-section">
        <div className="container">
          <h2 className="tech-title">Our Technologies</h2>
          <p className="tech-subtitle">don't just write code; we build digital foundations.</p>

          <div className="tech-layout">
            {/* Sidebar Tabs */}
            <div className="tech-sidebar">
              {Object.keys(techData).map((key) => (
                <button
                  key={key}
                  className={`tech-tab-btn ${activeTab === key ? 'active' : ''}`}
                  onClick={() => handleTabChange(key)}
                >
                  {techData[key].label}
                </button>
              ))}
            </div>

            {/* Display Panel */}
            <div className="tech-content-box">
              <div className="tech-icons-grid">
                {techData[activeTab].techs.map((tech) => (
                  <div
                    key={tech.id}
                    className={`tech-icon-card ${selectedTech === tech.id ? 'active' : ''}`}
                    onClick={() => setSelectedTech(tech.id)}
                  >
                    <div className="tech-icon-wrapper">
                      {/* Generates a custom styled initial circle logo */}
                      <svg width="40" height="40" viewBox="0 0 40 40">
                        <polygon
                          points="20,2 38,11 38,29 20,38 2,29 2,11"
                          fill={selectedTech === tech.id ? "#2d378b" : "none"}
                          stroke="#2d378b"
                          strokeWidth="2"
                        />
                        <text
                          x="20"
                          y="25"
                          fill={selectedTech === tech.id ? "#ffffff" : "#2d378b"}
                          fontSize="14"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          {tech.name.substring(0, 2).toUpperCase()}
                        </text>
                      </svg>
                    </div>
                    <span className="tech-icon-label">{tech.name}</span>
                  </div>
                ))}
              </div>

              <div className="tech-details-panel">
                <h3 className="tech-details-title">{activeTechData.name}</h3>
                <p className="tech-details-desc">{activeTechData.desc}</p>
                <a href="#portfolio" className="btn btn-reach-out">Explore Projects</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-box">
            <p className="cta-text-new">
              Teams ranging early-stage startups to big businesses approach us when they need web-based solutions that are reliable, come to life, and deliver real-world results.
            </p>
            <a href="#contact" className="btn btn-reach-out">Reach Out To Us</a>
          </div>
        </div>
      </section>

      {/* Common Components */}
      <Portfolio />
      <Expertise />

      {/* Why Choose US ? */}
      <section className="why-us">
        <div className="container">
          <h2>Why Choose US ?</h2>
          <p className="why-us-subtitle">don't just write code; we build digital foundations.</p>

          <div className="why-us-grid-override">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="why-us-item-new">
                <div className="why-us-header-new">
                  <span className="why-us-num-new">{num}.</span>
                  <h3 className="why-us-title-new">Long-term Partner You Can Trust</h3>
                </div>
                <p className="why-us-text-new">
                  long-term technology partner for 200+ clients across Asia, Europe, and Oceania, supporting stable offshore delivery over time. We are also an active member of DBAV and EuroCham, helping strengthen collaboration with European business communities and international partners.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Common Sections */}
      <Contact />
      <Testimonials />

      {/* FAQ Accordion */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title">Frequently Asked Question</h2>
          <div className="faq-list">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className={`faq-item ${expandedFaq === item.id ? 'active' : ''}`}
              >
                <button
                  className="faq-trigger"
                  onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                >
                  <span>{item.question}</span>
                  <ChevronDown className="faq-chevron" size={16} />
                </button>
                <div className="faq-content">
                  <p className="faq-text">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
