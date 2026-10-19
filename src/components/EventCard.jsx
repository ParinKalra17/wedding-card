import { directionsUrl } from '../data/weddingData.js'
import Icon from './Icon.jsx'

export default function EventCard({ event: e, delay = 0 }) {
  return (
    <article className="ev" style={{ '--accent': e.accent, transitionDelay: `${delay}ms` }} data-reveal>
      <div className="ev-img"><img src={e.image} alt={`${e.name} invitation artwork`} loading="lazy" width="800" height="1200" /></div>
      <div className="ev-body">
        <span className="ev-icon"><Icon name={e.icon} size={26} /></span>
        <h3 className="script-md">{e.name}</h3>
        <p className="meta"><Icon name="clock" size={18} /> {e.time}</p>
        <p className="meta"><Icon name="pin" size={18} /> {e.spot}</p>
        <div className="ev-links">
          <a href={directionsUrl} target="_blank" rel="noreferrer">Get directions<span className="sr"> (opens Google Maps)</span></a>
        </div>
      </div>
    </article>
  )
}
