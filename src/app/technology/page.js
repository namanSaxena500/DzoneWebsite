import React from 'react';
import Navbar from '@/components/Navbar';
import ServiceTechnologies from '@/components/ServiceTechnologies';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Technologies & Frameworks We Deploy | Dzone',
  description: 'Explore our comprehensive tech stack including React, Next.js, Flutter, React Native, Node.js, Go, Python, PostgreSQL, and Figma to build your software products.',
};

export default function TechnologyIndexPage() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '40px' }}>
        <ServiceTechnologies />
      </div>
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}
