import './globals.css';

export const metadata = {
  metadataBase: new URL('https://dzone.ae'),
  title: 'Dzone - Tech Agency & Software Development Partner',
  description: 'We build the modern web, expand your digital prospects, and offer expert IT outsourcing services in healthcare, finance, education, and more.',
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
      "telephone": "+91-845168465111",
      "contactType": "customer service",
      "email": "digitalinfluencerns@gmail.com"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
