import { useState } from 'react'

const FAQS = [
  {
    q: 'Do I need a referral to start therapy?',
    a: 'No referral needed. You can book a free 15-minute consultation directly through our website. No gatekeeping — just get in touch and we\'ll take it from there.',
  },
  {
    q: 'Is therapy covered by insurance?',
    a: 'Many extended health benefit plans cover Registered Psychotherapy. We\'ll provide a receipt you can submit to your provider. Check your plan under "Registered Psychotherapist (RP)" — most plans include it.',
  },
  {
    q: 'What if I\'ve never tried therapy before?',
    a: 'That\'s completely okay — and quite common among our clients. The free 15-minute call is a no-pressure way to begin. We move at your pace, always. Therapy is a conversation, not an exam.',
  },
  {
    q: 'Will my therapist understand my cultural background?',
    a: 'Yes — that\'s the entire point of what we do. Our therapists are either from diaspora communities themselves or have deep training in diaspora mental health. You won\'t be starting from zero.',
  },
]

export default function DiasporaFAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = i => setOpenIdx(prev => (prev === i ? null : i))

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">FAQ</span>
          <h2 className="font-serif text-4xl md:text-5xl" style={{ textWrap: 'balance' }}>
            Questions we hear often
          </h2>
        </div>

        <div className="space-y-3" data-anim-group>
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-sand overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-7 py-5 text-left"
                onClick={() => toggle(i)}
              >
                <span className="font-serif text-lg font-medium">{faq.q}</span>
                <svg
                  className="shrink-0 transition-transform duration-200 text-muted"
                  style={{ transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  width="20" height="20" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIdx === i && (
                <div className="px-7 pb-6">
                  <p className="text-muted leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
