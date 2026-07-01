import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { servicesData } from '@/data/servicesData';

export async function generateMetadata() {
  const service = servicesData.find((s) => s.slug === 'web-dev');
  if (!service) {
    return {
      title: 'Services | Dzone',
    };
  }
  return {
    title: `${service.title} | Dzone - Tech Agency & Software Development Partner`,
    description: service.desc,
  };
}

export default function ServicesIndexPage() {
  return <ServiceDetailPage slug="web-dev" />;
}
