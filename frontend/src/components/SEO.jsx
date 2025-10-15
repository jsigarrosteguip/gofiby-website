import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Gofiby - Internet Fibra Óptica en Lima | TV Cable Incluida',
  description = 'Internet ultra rápido por fibra óptica en Santiago de Surco, Lima. Planes desde S/79 con TV Cable Go incluida. Instalación gratis. Internet para familias, gamers y trabajo remoto.',
  keywords = 'internet fibra optica lima, internet santiago de surco, internet rapido peru, cable tv lima, iptv peru, gofiby, internet para gamers, internet hogar lima',
  image = 'https://customer-assets.emergentagent.com/job_smart-fiber-peru/artifacts/913bw2ek_Gemini_Generated_Image_7my2107my2107my2.png',
  url = 'https://gofiby.com'
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="Gofiby" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_PE" />
      <meta property="og:site_name" content="Gofiby" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Geo Tags */}
      <meta name="geo.region" content="PE-LIM" />
      <meta name="geo.placename" content="Santiago de Surco" />
      <meta name="geo.position" content="-12.1391;-77.0122" />
      <meta name="ICBM" content="-12.1391, -77.0122" />

      {/* Contact Information */}
      <meta name="contact" content="gofibyinternet@gmail.com" />
      <meta name="phone" content="+51942117296" />

      {/* Schema.org Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Gofiby',
          image: image,
          '@id': url,
          url: url,
          telephone: '+51942117296',
          priceRange: 'S/79 - S/159',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jr. Monte Cedro #521',
            addressLocality: 'Santiago de Surco',
            addressRegion: 'Lima',
            postalCode: '15039',
            addressCountry: 'PE'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -12.1391,
            longitude: -77.0122
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
          },
          sameAs: [
            'https://www.facebook.com/gofiby',
            'https://www.instagram.com/gofiby'
          ],
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: -12.1391,
              longitude: -77.0122
            },
            geoRadius: '5000'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Planes de Internet',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Internet 400 Mbps + TV',
                  description: 'Internet por fibra óptica 400 Mbps con TV Cable incluida'
                },
                price: '79.00',
                priceCurrency: 'PEN'
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Internet 600 Mbps + TV',
                  description: 'Internet por fibra óptica 600 Mbps con TV Cable incluida'
                },
                price: '89.00',
                priceCurrency: 'PEN'
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Internet 1000 Mbps + TV',
                  description: 'Internet por fibra óptica 1000 Mbps con TV Cable incluida'
                },
                price: '130.00',
                priceCurrency: 'PEN'
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;