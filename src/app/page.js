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
  title: 'Dzone | Top-Tier Custom Software & Web Development Agency',
  description: 'Dzone delivers high-performance custom software solutions, modern web application development, mobile apps, and scalable cloud architectures. Partner with expert developers.',
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
