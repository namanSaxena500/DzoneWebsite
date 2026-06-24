import React from 'react';
import Navbar from '@/components/home/Navbar';
import Portfolio from '@/components/home/Portfolio';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';

// Modular About-specific components
import AboutHero from '@/components/about/AboutHero';
import AboutProcess from '@/components/about/AboutProcess';
import AboutTechIntro from '@/components/about/AboutTechIntro';
import AboutExpertise from '@/components/about/AboutExpertise';
import AboutBanner from '@/components/about/AboutBanner';
import AboutTech from '@/components/about/AboutTech';

export const metadata = {
  title: 'About Us | Dzone - Tech Agency & Software Development Partner',
  description: 'Learn about Dzone, our serpentine development process, domain expertise in custom software, and technologies we specialize in.',
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* 1. About Hero Section */}
      <AboutHero />

      {/* 2. Serpent/Process Timeline Section */}
      <AboutProcess />

      {/* 3. Tech Introduction with Laptop Mockup */}
      <AboutTechIntro />

      {/* 4. Domain Expertise Section */}
      <AboutExpertise />

      {/* 5. Contribution To Our Customers' Success (Portfolio Showcase) */}
      <Portfolio />

      {/* 6. Call-to-action Banner */}
      <AboutBanner />

      {/* 7. Technologies Grid Section */}
      <AboutTech />

      {/* 8. Get a Free Estimate Contact Form */}
      <Contact />

      <Footer />
    </main>
  );
}
