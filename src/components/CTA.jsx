export default function CTA() {
  return (
    <section id="book" className="py-24 bg-terra">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8" data-anim>
        <span className="text-xs font-semibold tracking-widest text-white/55 uppercase">Take The First Step</span>
        <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight text-balance">
          You deserve care that<br/>truly <em className="not-italic text-gold">understands you</em>
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
          Book your free 15-minute consultation today. No commitment, no pressure — just a warm, honest conversation to start.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a href="mailto:hello@solacewavetherapy.com" className="inline-flex items-center gap-2 bg-white text-terra font-bold px-10 py-4 rounded-full hover:bg-cream transition-all text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
            Book Free Call Now →
          </a>
          <a href="tel:" className="text-white/65 text-sm hover:text-white transition-colors font-medium">
            or call us directly
          </a>
        </div>
      </div>
    </section>
  )
}
