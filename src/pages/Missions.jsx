import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function Missions() {

  return (
    <>
      <SEO
        title="Missions"
        description="TANESPACE missions: The Silk Road of Space asteroid mining mission, HELIOS orbital debris sweeping, and beyond."
        path="/missions"
      />
      {/* Page Header */}
      <div className="ts-page-header" style={{minHeight: '70vh', display: 'flex', alignItems: 'flex-end'}}>
        <div className="ts-page-header__bg">
          <img src="https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=1920&q=80" alt="Missions Background" fetchpriority="high" />
        </div>
        <div className="ts-page-header__overlay"></div>
        <div className="ts-page-header__content" style={{paddingBottom: '4rem'}}>
          <h1 className="ts-hero__title">
            <strong>Missions</strong>
          </h1>
        </div>
      </div>

      {/* Mission Cards */}
      <section className="ts-section">
        <h2 className="ts-section__title">Two Missions.<br /><strong>One Orbital Ecosystem.</strong></h2>
        <p className="ts-section__desc">TANESPACE operates two complementary missions that together form a complete orbital infrastructure — one that supplies clean fuel from asteroids, and one that keeps the orbital lanes safe to fly.</p>
      </section>

      {/* Mission 01: Silk Road */}
      <section className="ts-split">
        <div className="ts-split__image">
          <LazyImage src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=960&q=80" alt="Silk Road Mission" />
        </div>
        <div className="ts-split__content" style={{background: 'var(--ts-dark-02)'}}>
          <h2 className="ts-section__title" style={{marginBottom: '1.5rem'}}>The Silk Road<br /><strong>of Space</strong></h2>
          <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem'}}>ASTRÆUS harvests water from near-Earth asteroids and splits it into liquid hydrogen and oxygen — rocket propellant — directly in space. A fleet of autonomous refineries forms the first interplanetary fuel logistics network.</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem'}}>
            <div>
              <div style={{fontSize: '1.5rem', fontWeight: 300, fontFamily: "'IBM Plex Mono', monospace", color: 'var(--ts-white)'}}>210m</div>
              <div style={{fontSize: '0.75rem', color: 'var(--ts-gray-50)', marginTop: '0.25rem'}}>ASTRÆUS Height</div>
            </div>
            <div>
              <div style={{fontSize: '1.5rem', fontWeight: 300, fontFamily: "'IBM Plex Mono', monospace", color: 'var(--ts-white)'}}>90%</div>
              <div style={{fontSize: '0.75rem', color: 'var(--ts-gray-50)', marginTop: '0.25rem'}}>Cost Reduction</div>
            </div>
            <div>
              <div style={{fontSize: '1.5rem', fontWeight: 300, fontFamily: "'IBM Plex Mono', monospace", color: 'var(--ts-white)'}}>L2</div>
              <div style={{fontSize: '0.75rem', color: 'var(--ts-gray-50)', marginTop: '0.25rem'}}>Depot Location</div>
            </div>
          </div>
          <ul className="ts-list" style={{marginBottom: '2rem'}}>
            <li>Autonomously approach water-rich near-Earth asteroids</li>
            <li>Deploy Vapor Capture Shroud for contactless water harvesting</li>
            <li>Electrolyze water into LH₂ and LOX propellant on-site</li>
            <li>Return to Lagrange Point L2 as a refueling depot</li>
          </ul>
          <Link to="/mission" className="ts-btn ts-btn--primary" style={{alignSelf: 'flex-start'}}>Explore Silk Road Mission <Arrow /></Link>
        </div>
      </section>

      {/* Mission 02: HELIOS */}
      <section className="ts-split" style={{flexDirection: 'row-reverse'}}>
        <div className="ts-split__image" style={{order: 2}}>
          <LazyImage src="https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=960&q=80" alt="HELIOS Mission" />
        </div>
        <div className="ts-split__content" style={{background: 'var(--ts-dark-03)', order: 1}}>
          <h2 className="ts-section__title" style={{marginBottom: '1.5rem'}}><strong>HELIOS</strong></h2>
          <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', fontFamily: "'IBM Plex Mono', monospace", marginBottom: '1rem'}}>High-Energy Laser Interdiction &amp; Orbital Sweeper</p>
          <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem'}}>HELIOS clears space debris from orbit using laser ablation — no physical contact, no robots, no collisions. From hundreds of kilometers away, high-energy pulsed lasers push debris out of orbit, protecting orbital lanes for all of humanity.</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem'}}>
            <div>
              <div style={{fontSize: '1.5rem', fontWeight: 300, fontFamily: "'IBM Plex Mono', monospace", color: 'var(--ts-white)'}}>1M+</div>
              <div style={{fontSize: '0.75rem', color: 'var(--ts-gray-50)', marginTop: '0.25rem'}}>Debris Objects</div>
            </div>
            <div>
              <div style={{fontSize: '1.5rem', fontWeight: 300, fontFamily: "'IBM Plex Mono', monospace", color: 'var(--ts-white)'}}>0</div>
              <div style={{fontSize: '0.75rem', color: 'var(--ts-gray-50)', marginTop: '0.25rem'}}>Physical Contact</div>
            </div>
            <div>
              <div style={{fontSize: '1.5rem', fontWeight: 300, fontFamily: "'IBM Plex Mono', monospace", color: 'var(--ts-white)'}}>50m</div>
              <div style={{fontSize: '0.75rem', color: 'var(--ts-gray-50)', marginTop: '0.25rem'}}>Core Structure</div>
            </div>
          </div>
          <ul className="ts-list" style={{marginBottom: '2rem'}}>
            <li>Track millions of debris objects with high-frequency LiDAR</li>
            <li>Lock on targets at 28,000 km/h with adaptive optics</li>
            <li>Ablate debris surface to generate de-orbit thrust</li>
            <li>No physical contact — zero collision risk to HELIOS itself</li>
          </ul>
          <Link to="/mission/helios" className="ts-btn ts-btn--primary" style={{alignSelf: 'flex-start'}}>Explore HELIOS Mission <Arrow /></Link>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="ts-section">
        <h2 className="ts-section__title">Why Both Missions<br /><strong>Are Essential</strong></h2>
        <p className="ts-section__desc">These two missions are not independent — they are designed to work together. ASTRÆUS opens the path to deep space by making fuel affordable. HELIOS ensures the orbital lanes are safe enough to use.</p>
        <div className="ts-grid ts-grid--3" style={{gap: '2px', marginTop: '2rem'}}>
          <div className="ts-card">
            <div className="ts-card__number">The Problem</div>
            <h3 className="ts-card__title">Two Barriers to Space Access</h3>
            <p className="ts-card__desc">Space exploration faces two critical challenges: the prohibitive cost of launching fuel from Earth's gravity well, and the growing danger of orbital debris threatening every launch corridor.</p>
          </div>
          <div className="ts-card" style={{borderTop: '2px solid var(--ts-gray-70)'}}>
            <div className="ts-card__number">The Solution</div>
            <h3 className="ts-card__title">Complementary Missions</h3>
            <p className="ts-card__desc">ASTRÆUS solves the fuel problem by sourcing propellant from asteroids. HELIOS solves the debris problem by clearing orbital lanes without physical contact. Together, they cover both critical needs.</p>
          </div>
          <div className="ts-card" style={{borderTop: '2px solid var(--ts-accent)'}}>
            <div className="ts-card__number">The Vision</div>
            <h3 className="ts-card__title">Sustainable Orbital Ecosystem</h3>
            <p className="ts-card__desc">The goal is a complete space infrastructure: clean orbital highways maintained by HELIOS, and an abundant supply of affordable propellant from ASTRÆUS — enabling humanity to travel freely through the solar system.</p>
          </div>
        </div>
      </section>

      {/* Mission Comparison */}
      <section style={{background: 'var(--ts-dark-03)', padding: '6rem 2rem'}}>
        <div style={{maxWidth: '1584px', margin: '0 auto'}}>
          <h2 className="ts-section__title">Mission <strong>Comparison</strong></h2>
          <div style={{maxWidth: '1000px', marginTop: '3rem', overflowX: 'auto'}}>
            <table className="ts-spec-table" style={{tableLayout: 'fixed'}}>
              <tbody>
                <tr style={{borderBottom: '2px solid var(--ts-gray-70)'}}>
                  <td style={{color: 'var(--ts-white)', fontWeight: 600, textTransform: 'none', fontSize: '0.875rem', letterSpacing: 0, width: '28%'}}>Parameter</td>
                  <td style={{color: 'var(--ts-gray-30)', fontWeight: 600, width: '36%'}}>Mission 01 — Silk Road</td>
                  <td style={{color: 'var(--ts-gray-30)', fontWeight: 600, width: '36%'}}>Mission 02 — HELIOS</td>
                </tr>
                <tr><td>Vehicle</td><td>ASTRÆUS</td><td>HELIOS</td></tr>
                <tr><td>Primary Goal</td><td>Asteroid water mining &amp; orbital refueling</td><td>Space debris removal via laser ablation</td></tr>
                <tr><td>Operating Zone</td><td>Near-Earth asteroids → Lagrange L2</td><td>Low Earth Orbit (LEO)</td></tr>
                <tr><td>Vehicle Height</td><td>~210 meters (deployed)</td><td>~50–70 meters</td></tr>
                <tr><td>Crew</td><td>None (fully autonomous)</td><td>None (fully autonomous)</td></tr>
                <tr><td>Physical Contact</td><td>Minimal (surface capture shroud)</td><td>None — fully contactless</td></tr>
                <tr><td>Key Technology</td><td>Ion thrusters, solar thermal, electrolysis</td><td>High-energy pulsed laser, LiDAR, adaptive optics</td></tr>
                <tr><td>First Launch Target</td><td>2028</td><td>2029</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="ts-section">
        <h2 className="ts-section__title">Mission <strong>Timeline</strong></h2>
        <div className="ts-timeline" style={{maxWidth: '860px', marginTop: '3rem'}}>
          <div className="ts-timeline__item"><div className="ts-timeline__year">2024–2026</div><div className="ts-timeline__title">Foundation &amp; Design</div><div className="ts-timeline__desc">TANESPACE founded. ASTRÆUS Mk.I design completed. Proof-of-concept lab tests confirm water extraction and electrolysis viability. HELIOS laser system prototype begins development.</div></div>
          <div className="ts-timeline__item"><div className="ts-timeline__year">2027</div><div className="ts-timeline__title">Orbital Test Phase</div><div className="ts-timeline__desc">Launch of test modules to LEO validating the Vapor Capture Shroud, electrolysis unit, and HELIOS laser targeting systems under real microgravity conditions.</div></div>
          <div className="ts-timeline__item"><div className="ts-timeline__year">2028</div><div className="ts-timeline__title">ASTRÆUS-1 Launch</div><div className="ts-timeline__desc">First ASTRÆUS unit launches toward its primary target asteroid. Beginning of the first-ever industrial-scale asteroid water mining operation.</div></div>
          <div className="ts-timeline__item"><div className="ts-timeline__year">2029</div><div className="ts-timeline__title">HELIOS-1 Deployment</div><div className="ts-timeline__desc">First HELIOS unit reaches operational orbit in LEO. Active debris clearance operations begin. Launch corridors and critical satellite constellations gain continuous protection.</div></div>
          <div className="ts-timeline__item"><div className="ts-timeline__year">2030–2032</div><div className="ts-timeline__title">Full Operations</div><div className="ts-timeline__desc">ASTRÆUS returns to Lagrange Point L2 as the first orbital refueling depot. HELIOS fleet expands. The Silk Road of Space begins serving the first commercial spacecraft.</div></div>
          <div className="ts-timeline__item"><div className="ts-timeline__year">2032+</div><div className="ts-timeline__title">The Silk Road Network</div><div className="ts-timeline__desc">Full multi-node network operational. ASTRÆUS and HELIOS fleets work in tandem — clean orbits, abundant fuel, routine interplanetary travel for all of humanity.</div></div>
        </div>
      </section>
    </>
  );
}
