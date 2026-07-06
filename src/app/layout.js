import { Suspense } from 'react';
import PageProgressBar from '@/components/PageProgressBar';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata = {
  metadataBase: new URL('https://dzone.ae'),
  title: 'Dzone - Freelance IT Services & Web Development Partner',
  description: 'Dzone delivers top-tier freelance IT services and custom web development in Jaipur. We build responsive web apps, mobile solutions, and cloud architectures.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dzone",
    "url": "https://dzone.ae",
    "logo": "https://dzone.ae/images/logo2.png",
    "description": "We build the modern web, expand your digital prospects, and offer expert IT outsourcing services in healthcare, finance, education, and more.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7240621224",
      "contactType": "customer service",
      "email": "digitalinfluencerns@gmail.com"
    }
  };

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <PageProgressBar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
