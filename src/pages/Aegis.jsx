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
    title: 'Controlled Gravity: The only vehicle with real 1G in orbit',
    content: 'No other vehicle can simulate Earth\'s gravity (1G) in orbit except Aegis. This enables botanical, embryological, and human biological research under real gravity conditions — not partially controlled microgravity. By changing rotation speed, researchers can run experiments at 0.16G (Moon), 0.38G (Mars), or 1G (Earth) as needed.'
  },
  {
    title: 'Ecosystem Mobility: Move to whatever orbit is needed',
    content: 'Unlike permanent colonies on the Martian surface that cannot be moved if something goes wrong, Aegis moves. If a lunar colony needs emergency biological support, Aegis maneuvers to lunar orbit. If Mars needs a new batch of seeds, Aegis transits to Martian orbit. This flexibility is a sustainability insurance for the entire space civilization ecosystem.'
  },
  {
    title: 'Biometric Security: AI monitors every organism in real-time',
    content: 'Inside Aegis, every plant and organism is monitored by an AI system that analyzes multispectral imagery, gas emissions, and sensor data to detect biological anomalies before they become threats. New pathogens, spontaneous mutations, or fungal infestations can be detected and isolated within minutes — long before they can spread and destroy the colony\'s food supply.'
  },
  {
    title: 'Total Independence: Closed-loop ecosystem with no Earth imports',
    content: 'Every molecule inside Aegis is recycled. CO₂ becomes O₂. Wastewater becomes drinking water. Organic waste becomes fertilizer. Nothing is expelled, nothing is imported from Earth except the initial biomass addition. This is a civilization model that can survive even if the connection to Earth is completely cut for years.'
  }
];

export default function Aegis() {
  useEffect(() => {
    document.title = 'Aegis Bio-Dome Seed — Living Ecosystem | TANESPACE';
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="ts-page-header" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="ts-page-header__bg">
          <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80" alt="Aegis Bio-Dome" />
        </div>
        <div className="ts-page-header__overlay" style={{ background: 'rgba(0,0,0,0.55)' }}></div>
        <div className="ts-page-header__content" style={{ textAlign: 'center', padding: '0 2rem' }}>
          <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, margin: '0 0 1.25rem' }}>
            AEGIS
          </h1>
          <p style={{ fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ts-gray-30)', margin: 0 }}>
            Aegis Bio-Dome Seed — Living Ecosystem in Space
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="ts-stats">
        <div className="ts-stat">
          <div className="ts-stat__value"><span>320</span>m</div>
          <div className="ts-stat__label">Support structure height</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>200</span>m</div>
          <div className="ts-stat__label">Toroid ring diameter</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>1</span>G</div>
          <div className="ts-stat__label">Simulated centrifugal gravity</div>
        </div>
        <div className="ts-stat">
          <div className="ts-stat__value"><span>1M</span>+</div>
          <div className="ts-stat__label">Seed varieties stored</div>
        </div>
      </div>

      {/* Problem Section */}
      <section id="problem" className="ts-section">
        <div className="ts-section__tag">The Problem</div>
        <h2 className="ts-section__title">
          Two Biological Threats:<br />
          <strong>Radiation &amp; Earth Dependency</strong>
        </h2>
        <div className="ts-grid ts-grid--2" style={{ gap: '4rem', alignItems: 'start', marginTop: '2rem' }}>
          <div>
            <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Space is the <strong style={{ color: 'var(--ts-white)' }}>most hostile environment</strong> for life that we know of. No soil. No atmosphere. No liquid water. And most lethal: constant cosmic radiation, solar storm X-rays, and high-energy galactic particles that literally sever DNA chains.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8 }}>
              Without gravity, human bones lose 1–2% mass per month. Without a protective atmosphere, plants taken to Mars will be sterile on arrival because seed DNA is damaged by radiation during the journey. And without a self-sustaining closed ecosystem, every early colony is completely dependent on resupply from Earth — one failed mission = starvation.
            </p>
          </div>
          <div>
            <div className="ts-grid ts-grid--2" style={{ gap: '2px' }}>
              <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-80)' }}>
                <div className="ts-card__number" style={{ color: 'var(--ts-gray-50)' }}>Problem A</div>
                <h4 className="ts-card__title">Radiation &amp; Sterility</h4>
                <p className="ts-card__desc" style={{ fontSize: '0.875rem' }}>
                  Cosmic radiation in orbit is around 100–200 mSv/year — 50× higher than the annual limit for nuclear workers on Earth. Seeds exposed during a 6–9 month journey to Mars without active shielding will be genetically damaged.
                </p>
              </div>
              <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-80)' }}>
                <div className="ts-card__number" style={{ color: 'var(--ts-gray-50)' }}>Problem B</div>
                <h4 className="ts-card__title">Logistics Dependency</h4>
                <p className="ts-card__desc" style={{ fontSize: '0.875rem' }}>
                  100% of astronaut food today is packaged food from Earth. If one resupply mission fails, a colony of 100 people will run out of food within months. This is not colony resilience — this is total vulnerability.
                </p>
              </div>
            </div>
            <div className="ts-quote" style={{ marginTop: '1.5rem' }}>
              <p>"We cannot build a civilization on Mars by shipping canned food from Earth forever. We must bring soil, seeds, and ecosystems."</p>
              <cite>— TANESPACE Life Sciences Division, 2025</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="ts-image-block ts-image-block--medium">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80" alt="Bio-Dome Interior" />
        <div className="ts-image-block__overlay"></div>
        <div className="ts-image-block__content">
          <div style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-gray-50)' }}>AEGIS BIO-DOME SEED — Artist's Concept</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, maxWidth: '700px', marginTop: '0.5rem' }}>
            320 meters tall. A spinning toroid creating gravity.<br />
            <strong>A mini-forest floating among the stars.</strong>
          </h2>
        </div>
      </div>

      {/* Architecture */}
      <section className="ts-section">
        <div className="ts-section__tag">Architecture</div>
        <h2 className="ts-section__title">
          The "Ring of Life" Structure:<br />
          <strong>A Spinning Toroid</strong>
        </h2>
        <p className="ts-section__desc">Aegis is designed as a toroid (giant donut) in constant rotation — because this is the only way to provide gravity to plants and humans in space without undiscovered gravity machines.</p>

        <div className="ts-timeline" style={{ maxWidth: '850px', marginTop: '3rem' }}>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Component 01 — The Ring</div>
            <div className="ts-timeline__title">200-Meter Diameter Toroid Ring</div>
            <div className="ts-timeline__desc">
              The outer ring spins at an angular velocity calibrated to produce centrifugal force equivalent to <strong>1G at Earth's surface</strong>. The inside of the ring is Aegis's ground surface — where plants grow, water flows, and crew walk. With a 200-meter diameter, the required rotation speed is slow enough that the human brain does not experience disorienting Coriolis effects (nausea, disorientation).
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Component 02 — The Shield</div>
            <div className="ts-timeline__title">Double Water Walls — Best Radiation Shield</div>
            <div className="ts-timeline__desc">
              Aegis's shield walls, <strong>1–1.5 meters</strong> thick, are not filled with metal — but with recycled wastewater. Water is a far more effective cosmic radiation absorber than metal for the same weight: water suppresses charged particle energy more efficiently due to its high density of hydrogen atoms. Recycled wastewater serves double duty as both a shield and a backup water reservoir.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Component 03 — The Hub</div>
            <div className="ts-timeline__title">Non-Rotating Hub — Cryo-Storage Vault</div>
            <div className="ts-timeline__desc">
              At the center point (hub) of the toroid — the non-rotating part where effective gravity approaches zero — is the <em>Cryo-Storage Vault</em>: a frozen storage vault holding millions of seed varieties, frozen animal and wildlife embryos, and a complete DNA database of thousands of species. Microgravity conditions at the hub are actually ideal for cryogenic storage because there is no mechanical stress on biological packaging.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">Component 04 — The Spine</div>
            <div className="ts-timeline__title">320-Meter Support Structure</div>
            <div className="ts-timeline__desc">
              A 320-meter vertical support column connecting the docking module at the top, control and communication computers in the middle, propulsion units at the bottom, and the toroid ring in the lower-middle section. This structure also houses large solar panels to supply electricity to the plant lighting system inside the ring (simulating Earth's day-night cycle).
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Specs */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="ts-section__tag">Vehicle</div>
          <h2 className="ts-section__title">Specifications<br /><strong>Aegis Bio-Dome Seed</strong></h2>

          <div className="ts-split" style={{ marginTop: '3rem', minHeight: '560px' }}>
            <div className="ts-split__image">
              <img src="https://images.unsplash.com/photo-1560762484-813fc97650a0?w=960&q=80" alt="Aegis" />
            </div>
            <div className="ts-split__content" style={{ background: 'var(--ts-dark-02)' }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '2rem' }}>General Specifications</h3>
              <table className="ts-spec-table">
                <tbody>
                  <tr><td>Designation</td><td>Aegis Bio-Dome Seed</td></tr>
                  <tr><td>Type</td><td>Mobile Orbital Biosphere</td></tr>
                  <tr><td>Structure Height</td><td>320 meters</td></tr>
                  <tr><td>Ring Diameter</td><td>200 meters</td></tr>
                  <tr><td>Simulated Gravity</td><td>Variable — 0.16G (Moon) to 1G (Earth) via rotation speed</td></tr>
                  <tr><td>Shield System</td><td>1–1.5m double walls filled with recycled water</td></tr>
                  <tr><td>Cryo-Storage</td><td>Millions of seed varieties + frozen embryos + DNA repository</td></tr>
                  <tr><td>Ecosystem</td><td>Closed-Loop (CO₂ → O₂ via plants, waste → fertilizer)</td></tr>
                  <tr><td>Crew Capacity</td><td>Hundreds of people (long-term)</td></tr>
                  <tr><td>Mobility</td><td>Can relocate between Earth orbit, Moon, Mars, L2</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Core Systems */}
      <section className="ts-section">
        <div className="ts-section__tag">Core Systems</div>
        <h2 className="ts-section__title">Four Core Systems<br /><strong>Aegis</strong></h2>
        <div className="ts-grid ts-grid--2" style={{ gap: '2px', marginTop: '3rem' }}>
          <div className="ts-card" style={{ minHeight: '300px' }}>
            <span className="ts-tag" style={{ alignSelf: 'flex-start', marginBottom: '1.5rem' }}>System 01</span>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>Centrifuge Ring — Artificial Gravity</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              A rotating toroid ring that can be calibrated to simulate any gravity between 0G and &gt;1G simply by changing the rotation speed. Allows researchers to conduct biological experiments under real Martian (0.38G) or Lunar (0.16G) gravity conditions — something impossible in an Earth laboratory without a continuously spinning centrifuge.
            </p>
          </div>
          <div className="ts-card" style={{ minHeight: '300px' }}>
            <span className="ts-tag" style={{ alignSelf: 'flex-start', marginBottom: '1.5rem' }}>System 02</span>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>Cryo-Storage Vault</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              A frozen vault at the vehicle's hub (microgravity zone) storing: millions of varieties of food, medicinal, and forest plant seeds; frozen livestock and wildlife embryos ready to develop in artificial wombs; and a complete DNA database of thousands of species as an extinction backup. This is the "Svalbard Global Seed Vault" — but mobile and located in space.
            </p>
          </div>
          <div className="ts-card" style={{ minHeight: '300px' }}>
            <span className="ts-tag" style={{ alignSelf: 'flex-start', marginBottom: '1.5rem' }}>System 03</span>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>Closed-Loop Life Support</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              A closed ecosystem system that requires no external supply. CO₂ from crew respiration is absorbed by plants and converted to oxygen through photosynthesis. Water is biologically processed and filtered. Organic waste is fermented into liquid fertilizer for plants. Protein is produced from fungi and insects whose biological conversion efficiency far exceeds conventional livestock.
            </p>
          </div>
          <div className="ts-card" style={{ minHeight: '300px' }}>
            <span className="ts-tag" style={{ alignSelf: 'flex-start', marginBottom: '1.5rem' }}>System 04</span>
            <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>AI Biomonitoring</h3>
            <p className="ts-card__desc" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
              A high-density sensor network — multispectral cameras, humidity sensors, atmospheric gas analysis, soil pH monitors — monitored by AI in real-time to detect early signs of plant disease, dangerous mutations, or ecosystem imbalances that could trigger failure before they spread. The system can isolate infected zones and initiate automatic remediation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Capabilities */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
          <div className="ts-section__tag">Missions</div>
          <h2 className="ts-section__title">Three Biological Missions<br /><strong>Aegis</strong></h2>
          <div className="ts-grid ts-grid--3" style={{ gap: '2px', marginTop: '3rem' }}>
            <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-70)', minHeight: '300px' }}>
              <div className="ts-card__number">01</div>
              <h3 className="ts-card__title">Accelerating Biological Adaptation</h3>
              <p className="ts-card__desc">
                A CRISPR laboratory inside Aegis performs genetic engineering on bacteria and moss to convert Mars's toxic soil (rich in perchlorates) into fertile, plantable soil. Successfully adapted organisms are sent to the Martian surface months before human colonists arrive — preparing the ground for habitation.
              </p>
            </div>
            <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-70)', minHeight: '300px' }}>
              <div className="ts-card__number">02</div>
              <h3 className="ts-card__title">Active Nutrition Production</h3>
              <p className="ts-card__desc">
                Aegis is not just a vault — it is a living nutrition factory. Producing organic supplements, fungi- and insect-based proteins, and fresh vegetables for explorer ships in transit (Earth-Mars journey takes 6–9 months). Fresh food dramatically improves the physical and mental condition of crew compared to packaged meals.
              </p>
            </div>
            <div className="ts-card" style={{ borderLeft: '3px solid var(--ts-gray-70)', minHeight: '300px' }}>
              <div className="ts-card__number">03</div>
              <h3 className="ts-card__title">Psychology — "Green Space" in Orbit</h3>
              <p className="ts-card__desc">
                In clinical trials on Earth, exposure to greenery for 20 minutes significantly reduces cortisol (a stress hormone). Astronauts spending months in cramped metal modules experience declining mood and cognitive performance. Aegis's garden ring becomes a rehabilitation and recreation space — where someone can walk through a "mini-forest" meters above the orbital ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="ts-section">
        <div className="ts-section__tag">Why It Works</div>
        <h2 className="ts-section__title">Unique Advantages<br /><strong>Aegis</strong></h2>
        <div style={{ maxWidth: '900px', marginTop: '3rem' }}>
          <Accordion items={advantageItems} />
        </div>
      </section>

      {/* Fleet Connection */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
          <div className="ts-section__tag">Fleet Synergy</div>
          <h2 className="ts-section__title">Aegis in the<br /><strong>TANESPACE Ecosystem</strong></h2>
          <div className="ts-grid ts-grid--2" style={{ gap: '2px', marginTop: '3rem' }}>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-gray-80)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '0.5rem' }}>With ICARUS</div>
              <h3 className="ts-card__title">Material + Ecosystem</h3>
              <p className="ts-card__desc">
                Icarus builds the physical — walls, frames, domes. Aegis fills that physical space with life. Walls made by Icarus can be optimized as biological substrates; the carbon-composite layers printed by Icarus can be designed with porosity for plant roots.
              </p>
              <Link to="/vehicle/icarus" className="ts-btn ts-btn--ghost" style={{ marginTop: '1rem', fontSize: '0.75rem', padding: '0.5rem 1rem', alignSelf: 'flex-start' }}>
                Icarus <Arrow />
              </Link>
            </div>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-gray-80)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '0.5rem' }}>With CHRONOS</div>
              <h3 className="ts-card__title">Ecosystem + Connectivity</h3>
              <p className="ts-card__desc">
                Aegis requires AI biomonitoring connected to scientists and doctors on Earth in real-time. Without Chronos, critical biological data must wait hours. With Chronos, emergency biological responses can be initiated within minutes even when Aegis is in Mars orbit.
              </p>
              <Link to="/vehicle/chronos" className="ts-btn ts-btn--ghost" style={{ marginTop: '1rem', fontSize: '0.75rem', padding: '0.5rem 1rem', alignSelf: 'flex-start' }}>
                Chronos <Arrow />
              </Link>
            </div>
          </div>

          <div style={{ marginTop: '2px' }}>
            <div className="ts-card" style={{ borderTop: '3px solid var(--ts-accent)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-accent)', marginBottom: '0.5rem' }}>AEGIS — You Are Here</div>
              <h3 className="ts-card__title" style={{ fontSize: '1.5rem' }}>Sustaining the Soul of Civilization</h3>
              <p className="ts-card__desc" style={{ maxWidth: '700px' }}>
                Icarus builds the physical. Chronos connects the minds. Aegis keeps the soul — life, ecosystems, the biological continuity of humanity far from Earth. Without Aegis, humans in space survive. With Aegis, humans in space <em>live</em>.
              </p>
              <span className="ts-tag" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>Current Page</span>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Fleet Summary */}
      <section className="ts-section">
        <div className="ts-section__tag">The Full Fleet</div>
        <h2 className="ts-section__title">The Full Fleet<br /><strong>TANESPACE</strong></h2>
        <div className="ts-grid ts-grid--2" style={{ gap: '2px', marginTop: '3rem' }}>
          <div className="ts-card" style={{ borderTop: '2px solid var(--ts-gray-80)' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '0.5rem' }}>Mission</div>
            <h3 className="ts-card__title">ASTRÆUS</h3>
            <p className="ts-card__desc" style={{ fontSize: '0.875rem' }}>Asteroid harvester, orbital fuel production. Opening the "Silk Road of Space" to make Mars travel economical.</p>
            <Link to="/vehicle" className="ts-card__link">ASTRÆUS →</Link>
          </div>
          <div className="ts-card" style={{ borderTop: '2px solid var(--ts-gray-80)' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '0.5rem' }}>Mission</div>
            <h3 className="ts-card__title">HELIOS</h3>
            <p className="ts-card__desc" style={{ fontSize: '0.875rem' }}>Laser ablation-based orbit cleaner. Ensures orbital safety from the Kessler Syndrome threat without physical contact.</p>
            <Link to="/mission/helios" className="ts-card__link">HELIOS →</Link>
          </div>
          <div className="ts-card" style={{ borderTop: '2px solid var(--ts-gray-80)' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '0.5rem' }}>Vehicle</div>
            <h3 className="ts-card__title">Icarus Thermal Forge</h3>
            <p className="ts-card__desc" style={{ fontSize: '0.875rem' }}>Solar-powered orbital factory. Melts asteroid ore and prints monolithic megastructures using electron beam 3D printing.</p>
            <Link to="/vehicle/icarus" className="ts-card__link">Icarus →</Link>
          </div>
          <div className="ts-card" style={{ borderTop: '2px solid var(--ts-gray-80)' }}>
            <div style={{ fontSize: '0.6875rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--ts-gray-50)', marginBottom: '0.5rem' }}>Vehicle</div>
            <h3 className="ts-card__title">Chronos CDSR-1</h3>
            <p className="ts-card__desc" style={{ fontSize: '0.875rem' }}>Interplanetary laser relay at Lagrange points. Gigabit internet between planets with zero downtime and highest communication security.</p>
            <Link to="/vehicle/chronos" className="ts-card__link">Chronos →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="ts-section__tag" style={{ textAlign: 'center' }}>Explore More</div>
          <h2 className="ts-section__title" style={{ textAlign: 'center' }}>
            The Technology Behind<br />
            <strong>All of This</strong>
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/technology" className="ts-btn ts-btn--primary">
              Explore Technology <Arrow />
            </Link>
            <Link to="/mission" className="ts-btn ts-btn--ghost">Our Missions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
