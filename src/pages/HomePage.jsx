import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Pillars from '../components/Pillars'
import BridgeStory from '../components/BridgeStory'
import ProgramsTeaser from '../components/ProgramsTeaser'
import HomeBigCta from '../components/HomeBigCta'
import './Pages.css'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Pillars />
      <BridgeStory />
      <ProgramsTeaser />
      <HomeBigCta />
    </>
  )
}
