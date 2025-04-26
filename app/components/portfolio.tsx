'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Poppins } from 'next/font/google'
import UiUxSection from './portfolio/ui-ux-section'
import GraphicDesignSection from './portfolio/graphic-design-section'
import VideoEditingSection from './portfolio/video-editing-section'
import SunshineTonic from './portfolio/sunshine-tonic-section'
import ArchitecturalDesign from './portfolio/architectural-design-section'

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

type Category = 'all' | 'ui' | 'graphic' | 'video' | 'sunshine' | 'architectural'

interface PortfolioProps {
  openPopup: (content: React.ReactNode) => void;
}

interface Props {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  navigateToSection: (section: string) => void;
}

const Blob = ({ className, speed = 1 }: { className: string, speed?: number }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={
        isReducedMotion
          ? {}
          : {
              scale: [1, 1.1, 0.9, 1],
              rotate: [0, 10, -10, 0],
              x: [0, 20, -20, 0].map(x => x * speed),
              y: [0, -20, 20, 0].map(y => y * speed),
            }
      }
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M45.4,-77.5C58.9,-69.7,70,-57.4,79.2,-43.3C88.5,-29.2,95.9,-14.6,96.7,0.4C97.4,15.5,91.4,31,82.4,44.6C73.4,58.2,61.3,69.9,47.3,77.9C33.2,85.9,16.6,90.2,-0.2,90.5C-16.9,90.8,-33.9,87.2,-48.5,79.2C-63.1,71.2,-75.4,58.8,-83.7,44.3C-92,29.8,-96.3,14.9,-96.2,0C-96.1,-14.8,-91.6,-29.6,-83.5,-42.4C-75.3,-55.2,-63.5,-66,-49.8,-73.8C-36.1,-81.6,-20.5,-86.4,-3.6,-81.1C13.4,-75.8,31.9,-85.3,45.4,-77.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
  );
};

export default function Portfolio({ openPopup }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const categories: { key: Category; label: string; color: string }[] = [
    { key: 'all', label: 'All', color: 'bg-[#0052A3]' },
    { key: 'ui', label: 'UI/UX Design', color: 'bg-blue-500' },
    { key: 'graphic', label: 'Graphic Design', color: 'bg-red-500' },
    { key: 'video', label: 'Video Editing', color: 'bg-green-500' },
    { key: 'sunshine', label: 'Sunshine Tonic', color: 'bg-orange-500' },
    { key: 'architectural', label: 'Architectural Design', color: 'bg-purple-500' },
  ]

  const navigateToSection = (category: Category) => {
    setSelectedCategory(category);
    // You might want to add some scrolling logic here if needed
  };

  return (
    <section id="portfolio" ref={sectionRef} className={`relative py-16 bg-gradient-to-br from-yellow-400 to-yellow-300 overflow-hidden ${poppins.className}`}>
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <Blob className="w-[150vw] h-[150vw] sm:w-[130vw] sm:h-[130vw] md:w-[110vw] md:h-[110vw] lg:w-[90vw] lg:h-[90vw] text-blue-500 opacity-20 -top-1/3 -left-1/3" speed={0.5} />
        <Blob className="w-[140vw] h-[140vw] sm:w-[120vw] sm:h-[120vw] md:w-[100vw] md:h-[100vw] lg:w-[80vw] lg:h-[80vw] text-red-500 opacity-20 -bottom-1/3 -right-1/3" speed={0.3} />
        <Blob className="w-[130vw] h-[130vw] sm:w-[110vw] sm:h-[110vw] md:w-[90vw] md:h-[90vw] lg:w-[70vw] lg:h-[70vw] text-green-500 opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" speed={0.7} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8 text-[#0052A3]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h2>
        <motion.div 
          className="flex flex-wrap justify-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map(({ key, label, color }, index) => (
            <motion.button
              key={key}
              onClick={() => navigateToSection(key)}
              className={`m-2 px-4 py-2 rounded-full text-[#0052A3] border-2 border-[#0052A3] ${
                selectedCategory === key ? color + ' text-white' : 'bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {selectedCategory === 'all' ? (
            <AllProjects 
              openPopup={openPopup}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              navigateToSection={navigateToSection}
            />
          ) : (
            <>
              {selectedCategory === 'ui' && (
                <UiUxSection 
                  openPopup={openPopup} 
                  selectedCategory={selectedCategory} 
                  setSelectedCategory={setSelectedCategory}
                  navigateToSection={() => navigateToSection('ui')}
                />
              )}
              {selectedCategory === 'graphic' && (
                <GraphicDesignSection 
                  selectedCategory={selectedCategory} 
                  setSelectedCategory={setSelectedCategory}
                  navigateToSection={() => navigateToSection('graphic')}
                />
              )}
              {selectedCategory === 'video' && (
                <VideoEditingSection 
                  selectedCategory={selectedCategory} 
                  setSelectedCategory={setSelectedCategory}
                  navigateToSection={() => navigateToSection('video')}
                />
              )}
              {selectedCategory === 'sunshine' && (
                <SunshineTonic 
                  selectedCategory={selectedCategory} 
                  setSelectedCategory={setSelectedCategory}
                  navigateToSection={() => navigateToSection('sunshine')}
                />
              )}
              {selectedCategory === 'architectural' && (
                <ArchitecturalDesign 
                  bestWork={false} 
                  selectedCategory={selectedCategory} 
                  setSelectedCategory={setSelectedCategory}
                  navigateToSection={() => navigateToSection('architectural')}
                />
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function AllProjects({ 
  openPopup, 
  selectedCategory, 
  setSelectedCategory,
  navigateToSection
}: {
  openPopup: (content: React.ReactNode) => void;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  navigateToSection: (category: Category) => void;
}) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <motion.div 
        className="col-span-12 md:col-span-6 lg:col-span-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <UiUxSection 
          openPopup={openPopup}
          bestWork={2} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          navigateToSection={() => navigateToSection('ui')}
        />
      </motion.div>
      <motion.div 
        className="col-span-12 md:col-span-6 lg:col-span-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <GraphicDesignSection 
          bestWork={6} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          navigateToSection={() => navigateToSection('graphic')}
        />
      </motion.div>
      <motion.div 
        className="col-span-12 md:col-span-6 lg:col-span-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <VideoEditingSection 
          bestWork={4} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          navigateToSection={() => navigateToSection('video')}
        />
      </motion.div>
      <motion.div 
        className="col-span-12 md:col-span-6 lg:col-span-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <SunshineTonic 
          bestWork={4} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          navigateToSection={() => navigateToSection('sunshine')}
        />
      </motion.div>
      <motion.div 
        className="col-span-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ArchitecturalDesign 
          bestWork={false} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          navigateToSection={() => navigateToSection('architectural')}
        />
      </motion.div>
    </div>
  )
}

