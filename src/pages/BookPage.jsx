const BOOKING_EMBED = 'https://book.carepatron.com/Solace-Wave-Therapy/All?p=gAXiqIIET-W80KBN21uGPw&e=i'
const BOOKING_LINK = 'https://book.carepatron.com/Solace-Wave-Therapy/All?p=gAXiqIIET-W80KBN21uGPw&e=b'
const CONSULT_LINK = 'https://calendly.com/solacewavetherapy/consultation'

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

        <div className="bg-white rounded-3xl border border-sand overflow-hidden shadow-sm">
          <iframe
            title="Carepatron Online Booking"
            src={BOOKING_EMBED}
            className="w-full block border-0"
            style={{ height: 'min(1100px, max(760px, 85vh))' }}
          />
        </div>

        <p className="text-center text-sm text-muted">
          Booking form not loading?{' '}
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="text-terra font-semibold hover:underline">
            Open it in a new tab
          </a>
        </p>
      </div>
    </div>
  )
}
