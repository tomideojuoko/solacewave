import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import About from './components/About'
import FounderQuote from './components/FounderQuote'
import WhoWeServe from './components/WhoWeServe'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Approach from './components/Approach'
import Team from './components/Team'
import VideoSection from './components/VideoSection'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import ServicesPage from './pages/ServicesPage'
import TeamsPage from './pages/TeamsPage'
import LegalPage from './pages/LegalPage'
import BookPage from './pages/BookPage'

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
        <FounderQuote />
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
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default function App() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // Handle in-site links in one place: "#section" links scroll smoothly
  // (going back to the homepage first if needed), and "/page" links switch
  // pages without a full reload.
  useEffect(() => {
    function onClick(e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest('a[href]')
      if (!a || a.target === '_blank') return
      const href = a.getAttribute('href')

      if (href === '#') { e.preventDefault(); return }

      if (/^#[A-Za-z][\w-]*$/.test(href)) {
        e.preventDefault()
        const id = href.slice(1)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else {
          navigate('/')
          setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 400)
        }
        return
      }

      if (/^\/[\w-]*$/.test(href)) {
        e.preventDefault()
        navigate(href)
        window.scrollTo(0, 0)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  // Every new page starts at the top. Section links ("#about") scroll
  // to their section after this runs.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // The page starts hidden (index.css) so the homepage can fade in.
  // Other pages have no intro, so show them straight away.
  useEffect(() => {
    if (pathname !== '/') document.body.style.opacity = '1'
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      {/* The homepage has its own menu; every other page gets a solid one */}
      {!isHome && <Navbar solid />}
      <div className={isHome ? '' : 'pt-[70px] md:pt-[108px]'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamsPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </div>
    </>
  )
}
