import { useState } from 'react'
import './Header.css'

const NAV_LINKS = [
  { label: 'Who We Are', href: '#about' },
  { label: 'Funding & Support', href: '#funding' },
  { label: 'Get Involved', href: '#get-involved' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={`header ${open ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <a href="#" className="logo-link" aria-label="TechinEdu home">
          <img src="/logo.png" alt="TechinEdu" className="logo-img" />
        </a>
        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="nav-link" onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#get-involved" className="header-cta">
          Volunteer
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
