import './Pages.css'
import volunteerHero from '../images/IMG_9998.jpg'

export default function VolunteerPage() {
  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert('Thanks for your interest. Our team will reach out shortly.')
    event.currentTarget.reset()
  }

  return (
    <>
      <section className="section phero">
        <div className="phero-photo" style={{ backgroundImage: `url(${volunteerHero})` }} aria-hidden />
        <div className="phero-grid" aria-hidden />
        <div className="wrap phero-inner">
          <div>
            <p className="eyebrow">Volunteer</p>
            <h1>Why volunteer with TechinEdu</h1>
            <p className="phero-lede">
              You can contribute as a mentor, facilitator, organizer, creator, or program support volunteer. Every hour
              you give helps unlock better opportunities for young learners.
            </p>
            <div className="phero-tags">
              <span className="tag solid">Join the roster</span>
              <span className="tag">Remote &amp; in-person</span>
            </div>
          </div>
          <div className="phero-meta">
            <div className="phero-callout">
              <h3>Ways to plug in</h3>
              <p>Mentorship, teaching support, operations, fundraising, media—pick what fits your strengths.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section inner-page-body">
        <div className="wrap inner-page-narrow">
          <div className="sec-head inner-sec-head inner-sec-head--stack" data-reveal>
            <h2>
              Tell us <span className="accent">how you show up.</span>
            </h2>
            <div className="side">
              <span className="eyebrow">Volunteer form · 01</span>
              <p>Share a few details and we will follow up with next steps and orientation options.</p>
            </div>
          </div>

          <form className="form-card volunteer-form-bridge" onSubmit={handleSubmit} data-reveal>
            <h3>Volunteer interest</h3>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="vol-name">Full name</label>
                <input id="vol-name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="vol-email">Email</label>
                <input id="vol-email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field full">
                <label htmlFor="vol-interest">Role interest</label>
                <select id="vol-interest" name="interest" defaultValue="Mentorship">
                  <option>Mentorship</option>
                  <option>Teaching support</option>
                  <option>Operations</option>
                  <option>Fundraising and partnerships</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="vol-message">Tell us about your availability</label>
                <textarea id="vol-message" name="message" rows={4} placeholder="Optional context" />
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Submit interest
              </button>
              <span className="note">We typically reply within a few business days.</span>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
