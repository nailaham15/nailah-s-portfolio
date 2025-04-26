'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Blob = ({ className, speed }: { className: string, speed: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth - 0.5) * speed;
      const moveY = (clientY / window.innerHeight - 0.5) * speed;
      setPosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [speed]);

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        x: [0, 20, -20, 0].map(x => x + position.x * 50),
        y: [0, -20, 20, 0].map(y => y + position.y * 50),
        rotate: [0, 10, -10, 0],
        scale: [1, 1.05, 0.95, 1],
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
  );
};

export default function Hero({ scrollToPortfolio, scrollToAbout }: { scrollToPortfolio: () => void, scrollToAbout: () => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-yellow-400">
      {/* Blob shapes */}
      <Blob 
        className="w-[150vw] h-[150vw] sm:w-[130vw] sm:h-[130vw] md:w-[110vw] md:h-[110vw] lg:w-[90vw] lg:h-[90vw] text-blue-500 opacity-70 -top-1/3 -left-1/3" 
        speed={0.5}
      />
      <Blob 
        className="w-[130vw] h-[130vw] sm:w-[110vw] sm:h-[110vw] md:w-[90vw] md:h-[90vw] lg:w-[70vw] lg:h-[70vw] text-red-500 opacity-70 -bottom-1/3 -right-1/3" 
        speed={0.3}
      />
      <Blob 
        className="w-[110vw] h-[110vw] sm:w-[90vw] sm:h-[90vw] md:w-[70vw] md:h-[70vw] lg:w-[50vw] lg:h-[50vw] text-green-500 opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
        speed={0.7}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 text-white"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-[#0052A3]">Naepop!</span>
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-white"
          variants={itemVariants}
        >
          A multifaceted creative blending design, technology, and storytelling.
        </motion.p>
        <motion.p 
          className="text-sm sm:text-base mb-8 max-w-2xl mx-auto text-white px-4"
          variants={itemVariants}
        >
          Hi, I'm Nailah (or Naepop)—a multidisciplinary designer focused on UI/UX, with skills in graphic design, landing pages, and video editing. I also run Sunshine Tonic, my handmade accessory brand, and love sharing creative content on TikTok.
        </motion.p>
        <motion.div 
          className="space-x-4"
          variants={itemVariants}
        >
          <button
            onClick={scrollToPortfolio}
            className="bg-[#0052A3] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#004A94] transition duration-300"
          >
            Explore My Work
          </button>
          <button
            onClick={scrollToAbout}
            className="bg-white text-[#0052A3] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            About Me
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="w-6 h-6 bg-white rounded-full" />
      </motion.div>
    </div>
  )
}

