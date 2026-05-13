import { useEffect, useRef, useState } from 'react'

export default function AnimatedCount({ count, suffix = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          io.disconnect()
          const target = count
          const dur = 1400
          const t0 = performance.now()
          function step(t) {
            const k = Math.min(1, (t - t0) / dur)
            const eased = 1 - (1 - k) ** 3
            const v = Math.round(target * eased)
            setDisplay(v)
            if (k < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        })
      },
      { threshold: 0.5 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [count])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}
