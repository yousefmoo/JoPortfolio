import SectionHeader from './SectionHeader'
import useReveal from './useReveal'
import { experience } from '../data/portfolio'

const DOT_COLORS = { indigo:'#6366F1', cyan:'#22D3EE', green:'#10B981' }
const ORG_COLORS = { indigo:'#818CF8', cyan:'#22D3EE', green:'#10B981' }

export default function Experience() {
  useReveal()
  return (
    <section id="experience" className="relative z-10 px-8 md:px-16 py-28 bg-[#0D0D1A]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Work History" title="Experience" />
        <div className="divide-y divide-indigo-500/10">
          {experience.map((e, i) => (
            <div key={i} className={`reveal delay-${i} grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8`}>
              <div className="font-mono text-xs text-slate-500 leading-relaxed pt-1">
                <span className="inline-block w-2 h-2 rounded-full mr-2 mb-0.5" style={{background: DOT_COLORS[e.color]}}/>
                {e.period}<br/>
                <span className="ml-4">{e.loc}</span>
              </div>
              <div>
                <div className="font-syne font-bold text-lg text-white mb-1">{e.role}</div>
                <div className="font-medium text-sm mb-1" style={{color: ORG_COLORS[e.color]}}>{e.org}</div>
                <ul className="mt-4 space-y-2.5">
                  {e.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="text-indigo-400 text-xs flex-shrink-0 mt-0.5">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
