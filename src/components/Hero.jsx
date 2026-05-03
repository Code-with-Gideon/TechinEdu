import './Hero.css'
import '../pages/Pages.css'
import heroImage from '../images/IMG_0216.jpg'
import { Link } from 'react-router-dom'

const HIGHLIGHTS = [
  { title: 'No Learning Gaps', text: 'Targeted support for learners who need structure and consistent guidance.' },
  { title: 'Digital Readiness', text: 'Technology fluency, safe digital behavior, and practical future-ready skills.' },
  { title: 'Mentorship Access', text: 'Young people connected to caring mentors, role models, and opportunities.' },
  { title: 'Women Empowerment', text: 'Programs that help girls lead with confidence and long-term agency.' },
]

export default function Hero() {
  return (
    <>
      <section className="hero page-photo-hero page-photo-hero--home page-surface on-photo">
        <div className="page-bg-blur-layer" aria-hidden="true">
          <img src={heroImage} alt="" />
        </div>
        <div className="page-bg-overlay page-bg-overlay--strong hero-overlay" aria-hidden="true" />
        <div className="page-bg-pattern page-bg-pattern--grid-light page-photo-hero-pattern" aria-hidden="true" />
        <div className="container page-photo-hero-inner hero-inner">
          <div className="hero-content">
            <p className="hero-badge">Future-focused youth nonprofit</p>
            <h1 className="hero-title">
              Poverty alleviation and <span className="hero-title-accent">education for children</span>
            </h1>
            <p className="hero-lead">
              We design joyful learning experiences where young people grow in confidence,
              digital fluency, and life-ready skills through mentorship and community support.
            </p>
            <div className="hero-actions">
              <Link to="/funding" className="btn btn-primary">Help us reach our goal</Link>
              <Link to="/volunteer" className="btn btn-outline">Become a volunteer</Link>
            </div>
            <div className="hero-stats-strip">
              <div className="hero-stat">
                <span className="hero-stat-value">5,300+ Learners Reached</span>
                <span className="hero-stat-text">Across mentorship, education, and digital growth programs</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">Volunteer-Led Momentum</span>
                <span className="hero-stat-text">Built by educators, creators, and community partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section page-content-body">
        <div className="container">
          <div className="hero-highlights">
            {HIGHLIGHTS.map((item) => (
              <article key={item.title} className="hero-highlight-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
