import React from 'react'

export default function FinalCTA() {
  return (
    <section className="final-cta" id="consultation">
      <div className="container final-cta__inner">
        <h2 className="final-cta__title">Ready to Begin Your Healing Journey?</h2>
        <p className="final-cta__subtitle">Take the first step toward better mental health today.</p>
        <a
          href="https://wa.me/2347085256034?text=Hello%20I%20want%20to%20get%20started%20with%20therapy"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--secondary final-cta__btn"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
