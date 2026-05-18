import { useState } from 'react'
import SectionHeader from './SectionHeader'
import useReveal from './useReveal'
import { projects } from '../data/portfolio'

const COLORS = {
  cyan:   { text: '#22D3EE', bg: 'rgba(34,211,238,' },
  purple: { text: '#A855F7', bg: 'rgba(168,85,247,' },
  indigo: { text: '#818CF8', bg: 'rgba(99,102,241,' },
  green:  { text: '#10B981', bg: 'rgba(16,185,129,' },
  amber:  { text: '#F59E0B', bg: 'rgba(245,158,11,' },
}

export default function Projects() {
  const [open, setOpen] = useState(null)
  useReveal()

  const toggle = (id) => setOpen(prev => prev === id ? null : id)

  return (
    <section id="projects" className="relative z-10 px-8 md:px-16 py-28 bg-[#07070F]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Featured Work" title="Projects" />
        <div className="flex flex-col gap-4">
          {projects.map((p, i) => {
            const c = COLORS[p.color]
            const isOpen = open === p.id
            return (
              <div key={p.id}
                className={`reveal delay-${i % 3} bg-[#0F0F23] border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-opacity-50' : 'border-indigo-500/15 hover:border-indigo-500/30'}`}
                style={isOpen ? {borderColor: c.text + '50'} : {}}>

                {/* Header */}
                <div className="grid gap-4 p-6 md:p-7 items-center" style={{gridTemplateColumns:'auto 1fr auto auto'}}>
                  <div className="font-syne font-black text-4xl md:text-5xl leading-none opacity-15 transition-opacity duration-300"
                    style={{color: c.text, opacity: isOpen ? .3 : .12}}>
                    {p.num}
                  </div>
                  <div>
                    <div className="font-syne font-black text-lg md:text-xl mb-1" style={{color: c.text}}>{p.name}</div>
                    <div className="text-slate-400 text-sm">{p.sub}</div>
                  </div>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noreferrer"
                      className="hidden md:block font-mono text-xs text-slate-500 border border-indigo-500/20 rounded-lg px-3 py-2 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200">
                      {p.linkLabel}
                    </a>
                  ) : (
                    <span className="hidden md:block font-mono text-xs text-slate-600 border border-white/06 rounded-lg px-3 py-2">{p.linkLabel}</span>
                  )}
                  <button onClick={() => toggle(p.id)}
                    className={`toggle-btn w-9 h-9 border rounded-xl text-xl font-light flex items-center justify-center ${isOpen ? 'open' : 'border-indigo-500/20 text-slate-500 hover:border-indigo-400 hover:text-indigo-400'}`}>
                    +
                  </button>
                </div>

                {/* Body */}
                <div className={`proj-body ${isOpen ? 'open' : ''}`}>
                  <div className="px-6 md:px-7 pb-7 border-t border-indigo-500/10 pt-5 grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {p.stack.map(t => (
                          <span key={t} className="font-mono text-[.7rem] rounded-lg px-2.5 py-1 tracking-wide"
                            style={{background: c.bg + '.1)', color: c.text}}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer"
                          className="md:hidden inline-block mt-3 font-mono text-xs text-cyan-400 hover:underline">{p.linkLabel}</a>
                      )}
                    </div>
                    <ul className="space-y-3">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                          <span className="font-mono text-xs flex-shrink-0 mt-0.5" style={{color: c.text}}>→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
