export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-start">

        <div>
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest text-terra uppercase">Get In Touch</span>
            <h2 className="font-serif text-4xl font-semibold text-balance text-brown">We'd love to hear from you</h2>
            <p className="text-muted leading-relaxed">Have questions before booking? Want to know if we're the right fit? Reach out.... we respond to every message.</p>
          </div>
        </div>

        <div>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sand/40 flex items-center justify-center shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#663916" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">Email</p>
                <a href="mailto:solacewavetherapy@gmail.com" className="text-terra font-medium hover:underline block">Solacewavetherapy@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sand/40 flex items-center justify-center shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#663916" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">Phone</p>
                <a href="tel:+12264584533" className="text-terra font-medium hover:underline block">+1 (226) 458-4533</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sand/40 flex items-center justify-center shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#663916" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">Location</p>
                <p className="text-charcoal font-medium">Toronto, ON · Virtual across Ontario</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sand/40 flex items-center justify-center shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#663916" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-medium mb-1">Availability</p>
                <p className="text-charcoal font-medium">weekdays, weekends and evenings available</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
