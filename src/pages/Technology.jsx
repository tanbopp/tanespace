import { useEffect } from 'react';

export default function Technology() {
  useEffect(() => {
    document.title = 'Technology - TANESPACE';
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="ts-page-header" style={{ minHeight: '60vh', display: 'flex', alignItems: 'flex-end' }}>
        <div className="ts-page-header__bg">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80" alt="Technology" />
        </div>
        <div className="ts-page-header__overlay"></div>
        <div className="ts-page-header__content" style={{ paddingBottom: '4rem' }}>
          <h1 className="ts-hero__title">
            <strong>Technology</strong>
          </h1>
        </div>
      </div>

      {/* Tech Overview */}
      <section className="ts-section">
        <h2 className="ts-section__title">
          Four Pillars<br />
          <strong>TANESPACE Technology</strong>
        </h2>
        <p className="ts-section__desc">
          Every system on ASTRÆUS is designed to operate autonomously in the harsh environment of space. Here are the core technologies that make this mission possible.
        </p>
      </section>

      {/* Tech 1: Ion Thrusters */}
      <section className="ts-split">
        <div className="ts-split__image">
          <img src="https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=960&q=80" alt="Ion Thrusters" />
        </div>
        <div className="ts-split__content" style={{ background: 'var(--ts-dark-02)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            High-Efficiency<br />Ion Thrusters
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Ion thrusters work by ionizing propellant gas (typically Xenon) and accelerating the ions using an electric field. Although the thrust produced is small (around 0.1–1 Newton), the specific impulse is extremely high — up to 10× more efficient than chemical rockets.
          </p>
          <table className="ts-spec-table">
            <tbody>
              <tr><td>Propellant</td><td>Xenon (Xe)</td></tr>
              <tr><td>Specific Impulse</td><td>3,000-12,000 s</td></tr>
              <tr><td>Thrust</td><td>0.1-1 N (continuous)</td></tr>
              <tr><td>Efficiency</td><td>60-80%</td></tr>
              <tr><td>Lifetime</td><td>20,000+ hours</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tech 2: Solar Thermal */}
      <section className="ts-split" style={{ direction: 'rtl' }}>
        <div className="ts-split__image">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=960&q=80" alt="Solar Thermal" />
        </div>
        <div className="ts-split__content" style={{ background: 'var(--ts-dark-03)', direction: 'ltr' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Solar Thermal<br />Concentrator
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            A parabolic mirror system that collects and concentrates sunlight to a focal point on the asteroid surface. This generates temperatures of 300–500°C sufficient to release water from hydrated minerals without drilling — avoiding mechanical problems in a microgravity environment.
          </p>
          <table className="ts-spec-table">
            <tbody>
              <tr><td>Mirror Diameter</td><td>50-100 m (deployed)</td></tr>
              <tr><td>Focus Temperature</td><td>300-500°C</td></tr>
              <tr><td>Concentration Ratio</td><td>1,000:1</td></tr>
              <tr><td>Material</td><td>Ultra-thin reflective film</td></tr>
              <tr><td>Deployment</td><td>Inflatable structure</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tech 3: Vapor Capture */}
      <section className="ts-split">
        <div className="ts-split__image">
          <img src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=960&q=80" alt="Vapor Capture" />
        </div>
        <div className="ts-split__content" style={{ background: 'var(--ts-dark-02)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Vapor Capture<br />Shroud System
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            A vapor-collecting shroud covering part of the asteroid surface. Uses a semi-translucent membrane that passes thermal radiation from the concentrator to the asteroid surface while retaining the released water vapor. An internal vacuum system channels the vapor to condensation and purification units.
          </p>
          <table className="ts-spec-table">
            <tbody>
              <tr><td>Coverage Area</td><td>~500 m² per shroud</td></tr>
              <tr><td>Membrane Type</td><td>Semi-translucent polymer</td></tr>
              <tr><td>Capture Rate</td><td>~95% vapor retention</td></tr>
              <tr><td>Deployment</td><td>Robotic anchor points</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tech 4: Electrolysis */}
      <section className="ts-split" style={{ direction: 'rtl' }}>
        <div className="ts-split__image">
          <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=960&q=80" alt="Electrolysis Unit" />
        </div>
        <div className="ts-split__content" style={{ background: 'var(--ts-dark-03)', direction: 'ltr' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Integrated<br />Electrolysis Unit
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            An integrated electrolysis unit that splits H₂O into LH₂ (Liquid Hydrogen) and LOX (Liquid Oxygen). Uses PEM (Proton Exchange Membrane) electrolysis tested on the ISS, optimized for industrial-scale production in a microgravity environment.
          </p>
          <table className="ts-spec-table">
            <tbody>
              <tr><td>Process</td><td>PEM Electrolysis</td></tr>
              <tr><td>Output</td><td>LH₂ + LOX</td></tr>
              <tr><td>Efficiency</td><td>85-90%</td></tr>
              <tr><td>Storage</td><td>Cryogenic tanks (-253°C)</td></tr>
              <tr><td>Capacity</td><td>~500 kg/day</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* AI System */}
      <section className="ts-section">
        <h2 className="ts-section__title">
          Autonomous <strong>AI System</strong>
        </h2>
        <p className="ts-section__desc">
          All ASTRÆUS operations are controlled by AI designed for real-time decision-making without human intervention. Earth-to-asteroid communication delay can reach 20+ minutes — too slow for manual operation.
        </p>

        <div className="ts-grid ts-grid--3" style={{ gap: '2px', marginTop: '2rem' }}>
          <div className="ts-card">
            <h3 className="ts-card__title">Navigation &amp; Pathfinding</h3>
            <p className="ts-card__desc">
              AI calculates the optimal trajectory between asteroids, accounting for orbital mechanics, fuel efficiency, launch windows, and mission priorities. Capable of dynamically adjusting routes based on real-time sensor data.
            </p>
          </div>
          <div className="ts-card">
            <h3 className="ts-card__title">Resource Analysis</h3>
            <p className="ts-card__desc">
              Spectrometers and surface sensors analyze asteroid composition in real-time. AI determines areas with the highest water concentration and optimizes Vapor Capture Shroud placement.
            </p>
          </div>
          <div className="ts-card">
            <h3 className="ts-card__title">Operations &amp; Safety</h3>
            <p className="ts-card__desc">
              24/7 monitoring system for all subsystems. AI detects anomalies, executes emergency procedures, and dynamically allocates resources. Self-repair capability for non-critical components.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
          <h2 className="ts-section__title">
            From Asteroid Water<br />
            to <strong>Rocket Propellant</strong>
          </h2>

          <div className="ts-grid ts-grid--4" style={{ gap: '2px', marginTop: '3rem' }}>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-teal)' }}>
              <h3 className="ts-card__title">Detection &amp; Approach</h3>
              <p className="ts-card__desc">
                Sensors detect a water-rich asteroid. AI calculates the approach trajectory. Ion thrusters fire toward the target.
              </p>
            </div>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-cyan)' }}>
              <h3 className="ts-card__title">Harvesting</h3>
              <p className="ts-card__desc">
                Vapor Capture Shroud is deployed. Solar concentrator heats the surface. Water vapor is captured and channeled to the processing unit.
              </p>
            </div>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-accent)' }}>
              <h3 className="ts-card__title">Electrolysis</h3>
              <p className="ts-card__desc">
                Water is purified and split into H₂ and O₂ via PEM electrolysis. Gases are liquefied into LH₂ and LOX at cryogenic temperatures.
              </p>
            </div>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-purple)' }}>
              <h3 className="ts-card__title">Distribution</h3>
              <p className="ts-card__desc">
                ASTRÆUS returns to Lagrange point L2. Fuel is distributed to transiting spacecraft. The cycle repeats to the next asteroid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="ts-section">
        <h2 className="ts-section__title">
          Method <strong>Comparison</strong>
        </h2>

        <div style={{ maxWidth: '900px', marginTop: '2rem' }}>
          <table className="ts-spec-table">
            <tbody>
              <tr style={{ borderBottom: '2px solid var(--ts-gray-70)' }}>
                <td style={{ color: 'var(--ts-white)', fontWeight: 600, textTransform: 'none', fontSize: '0.875rem', letterSpacing: 0 }}>Parameter</td>
                <td style={{ color: 'var(--ts-red)' }}>Fuel from Earth</td>
                <td style={{ color: 'var(--ts-teal)' }}>TANESPACE</td>
              </tr>
              <tr>
                <td>Cost per kg to orbit</td>
                <td>$2,720 (Falcon Heavy)</td>
                <td style={{ color: 'var(--ts-teal)' }}>~$270</td>
              </tr>
              <tr>
                <td>Carbon emissions</td>
                <td>High</td>
                <td style={{ color: 'var(--ts-teal)' }}>Zero</td>
              </tr>
              <tr>
                <td>Earth resources</td>
                <td>Limited</td>
                <td style={{ color: 'var(--ts-teal)' }}>None used</td>
              </tr>
              <tr>
                <td>Skalabilitas</td>
                <td>Linear cost increase</td>
                <td style={{ color: 'var(--ts-teal)' }}>Decreasing marginal cost</td>
              </tr>
              <tr>
                <td>Human risk</td>
                <td>Every launch</td>
                <td style={{ color: 'var(--ts-teal)' }}>None (autonomous)</td>
              </tr>
              <tr>
                <td>Sustainability</td>
                <td>Unsustainable</td>
                <td style={{ color: 'var(--ts-teal)' }}>Fully sustainable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
