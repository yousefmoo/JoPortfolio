export default function SectionHeader({ label, title, color = '#6366F1' }) {
  return (
    <div className="mb-12">
      <p className="reveal font-mono text-xs tracking-[.2em] uppercase mb-2" style={{color:'#818CF8'}}>
        {label}
      </p>
      <h2 className="reveal font-syne font-black text-white mb-4" style={{fontSize:'clamp(2rem,4vw,2.8rem)',lineHeight:1.1}}>
        {title}
      </h2>
      <div className="reveal h-0.5 w-12 rounded-full" style={{background:`linear-gradient(to right,${color},#22D3EE)`}}/>
    </div>
  )
}
