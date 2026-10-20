import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Events from './sections/Events.jsx'
import Venue from './sections/Venue.jsx'
import Footer from './sections/Footer.jsx'
import { nav } from './data/weddingData.js'

export default function App() {
  const [active, setActive] = useState('home')

  // Scroll-triggered reveals (one-time, skipped for reduced motion via CSS)
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) return els.forEach((e) => e.classList.add('in'))
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) setActive(e.target.id)
    }), { rootMargin: '-40% 0px -55% 0px' })
    nav.forEach((n) => { const el = document.getElementById(n.id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a className="skip" href="#home">Skip to top</a>
      <Navbar active={active} />
      <main>
        <Hero />
        <Events />
        <Venue />
      </main>
      <Footer />
    </>
  )
}
