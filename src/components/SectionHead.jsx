export default function SectionHead({ id, title, sub }) {
  return (
    <header className="pagehead" data-reveal>
      <h2 id={id} className="script-title">{title}</h2>
      <div className="orn" aria-hidden="true"><i /></div>
      {sub && <p>{sub}</p>}
    </header>
  )
}
