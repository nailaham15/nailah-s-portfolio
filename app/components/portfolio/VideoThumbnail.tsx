'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface VideoThumbnailProps {
  videoUrl: string
  thumbnail: string
  title: string
}

export default function VideoThumbnail({ videoUrl, thumbnail, title }: VideoThumbnailProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsVideoLoaded(true)
    }

    video.addEventListener('canplay', handleCanPlay)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current && isVideoLoaded) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error)
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div 
      className="relative aspect-video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        className={`object-cover transition-opacity duration-300 ${isHovered && isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
      />
      {isHovered && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}

