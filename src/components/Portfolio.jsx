import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Landing Page SaaS',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    desc: 'Lekki, szybki i nowoczesny landing z konwersją w centrum uwagi.',
    tags: ['React', 'Tailwind', 'Vite']
  },
  {
    id: 2,
    title: 'Sklep Headless',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    desc: 'Nowoczesny e-commerce z integracją płatności i panel administracyjny.',
    tags: ['Next.js', 'Stripe', 'MongoDB']
  },
  {
    id: 3,
    title: 'Panel Bota Discord',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    desc: 'Panel www do zarządzania funkcjami bota, role, logi, statystyki.',
    tags: ['React', 'Express', 'OAuth2']
  }
]

function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Portfolio
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-fuchsia-400/20 shadow-[0_0_40px_rgba(123,47,247,0.15)]"
            >
              <div className="relative h-44 sm:h-48">
                <img src={p.img} alt="miniatura" className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0614] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-fuchsia-100/80">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-200 ring-1 ring-inset ring-fuchsia-400/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-fuchsia-400/0 group-hover:ring-fuchsia-400/50 transition duration-300" />
              <div className="pointer-events-none absolute inset-0 group-hover:backdrop-blur-[2px] transition" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
