import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Modules from './components/Modules'
import Architecture from './components/Architecture'
import ApiSection from './components/ApiSection'
import Comparison from './components/Comparison'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative bg-app-bg text-app-text">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <Modules />
        <ApiSection />
        <Comparison />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
