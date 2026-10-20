import { useEffect, useState } from 'react'
import { couple, nav } from '../data/weddingData.js'
import Icon from './Icon.jsx'

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  // Smooth-scroll without changing the page or reloading
  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
  }
  return (
    <header className="nav">
      <div className="nav-in">
        <a href="#home" className="brand" onClick={(e) => go(e, 'home')} aria-label={`${couple.groom} and ${couple.bride}, back to top`}>
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt={`${couple.groom} & ${couple.bride}`} className="brand-logo" width="40" height="38" />
        </a>
        <button className="nav-btn" aria-expanded={open} aria-controls="nav-links" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
        <nav id="nav-links" className={open ? 'open' : ''} aria-label="Main">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)} className={active === n.id ? 'active' : ''} aria-current={active === n.id ? 'true' : undefined}>{n.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
