import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1026] via-[#120a1e] to-[#0b0614]" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient aura overlay to enhance purple/pink vibe */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,47,247,0.25)_0%,rgba(192,38,211,0.2)_35%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="backdrop-blur-2xl/ bg-white/5 border border-fuchsia-400/20 shadow-[0_0_60px_rgba(192,38,211,0.2)] rounded-3xl p-10 sm:p-14 text-center"
          style={{ backdropFilter: 'blur(22px)' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#7b2ff7] via-fuchsia-500 to-pink-500"
          >
            Tworzymy nowoczesne strony WWW i zaawansowane boty Discord
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-5 text-base sm:text-lg text-fuchsia-100/90"
          >
            Szybko, profesjonalnie, w pełni dopasowane do Ciebie.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#shop" className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#7b2ff7] to-[#c026d3] shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_35px_rgba(192,38,211,0.6)] transition-shadow">
              Zobacz ofertę
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-fuchsia-400/40" />
            </a>
            <a href="#contact" className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-fuchsia-100 bg-white/5 hover:bg-white/10 transition-colors">
              Skontaktuj się
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-fuchsia-400/30" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Neon border accents */}
      <div className="pointer-events-none absolute -inset-px rounded-[2rem] border border-fuchsia-400/20" />
    </section>
  )
}

export default Hero
