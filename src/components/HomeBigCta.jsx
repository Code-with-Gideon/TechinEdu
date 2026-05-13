import { Link } from 'react-router-dom'

export default function HomeBigCta() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="bigcta" data-reveal>
          <div className="bigcta-inner">
            <h2>
              Help us put another <span className="accent">5,000 learners</span> across the bridge.
            </h2>
            <div className="bigcta-side">
              <p>
                Two ways in: power the work with funding, or roll up your sleeves and join the volunteer roster. Both
                move the mission.
              </p>
              <div className="bigcta-actions">
                <Link to="/funding" className="btn btn-marigold">
                  Explore funding <span className="arr">↗</span>
                </Link>
                <Link to="/volunteer" className="btn btn-light">
                  Volunteer with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
