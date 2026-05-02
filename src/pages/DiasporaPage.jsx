import { useEffect } from 'react'
import DiasporaNavbar from '../components/diaspora/DiasporaNavbar'
import DiasporaHero   from '../components/diaspora/DiasporaHero'
import DiasporaFAQ    from '../components/diaspora/DiasporaFAQ'
import DiasporaContact from '../components/diaspora/DiasporaContact'
import '../styles/diaspora.css'

// ── Simple stateless sections ────────────────────────────────

function Marquee() {
  const items = [
    'Culturally Affirming', 'Anti-Oppressive Practice', 'Trauma-Informed Care',
    'Diaspora Community', 'Black Mental Health', 'African & Caribbean Heritage',
    'Virtual & In-Person', 'Identity & Belonging',
  ]
  const repeated = [...items, ...items]
  return (
    <section className="bg-teal-deep py-4 overflow-hidden" data-anim>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="d-marquee-track text-white/65 text-sm font-medium">
          {repeated.map((t, i) => <span key={i} className="mx-8">✦ {t}</span>)}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Stat cards */}
          <div className="relative" data-anim>
            <div className="bg-teal-pale rounded-3xl p-8 border border-teal-light/20 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-deep rounded-2xl p-6 text-white">
                  <p className="font-serif text-3xl font-semibold">1 in 5</p>
                  <p className="text-white/65 text-sm mt-2 leading-snug">Black Canadians experience a mental health challenge each year</p>
                </div>
                <div className="bg-terra rounded-2xl p-6 text-white">
                  <p className="font-serif text-3xl font-semibold">3×</p>
                  <p className="text-white/65 text-sm mt-2 leading-snug">Less likely to access care due to systemic and cultural barriers</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-sand">
                <p className="font-serif text-lg font-medium text-teal-deep mb-2">
                  "Therapy isn't for people like us" — that ends here.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  We're dismantling the stigma and rebuilding access to quality, culturally-aware mental health care for our communities.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20 d-dot-grid rounded-2xl" />
          </div>

          {/* Text */}
          <div className="space-y-6" data-anim style={{ transitionDelay: '0.15s' }}>
            <span className="text-xs font-semibold tracking-widest text-terra uppercase">About Our Work</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight" style={{ textWrap: 'balance' }}>
              Therapy that holds your <em className="not-italic text-teal-mid">whole</em> story
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Growing up between cultures means navigating spaces that were never designed for you. The stress of immigration, the weight of generational expectations, the quiet grief of "home" — these are real, and they deserve real attention.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              At Solace Wave Therapy, we offer mental health care rooted in cultural humility, trauma-informed practice, and deep respect for who you are and where you come from. No need to translate yourself.
            </p>
            <a href="#services" className="inline-flex items-center gap-2 text-teal-deep font-semibold hover:gap-3 transition-all duration-150 text-base">
              Explore our services
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhoWeServe() {
  const cards = [
    { bg: 'bg-cream border border-sand', icon: '🌍', title: "You're navigating two worlds", titleCls: 'text-teal-deep', text: "You're a first- or second-generation immigrant managing cultural expectations at home while assimilating outside of it — and the tension is exhausting.", textCls: 'text-muted' },
    { bg: 'bg-teal-deep', icon: '💬', title: "You're tired of explaining yourself", titleCls: 'text-white', text: "You've tried therapy before but spent half the session giving cultural context. You need a clinician who already understands — so the real work can begin.", textCls: 'text-white/65' },
    { bg: 'bg-cream border border-sand', icon: '🌱', title: "You're ready to heal — on your terms", titleCls: 'text-teal-deep', text: "Whether it's anxiety, depression, grief, identity, trauma, or relationship strain — you're ready to work through it with someone you can actually trust.", textCls: 'text-muted' },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">Who We Serve</span>
          <h2 className="font-serif text-4xl md:text-5xl" style={{ textWrap: 'balance' }}>You belong here if…</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6" data-anim-group>
          {cards.map(c => (
            <div key={c.title} className={`${c.bg} rounded-3xl p-8 space-y-4 d-card-hover`}>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">{c.icon}</div>
              <h3 className={`font-serif text-xl font-semibold ${c.titleCls}`}>{c.title}</h3>
              <p className={`${c.textCls} leading-relaxed text-sm`}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const cards = [
    {
      bg: 'bg-teal-pale border border-teal-light/20',
      iconStroke: '#1a5c5c',
      badge: <span className="inline-block text-xs font-semibold text-teal-deep bg-teal-deep/10 px-2.5 py-1 rounded-full">Free</span>,
      title: '15-Min Free Consult',
      titleCls: 'text-teal-deep',
      text: 'A no-pressure intro call. Share what\'s on your mind and see if we\'re the right fit — zero commitment.',
      linkCls: 'text-teal-deep',
      iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    },
    {
      bg: 'bg-white border border-sand',
      iconStroke: '#b5623a',
      title: 'Individual Therapy',
      text: 'One-on-one sessions for anxiety, depression, identity, trauma, and life transitions — in a space built entirely for you.',
      linkCls: 'text-terra',
      iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    },
    {
      bg: 'bg-white border border-sand',
      iconStroke: '#d4944a',
      title: 'Community Group Sessions',
      text: 'Facilitated group therapy with others from shared backgrounds. Healing in community — you are not alone in this.',
      linkCls: 'text-gold',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    },
    {
      bg: 'bg-teal-deep',
      iconStroke: 'white',
      title: 'Couples & Relationship Therapy',
      titleCls: 'text-white',
      text: 'Navigate cultural differences, communication breakdowns, and relational stress with a therapist who understands your context.',
      textCls: 'text-white/65',
      linkCls: 'text-gold',
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    },
  ]

  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest text-terra uppercase">Services</span>
            <h2 className="font-serif text-4xl md:text-5xl max-w-md" style={{ textWrap: 'balance' }}>Support shaped around you</h2>
          </div>
          <a href="#book" className="shrink-0 text-teal-deep font-semibold text-sm hover:underline">Book a session →</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" data-anim-group>
          {cards.map(c => (
            <div key={c.title} className={`${c.bg} rounded-3xl p-7 space-y-4 d-card-hover`}>
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke={c.iconStroke} strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={c.iconPath} />
                </svg>
              </div>
              {c.badge}
              <h3 className={`font-serif text-lg font-semibold ${c.titleCls ?? ''}`}>{c.title}</h3>
              <p className={`text-sm leading-relaxed ${c.textCls ?? 'text-muted'}`}>{c.text}</p>
              <a href="#book" className={`text-sm font-semibold hover:underline ${c.linkCls}`}>Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: '1', bg: 'bg-teal-deep shadow-teal-deep/25', title: 'Book a Free Call', text: 'A 15-minute, no-pressure chat to share what you\'re going through and see if we\'re the right fit.' },
    { n: '2', bg: 'bg-terra shadow-terra/25',         title: 'Initial Assessment', text: 'A deeper first session — we listen to your story, understand your goals, and map what healing looks like for you.' },
    { n: '3', bg: 'bg-gold shadow-gold/25',           title: 'Begin Your Therapy', text: 'We build a personalised care plan and get to work — virtual or in-person, at a pace that works for you.' },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 max-w-xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">Your Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl" style={{ textWrap: 'balance' }}>Three steps to start feeling better</h2>
          <p className="text-muted">We've made it as simple as possible to take the first step.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative" data-anim-group>
          {steps.map((s, i) => (
            <div key={s.n} className={`relative text-center space-y-5 ${i < 2 ? 'd-step-line' : ''}`}>
              <div className={`w-14 h-14 rounded-full ${s.bg} text-white font-serif text-xl font-semibold flex items-center justify-center mx-auto shadow-lg`}>
                {s.n}
              </div>
              <h3 className="font-serif text-xl font-semibold">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <a href="#book" className="inline-flex items-center gap-2 bg-teal-deep text-white font-semibold px-10 py-4 rounded-full hover:bg-teal-mid transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
            Start with a Free Call
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function Approach() {
  const modalities = ['Cognitive Behavioural Therapy (CBT)', 'Narrative Therapy', 'Solution-Focused Brief Therapy (SFBT)', 'Somatic & Body-Centred Approaches']
  return (
    <section id="approach" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">Our Approach</span>
          <h2 className="font-serif text-4xl md:text-5xl" style={{ textWrap: 'balance' }}>Rooted in culture. Grounded in evidence.</h2>
        </div>

        {/* Block A */}
        <div className="grid md:grid-cols-2 gap-16 items-center" data-anim>
          <div className="bg-teal-deep rounded-3xl p-10 flex flex-col justify-between min-h-72 space-y-8">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="font-serif text-2xl text-white leading-snug">"Your culture is not a barrier to healing — it's the pathway."</p>
              <p className="text-white/45 text-sm mt-4">— Solace Wave Therapy</p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold">Anti-Oppressive &amp; Trauma-Informed</h3>
            <p className="text-muted leading-relaxed">We practice through an anti-oppressive lens — acknowledging how racism, colonialism, and systemic inequality shape your mental health. We don't pathologise survival. We honour it.</p>
            <ul className="space-y-3 pt-2">
              {modalities.map(m => (
                <li key={m} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-pale flex items-center justify-center shrink-0">
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#1a5c5c" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-muted text-sm">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Block B */}
        <div className="grid md:grid-cols-2 gap-16 items-center" data-anim style={{ transitionDelay: '0.1s' }}>
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold">Virtual-first. Flexible. Accessible.</h3>
            <p className="text-muted leading-relaxed">We know life is busy. That's why sessions are virtual-first — available wherever you are in Canada. For those in the Toronto area, in-person sessions are also available.</p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[['Virtual', 'Across Canada', 'text-teal-deep'], ['In-Person', 'Toronto, ON', 'text-terra']].map(([v, s, cls]) => (
                <div key={v} className="bg-white rounded-2xl p-5 border border-sand">
                  <p className={`font-serif text-xl font-semibold ${cls}`}>{v}</p>
                  <p className="text-muted text-sm mt-1">{s}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-sand rounded-3xl p-10 flex items-center justify-center min-h-64">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-teal-deep flex items-center justify-center mx-auto">
                <svg width="38" height="38" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-serif text-xl font-semibold text-teal-deep">Book from anywhere</p>
              <p className="text-muted text-sm">Evenings &amp; weekends available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const tags = ['Diaspora Expertise', 'Trauma-Informed', 'CBT · Narrative · SFBT', 'CRPO Registered']
  const tagCls = ['bg-teal-pale text-teal-deep', 'bg-terra/10 text-terra', 'bg-gold/10 text-charcoal', 'bg-sand text-charcoal']
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">Our Team</span>
          <h2 className="font-serif text-4xl md:text-5xl" style={{ textWrap: 'balance' }}>Meet your therapist</h2>
          <p className="text-muted max-w-lg mx-auto">Clinicians who understand your world and are committed to your healing.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-cream rounded-3xl p-8 md:p-12 border border-sand flex flex-col md:flex-row gap-10 items-start" data-anim>
            <div className="w-44 h-44 rounded-2xl bg-teal-deep shrink-0 flex items-center justify-center">
              <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={0.9}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-semibold">[Your Name Here]</h3>
                <p className="text-terra text-sm font-medium mt-1">Registered Psychotherapist (RP) · Founder</p>
              </div>
              <p className="text-muted leading-relaxed">A culturally-informed therapist and advocate for diaspora mental health. With deep understanding of the immigrant experience, intergenerational trauma, and the nuances of living between cultures — bringing warmth, expertise, and lived experience to every session.</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {tags.map((t, i) => (
                  <span key={t} className={`text-xs font-medium px-3 py-1 rounded-full ${tagCls[i]}`}>{t}</span>
                ))}
              </div>
              <a href="#book" className="inline-flex items-center gap-2 bg-teal-deep text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-mid transition-all text-sm mt-1">
                Book a session →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    { quote: '"For the first time I didn\'t feel like I had to justify my cultural background or explain why my family situation is complicated. I was just understood."', name: 'A.O.', sub: 'Nigerian-Canadian · Individual Therapy', avatarBg: 'bg-terra/50', initials: 'AO', cardCls: 'bg-white/10 border border-white/20' },
    { quote: '"I grew up thinking therapy wasn\'t for people like us. Solace Wave changed that completely. My therapist made me feel safe, seen, and genuinely cared for every single session."', name: 'M.A.', sub: 'Jamaican-Canadian · Group Sessions', avatarBg: 'bg-white/20', initials: 'MA', cardCls: 'bg-terra/75' },
    { quote: '"Working through my parents\' expectations and my own identity at the same time felt impossible — until I started here. My therapist helped me find my own path forward."', name: 'K.B.', sub: 'Ghanaian-British · Individual Therapy', avatarBg: 'bg-gold/40', initials: 'KB', cardCls: 'bg-white/10 border border-white/20' },
  ]
  return (
    <section className="py-24 bg-teal-deep">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">What Clients Say</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white" style={{ textWrap: 'balance' }}>Real words from real healing</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6" data-anim-group>
          {items.map(t => (
            <div key={t.name} className={`${t.cardCls} rounded-3xl p-8 space-y-6`}>
              <svg width="28" height="20" viewBox="0 0 28 20" fill="#d4944a" className="opacity-75">
                <path d="M0 20V12.727C0 5.697 3.879 1.394 11.636 0l1.091 2.364C10.01 3.364 8.485 5.697 8.485 8.485H14V20H0zm14 0V12.727C14 5.697 17.879 1.394 25.636 0l1.091 2.364c-2.717 1-4.242 3.333-4.242 6.121H28V20H14z" />
              </svg>
              <p className="text-white/80 leading-relaxed text-sm">{t.quote}</p>
              <div className="flex items-center gap-3 pt-1 border-t border-white/10">
                <div className={`w-9 h-9 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{t.initials}</div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-white/45 text-xs">{t.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTABanner() {
  return (
    <section id="book" className="py-24 bg-terra">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8" data-anim>
        <span className="text-xs font-semibold tracking-widest text-white/55 uppercase">Take The First Step</span>
        <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight" style={{ textWrap: 'balance' }}>
          You deserve care that<br />truly <em className="not-italic text-gold">understands you</em>
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
          Book your free 15-minute consultation today. No commitment, no pressure — just a warm, honest conversation to start.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a href="mailto:hello@solacewavetherapy.com" className="inline-flex items-center gap-2 bg-white text-terra font-bold px-10 py-4 rounded-full hover:opacity-95 transition-all text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
            Book Free Call Now →
          </a>
          <a href="tel:" className="text-white/65 text-sm hover:text-white transition-colors font-medium">or call us directly</a>
        </div>
      </div>
    </section>
  )
}

function DiasporaFooter() {
  const quickLinks = [
    { href: '#about', label: 'About Us' }, { href: '#services', label: 'Services' },
    { href: '#approach', label: 'Our Approach' }, { href: '#team', label: 'Our Team' },
    { href: '#book', label: 'Book a Session' },
  ]
  const services = [
    { href: '#services', label: 'Individual Therapy' }, { href: '#services', label: 'Couples Therapy' },
    { href: '#services', label: 'Group Sessions' }, { href: '#book', label: 'Free Consultation' },
  ]
  const badges = ['CRPO Registered', 'Trauma-Informed', 'Psychology Today', 'Virtual · Toronto']

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2 space-y-5">
            <div>
              <span className="font-serif text-lg font-semibold">Solace Wave<span className="text-terra"> Therapy</span></span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Culturally affirming mental health care for Black, African, and Caribbean diaspora communities. Healing that speaks your language.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(l => <li key={l.label}><a href={l.href} className="text-white/55 hover:text-white text-sm transition-colors">{l.label}</a></li>)}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Services</h4>
            <ul className="space-y-3">
              {services.map(l => <li key={l.label}><a href={l.href} className="text-white/55 hover:text-white text-sm transition-colors">{l.label}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/35 text-xs">© 2025 Solace Wave Therapy. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            {badges.map(b => (
              <span key={b} className="text-white/50 text-xs px-3 py-1.5 rounded-full border border-white/10">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ── Page ────────────────────────────────────────────────────

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'
const wait = ms => new Promise(r => setTimeout(r, ms))

export default function DiasporaPage() {
  useEffect(() => {
    const root = document.getElementById('diaspora-root')

    async function runIntro() {
      // 1. Reveal the page
      root.style.transition = 'opacity 0.4s ease'
      root.style.opacity = '1'

      // 2. Nav slides down
      await wait(100)
      document.getElementById('d-navbar')?.classList.add('do-nav')

      // 3. Headline lines reveal upward, staggered
      await wait(350)
      ;['rl1', 'rl2'].forEach((id, i) => {
        const el = document.getElementById(id)
        if (!el) return
        el.style.animationDelay = `${i * 175}ms`
        el.classList.add('do-line')
      })

      // 4. Sub-line fades + rises
      await wait(780)
      const sub = document.getElementById('hero-sub')
      if (sub) {
        sub.style.transition = `opacity 0.9s ${EASE}, transform 0.9s ${EASE}`
        sub.style.transform = 'translateY(22px)'
        requestAnimationFrame(() => requestAnimationFrame(() => {
          sub.style.opacity = '1'
          sub.style.transform = 'translateY(0)'
        }))
      }

      // 5. Trust stats
      await wait(180)
      const stats = document.getElementById('hero-stats')
      if (stats) {
        stats.style.transition = `opacity 0.9s ${EASE}, transform 0.9s ${EASE}`
        stats.style.transform = 'translateY(22px)'
        requestAnimationFrame(() => requestAnimationFrame(() => {
          stats.style.opacity = '1'
          stats.style.transform = 'translateY(0)'
        }))
      }
    }

    runIntro()

    // Scroll observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('#diaspora-root [data-anim], #diaspora-root [data-anim-group]')
      .forEach(el => observer.observe(el))

    return () => {
      observer.disconnect()
      if (root) root.style.opacity = '1'
    }
  }, [])

  return (
    <div id="diaspora-root" className="bg-cream text-charcoal antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <DiasporaNavbar />
      <DiasporaHero />
      <Marquee />
      <About />
      <WhoWeServe />
      <Services />
      <HowItWorks />
      <Approach />
      <Team />
      <Testimonials />
      <DiasporaFAQ />
      <CTABanner />
      <DiasporaContact />
      <DiasporaFooter />
    </div>
  )
}
