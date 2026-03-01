import { IconMind, IconMentorship, IconTech } from './Icons'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-badge">Youth-led non-profit</p>
          <h1 className="hero-title">
            Igniting the <span className="hero-title-accent">Future</span> of Learning
          </h1>
          <p className="hero-lead">
            We believe education is more than content — it’s about nurturing every dimension
            of a learner: intellectual, social, emotional, and digital.
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn btn-primary">
              Discover Edvora
            </a>
            <a href="#teams" className="btn btn-outline">
              Our Teams
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card hero-card-1">
            <span className="hero-card-icon"><IconMind /></span>
            <span>Mind & character</span>
          </div>
          <div className="hero-card hero-card-2">
            <span className="hero-card-icon"><IconMentorship /></span>
            <span>Mentorship</span>
          </div>
          <div className="hero-card hero-card-3">
            <span className="hero-card-icon"><IconTech /></span>
            <span>Tech & innovation</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
