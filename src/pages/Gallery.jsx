import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800&q=80', alt: 'Deep Space Nebula', caption: 'Deep Space Nebula — Target Region Survey', category: 'space' },
  { src: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80', alt: 'ASTRÆUS Concept', caption: 'ASTRÆUS Mk.I — Deployed Configuration', category: 'vehicle' },
  { src: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&q=80', alt: 'Asteroid Surface', caption: 'C-Type Asteroid Surface — Target NEA-2031', category: 'mission' },
  { src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80', alt: 'Solar Arrays', caption: 'Solar Thermal Concentrator Array', category: 'tech' },
  { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', alt: 'Earth from Orbit', caption: 'Earth — Our Starting Point', category: 'space' },
  { src: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80', alt: 'Ion Thruster', caption: 'High-Efficiency Ion Thruster — Test Fire', category: 'vehicle' },
  { src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80', alt: 'Mission Operations', caption: 'Orion Nebula — Future Fuel Depot Zone', category: 'mission' },
  { src: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80', alt: 'Electrolysis Lab', caption: 'PEM Electrolysis Unit — Lab Testing', category: 'tech' },
  { src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80', alt: 'Galaxy', caption: 'The Cosmic Perspective — Our Frontier', category: 'space' },
  { src: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80', alt: 'Orbital Depot', caption: 'L2 Orbital Fuel Depot — Concept Render', category: 'vehicle' },
  { src: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80', alt: 'Mars Destination', caption: 'Mars — Destination Enabled by TANESPACE', category: 'mission' },
  { src: 'https://images.unsplash.com/photo-1457364559154-aa2644600ebb?w=800&q=80', alt: 'Vapor Capture', caption: 'Vapor Capture Shroud — Deployment Simulation', category: 'tech' },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Mission', value: 'mission' },
  { label: 'ASTRÆUS', value: 'vehicle' },
  { label: 'Technology', value: 'tech' },
  { label: 'Deep Space', value: 'space' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <>
      <SEO
        title="Gallery"
        description="Visual gallery of TANESPACE missions, ASTRÆUS vehicles, asteroid concepts, and deep space documentation."
        path="/gallery"
      />
      {/* Page Header */}
      <div className="ts-page-header" style={{ minHeight: '50vh', display: 'flex', alignItems: 'flex-end' }}>
        <div className="ts-page-header__bg">
          <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80" alt="Gallery" fetchpriority="high" />
        </div>
        <div className="ts-page-header__overlay"></div>
        <div className="ts-page-header__content" style={{ paddingBottom: '4rem' }}>
          <div className="ts-hero__tag">MEDIA</div>
          <h1 className="ts-hero__title">
            <strong>Gallery</strong>
          </h1>
          <p className="ts-hero__desc">
            Visual concepts, renders, and documentation of the TANESPACE missions and ASTRÆUS vehicle.
          </p>
        </div>
      </div>

      {/* Gallery Filters */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '1.5rem 2rem' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {filters.map((f) => (
            <button
              key={f.value}
              className={`ts-tag${activeFilter === f.value ? ' ts-tag--teal' : ''}`}
              style={{ cursor: 'pointer', border: 'none' }}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Gallery */}
      <section className="ts-section--full">
        <div className="ts-gallery" id="gallery">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="ts-gallery__item"
              data-category={item.category}
              style={{ opacity: activeFilter === 'all' || item.category === activeFilter ? 1 : 0.2, transition: 'opacity 0.3s' }}
            >
              <LazyImage src={item.src} alt={item.alt} />
              <div className="ts-gallery__item__overlay">
                <div className="ts-gallery__item__caption">{item.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Image */}
      <div className="ts-image-block ts-image-block--hero" style={{ marginTop: '2px' }}>
        <LazyImage src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80" alt="The Silk Road of Space" />
        <div className="ts-image-block__overlay"></div>
        <div className="ts-image-block__content" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="ts-section__tag" style={{ color: 'var(--ts-teal)', textAlign: 'center' }}>Featured</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, maxWidth: '800px' }}>
            "The Silk Road of Space"<br />
            <strong style={{ fontWeight: 600 }}>Opening the Cosmos to Humanity</strong>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', maxWidth: '600px', marginTop: '1rem' }}>
            The concept of a network of refueling stations connecting Earth orbit to Mars through Lagrange points.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <section className="ts-section">
        <div className="ts-section__tag">Videos</div>
        <h2 className="ts-section__title">
          Video &amp; <strong>Documentation</strong>
        </h2>
        <p className="ts-section__desc">
          Test footage, mission simulations, and TANESPACE development documentation.
        </p>

        <div className="ts-grid ts-grid--3" style={{ gap: '2px', marginTop: '2rem' }}>
          <div className="ts-card" style={{ minHeight: '200px' }}>
            <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--ts-dark-04)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.3 }}>
                <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2" />
                <path d="M19 15l14 9-14 9V15z" fill="white" />
              </svg>
            </div>
            <h3 className="ts-card__title" style={{ fontSize: '1rem' }}>ASTRÆUS: Concept Overview</h3>
            <p className="ts-card__desc">A complete explanation of the ASTRÆUS concept and its mission.</p>
          </div>
          <div className="ts-card" style={{ minHeight: '200px' }}>
            <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--ts-dark-04)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.3 }}>
                <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2" />
                <path d="M19 15l14 9-14 9V15z" fill="white" />
              </svg>
            </div>
            <h3 className="ts-card__title" style={{ fontSize: '1rem' }}>Ion Thruster Test Fire</h3>
            <p className="ts-card__desc">Ion thruster testing at a vacuum test facility.</p>
          </div>
          <div className="ts-card" style={{ minHeight: '200px' }}>
            <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--ts-dark-04)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.3 }}>
                <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2" />
                <path d="M19 15l14 9-14 9V15z" fill="white" />
              </svg>
            </div>
            <h3 className="ts-card__title" style={{ fontSize: '1rem' }}>The Silk Road of Space</h3>
            <p className="ts-card__desc">The future vision of an interplanetary logistics network.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="ts-section__tag" style={{ textAlign: 'center' }}>Explore More</div>
          <h2 className="ts-section__title" style={{ textAlign: 'center' }}>
            Learn More<br />
            about <strong>TANESPACE</strong>
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/mission" className="ts-btn ts-btn--primary">
              Our Mission <Arrow />
            </Link>
            <Link to="/about" className="ts-btn ts-btn--ghost">
              About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
