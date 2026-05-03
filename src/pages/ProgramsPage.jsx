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
      <section className="section page-photo-hero page-surface on-photo">
        <div className="page-bg-blur-layer" aria-hidden="true">
          <img src={heroProgramImage} alt="" />
        </div>
        <div className="page-bg-overlay page-bg-overlay--strong programs-hero-overlay" aria-hidden="true" />
        <div className="page-bg-pattern page-bg-pattern--grid-light page-photo-hero-pattern" aria-hidden="true" />
        <div className="container page-photo-hero-inner">
          <p className="section-eyebrow">Programs</p>
          <h1 className="page-title">Programs built to bridge Nigeria&apos;s digital literacy gap</h1>
          <p className="section-subtitle">
            We focus on practical support for unserved and underserved communities through school
            interventions, community classes, mentorship, and strategic partnerships.
          </p>
          <div className="page-hero-callout">
            <h3>Community-first delivery</h3>
            <p>
              Follow current highlights and ongoing activities on{' '}
              <a href="https://www.instagram.com/_techinedu_/" target="_blank" rel="noreferrer">Instagram</a>.
            </p>
          </div>
        </div>
      </section>
      <section className="section page-content-body">
        <div className="container">
          <div className="program-grid">
            {PROGRAMS.map((program) => (
              <article key={program.name} className="program-card">
                <img src={program.image} alt={`${program.name} activity`} className="program-card-image" />
                <h3>{program.name}</h3>
                <p>{program.summary}</p>
                <span>{program.impact}</span>
              </article>
            ))}
          </div>
          <div className="page-actions">
            <Link to="/volunteer" className="btn btn-primary">Join as Volunteer</Link>
            <Link to="/funding" className="btn btn-outline">Support Programs</Link>
          </div>
        </div>
      </section>
    </>
  )
}
