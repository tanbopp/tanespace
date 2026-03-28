import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Arrow = () => <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>

export default function Home() {
  useEffect(() => { document.title = 'TANESPACE' }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="ts-hero">
        <div className="ts-hero__bg">
          <img src={import.meta.env.BASE_URL + 'assets/images/silk-road-space-harvest.jpg'} alt="Deep Space" />
        </div>
        <div className="ts-hero__overlay"></div>
        <div className="ts-hero__content">
          <h1 className="ts-hero__title">
            Harvesting the<br />
            <strong>Silk Road of Space</strong>
          </h1>
          <p className="ts-hero__desc">
            Harvesting water from asteroids. Refueling in orbit. Unlocking a new era of sustainable interplanetary travel.
          </p>
          <div className="ts-hero__actions">
            <Link to="/mission" className="ts-btn ts-btn--primary">
              Explore Mission <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="ts-section">
        <h2 className="ts-section__title">
          Asteroid Water Mining for<br />
          <strong>Orbital Refueling</strong>
        </h2>
        <p className="ts-section__desc">
          The greatest challenge in space exploration is Earth's gravity. Sending fuel from Earth to orbit is enormously expensive. TANESPACE takes a revolutionary approach: harvesting water from near-Earth asteroids, splitting it into liquid Hydrogen and Oxygen — rocket propellant — directly in space.
        </p>
        <Link to="/mission" className="ts-btn ts-btn--teal">
          Learn More About Our Mission <Arrow />
        </Link>
      </section>

      {/* Image Break */}
      <div className="ts-image-block ts-image-block--medium">
        <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=80" alt="Asteroid Mining" />
        <div className="ts-image-block__overlay"></div>
        <div className="ts-image-block__content">
          <h2 style={{fontSize:'clamp(1.5rem, 3vw, 2.5rem)',fontWeight:300}}>
            <strong>Autonomous Sourcing &amp; Transport</strong><br />
            Refueling Unit for Exospheric Utility Systems
          </h2>
        </div>
      </div>

      {/* Feature Cards */}
      <section className="ts-section--full">
        <div style={{maxWidth:1584,margin:'0 auto',padding:'4rem 2rem 0'}}>
          <h2 className="ts-section__title">
            Three Core Functions of<br />
            <strong>ASTRÆUS</strong>
          </h2>
        </div>
        <div className="ts-grid ts-grid--3" style={{marginTop:'2rem'}}>
          <div className="ts-card">
            <h3 className="ts-card__title">Interplanetary Fuel Station</h3>
            <p className="ts-card__desc">
              Refueling the tanks of spacecraft bound for Mars or Jupiter so they can carry more cargo instead of fuel from Earth. Every kilogram not launched from Earth means more useful payload.
            </p>
            <Link to="/mission" className="ts-card__link">Learn more <Arrow /></Link>
          </div>
          <div className="ts-card">
            <h3 className="ts-card__title">Life Support System</h3>
            <p className="ts-card__desc">
              Providing reserve oxygen and clean water for space stations or lunar colonies. Harvested water isn't just propellant — it's a source of life beyond Earth.
            </p>
            <Link to="/technology" className="ts-card__link">Learn more <Arrow /></Link>
          </div>
          <div className="ts-card">
            <h3 className="ts-card__title">Logistics Terminal</h3>
            <p className="ts-card__desc">
              Serving as the central hub for future small mining robots. ASTRÆUS is the backbone of the space logistics network connecting Earth, the Moon, and Mars.
            </p>
            <Link to="/vehicle" className="ts-card__link">Learn more <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Split Section - Vehicle Preview */}
      <section className="ts-split" style={{marginTop:'4rem'}}>
        <div className="ts-split__image">
          <img src="https://images.unsplash.com/photo-1457364559154-aa2644600ebb?w=960&q=80" alt="ASTRÆUS Vehicle" />
        </div>
        <div className="ts-split__content">
          <h2 className="ts-section__title" style={{marginBottom:'2rem'}}>
            <strong>ASTRÆUS</strong>
          </h2>
          <table className="ts-spec-table">
            <tbody>
              <tr><td>Type</td><td>Mobile Orbital Refinery</td></tr>
              <tr><td>Height</td><td>210 meters</td></tr>
              <tr><td>Diameter</td><td>15-20 meters</td></tr>
              <tr><td>Propulsion</td><td>Ion Thrusters</td></tr>
              <tr><td>Autonomy</td><td>Full AI Control</td></tr>
            </tbody>
          </table>
          <Link to="/vehicle" className="ts-btn ts-btn--primary" style={{marginTop:'2rem',alignSelf:'flex-start'}}>
            Full Specifications <Arrow />
          </Link>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="ts-section">
        <h2 className="ts-section__title">
          Why <strong>Asteroid Harvesting</strong><br />
          Changes Everything
        </h2>
        <div className="ts-grid ts-grid--2" style={{gap:'2rem',marginTop:'3rem'}}>
          <div>
            <h3 style={{fontSize:'1.25rem',fontWeight:600,marginBottom:'1rem',color:'var(--ts-teal)'}}>Cost Efficiency</h3>
            <p style={{fontSize:'0.875rem',color:'var(--ts-gray-30)',lineHeight:1.7}}>
              Fighting Earth's gravity is the most expensive part of any space mission. Sourcing fuel from asteroids is far more energy-efficient than lifting it from Earth's surface. Cost savings reach 90% per mission.
            </p>
          </div>
          <div>
            <h3 style={{fontSize:'1.25rem',fontWeight:600,marginBottom:'1rem',color:'var(--ts-teal)'}}>Sustainability</h3>
            <p style={{fontSize:'0.875rem',color:'var(--ts-gray-30)',lineHeight:1.7}}>
              No need to drain Earth's resources for massive rocket propellant. Asteroid resources are the key to sustainable exploration without burdening our planet.
            </p>
          </div>
          <div>
            <h3 style={{fontSize:'1.25rem',fontWeight:600,marginBottom:'1rem',color:'var(--ts-teal)'}}>Full Autonomy</h3>
            <p style={{fontSize:'0.875rem',color:'var(--ts-gray-30)',lineHeight:1.7}}>
              ASTRÆUS operates independently with advanced AI, minimizing human risk in hazardous mining operations within the harsh environment of space.
            </p>
          </div>
          <div>
            <h3 style={{fontSize:'1.25rem',fontWeight:600,marginBottom:'1rem',color:'var(--ts-teal)'}}>Self-Sustaining Ecosystem</h3>
            <p style={{fontSize:'0.875rem',color:'var(--ts-gray-30)',lineHeight:1.7}}>
              With fuel produced in orbit, spacecraft no longer need to carry all propellant from Earth. Journeys to Mars or Jupiter become routine, not one-way missions.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
