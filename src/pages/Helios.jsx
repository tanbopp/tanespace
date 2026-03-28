import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function Helios() {

  const advantageItems = [
    {
      title: 'Cost-Effective: One vehicle, thousands of clearances',
      content: 'A single HELIOS unit can sweep thousands of debris pieces without drastically repositioning — just adjusting the laser angle. Compared to physical robotics requiring one vehicle per target, HELIOS is conservatively 1000x more cost-efficient for the same operational volume.'
    },
    {
      title: 'Absolute Safety: No contact = no risk',
      content: 'Because HELIOS never touches the debris it handles, there is no risk of the vehicle itself being destroyed in a collision. This solves a fundamental paradox: a debris-clearing system that cannot itself become debris.'
    },
    {
      title: 'High Precision: Laser travels at the speed of light',
      content: 'Even though the target moves at 28,000 km/h, the laser travels at 299,792,458 m/s. No mechanical lag, no actuator delay. Once AI locks the target, corrections happen in nanoseconds. This enables precision targeting even for irregularly tumbling objects.'
    },
    {
      title: 'Scalability: A fleet that grows with the threat',
      content: 'Phase one involves a single HELIOS unit in LEO. As debris grows and demand increases, the HELIOS fleet can be expanded to cover different orbital altitudes — from LEO to GEO. Each unit operates autonomously yet coordinated through a centralized AI network.'
    }
  ];

  return (
    <>
      <SEO
        title="HELIOS — Orbital Debris Sweeper"
        description="HELIOS uses photon pressure lasers to deflect and deorbit space debris without physical contact, protecting Earth's orbital highways."
        path="/missions/helios"
      />
      {/* Page Header */}
      <div className="ts-page-header" style={{minHeight: '80vh', display: 'flex', alignItems: 'flex-end'}}>
        <div className="ts-page-header__bg">
          <img src="https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=1920&q=80" alt="Space Debris" fetchpriority="high" />
        </div>
        <div className="ts-page-header__overlay" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)'}}></div>
        <div className="ts-page-header__content" style={{paddingBottom: '4rem'}}>
          <div className="ts-hero__tag">MISSION 02 — ORBITAL DEFENSE</div>
          <h1 className="ts-hero__title" style={{fontSize: 'clamp(2.5rem, 6vw, 5rem)'}}>
            <strong>HELIOS</strong>
          </h1>
          <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', fontFamily: "'IBM Plex Mono', monospace", marginBottom: '1.5rem', maxWidth: '700px'}}>
            High-Energy Laser Interdiction &amp; Orbital Sweeper
          </p>
          <p className="ts-hero__desc">
            Clearing space debris from orbit using laser ablation — no physical contact, no robots, no collisions. Protecting orbital lanes for all of humanity.
          </p>
          <div className="ts-hero__actions">
            <a href="#problem" className="ts-btn ts-btn--primary">
              Explore Mission
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v10M4 9l4 4 4-4" /></svg>
            </a>
            <Link to="/mission" className="ts-btn ts-btn--ghost">
              Mission ASTRÆUS
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="ts-stats">
        <div className="ts-stat">
          <div className="ts-stat__value"><span>27</span>K+</div>
          <div className="ts-stat__label">km/h — Debris speed</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>1M</span>+</div>
          <div className="ts-stat__label">Debris objects tracked</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>50</span>m</div>
          <div className="ts-stat__label">HELIOS Core Structure</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>0</span></div>
          <div className="ts-stat__label">Physical contact needed</div>
        </div>
      </div>

      {/* Problem Section */}
      <section id="problem" className="ts-section">
        <div className="ts-section__tag">The Problem</div>
        <h2 className="ts-section__title">
          Kessler Syndrome:<br />
          <strong>The Quietest Threat in Orbit</strong>
        </h2>
        <div className="ts-grid ts-grid--2" style={{gap: '4rem', alignItems: 'start', marginTop: '2rem'}}>
          <div>
            <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem'}}>
              Millions of debris fragments are currently orbiting Earth — loose screws, paint flakes, rocket tank remnants, and dead satellites. Some are as small as a marble, but at <strong style={{color: 'var(--ts-white)'}}>28,000 km/h</strong>, even a 1 cm piece of metal can puncture a space station hull like a bullet.
            </p>
            <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8}}>
              The Kessler Theory (1978) warns: if debris density reaches a critical point, a single collision will trigger a chain reaction — debris hits satellites, creating more debris, which hits more satellites. In the worst case, all of low Earth orbit could become impassable for hundreds of years.
            </p>
          </div>
          <div>
            <div className="ts-quote">
              <p>"If we do nothing, within a few decades low Earth orbit could become a hazardous minefield — invisible yet deadly for everything that passes through."</p>
              <cite>— Analisis Internal TANESPACE, 2025</cite>
            </div>
            <div style={{marginTop: '2rem'}}>
              <h3 style={{fontSize: '0.75rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '1.5rem'}}>Threat Scale</h3>
              <div className="ts-progress">
                <div className="ts-progress__label">
                  <span>Objects &gt;10 cm (radar-tracked)</span>
                  <span>~27,000</span>
                </div>
                <div className="ts-progress__bar">
                  <div className="ts-progress__fill" style={{width: '30%', background: 'var(--ts-gray-50)'}}></div>
                </div>
              </div>
              <div className="ts-progress">
                <div className="ts-progress__label">
                  <span>Objects 1–10 cm (untracked)</span>
                  <span>~500,000</span>
                </div>
                <div className="ts-progress__bar">
                  <div className="ts-progress__fill" style={{width: '60%', background: 'var(--ts-gray-70)'}}></div>
                </div>
              </div>
              <div className="ts-progress">
                <div className="ts-progress__label">
                  <span>Objects &lt;1 cm (millimeter debris)</span>
                  <span>&gt;100 million</span>
                </div>
                <div className="ts-progress__bar">
                  <div className="ts-progress__fill" style={{width: '100%', background: 'var(--ts-gray-30)'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why current solutions fail */}
        <div style={{marginTop: '4rem'}}>
          <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '2rem'}}>Why Existing Solutions Fall Short</h3>
          <div className="ts-grid ts-grid--3" style={{gap: '2px'}}>
            <div className="ts-card" style={{borderTop: '2px solid var(--ts-gray-80)'}}>
              <div className="ts-card__number" style={{color: 'var(--ts-gray-50)'}}>Problem A</div>
              <h4 className="ts-card__title">Nets &amp; Capture Robots</h4>
              <p className="ts-card__desc">
                Too slow and too expensive. One robot can only capture one object per mission. With millions of debris pieces, this requires millions of missions — not scalable.
              </p>
            </div>
            <div className="ts-card" style={{borderTop: '2px solid var(--ts-gray-80)'}}>
              <div className="ts-card__number" style={{color: 'var(--ts-gray-50)'}}>Problem B</div>
              <h4 className="ts-card__title">Electromagnetic Tethers</h4>
              <p className="ts-card__desc">
                Only effective for large objects with conductive surfaces. Cannot be used on small fragments — which are the most numerous and hardest to track.
              </p>
            </div>
            <div className="ts-card" style={{borderTop: '2px solid var(--ts-gray-80)'}}>
              <div className="ts-card__number" style={{color: 'var(--ts-gray-50)'}}>Problem C</div>
              <h4 className="ts-card__title">Physical Contact = Risk</h4>
              <p className="ts-card__desc">
                Any vehicle that approaches debris risks being destroyed in a collision due to high relative velocity. Physical solutions could create more debris than they clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="ts-image-block ts-image-block--medium">
        <LazyImage src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80" alt="HELIOS Laser System" />
        <div className="ts-image-block__overlay"></div>
        <div className="ts-image-block__content">
          <div style={{fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-gray-50)'}}>
            HELIOS — High-Altitude Laser Station | Artist's Concept
          </div>
          <h2 style={{fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, maxWidth: '700px', marginTop: '0.5rem'}}>
            Pushing debris out of orbit<br />
            <strong>using lasers — without touching it.</strong>
          </h2>
        </div>
      </div>

      {/* Solution: Laser Ablation */}
      <section className="ts-section">
        <div className="ts-section__tag">The Solution</div>
        <h2 className="ts-section__title">
          Laser Ablation:<br />
          <strong>De-orbit Without Physical Contact</strong>
        </h2>
        <p className="ts-section__desc">
          HELIOS doesn't capture debris — it pushes it. From hundreds of kilometers away, high-energy pulsed lasers turn ordinary debris into its own natural propulsion system.
        </p>

        <div className="ts-timeline" style={{maxWidth: '850px', marginTop: '3rem'}}>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Step 01 — Detection</div>
            <div className="ts-timeline__title">High-Frequency LiDAR Tracks the Target</div>
            <div className="ts-timeline__desc">
              HELIOS's high-frequency LiDAR (Light Detection and Ranging) scans a radius of hundreds of kilometers in real time, tracking millions of objects as small as a marble. AI analyzes velocity vectors, trajectories, and threat priorities for each object in milliseconds.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Step 02 — Targeting</div>
            <div className="ts-timeline__title">Optical Systems Lock on Target</div>
            <div className="ts-timeline__desc">
              High-resolution adaptive optics lock onto the debris position even at 28,000 km/h. Since the laser travels at the speed of light, the system can perform real-time corrections with zero lag. Compensation for platform vibration and atmospheric distortion is handled automatically.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Step 03 — Ablation</div>
            <div className="ts-timeline__title">Laser Vaporizes Debris Surface</div>
            <div className="ts-timeline__desc">
              High-energy laser pulses — lasting only a few nanoseconds — strike one side of the debris surface. The concentrated energy instantly vaporizes a thin layer of surface material. This process is called <strong>laser ablation</strong>.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Step 04 — Natural Jet</div>
            <div className="ts-timeline__title">Vapor Creates Counter-Thrust</div>
            <div className="ts-timeline__desc">
              The rapidly released material vapor creates a small jet plume — exactly like a rocket engine, but using the debris material itself as propellant. This thrust alters the debris trajectory, slowing its orbital speed.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Step 05 — De-orbit</div>
            <div className="ts-timeline__title">Debris Enters Atmosphere &amp; Burns Up</div>
            <div className="ts-timeline__desc">
              With sufficient deceleration, the debris loses orbital energy and begins descending into Earth's atmosphere. At low altitude, atmospheric drag accelerates its entry into the dense layers, where it burns up completely — like an artificial meteor. Clean orbit restored.
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Specs */}
      <section style={{background: 'var(--ts-dark-03)', padding: '6rem 0'}}>
        <div style={{maxWidth: '1584px', margin: '0 auto', padding: '0 2rem'}}>
          <div className="ts-section__tag">Vehicle</div>
          <h2 className="ts-section__title">
            Vehicle Specifications<br />
            <strong>HELIOS</strong>
          </h2>

          <div className="ts-split" style={{marginTop: '3rem', minHeight: '500px'}}>
            <div className="ts-split__image">
              <LazyImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=960&q=80" alt="HELIOS Vehicle" />
            </div>
            <div className="ts-split__content" style={{background: 'var(--ts-dark-02)'}}>
              <h3 style={{fontSize: '0.75rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '2rem'}}>General Specifications</h3>
              <table className="ts-spec-table">
                <tbody>
                  <tr><td>Designation</td><td>HELIOS</td></tr>
                  <tr><td>Full Name</td><td style={{fontSize: '0.75rem'}}>High-Energy Laser Interdiction &amp; Orbital Sweeper</td></tr>
                  <tr><td>Type</td><td>High-Altitude Laser Station</td></tr>
                  <tr><td>Core Height</td><td>50–70 meters</td></tr>
                  <tr><td>Dominant System</td><td>Large-aperture laser optics</td></tr>
                  <tr><td>Cooling</td><td>Liquid cooling system</td></tr>
                  <tr><td>Power Source</td><td>Ultra-wide solar panels + capacitor bank</td></tr>
                  <tr><td>Tracking</td><td>High-freq LiDAR (real-time)</td></tr>
                  <tr><td>Crew</td><td>None (fully autonomous)</td></tr>
                  <tr><td>Contact Required</td><td>None — fully contactless</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Core Systems */}
      <section className="ts-section">
        <div className="ts-section__tag">Core Systems</div>
        <h2 className="ts-section__title">
          Four Core Systems of<br />
          <strong>HELIOS</strong>
        </h2>

        <div className="ts-grid ts-grid--2" style={{gap: '2px', marginTop: '3rem'}}>
          <div className="ts-card" style={{minHeight: '300px'}}>
            <span className="ts-tag" style={{alignSelf: 'flex-start', marginBottom: '1.5rem'}}>System 01</span>
            <h3 className="ts-card__title" style={{fontSize: '1.5rem'}}>High-Energy Pulsed Laser</h3>
            <p className="ts-card__desc" style={{fontSize: '1rem', lineHeight: 1.7}}>
              A high-energy pulsed laser system capable of vaporizing metal, plastic, and composite materials from hundreds of kilometers away. Each pulse lasts only nanoseconds but releases peak power in the gigawatt range. Massive capacitors store energy from solar panels and release it instantly with each shot.
            </p>
          </div>
          <div className="ts-card" style={{minHeight: '300px'}}>
            <span className="ts-tag" style={{alignSelf: 'flex-start', marginBottom: '1.5rem'}}>System 02</span>
            <h3 className="ts-card__title" style={{fontSize: '1.5rem'}}>LiDAR Tracking Array</h3>
            <p className="ts-card__desc" style={{fontSize: '1rem', lineHeight: 1.7}}>
              A continuously operating high-frequency LiDAR array, building a real-time 3D map of all objects within hundreds of kilometers. AI determines threat priority based on trajectory, size, and proximity to critical assets. Capable of tracking objects as small as 1 cm with millimeter precision.
            </p>
          </div>
          <div className="ts-card" style={{minHeight: '300px'}}>
            <span className="ts-tag" style={{alignSelf: 'flex-start', marginBottom: '1.5rem'}}>System 03</span>
            <h3 className="ts-card__title" style={{fontSize: '1.5rem'}}>Adaptive Optics System</h3>
            <p className="ts-card__desc" style={{fontSize: '1rem', lineHeight: 1.7}}>
              An adaptive optics system that continuously adjusts laser focus and direction to compensate for orbital platform vibration, pointing errors, and target movement. Ensures laser energy is precisely focused on the exact surface point of the debris — not scattered and wasted.
            </p>
          </div>
          <div className="ts-card" style={{minHeight: '300px'}}>
            <span className="ts-tag" style={{alignSelf: 'flex-start', marginBottom: '1.5rem'}}>System 04</span>
            <h3 className="ts-card__title" style={{fontSize: '1.5rem'}}>Liquid Cooling Infrastructure</h3>
            <p className="ts-card__desc" style={{fontSize: '1rem', lineHeight: 1.7}}>
              A large-scale liquid cooling system to dissipate residual heat from each laser shot. In space, convective cooling is ineffective, so a closed-loop system uses low-boiling-point coolant fluid that radiates heat through large radiators into space.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{background: 'var(--ts-dark-03)', padding: '6rem 2rem'}}>
        <div style={{maxWidth: '1584px', margin: '0 auto'}}>
          <div className="ts-section__tag">Use Cases</div>
          <h2 className="ts-section__title">
            Three Core Functions of<br />
            <strong>HELIOS</strong>
          </h2>

          <div className="ts-grid ts-grid--3" style={{gap: '2px', marginTop: '3rem'}}>
            <div className="ts-card" style={{borderLeft: '3px solid var(--ts-gray-70)'}}>
              <div className="ts-card__number">01</div>
              <h3 className="ts-card__title">Active Orbit Clearing</h3>
              <p className="ts-card__desc">
                Clearing rocket launch corridors from small fragments undetected by ground radar. A single HELIOS unit in orbit can sweep thousands of debris pieces without drastically changing position — simply adjusting laser angle and focus.
              </p>
            </div>
            <div className="ts-card" style={{borderLeft: '3px solid var(--ts-gray-70)'}}>
              <div className="ts-card__number">02</div>
              <h3 className="ts-card__title">Orbital Asset Protection</h3>
              <p className="ts-card__desc">
                Deployed near space stations or critical satellite constellations (GPS, communications, weather) to act as an "active shield". When HELIOS detects debris heading toward a critical asset, it immediately deflects its trajectory before a collision occurs.
              </p>
            </div>
            <div className="ts-card" style={{borderLeft: '3px solid var(--ts-gray-70)'}}>
              <div className="ts-card__number">03</div>
              <h3 className="ts-card__title">Orbital Traffic Management</h3>
              <p className="ts-card__desc">
                Moving dead satellites that crowd strategic orbits without physically attaching rocket engines. Through calculated laser ablation, the orbit of dead satellites can be precisely altered — freeing up orbital slots for productive use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="ts-section">
        <div className="ts-section__tag">Why It Works</div>
        <h2 className="ts-section__title">
          Key Advantages of<br />
          <strong>HELIOS</strong>
        </h2>
        <Accordion items={advantageItems} style={{maxWidth: '900px', marginTop: '3rem'}} />
      </section>

      {/* Comparison Table */}
      <section style={{background: 'var(--ts-dark-03)', padding: '6rem 2rem'}}>
        <div style={{maxWidth: '1584px', margin: '0 auto'}}>
          <div className="ts-section__tag">Comparison</div>
          <h2 className="ts-section__title">
            HELIOS vs<br />
            <strong>Other Methods</strong>
          </h2>

          <div style={{maxWidth: '1000px', marginTop: '3rem', overflowX: 'auto'}}>
            <table className="ts-spec-table" style={{tableLayout: 'fixed'}}>
              <tbody>
                <tr style={{borderBottom: '2px solid var(--ts-gray-70)'}}>
                  <td style={{color: 'var(--ts-white)', fontWeight: 600, textTransform: 'none', fontSize: '0.875rem', letterSpacing: 0, width: '25%'}}>Parameter</td>
                  <td style={{color: 'var(--ts-gray-50)', width: '25%'}}>Capture Robot</td>
                  <td style={{color: 'var(--ts-gray-50)', width: '25%'}}>EM Tether</td>
                  <td style={{color: 'var(--ts-white)', fontWeight: 600, width: '25%'}}>HELIOS</td>
                </tr>
                <tr><td>Targets per mission</td><td>1</td><td>1–5</td><td style={{color: 'var(--ts-white)', fontWeight: 500}}>1,000+</td></tr>
                <tr><td>Minimum object size</td><td>Large (&gt;10 cm)</td><td>Large, conductive</td><td style={{color: 'var(--ts-white)', fontWeight: 500}}>≥1 cm</td></tr>
                <tr><td>Collision risk</td><td>High</td><td>Moderate</td><td style={{color: 'var(--ts-white)', fontWeight: 500}}>Zero</td></tr>
                <tr><td>Position change</td><td>Per target</td><td>Per target</td><td style={{color: 'var(--ts-white)', fontWeight: 500}}>Minimal (laser angle)</td></tr>
                <tr><td>Cost per object</td><td>Very high</td><td>High</td><td style={{color: 'var(--ts-white)', fontWeight: 500}}>Very low</td></tr>
                <tr><td>Autonomous operation</td><td>Partial</td><td>Partial</td><td style={{color: 'var(--ts-white)', fontWeight: 500}}>Full (AI)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mission Connection */}
      <section className="ts-section">
        <div className="ts-section__tag">Synergy</div>
        <h2 className="ts-section__title">
          HELIOS &amp; ASTRÆUS:<br />
          <strong>Two Missions, One Vision</strong>
        </h2>

        <div className="ts-grid ts-grid--2" style={{gap: '2px', marginTop: '3rem'}}>
          <div className="ts-card" style={{borderTop: '3px solid var(--ts-gray-70)', minHeight: '280px'}}>
            <div style={{fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '1rem'}}>Mission 01</div>
            <h3 className="ts-card__title" style={{fontSize: '1.5rem'}}>ASTRÆUS</h3>
            <p className="ts-card__desc">
              Harvesting asteroid water, producing fuel in orbit, and building the "Silk Road of Space" — so spacecraft can travel to Mars and back economically.
            </p>
            <Link to="/mission" className="ts-btn ts-btn--ghost" style={{marginTop: '1.5rem', alignSelf: 'flex-start', fontSize: '0.75rem', padding: '0.625rem 1.25rem'}}>
              View ASTRÆUS Mission
              <Arrow />
            </Link>
          </div>
          <div className="ts-card" style={{borderTop: '3px solid var(--ts-accent)', minHeight: '280px'}}>
            <div style={{fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-accent)', marginBottom: '1rem'}}>Mission 02 — You Are Here</div>
            <h3 className="ts-card__title" style={{fontSize: '1.5rem'}}>HELIOS</h3>
            <p className="ts-card__desc">
              Clearing and securing orbit from the Kessler Syndrome threat — keeping launch corridors safe, GPS operational, and ASTRÆUS mission routes free from high-density debris fields.
            </p>
            <span className="ts-tag" style={{marginTop: '1.5rem', alignSelf: 'flex-start'}}>Current Page</span>
          </div>
        </div>

        <p style={{fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, maxWidth: '700px', marginTop: '3rem'}}>
          Both missions are complementary: ASTRÆUS opens the path to space by providing affordable fuel, while HELIOS ensures orbits remain safe to traverse. Together, they build the complete infrastructure for a new era of sustainable space exploration.
        </p>
      </section>

      {/* CTA */}
      <section style={{background: 'var(--ts-dark-03)', padding: '6rem 2rem', textAlign: 'center'}}>
        <div style={{maxWidth: '700px', margin: '0 auto'}}>
          <div className="ts-section__tag" style={{textAlign: 'center'}}>Next</div>
          <h2 className="ts-section__title" style={{textAlign: 'center'}}>
            Explore the Technology Behind<br />
            <strong>Both Missions</strong>
          </h2>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/technology" className="ts-btn ts-btn--primary">
              Explore Technology
              <Arrow />
            </Link>
            <Link to="/vehicle" className="ts-btn ts-btn--ghost">
              Meet ASTRÆUS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
