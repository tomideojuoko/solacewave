export default function Services() {
  return (
    <section id="services" className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest text-terra uppercase">Services</span>
            <h2 className="font-serif text-4xl md:text-5xl max-w-md text-balance text-brown">Support shaped around you</h2>
          </div>
          <a href="#book" className="shrink-0 inline-flex items-center gap-2 text-terra font-semibold hover:gap-3 transition-all duration-150 text-sm">Book a session →</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" data-anim-group>

          <div className="bg-brown rounded-3xl p-7 space-y-4 card-hover">
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#EED7BF" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </div>
            <span className="inline-block text-xs font-semibold text-sand bg-white/15 px-2.5 py-1 rounded-full">Free</span>
            <h3 className="font-serif text-lg font-semibold text-sand">20 Min Free Consult</h3>
            <p className="text-sand/65 text-sm leading-relaxed">A no-pressure intro call. Share what's on your mind and see if we're the right fit zero commitment.</p>
            <a href="#book" className="text-sand text-sm font-semibold hover:text-white inline-flex items-center gap-1 transition-colors">Book now →</a>
          </div>

          <div className="bg-brown rounded-3xl p-7 space-y-4 card-hover">
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#EED7BF" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <div>
              <span className="inline-block text-xs font-semibold text-amber-300 bg-white/10 px-2.5 py-1 rounded-full mb-2">Limited time sale</span>
              <h3 className="font-serif text-lg font-semibold text-sand">Individual Therapy</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sand/60 text-sm line-through">$175 CAD</span>
                <span className="text-sand font-semibold text-sm">$150 CAD</span>
              </div>
            </div>
            <p className="text-sand/65 text-sm leading-relaxed">One-on-one sessions for anxiety, depression, identity, trauma, and life transitions in a space built entirely for you.</p>
            <a href="#book" className="text-sand text-sm font-semibold hover:text-white inline-flex items-center gap-1 transition-colors">Learn more →</a>
          </div>

          <div className="bg-brown rounded-3xl p-7 space-y-4 card-hover">
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#EED7BF" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-sand">Community Group Sessions</h3>
            <p className="text-sand/65 text-sm leading-relaxed">Facilitated group therapy with others from shared backgrounds. Healing in community you are not alone in this.</p>
            <a href="#book" className="text-sand text-sm font-semibold hover:text-white inline-flex items-center gap-1 transition-colors">Learn more →</a>
          </div>

          <div className="bg-terra rounded-3xl p-7 space-y-4 card-hover">
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-white">Couples &amp; Relationship Therapy</h3>
            <p className="text-white/65 text-sm leading-relaxed">Navigate cultural differences, communication breakdowns, and relational stress with a therapist who understands your context.</p>
            <a href="#book" className="text-sand text-sm font-semibold hover:text-white inline-flex items-center gap-1 transition-colors">Learn more →</a>
          </div>

        </div>
      </div>
    </section>
  )
}
