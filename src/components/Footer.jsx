import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="footer-logo-link">
            <img src="/logo.png" alt="Edvora" className="footer-logo" />
          </a>
          <p className="footer-tagline">
            Igniting the future of learning — holistic development for every learner.
          </p>
        </div>
        <div className="footer-links">
          <a href="#about">Who We Are</a>
          <a href="#philosophy">Our Philosophy</a>
          <a href="#teams">Our Teams</a>
          <a href="#funding">Funding</a>
          <a href="#cta">Get Involved</a>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Edvora. A youth-led non-profit.
          </p>
        </div>
      </div>
    </footer>
  )
}
