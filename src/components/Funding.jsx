import './Funding.css'
import fundingImageMain from '../images/IMG_0241.jpg'
import fundingImageAlt from '../images/IMG_9842.jpg'
import fundingImageThird from '../images/IMG_9952.jpg'

const PATHWAYS = [
  {
    title: 'Community-Backed Funding',
    concept: 'Build consistent monthly support from individuals who believe in long-term youth outcomes.',
    examples: ['TechinEdu Circle member contributions', 'Micro-campaigns tied to specific student goals'],
    why: 'Recurring gifts give us predictable runway and execution confidence.',
  },
  {
    title: 'Corporate Partnerships',
    concept: 'Collaborate with companies looking for trusted education impact implementation.',
    examples: ['Co-designed youth programs', 'Impact reporting and partner visibility'],
    why: 'Partner capital and expertise accelerate scale and credibility.',
  },
  {
    title: 'Partner Network Model',
    concept: 'Structure partnerships with NGOs, schools, and institutions around shared outcomes.',
    examples: ['Co-branded programs and events', 'Operational and in-kind support agreements'],
    why: 'Cross-sector collaboration extends reach with lower delivery cost.',
  },
  {
    title: 'Mission-Aligned Services',
    concept: 'Offer premium workshops and advisory services that fund access for underserved learners.',
    examples: ['Paid capability workshops', 'Curriculum design and facilitation support'],
    why: 'Earned revenue helps sustain free and subsidized community programs.',
  },
  {
    title: 'Digital Learning Assets',
    concept: 'Package learning tools and resources into scalable products for schools and communities.',
    examples: ['Toolkits and learning guides', 'Institutional access and cohort resources'],
    why: 'Digital products increase impact without linear operational costs.',
  },
  {
    title: 'Community Events',
    concept: 'Host high-value learning and impact events that bring partners and young leaders together.',
    examples: ['Sponsored showcases', 'Annual impact and demo events'],
    why: 'Events build visibility, trust, and fundraising momentum.',
  },
  {
    title: 'Strategic Grant Layer',
    concept: 'Use grants selectively for systems, capacity building, and innovation pilots.',
    examples: ['Flexible multi-year grants', 'Infrastructure and team capability support'],
    why: 'Grants strengthen resilience without becoming the sole engine.',
  },
]

export default function Funding() {
  return (
    <section id="funding" className="section funding">
      <div className="container">
        <p className="section-eyebrow">Funding and support</p>
        <h2 className="section-title">Back a model that converts support into lasting youth outcomes</h2>
        <p className="section-subtitle">
          We combine philanthropy, partnerships, and earned revenue so TechinEdu can deliver consistent impact year-round.
        </p>
        <div className="funding-top-cards">
          <article>
            <h3>Transparent impact</h3>
            <p>Partners receive clear progress updates tied to learner outcomes and delivery milestones.</p>
          </article>
          <article>
            <h3>Scalable system</h3>
            <p>Support helps us strengthen governance, operations, and repeatable program quality.</p>
          </article>
          <article>
            <h3>Future-ready learners</h3>
            <p>Every contribution fuels mentorship, digital capability, and confidence in young people.</p>
          </article>
        </div>
        <div className="funding-showcase">
          <img src="https://res.cloudinary.com/dwhatdphm/image/upload/f_auto,q_auto/IMG_0241-DgYHnP0T_gs8lja" alt="Mentor supporting learners in a computer class" className="funding-image" />
          <img src="https://res.cloudinary.com/dwhatdphm/image/upload/f_auto,q_auto/IMG_9842-BMJ-r-P4_gxquys" alt="Hands-on digital learning session supported by partners" className="funding-image" />
          <img src="https://res.cloudinary.com/dwhatdphm/image/upload/f_auto,q_auto/IMG_9952-DZW--_Od_ad7suv" alt="Learners receiving guided support during a workshop" className="funding-image" />
        </div>
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
