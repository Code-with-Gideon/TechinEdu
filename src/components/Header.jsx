import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [showInvolve, setShowInvolve] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(false)

  return (
    <header className={`header ${open ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo-link" aria-label="TechinEdu home" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="TechinEdu" className="logo-img" />
        </Link>
        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <a href="/#about" className="nav-link" onClick={() => setOpen(false)}>
                Who We Are
              </a>
            </li>
            <li className={`nav-dropdown ${showInvolve ? 'open' : ''}`}>
              <button type="button" className="nav-link nav-link-btn" onClick={() => setShowInvolve((v) => !v)}>
                Get Involve
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/funding" className="dropdown-link" onClick={() => setOpen(false)}>
                    Funding and Support
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/volunteer" className="dropdown-link" onClick={() => setOpen(false)}>
                    Volunteer
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/programs" className="nav-link" onClick={() => setOpen(false)}>
                Programs
              </NavLink>
            </li>
          </ul>
        </nav>
        <a href="mailto:hello@techinedu.org" className="header-cta">Contact us</a>
        {/* Mobile menu toggle */}
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
