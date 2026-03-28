import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ArrowSvg = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
)

const ChevronSvg = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" style={{width:10,height:10,marginLeft:4}}><path d="M4 6l4 4 4-4"/></svg>
)

export default function Layout({ children }) {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef()

  const path = location.pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    window.scrollTo(0, 0)
  }, [path])

  useEffect(() => {
    const close = () => setOpenDropdown(null)
    document.addEventListener('click', close)
    const esc = (e) => { if (e.key === 'Escape') { setOpenDropdown(null); setMobileOpen(false) } }
    document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('click', close); document.removeEventListener('keydown', esc) }
  }, [])

  const isActive = (...paths) => paths.includes(path)
  const isMissionGroup = isActive('/missions', '/missions/silk-road', '/missions/helios')
  const isFleetGroup = isActive('/vehicle', '/vehicle/icarus', '/vehicle/chronos', '/vehicle/aegis')
  const isAboutGroup = isActive('/about', '/technology')

  const toggleDropdown = (name, e) => {
    e.stopPropagation()
    setOpenDropdown(prev => prev === name ? null : name)
  }

  return (
    <>
      <header className={`ts-header${scrolled ? ' scrolled' : ''}`} id="header">
        <div className="ts-header__inner">
          <Link to="/" className="ts-header__logo">
            <svg style={{width:'auto',height:16}} viewBox="0 0 149 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1264 2H8.49894V14H6.62747V2H0V0H15.1264V2Z" fill="white"/>
              <path d="M31.0224 14H29.1501V10H18.6854V8H29.1501V2H22.4293C21.5807 2.00003 20.8006 2.22641 20.0892 2.67969C19.3778 3.11969 18.8105 3.72047 18.3861 4.48047C17.9744 5.24043 17.7675 6.08007 17.7675 7V14H15.896V7C15.896 6.04 16.0642 5.1398 16.4012 4.2998C16.7382 3.44652 17.206 2.69954 17.805 2.05957C18.4041 1.40627 19.0971 0.900033 19.8833 0.540039C20.682 0.180058 21.5307 1.90855e-05 22.4293 0H31.0224V14Z" fill="white"/>
              <path d="M35.1003 0C36.0114 0 36.9982 0.186237 38.059 0.55957C39.1322 0.932874 40.2053 1.45976 41.2785 2.13965C42.3518 2.81965 43.3627 3.63341 44.3112 4.58008C45.2722 5.51341 46.0957 6.55353 46.7821 7.7002V0H48.6545V14H46.7821C46.7821 12.7735 46.5452 11.6003 46.0711 10.4805C45.6093 9.34726 44.9916 8.30694 44.2179 7.36035C43.4442 6.40044 42.5829 5.5536 41.6345 4.82031C40.6984 4.07366 39.7435 3.46666 38.7701 3C37.7966 2.52 36.8852 2.21341 36.0365 2.08008V14H34.1651V0H35.1003Z" fill="white"/>
              <path d="M65.3605 2H53.6787V12H65.3605V14H51.8063V0H65.3605V2Z" fill="white"/>
              <path d="M81.2107 2H70.7644C70.2529 2 69.8099 2.1999 69.4356 2.59961C69.0737 2.98628 68.892 3.45333 68.892 4C68.892 4.54667 69.0737 5.01992 69.4356 5.41992C69.81 5.80645 70.2528 6 70.7644 6H78.4022C79.101 6 79.7313 6.18011 80.2929 6.54004C80.8545 6.90003 81.3039 7.3867 81.6409 8C81.9778 8.6 82.146 9.26667 82.146 10C82.146 10.7332 81.9777 11.4063 81.6409 12.0195C81.3039 12.6195 80.8545 13.1 80.2929 13.46C79.7313 13.8199 79.101 14 78.4022 14H67.0205V12H78.4022C78.9263 12 79.3699 11.8066 79.7319 11.4199C80.0937 11.02 80.2746 10.5466 80.2746 10C80.2746 9.45334 80.0938 8.98627 79.7319 8.59961C79.3699 8.19961 78.9263 8 78.4022 8H70.7644C70.078 8 69.4478 7.81991 68.8737 7.45996C68.3121 7.09996 67.8627 6.61953 67.5257 6.01953C67.1888 5.40628 67.0205 4.7332 67.0205 4C67.0205 3.26667 67.1887 2.6 67.5257 2C67.8627 1.38668 68.3121 0.900034 68.8737 0.540039C69.4478 0.180085 70.078 0 70.7644 0H81.2107V2Z" fill="white"/>
              <path d="M94.7759 0C95.637 0 96.4238 0.226383 97.1352 0.679688C97.8465 1.11969 98.4081 1.72047 98.8199 2.48047C99.2441 3.24038 99.4569 4.08014 99.4569 5C99.4569 5.91986 99.2441 6.75962 98.8199 7.51953C98.4081 8.2662 97.8465 8.86698 97.1352 9.32031C96.4238 9.77362 95.637 10 94.7759 10H87.2507V8.01953H94.7759C95.3001 8.01953 95.7747 7.88674 96.199 7.62012C96.6233 7.34012 96.9606 6.97286 97.2102 6.51953C97.4596 6.05299 97.5845 5.54649 97.5845 5C97.5845 4.44019 97.4596 3.93368 97.2102 3.48047C96.9606 3.02717 96.6233 2.66705 96.199 2.40039C95.7746 2.13372 95.3001 2 94.7759 2H86.2019V14H84.3305V0H94.7759Z" fill="white"/>
              <path d="M116.326 14H114.453V10H103.989V8H114.453V2H107.733C106.884 2.00001 106.104 2.22642 105.392 2.67969C104.681 3.11969 104.113 3.72047 103.688 4.48047C103.277 5.24032 103.071 6.08022 103.071 7V14H101.199V7C101.199 6.04 101.367 5.1398 101.704 4.2998C102.041 3.44653 102.509 2.69954 103.108 2.05957C103.707 1.40627 104.4 0.900027 105.187 0.540039C105.985 0.180049 106.834 1.02471e-05 107.733 0H116.326V14Z" fill="white"/>
              <path d="M133.19 2H124.747C123.886 2.00005 123.143 2.22647 122.519 2.67969C121.908 3.11969 121.433 3.72047 121.096 4.48047C120.76 5.24034 120.591 6.0802 120.591 7C120.591 7.9198 120.76 8.75966 121.096 9.51953C121.433 10.2662 121.908 10.867 122.519 11.3203C123.143 11.7735 123.886 11.9999 124.747 12H133.19V14H124.747C123.836 14 123.012 13.8199 122.276 13.46C121.54 13.1 120.904 12.5998 120.367 11.96C119.843 11.32 119.437 10.5801 119.15 9.74023C118.863 8.8869 118.719 7.97333 118.719 7C118.719 6.04 118.863 5.1398 119.15 4.2998C119.437 3.44657 119.843 2.69951 120.367 2.05957C120.904 1.40649 121.54 0.899948 122.276 0.540039C123.012 0.180077 123.836 3.85284e-05 124.747 0H133.19V2Z" fill="white"/>
              <path d="M149 2H137.318V12H149V14H135.446V0H149V2Z" fill="white"/>
              <path d="M63.769 8H54.6148V6H63.769V8Z" fill="white"/>
              <path d="M147.409 8H138.254V6H147.409V8Z" fill="white"/>
            </svg>
          </Link>

          <nav className={`ts-header__nav${mobileOpen ? ' open' : ''}`} ref={navRef}>
            <Link to="/" className={path === '/' ? 'active' : ''}>Home</Link>

            <div className="ts-nav-group">
              <button
                className={`ts-nav-group__toggle${isMissionGroup || openDropdown === 'missions' ? ' active' : ''}`}
                onClick={(e) => toggleDropdown('missions', e)}
              >
                Missions <ChevronSvg />
              </button>
              <div className={`ts-nav-group__dropdown${openDropdown === 'missions' ? ' open' : ''}`}>
                <Link to="/missions" className={path === '/missions' ? 'active' : ''}>All Missions</Link>
                <Link to="/missions/silk-road" className={path === '/missions/silk-road' ? 'active' : ''}>Silk Road</Link>
                <Link to="/missions/helios" className={path === '/missions/helios' ? 'active' : ''}>HELIOS</Link>
              </div>
            </div>

            <div className="ts-nav-group">
              <button
                className={`ts-nav-group__toggle${isFleetGroup || openDropdown === 'vehicles' ? ' active' : ''}`}
                onClick={(e) => toggleDropdown('vehicles', e)}
              >
                Vehicles <ChevronSvg />
              </button>
              <div className={`ts-nav-group__dropdown${openDropdown === 'vehicles' ? ' open' : ''}`}>
                <Link to="/vehicle" className={path === '/vehicle' ? 'active' : ''}>ASTRÆUS</Link>
                <Link to="/vehicle/icarus" className={path === '/vehicle/icarus' ? 'active' : ''}>Icarus</Link>
                <Link to="/vehicle/chronos" className={path === '/vehicle/chronos' ? 'active' : ''}>Chronos</Link>
                <Link to="/vehicle/aegis" className={path === '/vehicle/aegis' ? 'active' : ''}>Aegis</Link>
              </div>
            </div>

            <div className="ts-nav-group">
              <button
                className={`ts-nav-group__toggle${isAboutGroup || openDropdown === 'about' ? ' active' : ''}`}
                onClick={(e) => toggleDropdown('about', e)}
              >
                About <ChevronSvg />
              </button>
              <div className={`ts-nav-group__dropdown${openDropdown === 'about' ? ' open' : ''}`}>
                <Link to="/about" className={path === '/about' ? 'active' : ''}>Tanespace</Link>
                <Link to="/technology" className={path === '/technology' ? 'active' : ''}>Technology</Link>
              </div>
            </div>
          </nav>

          <button className="ts-mobile-toggle" onClick={() => setMobileOpen(v => !v)}>
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"/>
            </svg>
          </button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="ts-footer">
        <div className="ts-footer__inner">
          <div className="ts-footer__col">
            <Link to="/missions">Missions</Link>
            <Link to="/vehicle">Vehicles</Link>
            <Link to="/about">About</Link>
            <a href="mailto:work.sultanrahmahtulloh@gmail.com">Contact</a>
          </div>
        </div>
        <div className="ts-footer__bottom">
          <span>&copy; {new Date().getFullYear()} TANESPACE. All rights reserved.</span>
          <span>Building the Silk Road of Space</span>
        </div>
      </footer>
    </>
  )
}

export { ArrowSvg }
