'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { technologiesData } from '@/data/technologiesData';
import TechLogo from '@/components/TechLogo';

export default function ServiceTechnologies({ techIds = [] }) {
  // Group configurations
  const categoriesConfig = {
    frontend: { label: 'Frontend' },
    backend: { label: 'Backend' },
    mobile: { label: 'Mobile' },
    uiDev: { label: 'UI Development' },
    database: { label: 'Database' }
  };

  // Show all technologies on every page (fixed view per user request)
  const filteredTechs = technologiesData;

  // Group filtered techs by category
  const groupedTechs = {};
  filteredTechs.forEach(tech => {
    const cat = tech.category;
    if (!groupedTechs[cat]) {
      groupedTechs[cat] = {
        label: categoriesConfig[cat]?.label || cat,
        techs: []
      };
    }
    groupedTechs[cat].techs.push(tech);
  });

  const availableCategories = Object.keys(groupedTechs);
  
  // Get initial values for SSR
  const initialCategory = availableCategories[0] || '';
  const initialTechs = groupedTechs[initialCategory]?.techs || [];
  const initialTechId = initialTechs[0]?.id || '';

  // State for active tab and selected tech
  const [activeTab, setActiveTab] = useState(initialCategory);
  const [selectedTech, setSelectedTech] = useState(initialTechId);

  // Update active tab and selected tech when techIds or groupedTechs change
  useEffect(() => {
    if (availableCategories.length > 0) {
      const defaultCat = availableCategories[0];
      setActiveTab(defaultCat);
      
      const catTechs = groupedTechs[defaultCat]?.techs || [];
      if (catTechs.length > 0) {
        setSelectedTech(catTechs[0].id);
      }
    }
  }, [techIds.join(',')]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    const catTechs = groupedTechs[tabKey]?.techs || [];
    if (catTechs.length > 0) {
      setSelectedTech(catTechs[0].id);
    }
  };

  if (availableCategories.length === 0) {
    return null;
  }

  const activeCategoryData = groupedTechs[activeTab] || groupedTechs[availableCategories[0]];
  const activeTechData = activeCategoryData?.techs.find(t => t.id === selectedTech) || activeCategoryData?.techs[0];

  return (
    <section className="tech-section">
      <div className="container">
        <h2 className="tech-title">Technologies We Deploy</h2>
        <p className="tech-subtitle">don't just write code; we build digital foundations.</p>

        <div className="tech-layout">
          {/* Sidebar Tabs */}
          <div className="tech-sidebar">
            {availableCategories.map((key) => (
              <button
                key={key}
                className={`tech-tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => handleTabChange(key)}
              >
                {groupedTechs[key].label}
              </button>
            ))}
          </div>

          {/* Display Panel */}
          {activeCategoryData && activeTechData ? (
            <div className="tech-content-box">
              <div className="tech-icons-grid">
                {activeCategoryData.techs.map((tech) => (
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
                      <TechLogo id={tech.id} className="tech-logo-svg" />
                    </div>
                    <span className="tech-icon-label">{tech.title}</span>
                  </div>
                ))}
              </div>

              <div className="tech-details-panel">
                <h3 className="tech-details-title">{activeTechData.title}</h3>
                <p className="tech-details-desc">{activeTechData.desc}</p>
                <Link 
                  href={`/technology/${activeTechData.slug}`} 
                  className="btn btn-reach-out" 
                  style={{ backgroundColor: '#2d378b', color: '#ffffff' }}
                >
                  Explore Technology
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
export { technologiesData };
