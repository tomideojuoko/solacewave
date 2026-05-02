export default function DiasporaHero() {
  return (
    <section className="d-hero-bg relative w-full" style={{ height: '100vh', minHeight: 600 }}>
      <div className="d-hero-overlay absolute inset-0" />

      <div className="absolute inset-x-0 bottom-0 px-8 md:px-16 pb-14 md:pb-20 z-10">
        {/* Headline — each line sits inside a reveal mask (animated by DiasporaPage) */}
        <h1
          className="font-serif text-white max-w-4xl"
          style={{ lineHeight: 1.07, fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
        >
          <span className="d-reveal-wrap">
            <span className="d-reveal-line" id="rl1">Healing that speaks</span>
          </span>
          <span className="d-reveal-wrap">
            <span className="d-reveal-line" id="rl2">your language</span>
          </span>
        </h1>

        {/* Sub-line + CTAs */}
        <div
          id="hero-sub"
          className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5"
          style={{ opacity: 0 }}
        >
          <p className="text-white/75 text-base md:text-lg max-w-md leading-relaxed">
            Culturally affirming therapy for Black, African &amp; Caribbean diaspora communities.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#book"
              className="inline-flex items-center gap-2 bg-gold text-charcoal font-bold px-7 py-3.5 rounded-full hover:opacity-90 transition-all text-sm shadow-lg"
            >
              Book a Free Call
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-white/15 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/25 transition-all text-sm border border-white/30"
              style={{ backdropFilter: 'blur(4px)' }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Trust stats */}
        <div
          id="hero-stats"
          className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-white/20"
          style={{ opacity: 0 }}
        >
          {[
            { value: '200+',    label: 'Clients supported' },
            { value: '5+ yrs', label: 'Clinical experience' },
            { value: '100%',   label: 'Culturally affirming' },
            { value: 'Virtual', label: 'Across Canada' },
          ].map(s => (
            <div key={s.label}>
              <p className="text-white font-serif text-xl font-semibold">{s.value}</p>
              <p className="text-white/55 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
