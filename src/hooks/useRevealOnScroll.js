import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Mirrors update/app.js scroll reveals: adds class `in` when elements intersect.
 * Re-runs on route change so newly mounted pages are observed.
 */
export function useRevealOnScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal], [data-reveal-stagger]')
    if (!targets.length) return undefined

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    targets.forEach((el) => io.observe(el))
    return () => {
      targets.forEach((el) => io.unobserve(el))
      io.disconnect()
    }
  }, [pathname])
}
