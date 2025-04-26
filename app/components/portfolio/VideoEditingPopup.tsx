'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, X, Maximize, Minimize, Play, Pause } from 'lucide-react'
import Popup from '../ui/popup'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Components } from 'react-markdown'

interface VideoProject {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  tags: string[];
  tools: string[];
  overview: string;
  visualIdentity?: string[];
  keyContributions?: string[];
  videos?: {
    url: string;
    thumbnail: string;
    caption: string;
    isImage?: boolean;
    isTikTok?: boolean;
  }[];
}

interface VideoEditingPopupProps {
  project: VideoProject | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  navigateToSection: () => void;
}

export default function VideoEditingPopup({
  project,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  navigateToSection
}: VideoEditingPopupProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      setIsLoading(true);
      setVideoError(false);
      videoRef.current.load();
    }
  }, [isOpen, project, currentVideoIndex]);

  // Reset scroll when changing videos
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentVideoIndex]);

  // Reset video state when changing videos
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentVideoIndex]);

  // Handle video state changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Function to capture video thumbnail
  const captureVideoThumbnail = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnailUrl = canvas.toDataURL('image/png');
        setThumbnailUrl(thumbnailUrl);
      }
    }
  }, []);

  // Handle video load
  const handleVideoLoad = useCallback(() => {
    if (videoRef.current) {
      setIsLoading(false);
      setVideoError(false);
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handleVideoError = () => {
      setVideoError(true);
      setIsLoading(false);
    };

  // Toggle play/pause
  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      videoContainerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  if (!project) return null;

  const currentVideo = project.videos?.[currentVideoIndex] || {
    url: project.videoUrl,
    thumbnail: project.thumbnail,
    caption: project.title
  };

  const getThumbnails = () => {
    if (project.videos && project.videos.length > 0) {
      return project.videos;
    }
    return [{ url: project.videoUrl, thumbnail: project.thumbnail, caption: project.title }];
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
            <span key={index} className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        
        <div ref={scrollContainerRef} className="relative aspect-video mb-4">
          <div 
            ref={videoContainerRef} 
            className="relative w-full h-full group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Hidden canvas for thumbnail generation */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Video/Image element */}
            {!currentVideo.isImage ? (
              <>
                {currentVideo.isTikTok ? (
                  <div className="w-full h-full flex items-center justify-center bg-black rounded-lg">
                    <iframe
                      src={currentVideo.url}
                      className="w-full h-full rounded-lg"
                      style={{ maxWidth: '605px', margin: '0 auto' }}
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                ) : (
          <video
            ref={videoRef}
                    className={`w-full h-full rounded-lg relative z-10 ${videoError || isLoading ? 'hidden' : ''}`}
                    controls={isHovering}
                    poster={thumbnailUrl || currentVideo.thumbnail}
                    preload="auto"
                    onLoadedData={handleVideoLoad}
                    onError={handleVideoError}
                    style={{ 
                      backgroundColor: 'transparent',
                      '--webkit-media-controls-timeline-height': '12px',
                      '--webkit-media-controls-timeline-container-height': '12px'
                    } as React.CSSProperties}
          >
                    <source src={currentVideo.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
                )}

                {/* Loading and error states for video */}
                {!currentVideo.isTikTok && (videoError || isLoading) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg z-20">
                    {videoError ? (
                      <p className="text-white text-center p-4 bg-black bg-opacity-75 rounded">
                  Sorry, the video could not be loaded. Please try again later.
                </p>
                    ) : (
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                    )}
                  </div>
                )}

                {/* Play/Pause button for video */}
                {!currentVideo.isTikTok && isHovering && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center z-20"
                    style={{ pointerEvents: 'none' }}
                  >
                    <button
                      onClick={togglePlay}
                      className="bg-black bg-opacity-50 rounded-full p-4 transform transition-transform duration-200 hover:scale-110"
                      style={{ pointerEvents: 'auto' }}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white" />
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black">
                <Image
                  src={currentVideo.url}
                  alt={currentVideo.caption}
                  width={1920}
                  height={1080}
                  style={{ 
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: "contain"
                  }}
                  className="rounded-lg"
                  priority
                />
                </div>
              )}

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const prevIndex = (currentVideoIndex - 1 + getThumbnails().length) % getThumbnails().length;
                setCurrentVideoIndex(prevIndex);
                setIsLoading(true);
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-150 z-30"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const nextIndex = (currentVideoIndex + 1) % getThumbnails().length;
                setCurrentVideoIndex(nextIndex);
                setIsLoading(true);
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-150 z-30"
            >
              <ChevronRight size={24} />
            </button>

            {/* Caption */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent pt-3 pb-6 px-4 z-30 rounded-t-lg">
              <h4 className="text-white text-sm font-medium line-clamp-2">
                {currentVideo.caption}
              </h4>
            </div>
          </div>
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
                  const prevIndex = (currentVideoIndex - 1 + getThumbnails().length) % getThumbnails().length;
                  setCurrentVideoIndex(prevIndex);
                  setIsLoading(true);
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-150 z-50"
              >
                <ChevronLeft size={32} />
              </button>

              <div 
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  className="max-w-[95vw] max-h-[95vh] w-auto h-auto"
                  controls
                  poster={currentVideo.thumbnail}
                  preload="metadata"
                >
                  <source src={currentVideo.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIndex = (currentVideoIndex + 1) % getThumbnails().length;
                  setCurrentVideoIndex(nextIndex);
                  setIsLoading(true);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-150 z-50"
              >
                <ChevronRight size={32} />
              </button>

              <div className="text-center text-white text-sm font-medium py-4 px-4 mt-4">
                {currentVideo.caption}
              </div>
            </div>
            </div>
          )}

        {/* Thumbnails without captions */}
        <div className="flex justify-center space-x-4 overflow-x-auto py-4 px-2">
          <div className="flex space-x-4">
            {getThumbnails().map((video, index) => (
              <div key={index} className="flex-shrink-0">
                <button
                  onClick={() => {
                    if (index !== currentVideoIndex) {
                      setCurrentVideoIndex(index);
                      setIsLoading(true);
                      setThumbnailUrl(''); // Reset thumbnail URL when changing videos
                    }
                  }}
                  className={`relative w-24 h-16 rounded-md overflow-hidden focus:outline-none transform-gpu ${
                    index === currentVideoIndex ? "ring-2 ring-green-500 ring-offset-2 ring-offset-white" : ""
                  }`}
                  style={{ willChange: 'transform' }}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.caption}
                    fill
                    style={{ objectFit: "cover", willChange: 'transform' }}
                    className="rounded-sm transform-gpu"
                    loading="lazy"
                    quality={60}
                    sizes="96px"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
        <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown
                components={{
                  a: ({ children, href }) => (
                    <a 
                      href={href}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-600 hover:text-green-800 underline"
                    >
                      {children}
                    </a>
                  )
                }}
              >
                {project.overview}
              </ReactMarkdown>
            </div>
          </div>

          {project.visualIdentity && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Visual Identity & Motion Graphics</h3>
              <ul className="space-y-2">
                {project.visualIdentity.map((item, index) => (
                  <li 
                    key={index} 
                    className={`text-gray-700 ${item.startsWith('•') ? 'ml-4' : ''}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.keyContributions && (
            <div>
        <h3 className="text-xl font-semibold mb-2">Key Contributions</h3>
              <ul className="space-y-2">
          {project.keyContributions.map((contribution, index) => (
                  <li 
                    key={index} 
                    className={`${
                      contribution.startsWith('✅') ? 'font-semibold mt-4' : 
                      contribution.startsWith('•') ? 'ml-4' : ''
                    }`}
                  >
                    {contribution}
                  </li>
          ))}
        </ul>
            </div>
          )}
        </div>
        
        <div className="flex justify-between mt-6">
          <button
            onClick={onPrevious}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 flex items-center"
          >
            <ChevronLeft size={20} className="mr-2" />
            Previous Project
          </button>
          <button
            onClick={() => {
              navigateToSection();
              onClose();
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 flex items-center"
          >
            More Projects
            <ExternalLink size={20} className="ml-2" />
          </button>
          <button
            onClick={onNext}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 flex items-center"
          >
            Next Project
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </Popup>
  );
}

