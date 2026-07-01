import React from 'react';
import { notFound } from 'next/navigation';
import { technologiesData } from '@/data/technologiesData';

// Import reusable root components
import Navbar from '@/components/Navbar';
import TechnologyHero from '@/components/TechnologyHero';
import TechIntro from '@/components/TechIntro';
import ServicesGrid from '@/components/ServicesGrid';
import Portfolio from '@/components/Portfolio';
import Expertise from '@/components/Expertise';
import CtaBanner from '@/components/CtaBanner';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function TechnologyDetailPage({ slug }) {
  const tech = technologiesData.find((t) => t.slug === slug);

  if (!tech) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <TechnologyHero 
        title={`${tech.title} Development`}
        desc={tech.desc}
        launchText={tech.launchText}
        techId={tech.id}
      />
      <TechIntro 
        title={tech.introTitle}
        desc={tech.introDesc}
        imageSrc={tech.introImage || "/images/abouttechleftinmage.png"}
      />
      <ServicesGrid 
        title={tech.featuresTitle || `What Makes ${tech.title} Unique`}
        services={tech.features}
      />
      <Portfolio />
      <Expertise isStatic={true} />
      <CtaBanner />
      <WhyUs />
      <Contact />
      <Faq items={tech.faq} />
      <Footer />
    </div>
  );
}
export { technologiesData };
