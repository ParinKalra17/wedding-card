import { useEffect, useRef, useState } from 'react'
import SectionHead from "../components/SectionHead.jsx"
import Placeholder from '../components/Placeholder.jsx'
import Icon from '../components/Icon.jsx'
import { gallery } from '../data/weddingData.js'

function Lightbox({ index, setIndex }) {
  const closeRef = useRef(null)
  const n = gallery.length
  const g = gallery[index]
  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % n)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + n) % n)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [n, setIndex])
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={`${g.label}, image ${index + 1} of ${n}`} onClick={() => setIndex(null)}>
      <button ref={closeRef} className="lb-x" aria-label="Close" onClick={() => setIndex(null)}><Icon name="close" size={28} /></button>
      <button className="lb-n l" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); setIndex((index - 1 + n) % n) }}><Icon name="prev" size={30} /></button>
      <figure onClick={(e) => e.stopPropagation()}>
        {g.src ? <img src={g.src} alt={g.label} /> : <Placeholder label={g.label} />}
        <figcaption>{g.label} · {index + 1} / {n}</figcaption>
      </figure>
      <button className="lb-n r" aria-label="Next image" onClick={(e) => { e.stopPropagation(); setIndex((index + 1) % n) }}><Icon name="next" size={30} /></button>
    </div>
  )
}

export default function Gallery() {
  const [open, setOpen] = useState(null)
  const last = useRef(null)
  const close = (v) => { setOpen(v); if (v === null) last.current?.focus() }
  return (
    <section id="gallery" className="band" aria-labelledby="gallery-h">
      <div className="section">
      <SectionHead id="gallery-h" title="Gallery" sub="Photographs will be added here. These are placeholders." />
      <ul className="gal" data-reveal>
        {gallery.map((g, i) => (
          <li key={i} className={g.shape}>
            <button onClick={(e) => { last.current = e.currentTarget; setOpen(i) }} aria-label={`Open ${g.label}`}>
              {g.src ? <img src={g.src} alt={g.label} loading="lazy" /> : <Placeholder label={g.label} />}
            </button>
          </li>
        ))}
      </ul>
      {open !== null && <Lightbox index={open} setIndex={close} />}
      </div>
    </section>
  )
}
