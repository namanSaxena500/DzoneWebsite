'use client';

import React, { useState } from 'react';

const techData = {
  frontend: {
    label: 'Frontend',
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
    techs: [
      { id: 'nodejs', name: 'Node.js', desc: 'Event-driven, non-blocking I/O server runtime. Node.js enables microservice architectures, real-time socket channels, and high-concurrency API integrations.' },
      { id: 'python', name: 'Python', desc: 'Ideal for machine learning algorithms, scripting tasks, and backend API frameworks like Django or FastAPI. Ensures high readable maintainability.' },
      { id: 'go', name: 'Go (Golang)', desc: 'Compile-to-binary language offering unmatched execution speeds, native concurrency handling, and highly scalable server infrastructure capabilities.' },
      { id: 'java', name: 'Java', desc: 'Enterprise-grade ecosystem supporting multi-tenant microservices, strict typings, and legacy systems integrations with maximum security.' }
    ]
  },
  mobile: {
    label: 'Mobile',
    techs: [
      { id: 'reactnative', name: 'React Native', desc: 'Build native iOS and Android apps with React. Saves code sharing efficiency while keeping native performance metrics fully intact.' },
      { id: 'flutter', name: 'Flutter', desc: 'Google\'s UI toolkit for compiling natively compiled applications for mobile, web, and desktop from a single codebase with high-fps widgets.' },
      { id: 'swift', name: 'Swift (iOS)', desc: 'Native Apple platform programming offering optimized memory speeds, modern language syntax, and native integrations with Apple UI kits.' },
      { id: 'kotlin', name: 'Kotlin (Android)', desc: 'Modern native Android programming language replacing Java. Fully concise, secure, and robustly optimized for modern device APIs.' }
    ]
  },
  uiDev: {
    label: 'UI Development',
    techs: [
      { id: 'figma', name: 'Figma', desc: 'Vector graphics and collaborative design prototype platform. Enables real-time wireframing, dev handoff, and component library design systems.' },
      { id: 'adobexd', name: 'Adobe XD', desc: 'Vector-based tool for designing and prototyping user experiences for web and mobile apps. Collaborates easily with Photoshop systems.' },
      { id: 'sketch', name: 'Sketch', desc: 'Legendary Mac design environment for UI vector design, layouts, and artboards. Offers precise layout grids and responsive layout resizing.' }
    ]
  },
  database: {
    label: 'Database',
    techs: [
      { id: 'postgresql', name: 'PostgreSQL', desc: 'Advanced open-source relational database. Supports strict transactions (ACID), JSON queries, and high reliability for complex data relationships.' },
      { id: 'mongodb', name: 'MongoDB', desc: 'Leading NoSQL document store. Offers flexible BSON schemas, automated horizontal scaling, and ultra-fast read-writes for modern app catalogs.' },
      { id: 'mysql', name: 'MySQL', desc: 'The most popular open-source SQL database powering millions of web systems, offering high speeds and transactional support.' }
    ]
  }
};

export default function AboutTech() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [selectedTech, setSelectedTech] = useState('angular');

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    // Auto-select the first technology in the new tab
    const firstTechId = techData[tabKey].techs[0].id;
    setSelectedTech(firstTechId);
  };

  const activeTechData = techData[activeTab].techs.find(t => t.id === selectedTech) || techData[activeTab].techs[0];

  return (
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
                  style={{
                    borderColor: selectedTech === tech.id ? '#2d378b' : 'rgba(226, 232, 240, 0.5)',
                    boxShadow: selectedTech === tech.id ? '0 0 0 2px rgba(45, 55, 139, 0.15)' : 'none'
                  }}
                >
                  <div className="tech-icon-wrapper">
                    {/* Generates a custom styled initial circle/hexagon logo */}
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
              <a href="#portfolio" className="btn btn-reach-out" style={{ backgroundColor: '#2d378b', color: '#ffffff' }}>
                Explore Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
