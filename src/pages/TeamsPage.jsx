import { useState } from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Annmarie C.',
    credential: 'RP • CCC • CRPO',
    country: '🇨🇦 Canada',
    image: '/assets/Annmarie.jpeg',
    quote: 'Your lived experience matters here. Together, we create space for reflection, healing, and growth.',
    tags: ['Trauma-informed therapy', 'Grief & loss', 'Racialized stress', 'Anxiety & burnout'],
    bio: 'Annmarie is a Registered Psychotherapist with deep experience supporting people through trauma, grief, and the specific stress that comes with navigating race and identity. With warmth and cultural understanding, she creates a space where your whole story is honored.',
    specialties: ['Trauma-informed therapy', 'Grief & loss', 'Racialized stress & BIPOC support', 'Anxiety & emotional burnout', 'Life transitions', 'Relationship challenges', 'Anti-oppressive practice'],
    disclaimer: true,
    isTherapist: true,
  },
  {
    id: 2,
    name: 'Michael O.',
    credential: 'RP (Qualifying) • CRPO',
    country: '🇨🇦 Canada',
    image: '/assets/MichaelO.jpeg',
    quote: 'Healing and growth are possible, even in seasons that feel overwhelming.',
    tags: ['Anxiety & depression', 'Trauma', 'Athletes', 'Burnout'],
    bio: 'Michael is a Registered Psychotherapist (Qualifying) bringing clinical expertise and personal understanding to support individuals navigating anxiety, trauma, and burnout. He has a special heart for athletes and high-performers seeking balance and resilience.',
    specialties: ['Anxiety & depression', 'Trauma & PTSD', 'Athletes & sports performance', 'High-performance burnout', 'Identity & life transitions', 'Grief & loss', 'Self-esteem & emotional regulation', 'Relationship & attachment issues', 'CBT & person-centred therapy'],
    disclaimer: true,
    isTherapist: true,
  },
  {
    id: 3,
    name: 'Uwem A.',
    credential: 'RP • CRPO',
    country: '🇨🇦 Canada',
    image: '/assets/UwemA.jpeg',
    quote: "You don't have to face life's challenges alone. I'm here to walk alongside you.",
    tags: ['Anxiety & stress', 'Depression', 'Couples & family', 'Faith-based'],
    bio: 'Uwem is a Registered Psychotherapist with over a decade of experience supporting individuals, couples, and families. With faith-informed sensitivity and practical wisdom, he helps people navigate life\'s most challenging transitions with hope and resilience.',
    specialties: ['Anxiety & stress', 'Depression & mood disorders', 'Trauma-informed care', 'Couples & family therapy', 'Faith-based & Christian counselling', 'Youth & young adult support', 'Grief & life transitions', 'Self-esteem & personal growth', 'Workplace stress & burnout', 'CBT-I (Insomnia)', 'Emotional regulation', 'Career counselling'],
    disclaimer: true,
    isTherapist: true,
  },
  {
    id: 4,
    name: 'Ashleigh O.',
    credential: 'Wellness Coach',
    country: '🇳🇬 Nigeria',
    image: '/assets/AshleighO.jpeg',
    quote: "Break the cycle. Rebuild your strength. I'll walk with you every step of the way.",
    tags: ['Relationships', 'Life transitions', 'Personal growth'],
    bio: 'Ashleigh is a Wellness Coach with over 10 years of experience helping people reconnect with their strength and move forward with purpose. Warm, direct, and deeply invested in every person she works with, she creates a safe space where honest conversations lead to real change.',
    specialties: ['Relationships', 'Life transitions', 'Personal growth', 'Self-discovery'],
    disclaimer: false,
    isTherapist: false,
  },
  {
    id: 5,
    name: 'Beniyam D.',
    credential: 'RP (Qualifying) • CRPO',
    country: '🇪🇷 Eritrea',
    image: '/assets/BeniyamD.jpeg',
    quote: "Your story matters, and healing happens when you're truly seen and heard.",
    tags: ['Identity & culture', 'Anxiety', 'Relationships', 'Grief'],
    bio: 'Beniyam is a Registered Psychotherapist (Qualifying) who brings deep cultural understanding and clinical insight to support clients through identity exploration, cultural transitions, and relational healing.',
    specialties: ['Identity & cultural exploration', 'Anxiety & depression', 'Relationship & family dynamics', 'Grief & loss', 'Immigration & acculturation stress', 'Self-esteem & belonging', 'Trauma-informed care'],
    disclaimer: true,
    isTherapist: true,
  },
  {
    id: 6,
    name: 'Nhyira A.',
    credential: 'RP • CRPO',
    country: '🇬🇭 Ghana',
    image: '/assets/NhyiraA.jpeg',
    quote: "Growth happens when you feel safe to be yourself. That's the space I create.",
    tags: ["Women's empowerment", 'Personal growth', 'Anxiety', 'Life transitions'],
    bio: 'Nhyira is a Registered Psychotherapist with a passion for supporting women through self-discovery, confidence-building, and meaningful life transitions. With cultural awareness and genuine care, she helps clients reconnect with their inner strength.',
    specialties: ["Women's mental health & empowerment", 'Self-esteem & personal growth', 'Anxiety & stress management', 'Life transitions & identity', 'Relationship & boundary-setting', 'Trauma-informed care', 'Burnout recovery'],
    disclaimer: true,
    isTherapist: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: 'Shuaib M.',
    credential: 'Wellness Coach',
    country: '🇳🇬 Nigeria',
    image: '/assets/ShuaibM.jpeg',
    quote: 'I help you build stronger relationships, navigate transitions, and grow into your best self.',
    tags: ['Relationships', 'Life transitions', 'Personal growth'],
    bio: 'Shuaib is a Wellness Coach with over 10 years of experience working with individuals and families through life\'s most meaningful transitions. With deep cultural sensitivity and a grounded, practical approach, he helps clients strengthen their relationships, navigate change, and grow into the best version of themselves.',
    specialties: ['Relationships', 'Life transitions', 'Personal growth'],
    disclaimer: false,
    isTherapist: false,
  },
]

function TeamCard({ member, isOpen, onToggle }) {
  return (
    <div className="card-wrap">
      <div
        className={`team-card ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
      >
        <div className="card-photo">
          {member.image && <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        </div>
        <div className="card-body">
          <p className="card-name">{member.name}</p>
          <p className="card-credential">{member.credential}</p>
          <div className="card-quote">{member.quote}</div>
          <div className="tags">
            {member.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
          <div className="card-toggle">
            <span>{isOpen ? 'Close' : 'Read more'}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="expanded-panel open">
          <div className="expanded-inner">
            <p className="expanded-bio">{member.bio}</p>
            <div className="expanded-specialties">
              <h4>Focus areas</h4>
              <div className="tags">
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
        </div>
      )}
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
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .card-wrap {
          display: flex;
          flex-direction: column;
        }

        .team-card {
          background: var(--white);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(102, 57, 22, 0.1);
          display: flex;
          flex-direction: row;
          min-height: 210px;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
        }

        .team-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(102, 57, 22, 0.11);
        }

        .team-card.open {
          border-color: rgba(102, 57, 22, 0.25);
          border-radius: 20px 20px 0 0;
          transform: none;
          box-shadow: none;
        }

        .card-photo {
          width: 130px;
          flex-shrink: 0;
          overflow: hidden;
          position: relative;
          background: #e8d5be;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(232, 213, 190, 0.3);
          font-size: 60px;
        }

        .card-body {
          padding: 16px 18px;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .card-name {
          font-family: "Playfair Display", serif;
          font-size: 17px;
          font-weight: 700;
          color: var(--brown-dark);
          margin-bottom: 2px;
        }

        .card-credential {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--brown);
          margin-bottom: 10px;
          opacity: 0.8;
        }

        .card-quote {
          font-size: 12px;
          font-weight: 300;
          color: var(--text-mid);
          line-height: 1.65;
          border-left: 2px solid var(--teal);
          background: var(--beige-light);
          padding: 8px 10px;
          border-radius: 0 6px 6px 0;
          margin-bottom: 10px;
          flex: 1;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .tag {
          background: var(--beige-light);
          border: 1px solid rgba(102, 57, 22, 0.15);
          color: var(--text-mid);
          font-size: 10px;
          font-weight: 500;
          padding: 2px 8px;
          border-radius: 100px;
        }

        .card-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          font-size: 11px;
          font-weight: 600;
          color: var(--teal);
          cursor: pointer;
          width: fit-content;
          transition: opacity 0.2s;
        }

        .card-toggle svg {
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .team-card.open .card-toggle svg {
          transform: rotate(180deg);
        }

        .expanded-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s ease;
          background: var(--white);
          border: 1px solid rgba(102, 57, 22, 0.25);
          border-top: none;
          border-radius: 0 0 20px 20px;
        }

        .expanded-panel.open {
          max-height: 800px;
        }

        .expanded-inner {
          padding: 24px 26px 28px;
        }

        .expanded-bio {
          font-size: 14px;
          font-weight: 300;
          color: var(--text-mid);
          line-height: 1.85;
          margin-bottom: 20px;
        }

        .expanded-bio strong {
          color: var(--brown);
          font-weight: 600;
        }

        .expanded-specialties {
          margin-bottom: 20px;
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

        .section-divider {
          border: none;
          border-top: 1px solid rgba(102, 57, 22, 0.1);
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .cards-grid {
            grid-template-columns: 1fr;
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
        </div>

        <hr className="section-divider" />

        {/* Coaches section */}
        <div className="team-section">
          <p className="section-eyebrow">Wellness professionals</p>
          <h2 className="section-title">Our wellness coaches</h2>
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
            <a href="#team" className="btn-outline">Explore our Psychotherapist and Wellness Coaches Team</a>
          </div>
        </div>
      </div>
    </>
  )
}
