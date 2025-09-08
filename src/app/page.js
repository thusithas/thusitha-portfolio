// page.js (updated)
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import BeyondCode from './components/BeyondCode'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingShapes from './components/FloatingShapes'

function page() {
  return (
    <div>
      <FloatingShapes />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <BeyondCode />
      <Contact />
      <Footer />
    </div>
  )
}

export default page