import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Missions = lazy(() => import('./pages/Missions'))
const Mission = lazy(() => import('./pages/Mission'))
const Helios = lazy(() => import('./pages/Helios'))
const Vehicle = lazy(() => import('./pages/Vehicle'))
const Icarus = lazy(() => import('./pages/Icarus'))
const Chronos = lazy(() => import('./pages/Chronos'))
const Aegis = lazy(() => import('./pages/Aegis'))
const Technology = lazy(() => import('./pages/Technology'))
const About = lazy(() => import('./pages/About'))
const Gallery = lazy(() => import('./pages/Gallery'))

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div style={{minHeight:'100vh',background:'#000'}} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/mission/helios" element={<Helios />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/vehicle/icarus" element={<Icarus />} />
          <Route path="/vehicle/chronos" element={<Chronos />} />
          <Route path="/vehicle/aegis" element={<Aegis />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
