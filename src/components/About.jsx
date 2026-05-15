export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative" data-anim>
            <div className="bg-teal-pale rounded-3xl p-8 border border-teal-light/20 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-deep rounded-2xl p-6 text-white">
                  <p className="font-serif text-3xl font-semibold">1 in 5</p>
                  <p className="text-white/65 text-sm mt-2 leading-snug">Black Canadians experience a mental health challenge each year</p>
                </div>
                <div className="bg-terra rounded-2xl p-6 text-white">
                  <p className="font-serif text-3xl font-semibold">3×</p>
                  <p className="text-white/65 text-sm mt-2 leading-snug">Less likely to access care due to systemic and cultural barriers</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-sand">
                <p className="font-serif text-lg font-medium text-teal-deep mb-2">
                  "Therapy isn't for people like us" — that ends here.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  We're dismantling the stigma and rebuilding access to quality, culturally-aware mental health care for our communities.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20 dot-grid rounded-2xl"></div>
          </div>

          <div className="space-y-6" data-anim style={{ transitionDelay: '0.15s' }}>
            <span className="text-xs font-semibold tracking-widest text-terra uppercase">About Our Work</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              Therapy that holds your <em className="not-italic text-teal-mid">whole</em> story
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Growing up between cultures means navigating spaces that were never designed for you. The stress of immigration, the weight of generational expectations, the quiet grief of "home" — these are real, and they deserve real attention.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              At Solace Wave Therapy, we offer mental health care rooted in cultural humility, trauma-informed practice, and deep respect for who you are and where you come from. No need to translate yourself.
            </p>
            <a href="#services" className="inline-flex items-center gap-2 text-teal-deep font-semibold hover:gap-3 transition-all duration-150 text-base">
              Explore our services
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
