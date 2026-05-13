export default function Pillars() {
  return (
    <section className="section tight">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <h2>
            Four pillars. <span className="accent">One outcome.</span>
          </h2>
          <div className="side">
            <span className="eyebrow">What we focus on · 02</span>
            <p>Every TechinEdu program ladders up to a learner who can think, build, and lead in a connected world.</p>
          </div>
        </div>

        <div className="pillars" data-reveal-stagger>
          <article className="pillar">
            <div className="pillar-num">P-01</div>
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 19V8l8-4 8 4v11M9 19v-6h6v6" />
              </svg>
            </div>
            <h3>No learning gaps</h3>
            <div className="pillar-body">
              <p>
                Targeted support for learners who need structure and consistent guidance — not another worksheet.
              </p>
            </div>
          </article>
          <article className="pillar">
            <div className="pillar-num">P-02</div>
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="13" rx="2" />
                <path d="M8 21h8M12 18v3" />
              </svg>
            </div>
            <h3>Digital readiness</h3>
            <div className="pillar-body">
              <p>Technology fluency, safe digital behavior, and practical future-ready skills they actually use.</p>
            </div>
          </article>
          <article className="pillar">
            <div className="pillar-num">P-03</div>
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="9" cy="8" r="3.2" />
                <circle cx="17" cy="10" r="2.6" />
                <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5M14 20c0-2.4 1.8-4 4-4s3.5 1.4 3.5 4" />
              </svg>
            </div>
            <h3>Mentorship access</h3>
            <div className="pillar-body">
              <p>
                Young people connected to caring mentors, role models, and the kind of opportunities that compound.
              </p>
            </div>
          </article>
          <article className="pillar">
            <div className="pillar-num">P-04</div>
            <div className="pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3l2.5 5L20 9l-4 4 1 6-5-2.5L7 19l1-6-4-4 5.5-1z" />
              </svg>
            </div>
            <h3>Women empowerment</h3>
            <div className="pillar-body">
              <p>Programs that help girls lead with confidence and build long-term agency over their futures.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
