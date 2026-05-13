import { Link } from 'react-router-dom'
import './Pages.css'
import fundingHero from '../images/IMG_9842.jpg'

const REASONS = [
  {
    title: 'Expand access',
    text: 'Your support expands access to high-quality learning opportunities.',
  },
  {
    title: 'Sustain delivery',
    text: 'Funding helps us sustain mentorship, tools, and program delivery consistency.',
  },
  {
    title: 'Measure outcomes',
    text: 'You become part of measurable outcomes for young people and communities.',
  },
]

function PillarIcon({ children }) {
  return (
    <div className="pillar-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        {children}
      </svg>
    </div>
  )
}

export default function FundingPage() {
  return (
    <>
      <section className="section phero">
        <div className="phero-photo" style={{ backgroundImage: `url(${fundingHero})` }} aria-hidden />
        <div className="phero-grid" aria-hidden />
        <div className="wrap phero-inner">
          <div>
            <p className="eyebrow">Funding &amp; support</p>
            <h1>Why support TechinEdu</h1>
            <p className="phero-lede">
              TechinEdu is building a future-ready learning ecosystem powered by community support, strategic partners,
              and transparent impact reporting.
            </p>
            <div className="phero-tags">
              <span className="tag solid">Youth-led nonprofit</span>
              <span className="tag">Est. &rsquo;22</span>
            </div>
          </div>
          <div className="phero-meta">
            <div className="phero-callout">
              <h3>Two ways to move the mission</h3>
              <p>
                Fund programs directly or connect our team with partners who can scale delivery—both strengthen the
                bridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section inner-page-body">
        <div className="wrap">
          <div className="sec-head inner-sec-head" data-reveal>
            <h2>
              Funding that <span className="accent">closes the gap.</span>
            </h2>
            <div className="side">
              <span className="eyebrow">Why it matters · 01</span>
              <p>Most learners we serve do not lack ambition—they lack access, structure, and consistent support.</p>
            </div>
          </div>

          <div className="pillars funding-pillars" data-reveal-stagger>
            {REASONS.map((item, i) => (
              <article key={item.title} className="pillar">
                <div className="pillar-num">{String(i + 1).padStart(2, '0')}</div>
                {i === 0 && (
                  <PillarIcon>
                    <path d="M12 3v18M5 12l7-7 7 7" />
                  </PillarIcon>
                )}
                {i === 1 && (
                  <PillarIcon>
                    <rect x="4" y="6" width="16" height="12" rx="2" />
                    <path d="M8 10h8M8 14h5" />
                  </PillarIcon>
                )}
                {i === 2 && (
                  <PillarIcon>
                    <path d="M4 19V5l8-3 8 3v14" />
                    <path d="M9 19v-6h6v6" />
                  </PillarIcon>
                )}
                <h3>{item.title}</h3>
                <div className="pillar-body">
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="inner-page-actions">
            <a href="mailto:hello@techinedu.org" className="btn btn-marigold">
              Contact us to fund <span className="arr">↗</span>
            </a>
            <Link to="/programs" className="btn btn-outline">
              See programs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
