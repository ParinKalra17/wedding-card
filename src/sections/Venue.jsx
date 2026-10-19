import SectionHead from '../components/SectionHead.jsx'
import Icon from '../components/Icon.jsx'
import { venue, events, directionsUrl, mapEmbedUrl } from '../data/weddingData.js'

export default function Venue() {
  const spots = [...new Set(events.map((e) => e.spot))]
  return (
    <section id="venue" className="band alt" aria-labelledby="venue-h">
      <div className="section">
        <SectionHead id="venue-h" title="Venue & Location" sub="All celebrations take place at one venue." />
        <div className="venue" data-reveal>
          <div>
            <h3 className="script-md">{venue.name}</h3>
            <p className="meta big"><Icon name="pin" /> {venue.city}</p>
            <p className="todo">{venue.address}</p>
            <a className="btn" href={directionsUrl} target="_blank" rel="noreferrer">Get directions<span className="sr"> (opens Google Maps)</span></a>
          </div>
          <div className="map">
            <iframe title={`Map of ${venue.name}, ${venue.city}`} src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
        <h3 className="day-title" data-reveal>Where each event is held</h3>
        <div className="marquee" data-reveal>
          <div className="marquee-track">
            {spots.map((s) => (
              <div key={s} className="spot">
                <h4>{s}</h4>
                <ul>{events.filter((e) => e.spot === s).map((e) => <li key={e.id}>{e.name} <small>{e.time}, {e.start.slice(8, 10)} Nov</small></li>)}</ul>
              </div>
            ))}
            {spots.map((s) => (
              <div key={`dup-${s}`} className="spot" aria-hidden="true">
                <h4>{s}</h4>
                <ul>{events.filter((e) => e.spot === s).map((e) => <li key={e.id}>{e.name} <small>{e.time}, {e.start.slice(8, 10)} Nov</small></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
