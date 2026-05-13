import AnimatedCount from './AnimatedCount'

export default function About() {
  return (
    <section className="section" id="who">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <h2>
            Who we are — and why <span className="accent">&quot;the bridge&quot;</span> matters.
          </h2>
          <div className="side">
            <span className="eyebrow">Who we are · 01</span>
            <p>
              TechinEdu is a youth-led nonprofit movement designing practical learning pathways for the world young
              people are growing into — not the one we grew up with.
            </p>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-copy" data-reveal>
            <p>
              Most learners we work with don&apos;t lack ambition — they lack{' '}
              <strong>access, structure, and someone who shows up consistently.</strong> So we close those three gaps at
              once.
            </p>
            <p>
              Our work blends classroom support, mentorship, and digital learning to build the full learner: confident,
              capable, and future-ready. We prioritize systems that scale impact — not noise.
            </p>

            <div className="about-stats" data-reveal-stagger>
              <article className="stat">
                <span className="v">
                  <AnimatedCount count={5300} suffix="+" />
                </span>
                <span className="l">Young learners supported</span>
              </article>
              <article className="stat">
                <span className="v">
                  <AnimatedCount count={200} suffix="+" />
                </span>
                <span className="l">Mentors &amp; volunteers engaged</span>
              </article>
              <article className="stat">
                <span className="v">
                  <AnimatedCount count={9} suffix="" />
                </span>
                <span className="l">High-impact initiatives launched</span>
              </article>
            </div>
          </div>

          <div className="about-mosaic" data-reveal>
            <div className="ph" style={{ backgroundImage: "url('/update/assets/p02.jpg')" }}>
              <span className="badge">★ The Bridge</span>
            </div>
            <div className="ph" style={{ backgroundImage: "url('/update/assets/p03.jpg')" }} />
            <div className="ph">
              <h3>How we deliver</h3>
              <p>
                01 · Project-based learning
                <br />
                02 · Structured mentorship
                <br />
                03 · Digital skills for real opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
