import React from 'react'

const APPROACHES = [
  { title: 'Cognitive Behavioral Therapy', description: 'Identify and change negative thought patterns that influence behaviors and emotions.', icon: '🧠' },
  { title: 'Mindfulness-Based Therapy', description: 'Learn to be present in the moment and develop a non-judgmental awareness.', icon: '❤️' },
  { title: 'Family Systems Therapy', description: 'Address issues within the context of family relationships and dynamics.', icon: '👨‍👩‍👧‍👦' },
  { title: 'Psychodynamic Therapy', description: 'Explore unconscious patterns influencing current behavior and relationships.', icon: '💬' },
]

export default function TherapyApproaches() {
  return (
    <section className="approaches-section" id="services">
      <div className="container">
        <h2 className="section-title">Our Therapy Approaches</h2>
        <div className="approaches-section__grid">
          {APPROACHES.map((item) => (
            <article key={item.title} className="approaches-section__card">
              <div className="approaches-section__icon-wrap" aria-hidden>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
