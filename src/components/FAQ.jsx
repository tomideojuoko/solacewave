import React, { useState } from 'react'

const FAQ_ITEMS = [
  { q: 'How much does therapy cost?', a: 'Our therapy plans start at N20,000 per session, billed monthly. You can check your coverage during the sign-up process in our secure platform.' },
  { q: 'How do I get started?', a: "Simply click 'Get Started' on our website to access our secure platform. You'll complete a brief assessment and be matched with a licensed therapist within 24 hours." },
  { q: 'How often will I meet with my therapist?', a: "Most clients meet with their therapists weekly, especially at the beginning. As you progress, you and your therapist may decide to adjust the frequency. Our platform allows for flexible scheduling based on your needs and preferences. And you can also have 24/7 access to your therapist when you are under Coach in my Pocket Plan." },
  { q: "Can I change therapists if I'm not satisfied?", a: "Absolutely! Finding the right therapist match is important. If you feel your current therapist isn't the right fit, you can request a change anytime through WhatsApp, and we'll match you with someone new." },
  { q: 'Is online therapy as effective as in-person therapy?', a: 'Research shows that online therapy can be just as effective as in-person therapy for many conditions. Our platform is designed to provide the same quality of care with added convenience and flexibility.' },
  { q: 'How is my privacy protected?', a: 'We take your privacy seriously. Our platform uses end-to-end encryption for all communications, and we are fully HIPAA compliant. Your personal information and therapy sessions are kept strictly confidential.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-section__list">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={item.q}
              className={`faq-section__item ${openIndex === i ? 'faq-section__item--open' : ''}`}
            >
              <button
                type="button"
                className="faq-section__trigger"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <span className="faq-section__icon" aria-hidden>{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className="faq-section__content">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="faq-section__help">Still have questions? We're here to help.</p>
        <a href="#contact" className="btn btn--dark faq-section__contact-btn">Contact Us</a>
      </div>
    </section>
  )
}
