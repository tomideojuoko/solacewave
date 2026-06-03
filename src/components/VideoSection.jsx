export default function VideoSection() {
  return (
    <section className="bg-cream">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10 pb-4 md:pb-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-brown text-balance mb-2">
          Why we offer a Free Consultation
        </h2>
        <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto">
          Most platforms match you based on a survey or with an algorithm. At Solace Wave Therapy, we match you with intention
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full bg-black flex items-center justify-center">
        <video
          src={`${import.meta.env.BASE_URL}assets/therapy video.mov`}
          poster={`${import.meta.env.BASE_URL}assets/therapy-video-poster.jpg`}
          controls
          playsInline
          className="w-full h-screen md:h-auto md:max-h-96 object-contain"
        />
      </div>

      {/* Content Below Video */}
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12 space-y-4">
        {/* Main Content */}
        <div className="space-y-3">
          <p className="text-charcoal/75 leading-relaxed text-sm md:text-base">
            Our team personally speaks with every client before recommending a therapist or wellness coach because your healing deserves more than a survey. We look at your story, your needs, your personality and yes, your vibe!
          </p>

          <p className="text-charcoal/75 leading-relaxed text-sm md:text-base">
            And if you want to meet your match before committing fully, we'll set up a quick intro call with your therapist or wellness coach before your first session.
          </p>

          <p className="text-charcoal font-medium text-sm md:text-base">
            Sound like a deal?
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="https://calendly.com/solacewavetherapy/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brown text-sand font-bold px-8 py-3.5 rounded-full hover:bg-terra transition-all text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200"
            >
              Book your free consultation
            </a>
          </div>
        </div>

        {/* Stat */}
        <div className="pt-4 border-t border-charcoal/10">
          <p className="text-charcoal/70 text-xs md:text-sm leading-relaxed">
            <span className="font-serif text-xl md:text-2xl font-bold text-brown">99.9%</span> of our clients stay with their matched therapist… Our premium matching system is increasing success rates.
          </p>
        </div>
      </div>
    </section>
  )
}
