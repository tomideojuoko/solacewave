const items = [
  'Culturally Affirming', 'Anti-Oppressive Practice', 'Trauma-Informed Care',
  'Diaspora Community', 'Black Mental Health', 'African & Caribbean Heritage',
  'Virtual & In-Person', 'Identity & Belonging',
]

export default function MarqueeBanner() {
  const doubled = [...items, ...items]
  return (
    <section className="bg-brown py-4 overflow-hidden" data-anim>
      <div className="marquee-container">
        <div className="marquee-track text-white/65 text-sm font-medium">
          {doubled.map((item, i) => (
            <span key={i} className="mx-8">✦ {item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
