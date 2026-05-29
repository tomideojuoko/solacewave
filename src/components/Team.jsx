import { Link } from 'react-router-dom'

export default function Team() {
  return (
    <section id="team" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">Our Team</span>
          <h2 className="font-serif text-4xl md:text-5xl text-balance text-brown">Meet your therapist</h2>
          <p className="text-muted max-w-lg mx-auto">Clinicians who understand your world and are committed to your healing.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-brown rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start" data-anim>

            <div className="w-44 h-44 rounded-2xl bg-white/15 shrink-0 flex items-center justify-center">
              <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="0.9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-sand">[Your Name Here]</h3>
                <p className="text-sand/60 text-sm font-medium mt-1">Registered Psychotherapist (RP) · Founder</p>
              </div>
              <p className="text-sand/75 leading-relaxed">
                A culturally-informed therapist and advocate for diaspora mental health. With deep understanding of the immigrant experience, intergenerational trauma, and the nuances of living between cultures they bring warmth, expertise, and lived experience to every session.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="bg-white/15 text-sand text-xs font-medium px-3 py-1 rounded-full">Diaspora Expertise</span>
                <span className="bg-white/15 text-sand text-xs font-medium px-3 py-1 rounded-full">Trauma-Informed</span>
                <span className="bg-white/15 text-sand text-xs font-medium px-3 py-1 rounded-full">CBT · Narrative · SFBT</span>
                <span className="bg-white/15 text-sand text-xs font-medium px-3 py-1 rounded-full">CRPO Registered</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                <a href="#book" className="inline-flex items-center gap-2 bg-sand text-brown font-semibold px-6 py-3 rounded-full hover:bg-white transition-all text-sm">
                  Book a session →
                </a>
                <Link to="/team" className="inline-flex items-center gap-2 bg-white/20 text-sand font-semibold px-6 py-3 rounded-full hover:bg-white/30 transition-all text-sm">
                  View Full Team →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
