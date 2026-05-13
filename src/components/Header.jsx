import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (navOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
    return undefined
  }, [navOpen])

  const closeNav = () => setNavOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap header-inner">
        <Link to="/" className="logo" aria-label="TechinEdu home" onClick={closeNav}>
            <img src="/logo.png" alt="" width="auto" height={36} decoding="async" />
          <span className="name">
            <b>TechinEdu</b>
            <small>The Bridge · Est. &rsquo;22</small>
          </span>
        </Link>
        <nav className={`nav ${navOpen ? 'is-open' : ''}`}>
          <a href="/#who" className="" onClick={closeNav}>
            Who We Are
          </a>
          <div className="nav-dropdown">
            <button type="button">
              Get Involved <span style={{ fontSize: '0.7em', opacity: 0.6, marginLeft: 4 }}>▾</span>
            </button>
            <div className="nav-dropdown-menu">
              <Link to="/funding" onClick={closeNav}>
                Funding &amp; Support
              </Link>
              <Link to="/volunteer" onClick={closeNav}>
                Volunteer
              </Link>
            </div>
          </div>
          <NavLink to="/programs" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeNav}>
            Programs
          </NavLink>
          <a href="/#story" onClick={closeNav}>
            Field Notes
          </a>
        </nav>
        <a href="mailto:hello@techinedu.org" className="btn btn-primary">
          Contact <span className="arr">↗</span>
        </a>
        <button
          type="button"
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          {navOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}
