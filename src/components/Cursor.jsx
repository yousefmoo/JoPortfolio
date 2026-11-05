import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktops)
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768
    if (isTouch) return

    let rx = 0, ry = 0, mx = 0, my = 0
    let rafId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) {
        dot.current.style.left = mx + 'px'
        dot.current.style.top = my + 'px'
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      if (ring.current) {
        ring.current.style.left = rx + 'px'
        ring.current.style.top = ry + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => document.body.classList.add('hovering')
    const onLeave = () => document.body.classList.remove('hovering')

    document.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(animate)

    const els = document.querySelectorAll('a, button, [data-hover]')
    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      if (rafId) cancelAnimationFrame(rafId)
      document.body.classList.remove('hovering')
    }
  }, [])

  return (
    <>
      <div className="cursor-dot hidden md:block" ref={dot} />
      <div className="cursor-ring hidden md:block" ref={ring} />
    </>
  )
}
