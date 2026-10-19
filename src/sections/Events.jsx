import SectionHead from '../components/SectionHead.jsx'
import EventCard from '../components/EventCard.jsx'
import { events, formatDay, dayKey } from '../data/weddingData.js'

export default function Events() {
  const days = [...new Set(events.map((e) => dayKey(e.start)))]
  return (
    <section id="events" className="band" aria-labelledby="events-h">
      <div className="section">
        <SectionHead id="events-h" title="Wedding Events" sub="Eight ceremonies over two days, in order." />
        {days.map((d) => {
          const list = events.filter((e) => dayKey(e.start) === d)
          return (
            <div key={d} className="day">
              <h3 className="day-title" data-reveal>{formatDay(list[0].start)}</h3>
              <div className="ev-grid">{list.map((e, i) => <EventCard key={e.id} event={e} delay={(i % 3) * 90} />)}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
