const cards = [
  {
    icon: '🌍',
    bg: 'bg-brown',
    titleClass: 'text-sand',
    textClass: 'text-sand/65',
    title: "You're navigating two worlds",
    text: "You're a first- or second-generation immigrant managing cultural expectations at home while assimilating outside of it and the tension is exhausting.",
  },
  {
    icon: '💬',
    bg: 'bg-brown',
    titleClass: 'text-sand',
    textClass: 'text-sand/65',
    title: "You're tired of explaining yourself",
    text: "You've tried therapy before but spent half the session educating your therapist instead of healing. You need a clinician or coach who already understands you so the real work can begin.",
  },
  {
    icon: '🌱',
    bg: 'bg-brown',
    titleClass: 'text-sand',
    textClass: 'text-sand/65',
    title: "You're ready to heal on your terms",
    text: "Whether it's anxiety, depression, grief, identity, trauma, or relationship strain you're ready to work through it with someone you can actually trust.",
  },
]

export default function WhoWeServe() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest text-terra uppercase">Who We Serve</span>
          <h2 className="font-serif text-4xl md:text-5xl text-balance text-brown">This was built for you because…</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6" data-anim-group>
          {cards.map((card, i) => (
            <div key={i} className={`rounded-3xl p-8 space-y-4 card-hover ${card.bg}`}>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">{card.icon}</div>
              <h3 className={`font-serif text-xl font-semibold ${card.titleClass}`}>{card.title}</h3>
              <p className={`leading-relaxed text-sm ${card.textClass}`}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
