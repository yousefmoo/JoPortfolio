import { useState } from 'react'
import useReveal from './useReveal'

const contactItems = [
  {
    icon: '✉',
    title: 'Email',
    value: 'yousefmohamed8733@gmail.com',
    href: 'mailto:yousefmohamed8733@gmail.com',
    primary: true,
  },
  {
    icon: '⌥',
    title: 'GitHub',
    value: 'github.com/yousefmoo',
    href: 'https://github.com/yousefmoo',
  },
  {
    icon: 'in',
    title: 'LinkedIn',
    value: 'linkedin.com/in/yousef-m-emam-y10m',
    href: 'https://linkedin.com/in/yousef-m-emam-y10m',
  },
  {
    icon: '☎',
    title: 'Direct Phone / WhatsApp',
    value: '+20 111 255 0714',
    href: 'tel:+201112550714',
  },
]

export default function Contact() {
  useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('yousefmohamed8733@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-28 bg-[#06080D] text-center">
      <div className="max-w-3xl mx-auto">
        <p className="reveal font-mono text-xs sm:text-sm text-[#88E03F] tracking-[0.25em] uppercase mb-4 font-semibold">
          // Get In Touch
        </p>

        <h2
          className="reveal font-syne font-black leading-tight mb-5 text-white tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)' }}
        >
          Let's build<br />
          <span className="grad-text">something great.</span>
        </h2>

        <p className="reveal delay-1 text-slate-300 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto font-normal">
          Available for Full-Stack / React / Node.js roles, enterprise consulting, and specialized automation workflows.
          Immediate start from Cairo, Egypt — Remote, Hybrid, or Relocation.
        </p>

        {/* Action Grid for Mobile & Desktop */}
        <div className="reveal delay-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left mb-8">
          {contactItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={`tilt p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                item.primary
                  ? 'bg-[#0B130E] border-[#88E03F]/40 hover:border-[#88E03F] hover:shadow-[0_0_25px_rgba(136,224,63,0.15)]'
                  : 'bg-[#0B0F19] border-white/08 hover:border-white/20 hover:bg-[#0E1321]'
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="w-10 h-10 rounded-xl bg-white/05 border border-white/08 flex items-center justify-center font-mono text-sm text-[#88E03F] shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {item.title}
                  </div>
                  <div className="text-xs sm:text-sm text-white font-medium truncate">
                    {item.value}
                  </div>
                </div>
              </div>
              <span className="text-slate-500 group-hover:text-white transition-colors shrink-0 ml-2">
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* Quick Email Copy Button */}
        <div className="reveal delay-3 inline-flex items-center gap-3 bg-white/03 border border-white/08 px-4 py-2 rounded-xl text-xs font-mono text-slate-400">
          <span>Need quick email?</span>
          <button
            onClick={copyEmail}
            className="text-[#88E03F] hover:underline font-bold"
          >
            {copied ? '✓ Copied to clipboard!' : 'Copy Email'}
          </button>
        </div>
      </div>
    </section>
  )
}

