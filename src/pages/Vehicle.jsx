import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function Vehicle() {
  useEffect(() => {
    document.title = 'ASTRÆUS Vehicle - TANESPACE';
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="ts-page-header" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="ts-page-header__bg">
          <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1920&q=80" alt="ASTRÆUS Vehicle" />
        </div>
        <div className="ts-page-header__overlay" style={{background: 'rgba(0,0,0,0.55)'}}></div>
        <div className="ts-page-header__content" style={{textAlign: 'center', padding: '0 2rem'}}>
          <h1 style={{fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 1.25rem'}}>
            ASTRÆUS
          </h1>
          <p style={{fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ts-gray-30)', margin: 0}}>
            Autonomous Sourcing &amp; Transport Refueling Unit for Exospheric Utility Systems
          </p>
        </div>
      </div>

      {/* Quick Specs Bar */}
      <div className="ts-stats">
        <div className="ts-stat">
          <div className="ts-stat__value"><span>210</span>m</div>
          <div className="ts-stat__label">Operational Height</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>15-20</span>m</div>
          <div className="ts-stat__label">Core Diameter</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>AI</span></div>
          <div className="ts-stat__label">Fully Autonomous</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>∞</span></div>
          <div className="ts-stat__label">Modular Expansion</div>
        </div>
      </div>

      {/* Vehicle Overview */}
      <section className="ts-section">
        <div className="ts-grid ts-grid--2" style={{gap: '4rem', alignItems: 'start'}}>
          <div>
            <div className="ts-section__tag">Overview</div>
            <h2 className="ts-section__title">
              Mobile Orbital<br />
              <strong>Refinery</strong>
            </h2>
            <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem'}}>
              ASTRÆUS is no ordinary spacecraft. It is a mobile processing plant designed specifically to operate in microgravity environments, capable of approaching asteroids, harvesting resources, and converting them into immediately usable propellant.
            </p>
            <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8}}>
              With a modular structure that expands once in space, ASTRÆUS reaches an operational height of 210 meters when all solar panels and harvesters are deployed — making it one of the largest human-made structures ever to operate in space.
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80" alt="ASTRÆUS Technical" style={{width: '100%', filter: 'brightness(0.8)'}} />
            <p style={{fontSize: '0.75rem', color: 'var(--ts-gray-50)', marginTop: '0.5rem', fontFamily: "'IBM Plex Mono', monospace"}}>
              Fig. 1 — ASTRÆUS in deployed configuration (artist's rendering)
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section style={{background: 'var(--ts-dark-03)', padding: '6rem 0'}}>
        <div style={{maxWidth: '1584px', margin: '0 auto', padding: '0 2rem'}}>
          <div className="ts-section__tag">Specifications</div>
          <h2 className="ts-section__title">
            Vehicle <strong>Specifications</strong>
          </h2>

          <div className="ts-grid ts-grid--2" style={{gap: '4rem', marginTop: '3rem'}}>
            <div>
              <h3 style={{fontSize: '0.75rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-teal)', marginBottom: '2rem'}}>General Specifications</h3>
              <table className="ts-spec-table">
                <tbody>
                  <tr><td>Designation</td><td>ASTRÆUS</td></tr>
                  <tr><td>Full Name</td><td style={{fontSize: '0.75rem'}}>Autonomous Sourcing &amp; Transport Refueling Unit for Exospheric Utility Systems</td></tr>
                  <tr><td>Type</td><td>Mobile Orbital Refinery</td></tr>
                  <tr><td>Operational Height</td><td>~210 m (fully deployed)</td></tr>
                  <tr><td>Core Diameter</td><td>15-20 m</td></tr>
                  <tr><td>Structure</td><td>Modular, expandable in space</td></tr>
                  <tr><td>Crew</td><td>None (fully autonomous)</td></tr>
                  <tr><td>Mission Duration</td><td>Indefinite (self-sustaining)</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 style={{fontSize: '0.75rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-teal)', marginBottom: '2rem'}}>Propulsion &amp; Energy</h3>
              <table className="ts-spec-table">
                <tbody>
                  <tr><td>Primary Propulsion</td><td>High-Efficiency Ion Thrusters</td></tr>
                  <tr><td>Propulsion Use</td><td>Inter-asteroid navigation</td></tr>
                  <tr><td>Thermal System</td><td>Solar Thermal Concentrator</td></tr>
                  <tr><td>Thermal Use</td><td>Rock heating process</td></tr>
                  <tr><td>Power Source</td><td>Advanced solar arrays</td></tr>
                  <tr><td>Backup Power</td><td>RTG (Radioisotope)</td></tr>
                  <tr><td>Navigation</td><td>AI-guided autonomous</td></tr>
                  <tr><td>Communication</td><td>Deep Space Network relay</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Deep Dive */}
      <section className="ts-section">
        <div className="ts-section__tag">Core Systems</div>
        <h2 className="ts-section__title">
          Core <strong>Systems</strong>
        </h2>

        <div className="ts-grid ts-grid--2" style={{gap: '2px', marginTop: '3rem'}}>
          <div className="ts-card" style={{minHeight: '320px'}}>
            <span className="ts-tag ts-tag--teal" style={{alignSelf: 'flex-start', marginBottom: '1rem'}}>Propulsion</span>
            <h3 className="ts-card__title" style={{fontSize: '1.5rem'}}>High-Efficiency Ion Thrusters</h3>
            <p className="ts-card__desc" style={{fontSize: '1rem', lineHeight: 1.7}}>
              High-efficiency ion engines designed for inter-asteroid navigation. Unlike conventional chemical rockets, ion thrusters use charged particles accelerated by an electric field, providing small but continuous thrust over very long periods. This is ideal for long-distance travel in deep space.
            </p>
          </div>
          <div className="ts-card" style={{minHeight: '320px'}}>
            <span className="ts-tag ts-tag--blue" style={{alignSelf: 'flex-start', marginBottom: '1rem'}}>Thermal</span>
            <h3 className="ts-card__title" style={{fontSize: '1.5rem'}}>Solar Thermal Concentrator</h3>
            <p className="ts-card__desc" style={{fontSize: '1rem', lineHeight: 1.7}}>
              Giant parabolic mirrors that concentrate sunlight to heat the asteroid surface. Without drilling, this heat vaporizes ice and water-bearing minerals from the asteroid rock. Temperatures reached are between 300–500°C, sufficient to free water trapped in hydrated minerals.
            </p>
          </div>
          <div className="ts-card" style={{minHeight: '320px'}}>
            <span className="ts-tag ts-tag--purple" style={{alignSelf: 'flex-start', marginBottom: '1rem'}}>Harvesting</span>
            <h3 className="ts-card__title" style={{fontSize: '1.5rem'}}>Vapor Capture Shroud</h3>
            <p className="ts-card__desc" style={{fontSize: '1rem', lineHeight: 1.7}}>
              A vapor-collecting dome that covers part of the asteroid surface. Uses translucent membranes and vacuum systems to capture water vapor released by heating — without mechanical excavation, which would require enormous energy and heavy equipment in a microgravity environment.
            </p>
          </div>
          <div className="ts-card" style={{minHeight: '320px'}}>
            <span className="ts-tag" style={{alignSelf: 'flex-start', marginBottom: '1rem'}}>Processing</span>
            <h3 className="ts-card__title" style={{fontSize: '1.5rem'}}>Integrated Electrolysis Unit</h3>
            <p className="ts-card__desc" style={{fontSize: '1rem', lineHeight: 1.7}}>
              An onboard processing laboratory that separates H₂O into LH₂ (Liquid Hydrogen) and LOX (Liquid Oxygen). The system operates continuously and autonomously, with processing capacity matched to the vapor collection rate. The end product is stored in highly insulated cryogenic tanks.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Image */}
      <div className="ts-image-block ts-image-block--hero">
        <img src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&q=80" alt="ASTRÆUS in Space" />
        <div className="ts-image-block__overlay"></div>
        <div className="ts-image-block__content">
          <div className="ts-section__tag" style={{color: 'var(--ts-teal)'}}>ASTRÆUS Mk.I</div>
          <h2 style={{fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, maxWidth: '600px'}}>
            <strong>210 meters</strong> operational height.<br />
            A modular structure that expands in space.
          </h2>
        </div>
      </div>

      {/* Operational Modes */}
      <section className="ts-section">
        <div className="ts-section__tag">Operational Modes</div>
        <h2 className="ts-section__title">
          Operational <strong>Modes</strong>
        </h2>

        <div className="ts-timeline" style={{maxWidth: '800px', marginTop: '3rem'}}>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Mode 01 — Transit</div>
            <div className="ts-timeline__title">Inter-Asteroid Navigation</div>
            <div className="ts-timeline__desc">
              In transit mode, the solar panels are folded and ASTRÆUS uses its ion thrusters to maneuver toward the next target. AI calculates the optimal path based on asteroid position, fuel efficiency, and delivery schedule.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Mode 02 — Approach &amp; Dock</div>
            <div className="ts-timeline__title">Approach &amp; Alignment</div>
            <div className="ts-timeline__desc">
              LIDAR sensors and cameras guide ASTRÆUS to approach and align its position with the asteroid. A low-gravity anchoring system locks the vehicle to the surface without excessive pressure that could fracture a small asteroid.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Mode 03 — Harvest</div>
            <div className="ts-timeline__title">Water Harvesting</div>
            <div className="ts-timeline__desc">
              The Vapor Capture Shroud is deployed to cover an area of the asteroid surface. The Solar Thermal Concentrator begins heating the rock. Released water vapor is captured, purified, and fed to the electrolysis unit for processing into propellant.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Mode 04 — Refinery</div>
            <div className="ts-timeline__title">Processing &amp; Storage</div>
            <div className="ts-timeline__desc">
              The electrolysis unit splits water into H₂ and O₂, which are then liquefied and stored in cryogenic tanks. This process runs automatically 24/7 for the duration of the harvest.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Mode 05 — Depot</div>
            <div className="ts-timeline__title">Fueling Station</div>
            <div className="ts-timeline__desc">
              Once the tanks are full, ASTRÆUS returns to the L2 Lagrange point and transforms into a refueling station. Passing ships can dock and refuel before continuing their journey to Mars, Jupiter, or other destinations.
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section style={{background: 'var(--ts-dark-03)', padding: '6rem 2rem'}}>
        <div style={{maxWidth: '1584px', margin: '0 auto'}}>
          <div className="ts-section__tag">Key Advantages</div>
          <h2 className="ts-section__title">
            Key <strong>Advantages</strong>
          </h2>

          <div className="ts-grid ts-grid--3" style={{gap: '2px', marginTop: '3rem'}}>
            <div className="ts-card">
              <h3 className="ts-card__title" style={{color: 'var(--ts-teal)'}}>90% Cost Efficiency</h3>
              <p className="ts-card__desc">
                Fighting Earth's gravity is the most expensive part of any space mission. Sourcing propellant from asteroids is far more energy-efficient than hauling it from Jakarta or Cape Canaveral. These savings enable more missions with the same budget.
              </p>
              <div className="ts-progress" style={{marginTop: 'auto', paddingTop: '1.5rem'}}>
                <div className="ts-progress__label">
                  <span>Cost Efficiency</span>
                  <span>90%</span>
                </div>
                <div className="ts-progress__bar">
                  <div className="ts-progress__fill" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
            <div className="ts-card">
              <h3 className="ts-card__title" style={{color: 'var(--ts-green)'}}>Sustainability</h3>
              <p className="ts-card__desc">
                Does not drain Earth's resources for massive rocket fuel demands. Asteroids contain water in nearly unlimited quantities. A single 500-meter C-type asteroid could provide fuel for thousands of missions to Mars.
              </p>
              <div className="ts-progress" style={{marginTop: 'auto', paddingTop: '1.5rem'}}>
                <div className="ts-progress__label">
                  <span>Sustainability Score</span>
                  <span>95%</span>
                </div>
                <div className="ts-progress__bar">
                  <div className="ts-progress__fill" style={{width: '95%', background: 'var(--ts-green)'}}></div>
                </div>
              </div>
            </div>
            <div className="ts-card">
              <h3 className="ts-card__title" style={{color: 'var(--ts-purple)'}}>Full Autonomy</h3>
              <p className="ts-card__desc">
                This vehicle operates independently with advanced AI, minimizing human life risk in dangerous mining operations. All navigation, operational, and emergency decisions are handled by the onboard AI system.
              </p>
              <div className="ts-progress" style={{marginTop: 'auto', paddingTop: '1.5rem'}}>
                <div className="ts-progress__label">
                  <span>Autonomy Level</span>
                  <span>100%</span>
                </div>
                <div className="ts-progress__bar">
                  <div className="ts-progress__fill" style={{width: '100%', background: 'var(--ts-purple)'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding: '6rem 2rem', textAlign: 'center'}}>
        <div style={{maxWidth: '700px', margin: '0 auto'}}>
          <div className="ts-section__tag" style={{textAlign: 'center'}}>Dig Deeper</div>
          <h2 className="ts-section__title" style={{textAlign: 'center'}}>
            Explore the <strong>Technology</strong><br />
            Behind ASTRÆUS
          </h2>
          <Link to="/technology" className="ts-btn ts-btn--primary">
            Explore Technology
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
