import { Link } from 'react-router-dom'

export default function Team() {
  return (
    <section id="team" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-balance text-brown">Meet Our Team</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kobi Card */}
          <div className="bg-brown rounded-3xl p-8 md:p-10 flex flex-col" data-anim>
            <div className="w-full aspect-square rounded-2xl mb-6 overflow-hidden min-h-64 sm:min-h-80 md:min-h-96">
              <img src={`${import.meta.env.BASE_URL}assets/Kobi.jpg`} alt="Kobi Lord-Michael" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-sand">Kobi Lord-Michael</h3>
                <p className="text-sand/60 text-sm font-medium mt-1">Founder & CEO</p>
              </div>
              <p className="text-sand/75 leading-relaxed text-sm">
                Kobi brings a multidisciplinary background in neuroscience, psychology, philosophy and medical education, supported by extensive experience in psychological research.
              </p>
              <div className="bg-white/10 rounded-2xl p-4 mt-4">
                <p className="text-sand text-sm italic">
                  "I founded Solace Wave Therapy with one mission... to make culturally attuned mental health care accessible to Black, African and Caribbean communities. Having witnessed the barriers our communities face when seeking support, I built a space where you are already understood before you walk in."
                </p>
              </div>
            </div>
          </div>

          {/* Deborah Card */}
          <div className="bg-brown rounded-3xl p-8 md:p-10 flex flex-col" data-anim>
            <div className="w-full aspect-square rounded-2xl mb-6 overflow-hidden min-h-64 sm:min-h-80 md:min-h-96">
              <img src={`${import.meta.env.BASE_URL}assets/Deborah.PNG`} alt="Deborah Ochoche" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-sand">Deborah Ochoche</h3>
                <p className="text-sand/60 text-sm font-medium mt-1">Client Coordinator and Consultant</p>
              </div>
              <p className="text-sand/75 leading-relaxed text-sm">
                Deborah is the warm first voice you hear at Solace Wave Therapy. She listens deeply, holds space without judgment and makes sure every client feels truly heard even before they meet their assigned therapist or coach. She matches you with the perfect therapist or wellness coach for your specific needs.
              </p>
              <div className="bg-white/10 rounded-2xl p-4 mt-4">
                <p className="text-sand text-sm italic">
                  "Your first step matters and I make sure it feels that way."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
