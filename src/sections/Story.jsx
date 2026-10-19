import SectionHead from '../components/SectionHead.jsx'
import { couple, blessings } from '../data/weddingData.js'

export default function Story() {
  return (
    <section id="story" className="band alt" aria-labelledby="story-h">
      <div className="section">
        <SectionHead id="story-h" title="Our Story" sub="Two families, one celebration." />
        <div className="story-photo-wrap" data-reveal>
          <div className="story-photo-frame">
            <img src={`${import.meta.env.BASE_URL}images/cards/couple.jpg`} alt={`${couple.groom} & ${couple.bride}`} loading="lazy" />
          </div>
          <p className="story-names script-md">{couple.groom} <span>&</span> {couple.bride}</p>
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
