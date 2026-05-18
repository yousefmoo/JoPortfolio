import SectionHeader from './SectionHeader'
import useReveal from './useReveal'
import { certs } from '../data/portfolio'

const CERT_DOTS = { amber:'#F59E0B', cyan:'#22D3EE', green:'#10B981', indigo:'#818CF8' }
const COURSES = ['Data Structures & Algorithms','Databases','Statistics & Probability','Operating Systems','OOP (Java / C++)','Software Engineering']

export default function Education() {
  useReveal()
  return (
    <section id="education" className="relative z-10 px-8 md:px-16 py-28 bg-[#0D0D1A]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Academic & Certifications" title="Education" color="#22D3EE" />
        <div className="grid md:grid-cols-2 gap-6">

          {/* Degree */}
          <div className="reveal bg-[#0F0F23] border border-indigo-500/15 rounded-2xl p-7 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300">
            <div className="font-mono text-xs text-slate-500 mb-4 tracking-widest">2022 – 2026 (Expected)</div>
            <div className="font-syne font-bold text-lg text-white mb-2">B.Sc. Computer & Systems Engineering</div>
            <div className="text-cyan-400 text-sm font-medium mb-1">6th of October University · Faculty of Computer Science</div>
            <div className="text-slate-400 text-sm mb-5">Cairo, Egypt · GPA: 3.0 / 4.0 — Very Good</div>
            <div className="flex flex-wrap gap-2">
              {COURSES.map(c => (
                <span key={c} className="font-mono text-[.68rem] px-2.5 py-1 rounded-lg bg-indigo-500/08 text-indigo-300 border border-indigo-500/15">{c}</span>
              ))}
            </div>
          </div>

          {/* Certs */}
          <div className="reveal delay-1 bg-[#0F0F23] border border-indigo-500/15 rounded-2xl p-7">
            <div className="font-mono text-xs text-slate-500 mb-5 tracking-widest">Certifications</div>
            <div className="space-y-3">
              {certs.map((cert, i) => (
                <div key={i} className="flex gap-3 p-3.5 rounded-xl bg-white/02 border border-indigo-500/10 hover:border-indigo-500/25 transition-all duration-200">
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{background: CERT_DOTS[cert.color]}}/>
                  <div>
                    <div className="text-sm text-white font-medium mb-0.5">{cert.name}</div>
                    <div className="font-mono text-[.72rem] text-slate-500">{cert.org}</div>
                    {cert.badge && (
                      <span className="inline-block mt-1 font-mono text-[.68rem] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">{cert.badge}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
