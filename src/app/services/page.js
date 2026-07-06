import React from 'react';
import Navbar from '@/components/Navbar';
import ServiceHero from '@/components/ServiceHero';
import ServicesList from '@/components/ServicesList';
import ServiceTechnologies from '@/components/ServiceTechnologies';
import CtaBanner from '@/components/CtaBanner';
import Portfolio from '@/components/Portfolio';
import Expertise from '@/components/Expertise';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Software Engineering & Design Services | Dzone',
  description: 'Explore the full range of custom software development, UI/UX design, mobile applications, cyber security, DevOps, and cloud services offered by Dzone.',
  alternates: {
    canonical: '/services',
  },
};

const servicesFaqItems = [
  {
    id: 1,
    question: 'What types of software services does Dzone specialize in?',
    answer: 'Dzone offers a comprehensive suite of digital services, including custom web application development (React, Next.js, Node.js), native and cross-platform mobile app development (iOS, Android, React Native, Flutter), premium UI/UX design, cloud architecture design, and automated QA/DevOps setup.'
  },
  {
    id: 2,
    question: 'How do you handle intellectual property (IP) and source code ownership?',
    answer: 'Upon project completion and final payment, 100% of the source code, intellectual property rights, and design assets are transferred to your business. We maintain strict NDA terms and ensure complete confidentiality throughout our engagement.'
  },
  {
    id: 3,
    question: 'Do you offer flexible hiring models for freelance IT developers?',
    answer: 'Yes! We provide flexible engagement options: project-based pricing (fixed bid for defined scopes), hourly billing (time & materials for evolving requirements), or dedicated team outsourcing where you get monthly access to our top developers and designers.'
  },
  {
    id: 4,
    question: 'What is Dzone\'s workflow and visual check cadence?',
    answer: 'We break our software builds into weekly or bi-weekly sprints. At the end of each sprint, we provide staging links, demo videos, and visual walkthroughs of the work completed. This guarantees you are always aligned with the progress and can give immediate feedback.'
  },
  {
    id: 5,
    question: 'How do you ensure search engine optimization (SEO) in your web apps?',
    answer: 'Every website we build is optimized for SEO from the ground up. We use server-side rendering (SSR) via Next.js for lightning-fast loads, structure semantic HTML5 elements correctly, add JSON-LD schema metadata, and optimize Core Web Vitals to help your business rank #1 on Google.'
  }
];

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
      <ServiceTechnologies techIds={[]} />
      <CtaBanner />
      <Portfolio />
      <Expertise isStatic={false} />
      <WhyUs />
      <Contact />
      <Testimonials />
      <Faq items={servicesFaqItems} />
      <Footer />
    </div>
  );
}
