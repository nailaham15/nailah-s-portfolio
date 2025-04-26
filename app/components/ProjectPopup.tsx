'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  tools: string[];
  overview: string;
  process: string;
  results: string;
  screens: string[];
}

interface ProjectPopupProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ProjectPopup({
  project,
  isOpen,
  onClose,
  onPrevious,
  onNext
}: ProjectPopupProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.screens.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.screens.length - 1 : prevIndex - 1
    );
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg w-11/12 h-5/6 max-w-6xl overflow-y-auto"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="relative aspect-video mb-4">
                <Image
                  src={project.screens[currentImageIndex]}
                  alt={`${project.title} - Screen ${currentImageIndex + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="flex space-x-2 mb-4 overflow-x-auto">
                {project.screens.map((screen, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
                      index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <Image
                      src={screen}
                      alt={`${project.title} - Screen ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="mb-4">{project.overview}</p>
              
              <h3 className="text-xl font-semibold mb-2">Process</h3>
              <p className="mb-4">{project.process}</p>
              
              <h3 className="text-xl font-semibold mb-2">Results</h3>
              <p className="mb-4">{project.results}</p>
              
              <div className="flex justify-around mt-6">
                <button
                  onClick={onPrevious}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center"
                >
                  <ChevronLeft size={20} className="mr-2" />
                  Previous Project
                </button>
                <button
                  onClick={onNext}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center"
                >
                  Next Project
                  <ChevronRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

