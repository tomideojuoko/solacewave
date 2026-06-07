import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const IMG1 = '/assets/Africacoach/lookingatcomputer.JPG'
const IMG2 = '/assets/Africacoach/girlfixinggirlhair.JPG'
const IMG3 = '/assets/Africacoach/couplepicture.JPG'
const IMG4 = '/assets/Africacoach/2blackgirls2.JPG'
const IMG5 = '/assets/Africacoach/glassesmagnifying.JPG'

const services = [
  {
    id: 1,
    name: 'Individual Therapy',
    price: '$150 CAD per session',
    saleOld: '$175 CAD',
    saleNew: '$150 CAD',
    isSale: true,
    cardPrice: '$150 CAD',
    image: IMG1,
    preview: 'A private, one on one space built entirely around you. Work through what you are carrying with a Registered Psychotherapist who already understands your world.',
    body: [
      'Individual therapy at Solace Wave Therapy is a private, one on one space built entirely around you. Whether you are navigating anxiety, depression, identity, grief, trauma, relationship challenges or the quiet exhaustion of living between cultures, your therapist meets you exactly where you are.',
      'Our therapists are Registered Psychotherapists (RP) who bring both deep professional training and genuine lived experience to every session.',
    ],
    subheadings: [
      {
        title: 'What you can expect',
        text: 'Sessions are 60 minutes and held virtually through a secure, private video platform. Your therapist will work with you to understand your goals and build a personalized care plan around your pace, your story and your needs. No cookie cutter approaches. No starting from scratch every session.',
      },
      {
        title: 'Areas we work with',
        text: 'Trauma and abuse, anxiety and depression, generational and family trauma, grief and loss, self-esteem and identity, relationship challenges, cultural identity and belonging, mental health conditions including PTSD, ADHD, and psychosis.',
      },
    ],
    note: 'Sessions are virtual and available across Ontario. All therapists are CRPO registered and carry professional liability insurance. Your personal health information is protected under PHIPA.',
    cta: { label: 'Book a Free Consultation', href: 'https://calendly.com/solacewavetherapy/consultation', variant: 'brown' },
  },
  {
    id: 2,
    name: 'Wellness Coaching',
    price: '$100 CAD per session',
    cardPrice: '$100 CAD',
    image: IMG2,
    preview: 'Words of wisdom from home. Grounded, culturally rooted coaching from coaches across Nigeria, Ghana, Ethiopia and Somalia who know your world from the inside.',
    body: [
      '"Words of wisdom from home."',
      'Our wellness coaches bring something rare. The kind of grounded, culturally rooted guidance that feels like sitting with someone who truly knows your world. Our coaches come from Nigeria, Ghana, Ethiopia, Somalia and across the African continent, bringing deep community knowledge, lived experience and cultural wisdom to every session.',
      'Wellness coaching is a supportive, non-clinical service focused on helping you move forward in life. Your coach helps you gain clarity, build healthier habits, set meaningful goals and navigate the everyday challenges of life.',
    ],
    subheadings: [
      {
        title: 'Wellness coaching is a great fit for',
        text: 'Personal growth and goal setting, stress management and work-life balance, mindset and motivation, building confidence and self-worth, navigating relationships and family dynamics, wellbeing support and accountability.',
      },
    ],
    note: 'Please note: Wellness coaching is a supportive, non-clinical service. Coaches do not provide psychotherapy, make diagnoses or prescribe medication. If you are experiencing symptoms that require that level of care, our team will help connect you with one of our registered therapists.',
    cta: { label: 'Book a Free Consultation', href: 'https://calendly.com/solacewavetherapy/consultation', variant: 'brown' },
  },
  {
    id: 3,
    name: 'Couples Counselling',
    price: '$250 CAD per session',
    cardPrice: '$250 CAD',
    image: IMG3,
    preview: 'Your relationship deserves care that honours your values, your culture and your community. Navigate love with someone who understands what you are both carrying.',
    body: [
      'Relationships are one of the most sacred things we carry. At Solace Wave Therapy, we understand that for Black, African and Caribbean couples, love does not exist in a vacuum. It exists within culture, within family systems, within expectations that have been passed down through generations and within the added weight of navigating life in the diaspora together.',
      'Our couples therapists are trained to honour those layers. They work with both partners with deep respect for your values, your backgrounds and what your relationship means within the context of your community and your faith.',
    ],
    subheadings: [
      {
        title: 'What couples therapy can help with',
        text: 'Communication and conflict resolution, rebuilding trust and connection, navigating cultural and family expectations together, intimacy and emotional closeness, major life transitions as a couple, co-parenting and family dynamics, premarital counselling and strengthening your foundation.',
      },
      {
        title: 'You are in good hands.',
        text: 'Both partners are held with equal care, warmth and respect. This is a space where your relationship is truly seen, honoured and given the attention it deserves.',
      },
    ],
    note: 'Sessions are held virtually. Both partners attend together. Sessions are private and confidential.',
    cta: { label: 'Book a Free Consultation', href: 'https://calendly.com/solacewavetherapy/consultation', variant: 'brown' },
  },
  {
    id: 4,
    name: 'Group Therapy',
    price: '$55 CAD per session',
    cardPrice: '$55 CAD',
    image: IMG4,
    preview: 'Meet others like you. A facilitated therapeutic space where shared experience becomes shared healing. No explaining needed. Just connection, community and real support.',
    body: [
      'There is something powerful about being in a room with people who already understand. No explaining. No context-setting. Just shared experience, honest conversation and the kind of healing that happens when you realise you are not alone.',
      'Our group therapy sessions are facilitated by a Registered Psychotherapist and bring together small groups of Black, African and Caribbean individuals navigating similar life experiences. Groups are intentionally sized to create safety, intimacy and real connection.',
    ],
    subheadings: [
      {
        title: 'What group therapy offers',
        text: 'A safe, facilitated space to process shared experiences, the power of being truly seen and understood by peers, community, accountability and mutual support, professional therapeutic guidance in a group setting and an affordable path into therapy for those who are just beginning.',
      },
      {
        title: 'Meeting others like you.',
        text: 'Our groups are curated thoughtfully. We match group members based on shared themes and experiences so the space feels relevant, safe and genuinely healing from the very first session.',
      },
    ],
    note: 'Group sessions are held virtually. Group sizes are kept small to ensure every member feels heard. Contact us to find out about upcoming groups and availability.',
    cta: { label: 'Book a Free Consultation', href: 'https://calendly.com/solacewavetherapy/consultation', variant: 'brown' },
  },
  {
    id: 5,
    name: 'Assessments and Reports',
    price: 'Assessment from $820 CAD · Reports $2,000–$2,500 CAD',
    cardPrice: 'From $820 CAD',
    image: IMG5,
    preview: 'Comprehensive psychological assessments and formal reports for immigration hearings, humanitarian applications and pre-removal risk assessments.',
    body: [
      'Our assessment and report services are designed to support clients who need formal psychological documentation for legal, immigration or humanitarian purposes. We understand how high the stakes can be when your safety, your status or your future depends on the right support and documentation.',
    ],
    subheadings: [
      {
        title: 'Services include',
        text: 'Psychological Assessment (4 hours) $820 CAD — A comprehensive psychological assessment conducted by our qualified clinicians to evaluate cognitive, emotional and psychological functioning. Psychological Report for Immigration Hearings — A detailed clinical report prepared to support clients appearing before the Immigration and Refugee Board or in related legal proceedings. Humanitarian and Compassionate Report — A psychological report prepared to support H&C applications with IRCC. Pre-Removal Risk Assessment Report — A clinical report prepared to support PRRA applications for clients facing removal from Canada.',
      },
    ],
    note: 'All reports are prepared by qualified clinicians. Report pricing ranges from $2,000 to $2,500 CAD depending on complexity and scope. Please contact us to discuss your specific needs.',
    cta: { label: 'Contact Us About Assessments', href: 'https://wa.me/2347085256034', variant: 'teal' },
  },
]

function BackIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
  )
}

function ExpandedPanel({ service, onClose }) {
  return (
    <div className="bg-white rounded-3xl p-10 md:p-14 mb-10 border border-[rgba(102,57,22,0.08)]">
      <div className="flex items-start gap-8 mb-10 flex-wrap">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#EED7BF] shrink-0">
          <img src={service.image} alt={service.name} className="w-full h-full object-cover"/>
        </div>
        <div className="flex-1">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#4a2810] mb-2">{service.name}</h2>
          {service.isSale ? (
            <div className="space-y-1">
              <p className="text-xs font-semibold text-amber-600 mb-2 uppercase tracking-wider">Limited Time Sale</p>
              <p className="text-base font-semibold text-gray-400 line-through mb-1">{service.saleOld}</p>
              <p className="text-lg font-semibold text-[#663916] leading-relaxed">{service.saleNew}</p>
            </div>
          ) : (
            <p className="text-lg font-semibold text-[#663916] leading-relaxed">{service.price}</p>
          )}
        </div>
      </div>

      {service.body.map((para, i) => (
        <p key={i} className="text-base leading-[1.85] text-[#5a3a20] font-light mb-5">{para}</p>
      ))}

      {service.subheadings.map((block, i) => (
        <div key={i}>
          <h3 className="text-base font-semibold text-[#4a2810] mt-7 mb-3">{block.title}</h3>
          <p className="text-base leading-[1.85] text-[#5a3a20] font-light mb-5">{block.text}</p>
        </div>
      ))}

      <div className="bg-[#F8F0E8] border-l-4 border-[#004C60] pl-5 py-4 pr-5 rounded-r-xl text-sm text-[#5a3a20] font-light leading-relaxed my-6">
        {service.note}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 items-center">
        <a
          href={service.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block font-['Poppins'] text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 duration-200 ${
            service.cta.variant === 'teal'
              ? 'bg-[#004C60] text-[#EED7BF] hover:bg-[#003a4a]'
              : 'bg-[#663916] text-[#EED7BF] hover:bg-[#4a2810]'
          }`}
        >
          {service.cta.label}
        </a>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-[#5a3a20] text-sm font-medium hover:text-[#663916] transition-colors"
        >
          <BackIcon /> Back to services
        </button>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    document.body.style.transition = 'opacity 0.4s ease'
    document.body.style.opacity = '1'
  }, [])

  const toggle = (id) => {
    setActiveId(prev => (prev === id ? null : id))
    if (activeId !== id) {
      setTimeout(() => {
        document.getElementById(`exp-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }

  const close = (id) => {
    setActiveId(null)
    document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: '#F8F0E8', color: '#2a1a0e', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: '#4a2810', padding: '80px 40px', textAlign: 'center' }}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#EED7BF]/70 hover:text-[#EED7BF] text-sm font-medium mb-8 transition-colors"
        >
          <BackIcon /> Back to main site
        </Link>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 800, color: '#EED7BF', marginBottom: 16 }}>
          Our Services
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(238,215,191,0.7)', fontWeight: 300, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
          Every service at Solace Wave Therapy is built around your story, your needs and your community.
        </p>
      </div>

      {/* Services section */}
      <div style={{ padding: '80px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#663916', marginBottom: 12, textAlign: 'center' }}>
          What we offer
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#4a2810', textAlign: 'center', marginBottom: 16 }}>
          Care built for all of who you are
        </h2>
        <p style={{ fontSize: 16, color: '#5a3a20', fontWeight: 300, textAlign: 'center', maxWidth: 560, margin: '0 auto 56px', lineHeight: 1.7 }}>
          Whether you are beginning your healing journey or looking for something specific, we have a path for you.
        </p>

        {/* Insurance Banner */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, background: '#FCFCFC', border: '1px solid rgba(0,76,96,0.2)', borderRadius: 20, padding: '28px 32px', marginBottom: 56, textAlign: 'center', maxWidth: 600, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#004C60" strokeWidth="2">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#004C60' }}>Extended Health Benefits</span>
          </div>
          <p style={{ fontSize: 15, color: '#5a3a20', fontWeight: 300, lineHeight: 1.6, maxWidth: 480 }}>Our services may be covered through your extended health insurance benefits. Book a free consultation and we'll help you figure out what's covered.</p>
          <a href="https://calendly.com/solacewavetherapy/consultation" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#663916', fontSize: 13, fontWeight: 600, padding: '9px 22px', borderRadius: 100, border: '1.5px solid #663916', cursor: 'pointer', transition: 'all 0.3s ease', textDecoration: 'none', display: 'inline-block' }}>
            Book a Free Consultation
          </a>
        </div>

        {/* Expanded panels */}
        {services.map(service => (
          activeId === service.id && (
            <div key={service.id} id={`exp-${service.id}`}>
              <ExpandedPanel service={service} onClose={() => close(service.id)} />
            </div>
          )
        ))}

        {/* Service cards grid */}
        <div id="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 80 }}>
          {services.map(service => (
            <div
              key={service.id}
              onClick={() => toggle(service.id)}
              style={{
                background: '#FCFCFC',
                borderRadius: 24,
                overflow: 'hidden',
                border: '1px solid rgba(102,57,22,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              className="hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 32px 0' }}>
                <div style={{ width: 200, height: 200, borderRadius: '50%', overflow: 'hidden', border: '4px solid #EED7BF', flexShrink: 0 }}>
                  <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
              </div>
              <div style={{ padding: '20px 28px 28px', textAlign: 'center' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#4a2810', marginBottom: 8 }}>{service.name}</p>
                {service.isSale ? (
                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 11, fontWeight: 600, color: '#D97706', marginBottom: 6, letterSpacing: 0.5, textTransform: 'uppercase' }}>Limited Time Sale</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#999', marginBottom: 4, textDecoration: 'line-through' }}>{service.saleOld}</p>
                    <p style={{ fontSize: 16, fontWeight: 600, color: '#663916' }}>{service.saleNew}</p>
                  </div>
                ) : (
                  <p style={{ fontSize: 16, fontWeight: 600, color: '#663916', marginBottom: 12 }}>{service.cardPrice}</p>
                )}
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#5a3a20', fontWeight: 300, marginBottom: 20 }}>{service.preview}</p>
                <span style={{
                  background: '#F8F0E8',
                  color: '#663916',
                  fontSize: 13,
                  fontWeight: 600,
                  padding: '10px 24px',
                  borderRadius: 100,
                  border: '1px solid rgba(102,57,22,0.2)',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                }}>
                  {activeId === service.id ? 'Close ↑' : 'Learn More'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
