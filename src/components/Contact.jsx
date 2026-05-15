import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest text-terra uppercase">Get In Touch</span>
            <h2 className="font-serif text-4xl font-semibold text-balance">We'd love to hear from you</h2>
            <p className="text-muted leading-relaxed">Have questions before booking? Want to know if we're the right fit? Reach out — we respond to every message.</p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-pale flex items-center justify-center shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#1a5c5c" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">Email</p>
                <a href="mailto:hello@solacewavetherapy.com" className="text-teal-deep font-medium hover:underline">hello@solacewavetherapy.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-pale flex items-center justify-center shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#1a5c5c" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">Location</p>
                <p className="text-charcoal font-medium">Toronto, ON · Virtual across Canada</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-pale flex items-center justify-center shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#1a5c5c" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">Availability</p>
                <p className="text-charcoal font-medium">Evenings &amp; weekends available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-sand space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-semibold">Stay in the loop</h3>
            <p className="text-muted text-sm mt-2 leading-relaxed">Thoughtful content on diaspora mental health, self-care, and community events. No spam — ever.</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted uppercase tracking-wider mb-1.5 block">First Name</label>
                  <input type="text" placeholder="Amara" className="w-full bg-cream border border-sand rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-muted/45 focus:outline-none focus:ring-2 focus:ring-teal-mid focus:border-transparent transition-all"/>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted uppercase tracking-wider mb-1.5 block">Last Name</label>
                  <input type="text" placeholder="Osei" className="w-full bg-cream border border-sand rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-muted/45 focus:outline-none focus:ring-2 focus:ring-teal-mid focus:border-transparent transition-all"/>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted uppercase tracking-wider mb-1.5 block">Email</label>
                <input type="email" placeholder="hello@email.com" className="w-full bg-cream border border-sand rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-muted/45 focus:outline-none focus:ring-2 focus:ring-teal-mid focus:border-transparent transition-all"/>
              </div>
              <button type="submit" className="w-full bg-teal-deep text-white font-semibold py-3.5 rounded-xl hover:bg-teal-mid transition-all text-sm">
                Subscribe to Newsletter →
              </button>
              <p className="text-muted text-xs text-center">No spam. Unsubscribe anytime.</p>
            </form>
          ) : (
            <div className="bg-teal-pale border border-teal-light/30 rounded-xl p-5 text-center">
              <p className="text-teal-deep font-medium text-sm">You're in! 🌊 Welcome to the Solace Wave community.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
