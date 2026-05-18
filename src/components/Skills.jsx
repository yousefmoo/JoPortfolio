import { useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'
import useReveal from './useReveal'
import { skills } from '../data/portfolio'

const GRADS = {
  indigo: 'linear-gradient(to right,#4338CA,#818CF8)',
  cyan:   'linear-gradient(to right,#0891B2,#22D3EE)',
  green:  'linear-gradient(to right,#059669,#10B981)',
  amber:  'linear-gradient(to right,#D97706,#F59E0B)',
}
const TAG_COLORS = {
  indigo: {bg:'rgba(99,102,241,.1)',col:'#818CF8'},
  cyan:   {bg:'rgba(34,211,238,.1)',col:'#22D3EE'},
  green:  {bg:'rgba(16,185,129,.1)',col:'#10B981'},
  amber:  {bg:'rgba(245,158,11,.1)',col:'#F59E0B'},
}

export default function Skills() {
  useReveal()
  const secRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-fill').forEach(bar => {
            bar.style.width = bar.dataset.pct + '%'
          })
        }
      })
    }, { threshold: .2 })
    if (secRef.current) {
      secRef.current.querySelectorAll('.skill-group-obs').forEach(g => observer.observe(g))
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={secRef} className="relative z-10 px-8 md:px-16 py-28 bg-[#07070F]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Technical Expertise" title="Skills" color="#A855F7" />
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((group, gi) => {
            const tc = TAG_COLORS[group.color]
            return (
              <div key={group.label} className={`reveal delay-${gi} skill-group-obs`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xs tracking-[.2em] uppercase" style={{color: tc.col}}>
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-indigo-500/10"/>
                </div>
                <div className="space-y-4">
                  {group.items.map(item => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm text-white">{item.name}</span>
                        <span className="font-mono text-xs text-slate-500">{item.pct}%</span>
                      </div>
                      <div className="h-1 bg-white/05 rounded-full overflow-hidden">
                        <div className="skill-fill h-full rounded-full" data-pct={item.pct}
                          style={{background: GRADS[group.color]}}/>
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
