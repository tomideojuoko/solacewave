import React, { useState } from 'react'

const COMPANY_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Therapists', href: '#therapists' },
  { label: 'Contact', href: '#contact' },
]

const RESOURCES_LINKS = [
  { label: 'Our Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
]

const LEGAL_LINKS = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setEmail('')
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <img src="/assets/Solacelogosuite-05-309c9f76-a79c-48d1-85d8-1b839396a57d.png" alt="" className="footer__logo-icon" />
            <p className="footer__brand-name">Solace Wave Therapy</p>
            <p className="footer__tagline">Your journey to better mental health begins with us.</p>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__links">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Resources</h4>
            <ul className="footer__links">
              {RESOURCES_LINKS.map(({ label, href }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Legal</h4>
            <ul className="footer__links">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col footer__col--connect">
            <h4 className="footer__heading">Stay Connected</h4>
            <p className="footer__connect-desc">Join our newsletter for mental health tips and updates.</p>
            <form className="footer__newsletter" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="footer__input"
                aria-label="Email"
              />
              <button type="submit" className="btn btn--secondary footer__subscribe">Subscribe</button>
            </form>
            <div className="footer__social" aria-label="Social links">
              <a href="#" className="footer__social-link" aria-label="Facebook">f</a>
              <a href="#" className="footer__social-link" aria-label="Twitter">𝕏</a>
              <a href="#" className="footer__social-link" aria-label="Instagram">📷</a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">© 2026 Solace Wave Therapy. All rights reserved.</p>
          <div className="footer__apps">
            <a href="#" className="footer__app-badge" aria-label="Download on App Store">App Store</a>
            <a href="#" className="footer__app-badge" aria-label="Get it on Google Play">Google Play</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
