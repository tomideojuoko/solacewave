import React from 'react'

const STEPS = [
  { num: 1, title: 'Complete Assessment' },
  { num: 2, title: 'Match with Therapist' },
  { num: 3, title: 'Begin Therapy' },
]

const BULLETS = [
  'Personalized treatment and therapist based on your responses',
  'Identify specific areas where you need support',
  'Share preferences for therapist characteristics',
]

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="how-section__steps">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.num}>
              <div className="how-section__step">
                <span className="how-section__step-num">{step.num}</span>
                <span className="how-section__step-title">{step.title}</span>
              </div>
              {i < STEPS.length - 1 && <span className="how-section__connector" aria-hidden />}
            </React.Fragment>
          ))}
        </div>

        <div className="how-section__assessment">
          <div className="how-section__assessment-inner">
            <div className="how-section__assessment-visual">
              <img
                src="/assets/assessment-illustration-2446f34d-68bb-470d-b590-106d76db3e2c.png"
                alt="Therapy session: support and care"
                className="how-section__illustration"
              />
            </div>
            <div className="how-section__assessment-content">
              <h3 className="how-section__assessment-title">
                <span className="how-section__assessment-title-accent">Complete</span> Your Assessment
              </h3>
              <p>
                Answer a few questions about your mental health needs, preferences, and goals. Our comprehensive
                assessment takes about 5-10 minutes and helps us understand your unique situation.
              </p>
              <ul className="how-section__checklist">
                {BULLETS.map((item) => (
                  <li key={item}>
                    <span className="how-section__check" aria-hidden>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/2347085256034?text=Hello%20I%20want%20to%20start%20my%20assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                Start Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
