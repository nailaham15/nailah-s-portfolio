'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Download, Mail, MessageCircle, Linkedin, Instagram } from 'lucide-react'
import { TikTokIcon } from './icons/TikTokIcon'

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

const faqs = [
  {
    question: "What is your design process?",
    answer: "My design process starts with understanding the problem and user needs through research. From there, I move into ideation, wireframing, and prototyping, followed by testing and refining based on feedback. It's an iterative approach that ensures the final design is both functional and user-friendly."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary depending on the project's scope and complexity. A straightforward landing page might take 1–2 weeks, while a more comprehensive app design could take 4–8 weeks or more. I always align expectations upfront by discussing clear timelines and milestones."
  },
  {
    question: "Do you offer revisions on your designs?",
    answer: "Yes! I include a set number of revision rounds in every project. I value open collaboration and believe feedback is key to delivering results that truly meet your needs and vision."
  },
  {
    question: "Can you work with remote teams?",
    answer: "Absolutely. I have experience collaborating with remote teams across various time zones and use tools like Figma, Slack, Notion, and Zoom to ensure seamless communication and project flow."
  }
]

const Blob: React.FC<{ className: string }> = ({ className }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      scale: [1, 1.1, 0.9, 1],
      rotate: [0, 10, -10, 0],
      x: [0, 5, -5, 0],
      y: [0, -5, 5, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  >
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M45.4,-77.5C58.9,-69.7,70,-57.4,79.2,-43.3C88.5,-29.2,95.9,-14.6,96.7,0.4C97.4,15.5,91.4,31,82.4,44.6C73.4,58.2,61.3,69.9,47.3,77.9C33.2,85.9,16.6,90.2,-0.2,90.5C-16.9,90.8,-33.9,87.2,-48.5,79.2C-63.1,71.2,-75.4,58.8,-83.7,44.3C-92,29.8,-96.3,14.9,-96.2,0C-96.1,-14.8,-91.6,-29.6,-83.5,-42.4C-75.3,-55.2,-63.5,-66,-49.8,-73.8C-36.1,-81.6,-20.5,-86.4,-3.6,-81.1C13.4,-75.8,31.9,-85.3,45.4,-77.5Z" transform="translate(100 100)" />
    </svg>
  </motion.div>
)

export default function Contact() {
  return (
    <section className={`relative py-16 bg-gradient-to-br from-yellow-300 to-yellow-200 overflow-hidden ${poppins.className}`}>
      <Blob className="w-[80vw] h-[80vw] text-pink-500 opacity-50 -top-1/4 -left-1/4" />
      <Blob className="w-[60vw] h-[60vw] text-green-500 opacity-50 -bottom-1/4 -right-1/4" />
      <Blob className="w-[40vw] h-[40vw] text-orange-500 opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-[#0052A3]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Contact Me Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 relative overflow-hidden"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#0052A3]">Contact Me</h3>
              <p className="text-sm sm:text-base mb-4 sm:mb-6 text-gray-700">Let's connect! Choose your preferred way to reach out.</p>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Professional Contacts */}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-600 uppercase tracking-wider">Professional</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <a href="mailto:nailah.arjeyita.m@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full h-12 bg-[#0052A3] hover:bg-[#004A94] text-white rounded-lg transition-all duration-300">
                        <Mail className="mr-2 h-4 w-4" /> 
                        Email
                      </Button>
                    </a>
                    <a href="https://wa.me/6287730353885" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-all duration-300">
                        <MessageCircle className="mr-2 h-4 w-4" /> 
                        WhatsApp
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/nailaham" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full h-12 bg-[#0077B5] hover:bg-[#005885] text-white rounded-lg transition-all duration-300">
                        <Linkedin className="mr-2 h-4 w-4" /> 
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-600 uppercase tracking-wider">Social Media</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://www.instagram.com/nailah.a.m/" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full h-12 bg-[#E4405F] hover:bg-[#D53A5C] text-white rounded-lg transition-all duration-300">
                        <Instagram className="mr-2 h-4 w-4" /> 
                        Instagram
                      </Button>
                    </a>
                    <a href="https://www.tiktok.com/@nailah.a.m?lang=en" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-300">
                        <TikTokIcon className="mr-2 h-4 w-4" /> 
                        TikTok
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How I Work Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#0052A3]">How I Work</h3>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    value={`item-${index}`} 
                    key={`faq-${index}`} 
                    className="bg-white rounded-lg overflow-hidden border border-gray-200"
                  >
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors text-gray-800">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-gray-50">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <a href="/cv/ATS CV_Nailah A M.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="mt-6 block"
              >
                <Button className="w-full h-12 bg-[#0052A3] hover:bg-[#004A94] text-white rounded-lg transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" /> Download My CV
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

