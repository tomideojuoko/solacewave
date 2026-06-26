import { useState } from 'react'

const faqs = [
  {
    q: 'What is the difference between Therapy and Wellness Coaching?',
    a: 'Therapy is a regulated health procedure done by a professional who can assess, diagnose, and support treatment of conditions like depression, anxiety, PTSD, and other mental health concerns. If you feel you need that level of clinical care, therapy is the right path. A wellness coach does not diagnose, prescribe, or treat medical or mental health conditions, but is a powerful support for everyday life including personal growth, building healthy habits, navigating relationships, managing stress, improving work-life balance, setting and achieving goals, and finding clarity during life transitions. If you are unsure which is right for you, book a free consultation and we will help you figure it out together.',
  },
  {
    q: 'Is therapy covered by insurance?',
    a: 'Many extended health benefits plans in Canada cover registered psychotherapy, though coverage varies by provider. We recommend checking with your insurer directly. We provide receipts for reimbursement.',
  },
  {
    q: "What if I've tried therapy before?",
    a: 'A past experience that did not feel right usually means the fit was off, not that therapy is not for you. We take time to match you carefully so this experience feels different.',
  },
  {
    q: 'What happens if I want to switch my therapist?',
    a: 'You can request a change at any time. Your comfort always comes first.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'Every journey is different. Your therapist will check in regularly to make sure your care reflects where you are and a treatment plan will be drawn up specifically for you.',
  },
  {
    q: 'How often can I have sessions?',
    a: 'Most clients start weekly or biweekly, but frequency is flexible based on your needs and schedule.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">FAQ</span>
          <h2 className="font-serif text-4xl md:text-5xl text-balance text-brown">FAQ - Questions we get asked often</h2>
        </div>

        <div className="space-y-3" data-anim-group>
          {faqs.map((faq, i) => (
            <div key={i} className="bg-brown rounded-2xl overflow-hidden">
              <button onClick={() => toggle(i)} className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-terra transition-colors duration-200">
                <span className="font-serif text-lg font-medium text-sand">{faq.q}</span>
                <svg
                  className="shrink-0 transition-transform duration-200 text-sand/60"
                  style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-7 pb-6 border-t border-white/10">
                  <p className="text-sand/75 leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
