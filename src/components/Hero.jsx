import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.reveal')
    els.forEach((el, i) => setTimeout(() => el.classList.add('visible'), 120 + i * 110))
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-24 sm:pt-32 pb-16 px-4 sm:px-6 md:px-12 lg:px-16 z-10 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 75% 35%, rgba(136, 224, 63, 0.09) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 20% 65%, rgba(0, 210, 180, 0.07) 0%, transparent 60%)',
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Availability Badge */}
        <div className="reveal inline-flex items-center gap-2.5 bg-[#88E03F]/10 border border-[#88E03F]/30 rounded-full px-3.5 sm:px-4 py-1.5 font-mono text-[11px] sm:text-xs text-[#88E03F] tracking-widest uppercase mb-6 sm:mb-8">
          <span className="w-2 h-2 bg-[#88E03F] rounded-full pulse-dot" />
          Available for new opportunities
        </div>

        {/* Main Name Heading */}
        <h1
          className="font-syne font-black leading-[1.08] tracking-tight mb-5 sm:mb-6 max-w-full"
          style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5.25rem)' }}
        >
          <span className="block text-white glitch" data-text="YOUSEF MOHAMED">
            YOUSEF MOHAMED
          </span>
          <span className="block grad-text mt-1">
            Full-Stack + AI Engineer
          </span>
        </h1>

        {/* Hero Bio */}
        <p className="reveal delay-1 text-slate-300 max-w-2xl mb-8 sm:mb-10 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
          Building <strong className="text-white font-semibold">production-grade systems</strong> at the intersection of
          high-performance web architecture, enterprise applications, and AI workflows. Specializing in{' '}
          <span className="text-[#88E03F]">React 18</span> · <span className="text-[#00D2B4]">Next.js</span> ·{' '}
          <span className="text-white">Node.js</span> · <span className="text-[#22D3EE]">Electron.js</span> · Arabic RTL UI for MENA.
        </p>

        {/* Credential Badges */}
        <div className="reveal delay-2 flex flex-wrap gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {[
            { text: '★ Top 1% DEPI 2024 — 15,000 participants', highlight: true },
            { text: '📍 Cairo, Egypt' },
            { text: '🎓 Computer & Systems Engineering · 2026' },
            { text: '🚀 Open to Remote & Relocation' },
          ].map((b) => (
            <span
              key={b.text}
              className={`inline-flex items-center gap-2 border rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-mono tracking-tight transition-all duration-200 ${
                b.highlight
                  ? 'border-[#88E03F]/40 bg-[#88E03F]/08 text-[#88E03F] shadow-[0_0_15px_rgba(136,224,63,0.1)]'
                  : 'border-white/10 bg-white/04 text-slate-300 hover:border-white/20'
              }`}
            >
              {b.text}
            </span>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="reveal delay-3 flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#88E03F] via-[#22C55E] to-[#00D2B4] text-black font-syne font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base shadow-[0_4px_25px_rgba(136,224,63,0.3)] hover:shadow-[0_8px_35px_rgba(136,224,63,0.45)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Projects
            <span className="text-lg">→</span>
          </a>
          <a
            href="mailto:yousefmohamed8733@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 bg-white/03 hover:border-[#00D2B4] hover:text-[#00D2B4] hover:bg-[#00D2B4]/05 text-white font-syne font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* 3D rotating cube (desktop) */}
      <div className="scene3d hidden lg:flex absolute right-16 xl:right-28 top-1/2 -translate-y-1/2 pointer-events-none float" aria-hidden="true">
        <div className="cube">
          {['REACT','NODE','AI','NEXT','SQL','RTL'].map(t => <div key={t} className="cube-face">{t}</div>)}
        </div>
      </div>

      {/* Responsive Scroll Indicator (hidden on small height/mobile) */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] text-slate-500 tracking-[0.25em] uppercase pointer-events-none">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#88E03F] to-transparent scroll-line" />
      </div>
    </section>
  )
}

