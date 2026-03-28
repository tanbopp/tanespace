import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const advantageItems = [
  {
    title: 'High Bandwidth: First-ever 4K video calls between planets',
    content: 'With 10–100 Gbps bandwidth, all of Netflix could be sent to Mars within hours. The first Mars colony won\'t have to live in information isolation — they can stream, video call in HD with family on Earth, and access all of humanity\'s scientific databases in real-time.'
  },
  {
    title: 'Security: Lasers are nearly impossible to intercept',
    content: 'Radio signals spread in all directions — anyone with a sufficiently large antenna can receive them. Lasers travel in a single precise narrow path. To intercept it, someone would have to place a physical sensor directly in the laser beam path — which would automatically cut the signal and notify both ends of the communication that an intrusion has occurred.'
  },
  {
    title: 'Weight Efficiency: Lighter than an equivalent radio antenna',
    content: 'A 70-meter diameter radio antenna (like NASA\'s Deep Space Network) produces only a few Mbps of bandwidth. Chronos\'s much smaller and lighter laser system delivers thousands of times higher bandwidth. Launch costs drop dramatically, construction time is shorter, and maintenance is easier.'
  },
  {
    title: 'Zero Solar Conjunction: 0% downtime thanks to Lagrange orbit',
    content: 'Two Chronos units at L4 and L5 form a triangular Earth-L4-L5 arrangement in orbit. Since L4 and L5 form 60° angles with Earth, signals to Mars can always be routed through one of them without ever passing through the solar disk. Earth-Mars communication becomes as permanent as Earth\'s internet.'
  }
];

export default function Chronos() {
  useEffect(() => {
    document.title = 'Chronos CDSR-1 — Interplanetary Internet | TANESPACE';
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="ts-page-header" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="ts-page-header__bg">
          <img src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=1920&q=80" alt="Chronos Deep-Space Relay" />
        </div>
        <div className="ts-page-header__overlay" style={{ background: 'rgba(0,0,0,0.55)' }}></div>
        <div className="ts-page-header__content" style={{ textAlign: 'center', padding: '0 2rem' }}>
          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 1.25rem' }}>
            CHRONOS
          </h1>
          <p style={{ fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ts-gray-30)', margin: 0 }}>
            CDSR-1 — Chronos Deep-Space Relay Unit 1
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="ts-stats">
        <div className="ts-stat">
          <div className="ts-stat__value"><span>45</span>m</div>
          <div className="ts-stat__label">Main structure height</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>100</span>Gbps</div>
          <div className="ts-stat__label">Interplanetary laser bandwidth</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>4</span></div>
          <div className="ts-stat__label">Gimbaled Laser Transceivers</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>0</span>%</div>
          <div className="ts-stat__label">Downtime (Lagrange orbit)</div>
        </div>
      </div>

      {/* Problem Section */}
      <section id="problem" className="ts-section">
        <div className="ts-section__tag">The Problem</div>
        <h2 className="ts-section__title">
          Two Connectivity Threats:<br />
          <strong>Conjunction &amp; Bottleneck</strong>
        </h2>
        <div className="ts-grid ts-grid--2" style={{ gap: '4rem', alignItems: 'start', marginTop: '2rem' }}>
          <div>
            <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Space communication today still uses radio waves — fundamentally the same technology used in the Apollo era of 1969. Radio bandwidth is extremely narrow, signals spread widely (energy-wasteful), and are highly vulnerable to solar plasma interference.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8 }}>
              Current Mars rovers and orbiters transmit data at an average rate of <strong style={{ color: 'var(--ts-white)' }}>2–8 Mbps</strong> at best. High-resolution cameras generate gigabytes of data, yet sending a single full-resolution image to Earth can take hours. This is not colony bandwidth — this is telegraph bandwidth.
            </p>
          </div>
          <div>
            <div className="ts-grid ts-grid--2" style={{ gap: '2px' }}>
              <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-80)' }}>
                <div className="ts-card__number" style={{ color: 'var(--ts-gray-50)' }}>Problem A</div>
                <h4 className="ts-card__title">Solar Conjunction</h4>
                <p className="ts-card__desc" style={{ fontSize: '0.875rem' }}>
                  Every ~2 years, Earth and Mars are on opposite sides of the Sun. Solar plasma completely blocks radio signals for 2–3 weeks. During that time, all Mars missions go "blind" — no data in, no instructions out.
                </p>
              </div>
              <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-80)' }}>
                <div className="ts-card__number" style={{ color: 'var(--ts-gray-50)' }}>Problem B</div>
                <h4 className="ts-card__title">Data Bottleneck</h4>
                <p className="ts-card__desc" style={{ fontSize: '0.875rem' }}>
                  Mars colonies need digital libraries, real-time health updates, and telecommunications. Radio cannot support the bandwidth required by a human colony, even with the largest deep-space antennas ever built.
                </p>
              </div>
            </div>
            <div className="ts-quote" style={{ marginTop: '1.5rem' }}>
              <p>"Sending a radio signal to Mars is like shouting across the Grand Canyon with a 1970s megaphone. We need lasers."</p>
              <cite>— CDSR-1 Design Notes, TANESPACE</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="ts-image-block ts-image-block--medium">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" alt="Deep Space Laser Communication" />
        <div className="ts-image-block__overlay"></div>
        <div className="ts-image-block__content">
          <div style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-gray-50)' }}>CHRONOS CDSR-1 — Artist's Concept</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, maxWidth: '700px', marginTop: '0.5rem' }}>
            Light does not spread. A laser stays focused<br />
            <strong>after traveling 225 million kilometers.</strong>
          </h2>
        </div>
      </div>

      {/* Solution */}
      <section className="ts-section">
        <div className="ts-section__tag">The Solution</div>
        <h2 className="ts-section__title">
          Light-Speed Communication:<br />
          <strong>Laser, Not Radio</strong>
        </h2>
        <p className="ts-section__desc">The problem with radio is that its signal spreads like a light bulb — energy wasted in every direction. A laser is a perfectly collimated light source — all energy directed in one direction.</p>

        <div className="ts-timeline" style={{ maxWidth: '850px', marginTop: '3rem' }}>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Solution 01 — Laser vs Radio</div>
            <div className="ts-timeline__title">The Fundamental Physics That Changes Everything</div>
            <div className="ts-timeline__desc">
              Radio signals spread isotropically — energy diminishes with the square of distance (Inverse Square Law). After millions of kilometers, signals become so weak that a football-field-size antenna is needed to receive them. Lasers do not spread. A laser beam leaving a 30 cm diameter telescope will have a diameter of only a few tens of meters after traveling 225 million km — enabling fundamentally better energy efficiency.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Solution 02 — Lagrange Points</div>
            <div className="ts-timeline__title">An Orbit Never Blocked by the Sun</div>
            <div className="ts-timeline__desc">
              Chronos is positioned at the <strong>Sun-Earth Lagrange points L4 and L5</strong> — naturally stable positions in Earth's orbit that form an equilateral triangle with Earth and the Sun. From here, the line of sight to Mars is never blocked by the Sun, even during solar conjunction. With 2 Chronos units at L4 and L5, the Earth-Mars connection becomes <em>permanent</em> — zero downtime.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Solution 03 — Store and Forward</div>
            <div className="ts-timeline__title">Petabyte SSDs as Interplanetary Buffers</div>
            <div className="ts-timeline__desc">
              When the laser path is temporarily blocked by other orbital objects, Chronos stores data locally on petabyte-scale SSDs — a method called <em>Delay-Tolerant Networking (DTN)</em>. Once the path clears, data is relayed at full bandwidth of 10–100 Gbps. No data lost, no connections timed out.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Solution 04 — Nanometer Accuracy</div>
            <div className="ts-timeline__title">Targeting a Moving Object 225 Million km Away</div>
            <div className="ts-timeline__desc">
              Maintaining laser lock to a receiver on Mars — which moves hundreds of km/h relative to Chronos — requires an extremely sophisticated inertial stabilization system. Chronos uses ring laser gyroscopes (RLG) and reaction wheels to isolate the vehicle body from micro-vibrations, while a gimbaled telescope actively tracks the target with angular precision below one nanoradian.
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Specs */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="ts-section__tag">Vehicle</div>
          <h2 className="ts-section__title">Specifications<br /><strong>Chronos CDSR-1</strong></h2>

          <div className="ts-split" style={{ marginTop: '3rem', minHeight: '520px' }}>
            <div className="ts-split__image">
              <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=960&q=80" alt="Chronos" />
            </div>
            <div className="ts-split__content" style={{ background: 'var(--ts-dark-02)' }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '2rem' }}>General Specifications</h3>
              <table className="ts-spec-table">
                <tbody>
                  <tr><td>Designation</td><td>Chronos CDSR-1</td></tr>
                  <tr><td>Full Name</td><td style={{ fontSize: '0.75rem' }}>Chronos Deep-Space Relay Unit 1</td></tr>
                  <tr><td>Type</td><td>Interplanetary Laser Relay Station</td></tr>
                  <tr><td>Height</td><td>45 meters</td></tr>
                  <tr><td>Laser Nodes</td><td>3–4 Gimbaled Laser Transceivers</td></tr>
                  <tr><td>Bandwidth</td><td>10–100 Gbps (laser, interplanetary)</td></tr>
                  <tr><td>Frequency</td><td>Near-infrared laser</td></tr>
                  <tr><td>Energy Source</td><td>Small Modular Nuclear Reactor (SMR) / Advanced RTG</td></tr>
                  <tr><td>Storage</td><td>Petabyte-scale SSD (Store-and-Forward)</td></tr>
                  <tr><td>Orbit</td><td>Sun-Earth L4 / L5 Lagrange Point</td></tr>
                  <tr><td>Crew</td><td>None (fully autonomous)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Core Systems */}
      <section className="ts-section">
        <div className="ts-section__tag">Core Systems</div>
        <h2 className="ts-section__title">Four Core Systems<br /><strong>Chronos</strong></h2>
        <div className="ts-grid ts-grid--2" style={{ gap: '2px', marginTop: '3rem' }}>
          <div className="ts-card" style={{ minHeight: '280px' }}>
            <span className="ts-tag" style={{ alignSelf: 'flex-start', marginBottom: '1.5rem' }}>System 01</span>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>Gimbaled Laser Transceiver</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              A hinged laser terminal that can aim independently without moving the entire vehicle body. Each unit can lock onto one target simultaneously — Earth, Moon, Mars, or an interplanetary ship in transit. Combines a transmitting telescope and receiver in one compact unit, with pointing accuracy at the sub-microrad level.
            </p>
          </div>
          <div className="ts-card" style={{ minHeight: '280px' }}>
            <span className="ts-tag" style={{ alignSelf: 'flex-start', marginBottom: '1.5rem' }}>System 02</span>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>SMR Power Core</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              The Small Modular Reactor (SMR) provides constant power independent of distance from the Sun. At the L4/L5 Lagrange points, solar intensity is still sufficient — but when future Chronos units are placed farther away (Jupiter, asteroid belt), the SMR becomes the only solution for firing high-power lasers continuously without fluctuation.
            </p>
          </div>
          <div className="ts-card" style={{ minHeight: '280px' }}>
            <span className="ts-tag" style={{ alignSelf: 'flex-start', marginBottom: '1.5rem' }}>System 03</span>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>Inertial Stabilization System</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              A laser that deviates by one nanorad means the beam misses by thousands of kilometers at the destination after traveling hundreds of millions of kilometers. Multi-tier stabilization: ring laser gyroscopes (RLG) for high-frequency vibration isolation, reaction wheels for macro attitude control, and active-optics for real-time correction based on feedback signals from the receiver.
            </p>
          </div>
          <div className="ts-card" style={{ minHeight: '280px' }}>
            <span className="ts-tag" style={{ alignSelf: 'flex-start', marginBottom: '1.5rem' }}>System 04</span>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>Petabyte SSD Array</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              A petabyte storage bank in space functioning as an interplanetary cache. Data sent from Mars to Earth (or vice versa) is stored temporarily on Chronos and relayed as soon as the laser path is available — exactly like a CDN (Content Delivery Network) on Earth's internet, but at solar system scale. Effective latency for public data access can be drastically reduced.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
          <div className="ts-section__tag">Services</div>
          <h2 className="ts-section__title">Three Infrastructure Services<br /><strong>Chronos</strong></h2>
          <div className="ts-grid ts-grid--3" style={{ gap: '2px', marginTop: '3rem' }}>
            <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-70)', minHeight: '280px' }}>
              <div className="ts-card__number">01</div>
              <h3 className="ts-card__title">Interplanet Cloud</h3>
              <p className="ts-card__desc">
                Chronos functions as a temporary data center in space. A Mars colony doesn't need to download files from Earth and wait 4–24 minutes — they simply retrieve from the nearest Chronos local cache. Software updates, medical records, encyclopedias, entertainment — all available almost instantly.
              </p>
            </div>
            <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-70)', minHeight: '280px' }}>
              <div className="ts-card__number">02</div>
              <h3 className="ts-card__title">Deep Space Navigation</h3>
              <p className="ts-card__desc">
                Chronos acts as a GPS node for interplanetary ships in transit. With 3+ Chronos units at various orbital positions, ship position triangulation can be done with meter-level accuracy anywhere in the inner solar system — far beyond the capabilities of current radio-based navigation.
              </p>
            </div>
            <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-70)', minHeight: '280px' }}>
              <div className="ts-card__number">03</div>
              <h3 className="ts-card__title">Tele-Robotics</h3>
              <p className="ts-card__desc">
                Enables scientists on Earth to control robots on Mars or asteroid surfaces with latency limited only by the speed of light — without additional signal degradation from radio spreading. Remote surgery, asteroid excavator control, construction robot programming — all in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Accordion */}
      <section className="ts-section">
        <div className="ts-section__tag">Why It Works</div>
        <h2 className="ts-section__title">Key Advantages<br /><strong>Chronos</strong></h2>
        <div style={{ maxWidth: '900px', marginTop: '3rem' }}>
          <Accordion items={advantageItems} />
        </div>
      </section>

      {/* Fleet Connection */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
          <div className="ts-section__tag">Fleet Synergy</div>
          <h2 className="ts-section__title">Chronos in the<br /><strong>TANESPACE Ecosystem</strong></h2>
          <div className="ts-grid ts-grid--3" style={{ gap: '2px', marginTop: '3rem' }}>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-gray-80)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '0.5rem' }}>ICARUS</div>
              <h3 className="ts-card__title">Building the Factory</h3>
              <p className="ts-card__desc">Icarus builds the physical orbital infrastructure. Chronos provides the data channel to send control instructions from Earth to Icarus in real-time and receive production status reports with gigabit bandwidth.</p>
              <Link to="/vehicle/icarus" className="ts-btn ts-btn--ghost" style={{ marginTop: '1rem', fontSize: '0.75rem', padding: '0.5rem 1rem', alignSelf: 'flex-start' }}>
                Icarus <Arrow />
              </Link>
            </div>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-accent)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-accent)', marginBottom: '0.5rem' }}>CHRONOS — You Are Here</div>
              <h3 className="ts-card__title">Connecting Minds</h3>
              <p className="ts-card__desc">Chronos is the interplanetary internet backbone. Every TANESPACE asset — ASTRÆUS, Icarus, Aegis, HELIOS, and future colonies — all connected through Chronos's laser relay network.</p>
              <span className="ts-tag" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>Current Page</span>
            </div>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-gray-80)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '0.5rem' }}>AEGIS</div>
              <h3 className="ts-card__title">Sustaining Life</h3>
              <p className="ts-card__desc">Aegis requires real-time medical and biological telemetry — plant sensors, embryo conditions, and crew health — all relayed via Chronos to doctors and scientists on Earth for analysis and emergency response.</p>
              <Link to="/vehicle/aegis" className="ts-btn ts-btn--ghost" style={{ marginTop: '1rem', fontSize: '0.75rem', padding: '0.5rem 1rem', alignSelf: 'flex-start' }}>
                Aegis <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="ts-section__tag" style={{ textAlign: 'center' }}>Next</div>
          <h2 className="ts-section__title" style={{ textAlign: 'center' }}>
            Connectivity Needs<br />
            <strong>Life Worth Sustaining</strong>
          </h2>
          <p style={{ color: 'var(--ts-gray-30)', marginBottom: '2.5rem' }}>Communication without a living ecosystem is just data without soul. Meet Aegis.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/vehicle/aegis" className="ts-btn ts-btn--primary">
              Explore Aegis <Arrow />
            </Link>
            <Link to="/vehicle/icarus" className="ts-btn ts-btn--ghost">Icarus Thermal Forge</Link>
          </div>
        </div>
      </section>
    </>
  );
}
