import { useState } from 'react'
import './Teams.css'

const TEAMS = [
  {
    id: 'strategy',
    lead: 'Head of Strategy & Development',
    title: 'Strategy & Development',
    purpose: 'To define Edvora\'s direction, institutional growth, and long-term sustainability.',
    does: [
      'Sets vision, mission alignment, and strategic priorities',
      'Develops organizational roadmap and theory of change',
      'Leads partnership development, stakeholder engagement, and grant strategy',
      'Oversees governance strengthening and impact frameworks',
    ],
    essence: 'Determines where Edvora is going, why it matters, and how we build to last.',
  },
  {
    id: 'media',
    lead: 'Head of Media & Communications',
    title: 'Media & Communications',
    purpose: 'To shape Edvora\'s public voice, narrative, and institutional credibility.',
    does: [
      'Manages brand identity and messaging across platforms',
      'Leads storytelling around journey, impact, and vision',
      'Oversees social media, press, campaigns, and public communications',
      'Supports advocacy and donor communications through strategic messaging',
    ],
    essence: 'Ensures Edvora is clearly understood, consistently represented, and publicly trusted.',
  },
  {
    id: 'content',
    lead: 'Head of Content & Learning Design',
    title: 'Content & Design',
    purpose: 'To translate Edvora\'s mission into clear, engaging, learner-centered materials.',
    does: [
      'Develops educational content, toolkits, frameworks, and learning resources',
      'Designs visual assets for internal and external use',
      'Ensures materials align with holistic development philosophy',
      'Supports other teams with instructional and creative design',
    ],
    essence: 'Transforms ideas into usable, thoughtful learning experiences.',
  },
  {
    id: 'operations',
    lead: 'Operations Manager / Head of Operations',
    title: 'Operations',
    purpose: 'To ensure Edvora functions efficiently, consistently, and professionally.',
    does: [
      'Manages day-to-day operations and internal workflows',
      'Establishes systems, documentation, and SOPs',
      'Coordinates staff, volunteers, timelines, and processes',
      'Ensures accountability, reporting, and operational compliance',
    ],
    essence: 'Ensures Edvora\'s work is organized, reliable, and execution-ready.',
  },
  {
    id: 'technical',
    lead: 'Technical Lead / Web & Systems Lead',
    title: 'Technical',
    purpose: 'To manage Edvora\'s digital presence and technical infrastructure.',
    does: [
      'Manages and maintains website and digital platforms',
      'Handles technical requirements for programs and events',
      'Supports digital tools used across teams',
      'Ensures accessibility, security, and reliability of web presence',
    ],
    essence: 'Keeps Edvora digitally functional, visible, and secure.',
  },
  {
    id: 'community',
    lead: 'Community Manager / Head of Community',
    title: 'Community Management',
    purpose: 'To build and sustain relationships with learners, volunteers, and partners.',
    does: [
      'Manages engagement with learners, alumni, volunteers, and collaborators',
      'Facilitates communication, feedback, and participation',
      'Supports mentoring, peer learning, and community-led initiatives',
      'Acts as the listening arm, feeding insights back into strategy',
    ],
    essence: 'Keeps Edvora people-centered, grounded, and responsive.',
  },
  {
    id: 'finance',
    lead: 'Head of Finance & Resource Mobilization',
    title: 'Finance',
    purpose: 'To ensure financial sustainability, accountability, and creative resource generation.',
    does: [
      'Manages budgeting, financial tracking, and reporting',
      'Ensures compliance with nonprofit financial standards',
      'Drafts funding ideas, donor pitches, and fundraising concepts',
      'Supports grant budgeting and resource mobilization strategies',
    ],
    essence: 'Ensures Edvora is funded responsibly and sustainably, without mission drift.',
  },
]

export default function Teams() {
  const [activeId, setActiveId] = useState(TEAMS[0].id)

  return (
    <section id="teams" className="section teams">
      <div className="container">
        <h2 className="section-title">Organizational Structure & Teams</h2>
        <p className="section-subtitle">
          Each team has a defined mandate, clear leadership, and shared accountability.
        </p>
        <div className="teams-layout">
          <div className="teams-nav" role="tablist">
            {TEAMS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={activeId === t.id}
                className={`teams-nav-btn ${activeId === t.id ? 'active' : ''}`}
                onClick={() => setActiveId(t.id)}
              >
                {t.title}
              </button>
            ))}
          </div>
          <div className="teams-panel">
            {TEAMS.filter((t) => t.id === activeId).map((t) => (
              <div key={t.id} className="team-detail">
                <p className="team-lead">{t.lead}</p>
                <h3 className="team-purpose">{t.purpose}</h3>
                <h4 className="team-does-title">What this team does</h4>
                <ul className="team-does">
                  {t.does.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <blockquote className="team-essence">
                  In essence: {t.essence}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
