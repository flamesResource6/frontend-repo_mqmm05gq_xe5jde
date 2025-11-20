import { useState } from 'react'
import { motion } from 'framer-motion'

export default function BotCalculator() {
  const [adminPanel, setAdminPanel] = useState(false)
  const [logs, setLogs] = useState(true)
  const [economy, setEconomy] = useState(false)
  const [leveling, setLeveling] = useState(false)
  const [commands, setCommands] = useState(10)

  const base = 800
  const price = base + (adminPanel ? 600 : 0) + (logs ? 200 : 0) + (economy ? 500 : 0) + (leveling ? 400 : 0) + commands * 15

  return (
    <section id="bot-calc" className="relative py-20 sm:py-28">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Kalkulator bota Discord</h2>
          <p className="mt-2 text-fuchsia-100/90">Skonfiguruj funkcje i zobacz szacunkową cenę w czasie rzeczywistym.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-fuchsia-400/20 p-6">
            <div className="space-y-3">
              <label className="flex items-center justify-between rounded-xl bg-white/10 p-3 border border-fuchsia-400/20">
                <span className="text-fuchsia-100">Panel administracyjny</span>
                <input type="checkbox" checked={adminPanel} onChange={e => setAdminPanel(e.target.checked)} />
              </label>
              <label className="flex items-center justify-between rounded-xl bg-white/10 p-3 border border-fuchsia-400/20">
                <span className="text-fuchsia-100">Logi</span>
                <input type="checkbox" checked={logs} onChange={e => setLogs(e.target.checked)} />
              </label>
              <label className="flex items-center justify-between rounded-xl bg-white/10 p-3 border border-fuchsia-400/20">
                <span className="text-fuchsia-100">Ekonomia</span>
                <input type="checkbox" checked={economy} onChange={e => setEconomy(e.target.checked)} />
              </label>
              <label className="flex items-center justify-between rounded-xl bg-white/10 p-3 border border-fuchsia-400/20">
                <span className="text-fuchsia-100">Leveling</span>
                <input type="checkbox" checked={leveling} onChange={e => setLeveling(e.target.checked)} />
              </label>
              <div className="rounded-xl bg-white/10 p-3 border border-fuchsia-400/20">
                <div className="flex items-center justify-between">
                  <span className="text-fuchsia-100">Liczba komend: {commands}</span>
                  <input type="range" min="0" max="50" value={commands} onChange={e => setCommands(parseInt(e.target.value))} />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-fuchsia-400/20 p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm text-fuchsia-200/80">Szacunkowa cena</p>
              <p className="mt-1 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7b2ff7] to-[#c026d3]">{price} zł</p>
              <p className="mt-3 text-fuchsia-100/90 text-sm">Ceny są orientacyjne. Finalna wycena zależy od zakresu prac i terminów.</p>
            </div>
            <button className="mt-6 relative inline-flex items-center justify-center px-5 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#7b2ff7] to-[#c026d3]">
              Wyślij zapytanie
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-fuchsia-400/40" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
