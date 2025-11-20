import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Shop from './components/Shop'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0b0614] via-[#0e071a] to-[#0b0614] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(123,47,247,0.15),transparent_60%)]" />

      <header className="relative z-10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7b2ff7] to-[#c026d3] shadow-[0_0_20px_rgba(192,38,211,0.35)]" />
            <span className="font-semibold">Flames Studio</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-fuchsia-100/80">
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#shop" className="hover:text-white">Sklep</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <Shop />
        <WhyUs />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
