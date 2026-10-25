import { useState } from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Annmarie E.',
    fullName: 'Annmarie Etuk',
    credential: 'RP • CCC • CRPO',
    country: '🇨🇦 Canada',
    image: '/assets/Annmarie-circle.jpg',
    quote: 'Your lived experience matters here. Together, we create space for reflection, healing, and growth.',
    tags: ['Trauma', 'Anxiety', 'The girl child experience', 'Grief and loss', 'Burnout', 'Family pressures', 'Relationship issues', 'Self-esteem & confidence'],
    bio: 'Annmarie is a Registered Psychotherapist with deep experience supporting people through trauma, grief, and the specific stress that comes with navigating race and identity. With warmth and cultural understanding, she creates a space where your whole story is honored.',
    specialties: ['Trauma-informed therapy', 'Grief & loss', 'Racialized stress & BIPOC support', 'Anxiety & emotional burnout', 'Life transitions', 'Relationship challenges', 'Anti-oppressive practice'],
    disclaimer: true,
    isTherapist: true,
  },
  {
    id: 9,
    name: 'Kemani G.',
    credential: 'MSW • RSW',
    country: '🇨🇦 Canada',
    image: '/assets/KemaniG.jpg',
    quote: "Healing doesn't mean having all the answers. It means giving yourself permission to explore, grow and embrace the journey.",
    tags: ['Depression', 'Anxiety', 'High performance burnout', 'Identity and life transitions', 'Relationships', 'Emotional processing', 'Workplace stress', 'Young men and boys'],
    bio: "Kemani is a Registered Social Worker who brings experience supporting youth and adults through a compassionate, mindful, and trauma-informed approach. He strives to create a safe, inclusive and empowering space where individuals feel heard, supported, and encouraged to build emotional awareness, strengthen resilience and navigate life's challenges.",
    specialties: ['Self-esteem & personal growth', 'Emotional regulation', 'Anti-oppressive practice', 'Youth & young adult support', 'Mindfulness', 'Trauma-informed care'],
    disclaimer: true,
    isTherapist: true,
  },
  {
    id: 3,
    name: 'Raquel A.',
    credential: 'RP (Qualifying) • CRPO',
    country: '🇨🇦 Canada',
    image: '/assets/RaquelA-circle.jpg',
    quote: "You don't have to have everything figured out before we begin.",
    tags: ['Anxiety', 'ADHD support', 'Grief and loss', 'Trauma', 'Relationship challenges', 'Culture and belonging', 'Adults and families'],
    bio: 'Raquel is a Registered Psychotherapist (Qualifying) with a background in education and counselling psychology. She takes a trauma-informed, culturally responsive approach, helping clients navigate identity, family dynamics, and life transitions with warmth and understanding. Her practice centres on meeting each client where they are, honouring the culture, community, and lived experience that shape how they see themselves and the world.',
    specialties: ['Anxiety & self-esteem', 'Relationships & family dynamics', 'Identity exploration', 'Life transitions', 'Grief & loss', 'Cultural & family expectations', 'LGBTQIA+ affirming support', 'Trauma-informed & client-centred therapy'],
    disclaimer: true,
    isTherapist: true,
  },
  {
    id: 10,
    name: 'Monique M.',
    credential: 'MSW • RSW',
    country: '🇨🇦 Canada',
    image: '/assets/MoniqueM.jpg',
    comingSoon: true,
    tags: [],
    specialties: [],
    disclaimer: false,
    isTherapist: true,
  },
  {
    id: 8,
    name: 'Jane O.',
    credential: 'Wellness Coach',
    country: '🇳🇬 Nigeria',
    image: '/assets/JaneO.jpeg',
    quote: "Real change comes when you feel genuinely supported. I'm here to help you get there.",
    tags: ["Relationships", "Women's empowerment", 'Personal growth', 'Self-discovery'],
    bio: 'Jane is a Wellness Coach with 8 years of experience supporting individuals and couples through some of life\'s most meaningful transitions. She has a particular heart for women navigating confidence, self-worth, and personal growth, creating a space where clients feel deeply understood and genuinely supported.',
    specialties: ['Relationships', 'Women\'s empowerment', 'Personal growth', 'Self-discovery'],
    disclaimer: false,
    isTherapist: false,
  },
]

function TeamCard({ member, isOpen, onToggle }) {
  return (
    <div className="card-wrap">
      <div className={`team-card ${isOpen ? 'open' : ''}`}>
        <div className="card-photo">
          {member.image && <img src={member.image} alt={member.fullName || member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        </div>
        <p className="card-name">{member.name}</p>
        <p className="card-credential">{member.credential}</p>
        {member.comingSoon ? (
          <span className="joining-soon">Joining soon</span>
        ) : (
        <>
        <div className="tags">
          {member.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>

        <button type="button" className="card-toggle" onClick={onToggle} aria-expanded={isOpen}>
          <span>{isOpen ? 'Show less' : 'Read more'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {isOpen && (
          <div className="expanded">
            <p className="expanded-quote">"{member.quote}"</p>
            <p className="expanded-bio">{member.bio}</p>
            <div className="expanded-specialties">
              <h4>How I can help</h4>
              <div className="tags tags-left">
                {member.specialties.map((spec, idx) => (
                  <span key={idx} className="tag">{spec}</span>
                ))}
              </div>
            </div>
            {member.disclaimer && (
              <div className="disclaimer">
                <strong>Please note:</strong> {member.isTherapist ?
                  "Psychotherapy is a confidential, professional service. Our therapists follow strict ethical guidelines and are bound by confidentiality." :
                  "Wellness coaching is a supportive, growth-focused service and is not psychotherapy. If you are experiencing suicidal ideation, self-harm, severe anxiety, depression, or psychosis, we will connect you directly with one of our registered psychotherapists."
                }
              </div>
            )}
          </div>
        )}
        </>
        )}
      </div>
    </div>
  )
}

export default function TeamsPage() {
  const [openCard, setOpenCard] = useState(null)

  const therapists = teamMembers.filter(m => m.isTherapist)
  const coaches = teamMembers.filter(m => !m.isTherapist)

  return (
    <>
      <style>{`
        :root {
          --brown: #663916;
          --brown-dark: #4a2810;
          --beige: #EED7BF;
          --beige-light: #F8F0E8;
          --teal: #004C60;
          --white: #FCFCFC;
          --text-dark: #2a1a0e;
          --text-mid: #5a3a20;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .page-header {
          background: var(--brown-dark);
          padding: 80px 40px;
          text-align: center;
        }

        .page-header h1 {
          font-family: "Playfair Display", serif;
          font-size: clamp(36px, 6vw, 60px);
          font-weight: 800;
          color: var(--beige);
          margin-bottom: 16px;
        }

        .page-header p {
          font-size: 18px;
          color: rgba(238, 215, 191, 0.7);
          font-weight: 300;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .team-section {
          padding: 72px 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--brown);
          margin-bottom: 12px;
          text-align: center;
        }

        .section-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 700;
          color: var(--brown-dark);
          text-align: center;
          margin-bottom: 14px;
        }

        .section-sub {
          font-size: 15px;
          color: var(--text-mid);
          font-weight: 300;
          text-align: center;
          max-width: 520px;
          margin: 0 auto 48px;
          line-height: 1.7;
        }

        .cards-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          align-items: stretch;
        }

        .cards-grid > * {
          width: calc((100% - 48px) / 3);
        }

        .joining-soon {
          margin-top: auto;
          background: var(--teal);
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 100px;
        }

        /* When a card is opened, let the others keep their own height */
        .cards-grid:has(.team-card.open) {
          align-items: start;
        }

        .card-wrap {
          display: flex;
          flex-direction: column;
        }

        .team-card {
          flex: 1;
          background: var(--white);
          border-radius: 20px;
          border: 1px solid rgba(102, 57, 22, 0.1);
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .team-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(102, 57, 22, 0.11);
        }

        .team-card.open {
          border-color: rgba(102, 57, 22, 0.25);
          transform: none;
        }

        .card-photo {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          overflow: hidden;
          background: #e8d5be;
          margin-bottom: 18px;
          flex-shrink: 0;
        }

        .card-name {
          font-family: "Playfair Display", serif;
          font-size: 21px;
          font-weight: 700;
          color: var(--brown);
          margin-bottom: 4px;
        }

        .card-credential {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--brown);
          margin-bottom: 16px;
          opacity: 0.75;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          justify-content: center;
        }

        .team-card > .tags {
          margin-bottom: 20px;
        }

        .tags-left {
          justify-content: flex-start;
        }

        .tag {
          background: var(--beige-light);
          border: 1px solid rgba(102, 57, 22, 0.15);
          color: var(--text-mid);
          font-size: 11px;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .card-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          background: none;
          border: none;
          padding: 0;
          font: inherit;
          font-size: 12px;
          font-weight: 600;
          color: var(--teal);
          cursor: pointer;
        }

        .card-toggle svg {
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .team-card.open .card-toggle svg {
          transform: rotate(180deg);
        }

        .expanded {
          width: 100%;
          text-align: left;
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid rgba(102, 57, 22, 0.12);
        }

        .expanded-quote {
          font-family: "Playfair Display", serif;
          font-style: italic;
          font-size: 15px;
          line-height: 1.6;
          color: var(--brown-dark);
          margin-bottom: 14px;
        }

        .expanded-bio {
          font-size: 13.5px;
          font-weight: 300;
          color: var(--text-mid);
          line-height: 1.8;
          margin-bottom: 18px;
        }

        .expanded-specialties {
          margin-bottom: 18px;
        }

        .expanded-specialties h4 {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-mid);
          opacity: 0.6;
          margin-bottom: 8px;
        }

        .disclaimer {
          background: var(--beige-light);
          border-left: 3px solid var(--teal);
          padding: 12px 16px;
          border-radius: 0 8px 8px 0;
          font-size: 12px;
          font-weight: 300;
          color: var(--text-mid);
          line-height: 1.7;
        }

        .disclaimer strong {
          color: var(--teal);
          font-weight: 600;
        }

        .coming-soon {
          background: transparent;
          border: 1.5px dashed rgba(102, 57, 22, 0.2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 6px;
          padding: 24px;
          text-align: center;
          min-height: 210px;
        }

        .cs-text {
          font-family: "Playfair Display", serif;
          font-size: 17px;
          font-weight: 700;
          color: var(--brown-dark);
          opacity: 0.35;
        }

        .cs-sub {
          font-size: 12px;
          font-weight: 300;
          color: var(--text-mid);
          opacity: 0.45;
          line-height: 1.6;
        }

        .cta-band {
          background: var(--brown-dark);
          padding: 80px 40px;
          text-align: center;
        }

        .cta-band h2 {
          font-family: "Playfair Display", serif;
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 700;
          color: var(--beige);
          margin-bottom: 16px;
        }

        .cta-band p {
          font-size: 16px;
          color: rgba(238, 215, 191, 0.65);
          font-weight: 300;
          max-width: 500px;
          margin: 0 auto 40px;
          line-height: 1.75;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-brown {
          background: var(--brown);
          color: var(--beige);
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-brown:hover {
          background: #7a4520;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: rgba(238, 215, 191, 0.8);
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          border: 1.5px solid rgba(238, 215, 191, 0.3);
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-outline:hover {
          border-color: rgba(238, 215, 191, 0.7);
          color: var(--beige);
        }

        .returning-band {
          margin-top: 40px;
          background: var(--beige);
          border-radius: 20px;
          padding: 36px 28px;
          text-align: center;
        }

        .returning-band h3 {
          font-family: "Playfair Display", serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--brown-dark);
          margin-bottom: 8px;
        }

        .returning-band p {
          font-size: 15px;
          font-weight: 300;
          color: var(--text-mid);
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 22px;
        }

        .section-divider {
          border: none;
          border-top: 1px solid rgba(102, 57, 22, 0.1);
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .cards-grid > * {
            width: calc((100% - 24px) / 2);
          }
        }

        @media (max-width: 640px) {
          .cards-grid > * {
            width: 100%;
          }
          .team-section {
            padding: 48px 18px;
          }
          .page-header, .cta-band {
            padding: 48px 18px;
          }
        }
      `}</style>

      <div style={{ background: 'var(--beige-light)', color: 'var(--text-dark)', minHeight: '100vh', fontFamily: '"Poppins", sans-serif' }}>
        {/* Page header */}
        <div className="page-header">
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(238,215,191,0.7)', textDecoration: 'none', fontSize: '14px', fontWeight: '500', marginBottom: '32px', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = 'rgba(238,215,191,1)'} onMouseLeave={e => e.target.style.color = 'rgba(238,215,191,0.7)'}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to main site
          </a>
          <h1>Meet our team</h1>
          <p>Compassionate professionals rooted in culture, committed to your healing and growth.</p>
        </div>

        {/* Therapists section */}
        <div className="team-section">
          <p className="section-eyebrow">Licensed professionals</p>
          <h2 className="section-title">Our therapists</h2>
          <p className="section-sub">CRPO-registered psychotherapists bringing clinical expertise and genuine cultural understanding to every session.</p>

          <div className="cards-grid">
            {therapists.map(member => (
              <TeamCard
                key={member.id}
                member={member}
                isOpen={openCard === member.id}
                onToggle={() => setOpenCard(openCard === member.id ? null : member.id)}
              />
            ))}
          </div>

          {/* Returning clients: book directly with their matched therapist */}
          <div className="returning-band">
            <h3>Already had your consultation?</h3>
            <p>Ready to book more sessions with your matched therapist? Go ahead and book with them directly here.</p>
            <a
              href="https://book.carepatron.com/Solace-Wave-Therapy/All?p=gAXiqIIET-W80KBN21uGPw&e=b"
              className="btn-brown"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a session
            </a>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Coaches section */}
        <div className="team-section">
          <p className="section-eyebrow">Wellness professionals</p>
          <h2 className="section-title">Wellness coaching</h2>
          <p className="section-sub">Supporting your personal growth and life transitions with cultural wisdom and genuine care.</p>

          <div className="cards-grid">
            {coaches.map(member => (
              <TeamCard
                key={member.id}
                member={member}
                isOpen={openCard === member.id}
                onToggle={() => setOpenCard(openCard === member.id ? null : member.id)}
              />
            ))}

            <div className="coming-soon">
              <p className="cs-text">More coming soon</p>
              <p className="cs-sub">New coaches joining from across the diaspora.</p>
            </div>
          </div>
        </div>

        {/* CTA Band */}
        <div className="cta-band">
          <h2>Not sure who is the right fit?</h2>
          <p>Let us figure it out together.<br />You do not have to choose alone. Book a free consultation and we will take the time to understand your needs, then match you with the right person, together.</p>
          <div className="cta-buttons">
            <a href="https://calendly.com/solacewavetherapy/consultation" className="btn-brown" target="_blank" rel="noopener">Book Your Free Consultation</a>
            <a href="#team" className="btn-outline">Explore our Team</a>
          </div>
        </div>
      </div>
    </>
  )
}
