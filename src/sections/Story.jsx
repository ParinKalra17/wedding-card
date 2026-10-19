import SectionHead from '../components/SectionHead.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { story, blessings, couple } from '../data/weddingData.js'

function Person({ p, flip }) {
  return (
    <article className={`person ${flip ? 'flip' : ''}`} data-reveal>
      <div className="person-photo">
        {p.photo ? <img src={p.photo} alt={p.name} loading="lazy" /> : <Placeholder label={p.name} />}
      </div>
      <div>
        <h3 className="script-md">{p.name}</h3>
        {p.line && <p className="gold">{p.line}</p>}
        <p>{p.family}</p>
        {p.bio ? <p>{p.bio}</p> : <p className="todo">[Add {p.name}’s introduction in src/data/weddingData.js]</p>}
      </div>
    </article>
  )
}

export default function Story() {
  return (
    <section id="story" className="band alt" aria-labelledby="story-h">
      <div className="section">
        <SectionHead id="story-h" title="Our Story" sub="Two families, one celebration." />
        <div className="people">
          <Person p={story.groom} />
          <Person p={story.bride} flip />
        </div>
        <div className="bless-box center" data-reveal>
          <h3 className="script-md">With the Blessings of</h3>
          <ul className="bless">{blessings.map((b) => <li key={b}>{b}</li>)}</ul>
          <p className="small">{couple.closing}</p>
        </div>
      </div>
    </section>
  )
}
