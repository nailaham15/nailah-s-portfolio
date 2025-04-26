'use client'

import { useState, useRef } from 'react'
import Hero from './components/hero'
import Portfolio from './components/portfolio'
import About from './components/about'
import Contact from './components/contact'
import Header from './components/header'
import Footer from './components/footer'
import Popup from './components/ui/popup'

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupContent, setPopupContent] = useState<React.ReactNode | null>(null)
  
  const portfolioRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const openPopup = (content: React.ReactNode | null) => {
    setPopupContent(content)
    setIsPopupOpen(!!content)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    setPopupContent(null)
  }

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Header 
        scrollToPortfolio={() => scrollToSection(portfolioRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <main>
        <Hero 
          scrollToPortfolio={() => scrollToSection(portfolioRef)}
          scrollToAbout={() => scrollToSection(aboutRef)}
        />
        <div ref={portfolioRef}>
          <Portfolio openPopup={openPopup} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        {popupContent}
      </Popup>
    </>
  )
}

