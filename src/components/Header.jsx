import React, { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Therapists', href: '#therapists' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__bar" aria-hidden />
      <div className="container header__inner">
        <a href="#" className="logo">
          <img src="/assets/Solacelogosuite-05-309c9f76-a79c-48d1-85d8-1b839396a57d.png" alt="" className="logo__icon" aria-hidden />
          <span className="logo__text">Solace Wave Therapy</span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`nav__link ${href === '#' ? 'nav__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#consultation" className="btn btn--primary header__cta">
          Book A Session
        </a>
        <button
          type="button"
          className="header__menu"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
