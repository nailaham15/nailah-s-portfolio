"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useState, useCallback, useRef, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  tools: string[];
  overview: string;
  process: string[] | string;
  role?: string;
  features?: string[];
  contributions?: string[];
  screens: string[];
  captions: string[];
  results?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Only 2 Bali – Gamified Travel Planning for Indian Travelers",
    description: "Planning a trip can be overwhelming, especially when travelers seek personalized experiences without the hassle of extensive research",
    image: "/images/ui-ux/only2bali/thumbnail.png",
    tags: ["Web App", "Travel", "UX Design"],
    tools: ["Figma", "Adobe Illustrator"],
    overview:
      "Planning a trip can be overwhelming, especially when travelers seek personalized experiences without the hassle of extensive research. Only 2 Bali was designed to solve this by offering Indian travelers an interactive and engaging way to plan their trips to Bali. Instead of static forms, the website turns the process into a gamified journey, allowing users to customize their trips effortlessly.",
    role: "Visual Communication Intern – Led the branding and UI design of the entire website while contributing to the user flow and interactive experience.",
    process: [
      "📌 User Research & Insights – Analyzed Indian travelers' needs to develop a personalized experience.",
      "📌 Concept Ideation – Designed a gamified questionnaire that makes travel planning more interactive and fun.",
      "📌 Visual Identity & Branding – Blended Indian and Balinese cultural aesthetics into the UI, ensuring a cohesive and immersive brand presence.",
      "📌 Prototyping & User Flow – Developed an intuitive, engaging navigation structure with interactive elements.",
    ],
    features: [
      "✅ Gamified Trip Planning – A step-by-step interactive questionnaire covering travel dates, preferences, and special requests.",
      "✅ Cultural Aesthetic Fusion – A vibrant blend of Indian and Balinese design elements, ensuring a visually rich and immersive experience.",
      "✅ Personalized Travel Recommendations – Seamlessly connects users to local travel agents for customized itineraries.",
      "✅ Cohesive Branding & Logo – A thoughtfully designed logo and consistent brand identity reflecting the essence of both cultures.",
    ],
    contributions: [
      "Developed a gamified questionnaire, transforming traditional trip planning into an engaging, step-by-step journey.",
      "Designed the complete visual identity, including the logo, branding, and UI elements, inspired by Indian and Balinese culture.",
      "Created an intuitive user flow, ensuring seamless navigation and a personalized trip-planning experience.",
      "Integrated interactive animations, enhancing engagement and making the platform more dynamic.",
    ],
    screens: [
      "/images/ui-ux/only2bali/thumbnail.png",
      "/images/ui-ux/only2bali/brand identity.png",
      "/images/ui-ux/only2bali/overview.png",
      "/images/ui-ux/only2bali/home-page.png",
      "/images/ui-ux/only2bali/landing-page.png",
      "/images/ui-ux/only2bali/Sketch.png",
      "/images/ui-ux/only2bali/Wireframe.png"
    ],
    captions: [
      "Only 2 Bali - Thumbnail",
      "Brand Identity Design",
      "Project Overview",
      "Home Page Design",
      "Landing Page Design",
      "Initial Sketch",
      "Wireframe Design"
    ],
  },
  {
    id: 2,
    title: "SmartILM – AI-Powered Information Management",
    description: "An intelligent file management system that simplifies digital organization for everyone",
    image: "/images/ui-ux/smartilm/0. Home Page.png",
    tags: ["File Management", "Organization", "Cloud Storage", "UX Design"],
    tools: ["v0"],
    overview:
      "Managing digital information is overwhelming—files get lost, documents pile up, and searching for the right information wastes time. SmartILM is an AI-driven solution that automatically organizes, stores, and retrieves digital assets, making information management effortless for students, professionals, and businesses.\n\nPowered by AI, SmartILM not only organizes files but also introduces a smart chat feature—allowing users to converse with digital libraries and instantly retrieve information through natural language queries. Whether you need a research paper, business contract, or old project file, SmartILM finds it for you—just ask.",
    role: "Product Designer – Led the UI/UX design process to create an intuitive and efficient user experience for diverse user needs.",
    process: [
      "📌 Research & Discovery – Studied how different users (students, professionals, businesses) manage digital files and identified key challenges.",
      "📌 Wireframing & Prototyping – Designed user flows, built interactive prototypes, and refined usability.",
      "📌 UI Design & Branding – Developed a sleek, modern interface that enhances clarity and accessibility.",
    ],
    features: [
      "✅ AI-Powered Smart Chat – Ask questions, search for files, and retrieve data by chatting with your digital libraries.",
      "✅ Automated File Organization – AI categorizes and stores files based on content and relevance.",
      "✅ Advanced Search & Filtering – Find documents instantly using smart search capabilities.",
      "✅ Customizable Workspaces – Adapt dashboards for personal, academic, or professional needs.",
      "✅ Access Control & Security – AI-driven protection ensures sensitive information remains secure.",
      "✅ Seamless Cloud Integration – Syncs across multiple devices for accessibility anywhere.",
    ],
    contributions: [
      "Designed an AI-integrated dashboard for seamless data interaction.",
      "Developed intuitive workflows that simplify file organization and retrieval.",
      "Created a modern, accessible interface focused on usability and efficiency.",
    ],
    screens: [
      "/images/ui-ux/smartilm/0. Home Page.png",
      "/images/ui-ux/smartilm/1. Chat Page.png",
      "/images/ui-ux/smartilm/2. Chat Pop Ups.png",
      "/images/ui-ux/smartilm/3. Library Page + Chat.png",
      "/images/ui-ux/smartilm/4. Library Pop Ups.png",
      "/images/ui-ux/smartilm/5. Specific Library Overview +Chat.png",
      "/images/ui-ux/smartilm/6. Specific Library Files + Chat.png"
    ],
    captions: [
      "Home Page",
      "Chat Page",
      "Chat Pop Ups",
      "Library Page + Chat",
      "Library Pop Ups",
      "Specific Library Overview + Chat",
      "Specific Library Files + Chat"
    ],
  },
  {
    id: 3,
    title: "IndoKrisna Technology Website Revamp",
    description: "A modern redesign of a technology consulting company's website",
    image: "/images/ui-ux/indokrisna/0. Thumbnail.png",
    tags: ["Web Design", "Corporate", "UX Design", "Responsive"],
    tools: ["Figma"],
    overview: 
      "IndoKrisna Technology (IKT) needed a modernized and scalable website to better showcase their solutions, services, and company information. Their existing site lacked structure, branding consistency, and key pages that would help potential clients navigate their offerings effectively. The revamp introduced a refined visual identity, improved navigation, and expanded content, ensuring a professional and engaging digital presence.",
    role: "Visual Communication Intern – Led the redesign of IKT's website, creating a structured and visually cohesive experience across 24 pages.",
    process: [
      "📌 Research & Analysis – Assessed IKT's existing website and competitor benchmarks to define a clear direction.",
      "📌 Information Architecture & Wireframing – Structured pages for easy navigation and usability.",
      "📌 Visual Design & Branding – Introduced new UI components, refined typography, and incorporated dynamic visual elements.",
    ],
    features: [
      "✅ Expanded Solutions & Services Pages – Clearly showcases offerings like Zoho, GreytHR, AWS, and Manage Engine.",
      "✅ Enhanced User Experience – Intuitive layout and improved navigation make information easily accessible.",
      "✅ Consistent Visual Identity – Fresh branding with curved elements and modern typography.",
      "✅ Scalable Component System – A flexible design approach for future updates.",
      "✅ Dedicated Company Pages – About Us, Webinars, Careers, and Contact pages for better engagement.",
    ],
    contributions: [
      "Designed and structured 24+ web pages, including new additions like blogs, careers, and webinars.",
      "Expanded the company's visual branding by introducing curvy elements and refining typography.",
      "Created a library of custom UI components and shapes to enhance the site's modern look.",
      "Optimized navigation and information hierarchy for seamless user experience.",
    ],
    screens: [
      "/images/ui-ux/indokrisna/0. Thumbnail.png",
      "/images/ui-ux/indokrisna/1. Welcoming Page.png",
      "/images/ui-ux/indokrisna/2. Home Page.png",
      "/images/ui-ux/indokrisna/3. GreytHR Solution Page.png",
      "/images/ui-ux/indokrisna/4. Zoho Books Service Page.png",
      "/images/ui-ux/indokrisna/5. Blogs & News Page.png",
      "/images/ui-ux/indokrisna/6. Wireframes IKT.png",
      "/images/ui-ux/indokrisna/7. IKT Web Components.png"
    ],
    captions: [
      "Project Overview",
      "Welcoming Page",
      "Home Page",
      "GreytHR Solution Page",
      "Zoho Books Service Page",
      "Blogs & News Page",
      "Wireframes",
      "Web Components"
    ],
  },
  {
    id: 4,
    title: "Portfolio Website – A Digital Showcase of My Work",
    description: "A clean, engaging, and user-centric portfolio website that reflects my design philosophy",
    image: "/images/ui-ux/portfolio/thumbnail and first picture.png",
    tags: ["Web Design", "Personal Brand", "UX Design", "Responsive"],
    tools: ["Cursor", "Vercel"],
    overview:
      "As a multidisciplinary designer, I needed a portfolio that not only showcased my work but also reflected my design philosophy—clean, engaging, and user-centric. This project was an opportunity to apply my UI/UX expertise, ensuring an intuitive browsing experience while reinforcing my personal brand.",
    process: [
      "1️⃣ Research & Planning – Analyzed top portfolios, studied recruiter/client browsing behaviors, and defined key objectives.",
      "2️⃣ Wireframing & Structure – Focused on clarity, ensuring easy access to project details, work highlights, and contact information.",
      "3️⃣ Visual Branding – Developed a cohesive identity using a refined color palette, custom UI elements, and typography to reflect my design style.",
      "4️⃣ Development Collaboration – Designed with adaptability in mind, ensuring a smooth responsive experience across all devices.",
    ],
    features: [
      "✅ Intuitive Navigation – A clear, easy-to-follow structure for effortless browsing.",
      "✅ Interactive & Engaging UI – Thoughtfully designed elements to make the experience dynamic.",
      "✅ Structured Project Showcases – Work is presented in a clear, compelling format.",
      "✅ Strong Personal Branding – A distinct visual identity reflecting my design aesthetic.",
      "✅ Responsive & Adaptive Design – Seamless experience across desktop, tablet, and mobile.",
    ],
    contributions: [
      "🔹 Problem: Many portfolio websites feel cluttered or difficult to navigate, making it hard for potential clients and recruiters to find relevant work quickly. I wanted my portfolio to feel effortless to explore, balancing aesthetic appeal with usability while maintaining a strong personal brand.",
      "🔹 Solution: A streamlined, minimal yet expressive website with clear navigation, interactive elements, and a structured project presentation to enhance readability and engagement.",
    ],
    screens: [
      "/images/ui-ux/portfolio/thumbnail and first picture.png",
      "/images/ui-ux/portfolio/about me intro.png",
      "/images/ui-ux/portfolio/experiences.png",
      "/images/ui-ux/portfolio/funfacts.png",
      "/images/ui-ux/portfolio/portofolio gallery.png",
      "/images/ui-ux/portfolio/portofolio pop up.png",
      "/images/ui-ux/portfolio/contact page.png"
    ],
    captions: [
      "Portfolio Overview",
      "About Me Introduction",
      "Experiences Section",
      "Fun Facts Section",
      "Portfolio Gallery",
      "Portfolio Popup",
      "Contact Page"
    ],
  },
]

interface UiUxSectionProps {
  bestWork?: boolean | number
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  openPopup: (content: React.ReactNode | null) => void
}

const ImageGallery = ({ images, thumbnail, captions, quality = 60, preloadedImages: initialPreloadedImages = new Set() }: { 
  images: string[]; 
  thumbnail: string; 
  captions: string[];
  quality?: number;
  preloadedImages?: Set<string>;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(initialPreloadedImages)
  const [blurDataUrls, setBlurDataUrls] = useState<Record<string, string>>({})
  const galleryRef = useRef(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(galleryRef, { once: true })
  const allImages = [thumbnail, ...images]

  // Reset to first image when popup is reopened
  useEffect(() => {
    setCurrentIndex(0)
    setIsLoading(true)
  }, [isInView])

  // Generate blur placeholder
  useEffect(() => {
    const generateBlurPlaceholder = async (src: string) => {
      if (blurDataUrls[src]) return
      try {
        const response = await fetch(src)
        const blob = await response.blob()
        const reader = new FileReader()
        reader.onload = () => {
          setBlurDataUrls(prev => ({ ...prev, [src]: reader.result as string }))
        }
        reader.readAsDataURL(blob)
      } catch (error) {
        console.error('Error generating blur placeholder:', error)
      }
    }

    // Generate blur placeholders for first 2 images
    const firstBatch = allImages.slice(0, 2)
    firstBatch.forEach(src => generateBlurPlaceholder(src))
  }, [allImages])

  // Preload images with priority and caching
  useEffect(() => {
    const preloadImage = async (src: string) => {
      if (preloadedImages.has(src)) return
      return new Promise<void>((resolve) => {
        const img = document.createElement('img')
        img.src = src
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, src]))
          resolve()
        }
        img.onerror = () => resolve()
      })
    }

    // Preload first image immediately, then the rest
    const preloadAllImages = async () => {
      // First batch: current image only
      const firstBatch = allImages.slice(0, 1)
      await Promise.all(firstBatch.map(src => preloadImage(src)))

      // Second batch: next image
      const secondBatch = allImages.slice(1, 2)
      Promise.all(secondBatch.map(src => preloadImage(src)))

      // Third batch: remaining images
      const thirdBatch = allImages.slice(2)
      setTimeout(() => {
        Promise.all(thirdBatch.map(src => preloadImage(src)))
      }, 1000) // Delay loading of remaining images
    }

    preloadAllImages()
  }, [allImages, preloadedImages])

  // Reset scroll and preload next image when changing images
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      const imageContainer = scrollContainerRef.current.querySelector('.overflow-y-auto');
      if (imageContainer) {
        imageContainer.scrollTop = 0;
      }
    }
  }, [currentIndex])

  const handleImageLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const goToPrevious = useCallback(() => {
    setIsLoading(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  const goToNext = useCallback(() => {
    setIsLoading(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const currentImage = currentIndex === 0 ? thumbnail : images[currentIndex - 1]
  const isImagePreloaded = preloadedImages.has(currentImage)
  const blurDataUrl = blurDataUrls[currentImage]

  // Reset loading state when current image is already preloaded
  useEffect(() => {
    if (isImagePreloaded) {
      setIsLoading(false)
    }
  }, [currentImage, isImagePreloaded])

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev)
  }, [])

  return (
    <div className="relative" ref={galleryRef}>
      <div ref={scrollContainerRef} className="relative aspect-[3/2] mb-4">
        {isInView && (
          <div className="relative w-full h-full">
            {(isLoading || !isImagePreloaded) && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            )}
            <div className="relative h-full overflow-y-auto will-change-transform">
              <div 
                className="cursor-zoom-in" 
                onClick={toggleFullscreen}
              >
                <Image
                  src={currentImage}
                  alt={`Screen ${currentIndex + 1}`}
                  width={800}
                  height={533}
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    objectFit: "contain"
                  }}
                  className={`rounded-lg transition-opacity duration-150 ${
                    isLoading || !isImagePreloaded ? 'opacity-0' : 'opacity-100'
                  }`}
                  priority={currentIndex === 0}
                  onLoad={handleImageLoad}
                  loading={currentIndex === 0 ? "eager" : "lazy"}
                  quality={quality}
                  sizes="(max-width: 800px) 100vw, 800px"
                  placeholder={blurDataUrl ? "blur" : "empty"}
                  blurDataURL={blurDataUrl}
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
              <div className="text-center text-white text-sm font-medium py-4 px-4">
                {captions[currentIndex]}
              </div>
            </div>
          </div>
        )}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-150 z-10"
          style={{ willChange: 'transform' }}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-150 z-10"
          style={{ willChange: 'transform' }}
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
                e.stopPropagation()
                toggleFullscreen()
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
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
                src={currentImage}
                alt={`Screen ${currentIndex + 1}`}
                width={2400}
                height={1600}
                style={{ 
                  maxWidth: '95vw',
                  maxHeight: '95vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: "contain"
                }}
                quality={100}
                priority={true}
                placeholder={blurDataUrl ? "blur" : "empty"}
                blurDataURL={blurDataUrl}
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-150 z-50"
            >
              <ChevronRight size={32} />
            </button>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
              <div className="text-center text-white text-sm font-medium py-4 px-4">
                {captions[currentIndex]}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4 overflow-x-auto py-4 px-2">
        <div className="flex space-x-4">
          {allImages.map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <button
                onClick={() => {
                  if (index !== currentIndex) {
                    setIsLoading(true)
                    setCurrentIndex(index)
                  }
                }}
                className={`w-16 h-16 rounded-md overflow-hidden focus:outline-none transform-gpu ${
                  index === currentIndex ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white" : ""
                }`}
                style={{ willChange: 'transform' }}
              >
                <div className="w-full h-full relative">
                  {isInView && (
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      style={{ objectFit: "cover", willChange: 'transform' }}
                      className="rounded-sm transform-gpu"
                      loading="lazy"
                      quality={20}
                      sizes="64px"
                      placeholder={blurDataUrls[image] ? "blur" : "empty"}
                      blurDataURL={blurDataUrls[image]}
                    />
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function UiUxSection({
  bestWork = false,
  selectedCategory,
  setSelectedCategory,
  openPopup,
}: UiUxSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [preloadedProjects, setPreloadedProjects] = useState<Set<number>>(new Set())
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set())
  const projectsToShow =
    typeof bestWork === "number" ? projects.slice(0, bestWork) : bestWork ? projects.slice(0, 2) : projects
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check for low performance devices
    const isLowEndDevice = 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 768;

    setIsLowPerformance(isLowEndDevice);
  }, []);

  // Preload images for a project
  const preloadProjectImages = useCallback((project: Project) => {
    if (preloadedProjects.has(project.id)) return

    const preloadImage = (src: string) => {
      return new Promise<void>((resolve) => {
        const img = document.createElement('img')
        img.src = src
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, src]))
          resolve()
        }
        img.onerror = () => resolve()
      })
    }

    // Preload all project images with priority for first two
    const allImages = [project.image, ...project.screens]
    const firstBatch = allImages.slice(0, 2)
    const secondBatch = allImages.slice(2)

    // Load first batch immediately
    Promise.all(firstBatch.map(preloadImage)).then(() => {
      setPreloadedProjects(prev => new Set([...prev, project.id]))
      // Load second batch after a delay
      setTimeout(() => {
        Promise.all(secondBatch.map(preloadImage))
      }, 1000)
    })
  }, [preloadedProjects])

  // Preload adjacent projects
  useEffect(() => {
    if (!selectedProject) return

    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length

    // Preload next and previous projects
    preloadProjectImages(projects[nextIndex])
    preloadProjectImages(projects[prevIndex])
  }, [selectedProject, preloadProjectImages])

  const handleMoreProjects = useCallback(() => {
    setSelectedCategory("ui")
    openPopup(null)
  }, [setSelectedCategory, openPopup])

  const handleNextProject = useCallback((currentProject: Project) => {
    const currentIndex = projects.findIndex((p) => p.id === currentProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    const nextProject = projects[nextIndex]
    setSelectedProject(nextProject)
    const popupContent = (
      <PopupContent
        project={nextProject}
        onClose={() => {
          setSelectedProject(null)
          openPopup(null)
        }}
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
        onMoreProjects={handleMoreProjects}
      />
    )
    openPopup(popupContent)
  }, [openPopup])

  const handlePreviousProject = useCallback((currentProject: Project) => {
    const currentIndex = projects.findIndex((p) => p.id === currentProject.id)
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length
    const prevProject = projects[previousIndex]
    setSelectedProject(prevProject)
    const popupContent = (
      <PopupContent
        project={prevProject}
        onClose={() => {
          setSelectedProject(null)
          openPopup(null)
        }}
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
        onMoreProjects={handleMoreProjects}
      />
    )
    openPopup(popupContent)
  }, [openPopup])

  // When initially opening a project
  const openProject = useCallback((project: Project) => {
    setSelectedProject(project)
    preloadProjectImages(project) // Preload current project images
    const popupContent = (
      <PopupContent
        project={project}
        onClose={() => {
          setSelectedProject(null)
          openPopup(null)
        }}
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
        onMoreProjects={handleMoreProjects}
      />
    )
    openPopup(popupContent)
  }, [handleNextProject, handlePreviousProject, handleMoreProjects, openPopup, preloadProjectImages])

  const PopupContent = useCallback(({ 
    project, 
    onClose, 
    onNext, 
    onPrevious, 
    onMoreProjects 
  }: { 
    project: Project; 
    onClose: () => void; 
    onNext: (project: Project) => void; 
    onPrevious: (project: Project) => void; 
    onMoreProjects: () => void; 
  }) => {
    return (
      <div className="p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, index: number) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool: string, index: number) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {tool}
            </span>
          ))}
        </div>

        <ImageGallery
          images={project.screens.slice(1)}
          thumbnail={project.image}
          captions={project.captions}
          quality={project.title.includes("SmartILM") ? 100 : 60}
          preloadedImages={preloadedImages}
        />

        <div className="space-y-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p>{project.overview}</p>
          </div>

          {project.role && (
            <div>
              <h3 className="text-lg font-semibold mb-2">My Role</h3>
              <p>{project.role}</p>
            </div>
          )}

          {project.contributions && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Contributions</h3>
              <ul className="space-y-1">
                {project.contributions.map((contribution: string, index: number) => (
                  <li key={index} className={contribution.startsWith("🔹") ? "" : "list-disc pl-5"}>{contribution}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-2">Design Process</h3>
            {Array.isArray(project.process) ? (
              <ul className="space-y-1">
                {project.process.map((step: string, index: number) => (
                  <li key={index} className={step.startsWith("1️⃣") || step.startsWith("2️⃣") || step.startsWith("3️⃣") || step.startsWith("4️⃣") || step.startsWith("📌") ? "" : "list-disc pl-5"}>{step}</li>
                ))}
              </ul>
            ) : (
              <p>{project.process}</p>
            )}
          </div>

          {project.features && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features & Highlights</h3>
              <ul className="space-y-1">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className={feature.startsWith("✅") ? "" : "list-disc pl-5"}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => onPrevious(project)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center"
          >
            <ChevronLeft size={20} className="mr-2" />
            Previous Project
          </button>
          <button
            onClick={onMoreProjects}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center"
          >
            More Projects
            <ExternalLink size={20} className="ml-2" />
          </button>
          <button
            onClick={() => onNext(project)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center"
          >
            Next Project
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    )
  }, [preloadedImages])

  return (
    <div className="space-y-4">
      <motion.h3
        className="text-2xl font-bold text-blue-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        UI/UX Design
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectsToShow.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                quality={isLowPerformance ? 60 : 75}
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                style={{
                  height: 'auto',
                  maxWidth: '100%',
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAkKSAkKDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHRz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                <button
                  className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-200"
                  onClick={() => openProject(project)}
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2 text-blue-500">{project.title}</h4>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

