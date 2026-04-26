import './CTA.css'
import involvedImage from '../images/IMG_9998.jpg'

export default function CTA() {
  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert('Thank you for stepping in. Your volunteer interest has been saved locally for now.')
    event.currentTarget.reset()
  }

  return (
    <section id="get-involved" className="section cta">
      <div className="cta-bg" aria-hidden="true" />
      <div className="container cta-inner">
        <div className="cta-content">
          <div>
            <p className="section-eyebrow section-eyebrow-light">Get involved</p>
            <h2 className="cta-title">Bring your time, talent, and voice to the next generation</h2>
            <p className="cta-text">
              Whether you mentor, teach, create, organize, or open doors, your contribution can
              directly expand access and quality for young learners.
            </p>
            <img src={involvedImage} alt="Volunteer interacting with learners at TechinEdu" className="cta-image" />
          </div>
          <form className="volunteer-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" />

            <label htmlFor="interest">Volunteer interest</label>
            <select id="interest" name="interest" defaultValue="Mentorship">
              <option>Mentorship</option>
              <option>Teaching support</option>
              <option>Program operations</option>
              <option>Fundraising and partnerships</option>
              <option>Media and storytelling</option>
            </select>

            <label htmlFor="availability">Availability</label>
            <select id="availability" name="availability" defaultValue="Weekends">
              <option>Weekdays</option>
              <option>Weekends</option>
              <option>Flexible</option>
            </select>

            <label htmlFor="message">How would you like to contribute?</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell us your availability and how you can help." />

            <button type="submit" className="btn btn-primary">
              Submit Volunteer Interest
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
