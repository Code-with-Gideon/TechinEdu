import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-mega" data-reveal>
          The <span className="accent">bridge</span> is built
          <br />
          one learner at a time.
        </div>
        <div className="footer-cols">
          <div>
            <h4>TechinEdu · The Bridge</h4>
            <p style={{ color: 'rgba(245,239,226,.78)', fontSize: '0.96rem', maxWidth: '36ch' }}>
              A youth-led non-profit building future-ready learners through mentorship, digital capability, and
              community-powered education.
            </p>
            <div style={{ marginTop: 18, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="sticker-tag">★ Est. 2022</span>
              <span className="sticker-tag terra">Lagos · Nigeria</span>
            </div>
          </div>
          <div>
            <h4>The site</h4>
            <ul>
              <li>
                <a href="/#who">Who we are</a>
              </li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/funding">Funding &amp; support</Link>
              </li>
              <li>
                <Link to="/volunteer">Volunteer</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="mailto:hello@techinedu.org">hello@techinedu.org</a>
              </li>
              <li>
                <a href="https://www.instagram.com/_techinedu_/" target="_blank" rel="noreferrer">
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href="#">LinkedIn ↗</a>
              </li>
              <li>
                <a href="#">Press kit ↗</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Get involved</h4>
            <ul>
              <li>
                <Link to="/funding">Fund a learner</Link>
              </li>
              <li>
                <Link to="/volunteer">Mentor a cohort</Link>
              </li>
              <li>
                <a href="#">Partner with us</a>
              </li>
              <li>
                <a href="#">Host a workshop</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <span>
            © {year} TechinEdu · A youth-led non-profit
          </span>
          <span>Designed with care for the next generation</span>
        </div>
      </div>
    </footer>
  )
}
