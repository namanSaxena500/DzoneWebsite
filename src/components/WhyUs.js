import React from 'react';

const defaultWhyUsItems = [
  {
    title: 'Long-term Partner You Can Trust',
    text: 'A technology partner for 200+ clients across Asia, Europe, and Oceania, supporting stable delivery over time. We are also active members of international chambers, strengthening collaboration.'
  },
  {
    title: 'Skilled Engineering Talent',
    text: 'Our developers specialize in high-end frameworks like React, Next.js, Node.js, and Flutter. We maintain strict coding guidelines and documentation patterns.'
  },
  {
    title: 'Agile & serpentine Process',
    text: 'We break complex projects into iterative code sprints. From user persona wireframes to production deployment, our process ensures visual checkpoints at every stage.'
  },
  {
    title: 'Strict Quality Assurance',
    text: 'Every line of code undergoes manual reviews and automated test suites. We set up custom CI/CD pipelines to catch bugs early and guarantee flawless releases.'
  },
  {
    title: 'Robust Cloud Scalability',
    text: 'We build auto-scaling, containerized cloud setups on AWS and GCP. Our microservice systems are designed to handle high traffic loads with 99.99% uptime.'
  },
  {
    title: 'Pixel-Perfect UI/UX Design',
    text: 'We create visually striking user interfaces with harmonious custom palettes, smooth hover micro-animations, and glassmorphic panels that engage audiences.'
  },
  {
    title: 'Transparent Communication',
    text: 'Collaborate with us in real-time through shared Slack channels, weekly check-in calls, and collaborative live Figma workspaces. No updates get lost.'
  },
  {
    title: 'Security-First Architecture',
    text: 'We apply bank-grade security layers (OAuth2, HTTPS/TLS, AES-256) and design database structures that satisfy HIPAA, GDPR, and PCI-DSS compliance standards.'
  }
];

export default function WhyUs({ items = defaultWhyUsItems }) {
  return (
    <section className="why-us">
      <div className="container">
        <h2>Why Choose US ?</h2>
        <p className="why-us-subtitle">don't just write code; we build digital foundations.</p>

        <div className="why-us-grid-new">
          {items.map((item, idx) => (
            <div key={idx} className="why-us-item-new">
              <div className="why-us-header-new">
                <span className="why-us-num-new">{idx + 1}.</span>
                <h3 className="why-us-title-new">{item.title}</h3>
              </div>
              <p className="why-us-text-new">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export { defaultWhyUsItems };
