export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">Our Team</span>
          <h2 className="font-serif text-4xl md:text-5xl text-balance">Meet your therapist</h2>
          <p className="text-muted max-w-lg mx-auto">Clinicians who understand your world and are committed to your healing.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-cream rounded-3xl p-8 md:p-12 border border-sand flex flex-col md:flex-row gap-10 items-start" data-anim>

            <div className="w-44 h-44 rounded-2xl bg-teal-deep shrink-0 flex items-center justify-center">
              <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="0.9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-semibold">[Your Name Here]</h3>
                <p className="text-terra text-sm font-medium mt-1">Registered Psychotherapist (RP) · Founder</p>
              </div>
              <p className="text-muted leading-relaxed">
                A culturally-informed therapist and advocate for diaspora mental health. With deep understanding of the immigrant experience, intergenerational trauma, and the nuances of living between cultures — they bring warmth, expertise, and lived experience to every session.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="bg-teal-pale text-teal-deep text-xs font-medium px-3 py-1 rounded-full">Diaspora Expertise</span>
                <span className="bg-terra/10 text-terra text-xs font-medium px-3 py-1 rounded-full">Trauma-Informed</span>
                <span className="bg-gold/10 text-charcoal text-xs font-medium px-3 py-1 rounded-full">CBT · Narrative · SFBT</span>
                <span className="bg-sand text-charcoal text-xs font-medium px-3 py-1 rounded-full">CRPO Registered</span>
              </div>
              <a href="#book" className="inline-flex items-center gap-2 bg-teal-deep text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-mid transition-all text-sm mt-1">
                Book a session →
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
