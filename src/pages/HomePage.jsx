import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import './Pages.css'
import involveHeroImage from '../images/IMG_9842.jpg'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <section className="section page-photo-hero page-photo-hero--compact page-surface on-photo">
        <div className="page-bg-blur-layer" aria-hidden="true">
          <img src={involveHeroImage} alt="" />
        </div>
        <div className="page-bg-overlay page-bg-overlay--strong involve-hero-overlay" aria-hidden="true" />
        <div className="page-bg-pattern page-bg-pattern--grid-light page-photo-hero-pattern involve-hero-pattern" aria-hidden="true" />
        <div className="container page-photo-hero-inner">
          <p className="section-eyebrow">Get Involved</p>
          <h2 className="page-title">Pick how you want to move the mission forward</h2>
          <p className="section-subtitle">
            Support TechinEdu through funding pathways or join as a volunteer. Both paths directly
            contribute to better outcomes for young learners.
          </p>
        </div>
      </section>
      <section className="section page-content-body">
        <div className="container">
          <div className="involve-grid">
            <article className="involve-card involve-card-funding">
              <h3>Funding and Support</h3>
              <p>Power programs, tools, and mentoring access with strategic support.</p>
              <Link to="/funding" className="btn btn-primary">Explore Funding</Link>
            </article>
            <article className="involve-card involve-card-volunteer">
              <h3>Volunteer</h3>
              <p>Mentor, teach, create, or help with operations to scale community impact.</p>
              <Link to="/volunteer" className="btn btn-outline">Become a Volunteer</Link>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
