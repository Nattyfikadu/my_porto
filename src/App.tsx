import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TechStrip from './components/TechStrip'
import About from './components/About'
import Resume from './components/Resume'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main className="wrap">
        <Hero />
      </main>
      <TechStrip />
      <main className="wrap">
        <About />
        <Resume />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
