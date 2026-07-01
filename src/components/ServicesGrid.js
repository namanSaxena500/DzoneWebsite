import React from 'react';

const defaultSubServices = [
  {
    id: 1,
    title: 'Custom Web Application Development',
    desc: 'We build bespoke web applications that solve your business challenges. Unlike generic tools, our custom solutions are designed around your workflows, processes, and user needs.'
  },
  {
    id: 2,
    title: 'Frontend Development',
    desc: 'We construct responsive web applications using React and Next.js, assuring state-of-the-art modular structure and clean data flows.'
  },
  {
    id: 3,
    title: 'Backend Development',
    desc: 'Event-driven, non-blocking I/O server runtime. Node.js enables microservice architectures, real-time socket channels, and high-concurrency API integrations.'
  },
  {
    id: 4,
    title: 'Full-Stack Web Development',
    desc: 'Seamless integration between client and server layers, with responsive visual aesthetics, fluid user animations, and modular styling sheets.'
  },
  {
    id: 5,
    isImage: true,
    image: '/images/side1.png'
  },
  {
    id: 6,
    title: 'E-commerce Web Development',
    desc: 'Build lightning-fast e-commerce storefronts that elevate brand presence globally, utilizing custom payment integrations and order processing flows.'
  },
  {
    id: 7,
    title: 'Progressive Web App',
    desc: 'Modern single page applications featuring offline-first capabilities, push notifications, and fast loading times on all mobile devices.'
  },
  {
    id: 8,
    title: 'CMS Development Service',
    desc: 'Empower content creation with headless CMS configurations, offering rich foundations for modern web interfaces.'
  },
  {
    id: 9,
    title: 'Website Modernization & Migration',
    desc: 'Transition legacy systems to modern, fast stacks with zero downtime and perfect SEO path preservation.'
  }
];

export default function ServicesGrid({ 
  title = "Our Specialized Solutions", 
  subtitle = "We cover the full spectrum of development, offering tailored services that align with your business model and industry requirements.",
  services = defaultSubServices 
}) {
  return (
    <section className="service-grid-section">
      <div className="container">
        <h2 className="service-grid-title">{title}</h2>
        <p className="service-grid-subtitle">
          {subtitle}
        </p>

        <div className="service-grid-layout">
          {services.map((card) => {
            if (card.isImage) {
              return (
                <div key={card.id} className="service-card-new image-card">
                  <img src={card.image} alt="Office team" className="service-card-image" />
                </div>
              );
            }
            return (
              <div key={card.id} className="service-card-new">
                <h3 className="service-card-title-new">{card.title}</h3>
                <p className="service-card-desc-new">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export { defaultSubServices };
