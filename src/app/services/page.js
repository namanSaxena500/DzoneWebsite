import React from 'react';
import Navbar from '@/components/Navbar';
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
      <div style={{ paddingTop: '40px' }}>
        <ServicesList />
      </div>
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}
