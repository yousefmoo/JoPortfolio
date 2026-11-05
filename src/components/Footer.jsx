export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/08 bg-[#040609] px-4 sm:px-6 md:px-12 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left font-mono text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#88E03F] pulse-dot" />
          <span className="text-slate-300 font-medium">Yousef Mohamed © {new Date().getFullYear()}</span>
        </div>
        <div>
          Cairo, Egypt · Open to Global & Remote Opportunities
        </div>
        <div className="text-slate-400">
          Engineered with <span className="text-[#88E03F]">React</span> + <span className="text-[#00D2B4]">Vite</span>
        </div>
      </div>
    </footer>
  )
}
