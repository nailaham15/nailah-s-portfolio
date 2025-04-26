'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ExternalLink, X, Maximize, Minimize } from 'lucide-react'
import Popup from '../ui/popup'
import ReactMarkdown from 'react-markdown'

interface ArchitecturalProject {
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

interface ArchitecturalDesignPopupProps {
  project: ArchitecturalProject | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  navigateToSection: () => void;
}

export default function ArchitecturalDesignPopup({
  project,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  navigateToSection
}: ArchitecturalDesignPopupProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reset scroll when changing images
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentImageIndex]);

  // Reset to first image when popup is reopened
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setIsLoading(true);
    }
  }, [isOpen]);

  if (!project) return null;

  const nextImage = () => {
    setIsLoading(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === (project.screens?.length || 0) - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setIsLoading(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? (project.screens?.length || 1) - 1 : prevIndex - 1
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
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
            <span key={index} className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        
        <div ref={scrollContainerRef} className="relative aspect-video mb-4 rounded-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
            </div>
          )}
          <div className="relative h-full overflow-y-auto will-change-transform">
            <div 
              onClick={toggleFullscreen}
              className="cursor-zoom-in"
            >
          <Image
                src={project.screens[currentImageIndex]}
                alt={project.captions[currentImageIndex]}
                width={800}
                height={450}
                style={{ 
                  width: '100%',
                  height: 'auto',
                  maxWidth: '100%',
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  objectFit: "contain"
                }}
                className={`transition-opacity duration-150 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                priority={currentImageIndex === 0}
                onLoad={() => setIsLoading(false)}
                loading={currentImageIndex === 0 ? "eager" : "lazy"}
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAkKSAkKDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHRz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent rounded-b-lg">
            <div className="text-center text-white text-sm font-medium py-4 px-4">
              {project.captions[currentImageIndex]}
            </div>
          </div>
          <button
            onClick={previousImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Fullscreen View */}
        {isFullscreen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={toggleFullscreen}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
              >
                <X size={24} />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-150 z-50"
              >
                <ChevronLeft size={32} />
              </button>

              <div 
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={project.screens[currentImageIndex]}
                  alt={project.captions[currentImageIndex]}
                  width={1920}
                  height={1080}
                  style={{ 
                    maxWidth: '95vw',
                    maxHeight: '95vh',
                    width: 'auto',
                    height: 'auto',
                    objectFit: "contain"
                  }}
                  quality={100}
                  priority={true}
                />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-150 z-50"
              >
                <ChevronRight size={32} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
                <div className="text-center text-white text-sm font-medium py-4 px-4">
                  {project.captions[currentImageIndex]}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Thumbnails without captions */}
        <div className="relative w-full">
          <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-100 py-4 px-2 gap-4 snap-x snap-mandatory">
            {project.screens.map((image, index) => (
              <div key={index} className="flex-shrink-0 snap-center">
                <button
                  onClick={() => {
                    setIsLoading(true);
                    setCurrentImageIndex(index);
                  }}
                className={`w-16 h-16 rounded-md overflow-hidden focus:outline-none ${
                  index === currentImageIndex ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-white' : ''
                }`}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={image}
                      alt={project.captions[index]}
                      fill
                      sizes="64px"
                      style={{ objectFit: 'cover' }}
                    className="rounded-sm"
                  />
                </div>
              </button>
            </div>
          ))}
        </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown>
                {project.overview}
              </ReactMarkdown>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Scope & Role</h3>
            <ul className="space-y-1">
              {project.process.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Project Impact</h3>
            <ul className="space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {project.visualIdentity && project.visualIdentity.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Design Identity</h3>
              <div className="prose prose-sm max-w-none">
                <ReactMarkdown>
                  {project.visualIdentity}
                </ReactMarkdown>
              </div>
            </div>
        )}
        </div>
        
        <div className="flex justify-between mt-6">
          <button
            onClick={onPrevious}
            className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300 flex items-center"
          >
            <ChevronLeft size={20} className="mr-2" />
            Previous Project
          </button>
          <button
            onClick={() => {
              navigateToSection();
              onClose();
            }}
            className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300 flex items-center"
          >
            More Projects
            <ExternalLink size={20} className="ml-2" />
          </button>
          <button
            onClick={onNext}
            className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300 flex items-center"
          >
            Next Project
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </Popup>
  );
}

