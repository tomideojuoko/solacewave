import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__video-wrap">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        >
          <source src="/assets/therapy-background.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" aria-hidden />
      </div>
      <div className="hero__content-wrap container">
        <div className="hero__content">
          <h1 className="hero__title">Your Mental Health Journey Begins Here</h1>
          <p className="hero__subtitle">
            Experience personalized therapy from licensed professionals in a safe, confidential online environment
          </p>
          <div className="hero__actions">
            <a href="#consultation" className="btn btn--secondary">Book Free Consultation</a>
            <a href="#how-it-works" className="btn btn--hero-dark">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
