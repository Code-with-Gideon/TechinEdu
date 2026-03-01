import './CTA.css'

export default function CTA() {
  return (
    <section id="cta" className="section cta">
      <div className="cta-bg" aria-hidden="true" />
      <div className="container cta-inner">
        <h2 className="cta-title">Get Involved</h2>
        <p className="cta-text">
          Whether you want to support as a donor, partner with us, or join as a volunteer —
          we would love to hear from you.
        </p>
        <div className="cta-actions">
          <a href="mailto:hello@edvora.org" className="btn btn-primary">
            Contact Us
          </a>
          <a href="#funding" className="btn btn-light">
            Support Edvora
          </a>
        </div>
      </div>
    </section>
  )
}
