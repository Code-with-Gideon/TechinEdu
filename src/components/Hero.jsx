import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedCount from './AnimatedCount'

const FRAMES = [
  { src: '/update/assets/p01.jpg', caption: 'ICT class · Lagos secondary school' },
  { src: '/update/assets/p05.jpg', caption: 'Hands-on digital literacy' },
  { src: '/update/assets/p06.jpg', caption: 'Mentor-led session' },
  { src: '/update/assets/p04.jpg', caption: 'Community outreach day' },
  { src: '/update/assets/p08.jpg', caption: 'Workshop in progress' },
]

const LEAVE_MS = 1500
const TICK_MS = 4200

export default function Hero() {
  const [active, setActive] = useState(0)
  const [leaving, setLeaving] = useState(null)
  const [titleIn, setTitleIn] = useState(false)
  const intervalRef = useRef(null)
  const leaveTimerRef = useRef(null)
  const heroRef = useRef(null)
  const cycleRef = useRef(null)
  const innerRef = useRef(null)

  const clearLeaveTimer = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current)
      leaveTimerRef.current = null
    }
  }

  const scheduleLeavingClear = () => {
    clearLeaveTimer()
    leaveTimerRef.current = setTimeout(() => {
      setLeaving(null)
      leaveTimerRef.current = null
    }, LEAVE_MS)
  }

  const startCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % FRAMES.length
        setLeaving(i)
        scheduleLeavingClear()
        return next
      })
    }, TICK_MS)
  }

  useEffect(() => {
    startCycle()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      clearLeaveTimer()
    }
    // Hero cycle is intentionally mounted once (matches static prototype).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDot = (idx) => {
    if (idx === active) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      startCycle()
      return
    }
    if (intervalRef.current) clearInterval(intervalRef.current)
    setLeaving(active)
    setActive(idx)
    scheduleLeavingClear()
    startCycle()
  }

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => setTitleIn(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    const cycle = cycleRef.current
    const inner = innerRef.current
    if (!hero || !cycle || !inner) return undefined

    const onScroll = () => {
      const y = window.scrollY
      if (y > window.innerHeight) return
      const k = Math.min(1, y / window.innerHeight)
      cycle.style.transform = `translateY(${k * 60}px)`
      inner.style.transform = `translateY(${k * -30}px)`
      inner.style.opacity = String(1 - k * 0.5)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const frame = FRAMES[active]
  const indexLabel = `${String(active + 1).padStart(2, '0')} / ${String(FRAMES.length).padStart(2, '0')}`

  return (
    <section ref={heroRef} className="hero">
      <div ref={cycleRef} className="hero-cycle">
        {FRAMES.map((f, idx) => {
          let cls = 'frame'
          if (idx === active) cls += ' is-active'
          if (leaving !== null && idx === leaving) cls += ' is-prev'
          return (
            <div
              key={f.src}
              className={cls}
              style={{ backgroundImage: `url('${f.src}')` }}
              data-caption={f.caption}
            />
          )
        })}
      </div>

      <div className="sticker" aria-hidden="true">
        <div className="inner">
          A youth-led
          <br />
          movement
          <br />★ since 2022
        </div>
      </div>

      <div ref={innerRef} className={`wrap hero-inner ${titleIn ? 'in' : ''}`}>
        <div className="hero-row">
          <h1 className="hero-title">
            <span className="mask-reveal">
              <span>We are the</span>
            </span>
            <br />
            <span className="mask-reveal">
              <span className="underline">bridge</span>
            </span>{' '}
            <span className="mask-reveal">
              <span className="accent">between</span>
            </span>
            <br />
            <span className="mask-reveal">
              <span>potential&nbsp;&amp;&nbsp;progress.</span>
            </span>
          </h1>
          <div className="hero-meta" data-reveal>
            <p className="hero-lede">
              TechinEdu builds joyful learning experiences where young people grow in confidence, digital fluency, and
              life-ready skills — through mentorship and a community that shows up.
            </p>
            <div className="hero-actions">
              <Link to="/funding" className="btn btn-marigold">
                Fund the work <span className="arr">↗</span>
              </Link>
              <Link to="/volunteer" className="btn btn-light">
                Become a volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap hero-strip">
        <div className="hero-strip-inner" data-reveal>
          <div className="hero-frame-info">
            <span className="eyebrow on-dark">
              Now showing · <span className="n">{indexLabel}</span>
            </span>
            <span className="t">{frame.caption}</span>
            <div className="hero-dots" aria-label="Photo navigation">
              {FRAMES.map((_, idx) => (
                <button
                  key={FRAMES[idx].src}
                  type="button"
                  aria-label={`Frame ${idx + 1}`}
                  className={idx === active ? 'is-active' : ''}
                  onClick={() => handleDot(idx)}
                />
              ))}
            </div>
          </div>
          <div className="hero-stat">
            <span className="v">
              <AnimatedCount count={5300} suffix="+" />
            </span>
            <span className="l">Learners reached</span>
          </div>
          <div className="hero-stat">
            <span className="v">
              <AnimatedCount count={200} suffix="+" />
            </span>
            <span className="l">Mentors &amp; volunteers</span>
          </div>
          <div className="hero-stat">
            <span className="v">
              <AnimatedCount count={9} suffix="" />
            </span>
            <span className="l">High-impact initiatives</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="line" />
        <span>Field notes ↓</span>
      </div>
    </section>
  )
}
