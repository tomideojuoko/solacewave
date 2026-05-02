import Header from './components/Header'
import Hero from './components/Hero'
import GetInTouch from './components/GetInTouch'
import CoachInPocket from './components/CoachInPocket'
import HowItWorks from './components/HowItWorks'
import WhyChoose from './components/WhyChoose'
import TherapyApproaches from './components/TherapyApproaches'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GetInTouch />
        <CoachInPocket />
        <HowItWorks />
        <WhyChoose />
        <TherapyApproaches />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
