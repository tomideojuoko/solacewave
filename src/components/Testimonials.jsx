const quotes = [
  {
    bg: 'bg-white/10 backdrop-blur-sm border border-white/20',
    quoteFill: '#EED7BF',
    text: '"For the first time I didn\'t feel like I had to justify my cultural background or explain why my family situation is complicated. I was just understood."',
    initials: 'AO',
    avatarBg: 'bg-terra/50',
    name: 'A.O.',
    detail: 'Nigerian-Canadian · Individual Therapy',
    nameColor: 'text-white',
    detailColor: 'text-white/45',
    textColor: 'text-white/80',
  },
  {
    bg: 'bg-terra/75',
    quoteFill: 'white',
    text: '"I grew up thinking therapy wasn\'t for people like us. Solace Wave changed that completely. My therapist made me feel safe, seen, and genuinely cared for every single session."',
    initials: 'MA',
    avatarBg: 'bg-white/20',
    name: 'M.A.',
    detail: 'Jamaican-Canadian · Group Sessions',
    nameColor: 'text-white',
    detailColor: 'text-white/55',
    textColor: 'text-white/90',
  },
  {
    bg: 'bg-white/10 backdrop-blur-sm border border-white/20',
    quoteFill: '#EED7BF',
    text: '"Working through my parents\' expectations and my own identity at the same time felt impossible until I started here. My therapist helped me find my own path forward."',
    initials: 'KB',
    avatarBg: 'bg-brown/40',
    name: 'K.B.',
    detail: 'Ghanaian-British · Individual Therapy',
    nameColor: 'text-white',
    detailColor: 'text-white/45',
    textColor: 'text-white/80',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-brown">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-sand uppercase">What Clients Say</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white text-balance">Real words from real healing</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6" data-anim-group>
          {quotes.map((q, i) => (
            <div key={i} className={`rounded-3xl p-8 space-y-6 ${q.bg}`}>
              <svg width="28" height="20" viewBox="0 0 28 20" fill={q.quoteFill} className="opacity-75">
                <path d="M0 20V12.727C0 5.697 3.879 1.394 11.636 0l1.091 2.364C10.01 3.364 8.485 5.697 8.485 8.485H14V20H0zm14 0V12.727C14 5.697 17.879 1.394 25.636 0l1.091 2.364c-2.717 1-4.242 3.333-4.242 6.121H28V20H14z"/>
              </svg>
              <p className={`leading-relaxed text-sm ${q.textColor}`}>{q.text}</p>
              <div className={`flex items-center gap-3 pt-1 border-t border-white/10`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${q.avatarBg}`}>{q.initials}</div>
                <div>
                  <p className={`text-sm font-medium ${q.nameColor}`}>{q.name}</p>
                  <p className={`text-xs ${q.detailColor}`}>{q.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
