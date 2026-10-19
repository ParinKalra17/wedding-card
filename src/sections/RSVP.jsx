import { useState } from 'react'
import SectionHead from '../components/SectionHead.jsx'
import { couple, rsvp } from '../data/weddingData.js'

export default function RSVP() {
  const [sent, setSent] = useState(null)
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    setSent({ name: f.get('name'), guests: Number(f.get('guests')), attend: f.get('attend'), note: f.get('note') })
  }
  const text = sent && `${sent.attend === 'yes' ? 'Joyfully accepting' : 'Regretfully declining'} the wedding of ${couple.groom} & ${couple.bride}. Name: ${sent.name}. Guests: ${sent.guests}.${sent.note ? ' Note: ' + sent.note : ''}`
  return (
    <section id="rsvp" className="band alt" aria-labelledby="rsvp-h">
      <div className="section">
        <SectionHead id="rsvp-h" title="RSVP" sub={couple.closing} />
        <div className="rsvp" data-reveal>
          <h3 className="script-md center">Will you join us?</h3>
          <p className="notice" role="note">
            This form is a front-end demonstration. Nothing is saved or sent to the families until a backend, WhatsApp number or email is added in <code>weddingData.js</code>.
          </p>
          {sent ? (
            <div className="thanks" role="status">
              <h4 className="script-md">{sent.attend === 'yes' ? `Thank you, ${sent.name}` : `We will miss you, ${sent.name}`}</h4>
              <p>{sent.attend === 'yes' ? `We have noted ${sent.guests} guest${sent.guests > 1 ? 's' : ''} on this screen.` : 'Your reply is shown on this screen only.'}</p>
              {rsvp.whatsapp && <a className="btn" href={`https://wa.me/${rsvp.whatsapp}?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer">Send reply on WhatsApp</a>}
              {rsvp.email && <a className="btn ghost" href={`mailto:${rsvp.email}?subject=${encodeURIComponent('RSVP: ' + couple.groom + ' & ' + couple.bride)}&body=${encodeURIComponent(text)}`}>Send reply by email</a>}
              <button className="link" onClick={() => setSent(null)}>Edit reply</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <label>Your name<input name="name" required autoComplete="name" /></label>
              <label>Number of guests<input name="guests" type="number" min="1" max="20" defaultValue="1" required /></label>
              <fieldset>
                <legend>Attendance</legend>
                <label className="radio"><input type="radio" name="attend" value="yes" defaultChecked /> Joyfully accept</label>
                <label className="radio"><input type="radio" name="attend" value="no" /> Regretfully decline</label>
              </fieldset>
              <label>Message for the families (optional)<textarea name="note" rows="3" /></label>
              <button className="btn" type="submit">Send RSVP</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
