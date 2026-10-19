import { couple, venue, firm, bestWishes, nav } from '../data/weddingData.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="orn" aria-hidden="true"><i /></div>
      <p className="monogram">{couple.monogram}</p>
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
