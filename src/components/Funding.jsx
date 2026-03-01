import './Funding.css'

const PATHWAYS = [
  {
    title: 'Community-Backed Funding',
    concept: 'Position Edvora as community-supported infrastructure for youth development.',
    examples: ['Edvora Circle — membership with early access & impact updates', 'Micro-Contribution Drives for specific outcomes'],
    why: 'Small, recurring contributions create predictable cash flow and emotional investment.',
  },
  {
    title: 'CSR-as-a-Service',
    concept: 'Edvora becomes a CSR implementation partner for companies.',
    examples: ['Program design, implementation, impact reporting', 'Annual retainers, per-program funding, multi-year contracts'],
    why: 'Companies want credible execution and measurable impact.',
  },
  {
    title: 'Partner Organization System',
    concept: 'Partner-tier system where organizations pay to collaborate or co-brand.',
    examples: ['Education, Technology, Corporate & NGO Partners', 'Co-created programs, brand alignment, partnership fees'],
    why: 'Long-term strategic relationships and in-kind support.',
  },
  {
    title: 'Fee-for-Value Services',
    concept: 'Mission-aligned revenue without excluding beneficiaries.',
    examples: ['Paid workshops (proceeds subsidize free programs)', 'Curriculum licensing, facilitation, program design consulting'],
    why: 'Earned income while protecting the nonprofit mission.',
  },
  {
    title: 'Digital Products & Learning Assets',
    concept: 'Monetize intellectual and creative outputs in accessible ways.',
    examples: ['Digital toolkits, guides, cohort-based learning', 'Pay-what-you-can and institutional licensing'],
    why: 'Scalable revenue from Edvora\'s core outputs.',
  },
  {
    title: 'Events & Community Experiences',
    concept: 'Turn the community into a value-generating ecosystem.',
    examples: ['Ticketed summits, sponsored events', 'Demo days, annual impact event'],
    why: 'Visibility, revenue, and stronger stakeholder relationships.',
  },
  {
    title: 'Hybrid Grant Strategy',
    concept: 'Grants as part of the mix — but not the backbone.',
    examples: ['Multi-year, unrestricted or flexible grants', 'Use grants to strengthen systems, not just run activities'],
    why: 'Stability without dependence; align with long-term strategy.',
  },
]

export default function Funding() {
  return (
    <section id="funding" className="section funding">
      <div className="container">
        <h2 className="section-title">Sustainable Funding Pathways</h2>
        <p className="section-subtitle">
          Edvora is building diverse revenue streams so we can focus on impact, not survival.
        </p>
        <div className="funding-grid">
          {PATHWAYS.map((p, i) => (
            <article key={p.title} className="funding-card">
              <span className="funding-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="funding-title">{p.title}</h3>
              <p className="funding-concept">{p.concept}</p>
              <ul className="funding-examples">
                {p.examples.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
              <p className="funding-why">
                <strong>Why this works:</strong> {p.why}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
