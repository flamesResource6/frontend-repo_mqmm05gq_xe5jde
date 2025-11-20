import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Gauge, Cpu } from 'lucide-react'

function Stat({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-2xl border border-fuchsia-400/20 bg-white/5 backdrop-blur-xl p-5"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl p-2 bg-gradient-to-br from-[#7b2ff7]/20 to-[#c026d3]/20 text-fuchsia-200">
          <Icon size={18} />
        </div>
        <div>
          <h4 className="font-semibold text-white">{title}</h4>
          <p className="text-sm text-fuchsia-100/90">{desc}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-fuchsia-400/0 group-hover:ring-fuchsia-400/50 transition duration-300" />
    </motion.div>
  )
}

function Plan({ name, price, features, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-2xl border border-fuchsia-400/20 bg-white/5 backdrop-blur-xl p-6"
    >
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="mt-1 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7b2ff7] to-[#c026d3]">{price} zł</p>
      <ul className="mt-4 space-y-2 text-sm text-fuchsia-100/90 list-disc list-inside">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button className="mt-5 relative inline-flex items-center justify-center px-4 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-[#7b2ff7] to-[#c026d3]">
        Zamów plan
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-fuchsia-400/40" />
      </button>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-fuchsia-400/0 group-hover:ring-fuchsia-400/50 transition duration-300" />
    </motion.article>
  )
}

export default function BotDiscord() {
  return (
    <section id="bot" className="relative py-20 sm:py-28">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Bot Discord</h2>
            <p className="mt-2 text-fuchsia-100/90">Stabilny, szybki i dopasowany do Twojej społeczności.</p>
          </div>
          <a href="#bot-calc" className="inline-flex items-center gap-2 text-sm text-fuchsia-100 hover:text-white">
            <span>Kalkulator wyceny</span>
            <Gauge size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Stat icon={Sparkles} title="Personalizacja" desc="Komendy i flows skrojone pod serwer." />
          <Stat icon={ShieldCheck} title="Bezpieczeństwo" desc="Anty-raid, logi, uprawnienia." delay={0.06} />
          <Stat icon={Cpu} title="Integracje" desc="API, panele i webhooki." delay={0.12} />
          <Stat icon={Gauge} title="Wydajność" desc="Niska latencja, wysoka niezawodność." delay={0.18} />
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Plan name="Starter" price={800} features={["Podstawowe komendy", "Muzyka lub moderacja", "Podstawowe logi"]} />
          <Plan name="Advanced" price={1600} features={["Moderacja + automatyzacje", "System ticketów", "Rozszerzone logi"]} delay={0.06} />
          <Plan name="Enterprise" price={3200} features={["Panel www", "Ekonomia + leveling", "Zaaw. integracje"]} delay={0.12} />
        </div>
      </div>
    </section>
  )
}
