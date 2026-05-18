import SectionHeader from './SectionHeader'
import useReveal from './useReveal'

const stats = [
  { num: 'Top 1%', desc: 'DEPI 2024' },
  { num: '5+', desc: 'Production Projects' },
  { num: '3', desc: 'Training Programmes' },
  { num: '2', desc: 'Co-Founded Ventures' },
]
const cards = [
  { icon: '⚙️', title: 'System Architecture', sub: 'Complex state-driven UIs, multi-role auth, offline-first desktop apps with Electron.js + SQLite', bg: 'rgba(99,102,241,.12)', col: '#818CF8' },
  { icon: '🌍', title: 'MENA / RTL Specialist', sub: 'Bidirectional text, Arabic typography, and localised UX for Arabic-speaking Gen Z audiences', bg: 'rgba(34,211,238,.1)', col: '#22D3EE' },
  { icon: '🤖', title: 'AI Integration', sub: 'n8n + Supabase agentic workflows, AI-driven automation, growing into Python/ML stack', bg: 'rgba(168,85,247,.12)', col: '#A855F7' },
  { icon: '📦', title: 'DevOps & Tooling', sub: 'GitHub Actions CI/CD, Vercel, Netlify, Vitest, React Testing Library — production-ready pipelines', bg: 'rgba(16,185,129,.12)', col: '#10B981' },
]

export default function About() {
  useReveal()
  return (
    <section id="about" className="relative z-10 px-8 md:px-16 py-28" style={{background:'linear-gradient(180deg,#07070F 0%,#0D0D1A 100%)'}}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <SectionHeader label="About Me" title={<>Architect.<br/>Builder.<br/>Problem Solver.</>} />
          <div className="space-y-4 text-slate-400 text-[.95rem] leading-relaxed">
            <p className="reveal">I'm a <strong className="text-white">Junior Full-Stack Developer</strong> based in Cairo, Egypt — specialising in React 18, Node.js, and production-ready MERN applications. Ranked <strong className="text-white">Top 1% of 15,000</strong> participants in Egypt's Digital Egypt Pioneers Initiative (DEPI) 2024.</p>
            <p className="reveal delay-1">Beyond code, I'm a co-founder of <strong className="text-white">Mukth</strong> — an Arabic Quran memorisation platform for the MENA market — and co-owner of <strong className="text-white">Heroes Gym</strong> in Cairo, for which I built a full offline-first desktop management system.</p>
            <p className="reveal delay-2">Currently expanding into <strong className="text-white">AI & data science</strong> (Python, Pandas, Scikit-Learn) to grow toward full-stack AI-driven product development.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-8">
            {stats.map(s => (
              <div key={s.num} className="reveal delay-3 bg-[#0F0F23] border border-indigo-500/15 rounded-xl p-4 text-center hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300">
                <div className="font-syne font-black text-2xl text-indigo-400">{s.num}</div>
                <div className="font-mono text-xs text-slate-500 mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="space-y-3">
          {cards.map((c, i) => (
            <div key={c.title} className={`reveal delay-${i + 1} bg-[#0F0F23] border border-indigo-500/15 rounded-xl p-5 flex gap-4 items-start hover:border-indigo-500/25 hover:bg-[#13132A] transition-all duration-300`}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{background:c.bg}}>
                {c.icon}
              </div>
              <div>
                <div className="font-syne font-bold text-[.9rem] text-white mb-1">{c.title}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
