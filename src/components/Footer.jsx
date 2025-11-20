function Footer() {
  return (
    <footer className="relative py-10 border-t border-fuchsia-400/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-fuchsia-200/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7b2ff7] to-[#c026d3] shadow-[0_0_20px_rgba(192,38,211,0.4)]" />
          <span className="font-semibold text-white">Flames Studio</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Discord</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">Regulamin</a>
          <a href="#" className="hover:text-white">Polityka prywatności</a>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} Flames Studio. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  )
}

export default Footer
