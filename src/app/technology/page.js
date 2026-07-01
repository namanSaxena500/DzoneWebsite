import React from 'react';
import TechnologyDetailPage from '@/components/TechnologyDetailPage';
import { technologiesData } from '@/data/technologiesData';

export async function generateMetadata() {
  const tech = technologiesData.find((t) => t.slug === 'react');
  if (!tech) {
    return {
      title: 'Technologies | Dzone',
    };
  }
  return {
    title: `${tech.title} Development Services | Dzone - Tech Agency`,
    description: tech.desc,
  };
}

export default function TechnologyIndexPage() {
  return <TechnologyDetailPage slug="react" />;
}
