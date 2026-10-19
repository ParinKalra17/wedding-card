export default function EventCard({ event: e, delay = 0 }) {
  return (
    <article className="ev" style={{ '--accent': e.accent, transitionDelay: `${delay}ms` }} data-reveal>
      <div className="ev-img"><img src={e.image} alt={`${e.name} invitation artwork`} loading="lazy" width="800" height="1200" /></div>
    </article>
  )
}
