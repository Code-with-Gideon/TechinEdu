import './About.css'
import '../pages/Pages.css'
import aboutImageMain from '../images/IMG_9929.jpg'
import aboutImageSecondary from '../images/IMG_0191.jpg'

export default function About() {
  return (
    <>
      <section id="about" className="section page-photo-hero page-photo-hero--compact page-surface on-photo about-photo-hero">
        <div className="page-bg-blur-layer" aria-hidden="true">
          <img src={aboutImageMain} alt="" />
        </div>
        <div className="page-bg-overlay page-bg-overlay--strong about-hero-overlay" aria-hidden="true" />
        <div className="page-bg-pattern page-bg-pattern--grid-light page-photo-hero-pattern about-hero-pattern" aria-hidden="true" />
        <div className="container page-photo-hero-inner">
          <p className="section-eyebrow">Who we are</p>
          <h2 className="page-title">We help young people move from potential to measurable progress</h2>
          <p className="section-subtitle about-hero-lead">
            TechinEdu is a <strong>youth-led nonprofit movement</strong> designing practical
            learning pathways for the world young people are growing into.
          </p>
        </div>
      </section>
      <section className="section page-content-body about-body">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                Our work blends classroom support, mentorship, and digital learning to build the
                full learner: confident, capable, and future-ready. We prioritize systems that
                scale impact, not noise.
              </p>
              <div className="about-metrics">
                <article>
                  <h3>5,300+</h3>
                  <p>Young learners supported</p>
                </article>
                <article>
                  <h3>200+</h3>
                  <p>Mentors and volunteers engaged</p>
                </article>
                <article>
                  <h3>9</h3>
                  <p>High-impact initiatives launched</p>
                </article>
              </div>
            </div>
            <div className="about-visual">
              <img
                src={aboutImageMain}
                alt="Students participating in a TechinEdu learning activity"
                className="about-image about-image-main"
              />
              <div className="about-image-row">
                <img
                  src={aboutImageSecondary}
                  alt="Learners collaborating during a guided session"
                  className="about-image about-image-secondary"
                />
                <div className="about-card">
                  <h3>How we deliver</h3>
                  <ul>
                    <li>Project-based learning experiences</li>
                    <li>Structured mentorship and guidance</li>
                    <li>Digital skills for real opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
