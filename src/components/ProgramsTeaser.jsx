import { Link } from 'react-router-dom'

export default function ProgramsTeaser() {
  return (
    <section className="section tight">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <h2>
            The programs <span className="accent">in motion right now.</span>
          </h2>
          <div className="side">
            <span className="eyebrow">Programs · 04</span>
            <p>
              Five intersecting program streams, designed to scale together. Tap through to see what each one is
              teaching this term.
            </p>
          </div>
        </div>

        <div className="programs-teaser-grid" data-reveal-stagger>
          <Link to="/programs" className="pillar programs-teaser-card">
            <div className="pillar-num">01</div>
            <h3>Digital Literacy &amp; ICT</h3>
            <div className="programs-teaser-cta">See program →</div>
          </Link>
          <Link to="/programs" className="pillar programs-teaser-card">
            <div className="pillar-num">02</div>
            <h3>Physical Outreaches</h3>
            <div className="programs-teaser-cta">See program →</div>
          </Link>
          <Link to="/programs" className="pillar programs-teaser-card">
            <div className="pillar-num">03</div>
            <h3>Online Workshops</h3>
            <div className="programs-teaser-cta">See program →</div>
          </Link>
          <Link to="/programs" className="pillar programs-teaser-card">
            <div className="pillar-num">04</div>
            <h3>Advocacy &amp; Sharing</h3>
            <div className="programs-teaser-cta">See program →</div>
          </Link>
          <Link to="/programs" className="pillar programs-teaser-card">
            <div className="pillar-num">05</div>
            <h3>Partnerships</h3>
            <div className="programs-teaser-cta">See program →</div>
          </Link>
        </div>
      </div>
    </section>
  )
}
