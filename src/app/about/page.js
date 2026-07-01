import React from 'react';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import AboutProcess from '@/components/AboutProcess';
import TechIntro from '@/components/TechIntro';
import Expertise from '@/components/Expertise';
import Portfolio from '@/components/Portfolio';
import CtaBanner from '@/components/CtaBanner';
import ServiceTechnologies from '@/components/ServiceTechnologies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us | Dzone - Tech Agency & Software Development Partner',
  description: 'Learn about Dzone, our serpentine development process, domain expertise in custom software, and technologies we specialize in.',
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutProcess />
      <TechIntro />
      <Expertise isStatic={true} />
      <Portfolio />
      <CtaBanner />
      <ServiceTechnologies />
      <Contact />
      <Footer />
    </main>
  );
}
