import React from 'react'

export default function CoachInPocket() {
  return (
    <section className="coach-section" id="coach">
      <div className="container">
        <div className="coach-section__box">
          <div className="coach-section__inner">
            <div className="coach-section__content">
              <h2 className="coach-section__title">Coach in My Pocket: Therapist on the Go</h2>
              <p className="coach-section__subtitle">Skip the wait. Heal deeper, daily.</p>
              <p className="coach-section__text">
                Unlike traditional therapy platforms, Solace Wave Therapy offers you more than just weekly sessions.
                With our <span className="coach-section__highlight">Coach in My Pocket</span> feature, you gain{' '}
                <span className="coach-section__highlight">daily chat access</span> to your therapist — helping you
                process life as it happens because therapy should not be a once a week thing.
              </p>
              <p className="coach-section__text">
                For all our customers who have an ongoing therapy plan, you can now reach your therapist during
                the week. Whether you got into an argument with your partner, you are dealing with stress, or you
                just need someone to talk to, your therapist is only a message away with our{' '}
                <span className="coach-section__highlight">Coach in my pocket</span> plan.
              </p>
              <a href="https://wa.me/2347085256034?text=Hello%20I%20want%20to%20try%20Coach%20in%20My%20Pocket" target="_blank" rel="noopener noreferrer" className="btn btn--coach">
                Try Coach in My Pocket
              </a>
            </div>
            <div className="coach-section__visual">
              <img
                src="/assets/solacewave-background-dd22a70e-94a7-4d06-9047-cff74956b39e.png"
                alt="Solace WAVE app on your phone — your journey to well-being"
                className="coach-section__img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
