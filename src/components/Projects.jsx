import { useState } from 'react'
import SectionHeader from './SectionHeader'
import useReveal from './useReveal'
import { projects } from '../data/portfolio'

const ACCENT_COLORS = {
  lime: { text: '#88E03F', border: 'rgba(136, 224, 63, 0.4)', bg: 'rgba(136, 224, 63, 0.1)', glow: 'rgba(136, 224, 63, 0.18)' },
  emerald: { text: '#10B981', border: 'rgba(16, 185, 129, 0.4)', bg: 'rgba(16, 185, 129, 0.1)', glow: 'rgba(16, 185, 129, 0.18)' },
  teal: { text: '#00D2B4', border: 'rgba(0, 210, 180, 0.4)', bg: 'rgba(0, 210, 180, 0.1)', glow: 'rgba(0, 210, 180, 0.18)' },
  cyan: { text: '#22D3EE', border: 'rgba(34, 211, 238, 0.4)', bg: 'rgba(34, 211, 238, 0.1)', glow: 'rgba(34, 211, 238, 0.18)' },
  amber: { text: '#F59E0B', border: 'rgba(245, 158, 11, 0.4)', bg: 'rgba(245, 158, 11, 0.1)', glow: 'rgba(245, 158, 11, 0.18)' },
  rose: { text: '#F43F5E', border: 'rgba(244, 63, 94, 0.4)', bg: 'rgba(244, 63, 94, 0.1)', glow: 'rgba(244, 63, 94, 0.18)' },
}

const CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'enterprise', label: 'Enterprise & Industrial' },
  { key: 'extension', label: 'AI & Automation' },
  { key: 'web', label: 'Web & EdTech' },
  { key: 'ecommerce', label: 'E-Commerce' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openCard, setOpenCard] = useState(projects[0]?.id || null)
  useReveal()

  const toggleCard = (id) => {
    setOpenCard(prev => prev === id ? null : id)
  }

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-28 bg-[#06080D]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <SectionHeader label="Portfolio & Case Studies" title="Featured Projects" color="#88E03F" />

          {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
          <div className="reveal flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            {CATEGORIES.map(cat => {
              const active = activeCategory === cat.key
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl font-mono text-xs transition-all duration-200 border ${
                    active
                      ? 'bg-[#88E03F] text-black font-semibold border-[#88E03F] shadow-[0_0_15px_rgba(136,224,63,0.3)]'
                      : 'bg-[#0B0F19] text-slate-400 border-white/08 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {filteredProjects.map((p, idx) => {
            const c = ACCENT_COLORS[p.color] || ACCENT_COLORS.lime
            const isOpen = openCard === p.id
            const domain = p.link ? p.link.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${p.id}.app`

            return (
              <div
                key={p.id}
                className={`reveal delay-${idx % 3} bg-[#0A0E17] border rounded-2xl overflow-hidden transition-all duration-300 shadow-xl shadow-black/40 ${
                  isOpen
                    ? 'border-[#88E03F]/40 shadow-[0_0_30px_rgba(136,224,63,0.06)]'
                    : 'border-white/08 hover:border-white/20 hover:bg-[#0D121F]'
                }`}
              >
                {/* macOS Browser Header */}
                <div className="h-10 px-4 sm:px-6 bg-[#0E1321] border-b border-white/08 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
                  </div>

                  {/* Clean Domain Pill */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/05 text-[11px] font-mono text-slate-400 truncate max-w-[200px] sm:max-w-[320px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#88E03F]/70" />
                    <span className="truncate">{domain}</span>
                  </div>

                  {/* Category Pill Tag */}
                  <span
                    className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border"
                    style={{ color: c.text, borderColor: c.border, backgroundColor: c.bg }}
                  >
                    {p.categoryLabel}
                  </span>
                </div>

                {/* Main Card Header Info */}
                <div
                  className="p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  onClick={() => toggleCard(p.id)}
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    {/* Big Project Number */}
                    <span
                      className="font-syne font-black text-3xl sm:text-4xl shrink-0 opacity-40 transition-opacity"
                      style={{ color: c.text, opacity: isOpen ? 0.9 : 0.3 }}
                    >
                      {p.num}
                    </span>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2.5 mb-1">
                        <h3 className="font-syne font-bold text-lg sm:text-2xl text-white group-hover:text-[#88E03F] transition-colors">
                          {p.name}
                        </h3>
                        {p.nameAr && (
                          <span className="font-arabic text-xs sm:text-sm text-slate-400 bg-white/04 px-2 py-0.5 rounded border border-white/06">
                            {p.nameAr}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-xs sm:text-sm font-medium line-clamp-1">
                        {p.sub}
                      </p>
                    </div>
                  </div>

                  {/* Action Link & Expand Toggle */}
                  <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-[#88E03F]/30 bg-[#88E03F]/10 text-[#88E03F] hover:bg-[#88E03F] hover:text-black transition-all duration-200"
                      >
                        {p.linkLabel}
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hidden sm:inline-flex items-center gap-1 text-xs font-mono px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
                      >
                        ↗ GitHub
                      </a>
                    )}
                    <button
                      type="button"
                      aria-label="Toggle details"
                      className={`toggle-btn w-9 h-9 rounded-xl border border-white/10 text-slate-300 hover:text-white flex items-center justify-center text-lg font-light ${
                        isOpen ? 'open' : 'hover:border-[#88E03F]/40 hover:text-[#88E03F]'
                      }`}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Expandable Project Details Body */}
                <div className={`proj-body ${isOpen ? 'open' : ''}`}>
                  <div className="border-t border-white/08 px-5 sm:px-7 py-6 bg-[#080B13]/70">
                    {/* Visual Screenshot or Architecture Box */}
                    {p.screenshot && (
                      <div className="mb-6 rounded-xl overflow-hidden border border-white/10 bg-black/50 group/img relative">
                        <img
                          src={p.screenshot}
                          alt={p.screenshotAlt || p.name}
                          loading="lazy"
                          className="w-full h-44 sm:h-64 md:h-80 object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.02]"
                        />
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white hover:text-[#88E03F] transition-colors"
                          >
                            <span>Open Live Preview</span>
                            <span>↗</span>
                          </a>
                        )}
                      </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      {/* Left Side: Overview & Stack */}
                      <div>
                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                          {p.stack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[11px] sm:text-xs rounded-lg px-2.5 py-1 tracking-wide border"
                              style={{
                                color: c.text,
                                borderColor: c.border,
                                backgroundColor: c.bg,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">
                          {p.desc}
                        </p>
                        {p.descAr && (
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-arabic bg-white/02 border-l-2 border-[#88E03F] pl-3 py-1 my-3">
                            {p.descAr}
                          </p>
                        )}

                        {/* Mobile Links */}
                        <div className="flex flex-wrap gap-2.5 mt-4 sm:hidden">
                          {p.link && (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-xs px-3 py-1.5 rounded-lg bg-[#88E03F] text-black font-semibold"
                            >
                              {p.linkLabel}
                            </a>
                          )}
                          {p.github && (
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-xs px-3 py-1.5 rounded-lg border border-white/10 text-white"
                            >
                              ↗ GitHub
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right Side: Key Achievements & Bullets */}
                      <div>
                        <h4 className="font-syne font-semibold text-xs tracking-wider uppercase text-slate-400 mb-3">
                          Engineering Highlights
                        </h4>
                        <ul className="space-y-2.5 sm:space-y-3">
                          {p.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                              <span
                                className="font-mono font-bold text-xs shrink-0 mt-0.5"
                                style={{ color: c.text }}
                              >
                                ▹
                              </span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
