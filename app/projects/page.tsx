'use client'

import { useState, useRef, useEffect, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { useSearchParams } from 'next/navigation'
import ProjectNavigation from '../components/ProjectNavigation'
import UiUxSection from '../components/portfolio/ui-ux-section'
import GraphicDesignSection from '../components/portfolio/graphic-design-section'
import VideoEditingSection from '../components/portfolio/video-editing-section'
import SunshineTonic from '../components/portfolio/sunshine-tonic-section'
import ArchitecturalDesign from '../components/portfolio/architectural-design-section'
import ProjectPopup from '../components/ProjectPopup'

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

type Category = 'all' | 'ui' | 'graphic' | 'video' | 'sunshine' | 'architectural'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  tools: string[];
  overview: string;
  process: string[];
  features: string[];
  visualIdentity: string;
  screens: string[];
  captions: string[];
}

function ProjectContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const searchParams = useSearchParams()
  const category = searchParams.get('category') as Category || 'all'

  const openPopup = (project: Project) => {
    setSelectedProject(project)
  }

  const closePopup = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <ProjectNavigation />
      <section ref={sectionRef} className={`relative py-16 bg-gradient-to-br from-yellow-400 to-yellow-300 overflow-hidden ${poppins.className}`}>
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          {/* Animated blobs */}
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-center mb-8 text-[#0052A3]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Portfolio
          </motion.h2>
          
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {category === 'all' && (
              <AllProjects openPopup={openPopup} />
            )}
            {category === 'ui' && (
              <UiUxSection openPopup={openPopup} selectedCategory={category} setSelectedCategory={() => {}} />
            )}
            {category === 'graphic' && (
              <GraphicDesignSection openPopup={openPopup} selectedCategory={category} setSelectedCategory={() => {}} />
            )}
            {category === 'video' && (
              <VideoEditingSection openPopup={openPopup} selectedCategory={category} setSelectedCategory={() => {}} />
            )}
            {category === 'sunshine' && (
              <SunshineTonic openPopup={openPopup} />
            )}
            {category === 'architectural' && (
              <ArchitecturalDesign openPopup={openPopup} bestWork={false} selectedCategory={category} setSelectedCategory={() => {}} navigateToSection={() => {}} />
            )}
          </motion.div>
        </div>

        {selectedProject && (
          <ProjectPopup
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={closePopup}
            onPrevious={() => {/* Implement previous project logic */}}
            onNext={() => {/* Implement next project logic */}}
          />
        )}
      </section>
    </>
  )
}

function AllProjects({ openPopup }: { openPopup: (project: Project) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <UiUxSection openPopup={openPopup} selectedCategory="all" setSelectedCategory={() => {}} bestWork={2} />
      </div>
      <div className="col-span-1">
        <GraphicDesignSection openPopup={openPopup} selectedCategory="all" setSelectedCategory={() => {}} bestWork={6} />
      </div>
      <div className="col-span-1">
        <VideoEditingSection openPopup={openPopup} selectedCategory="all" setSelectedCategory={() => {}} bestWork={4} />
      </div>
      <div className="col-span-1">
        <SunshineTonic openPopup={openPopup} bestWork={4} selectedCategory="all" setSelectedCategory={() => {}} navigateToSection={() => {}} />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <ArchitecturalDesign openPopup={openPopup} bestWork={false} selectedCategory="all" setSelectedCategory={() => {}} navigateToSection={() => {}} />
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectContent />
    </Suspense>
  )
}

