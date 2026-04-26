import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Funding from './components/Funding'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Funding />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
