import React from 'react';
import Navbar from '@/components/Navbar';
import TechnologyHero from '@/components/TechnologyHero';
import ServiceTechnologies from '@/components/ServiceTechnologies';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Technologies We Deploy | Dzone',
  description: 'Explore our comprehensive tech stack including React, Next.js, Flutter, React Native, Node.js, Go, Python, PostgreSQL, and Figma to build your software products.',
};

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
      <Contact />
      <Footer />
    </div>
  );
}
