export default function Marquee() {
  const line = (
    <>
      Digital literacy <span className="dot" /> Mentorship <span className="dot" /> Community outreach{' '}
      <span className="dot" /> Girls who code <span className="dot" /> Workshops <span className="dot" /> Partnerships{' '}
      <span className="dot" />
    </>
  )

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  )
}
