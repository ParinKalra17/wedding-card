import Countdown from '../components/Countdown.jsx'
import { couple, venue, countdownTarget, countdownLabel } from '../data/weddingData.js'

export default function Hero() {
  const scroll = (e) => { e.preventDefault(); document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <section id="home" className="band" aria-label="Wedding invitation">
      <div className="hero">
        <div className="hero-text">
          <p className="blessing">{couple.blessing}</p>
          <h1 className="names" aria-label={`${couple.groom} weds ${couple.bride}`}>
            <span>{couple.groom}</span><em>weds</em><span>{couple.bride}</span>
          </h1>
          <p className="hero-msg"><i>{couple.hosts}</i> {couple.message}</p>
          <p className="hero-date">{couple.dateText}</p>
          <p className="hero-venue">{venue.name}, {venue.city}</p>
          <Countdown target={countdownTarget} label={countdownLabel} />
          <div className="cta">
            <a className="btn" href="#story" onClick={scroll}>Discover our wedding</a>
          </div>
        </div>
        <div className="hero-art">
          <img src={`${import.meta.env.BASE_URL}images/cards/cover.jpg`} alt="Invitation artwork: Shrinathji above a lakeside palace garden, with the names Aayush and Bridhi" width="800" height="1200" />
        </div>
      </div>
    </section>
  )
}
