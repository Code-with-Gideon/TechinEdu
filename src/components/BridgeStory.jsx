export default function BridgeStory() {
  return (
    <section className="section" id="story">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <h2>
            How a single learner crosses <span className="accent">the bridge.</span>
          </h2>
          <div className="side">
            <span className="eyebrow">Story arc · 03</span>
            <p>
              An honest sketch of what a young learner walks through with TechinEdu — from first session to confident
              next step.
            </p>
          </div>
        </div>

        <div className="bridge" data-reveal-stagger>
          <article className="bridge-col">
            <div className="ix">01</div>
            <h3>Find us</h3>
            <p>A school visit, a community workshop, an Instagram post, or a friend who already crossed the bridge.</p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="sticker-tag">Outreach</span>
              <span className="sticker-tag terra">School visits</span>
            </div>
          </article>
          <article className="bridge-col is-photo">
            <div className="ph" style={{ backgroundImage: "url('/update/assets/p09.jpg')" }} />
          </article>
          <article className="bridge-col">
            <div className="ix marigold">02</div>
            <h3>Show up</h3>
            <p>
              Hands-on sessions in computer literacy, online safety, and &quot;make-something&quot; projects that build
              real skill.
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="sticker-tag mint">Workshops</span>
              <span className="sticker-tag">ICT</span>
            </div>
          </article>
          <article className="bridge-col">
            <div className="ix terra">03</div>
            <h3>Get matched</h3>
            <p>One-to-one mentor pairing — someone whose path looks a little like the one this learner could walk next.</p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="sticker-tag plum">Mentorship</span>
            </div>
          </article>
          <article className="bridge-col is-photo">
            <div className="ph" style={{ backgroundImage: "url('/update/assets/p13.jpg')" }} />
          </article>
          <article className="bridge-col">
            <div className="ix">04</div>
            <h3>Cross over</h3>
            <p>
              A learner who can name their interest, navigate a device, ask better questions, and reach for the next
              opportunity.
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="sticker-tag">Outcomes</span>
              <span className="sticker-tag terra">Confidence</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
