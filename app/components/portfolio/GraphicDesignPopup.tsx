'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'
import Popup from '../ui/popup'
import { useInView } from 'react-intersection-observer'
import type { Project } from './ClientSideGraphicDesignGrid'

interface GraphicDesignPopupProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  navigateToSection: () => void;
}

export default function GraphicDesignPopup({
  project,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  navigateToSection
}: GraphicDesignPopupProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView: isInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (galleryRef.current) {
      inViewRef(galleryRef.current);
    }
  }, [inViewRef]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentImageIndex]);

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsLoading(true);
  }, [isInView]);

  const nextImage = useCallback(() => {
    if (!project) return;
    setIsLoading(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === (project.screens?.length || 0) - 1 ? 0 : prevIndex + 1
    );
  }, [project]);

  const previousImage = useCallback(() => {
    if (!project) return;
    setIsLoading(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? (project.screens?.length || 1) - 1 : prevIndex - 1
    );
  }, [project]);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  const getCurrentImage = useCallback(() => {
    if (!project) return '';
    return project.screens?.[currentImageIndex] || project.image;
  }, [project, currentImageIndex]);

  const getImageAlt = useCallback(() => {
    if (!project) return 'Image';
    return project.captions?.[currentImageIndex] || 'Image';
  }, [project, currentImageIndex]);

  const getThumbnails = useCallback(() => {
    if (!project) return [];
    return project.screens || [];
  }, [project]);

  if (!project) return null;

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
            <span key={index} className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            </div>
          )}
          <div className="relative h-full overflow-y-auto will-change-transform">
            <div 
              className="cursor-zoom-in" 
              onClick={toggleFullscreen}
            >
              <Image
                src={getCurrentImage()}
                alt={getImageAlt()}
                width={1920}
                height={1080}
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
                priority={true}
                onLoad={handleImageLoad}
                loading="eager"
                quality={60}
                sizes="(max-width: 1920px) 100vw, 1920px"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent rounded-b-lg">
            <div className="text-center text-white text-sm font-medium py-4 px-4">
              {getImageAlt()}
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
                  src={getCurrentImage()}
                  alt={getImageAlt()}
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
                  {getImageAlt()}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center space-x-4 overflow-x-auto py-4 px-2">
          {getThumbnails().map((image, index) => (
            <div key={index} className="p-1">
              <button
                onClick={() => {
                  setIsLoading(true);
                  setCurrentImageIndex(index);
                }}
                className={`w-16 h-16 rounded-md overflow-hidden focus:outline-none ${
                  index === currentImageIndex ? 'ring-2 ring-red-500 ring-offset-2 ring-offset-white' : ''
                }`}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={image}
                    alt={project.captions?.[index] || `Thumbnail ${index + 1}`}
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

        <div className="space-y-4 mb-6">
          {project.overview && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p>{project.overview}</p>
            </div>
          )}

          {project.process && project.process.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Design Process</h3>
              <ul className="space-y-1">
                {project.process.map((step, index) => (
                  <li key={index} className={step.startsWith("📌") ? "" : "list-disc pl-5"}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Key Features & Highlights</h3>
              <ul className="space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index} className={feature.startsWith("✅") ? "" : feature.startsWith("•") ? "ml-6" : "list-disc pl-5"}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        
          {project.visualIdentity && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Visual Identity</h3>
              <p>{project.visualIdentity}</p>
            </div>
          )}
        </div>
        
        <div className="flex justify-between mt-6">
          <button
            onClick={onPrevious}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center"
          >
            <ChevronLeft size={20} className="mr-2" />
            Previous Project
          </button>
          <button
            onClick={() => {
              navigateToSection();
              onClose();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center"
          >
            More Projects
            <ExternalLink size={20} className="ml-2" />
          </button>
          <button
            onClick={onNext}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center"
          >
            Next Project
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </Popup>
  );
}

