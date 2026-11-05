export default function SectionHeader({ label, title, color = '#88E03F' }) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="reveal font-mono text-xs sm:text-sm tracking-[0.2em] uppercase mb-2.5 font-semibold" style={{ color }}>
        // {label}
      </p>
      <h2
        className="reveal font-syne font-black text-white mb-4 tracking-tight"
        style={{ fontSize: 'clamp(1.85rem, 4.5vw, 2.75rem)', lineHeight: 1.15 }}
      >
        {title}
      </h2>
      <div className="reveal h-1 w-14 rounded-full bg-gradient-to-r from-[#88E03F] to-[#00D2B4]" />
    </div>
  )
}
