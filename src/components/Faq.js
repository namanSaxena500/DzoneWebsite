'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const defaultFaqItems = [
  {
    id: 1,
    question: 'How do we start collaboration?',
    answer: 'Simply fill out our contact form or send us an email. We will arrange a discovery call to discuss your business requirements, define key milestones, and deliver a detailed project estimate.'
  },
  {
    id: 2,
    question: 'What is your development methodology?',
    answer: 'We follow Agile serpentine methodology, executing project details in 2-week sprints. Each sprint includes development, manual review, automated test audits, and visual feedback sessions.'
  },
  {
    id: 3,
    question: 'Do you offer post-deployment maintenance?',
    answer: 'Yes! We offer monthly maintenance plans to monitor server health, update security configurations, run dependency updates, and deploy minor visual adjustments.'
  }
];

export default function Faq({ items = defaultFaqItems }) {
  const [expandedFaq, setExpandedFaq] = useState(1); // First item open by default

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {items.map((item) => (
            <div
              key={item.id}
              className={`faq-item ${expandedFaq === item.id ? 'active' : ''}`}
            >
              <button
                className="faq-trigger"
                onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
              >
                <span style={{ color: expandedFaq === item.id ? "#2E3092" : "#000000", fontWeight: '700' }}>
                  {item.question}
                </span>
                <ChevronDown className="faq-chevron" size={16} />
              </button>
              <div className="faq-content">
                <div className="faq-content-inner">
                  <p className="faq-text">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export { defaultFaqItems };
