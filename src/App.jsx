import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Shop from './components/Shop'
import BotDiscord from './components/BotDiscord'
import BotCalculator from './components/BotCalculator'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0b0614] via-[#0e071a] to-[#0b0614] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(123,47,247,0.15),transparent_60%)]" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <Shop />
        <BotDiscord />
        <BotCalculator />
        <WhyUs />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
