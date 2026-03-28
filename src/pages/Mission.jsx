import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function Mission() {

  const fuelLogisticsItems = [
    {
      title: 'Why is launching from Earth so expensive?',
      content: "Earth's gravity requires an escape velocity of 11.2 km/s. To achieve this, rockets must carry enormous amounts of propellant — and that propellant itself adds to the weight that must be lifted. This is known as the \"tyranny of the rocket equation\" (Tsiolkovsky). As a result, over 85% of a rocket's total mass at launch is propellant."
    },
    {
      title: 'How does asteroid water become fuel?',
      content: 'Water (H₂O) is split through electrolysis into Hydrogen (H₂) and Oxygen (O₂). Both are cooled into liquid form: Liquid Hydrogen (LH₂) and Liquid Oxygen (LOX). The LH₂/LOX combination is one of the most efficient rocket propellants, used in engines like the RS-25 (Space Shuttle) and RL-10.'
    },
    {
      title: 'Why Lagrange Point L2?',
      content: "Lagrange Point L2 (behind Earth relative to the Sun) is a location where gravity balances between Earth and the Sun. An object at L2 can \"float\" there with minimal energy. This makes it the perfect strategic point for a fuel depot — easily accessible from Earth, the Moon, and as a departure point toward Mars."
    },
    {
      title: 'What about asteroids with different compositions?',
      content: 'TANESPACE focuses on C-type (Carbonaceous) asteroids, known to contain high water content (5–20% of mass). These are the most common type, accounting for roughly 75% of all known asteroids. AI sensors on ASTRÆUS analyze composition in real time to optimize targeting and extraction.'
    }
  ];

  return (
    <>
      <SEO
        title="The Silk Road of Space"
        description="TANESPACE's primary mission: harvesting asteroid water to build the world's first orbital fuel logistics network."
        path="/mission"
      />
      {/* Page Header */}
      <div className="ts-page-header" style={{minHeight: '70vh', display: 'flex', alignItems: 'flex-end'}}>
        <div className="ts-page-header__bg">
          <img src="https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=1920&q=80" alt="Mission Background" fetchpriority="high" />
        </div>
        <div className="ts-page-header__overlay"></div>
        <div className="ts-page-header__content" style={{paddingBottom: '4rem'}}>
          <div className="ts-hero__tag">PRIMARY MISSION</div>
          <h1 className="ts-hero__title">
            The Silk Road<br />
            <strong>of Space</strong>
          </h1>
          <p className="ts-hero__desc">
            Asteroid Water Mining for Orbital Refueling — Building the world's first space fuel logistics network.
          </p>
        </div>
      </div>

      {/* Mission Introduction */}
      <section className="ts-section">
        <div className="ts-grid ts-grid--2" style={{gap: '4rem', alignItems: 'start'}}>
          <div>
            <div className="ts-section__tag">The Problem</div>
            <h2 className="ts-section__title">
              Earth's Gravity:<br />
              <strong>The Greatest Barrier</strong>
            </h2>
            <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem'}}>
              Every kilogram sent to orbit costs thousands of dollars. Rocket propellant accounts for a vast majority of total launch mass — meaning we use fuel to lift fuel itself. This is the logistical paradox that has hindered space exploration for over 60 years.
            </p>
            <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8}}>
              The launch cost per kilogram to Low Earth Orbit (LEO) remains around $2,720 (SpaceX Falcon Heavy). For missions to Mars, fuel requirements grow exponentially, making interplanetary missions extremely costly and inefficient.
            </p>
          </div>
          <div>
            <div className="ts-section__tag">The Solution</div>
            <h2 className="ts-section__title">
              Asteroids as<br />
              <strong>"Gas Stations" of Space</strong>
            </h2>
            <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem'}}>
              Many Near-Earth Asteroids contain high water content — up to 20% of their total mass. Technically, we already have the technology to land on asteroids (demonstrated by the Hayabusa and OSIRIS-REx missions).
            </p>
            <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8}}>
              TANESPACE takes the next step: <strong style={{color: 'var(--ts-teal)'}}>industrial-scale extraction</strong>. The harvested water is split into Liquid Hydrogen (H₂) and Liquid Oxygen (O₂) — standard rocket propellant — directly in space, without fighting Earth's gravity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Stats */}
      <div className="ts-stats">
        <div className="ts-stat">
          <div className="ts-stat__value">$<span>2.7</span>K</div>
          <div className="ts-stat__label">Cost per kg to LEO (current)</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value">$<span>270</span></div>
          <div className="ts-stat__label">Target cost with TANESPACE</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>20</span>%</div>
          <div className="ts-stat__label">Water content in C-type asteroids</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>∞</span></div>
          <div className="ts-stat__label">Sustainable missions enabled</div>
        </div>
      </div>

      {/* Image Break */}
      <div className="ts-image-block ts-image-block--medium">
        <LazyImage src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1920&q=80" alt="Asteroid Mining Concept" />
        <div className="ts-image-block__overlay"></div>
        <div className="ts-image-block__content">
          <p style={{fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-gray-50)'}}>
            Artist's Concept — Vapor Capture Shroud deploying on C-type asteroid
          </p>
        </div>
      </div>

      {/* Mission Phases */}
      <section className="ts-section">
        <div className="ts-section__tag">Mission Phases</div>
        <h2 className="ts-section__title">
          Phases of the <strong>Primary Mission</strong>
        </h2>
        <p className="ts-section__desc">
          The "Silk Road of Space" mission consists of four major phases designed to progressively build the world's first space fuel logistics infrastructure.
        </p>

        <div className="ts-grid ts-grid--4" style={{marginTop: '2rem'}}>
          <div className="ts-card">
            <div className="ts-card__number">Phase 01</div>
            <span className="ts-tag ts-tag--teal" style={{marginBottom: '1rem', alignSelf: 'flex-start'}}>2026-2028</span>
            <h3 className="ts-card__title">Survey &amp; Navigation</h3>
            <p className="ts-card__desc">
              Mapping water-rich near-Earth asteroids using space-based telescopy and AI. Identifying optimal targets based on composition, orbit, and accessibility.
            </p>
          </div>
          <div className="ts-card">
            <div className="ts-card__number">Phase 02</div>
            <span className="ts-tag ts-tag--blue" style={{marginBottom: '1rem', alignSelf: 'flex-start'}}>2028-2030</span>
            <h3 className="ts-card__title">ASTRÆUS Deployment</h3>
            <p className="ts-card__desc">
              Launching the first ASTRÆUS unit toward the target asteroid. Deploying the Vapor Capture Shroud and beginning the water extraction process from the asteroid surface.
            </p>
          </div>
          <div className="ts-card">
            <div className="ts-card__number">Phase 03</div>
            <span className="ts-tag ts-tag--purple" style={{marginBottom: '1rem', alignSelf: 'flex-start'}}>2030-2032</span>
            <h3 className="ts-card__title">Refinery Operations</h3>
            <p className="ts-card__desc">
              Full operation of the electrolysis unit and processing laboratory. Converting water into LH₂ and LOX. Transport to Lagrange Point L2 for storage and distribution.
            </p>
          </div>
          <div className="ts-card">
            <div className="ts-card__number">Phase 04</div>
            <span className="ts-tag" style={{marginBottom: '1rem', alignSelf: 'flex-start'}}>2032+</span>
            <h3 className="ts-card__title">Silk Road Network</h3>
            <p className="ts-card__desc">
              Building the full network of refueling stations at multiple strategic points. The ASTRÆUS fleet operates autonomously, forming the Silk Road of Space.
            </p>
          </div>
        </div>
      </section>

      {/* The Silk Road of Space */}
      <section className="ts-split">
        <div className="ts-split__content" style={{background: 'var(--ts-dark-02)'}}>
          <div className="ts-section__tag">The Vision</div>
          <h2 className="ts-section__title">
            Building the<br />
            <strong>Silk Road of Space</strong>
          </h2>
          <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem'}}>
            Just as the ancient Silk Road connected Eastern and Western civilizations through trade routes, TANESPACE is building a space logistics network linking Earth, the Moon, and other planets through refueling stations.
          </p>

          <div className="ts-quote">
            <p>"This is not merely a science exploration mission — it is a pure logistics mission: visit water-rich asteroids, harvest them, and return to a stable orbital point to serve as a refueling station for other spacecraft."</p>
            <cite>— TANESPACE Mission Statement</cite>
          </div>

          <ul className="ts-list" style={{marginTop: '1.5rem'}}>
            <li>Autonomously approach water-rich asteroids</li>
            <li>Harvest and process water into rocket propellant</li>
            <li>Return to Lagrange Point L2 as a refueling station</li>
            <li>Supply fuel for spacecraft bound for Mars and Jupiter</li>
            <li>Build a multi-point station network across the inner solar system</li>
          </ul>
        </div>
        <div className="ts-split__image">
          <LazyImage src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=960&q=80" alt="Silk Road of Space" />
        </div>
      </section>

      {/* Fuel Logistics Explanation */}
      <section className="ts-section">
        <div className="ts-section__tag">Fuel Logistics</div>
        <h2 className="ts-section__title">
          Fuel <strong>Logistics</strong>
        </h2>
        <p className="ts-section__desc">
          How TANESPACE fundamentally transforms the economics of space fuel.
        </p>
        <Accordion items={fuelLogisticsItems} style={{maxWidth: '900px'}} />
      </section>

      {/* Mission 02: HELIOS */}
      <section style={{background: 'var(--ts-dark-03)', padding: '6rem 2rem'}}>
        <div style={{maxWidth: '1584px', margin: '0 auto'}}>
          <div className="ts-section__tag">Also from TANESPACE</div>
          <h2 className="ts-section__title">Mission 02:<br /><strong>HELIOS</strong></h2>
          <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.7, maxWidth: '600px', margin: '1.5rem 0 3rem'}}>
            While ASTRÆUS opens the path to deep space, HELIOS ensures orbits remain safe to traverse — by sweeping hundreds of thousands of debris fragments using laser ablation.
          </p>
          <div className="ts-grid ts-grid--2" style={{gap: '2px', maxWidth: '900px'}}>
            <div className="ts-card" style={{borderTop: '3px solid var(--ts-accent)', minHeight: '260px'}}>
              <div style={{fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-accent)', marginBottom: '0.5rem'}}>Mission 02 — ORBIT DEFENSE</div>
              <h3 className="ts-card__title" style={{fontSize: '1.75rem', marginBottom: '1rem'}}>HELIOS</h3>
              <p className="ts-card__desc">
                High-Energy Laser Interdiction &amp; Orbital Sweeper. Clears the Kessler Syndrome threat using laser ablation — no physical contact, no collision risk, at the speed of light.
              </p>
              <Link to="/mission/helios" className="ts-btn ts-btn--primary" style={{marginTop: '1.5rem', alignSelf: 'flex-start', fontSize: '0.75rem', padding: '0.625rem 1.25rem'}}>
                Explore HELIOS
                <Arrow />
              </Link>
            </div>
            <div className="ts-card" style={{minHeight: '260px', justifyContent: 'space-between'}}>
              <div>
                <div className="ts-card__number">Why Both Matter</div>
                <p className="ts-card__desc">
                  ASTRÆUS needs clear launch corridors. HELIOS clears them. Together, they build a safe and sustainable orbital ecosystem for all of humanity.
                </p>
              </div>
              <div style={{display: 'flex', gap: '1.5rem', marginTop: '2rem'}}>
                <div>
                  <div style={{fontSize: '1.5rem', fontWeight: 700, color: 'var(--ts-white)'}}>1M+</div>
                  <div style={{fontSize: '0.75rem', color: 'var(--ts-gray-50)', fontFamily: "'IBM Plex Mono', monospace"}}>Debris objects</div>
                </div>
                <div>
                  <div style={{fontSize: '1.5rem', fontWeight: 700, color: 'var(--ts-white)'}}>0</div>
                  <div style={{fontSize: '0.75rem', color: 'var(--ts-gray-50)', fontFamily: "'IBM Plex Mono', monospace"}}>Contact needed</div>
                </div>
                <div>
                  <div style={{fontSize: '1.5rem', fontWeight: 700, color: 'var(--ts-white)'}}>c</div>
                  <div style={{fontSize: '0.75rem', color: 'var(--ts-gray-50)', fontFamily: "'IBM Plex Mono', monospace"}}>Laser speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background: 'linear-gradient(135deg, var(--ts-dark-03) 0%, var(--ts-dark-02) 100%)', padding: '6rem 2rem', textAlign: 'center'}}>
        <div style={{maxWidth: '700px', margin: '0 auto'}}>
          <div className="ts-section__tag" style={{textAlign: 'center'}}>Next Step</div>
          <h2 className="ts-section__title" style={{textAlign: 'center'}}>
            Meet the Vehicle That Will<br />
            <strong>Make This Mission Happen</strong>
          </h2>
          <Link to="/vehicle" className="ts-btn ts-btn--primary">
            Explore ASTRÆUS
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
