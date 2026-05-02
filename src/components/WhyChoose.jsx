import React from 'react'

const ITEMS = [
  {
    title: 'Confidential & Secure',
    description: 'All conversations and data are protected with end-to-end encryption.',
    icon: '🔒',
  },
  {
    title: 'Licensed Professionals',
    description: 'Our therapists are certified and experienced in various mental health areas.',
    icon: '✓',
  },
  {
    title: 'Flexible Scheduling',
    description: 'Book sessions at your convenience, any day, any time.',
    icon: '📅',
  },
  {
    title: 'Personalized Approach',
    description: 'Therapy tailored to your unique needs, including religious preferences.',
    icon: '❤️',
  },
]

export default function WhyChoose() {
  return (
    <section className="why-section" id="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose Solace Wave Therapy</h2>
        <div className="why-section__grid">
          {ITEMS.map((item) => (
            <article key={item.title} className="why-section__card">
              <span className="why-section__icon" aria-hidden>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
