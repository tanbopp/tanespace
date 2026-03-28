import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://tanbopp.github.io/tanespace';
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/silk-road-space-harvest.jpg`;
const SITE_NAME = 'TANESPACE';

export default function SEO({
  title,
  description = 'TANESPACE harvests water from near-Earth asteroids, splits it into rocket propellant in orbit — unlocking sustainable interplanetary travel.',
  image = DEFAULT_IMAGE,
  path = '',
  type = 'website',
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Asteroid Water Mining for Orbital Refueling`;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp, etc.) */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Extra SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0a0a0a" />
    </Helmet>
  );
}
