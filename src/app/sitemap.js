import { servicesData } from '@/data/servicesData';
import { technologiesData } from '@/data/technologiesData';

export default function sitemap() {
  const baseUrl = 'https://dzone.ae';

  // Base routes
  const routes = ['', '/services', '/technology'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Service sub-pages
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Technology sub-pages
  const technologyRoutes = technologiesData.map((tech) => ({
    url: `${baseUrl}/technology/${tech.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...technologyRoutes];
}
