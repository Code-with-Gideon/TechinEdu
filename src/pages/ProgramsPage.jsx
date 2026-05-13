import { Link } from 'react-router-dom'
import './Pages.css'
import heroProgramImage from '../images/IMG_0216.jpg'
import digitalLiteracyImage from '../images/IMG_0241.jpg'
import outreachImage from '../images/IMG_9842.jpg'
import mentorshipImage from '../images/IMG_9952.jpg'
import advocacyImage from '../images/IMG_0191.jpg'
import partnershipsImage from '../images/IMG_9929.jpg'

const PROGRAMS = [
  {
    name: 'Digital Literacy and ICT Training',
    summary:
      'We teach foundational computer operations and practical ICT skills to secondary school students who lack access to devices and structured digital education.',
    impact: 'Fundamental computer confidence and future-ready learning habits',
    image: digitalLiteracyImage,
  },
  {
    name: 'Physical Outreaches and In-House Activities',
    summary:
      'Our team travels to underserved schools and community hubs with learning tools, ensuring children and youth can gain direct, hands-on exposure to technology.',
    impact: 'Direct access to learning tools in unserved communities',
    image: outreachImage,
  },
  {
    name: 'Online Workshops and Mentorship',
    summary:
      'We run virtual workshops on digital skills, online visibility, and self-branding, while mentorship sessions help youth connect personal interests to real tech pathways.',
    impact: 'Skill growth plus clearer career direction',
    image: mentorshipImage,
  },
  {
    name: 'Advocacy and Resource Sharing',
    summary:
      'TechinEdu champions educational equity and acts as a bridge linking underserved students to information, support systems, and digital opportunities.',
    impact: 'Improved inclusion through tailored support and equity advocacy',
    image: advocacyImage,
  },
  {
    name: 'Partnerships and Collaborations',
    summary:
      'We collaborate with impact-driven organizations and networks to scale digital literacy programs and deepen long-term outcomes for learners.',
    impact: 'Scaled impact through strategic collaboration',
    image: partnershipsImage,
  },
]

export default function ProgramsPage() {
  return (
    <>
      <section className="section phero">
        <div
          className="phero-photo"
          style={{ backgroundImage: `url(${heroProgramImage})` }}
          aria-hidden
        />
        <div className="phero-grid" aria-hidden />
        <div className="wrap phero-inner">
          <div>
            <p className="eyebrow">Programs</p>
            <h1>Programs built to bridge Nigeria&apos;s digital literacy gap</h1>
            <p className="phero-lede">
              We focus on practical support for unserved and underserved communities through school interventions,
              community classes, mentorship, and strategic partnerships.
            </p>
            <div className="phero-tags">
              <span className="tag solid">The bridge in motion</span>
              <span className="tag">Lagos · Nigeria</span>
            </div>
          </div>
          <div className="phero-meta">
            <div className="phero-callout">
              <h3>Community-first delivery</h3>
              <p>
                Follow current highlights and ongoing activities on{' '}
                <a href="https://www.instagram.com/_techinedu_/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section inner-page-body">
        <div className="wrap">
          <div className="sec-head inner-sec-head" data-reveal>
            <h2>
              Program streams <span className="accent">this term.</span>
            </h2>
            <div className="side">
              <span className="eyebrow">What we run · 02</span>
              <p>Five intersecting delivery tracks—each designed to compound access, confidence, and measurable progress.</p>
            </div>
          </div>

          <div className="prog-grid" data-reveal-stagger>
            {PROGRAMS.map((program, i) => (
              <article key={program.name} className={`prog-card ${i === 0 ? 'feat' : ''}`}>
                <div
                  className="prog-photo"
                  style={{ backgroundImage: `url(${program.image})` }}
                  role="img"
                  aria-label={`${program.name} activity`}
                >
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="label">Program</span>
                </div>
                <div className="prog-body">
                  <h3>{program.name}</h3>
                  <p>{program.summary}</p>
                  <div className="prog-impact">{program.impact}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="inner-page-actions">
            <Link to="/volunteer" className="btn btn-primary">
              Join as volunteer
            </Link>
            <Link to="/funding" className="btn btn-outline">
              Support programs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
