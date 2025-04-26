'use client'

import { Poppins } from 'next/font/google'
import { useEffect, useState } from 'react'

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

interface HeaderProps {
  scrollToPortfolio: () => void;
  scrollToAbout: () => void;
  scrollToContact: () => void;
}

export default function Header({ scrollToPortfolio, scrollToAbout, scrollToContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    } ${poppins.className}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div 
          className={`text-xl font-bold cursor-pointer transition-colors duration-300 ${
            isScrolled ? 'text-[#0052A3]' : 'text-white'
          }`} 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Naepop!
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={scrollToPortfolio} 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-[#0052A3]' : 'text-white hover:text-yellow-200'
                }`}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button 
                onClick={scrollToAbout} 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-[#0052A3]' : 'text-white hover:text-yellow-200'
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={scrollToContact} 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-[#0052A3]' : 'text-white hover:text-yellow-200'
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

