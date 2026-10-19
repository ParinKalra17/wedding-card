import { couple } from '../data/weddingData.js'

// Clearly-marked stand-in until a real photograph is supplied.
export default function Placeholder({ label, note = 'Photo placeholder' }) {
  return (
    <div className="ph" role="img" aria-label={`${note}: ${label}`}>
      <span className="monogram">{couple.monogram}</span>
      <b>{label}</b>
      <small>{note}</small>
    </div>
  )
}
