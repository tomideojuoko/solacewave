import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import About from './components/About'
import WhoWeServe from './components/WhoWeServe'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Approach from './components/Approach'
import Team from './components/Team'
import VideoSection from './components/VideoSection'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import SMSOptIn from './components/SMSOptIn'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import ServicesPage from './pages/ServicesPage'
import TeamsPage from './pages/TeamsPage'
import LegalPage from './pages/LegalPage'

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'
const wait = ms => new Promise(r => setTimeout(r, ms))

function HomePage() {
  useEffect(() => {
    async function runIntro() {
      document.body.style.transition = 'opacity 0.4s ease'
      document.body.style.opacity = '1'

      await wait(100)
      document.getElementById('navbar')?.classList.add('do-nav')

      await wait(350)
      ;['rl1', 'rl2'].forEach((id, i) => {
        const el = document.getElementById(id)
        if (!el) return
        el.style.animationDelay = `${i * 175}ms`
        el.classList.add('do-line')
      })

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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('[data-anim], [data-anim-group]').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-cream font-sans text-charcoal antialiased">
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <WhoWeServe />
        <Services />
        <HowItWorks />
        <VideoSection />
        <Approach />
        <Team />
        <Testimonials />
        <FAQ />
        <CTA />
        <SMSOptIn />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/team" element={<TeamsPage />} />
      <Route path="/legal" element={<LegalPage />} />
    </Routes>
  )
}
