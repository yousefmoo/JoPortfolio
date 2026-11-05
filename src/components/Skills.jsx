import { useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'
import useReveal from './useReveal'
import { skills } from '../data/portfolio'

const GRADS = {
  lime: 'linear-gradient(to right, #4D8B1C, #88E03F)',
  teal: 'linear-gradient(to right, #008084, #00D2B4)',
  emerald: 'linear-gradient(to right, #047857, #10B981)',
  amber: 'linear-gradient(to right, #B45309, #F59E0B)',
}

const TAG_COLORS = {
  lime: { bg: 'rgba(136, 224, 63, 0.1)', col: '#88E03F', border: 'rgba(136, 224, 63, 0.25)' },
  teal: { bg: 'rgba(0, 210, 180, 0.1)', col: '#00D2B4', border: 'rgba(0, 210, 180, 0.25)' },
  emerald: { bg: 'rgba(16, 185, 129, 0.1)', col: '#10B981', border: 'rgba(16, 185, 129, 0.25)' },
  amber: { bg: 'rgba(245, 158, 11, 0.1)', col: '#F59E0B', border: 'rgba(245, 158, 11, 0.25)' },
}

export default function Skills() {
  useReveal()
  const secRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.skill-fill').forEach((bar) => {
              bar.style.width = bar.dataset.pct + '%'
            })
          }
        })
      },
      { threshold: 0.15 }
    )

    if (secRef.current) {
      secRef.current.querySelectorAll('.skill-group-obs').forEach((g) => observer.observe(g))
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={secRef} className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-28 bg-[#06080D]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Core Capabilities" title="Technical Expertise" color="#88E03F" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.map((group, gi) => {
            const tc = TAG_COLORS[group.color] || TAG_COLORS.lime
            return (
              <div
                key={group.label}
                className={`reveal delay-${gi} skill-group-obs tilt bg-[#0B0F19] border border-white/08 rounded-2xl p-5 sm:p-7 shadow-lg shadow-black/30 hover:border-white/15 transition-all duration-300`}
              >
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span
                    className="font-mono text-xs tracking-[0.2em] uppercase font-bold px-2.5 py-1 rounded-md border"
                    style={{ color: tc.col, backgroundColor: tc.bg, borderColor: tc.border }}
                  >
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-white/08 ml-2" />
                </div>

                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-1.5 text-xs sm:text-sm">
                        <span className="text-slate-200 font-medium">{item.name}</span>
                        <span className="font-mono text-xs text-slate-400">{item.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-black/50 border border-white/05 rounded-full overflow-hidden p-[1px]">
                        <div
                          className="skill-fill h-full rounded-full"
                          data-pct={item.pct}
                          style={{ background: GRADS[group.color] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

