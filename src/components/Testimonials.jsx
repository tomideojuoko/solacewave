import React from 'react'

const TESTIMONIALS = [
  {
    quote: 'Solace Wave Therapy has been life-changing. My therapist truly understands my needs and has helped me make significant progress.',
    image: '/assets/testimonial-1-f060cf04-7e01-43b1-8de5-b84f51ebb0dd.png',
    name: 'Sarah K.',
    duration: 'Client for 8 months',
  },
  {
    quote: 'The convenience of therapy from home made it possible for me to finally prioritize my mental health. Forever grateful!',
    image: '/assets/testimonial-2-c4e1b376-5c81-4dfd-a5c8-74cf2be37426.png',
    name: 'Michael T.',
    duration: 'Client for 6 months',
  },
  {
    quote: 'I was skeptical about online therapy at first, but my experience has been nothing short of amazing. The flexibility fits perfectly with my busy schedule.',
    image: '/assets/testimonial-3-5587ffb2-5b44-43a7-b92a-2254f91d16cb.png',
    name: 'Jennifer R.',
    duration: 'Client for 4 months',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonials-section__grid">
          {TESTIMONIALS.map((item, i) => (
            <blockquote key={i} className="testimonials-section__card">
              <span className="testimonials-section__quote-mark" aria-hidden>"</span>
              <p className="testimonials-section__quote">"{item.quote}"</p>
              <div className="testimonials-section__author">
                <img src={item.image} alt="" className="testimonials-section__avatar" />
                <div>
                  <cite className="testimonials-section__name">{item.name}</cite>
                  <span className="testimonials-section__duration">{item.duration}</span>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
