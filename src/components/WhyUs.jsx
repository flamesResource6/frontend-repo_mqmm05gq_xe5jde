import { CheckCircle, Shield, Zap, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Zap, title: 'Szybka realizacja', desc: 'Dostarczamy projekty sprawnie, bez kompromisów jakości.' },
  { icon: CheckCircle, title: 'Indywidualne podejście', desc: 'Każdy projekt dopasowujemy do potrzeb i celów.' },
  { icon: Shield, title: 'Bezpieczny, stabilny kod', desc: 'Tworzymy solidne rozwiązania z myślą o skalowalności.' },
  { icon: Headphones, title: 'Wsparcie techniczne', desc: 'Jesteśmy do dyspozycji także po wdrożeniu.' }
]

function WhyUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Dlaczego my?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-fuchsia-400/20 p-6 shadow-[0_0_40px_rgba(123,47,247,0.15)]"
            >
              <it.icon className="text-fuchsia-300" />
              <h3 className="mt-3 text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-fuchsia-100/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
