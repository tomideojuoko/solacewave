export default function Hero() {
  return (
    <section id="hero" className="hero-bg relative w-full" style={{ height: '100vh', minHeight: '600px' }}>
      <div className="hero-overlay absolute inset-0"></div>
      <div className="absolute inset-x-0 bottom-0 px-8 md:px-16 pb-14 md:pb-20 z-10">

        <h1 className="font-serif text-white leading-[1.1] max-w-4xl text-[2.8rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[6rem]">
          <span className="reveal-wrap"><span className="reveal-line" id="rl1">Healing that understands</span></span>
          <span className="reveal-wrap"><span className="reveal-line" id="rl2">all parts of you</span></span>
        </h1>

        <div id="hero-sub" className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5" style={{ opacity: 0 }}>
          <p className="text-white/75 text-base md:text-lg max-w-md leading-relaxed">
            Culturally attuned therapy and coaching for Black, African and Caribbean communities across Canada.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <a href="https://calendly.com/solacewavetherapy/consultation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brown text-sand font-bold px-7 py-3.5 rounded-full hover:bg-terra transition-all text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
              Book a Free Call
            </a>
            <a href="#about" className="inline-flex items-center gap-2 bg-white/15 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/25 transition-all text-sm border border-white/30 backdrop-blur-sm">
              Learn More
            </a>
          </div>
        </div>

        <div id="hero-stats" className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-white/20" style={{ opacity: 0 }}>
          <div>
            <p className="text-white font-serif text-xl font-semibold">200+</p>
            <p className="text-white/55 text-xs mt-0.5">Clients supported</p>
          </div>
          <div>
            <p className="text-white font-serif text-xl font-semibold">5+ yrs</p>
            <p className="text-white/55 text-xs mt-0.5">Clinical experience</p>
          </div>
          <div>
            <p className="text-white font-serif text-xl font-semibold">100%</p>
            <p className="text-white/55 text-xs mt-0.5">Culturally affirming</p>
          </div>
          <div>
            <p className="text-white font-serif text-xl font-semibold">Virtual</p>
            <p className="text-white/55 text-xs mt-0.5">Across Canada</p>
          </div>
        </div>

      </div>
    </section>
  )
}
