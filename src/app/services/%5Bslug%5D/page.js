import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { servicesData } from '@/data/servicesData';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: 'Service Not Found | Dzone',
    };
  }
  return {
    title: `${service.title} | Dzone - Tech Agency & Software Development Partner`,
    description: service.desc,
  };
}

export default function DynamicServicePage({ params }) {
  return <ServiceDetailPage slug={params.slug} />;
}
