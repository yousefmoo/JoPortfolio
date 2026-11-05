import { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight
    let animId

    // Adapt particle count for mobile to preserve battery and 60fps
    const particleCount = W < 768 ? 35 : 70

    const dots = Array.from({ length: particleCount }, () => ({
      x: Math.random() * W, 
      y: Math.random() * H,
      vx: (Math.random() - .5) * .25, 
      vy: (Math.random() - .5) * .25,
      r: Math.random() * 1.4 + .4, 
      op: Math.random() * .28 + .05,
      isTeal: Math.random() > 0.5,
    }))

    const onResize = () => {
      if (!canvas) return
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize, { passive: true })

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      
      dots.forEach(d => {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0) d.x = W
        if (d.x > W) d.x = 0
        if (d.y < 0) d.y = H
        if (d.y > H) d.y = 0

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = d.isTeal 
          ? `rgba(0, 210, 180, ${d.op})` 
          : `rgba(136, 224, 63, ${d.op})`
        ctx.fill()
      })

      const maxDist = W < 768 ? 85 : 120
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(136, 224, 63, ${.05 * (1 - dist / maxDist)})`
            ctx.lineWidth = .4
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => { 
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize) 
    }
  }, [])

  return <canvas ref={canvasRef} id="particles" />
}
