import React from 'react';
import Navbar from '@/components/Navbar';
import ServiceHero from '@/components/ServiceHero';
import ServicesList from '@/components/ServicesList';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Software Engineering & Design Services | Dzone',
  description: 'Explore the full range of custom software development, UI/UX design, mobile applications, cyber security, DevOps, and cloud services offered by Dzone.',
};

export default function ServicesIndexPage() {
  return (
    <div>
      <Navbar />
      <ServiceHero 
        title="Our Software Services"
        desc="We build premium digital products, combining top-tier UI/UX designs, high-performance web development, mobile applications, and secure cloud infrastructures."
        launchText="UI/UX Design . Web & Mobile Development . Cloud DevOps"
      />
      <ServicesList />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}
