import SectionHeader from './SectionHeader'
import useReveal from './useReveal'

const stats = [
  { num: 'Top 1%', desc: 'DEPI 2024 (15k Devs)' },
  { num: '9+', desc: 'Production Projects' },
  { num: '3', desc: 'Elite Training Programs' },
  { num: '2', desc: 'Co-Founded Ventures' },
]

const cards = [
  {
    icon: '⚙️',
    title: 'Enterprise & System Architecture',
    sub: 'Complex state-driven UIs, multi-role auth, offline-first desktop systems with Electron.js + SQLite, and scalable APIs.',
    bg: 'rgba(136, 224, 63, 0.1)',
    col: '#88E03F',
  },
  {
    icon: '🌍',
    title: 'MENA / RTL Specialist',
    sub: 'Bidirectional RTL text rendering, Arabic typography, and culturally resonant UI/UX for high-growth MENA audiences.',
    bg: 'rgba(0, 210, 180, 0.1)',
    col: '#00D2B4',
  },
  {
    icon: '🤖',
    title: 'AI Automation & Extensions',
    sub: 'WhatsApp bulk automation, n8n workflows, Chrome Extensions with anti-spam randomization, and Python ML pipelines.',
    bg: 'rgba(34, 211, 238, 0.1)',
    col: '#22D3EE',
  },
  {
    icon: '🚀',
    title: 'DevOps & High Performance',
    sub: 'GitHub Actions CI/CD, Next.js SSR, Vercel Edge optimizations, Vitest unit testing, and sub-second web speed.',
    bg: 'rgba(16, 185, 129, 0.1)',
    col: '#10B981',
  },
]

export default function About() {
  useReveal()

  return (
    <section
      id="about"
      className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-28"
      style={{
        background: 'linear-gradient(180deg, #06080D 0%, #0A0E17 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left Column: Bio & Core Stats */}
        <div>
          <SectionHeader
            label="About Me"
            title={
              <>
                Architect.<br />
                Builder.<br />
                Problem Solver.
              </>
            }
            color="#88E03F"
          />

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            <p className="reveal">
              I'm a <strong className="text-white font-semibold">Full-Stack & Systems Developer</strong> based in Cairo, Egypt — specializing in React 18, Next.js, Node.js, and high-performance production applications. Ranked <strong className="text-[#88E03F] font-semibold">Top 1% of 15,000</strong> developers in the Ministry of Communications' DEPI initiative.
            </p>
            <p className="reveal delay-1">
              Beyond engineering, I am a co-founder of <strong className="text-white font-semibold">Mukth</strong> — an Arabic Quran memorisation EdTech platform serving global users — and co-owner of <strong className="text-white font-semibold">Heroes Gym</strong> in Cairo, where I engineered an offline-first desktop management and billing system running daily in production.
            </p>
            <p className="reveal delay-2">
              Driven by modern automation and intelligent software, I construct AI-powered extensions, workflow integrations, and full-stack solutions built to scale.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8">
            {stats.map((s) => (
              <div
                key={s.desc}
                className="reveal delay-3 tilt bg-[#0B0F19] border border-white/08 rounded-xl p-4 sm:p-5 text-center hover:border-[#88E03F]/40 hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <div className="font-syne font-black text-2xl sm:text-3xl text-[#88E03F]">
                  {s.num}
                </div>
                <div className="font-mono text-[11px] sm:text-xs text-slate-400 mt-1 font-medium">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Key Competency Cards */}
        <div className="space-y-3.5 sm:space-y-4">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`reveal delay-${i + 1} tilt bg-[#0B0F19] border border-white/08 rounded-xl p-4 sm:p-5 flex gap-4 items-start hover:border-white/20 hover:bg-[#0E1321] transition-all duration-300 shadow-sm`}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 border border-white/05"
                style={{ background: c.bg }}
              >
                {c.icon}
              </div>
              <div>
                <h3 className="font-syne font-bold text-sm sm:text-base text-white mb-1">
                  {c.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {c.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

