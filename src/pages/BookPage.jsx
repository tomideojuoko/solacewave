const BOOKING_EMBED = 'https://book.carepatron.com/Solace-Wave-Therapy/All?p=gAXiqIIET-W80KBN21uGPw&e=i'
const CONSULT_LINK = 'https://calendly.com/solacewavetherapy/consultation'

// Shown above the booking portal so returning clients can spot their therapist.
// Full names match how they appear in Carepatron.
const THERAPISTS = [
  { name: 'Annmarie Etuk', role: 'Registered Psychotherapist', image: '/assets/Annmarie-circle.jpg' },
  { name: 'Racquel Anthony', role: 'Registered Psychotherapist (Qualifying)', image: '/assets/RaquelA-circle.jpg' },
  { name: 'Kemani Grant', role: 'Registered Social Worker', image: '/assets/KemaniG.jpg' },
]

// Booking page for returning clients who've already had their free consultation.
export default function BookPage() {
  return (
    <div className="bg-cream min-h-screen text-charcoal" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <section className="bg-brown px-6 py-16 md:py-20 text-center">
        <span className="text-xs font-semibold tracking-widest text-sand/60 uppercase">Returning clients</span>
        <h1 className="text-4xl md:text-6xl font-bold text-sand mt-4 text-balance" style={{ fontFamily: "'Playfair Display', serif" }}>Book your next session</h1>
        <p className="text-sand/70 text-base md:text-lg max-w-xl mx-auto mt-5 leading-relaxed">
          Already had your consultation? Choose your matched therapist and a time that works for you below.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-8">
        <div className="bg-blush rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
          <p className="text-gold text-sm leading-relaxed">
            <span className="font-semibold">New to Solace Wave?</span> Start with a free 30 minute consultation so we can match you with the right therapist.
          </p>
          <a href={CONSULT_LINK} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex justify-center bg-brown text-sand font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-terra transition-colors">
            Book a free consultation
          </a>
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brown" style={{ fontFamily: "'Playfair Display', serif" }}>Find your therapist</h2>
          <p className="text-muted text-sm mt-2">Then choose them in the booking form below.</p>
          <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-8 max-w-2xl mx-auto">
            {THERAPISTS.map(t => (
              <div key={t.name} className="flex flex-col items-center">
                <img src={t.image} alt={t.name} className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-sand shadow-sm" />
                <p className="mt-3 font-semibold text-brown text-sm sm:text-base leading-tight">{t.name}</p>
                <p className="mt-1 text-muted text-[11px] sm:text-xs leading-snug">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-sand overflow-hidden shadow-sm">
          <iframe
            title="Carepatron Online Booking"
            src={BOOKING_EMBED}
            className="w-full block border-0"
            style={{ height: 'min(1100px, max(760px, 85vh))' }}
          />
        </div>

      </div>
    </div>
  )
}
