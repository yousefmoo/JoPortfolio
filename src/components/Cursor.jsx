import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  let rx = 0, ry = 0, mx = 0, my = 0

  useEffect(() => {
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.current.style.left = mx + 'px'
      dot.current.style.top = my + 'px'
    }
    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.current.style.left = rx + 'px'
      ring.current.style.top = ry + 'px'
      requestAnimationFrame(animate)
    }
    const onEnter = () => document.body.classList.add('hovering')
    const onLeave = () => document.body.classList.remove('hovering')

    document.addEventListener('mousemove', onMove)
    animate()

    const els = document.querySelectorAll('a,button,[data-hover]')
    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}
