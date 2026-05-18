import useReveal from './useReveal'

const links = [
  { label: '✉  yousefmohamed8733@gmail.com', href: 'mailto:yousefmohamed8733@gmail.com' },
  { label: '⌥  github.com/yousefmoo', href: 'https://github.com/yousefmoo' },
  { label: 'in  linkedin.com/in/yousef-m-emam-y10m', href: 'https://linkedin.com/in/yousef-m-emam-y10m' },
  { label: '☎  +20 111 255 0714', href: 'tel:+201112550714' },
]

export default function Contact() {
  useReveal()
  return (
    <section id="contact" className="relative z-10 px-8 md:px-16 py-28 bg-[#07070F] text-center">
      <div className="max-w-2xl mx-auto">
        <p className="reveal font-mono text-xs text-indigo-400 tracking-[.2em] uppercase mb-4">Get In Touch</p>
        <h2 className="reveal font-syne font-black leading-tight mb-6" style={{fontSize:'clamp(2rem,5vw,3.5rem)'}}>
          Let's build<br/>
          <span className="grad-text">something great.</span>
        </h2>
        <p className="reveal delay-1 text-slate-400 text-base leading-relaxed mb-10">
          Open to junior React / Full-Stack roles, freelance projects, and collaborations.
          Available immediately from Cairo, Egypt — remote-first or relocation.
        </p>
        <div className="reveal delay-2 flex flex-wrap justify-center gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              className="inline-flex items-center gap-2 border border-indigo-500/25 bg-[#0F0F23] rounded-xl px-5 py-3.5 font-mono text-sm text-white hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/04 hover:-translate-y-0.5 transition-all duration-300">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
