import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Menu from './components/Menu'
import About from './components/About'
import Catering from './components/Catering'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Videos from './components/Videos'
import Shop from './components/Shop'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-up').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="font-space bg-bg min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-amber focus:text-bg focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Banner />
        <Menu />
        <About />
        <Catering />
        <Reviews />
        <Location />
        <Videos />
        <Shop />
      </main>
      <Footer />
    </div>
  )
}

export default App
