import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ solid = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    let lastY = window.scrollY
    const handleScroll = () => {
      // Slide the bar away when scrolling down, bring it back when scrolling up,
      // and close the mobile menu once the page moves.
      const y = window.scrollY
      if (Math.abs(y - lastY) > 6) {
        navbar?.classList.toggle('nav-hidden', y > lastY && y > 120)
        setIsMenuOpen(false)
        lastY = y
      }

      const past = solid || window.scrollY > 80
      navbar?.classList.toggle('nav-scrolled', past)
      navbar?.querySelectorAll('.nav-link').forEach(el => {
        el.style.color = past ? 'rgba(26,26,26,0.70)' : ''
      })
      navbar?.querySelectorAll('.nav-social').forEach(el => {
        el.style.borderColor = past ? 'rgba(26,26,26,0.25)' : ''
        el.style.color = past ? 'rgba(26,26,26,0.55)' : ''
      })
      const logo = navbar?.querySelector('.nav-logo')
      const sub = navbar?.querySelector('.nav-sub')
      if (logo) logo.style.color = past ? '#4a2810' : ''
      if (sub) sub.style.color = past ? '#663916' : ''
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [solid])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50">

      {/* Desktop nav */}
      <div className="hidden md:block">
        <div className="w-full px-10 pt-5 pb-3 flex items-center justify-between relative">

          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            <a href="https://www.instagram.com/solacewave_therapy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-social w-8 h-8 rounded-full border border-white/50 text-white/70 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61580931670378" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="nav-social w-8 h-8 rounded-full border border-white/50 text-white/70 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap">
            <img src={`${import.meta.env.BASE_URL}assets/Solace logo suite-08.png`} alt="Solace Wave Logo" className="h-12 w-auto drop-shadow-sm" />
            <span className="nav-logo font-serif text-[2.4rem] leading-none font-semibold text-white drop-shadow-sm tracking-tight transition-colors duration-400">Solace Wave </span><span className="nav-sub font-serif text-[2rem] leading-none font-semibold tracking-tight text-white/80 transition-colors duration-400">Therapy</span>
          </Link>

          {/* Book button */}
          <div className="flex items-center gap-5">
            <a href="https://calendly.com/solacewavetherapy/consultation" target="_blank" rel="noopener noreferrer" className="bg-brown text-sand font-bold px-6 py-2.5 rounded-full hover:bg-terra transition-all text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200 whitespace-nowrap">Book a Consultation</a>
          </div>
        </div>

        {/* Nav links row */}
        <div className="flex items-center justify-center gap-10 pb-4">
          <a href="#about"       className="nav-link text-sm font-medium text-white/85 hover:text-white transition-colors">About Us</a>
          <a href="/services" className="nav-link text-sm font-medium text-white/85 hover:text-white transition-colors">Services</a>
          <a href="#approach"    className="nav-link text-sm font-medium text-white/85 hover:text-white transition-colors">Our Approach</a>
          <Link to="/team"        className="nav-link text-sm font-medium text-white/85 hover:text-white transition-colors">Team</Link>
          <Link to="/book"        className="nav-link text-sm font-medium text-white/85 hover:text-white transition-colors">Book a Session</Link>
          <a href="#contact"     className="nav-link text-sm font-medium text-white/85 hover:text-white transition-colors">Contact Us</a>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <Link to="/" className="nav-logo font-serif text-xl font-semibold text-white">Solace Wave Therapy</Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="nav-burger p-2 text-white" aria-label="Open menu">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-cream border-t border-sand px-6 py-5 space-y-4">
          <a href="#about"          onClick={closeMenu} className="block text-sm font-medium text-charcoal/75 hover:text-terra">About Us</a>
          <a href="/services" onClick={closeMenu} className="block text-sm font-medium text-charcoal/75 hover:text-terra">Services</a>
          <a href="#approach"      onClick={closeMenu} className="block text-sm font-medium text-charcoal/75 hover:text-terra">Our Approach</a>
          <Link to="/team"     onClick={closeMenu} className="block text-sm font-medium text-charcoal/75 hover:text-terra">Team</Link>
          <Link to="/book"    onClick={closeMenu} className="block text-sm font-medium text-charcoal/75 hover:text-terra">Book a Session</Link>
          <a href="#contact"  onClick={closeMenu} className="block text-sm font-medium text-charcoal/75 hover:text-terra">Contact Us</a>
          <a href="https://calendly.com/solacewavetherapy/consultation" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="block text-center bg-brown text-sand font-bold px-5 py-3 rounded-full text-sm">Book a Consultation</a>
        </div>
      )}
    </nav>
  )
}
