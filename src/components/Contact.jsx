import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            O nas
          </motion.h2>
          <p className="text-fuchsia-100/90">
            Jesteśmy zespołem, który łączy design, technologię i biznes. Tworzymy szybkie strony i skalowalne boty Discord dopasowane do Twoich potrzeb.
          </p>
          <a href="https://discord.com" target="_blank" className="inline-block mt-6 text-fuchsia-200 underline underline-offset-4">Dołącz na Discord</a>
          <div className="mt-8 rounded-3xl overflow-hidden border border-fuchsia-400/20 bg-white/5 backdrop-blur-xl">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" alt="mapa" className="w-full h-56 object-cover" />
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-fuchsia-400/20 p-6">
          <h3 className="text-xl font-semibold text-white">Kontakt</h3>
          <form className="mt-4 grid grid-cols-1 gap-4">
            <input className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-fuchsia-200/50 border border-fuchsia-400/20 focus:outline-none" placeholder="Imię" />
            <input className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-fuchsia-200/50 border border-fuchsia-400/20 focus:outline-none" placeholder="Email" />
            <textarea className="w-full h-32 rounded-xl bg-white/10 px-4 py-3 text-white placeholder-fuchsia-200/50 border border-fuchsia-400/20 focus:outline-none" placeholder="Wiadomość" />
            <button type="button" className="relative inline-flex items-center justify-center px-5 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#7b2ff7] to-[#c026d3]">
              Wyślij
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-fuchsia-400/40" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
