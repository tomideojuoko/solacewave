const steps = [
  { num: '1', color: 'bg-brown shadow-gold/25', title: 'Book a Free Call', text: 'A 15-minute, no-pressure chat to share what you\'re going through and see if we\'re the right fit.', line: true },
  { num: '2', color: 'bg-terra shadow-terra/25',         title: 'Initial Assessment', text: 'A deeper first session we listen to your story, understand your goals, and map what healing looks like for you.', line: true },
  { num: '3', color: 'bg-brown shadow-gold/25',           title: 'Begin Your Therapy', text: 'We build a personalised care plan and get to work virtual or in-person, at a pace that actually works for you.', line: false },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 max-w-xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">Your Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl text-balance text-brown">Three steps to start feeling better</h2>
          <p className="text-muted">We've made it as simple as possible to take the first step.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative" data-anim-group>
          {steps.map((step, i) => (
            <div key={i} className={`relative text-center space-y-5 ${step.line ? 'step-line' : ''}`}>
              <div className={`w-14 h-14 rounded-full text-white font-serif text-xl font-semibold flex items-center justify-center mx-auto shadow-lg ${step.color}`}>{step.num}</div>
              <h3 className="font-serif text-xl font-semibold">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#book" className="inline-flex items-center gap-2 bg-brown text-white font-semibold px-10 py-4 rounded-full hover:bg-terra transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
            Start with a Free Call
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
