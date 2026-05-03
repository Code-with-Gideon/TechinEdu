import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src="/logo.png" alt="TechinEdu" className="footer-logo" />
          </Link>
          <p className="footer-tagline">
            Building future-ready learners through mentorship, digital capability, and community-powered education.
          </p>
        </div>
        <div className="footer-links">
          <a href="/#about">Who We Are</a>
          <Link to="/programs">Programs</Link>
          <Link to="/funding">Funding and Support</Link>
          <Link to="/volunteer">Volunteer</Link>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} TechinEdu. A youth-led non-profit.
          </p>
        </div>
      </div>
    </footer>
  )
}
