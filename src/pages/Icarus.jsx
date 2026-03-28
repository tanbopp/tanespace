import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function Icarus() {
  useEffect(() => {
    document.title = 'Icarus Thermal Forge — Orbital Factory | TANESPACE';
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="ts-page-header" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="ts-page-header__bg">
          <img src={import.meta.env.BASE_URL + 'assets/images/icarus/ICARUS-Project_Thermal-Forge_Solar-Energy_Extrusion-Unit.jpg'} alt="Icarus Thermal Forge" />
        </div>
        <div className="ts-page-header__overlay" style={{ background: 'rgba(0,0,0,0.30)' }}></div>
        <div className="ts-page-header__content" style={{ textAlign: 'center', padding: '0 2rem' }}>
          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 1.25rem' }}>
            ICARUS
          </h1>
          <p style={{ fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ts-white)', margin: 0 }}>
            Icarus Thermal Forge — Solar-Powered Orbital Factory
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="ts-stats">
        <div className="ts-stat">
          <div className="ts-stat__value"><span>180</span>m</div>
          <div className="ts-stat__label">Total height</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>120</span>m</div>
          <div className="ts-stat__label">Parabolic mirror diameter</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>2,500</span>°C</div>
          <div className="ts-stat__label">Crucible temperature</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>95</span>%</div>
          <div className="ts-stat__label">Energy savings vs Earth</div>
        </div>
      </div>

      {/* Problem Section */}
      <section id="problem" className="ts-section">
        <h2 className="ts-section__title">
          Two Concrete Walls:<br />
          <strong>Gravity &amp; Cargo Volume</strong>
        </h2>
        <div className="ts-grid ts-grid--2" style={{ gap: '4rem', alignItems: 'start', marginTop: '2rem' }}>
          <div>
            <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Building a civilization in space requires structural materials at a massive scale — steel beams, titanium plates, large metal frames. The problem: all those materials are on Earth, and sending them to orbit is not just "expensive" — it is <strong style={{ color: 'var(--ts-white)' }}>fundamentally uneconomical</strong>.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8 }}>
              Sending one ton of steel from Earth's surface to low orbit costs millions of dollars — solely because it must fight Earth's gravity well (9.8 m/s²). Meanwhile, asteroids in the asteroid belt have near-zero gravity. The material is already "up there".
            </p>
          </div>
          <div>
            <div className="ts-grid ts-grid--2" style={{ gap: '2px' }}>
              <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-80)' }}>
                <h4 className="ts-card__title">The Gravity Well</h4>
                <p className="ts-card__desc" style={{ fontSize: '0.875rem' }}>
                  Every 1 ton of payload sent from Earth to orbit requires 10–20 tons of rocket propellant. Cost per kilogram to orbit still ranges from $2,000–$10,000 even with Starship.
                </p>
              </div>
              <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-80)' }}>
                <h4 className="ts-card__title">Cargo Volume Limit</h4>
                <p className="ts-card__desc" style={{ fontSize: '0.875rem' }}>
                  The world's largest fairing (Starship) is 9 meters in diameter. It is impossible to send a structure 100 meters wide from Earth. Megastructures cannot be assembled from "small pieces" — many require monolithic casting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="ts-image-block ts-image-block--medium">
        <img src={import.meta.env.BASE_URL + 'assets/images/icarus/d2CLd.jpg'} alt="Solar Thermal Concentrator" />
        <div className="ts-image-block__overlay"></div>
        <div className="ts-image-block__content">
          <div style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-white)' }}>Icarus Thermal Forge — Artist's Concept</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, maxWidth: '700px', marginTop: '0.5rem' }}>
            180 meters. 120-meter mirror wings.<br />
            <strong>The largest factory ever built by humanity — in orbit.</strong>
          </h2>
        </div>
      </div>

      {/* Solution */}
      <section className="ts-section">
        <h2 className="ts-section__title">
          Three Synchronized Processes:<br />
          <strong>Melt, Purify, Print</strong>
        </h2>
        <p className="ts-section__desc">Icarus integrates three heavy industrial processes into a single autonomous vehicle that operates without chemical fuel.</p>

        <div className="ts-timeline" style={{ maxWidth: '850px', marginTop: '3rem' }}>
          <div className="ts-timeline__item">
            <div className="ts-timeline__title">Parabolic Mirrors Concentrate Sunlight</div>
            <div className="ts-timeline__desc">
              Thousands of high-reflectivity silver-coated polymer membrane segments — called <strong>The Petals</strong> — spread their wings 120 meters wide, capturing sunlight at a massive scale without using electricity. Light is precisely focused onto a single small point: <em>The Crucible</em>. The temperature at this focal point exceeds <strong>2,500°C</strong> — sufficient to melt iron, nickel, titanium, and platinum directly from asteroid ore.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__title">The Highest Metal Quality Ever Achieved</div>
            <div className="ts-timeline__desc">
              On Earth, metal refining must fight the atmosphere — oxygen and nitrogen gases dissolve into the molten metal, creating inclusions that weaken quality. In orbit, the vacuum conditions cause contaminant gases to evaporate naturally from the liquid metal before it solidifies. The result: metal of higher metallurgical quality than military or medical standards on Earth. Pure, homogeneous, free of micro-defects.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__title">Electron Beam Additive Manufacturing</div>
            <div className="ts-timeline__desc">
              Purified molten metal is fed into a massive three-dimensional printing unit that uses an <em>electron beam</em> as its "welding eye". In microgravity conditions, the molten metal does not fall — it floats and can be shaped from any direction. Icarus "prints" structures layer by layer, creating monolithic components tens to hundreds of meters in size without a single bolt or manual weld.
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Specs */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 className="ts-section__title">Specifications<br /><strong>Icarus Thermal Forge</strong></h2>

          <div className="ts-split" style={{ marginTop: '3rem', minHeight: '520px' }}>
            <div className="ts-split__image">
              <img src={import.meta.env.BASE_URL + 'assets/images/icarus/humanity-largest-orbital-thermal-forge.jpg'} alt="Icarus" />
            </div>
            <div className="ts-split__content" style={{ background: 'var(--ts-dark-02)' }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '2rem' }}>General Specifications</h3>
              <table className="ts-spec-table">
                <tbody>
                  <tr><td>Designation</td><td>Icarus Thermal Forge</td></tr>
                  <tr><td>Type</td><td>Orbital Fabrication Station</td></tr>
                  <tr><td>Total Height</td><td>180 meters</td></tr>
                  <tr><td>Central Structure (The Spine)</td><td>180m carbon-composite</td></tr>
                  <tr><td>Parabolic Mirror (The Petals)</td><td>120m diameter — silver-coated polymer segments</td></tr>
                  <tr><td>Crucible Temperature</td><td>&gt; 2,500°C</td></tr>
                  <tr><td>Print Method</td><td>Electron Beam Additive Manufacturing (EBAM)</td></tr>
                  <tr><td>Energy Source</td><td>100% solar energy (Zero-Fuel)</td></tr>
                  <tr><td>Materials Processed</td><td>Iron, Nickel, Titanium, Platinum-group</td></tr>
                  <tr><td>Crew</td><td>Optional (fully autonomous or remote-supervised)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Core Systems */}
      <section className="ts-section">
        <h2 className="ts-section__title">Four Core Systems<br /><strong>Icarus</strong></h2>
        <div className="ts-grid ts-grid--2" style={{ gap: '2px', marginTop: '3rem' }}>
          <div className="ts-card" style={{ minHeight: '280px' }}>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>The Petals — Parabolic Mirror Array</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              Thousands of ultra-thin polymer membrane segments coated with silver or aluminum reflective film. Each segment is individually controlled by piezoelectric actuators to maintain ideal focus as the Sun's position changes. Total capture area reaches approximately 11,300 m² — equivalent to two football fields.
            </p>
          </div>
          <div className="ts-card" style={{ minHeight: '280px' }}>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>The Crucible — Thermal Focus Chamber</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              A high-refractory melting chamber that holds asteroid ore and feed metal. Inside the Crucible, temperature is maintained stably above 2,500°C using concentrated sunlight. High-resolution infrared temperature sensors and AI control systems keep the melting process within optimal metallurgical parameters.
            </p>
          </div>
          <div className="ts-card" style={{ minHeight: '280px' }}>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>EBAM Print Engine</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              A high-power electron beam-powered 3D printing unit. The electron beam is used as a point heat source to melt metal powder or wire feedstock layer by layer. In microgravity, achievable geometric tolerances far exceed Earth-based EBAM capabilities because there is no gravitational distortion — structures grow perfectly straight in all directions.
            </p>
          </div>
          <div className="ts-card" style={{ minHeight: '280px' }}>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>The Spine — Control &amp; Docking Column</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              A 180-meter carbon-composite column serving as the backbone of the entire vehicle: housing the main control units (flight computer, communication array), optional crew accommodations, docking modules for asteroid ore delivery ships, and backup internal power supply systems.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
          <h2 className="ts-section__title">What Can<br /><strong>Icarus Build?</strong></h2>
          <div className="ts-grid ts-grid--2" style={{ gap: '2px', marginTop: '3rem' }}>
            <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-70)', minHeight: '260px' }}>
              <h3 className="ts-card__title">O'Neill Cylinder</h3>
              <p className="ts-card__desc">
                A giant cylindrical space colony that creates artificial gravity through rotation. A full-size O'Neill Cylinder requires thousands of tons of precision metal structure — which can only be economically produced by Icarus using materials from asteroids.
              </p>
            </div>
            <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-70)', minHeight: '260px' }}>
              <h3 className="ts-card__title">Solar Power Satellite</h3>
              <p className="ts-card__desc">
                Giant solar panels in geostationary orbit that transmit electricity to Earth via microwave. Each unit requires thousands of m² of lightweight yet strong metal support structure — too large to launch from Earth but perfect for Icarus to print in orbit.
              </p>
            </div>
            <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-70)', minHeight: '260px' }}>
              <h3 className="ts-card__title">Radiation Shielding Monolith</h3>
              <p className="ts-card__desc">
                Thick metal walls for long-range explorer ships (Mars, Jupiter, asteroid belt). On Earth, walls this heavy are impossible to launch due to weight. Icarus prints the monolithic shield directly in orbit — explorer ships arrive, put on their armor, and depart.
              </p>
            </div>
            <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-70)', minHeight: '260px' }}>
              <h3 className="ts-card__title">Satellite Recycling</h3>
              <p className="ts-card__desc">
                Instead of letting dead satellites turn into debris, Icarus melts them down and transforms them into high-quality metal feedstock. This integrates the functions of HELIOS (debris clearing) and Icarus (material production) into a closed orbital value chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="ts-section">
        <h2 className="ts-section__title">Three Fundamental Advantages<br /><strong>Icarus</strong></h2>
        <div className="ts-grid ts-grid--3" style={{ gap: '2px', marginTop: '3rem' }}>
          <div className="ts-card">
            <h3 className="ts-card__title">Zero-Fuel Processing</h3>
            <p className="ts-card__desc">
              The entire melting and fabrication process uses solar energy — free, abundant, and inexhaustible within the inner solar system. No fuel bills, no resupply missions. The only input is raw asteroid material.
            </p>
          </div>
          <div className="ts-card">
            <h3 className="ts-card__title">Infinitely Scalable</h3>
            <p className="ts-card__desc">
              Want more capacity? Increase mirror area. The larger the Petals' surface area, the more energy captured, the larger the Crucible that can be ignited, the larger the structure that can be printed. There is no theoretical limit other than available orbital space.
            </p>
          </div>
          <div className="ts-card">
            <h3 className="ts-card__title">In-Situ Resource Utilization</h3>
            <p className="ts-card__desc">
              100% independent from Earth's supply chain. Raw materials from asteroids, energy from the Sun, output in the form of ready-to-use structures. If Earth faces a crisis, civilizations in space using Icarus can still build infrastructure without disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Connection */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
          <h2 className="ts-section__title">Icarus in the<br /><strong>TANESPACE Ecosystem</strong></h2>
          <div className="ts-grid ts-grid--3" style={{ gap: '2px', marginTop: '3rem' }}>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-gray-80)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '0.5rem' }}>ASTRÆUS</div>
              <h3 className="ts-card__title">Supplying Fuel</h3>
              <p className="ts-card__desc">ASTRÆUS harvests water from asteroids and produces hydrogen/oxygen propellant in orbit. Icarus uses this fuel for station-keeping and rendezvous maneuvers with new asteroids.</p>
              <Link to="/vehicle" className="ts-btn ts-btn--ghost" style={{ marginTop: '1rem', fontSize: '0.75rem', padding: '0.5rem 1rem', alignSelf: 'flex-start' }}>
                ASTRÆUS <Arrow />
              </Link>
            </div>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-accent)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-accent)', marginBottom: '0.5rem' }}>ICARUS — You Are Here</div>
              <h3 className="ts-card__title">Building Infrastructure</h3>
              <p className="ts-card__desc">Icarus converts raw asteroid materials into megalithic structures — space station frames, radiation shields, Solar Power Satellite components — using solar energy alone.</p>
              <span className="ts-tag" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>Current Page</span>
            </div>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-gray-80)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '0.5rem' }}>HELIOS</div>
              <h3 className="ts-card__title">Securing Orbit</h3>
              <p className="ts-card__desc">HELIOS clears orbital debris using laser ablation. Dead satellites cleared by HELIOS are supplied to Icarus as recycled metal feedstock — closing the cycle, zero waste.</p>
              <Link to="/mission/helios" className="ts-btn ts-btn--ghost" style={{ marginTop: '1rem', fontSize: '0.75rem', padding: '0.5rem 1rem', alignSelf: 'flex-start' }}>
                HELIOS <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 className="ts-section__title" style={{ textAlign: 'center' }}>
            Infrastructure Needs<br />
            <strong>Interplanetary Connectivity</strong>
          </h2>
          <p style={{ color: 'var(--ts-gray-30)', marginBottom: '2.5rem' }}>Once Icarus builds the physical civilization, Chronos connects the minds behind it.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/vehicle/chronos" className="ts-btn ts-btn--primary">
              Explore Chronos <Arrow />
            </Link>
            <Link to="/technology" className="ts-btn ts-btn--ghost">Technology</Link>
          </div>
        </div>
      </section>
    </>
  );
}
