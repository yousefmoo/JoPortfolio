import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current.querySelectorAll('.reveal')
    els.forEach((el, i) => setTimeout(() => el.classList.add('visible'), 150 + i * 130))
  }, [])

  return (
    <section id="hero" ref={ref}
      className="relative min-h-screen flex items-center pt-28 pb-16 px-8 md:px-16 z-10"
      style={{background:'radial-gradient(ellipse 80% 60% at 70% 40%,rgba(99,102,241,.07) 0%,transparent 70%),radial-gradient(ellipse 50% 40% at 20% 60%,rgba(34,211,238,.04) 0%,transparent 60%)'}}>

      <div className="max-w-6xl mx-auto w-full">

        {/* Available tag */}
        <div className="reveal inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 font-mono text-xs text-indigo-300 tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full pulse-dot"/>
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="font-syne font-black leading-[1.04] tracking-tight mb-4" style={{fontSize:'clamp(3rem,7vw,5.5rem)'}}>
          <span className="block text-white glitch" data-text="YOUSEF MOHAMED">YOUSEF MOHAMED</span>
          <span className="block grad-text">Full-Stack + AI Engineer</span>
        </h1>

        {/* Sub */}
        <p className="reveal delay-1 text-slate-400 max-w-xl mb-10 leading-relaxed font-light" style={{fontSize:'1.05rem'}}>
          Building <strong className="text-white font-medium">production-grade systems</strong> at the intersection of
          modern web architecture and AI infrastructure. MERN Stack · React 18 · Node.js · Electron · RTL/Arabic UI for MENA.
        </p>

        {/* Badges */}
        <div className="reveal delay-2 flex flex-wrap gap-3 mb-10">
          {[
            { text: '★ Top 1% DEPI 2024 — 15,000 participants', gold: true },
            { text: '📍 Cairo, Egypt' },
            { text: '🎓 CS Engineering · 2026' },
            { text: '🚀 Open to remote & relocation' },
          ].map(b => (
            <span key={b.text}
              className={`inline-flex items-center gap-2 border rounded-lg px-4 py-2 text-sm font-mono
                ${b.gold
                  ? 'border-amber-500/30 bg-amber-500/06 text-amber-400'
                  : 'border-white/08 bg-white/04 text-slate-400'}`}>
              {b.text}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="reveal delay-3 flex flex-wrap gap-4">
          <a href="#projects"
            className="bg-gradient-to-br from-indigo-700 to-indigo-500 text-white px-8 py-3.5 rounded-xl font-syne font-semibold text-base shadow-[0_4px_24px_rgba(99,102,241,.3)] hover:shadow-[0_8px_32px_rgba(99,102,241,.45)] hover:-translate-y-0.5 transition-all duration-300">
            View Projects →
          </a>
          <a href="mailto:yousefmohamed8733@gmail.com"
            className="border border-indigo-400/40 text-white px-8 py-3.5 rounded-xl font-syne font-semibold text-base hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.15)] transition-all duration-300">
            Let's Talk
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[.65rem] text-slate-600 tracking-[.2em] uppercase">
        Scroll
        <div className="w-px h-10 bg-gradient-to-b from-indigo-500 to-transparent scroll-line"/>
      </div>
    </section>
  )
}
