import { servicesData } from '@/data/servicesData';
import { technologiesData } from '@/data/technologiesData';

export default async function sitemap() {
  // Base URL of the website
  const baseUrl = 'https://dzone.ae';

  // Core static routes
  const staticRoutes = ['', '/about', '/services', '/technology'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic services routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic technologies routes
  const technologyRoutes = technologiesData.map((tech) => ({
    url: `${baseUrl}/technology/${tech.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...technologyRoutes];
}
