import React from 'react';
import TechnologyDetailPage from '@/components/TechnologyDetailPage';
import { technologiesData } from '@/data/technologiesData';

export async function generateStaticParams() {
  return technologiesData.map((tech) => ({
    slug: tech.slug,
  }));
}

export async function generateMetadata({ params }) {
  const tech = technologiesData.find((t) => t.slug === params.slug);
  if (!tech) {
    return {
      title: 'Technology Not Found | Dzone',
    };
  }
  return {
    title: `Freelance ${tech.title} Developer in Jaipur | Dzone`,
    description: `Looking for freelance ${tech.title} development in Jaipur? Dzone provides expert software solutions built with ${tech.title}. ${tech.desc}`,
  };
}

export default function DynamicTechnologyPage({ params }) {
  return <TechnologyDetailPage slug={params.slug} />;
}
