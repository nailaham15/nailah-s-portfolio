'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import VideoEditingPopup from './VideoEditingPopup'

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

const projects: VideoProject[] = [
  {
    id: 1,
    title: "E-Corp FTUI: Logo Animations & Organization Introduction Video",
    description: "Strategic motion graphics and branding for Engineering Corporation FTUI",
    videoUrl: "/videos/video-editing/ecorp/1. Intro.mp4",
    thumbnail: "/images/video-editing/ecorp/project thumbnail.png",
    tags: ["Motion Graphics", "Logo Animation", "Corporate Video", "Brand Identity"],
    tools: ["Adobe After Effects", "Adobe Premiere Pro", "Figma"],
    overview: "As the Deputy Manager of Creative (2022-2023) at Engineering Corporation FTUI, I contributed to both design and video production, with a focus on motion graphics work. Through strategic visual branding and engaging motion design, my contributions helped elevate E-Corp FTUI's digital presence, ensuring a polished and professional image across all platforms.",
    visualIdentity: [
      "• Dynamic & Professional – Created 2 logo intro and outro animations aligned with E-Corp's identity.",
      "• Cohesive Branding – Ensured a consistent visual style across all digital platforms, reinforcing brand recognition.",
      "• Impactful Storytelling – Used motion graphics and seamless transitions to create engaging and informative visuals."
    ],
    keyContributions: [
      "✅ Logo Animations & Video Production",
      "• Designed and animated logo intros and outros, enhancing brand identity across 4 major digital channels.",
      "• Edited the organization's introduction video, effectively showcasing E-Corp's mission to an audience of 200+ members.",
      
      "✅ Branding & Publication Development",
      "• Led the revamp of the publication system, improving efficiency and consistency across 5 major projects.",
      "• Developed visual guidelines to unify content creation across various platforms.",
      
      "✅ Team Mentorship & Collaboration",
      "• Mentored and guided 8 creative division staff, enhancing their skills in Figma and publication design.",
      "• Collaborated with various departments to align the creative direction with E-Corp's core messaging."
    ],
    videos: [
      {
        url: "/videos/video-editing/ecorp/1. Intro.mp4",
        thumbnail: "/images/video-editing/ecorp/intro logo animation.png",
        caption: "Logo Animation - Intro"
      },
      {
        url: "/videos/video-editing/ecorp/2. Outro.mp4",
        thumbnail: "/images/video-editing/ecorp/outro logo animation.png",
        caption: "Logo Animation - Outro"
      },
      {
        url: "/videos/video-editing/ecorp/3. Introduction Video.mp4",
        thumbnail: "/images/video-editing/ecorp/introduction video.png",
        caption: "Organization Introduction Video"
      }
    ]
  },
  {
    id: 2,
    title: "Indokrisna Technology: Motion & Video Design for a Growing Startup",
    description: "Crafting engaging video content and motion graphics to elevate a SaaS startup's digital presence",
    videoUrl: "/videos/video-editing/indokrisna/INTRO LOGO(1).mp4",
    thumbnail: "/images/video-editing/indokrisna/project thumbnail.png",
    tags: ["Corporate Video", "Motion Graphics", "Social Media", "Branding"],
    tools: ["CapCut"],
    overview: "As a Visual Communication Intern at Indokrisna Technology, I contributed to both branding and design, but this showcase focuses on my video editing and motion graphics work. Using CapCut, I created engaging video content that reinforced the company's professional startup identity while maintaining consistency across multiple digital platforms.",
    visualIdentity: [
      "• Cohesive Branding – Developed intro and outro animations for multiple brand assets, ensuring a unified brand presence.",
      "• Engaging Content – Edited short-form reels to effectively showcase the company's services and internal culture.",
      "• Professional Visuals – Managed and directed a team photoshoot to enhance the company's corporate branding."
    ],
    keyContributions: [
      "✅ Video Editing & Motion Graphics",
      "• Edited 2+ reels, optimizing content for Instagram, LinkedIn, and other platforms.",
      "• Designed intro and outro animations for the company logo, podcast logo, and employee branding (\"Life at IKT\").",
      
      "✅ Branding & Content Production",
      "• Organized and managed a short video shoot to capture high-quality footage for company promotions.",
      "• Conducted a professional photoshoot of 10+ employees, improving the company's branding assets.",
      
      "✅ Cross-Platform Optimization",
      "• Adapted video content for multiple social media platforms, considering different dimensions and algorithms.",
      "• Ensured consistency in visual identity across Indokrisna Technology's digital presence."
    ],
    videos: [
      {
        url: "/videos/video-editing/indokrisna/INTRO LOGO(1).mp4",
        thumbnail: "/images/video-editing/indokrisna/logo intro.png",
        caption: "Company Logo - Intro Animation"
      },
      {
        url: "/videos/video-editing/indokrisna/OUTRO LOGO.mp4",
        thumbnail: "/images/video-editing/indokrisna/logo outro.png",
        caption: "Company Logo - Outro Animation"
      },
      {
        url: "/videos/video-editing/indokrisna/INTRO LIFEATIKT.mp4",
        thumbnail: "/images/video-editing/indokrisna/life at ikt intro.png",
        caption: "Life at IKT - Intro Animation"
      },
      {
        url: "/videos/video-editing/indokrisna/OUTRO LIFEATIKT.mp4",
        thumbnail: "/images/video-editing/indokrisna/life at ikt outro.png",
        caption: "Life at IKT - Outro Animation"
      },
      {
        url: "/videos/video-editing/indokrisna/happy diwali day.mp4",
        thumbnail: "/images/video-editing/indokrisna/diwali celebration content.png",
        caption: "Diwali Celebration Content"
      },
      {
        url: "/images/video-editing/indokrisna/ikt team shoot cropped.png",
        thumbnail: "/images/video-editing/indokrisna/ikt team shoot cropped.png",
        caption: "Team Photoshoot - Professional Corporate Branding",
        isImage: true
      }
    ]
  },
  {
    id: 3,
    title: "AFAIR 2024 – Dynamic Event Teasers & Motion Branding",
    description: "Strategic video content and motion graphics for Indonesia's largest architectural career fair",
    videoUrl: "/videos/video-editing/afair/logo animation.mp4",
    thumbnail: "/images/video-editing/afair/project thumbnail.png",
    tags: ["Event Video", "Motion Graphics", "Branding", "Event Promotion"],
    tools: ["Adobe Premiere Pro", "Adobe After Effects"],
    overview: "As Vice Head of Creative for AFAIR 2024 (Architecture Fair), I played a key role in shaping both branding and design, but this showcase focuses on my video editing and motion graphics contributions. Through event teasers, logo animations, and promotional content, I helped establish a compelling visual identity that evolved alongside the event's theme.",
    visualIdentity: [
      "• Event Promotion – Directed, participated in, and edited event teasers, driving engagement and anticipation.",
      "• Motion Branding – Created 2 logo animations, reinforcing AFAIR's presence across digital platforms.",
      "• Cohesive Visuals – Co-developed brand identity and design guidelines, ensuring consistency across all event phases.",
      "• Quality Assurance – Oversaw 20+ design and documentation tasks, maintaining high visual standards."
    ],
    keyContributions: [
      "✅ Video Editing & Motion Graphics",
      "• Edited and refined event teaser videos, increasing visibility and audience engagement.",
      "• Designed 2 logo animations, strengthening AFAIR's branding identity.",
      
      "✅ Branding & Content Production",
      "• Helped develop visual guidelines that aligned with the event's evolving identity.",
      "• Ensured quality control across design, documentation, and promotional materials.",
      
      "✅ Strategic Execution",
      "• Balanced creativity and professionalism to reflect AFAIR's brand evolution.",
      "• Maintained high production quality across various digital and event assets."
    ],
    videos: [
      {
        url: "/videos/video-editing/afair/logo animation.mp4",
        thumbnail: "/images/video-editing/afair/logo animation.png",
        caption: "Logo Animation"
      },
      {
        url: "/videos/video-editing/afair/event teaser (1).mp4",
        thumbnail: "/images/video-editing/afair/event teaser.png",
        caption: "Event Teaser Video"
      }
    ]
  },
  {
    id: 4,
    title: "BookClan – Engaging & Humorous Short-Form Video Editing",
    description: "Growing a book community through dynamic, Gen Z-focused TikTok content",
    videoUrl: "/videos/video-editing/bookclan/TULALIT PROMOTION.mp4",
    thumbnail: "/images/video-editing/bookclan/bookclan thumbnail (2).png",
    tags: ["TikTok", "Short-Form Content", "Community Growth", "Gen Z"],
    tools: ["CapCut"],
    overview: "As a Volunteer Content Creator for BookClan, I contributed to the growth of its TikTok presence through dynamic, humor-driven video editing. While I handled both content strategy and production, this section focuses on my video editing approach, which embraced TikTok's random, unpredictable, and meme-inspired style. By leaning into Gen Z humor, fun sound effects, and comical edits, I helped shape BookClan's image as a fun and welcoming book community.\n\nFeatured TikTok Videos:\n• [TULALIT PROMOTION](https://vt.tiktok.com/ZSFQJJ2th/)\n• [BOOK PRICE](https://vt.tiktok.com/ZSrJR9Dfw/)\n• [MY STRANGE ADDICTION: BOOKS](https://vt.tiktok.com/ZSFQ1w9YV/)\n• [INTERVIEW BLACKMAIL](https://vt.tiktok.com/ZSrJRVVbp/)\n• [INDEPENDENCE DAY RECAP](https://vt.tiktok.com/ZSrJeW2tW/)",
    visualIdentity: [
      "• Gen Z Editing Style – Used shake effects, zooms, exaggerated transitions, and meme-like sound effects to align with BookClan's playful branding.",
      "• Community-Driven Aesthetic – Ensured videos felt organic, relatable, and engaging rather than overly polished.",
      "• Platform-Specific Strategy – Tailored editing to TikTok's fast-paced, humor-driven trends, keeping content fresh and engaging."
    ],
    keyContributions: [
      "✅ Video Editing & Motion Graphics",
      "• Edited 2 TikTok videos weekly, maintaining an engaging and consistent brand presence.",
      "• Crafted humorous and high-energy edits to resonate with Gen Z audiences.",
      
      "✅ Content Growth & Engagement",
      "• Helped grow BookClan's TikTok to 15K followers in 6 months by implementing effective content strategies.",
      "• Directed and participated in 20+ shooting sessions, ensuring engaging, high-quality content.",
      
      "✅ Creative Strategy & Execution",
      "• Developed 8+ fresh content ideas monthly, balancing trending memes with BookClan's community-driven branding.",
      "• Used simple yet effective transitions and effects, keeping videos fun, fast-paced, and highly shareable."
    ],
    videos: [
      {
        url: "/videos/video-editing/bookclan/TULALIT PROMOTION.mp4",
        thumbnail: "/images/video-editing/bookclan/TULALIT PROMOTION.png",
        caption: "TULALIT PROMOTION"
      },
      {
        url: "/videos/video-editing/bookclan/BOOK PRICE.mp4",
        thumbnail: "/images/video-editing/bookclan/BOOK PRICE.png",
        caption: "BOOK PRICE"
      },
      {
        url: "/videos/video-editing/bookclan/MY STRANGE ADDICTION BOOKS.mp4",
        thumbnail: "/images/video-editing/bookclan/MY STRANGE ADDICTION BOOKS.png",
        caption: "MY STRANGE ADDICTION: BOOKS"
      },
      {
        url: "/videos/video-editing/bookclan/INTERVIEW BLACKMAIL.mp4",
        thumbnail: "/images/video-editing/bookclan/INTERVIEW BLACKMAIL.png",
        caption: "INTERVIEW BLACKMAIL"
      },
      {
        url: "/videos/video-editing/bookclan/INDEPENDENCE DAY RECAP.mp4",
        thumbnail: "/images/video-editing/bookclan/INDEPENDENCE DAY RECAP.png",
        caption: "INDEPENDENCE DAY RECAP"
      }
    ]
  }
]

interface VideoEditingSectionProps {
  bestWork?: boolean | number;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  navigateToSection: () => void;
  openPopup: (project: any) => void;
}

export default function VideoEditingSection({ 
  bestWork = false, 
  selectedCategory, 
  setSelectedCategory,
  navigateToSection,
  openPopup
}: VideoEditingSectionProps) {
  const projectsToShow = typeof bestWork === 'number' ? projects.slice(0, bestWork) : bestWork ? projects.slice(0, 4) : projects;
  const [selectedProject, setSelectedProject] = useState<VideoProject | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = (project: VideoProject) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  const handlePrevious = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  return (
    <div className="space-y-4">
      <motion.h3 
        className="text-2xl font-bold text-green-700 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Video Editing & Motion Graphics
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectsToShow.map((project) => (
          <motion.div
            key={project.id}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleOpenPopup(project)}
          >
            <div className="relative aspect-video">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-green-500 bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm">{project.description}</p>
                  <button 
                    className="mt-4 bg-white text-green-700 px-4 py-2 rounded-full hover:bg-green-100 transition duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <VideoEditingPopup
        project={selectedProject}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onPrevious={handlePrevious}
        onNext={handleNext}
        navigateToSection={navigateToSection}
      />
    </div>
  )
}

