import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const products = {
  web: [
    { id: 'web-basic', name: 'Strona Basic', price: 1200, desc: 'Prosta, szybka wizytówka z sekcją kontaktu.' },
    { id: 'web-pro', name: 'Strona Pro', price: 2600, desc: 'Rozbudowana strona z blogiem i CMS.' },
    { id: 'web-elite', name: 'Strona Elite', price: 4800, desc: 'Topowy projekt, pełna personalizacja i animacje.' }
  ]
}

function Modal({ open, onClose, product }) {
  if (!open || !product) return null
  const base = product.price

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

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-fuchsia-200/80">Cena bazowa</p>
                <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7b2ff7] to-[#c026d3]">{base} zł</p>
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
  const [selected, setSelected] = useState(null)

  return (
    <section id="shop" className="relative py-20 sm:py-28">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Sklep</h2>
          <p className="text-sm text-fuchsia-100/80">Oferty stron WWW</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.web.map((p, i) => (
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
