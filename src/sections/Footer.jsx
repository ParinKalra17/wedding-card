import { couple, venue, firm, bestWishes, nav } from '../data/weddingData.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="orn" aria-hidden="true"><i /></div>
      <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt={couple.monogram} className="footer-logo" width="76" height="72" />
      <p className="script-sm">{couple.groom} weds {couple.bride}</p>
      <p>{couple.dateText} · {venue.name}, {venue.city}</p>
      <p className="lead">{couple.closing}</p>
      <nav aria-label="Footer">
        {nav.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
      </nav>
      <p className="small">Best wishes: {bestWishes} · {firm.label}: {firm.name}</p>
    </footer>
  )
}
