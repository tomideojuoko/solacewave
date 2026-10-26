import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">

          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <img src={`${import.meta.env.BASE_URL}assets/Solace%20logo%20suite-08.png`} alt="Solace Wave Therapy" className="h-9 w-auto" />
              <span className="font-serif text-[17px] font-semibold tracking-tight">
                Solace Wave<span className="text-terra"> Therapy</span>
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Culturally affirming mental health care for Black, African, and Caribbean diaspora communities. Healing that speaks your language.
            </p>
            <div className="flex gap-3 pt-1">
              <a href="https://www.instagram.com/solacewave_therapy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61580931670378" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about"    className="text-white/55 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><Link to="/services" className="text-white/55 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><a href="#approach" className="text-white/55 hover:text-white text-sm transition-colors">Our Approach</a></li>
              <li><Link to="/team"     className="text-white/55 hover:text-white text-sm transition-colors">Our Team</Link></li>
              <li><Link to="/book"     className="text-white/55 hover:text-white text-sm transition-colors">Book a Session</Link></li>
              <li><a href="https://calendly.com/solacewavetherapy/consultation" target="_blank" rel="noopener noreferrer"     className="text-white/55 hover:text-white text-sm transition-colors">Book a Consultation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services?open=1" className="text-white/55 hover:text-white text-sm transition-colors">Individual Therapy</Link></li>
              <li><Link to="/services?open=4" className="text-white/55 hover:text-white text-sm transition-colors">Couples Therapy</Link></li>
              <li><Link to="/services?open=2" className="text-white/55 hover:text-white text-sm transition-colors">Group Sessions</Link></li>
              <li><a href="https://calendly.com/solacewavetherapy/consultation" target="_blank" rel="noopener noreferrer"     className="text-white/55 hover:text-white text-sm transition-colors">Free Consultation</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <p className="text-white/35 text-xs"><span className="whitespace-nowrap">© 2025 Solace Wave Therapy.</span> All rights reserved.</p>
            <a href="/legal" className="text-white/35 text-xs hover:text-white/70 transition-colors whitespace-nowrap">Terms &amp; Privacy</a>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-white/50 text-xs px-3 py-1.5 rounded-full border border-white/10">Registered Psychotherapists &amp; Social Workers</span>
            <span className="text-white/50 text-xs px-3 py-1.5 rounded-full border border-white/10">Trauma-Informed</span>
            <span className="text-white/50 text-xs px-3 py-1.5 rounded-full border border-white/10">Psychology Today</span>
            <span className="text-white/50 text-xs px-3 py-1.5 rounded-full border border-white/10">Virtual · Toronto</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
