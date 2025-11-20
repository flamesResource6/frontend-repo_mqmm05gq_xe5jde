import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(v => !v)

  return (
    <header className="sticky top-0 z-40">
      <div className="backdrop-blur-xl bg-black/20 border-b border-fuchsia-400/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7b2ff7] to-[#c026d3] shadow-[0_0_14px_rgba(192,38,211,0.35)]" />
            <span className="font-semibold">Flames Studio</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-fuchsia-100/80">
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#shop" className="hover:text-white">Sklep</a>
            <a href="#bot" className="hover:text-white">Bot Discord</a>
            <a href="#bot-calc" className="hover:text-white">Kalkulator</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>
          </nav>
          <button className="sm:hidden p-2" onClick={toggle}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <div className="sm:hidden bg-black/70 backdrop-blur-xl border-b border-fuchsia-400/10">
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-2 text-fuchsia-100/90">
            <a onClick={toggle} href="#portfolio" className="py-1">Portfolio</a>
            <a onClick={toggle} href="#shop" className="py-1">Sklep</a>
            <a onClick={toggle} href="#bot" className="py-1">Bot Discord</a>
            <a onClick={toggle} href="#bot-calc" className="py-1">Kalkulator</a>
            <a onClick={toggle} href="#contact" className="py-1">Kontakt</a>
          </div>
        </div>
      )}
    </header>
  )
}
