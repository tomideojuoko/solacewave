const modalities = [
  'Cognitive Behavioural Therapy (CBT)',
  'Narrative Therapy',
  'Solution-Focused Brief Therapy (SFBT)',
  'Somatic & Body-Centred Approaches',
]

export default function Approach() {
  return (
    <section id="approach" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">Our Approach</span>
          <h2 className="font-serif text-4xl md:text-5xl text-balance">Rooted in culture. Grounded in evidence.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center" data-anim>
          <div className="bg-teal-deep rounded-3xl p-10 flex flex-col justify-between min-h-72 space-y-8">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div>
              <p className="font-serif text-2xl text-white leading-snug">"Your culture is not a barrier to healing — it's the pathway."</p>
              <p className="text-white/45 text-sm mt-4">— Solace Wave Therapy</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold">Anti-Oppressive &amp; Trauma-Informed</h3>
            <p className="text-muted leading-relaxed">We practice through an anti-oppressive lens — acknowledging how racism, colonialism, and systemic inequality shape your mental health. We don't pathologise survival. We honour it.</p>
            <ul className="space-y-3 pt-2">
              {modalities.map((m, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-pale flex items-center justify-center shrink-0">
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#1a5c5c" strokeWidth="3.5">
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
            <h3 className="font-serif text-3xl font-semibold">Virtual-first. Flexible. Accessible.</h3>
            <p className="text-muted leading-relaxed">We know life is busy. Childcare is real. Commuting across the city for a therapy session isn't always possible. That's why sessions are virtual-first — available wherever you are in Canada.</p>
            <p className="text-muted leading-relaxed">For those in the Toronto area, in-person sessions are also available when that's what you need.</p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white rounded-2xl p-5 border border-sand">
                <p className="font-serif text-xl font-semibold text-teal-deep">Virtual</p>
                <p className="text-muted text-sm mt-1">Across Canada</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-sand">
                <p className="font-serif text-xl font-semibold text-terra">In-Person</p>
                <p className="text-muted text-sm mt-1">Toronto, ON</p>
              </div>
            </div>
          </div>

          <div className="bg-sand rounded-3xl p-10 flex items-center justify-center min-h-64">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-teal-deep flex items-center justify-center mx-auto">
                <svg width="38" height="38" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <p className="font-serif text-xl font-semibold text-teal-deep">Book from anywhere</p>
              <p className="text-muted text-sm">Evenings &amp; weekends available to fit your schedule</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
