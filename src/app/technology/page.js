import React from 'react';
import Navbar from '@/components/Navbar';
import TechnologyHero from '@/components/TechnologyHero';
import ServiceTechnologies from '@/components/ServiceTechnologies';
import CtaBanner from '@/components/CtaBanner';
import Portfolio from '@/components/Portfolio';
import Expertise from '@/components/Expertise';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Technologies We Deploy | Dzone',
  description: 'Explore our comprehensive tech stack including React, Next.js, Flutter, React Native, Node.js, Go, Python, PostgreSQL, and Figma to build your software products.',
  alternates: {
    canonical: '/technology',
  },
};

const technologyFaqItems = [
  {
    id: 1,
    question: 'How does Dzone select the right technology stack for a project?',
    answer: 'We evaluate your project\'s specific business goals, performance criteria, scalability needs, and long-term maintenance costs. For instance, we recommend Next.js for content-heavy web apps requiring great SEO, React Native or Flutter for cross-platform mobile apps, and robust Node.js microservices with PostgreSQL for concurrent backend requirements.'
  },
  {
    id: 2,
    question: 'Do you help in migrating legacy software to modern frameworks like React and Next.js?',
    answer: 'Absolutely. We specialize in software modernization and database migration. We can transition legacy systems (such as old PHP or .NET builds) to modern, fast stacks like React, Next.js, and Node.js with zero downtime, preserving all existing SEO pathways, database integrity, and page layouts.'
  },
  {
    id: 3,
    question: 'What databases and cloud architectures do you support?',
    answer: 'We build scalable cloud setups using AWS, GCP, and Azure. For databases, we deploy relational SQL systems (PostgreSQL, MySQL) for structured transactional records, and NoSQL databases (MongoDB, Redis) for flexible JSON schemas, caching, and real-time performance.'
  },
  {
    id: 4,
    question: 'How do you ensure the security and speed of the tech stacks you deploy?',
    answer: 'We enforce bank-grade security protocols (HTTPS/TLS, JWT auth, secure environment variables, and SQL injection prevention). For performance, we optimize images, structure clean modular code, configure Edge CDN caching (Cloudflare, AWS CloudFront), and ensure perfect score Core Web Vitals.'
  },
  {
    id: 5,
    question: 'Are your designs and prototypes built to transition smoothly into code?',
    answer: 'Yes! Our UI/UX designers create high-fidelity responsive component libraries in Figma, adhering to strict design systems. These Figma components map directly to reusable React or CSS classes, which translates to pixel-perfect visual styling and fast frontend engineering.'
  }
];

export default function TechnologyIndexPage() {
  return (
    <div>
      <Navbar />
      <TechnologyHero 
        title="Technologies We Deploy"
        desc="We build digital foundations using a modern, scalable tech stack. From high-fps mobile frameworks to highly concurrent backend architectures and cloud databases."
        launchText="Frontend . Backend . Mobile . Database . UI/UX Design"
        techId={null}
      />
      <ServiceTechnologies />
      <CtaBanner />
      <Portfolio />
      <Expertise isStatic={false} />
      <WhyUs />
      <Contact />
      <Testimonials />
      <Faq items={technologyFaqItems} />
      <Footer />
    </div>
  );
}
