import { useEffect } from 'react'

// Global 3D tilt for any element with the `tilt` class (desktop / fine pointers only)
export default function useTilt(max = 7) {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e) => {
      const el = e.target.closest && e.target.closest('.tilt')
      if (!el) return
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      el.style.setProperty('--ry', `${(px * max * 2).toFixed(2)}deg`)
      el.style.setProperty('--rx', `${(-py * max * 2).toFixed(2)}deg`)
    }
    const onOut = (e) => {
      const el = e.target.closest && e.target.closest('.tilt')
      if (!el || el.contains(e.relatedTarget)) return
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseout', onOut)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseout', onOut)
    }
  }, [max])
}
