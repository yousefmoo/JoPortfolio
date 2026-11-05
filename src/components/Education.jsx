import SectionHeader from './SectionHeader'
import useReveal from './useReveal'
import { certs } from '../data/portfolio'

const CERT_DOTS = {
  lime: '#88E03F',
  teal: '#00D2B4',
  emerald: '#10B981',
  amber: '#F59E0B',
}

const COURSES = [
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'OOP (Java / C++)',
  'Software Architecture',
  'Computer Networks',
]

export default function Education() {
  useReveal()

  return (
    <section id="education" className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-28 bg-[#0A0E17]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Academic & Certifications" title="Education & Credentials" color="#00D2B4" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Degree Card */}
          <div className="reveal tilt bg-[#0B0F19] border border-white/08 rounded-2xl p-6 sm:p-8 hover:border-[#00D2B4]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/40">
            <div className="font-mono text-xs text-slate-400 mb-3 tracking-widest uppercase">
              2022 – 2026 (Expected)
            </div>
            <h3 className="font-syne font-bold text-lg sm:text-xl text-white mb-1.5">
              B.Sc. Computer & Systems Engineering
            </h3>
            <div className="text-[#00D2B4] text-xs sm:text-sm font-semibold mb-1">
              6th of October University · Faculty of Computer Science
            </div>
            <div className="text-slate-400 text-xs sm:text-sm mb-6 flex items-center gap-2">
              <span>Cairo, Egypt</span>
              <span>•</span>
              <span className="text-[#88E03F] font-mono font-medium">GPA: 3.0 / 4.0 (Very Good)</span>
            </div>

            <div className="border-t border-white/08 pt-5">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-3">
                Core Engineering Coursework:
              </h4>
              <div className="flex flex-wrap gap-2">
                {COURSES.map((c) => (
                  <span
                    key={c}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-white/04 text-slate-300 border border-white/08"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="reveal delay-1 tilt bg-[#0B0F19] border border-white/08 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/40">
            <div className="font-mono text-xs text-slate-400 mb-5 tracking-widest uppercase">
              Professional Certifications
            </div>
            <div className="space-y-3">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className="flex gap-3.5 p-3 sm:p-3.5 rounded-xl bg-white/02 border border-white/06 hover:border-white/15 transition-all duration-200"
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 shadow-sm"
                    style={{ background: CERT_DOTS[cert.color] || '#88E03F' }}
                  />
                  <div className="flex-1">
                    <div className="text-xs sm:text-sm text-white font-medium mb-0.5">
                      {cert.name}
                    </div>
                    <div className="font-mono text-[11px] text-slate-400">
                      {cert.org}
                    </div>
                    {cert.badge && (
                      <span className="inline-block mt-1.5 font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#88E03F]/15 text-[#88E03F] border border-[#88E03F]/30 shadow-[0_0_10px_rgba(136,224,63,0.15)]">
                        {cert.badge}
                      </span>
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

