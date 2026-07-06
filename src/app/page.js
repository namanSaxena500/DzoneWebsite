import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesList from '@/components/ServicesList';
import CtaBanner from '@/components/CtaBanner';
import Portfolio from '@/components/Portfolio';
import Expertise from '@/components/Expertise';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Freelance IT Services & Web Development in Jaipur | Dzone',
  description: 'Looking for freelance IT services or expert web development in Jaipur? Dzone provides top-tier custom software development, mobile apps, and scalable cloud architectures. Partner with expert developers today.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ServicesList />
      <CtaBanner />
      <Portfolio />
      <Expertise />
      <WhyUs />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}
