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
      <section className="section page-photo-hero page-photo-hero--compact page-surface on-photo">
        <div className="page-bg-blur-layer" aria-hidden="true">
          <img src={volunteerHero} alt="" />
        </div>
        <div className="page-bg-overlay page-bg-overlay--strong volunteer-hero-overlay" aria-hidden="true" />
        <div className="page-bg-pattern page-bg-pattern--grid-light page-photo-hero-pattern volunteer-hero-pattern" aria-hidden="true" />
        <div className="container page-photo-hero-inner">
          <p className="section-eyebrow">Volunteer</p>
          <h1 className="page-title">Why volunteer with TechinEdu</h1>
          <p className="section-subtitle">
            You can contribute as a mentor, facilitator, organizer, creator, or program support
            volunteer. Every hour you give helps unlock better opportunities for young learners.
          </p>
          <div className="volunteer-points">
            <p>Mentorship and coaching</p>
            <p>Teaching and facilitation support</p>
            <p>Operations and community coordination</p>
          </div>
        </div>
      </section>
      <section className="section page-content-body">
        <div className="container volunteer-body-inner">
          <form className="volunteer-form-page" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input id="name" type="text" required />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required />
            <label htmlFor="interest">Role interest</label>
            <select id="interest" defaultValue="Mentorship">
              <option>Mentorship</option>
              <option>Teaching support</option>
              <option>Operations</option>
              <option>Fundraising and partnerships</option>
            </select>
            <label htmlFor="message">Tell us about your availability</label>
            <textarea id="message" rows="4" />
            <button type="submit" className="btn btn-primary">Submit interest</button>
          </form>
        </div>
      </section>
    </>
  )
}
