import { Poppins } from 'next/font/google'
import { Instagram, Linkedin, Mail } from 'lucide-react'
import { TikTokIcon } from './icons/TikTokIcon'

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className={`bg-[#0052A3] text-white ${poppins.className}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-bold mb-1">
              Naepop!
            </div>
            <div className="text-sm mb-4 md:mb-0">
              Bringing ideas to life with a pop!
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.tiktok.com/@nailah.a.m?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <TikTokIcon size={24} />
            </a>
            <a href="https://www.instagram.com/nailah.a.m/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nailaham" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nailah.arjeyita.m@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm italic">
          Powered by audacity, and a whole lot of happy accidents
        </div>
      </div>
    </footer>
  )
}

