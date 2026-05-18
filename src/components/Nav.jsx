import { useState, useEffect } from 'react'

const links = ['About','Projects','Experience','Skills','Education','Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 transition-all duration-300 ${scrolled ? 'py-3 bg-[#07070F]/90' : 'py-5 bg-[#07070F]/70'} backdrop-blur-xl border-b border-indigo-500/10`}
        style={{padding: scrolled ? '.75rem 4rem' : '1.25rem 4rem'}}>
        <a href="#" className="font-syne font-black text-lg grad-text tracking-wide">YM</a>
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className="text-slate-400 hover:text-white text-xs font-mono tracking-widest uppercase transition-colors duration-200 relative group">
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"/>
              </a>
            </li>
          ))}
        </ul>
        <a href="mailto:yousefmohamed8733@gmail.com"
          className="hidden md:block border border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white px-5 py-2 rounded-lg font-mono text-xs tracking-widest transition-all duration-200 hover:shadow-[0_0_20px_rgba(99,102,241,.4)]">
          Hire Me
        </a>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span className="block w-5 h-px bg-white"/>
          <span className="block w-5 h-px bg-white"/>
          <span className="block w-5 h-px bg-white"/>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99] bg-[#07070F]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-10">
          <button className="absolute top-6 right-8 text-slate-400 text-2xl" onClick={() => setMenuOpen(false)}>✕</button>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-syne font-bold text-3xl text-slate-400 hover:text-white transition-colors">
              {l}
            </a>
          ))}
          <a href="mailto:yousefmohamed8733@gmail.com"
            className="border border-indigo-500 text-indigo-400 px-8 py-3 rounded-xl font-mono text-sm mt-4">
            Hire Me
          </a>
        </div>
      )}
    </>
  )
}
