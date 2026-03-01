import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Who We Are</h2>
            <p className="about-lead">
              Edvora is a <strong>youth-led, non-profit organization</strong> committed to
              reimagining education for the realities of today and the possibilities of tomorrow.
            </p>
            <p className="about-text">
              We believe education is more than content delivery. True learning nurtures the
              whole learner — intellectually, socially, emotionally, and digitally. Edvora
              exists to illuminate pathways for young people by building strong systems around
              learning, mentorship, technology, and personal development.
            </p>
            <p className="about-text">
              At this stage of our growth, our priority is not rapid program expansion, but
              <strong> building real structure</strong> — governance, systems, teams, and
              processes that enable sustainable impact over time.
            </p>
          </div>
          <div className="about-visual">
            <div className="about-card about-card-1">
              <span className="about-card-num">01</span>
              <h3>Intellectual</h3>
              <p>Critical thinking, knowledge, and skills</p>
            </div>
            <div className="about-card about-card-2">
              <span className="about-card-num">02</span>
              <h3>Social & Emotional</h3>
              <p>Relationships, empathy, and resilience</p>
            </div>
            <div className="about-card about-card-3">
              <span className="about-card-num">03</span>
              <h3>Digital</h3>
              <p>Tech literacy and responsible use</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
