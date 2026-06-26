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

        <div className="grid md:grid-cols-2 gap-16 items-center" data-anim>
          <div className="bg-brown rounded-3xl p-10 flex flex-col justify-between min-h-72 space-y-8">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div>
              <p className="font-serif text-2xl text-white leading-snug">"Your culture is not a barrier to healing it's the pathway."</p>
              <p className="text-white/45 text-sm mt-4">— Solace Wave Therapy</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold text-brown">Anti-Oppressive &amp; Trauma-Informed</h3>
            <p className="text-muted leading-relaxed">We practice through an anti-oppressive lens acknowledging how racism, colonialism, and systemic inequality shape your mental health. We don't pathologise survival. We honour it.</p>
            <ul className="space-y-3 pt-2">
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
              <div className="bg-brown rounded-2xl p-5">
                <p className="font-serif text-xl font-semibold text-sand">Virtual</p>
                <p className="text-sand/60 text-sm mt-1">Across Ontario</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}assets/We'reherecanada.PNG`} alt="We're here Canada" className="w-full h-full object-cover" />
          </div>

        </div>

      </div>
    </section>
  )
}
