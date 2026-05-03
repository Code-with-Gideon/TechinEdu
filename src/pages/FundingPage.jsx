import { Link } from 'react-router-dom'
import './Pages.css'
import fundingHero from '../images/IMG_9842.jpg'

const REASONS = [
  'Your support expands access to high-quality learning opportunities.',
  'Funding helps us sustain mentorship, tools, and program delivery consistency.',
  'You become part of measurable outcomes for young people and communities.',
]

export default function FundingPage() {
  return (
    <>
      <section className="section page-photo-hero page-photo-hero--compact page-surface on-photo">
        <div className="page-bg-blur-layer" aria-hidden="true">
          <img src={fundingHero} alt="" />
        </div>
        <div className="page-bg-overlay page-bg-overlay--strong funding-hero-overlay" aria-hidden="true" />
        <div className="page-bg-pattern page-bg-pattern--grid-light page-photo-hero-pattern funding-hero-pattern" aria-hidden="true" />
        <div className="container page-photo-hero-inner">
          <p className="section-eyebrow">Funding and Support</p>
          <h1 className="page-title">Why support TechinEdu</h1>
          <p className="section-subtitle">
            TechinEdu is building a future-ready learning ecosystem powered by community support,
            strategic partners, and transparent impact reporting.
          </p>
        </div>
      </section>
      <section className="section page-content-body">
        <div className="container">
          <div className="reason-grid">
            {REASONS.map((reason) => (
              <article key={reason} className="reason-card">
                <p>{reason}</p>
              </article>
            ))}
          </div>
          <div className="page-actions">
            <a href="mailto:hello@techinedu.org" className="btn btn-primary">Contact us to Fund</a>
            <Link to="/programs" className="btn btn-outline">See Programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
