const modalities = [
  'Cognitive Behavioural Therapy (CBT)',
  'Narrative Therapy',
  'Solution-Focused Brief Therapy (SFBT)',
  'Somatic & Body-Centred Approaches',
]

export default function Approach() {
  return (
    <section id="approach" className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">Our Approach</span>
          <h2 className="font-serif text-4xl md:text-5xl text-balance text-brown">Rooted in culture. Grounded in evidence.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center" data-anim>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold text-brown">Anti-Oppressive &amp; Trauma-Informed</h3>
            <p className="text-muted leading-relaxed">We practice through an anti-oppressive lens acknowledging how racism, colonialism, and systemic inequality shape your mental health. We don't pathologise survival. We honour it.</p>
          </div>
          <div>
            <ul className="space-y-3">
              {modalities.map((m, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sand flex items-center justify-center shrink-0">
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#663916" strokeWidth="3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-muted text-sm">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center" data-anim style={{ transitionDelay: '0.1s' }}>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold text-brown">Virtual-first. Flexible. Accessible.</h3>
            <p className="text-muted leading-relaxed">We know life is busy. Commuting across the city for a therapy session isn't always possible. That's why sessions are virtual-first available wherever you are in Ontario.</p>
            <div>
              <p className="font-serif text-xl font-semibold text-brown">Book from anywhere</p>
              <p className="text-muted leading-relaxed">Evenings & weekends available to fit your schedule</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-sand rounded-2xl p-5">
                <p className="font-serif text-xl font-semibold text-gold">Virtual</p>
                <p className="text-gold/60 text-sm mt-1">Across Ontario</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}assets/werehere-canada.jpg`} alt="We're here Canada" className="w-full h-full object-cover" />
          </div>

        </div>

      </div>
    </section>
  )
}
