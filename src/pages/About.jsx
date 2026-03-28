import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const faqItems = [
  {
    title: 'Is this technology truly feasible?',
    content: 'Yes. Every technology component we use has already been demonstrated independently: ion thrusters (Dawn spacecraft), landing on asteroids (Hayabusa, OSIRIS-REx), electrolysis in space (ISS). TANESPACE integrates them all into a single platform.'
  },
  {
    title: 'When will the first mission launch?',
    content: 'The target launch date for ASTRÆUS-1 is 2028, following orbital testing of key components in 2027. This timeline depends on the success of testing milestones and funding.'
  },
  {
    title: 'How can I join TANESPACE?',
    content: 'We are always looking for passionate engineers, scientists, and visionaries. Visit our Careers page or contact us directly. We have open positions in propulsion engineering, AI/ML, materials science, and mission operations.'
  }
];

export default function About() {
  return (
    <>
      <SEO
        title="About TANESPACE"
        description="Meet the team and mission behind TANESPACE — building the Silk Road of Space through asteroid water harvesting."
        path="/about"
      />
      {/* Page Header */}
      <div className="ts-page-header" style={{ minHeight: '60vh', display: 'flex', alignItems: 'flex-end' }}>
        <div className="ts-page-header__bg">
          <img src="https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?w=1920&q=80" alt="About TANESPACE" fetchpriority="high" />
        </div>
        <div className="ts-page-header__overlay"></div>
        <div className="ts-page-header__content" style={{ paddingBottom: '4rem' }}>
          <div className="ts-hero__tag">ABOUT US</div>
          <h1 className="ts-hero__title">
            About<br />
            <strong>TANESPACE</strong>
          </h1>
          <p className="ts-hero__desc">
            We are building the world's first space logistics infrastructure to usher in a new era of sustainable space exploration.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="ts-section">
        <div className="ts-grid ts-grid--2" style={{ gap: '4rem', alignItems: 'start' }}>
          <div>
            <div className="ts-section__tag">Who We Are</div>
            <h2 className="ts-section__title">
              Opening Access<br />
              <strong>to Space</strong><br />for Everyone
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              TANESPACE was founded with one vision: making interplanetary travel routine and affordable. Not just for governments or billionaires, but for humanity as a whole.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8 }}>
              We believe the greatest barrier is not rocket technology or distance — it is the cost of fuel. By moving fuel production to space, we eliminate the most fundamental obstacle in space exploration.
            </p>
          </div>
          <div>
            <div className="ts-quote">
              <p>"We don't build rockets. We build highways. The rockets already exist — what's missing are the gas stations along the way."</p>
              <cite>— Founders, TANESPACE</cite>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <div className="ts-progress">
                <div className="ts-progress__label">
                  <span>ASTRÆUS Development</span>
                  <span>78%</span>
                </div>
                <div className="ts-progress__bar">
                  <div className="ts-progress__fill" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div className="ts-progress">
                <div className="ts-progress__label">
                  <span>Asteroid Mapping AI</span>
                  <span>92%</span>
                </div>
                <div className="ts-progress__bar">
                  <div className="ts-progress__fill" style={{ width: '92%', background: 'var(--ts-accent)' }}></div>
                </div>
              </div>
              <div className="ts-progress">
                <div className="ts-progress__label">
                  <span>Electrolysis Unit Testing</span>
                  <span>65%</span>
                </div>
                <div className="ts-progress__bar">
                  <div className="ts-progress__fill" style={{ width: '65%', background: 'var(--ts-purple)' }}></div>
                </div>
              </div>
              <div className="ts-progress">
                <div className="ts-progress__label">
                  <span>Vapor Capture Prototype</span>
                  <span>45%</span>
                </div>
                <div className="ts-progress__bar">
                  <div className="ts-progress__fill" style={{ width: '45%', background: 'var(--ts-orange)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
          <div className="ts-grid ts-grid--2" style={{ gap: '2px' }}>
            <div className="ts-card" style={{ minHeight: '350px', borderLeft: '3px solid var(--ts-teal)' }}>
              <div className="ts-section__tag" style={{ marginBottom: '1.5rem' }}>Our Mission</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                Asteroid Water Mining for Orbital Refueling
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8 }}>
                Building the "Silk Road of Space" — a network of orbital refueling stations utilizing water from near-Earth asteroids. A pure logistics mission that will cut launch costs by up to 90% and make interplanetary travel routine.
              </p>
            </div>
            <div className="ts-card" style={{ minHeight: '350px', borderLeft: '3px solid var(--ts-accent)' }}>
              <div className="ts-section__tag" style={{ marginBottom: '1.5rem', color: 'var(--ts-accent)' }}>Our Vision</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                Making Humanity a Multiplanetary Species
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--ts-gray-30)', lineHeight: 1.8 }}>
                In the next 20 years, we envision a world where going to Mars is as normal as a transatlantic flight. Where lunar colonies receive water and oxygen supplied from asteroids. Where space is no longer a frightening frontier, but a domain where humans live and work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="ts-section">
        <div className="ts-section__tag">Milestones</div>
        <h2 className="ts-section__title">
          Our <strong>Journey</strong>
        </h2>

        <div className="ts-timeline" style={{ maxWidth: '800px', marginTop: '3rem' }}>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">2024</div>
            <div className="ts-timeline__title">TANESPACE Founded</div>
            <div className="ts-timeline__desc">
              A team of engineers and scientists from multiple disciplines unite with one vision: solving the space fuel logistics problem.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">2025</div>
            <div className="ts-timeline__title">Proof of Concept</div>
            <div className="ts-timeline__desc">
              Laboratory demonstration successful: water extraction from meteorite rock and conversion to hydrogen &amp; oxygen using an electrolysis prototype.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">2026</div>
            <div className="ts-timeline__title">ASTRÆUS Design Complete</div>
            <div className="ts-timeline__desc">
              Full design of ASTRÆUS Mk.I completed. Beginning fabrication of prototype components and subsystem testing at microgravity facilities.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">2027</div>
            <div className="ts-timeline__title">Orbital Test — Planned</div>
            <div className="ts-timeline__desc">
              Launch of a test module to LEO to validate the Vapor Capture Shroud system and the electrolysis unit under real microgravity conditions.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">2028</div>
            <div className="ts-timeline__title">ASTRÆUS-1 Launch — Planned</div>
            <div className="ts-timeline__desc">
              Launch of the first ASTRÆUS unit toward the first target asteroid. The beginning of a new era in space logistics.
            </div>
          </div>
          <div className="ts-timeline__item">
            <div className="ts-timeline__year">2032</div>
            <div className="ts-timeline__title">Silk Road Network — Planned</div>
            <div className="ts-timeline__desc">
              The "Silk Road of Space" network operating at full capacity with an ASTRÆUS fleet at several strategic points in the inner solar system.
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--ts-dark-02)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
          <div className="ts-section__tag">Our Values</div>
          <h2 className="ts-section__title">
            Principles That <strong>Guide Us</strong>
          </h2>

          <div className="ts-grid ts-grid--4" style={{ gap: '2px', marginTop: '3rem' }}>
            <div className="ts-card">
              <div className="ts-card__number" style={{ color: 'var(--ts-teal)', fontSize: '2rem', fontWeight: 300 }}>01</div>
              <h3 className="ts-card__title">Sustainability First</h3>
              <p className="ts-card__desc">
                Every decision is evaluated based on long-term impact. We do not take shortcuts that sacrifice sustainability for speed.
              </p>
            </div>
            <div className="ts-card">
              <div className="ts-card__number" style={{ color: 'var(--ts-accent)', fontSize: '2rem', fontWeight: 300 }}>02</div>
              <h3 className="ts-card__title">Radical Efficiency</h3>
              <p className="ts-card__desc">
                Efficiency is not just a metric — it is our DNA. Every gram, every watt, every second counts. This is what separates a successful mission from a failed one in space.
              </p>
            </div>
            <div className="ts-card">
              <div className="ts-card__number" style={{ color: 'var(--ts-purple)', fontSize: '2rem', fontWeight: 300 }}>03</div>
              <h3 className="ts-card__title">Open Knowledge</h3>
              <p className="ts-card__desc">
                We believe the greatest progress is achieved through open collaboration. Our research and findings are published to drive the entire industry forward together.
              </p>
            </div>
            <div className="ts-card">
              <div className="ts-card__number" style={{ color: 'var(--ts-orange)', fontSize: '2rem', fontWeight: 300 }}>04</div>
              <h3 className="ts-card__title">Human Safety</h3>
              <p className="ts-card__desc">
                Full autonomy is not just a technical feature — it is a safety commitment. By eliminating the need for human crew in mining operations, we eliminate the risk to human lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="ts-section">
        <div className="ts-section__tag">Leadership</div>
        <h2 className="ts-section__title">
          Our <strong>Team</strong>
        </h2>
        <p className="ts-section__desc">
          TANESPACE is built by engineers, scientists, and visionaries dedicated to opening the last frontier of human exploration.
        </p>

        <div className="ts-team" style={{ marginTop: '2rem' }}>
          <div className="ts-team__member">
            <LazyImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Team Member" />
            <div className="ts-team__info">
              <div className="ts-team__name">Dr. Arjuna Pratama</div>
              <div className="ts-team__role">CEO &amp; Co-Founder</div>
            </div>
          </div>
          <div className="ts-team__member">
            <LazyImage src="https://images.unsplash.com/photo-1573496359142-b8d57734a5a2?w=400&q=80" alt="Team Member" />
            <div className="ts-team__info">
              <div className="ts-team__name">Dr. Sari Dewi Kusuma</div>
              <div className="ts-team__role">CTO &amp; Co-Founder</div>
            </div>
          </div>
          <div className="ts-team__member">
            <LazyImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" alt="Team Member" />
            <div className="ts-team__info">
              <div className="ts-team__name">Prof. Bima Sakti Utomo</div>
              <div className="ts-team__role">Chief Science Officer</div>
            </div>
          </div>
          <div className="ts-team__member">
            <LazyImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" alt="Team Member" />
            <div className="ts-team__info">
              <div className="ts-team__name">Dr. Maya Lestari</div>
              <div className="ts-team__role">VP of Engineering</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & FAQ */}
      <section style={{ background: 'var(--ts-dark-03)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
          <div className="ts-grid ts-grid--2" style={{ gap: '4rem', alignItems: 'start' }}>
            <div>
              <div className="ts-section__tag">Partners &amp; Collaborators</div>
              <h2 className="ts-section__title">
                Strategic <strong>Partners</strong>
              </h2>
              <ul className="ts-list" style={{ marginTop: '2rem' }}>
                <li>Badan Antariksa Nasional (National Space Agencies)</li>
                <li>SpaceX — Launch Vehicle Provider</li>
                <li>Planetary Resources Research Institute</li>
                <li>MIT Space Resources Laboratory</li>
                <li>European Space Agency — Technology Transfer</li>
                <li>JAXA — Asteroid Operation Expertise</li>
              </ul>
            </div>
            <div>
              <div className="ts-section__tag">FAQ</div>
              <h2 className="ts-section__title">
                Frequently Asked <strong>Questions</strong>
              </h2>
              <div style={{ marginTop: '2rem' }}>
                <Accordion items={faqItems} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="ts-section__tag" style={{ textAlign: 'center' }}>Get Involved</div>
          <h2 className="ts-section__title" style={{ textAlign: 'center' }}>
            The Future of Exploration<br />
            <strong>Starts Now</strong>
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--ts-gray-30)', marginBottom: '2rem' }}>
            Join us in building the Silk Road of Space.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/mission" className="ts-btn ts-btn--primary">
              Our Mission <Arrow />
            </Link>
            <Link to="/gallery" className="ts-btn ts-btn--ghost">
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
