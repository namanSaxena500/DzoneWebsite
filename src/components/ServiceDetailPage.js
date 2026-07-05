import React from 'react';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/servicesData';

// Import reusable root components
import Navbar from '@/components/Navbar';
import ServiceHero from '@/components/ServiceHero';
import ServicesGrid from '@/components/ServicesGrid';
import ServiceBest from '@/components/ServiceBest';
import ServiceTechnologies from '@/components/ServiceTechnologies';
import CtaBanner from '@/components/CtaBanner';
import Portfolio from '@/components/Portfolio';
import Expertise from '@/components/Expertise';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function ServiceDetailPage({ slug }) {
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <ServiceHero 
        title={service.heroTitle || service.title}
        desc={service.heroDesc || service.desc}
        launchText={service.heroLaunch}
      />
      <ServicesGrid 
        title={`Our ${service.title} Offerings`}
        services={service.subServices}
        slug={slug}
      />
      <ServiceBest 
        title={service.bestGotTitle}
        desc={service.bestGotDesc}
        imageSrc={service.bestGotImage}
      />
      <ServiceTechnologies 
        techIds={service.techIds}
      />
      <CtaBanner />
      <Portfolio />
      <Expertise isStatic={true} />
      <WhyUs />
      <Contact />
      <Faq items={service.faq} />
      <Testimonials />
      <Footer />
    </div>
  );
}
export { servicesData };
