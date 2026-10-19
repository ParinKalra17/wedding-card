import { useEffect, useState } from 'react'

const calc = (target) => {
  const d = Math.max(0, new Date(target) - Date.now())
  return { done: d === 0, days: Math.floor(d / 864e5), hours: Math.floor(d / 36e5) % 24, mins: Math.floor(d / 6e4) % 60, secs: Math.floor(d / 1e3) % 60 }
}

export default function Countdown({ target, label }) {
  const [t, setT] = useState(() => calc(target))
  useEffect(() => {
    const id = setInterval(() => setT(calc(target)), 1000)
    return () => clearInterval(id)
  }, [target])
  if (!target) return null
  if (t.done) return <p className="count-done">The celebrations have begun.</p>
  const cells = [['Days', t.days], ['Hours', t.hours], ['Minutes', t.mins], ['Seconds', t.secs]]
  return (
    <div className="count" role="timer" aria-label={`${t.days} days ${t.hours} hours ${t.mins} minutes ${label}`}>
      <ul>
        {cells.map(([k, v]) => (
          <li key={k}><b>{String(v).padStart(2, '0')}</b><span>{k}</span></li>
        ))}
      </ul>
      <p>{label}</p>
    </div>
  )
}
