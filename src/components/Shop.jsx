import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const products = {
  web: [
    { id: 'web-basic', name: 'Strona Basic', price: 1200, desc: 'Prosta, szybka wizytówka z sekcją kontaktu.' },
    { id: 'web-pro', name: 'Strona Pro', price: 2600, desc: 'Rozbudowana strona z blogiem i CMS.' },
    { id: 'web-elite', name: 'Strona Elite', price: 4800, desc: 'Topowy projekt, pełna personalizacja i animacje.' }
  ],
  bot: [
    { id: 'bot-starter', name: 'Bot Starter', price: 800, desc: 'Podstawowy bot z kilkoma komendami.' },
    { id: 'bot-advanced', name: 'Bot Advanced', price: 1600, desc: 'Zaawansowany bot z moderacją i logami.' },
    { id: 'bot-enterprise', name: 'Bot Enterprise', price: 3200, desc: 'Kompletny ekosystem z panelem i ekonomią.' }
  ]
}

function Modal({ open, onClose, product }) {
  const [adminPanel, setAdminPanel] = useState(false)
  const [logs, setLogs] = useState(true)
  const [economy, setEconomy] = useState(false)
  const [leveling, setLeveling] = useState(false)
  const [commands, setCommands] = useState(10)

  if (!open || !product) return null

  const isBot = product.id.startsWith('bot')
  const base = product.price
  const calc = base + (isBot ? (
    (adminPanel ? 600 : 0) + (logs ? 200 : 0) + (economy ? 500 : 0) + (leveling ? 400 : 0) + commands * 15
  ) : 0)

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="relative w-full max-w-2xl rounded-3xl bg-white/10 backdrop-blur-[25px] border border-fuchsia-400/30 shadow-[0_0_80px_rgba(192,38,211,0.25)] p-6"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-fuchsia-100">
              <X size={18} />
            </button>

            <h3 className="text-2xl font-bold text-white">{product.name}</h3>
            <p className="mt-1 text-fuchsia-100/90">{product.desc}</p>

            {isBot && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center justify-between rounded-2xl bg-white/10 p-3 border border-fuchsia-400/20">
                  <span className="text-fuchsia-100">Panel administracyjny</span>
                  <input type="checkbox" checked={adminPanel} onChange={e => setAdminPanel(e.target.checked)} />
                </label>
                <label className="flex items-center justify-between rounded-2xl bg-white/10 p-3 border border-fuchsia-400/20">
                  <span className="text-fuchsia-100">Logi</span>
                  <input type="checkbox" checked={logs} onChange={e => setLogs(e.target.checked)} />
                </label>
                <label className="flex items-center justify-between rounded-2xl bg-white/10 p-3 border border-fuchsia-400/20">
                  <span className="text-fuchsia-100">Ekonomia</span>
                  <input type="checkbox" checked={economy} onChange={e => setEconomy(e.target.checked)} />
                </label>
                <label className="flex items-center justify-between rounded-2xl bg-white/10 p-3 border border-fuchsia-400/20">
                  <span className="text-fuchsia-100">Leveling</span>
                  <input type="checkbox" checked={leveling} onChange={e => setLeveling(e.target.checked)} />
                </label>
                <div className="sm:col-span-2 rounded-2xl bg-white/10 p-3 border border-fuchsia-400/20">
                  <div className="flex items-center justify-between">
                    <span className="text-fuchsia-100">Liczba komend: {commands}</span>
                    <input type="range" min="0" max="50" value={commands} onChange={e => setCommands(parseInt(e.target.value))} />
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-fuchsia-200/80">Cena {isBot ? 'dynamiczna' : 'bazowa'}</p>
                <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7b2ff7] to-[#c026d3]">{calc} zł</p>
              </div>
              <button className="relative inline-flex items-center justify-center px-5 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#7b2ff7] to-[#c026d3] shadow-[0_0_20px_rgba(192,38,211,0.4)]">
                Zamów
                <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-fuchsia-400/40" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Shop() {
  const [activeTab, setActiveTab] = useState('web')
  const [selected, setSelected] = useState(null)

  const list = activeTab === 'web' ? products.web : products.bot

  return (
    <section id="shop" className="relative py-20 sm:py-28">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Sklep</h2>
          <div className="inline-flex rounded-2xl bg-white/5 p-1 border border-fuchsia-400/20">
            <button onClick={() => setActiveTab('web')} className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${activeTab==='web' ? 'bg-gradient-to-r from-[#7b2ff7] to-[#c026d3] text-white shadow-[0_0_20px_rgba(192,38,211,0.4)]' : 'text-fuchsia-100 hover:bg-white/10'}`}>Strony WWW</button>
            <button onClick={() => setActiveTab('bot')} className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${activeTab==='bot' ? 'bg-gradient-to-r from-[#7b2ff7] to-[#c026d3] text-white shadow-[0_0_20px_rgba(192,38,211,0.4)]' : 'text-fuchsia-100 hover:bg-white/10'}`}>Boty Discord</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-fuchsia-400/20"
            >
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-fuchsia-100/90">{p.desc}</p>
                <p className="mt-3 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7b2ff7] to-[#c026d3]">{p.price} zł</p>
                <button onClick={() => setSelected(p)} className="mt-4 relative inline-flex items-center justify-center px-4 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-[#7b2ff7] to-[#c026d3]">
                  Zobacz szczegóły
                  <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-fuchsia-400/40" />
                </button>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-fuchsia-400/0 group-hover:ring-fuchsia-400/50 transition duration-300" />
              <div className="pointer-events-none absolute inset-0 group-hover:backdrop-blur-[2px] transition" />
            </motion.article>
          ))}
        </div>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} product={selected} />
    </section>
  )
}

export default Shop
