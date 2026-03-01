import './Philosophy.css'

const FOCUS = [
  'Strong internal systems',
  'Clear ownership of roles',
  'Youth-led leadership with institutional discipline',
  'Long-term sustainability over short-term activity',
]

const FLOW = [
  { label: 'Strategy', desc: 'sets direction' },
  { label: 'Operations', desc: 'builds systems' },
  { label: 'Content & Media', desc: 'shape learning and narrative' },
  { label: 'Technical', desc: 'enables digital presence' },
  { label: 'Community', desc: 'sustains engagement' },
  { label: 'Finance', desc: 'secures sustainability' },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="section philosophy">
      <div className="container">
        <h2 className="section-title">Our Organizational Philosophy</h2>
        <p className="section-subtitle">
          Edvora operates using a team-of-teams model, where each unit has a defined
          mandate, clear leadership, and shared accountability.
        </p>
        <div className="philosophy-focus">
          <h3 className="philosophy-focus-title">Our focus is on</h3>
          <ul className="philosophy-list">
            {FOCUS.map((item) => (
              <li key={item}>
                <span className="philosophy-check" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="philosophy-flow">
          <h3 className="philosophy-flow-title">How the teams work together</h3>
          <div className="flow-chain">
            {FLOW.map((item, i) => (
              <div key={item.label} className="flow-item">
                <span className="flow-dot" />
                <span className="flow-label">{item.label}</span>
                <span className="flow-desc">{item.desc}</span>
                {i < FLOW.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
