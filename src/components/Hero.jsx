import './Hero.css'
import heroImage from '../images/IMG_0216.jpg'

const HIGHLIGHTS = [
  { title: 'No Learning Gaps', text: 'Targeted support for learners who need structure and consistent guidance.' },
  { title: 'Digital Readiness', text: 'Technology fluency, safe digital behavior, and practical future-ready skills.' },
  { title: 'Mentorship Access', text: 'Young people connected to caring mentors, role models, and opportunities.' },
  { title: 'Women Empowerment', text: 'Programs that help girls lead with confidence and long-term agency.' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-gradient" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-badge">Future-focused youth nonprofit</p>
          <h1 className="hero-title">
            Education that feels <span className="hero-title-accent">modern, human, and transformational</span>
          </h1>
          <p className="hero-lead">
            We design high-impact learning experiences where young people build confidence,
            digital fluency, and life-ready skills with mentorship at every step.
          </p>
          <div className="hero-actions">
            <a href="#get-involved" className="btn btn-primary">
              Join Our Mission
            </a>
            <a href="#funding" className="btn btn-outline">
              Support the Work
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="Students collaborating during a TechinEdu session" className="hero-image" />
          <div className="hero-stat hero-stat-1">
            <span className="hero-stat-value">5,000+ Learners Reached</span>
            <span className="hero-stat-text">Across mentorship, education, and digital growth programs</span>
          </div>
          <div className="hero-stat hero-stat-2">
            <span className="hero-stat-value">Volunteer-Led Momentum</span>
            <span className="hero-stat-text">Built by educators, creators, and community partners</span>
          </div>
        </div>
      </div>
      {/* <div className="container hero-highlights">
        {HIGHLIGHTS.map((item) => (
          <article key={item.title} className="hero-highlight-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div> */}
    </section>
  )
}
