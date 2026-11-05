import { useState, useEffect } from 'react'

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'py-3 bg-[#06080D]/90 border-white/10 shadow-lg shadow-black/40 backdrop-blur-xl' 
            : 'py-4 sm:py-5 bg-[#06080D]/60 border-white/05 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#88E03F] to-[#00D2B4] flex items-center justify-center font-syne font-black text-black text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200">
              YM
            </span>
            <span className="font-syne font-black text-base sm:text-lg text-white tracking-wide group-hover:text-[#88E03F] transition-colors">
              Yousef<span className="text-[#88E03F]">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white text-xs font-mono tracking-widest uppercase transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#88E03F] to-[#00D2B4] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:yousefmohamed8733@gmail.com"
              className="inline-flex items-center gap-2 border border-[#88E03F]/40 bg-[#88E03F]/10 text-[#88E03F] hover:bg-[#88E03F] hover:text-black hover:border-[#88E03F] px-4 py-2 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(136,224,63,0.15)] hover:shadow-[0_0_25px_rgba(136,224,63,0.35)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#88E03F] pulse-dot" />
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/05 text-white focus:outline-none focus:ring-2 focus:ring-[#88E03F]/50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2 bg-[#88E03F]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 bg-[#88E03F]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-[#06080D]/95 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#88E03F] to-[#00D2B4] flex items-center justify-center font-syne font-black text-black text-sm">
              YM
            </span>
            <span className="font-syne font-bold text-white text-lg">Yousef Mohamed</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#88E03F] transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-5 my-auto py-6">
          {links.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-syne font-extrabold text-2xl sm:text-3xl text-slate-300 hover:text-[#88E03F] transition-colors flex items-center justify-between group"
            >
              <span>{link.name}</span>
              <span className="font-mono text-xs text-slate-600 group-hover:text-[#88E03F] transition-colors">
                0{idx + 1} →
              </span>
            </a>
          ))}
        </nav>

        <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
          <a
            href="mailto:yousefmohamed8733@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#88E03F] to-[#00D2B4] text-black font-syne font-bold text-center text-sm shadow-lg shadow-[#88E03F]/20"
          >
            Get In Touch / Hire Me
          </a>
          <div className="flex justify-center items-center gap-6 text-slate-400 text-xs font-mono">
            <a href="https://github.com/yousefmoo" target="_blank" rel="noreferrer" className="hover:text-[#88E03F]">GitHub</a>
            <span>•</span>
            <a href="https://linkedin.com/in/yousef-m-emam-y10m" target="_blank" rel="noreferrer" className="hover:text-[#88E03F]">LinkedIn</a>
            <span>•</span>
            <a href="tel:+201112550714" className="hover:text-[#88E03F]">+20 111 255 0714</a>
          </div>
        </div>
      </div>
    </>
  )
}
