import SectionHeader from './SectionHeader'
import useReveal from './useReveal'
import { experience } from '../data/portfolio'

const ACCENTS = {
  lime: { dot: '#88E03F', org: '#88E03F', arrow: '#88E03F' },
  teal: { dot: '#00D2B4', org: '#00D2B4', arrow: '#00D2B4' },
  emerald: { dot: '#10B981', org: '#10B981', arrow: '#10B981' },
}

export default function Experience() {
  useReveal()

  return (
    <section id="experience" className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-28 bg-[#0A0E17]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Track Record" title="Professional Experience" color="#00D2B4" />

        <div className="divide-y divide-white/08">
          {experience.map((e, i) => {
            const acc = ACCENTS[e.color] || ACCENTS.lime
            return (
              <div
                key={i}
                className={`reveal delay-${i} grid grid-cols-1 md:grid-cols-[190px_1fr] lg:grid-cols-[230px_1fr] gap-3 md:gap-10 py-7 sm:py-9`}
              >
                {/* Left Date & Location Badge */}
                <div className="font-mono text-xs text-slate-400 leading-relaxed pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block shrink-0 shadow-sm"
                      style={{ background: acc.dot }}
                    />
                    <span className="font-semibold text-slate-200">{e.period}</span>
                  </div>
                  <div className="pl-4 text-slate-400 text-[11px]">{e.loc}</div>
                </div>

                {/* Right Details */}
                <div>
                  <h3 className="font-syne font-bold text-lg sm:text-xl text-white mb-1">
                    {e.role}
                  </h3>
                  <div
                    className="font-medium text-xs sm:text-sm mb-3.5 tracking-wide"
                    style={{ color: acc.org }}
                  >
                    {e.org}
                  </div>
                  <ul className="space-y-2.5">
                    {e.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <span
                          className="text-xs shrink-0 mt-0.5 font-bold"
                          style={{ color: acc.arrow }}
                        >
                          ▸
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
