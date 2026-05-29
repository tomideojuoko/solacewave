import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
    </svg>
  )
}

const therapists = [
  { title: 'Coming Soon', description: 'Growing our therapist roster from across the diaspora.' },
  { title: 'Coming Soon', description: 'Growing our therapist roster from across the diaspora.' },
  { title: 'Coming Soon', description: 'Growing our therapist roster from across the diaspora.' },
]

const coaches = [
  {
    name: 'Dr. Shuaib, PhD',
    role: 'Educational Psychologist · Wellness Coach',
    country: '🇳🇬 Nigeria',
    bio: 'With over 10 years of experience, Dr. Shuaib supports individuals, couples, and families through life\'s most meaningful challenges. He holds space for people navigating relationship dynamics, personal growth, and life transitions, honouring the full weight of culture and identity in shaping who we are and who we are becoming.',
    imageClass: 'shuaib',
  },
  {
    name: 'Dr. Ashleigh',
    role: 'Clinical Psychologist · Wellness Coach',
    country: '🇳🇬 Nigeria',
    bio: 'Dr. Ashleigh brings over 10 years of experience helping people reconnect with their strength and move forward with purpose. Warm, direct, and deeply invested in every person she works with, she creates a safe space where honest conversations lead to real change.',
    imageClass: 'ashleigh',
  },
  {
    name: 'Dr. Jane, PhD',
    role: 'Counseling Psychologist · Wellness Coach',
    country: '🇳🇬 Nigeria',
    bio: 'With 8 years of experience, Dr. Jane helps individuals and couples build stronger, more secure connections. She has a particular heart for young women navigating confidence, self-worth, and emotional growth, creating a compassionate space where every person feels truly seen.',
    imageClass: 'jane',
  },
]

export default function TeamPage() {
  useEffect(() => {
    document.body.style.transition = 'opacity 0.4s ease'
    document.body.style.opacity = '1'
  }, [])

  return (
    <div className="bg-[#F8F0E8] text-[#2a1a0e] min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* Dev note */}
      <div className="bg-[#004C60] text-[#EED7BF] py-3.5 px-10 text-center text-xs font-medium tracking-wide">
        ✦ Design Preview — Solace Wave Therapy · Team Page
      </div>

      {/* Page header */}
      <div className="bg-[#4a2810] py-20 px-10 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#EED7BF]/70 hover:text-[#EED7BF] text-sm font-medium mb-8 transition-colors"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          Back to main site
        </Link>
        <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#EED7BF] mb-4">Meet Our Team</h1>
        <p className="text-lg text-[rgba(238,215,191,0.75)] font-light max-w-lg mx-auto leading-relaxed">
          Compassionate professionals rooted in culture, committed to your healing.
        </p>
      </div>

      {/* Therapists section */}
      <div className="py-20 px-10 max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-[#663916] uppercase text-center mb-3">Licensed Professionals</p>
        <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#4a2810] text-center mb-4">Our Therapists</h2>
        <p className="text-base text-[#5a3a20] font-light text-center max-w-lg mx-auto mb-14 leading-relaxed">
          Our therapists bring clinical expertise and deep cultural understanding to every session, providing care that truly meets you where you are.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
          {therapists.map((therapist, i) => (
            <div
              key={i}
              className="bg-[#FCFCFC] rounded-[20px] border border-[rgba(102,57,22,0.1)] p-6 flex flex-col items-center justify-center gap-3 min-h-80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#EED7BF] flex items-center justify-center">
                <UserIcon />
              </div>
              <p className="font-['Playfair_Display'] text-base font-bold text-[#4a2810] text-center">{therapist.title}</p>
              <p className="text-xs text-[#5a3a20] font-light text-center max-w-40 leading-relaxed">{therapist.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgba(102,57,22,0.12)] max-w-6xl mx-auto mb-20"></div>

      {/* Coaches section */}
      <div className="py-0 px-10 max-w-6xl mx-auto mb-20">
        <p className="text-xs font-semibold tracking-widest text-[#663916] uppercase text-center mb-3">Wellness Professionals</p>
        <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#4a2810] text-center mb-4">Our Wellness Coaches</h2>
        <p className="text-base text-[#5a3a20] font-light text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          Grounded, culturally rooted guidance from people who truly understand your world. Currently based in Nigeria, with more voices joining from across the globe soon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20">
          {coaches.map((coach, i) => (
            <div key={i} className="bg-[#FCFCFC] rounded-[20px] border border-[rgba(102,57,22,0.1)] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              {/* Photo placeholder */}
              <div className="w-full aspect-square bg-[#4a2810] overflow-hidden relative flex-shrink-0">
                <div className="w-full h-full flex items-center justify-center text-[#EED7BF]/20">
                  <UserIcon />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs font-semibold tracking-wider text-[#004C60] uppercase mb-1">{coach.country}</p>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#4a2810] mb-0.5 leading-snug">{coach.name}</h3>
                <p className="text-xs text-[#663916] font-medium mb-3">{coach.role}</p>
                <p className="text-xs text-[#5a3a20] font-light leading-relaxed">{coach.bio}</p>
              </div>
            </div>
          ))}

          {/* More coming soon */}
          <div className="bg-[#FCFCFC] rounded-[20px] border-2 border-dashed border-[rgba(102,57,22,0.18)] p-6 flex flex-col items-center justify-center min-h-80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-[#EED7BF] flex items-center justify-center mb-3">
              <UserIcon />
            </div>
            <p className="font-['Playfair_Display'] text-base font-bold text-[#4a2810] opacity-40 text-center">More Coming Soon</p>
            <p className="text-xs text-[#5a3a20] font-light opacity-50 text-center max-w-40 leading-relaxed mt-2">Coaches from across the diaspora joining the team.</p>
          </div>
        </div>
      </div>

      {/* CTA Band */}
      <div className="bg-[#4a2810] py-20 px-10 text-center">
        <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#EED7BF] mb-4 leading-snug">
          Not sure who is the right fit?<br />Let us figure it out together.
        </h2>
        <p className="text-lg text-[rgba(238,215,191,0.75)] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          You do not have to choose alone. Book a free consultation and we will take the time to understand your needs, then match you with the right person, together.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://calendly.com/solacewavetherapy/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EED7BF] text-[#4a2810] font-semibold px-9 py-4 rounded-full hover:bg-white hover:-translate-y-0.5 transition-all duration-300 text-sm shadow-lg"
          >
            Book Your Free Consultation
          </a>
          <Link
            to="/services"
            className="bg-transparent text-[#EED7BF] font-medium px-9 py-4 rounded-full border-1.5 border-[rgba(238,215,191,0.4)] hover:border-[#EED7BF] hover:text-white transition-all duration-300 text-sm"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  )
}
