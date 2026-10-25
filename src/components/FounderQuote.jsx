export default function FounderQuote() {
  return (
    <section className="pt-16 pb-4 bg-cream">
      <div className="max-w-3xl mx-auto px-6" data-anim>
        <div className="bg-blush rounded-3xl p-10 md:p-12 text-center space-y-6">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-white/50 flex items-center justify-center">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#4a2810" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <p className="font-serif text-2xl md:text-3xl text-gold leading-snug text-balance">"Your culture is not a barrier to healing, it's the pathway."</p>
          <p className="text-gold/60 text-sm">— Founder of Solace Wave Therapy</p>
        </div>
      </div>
    </section>
  )
}
