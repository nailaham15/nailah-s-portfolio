import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import GraphicDesignPopup from './GraphicDesignPopup';
import { useState, useRef, useEffect, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import type { Project } from './ClientSideGraphicDesignGrid'

const ClientSideGraphicDesignGrid = dynamic(() => import('./ClientSideGraphicDesignGrid'), { ssr: false })

const projects = [
  {
    id: 1,
    title: "Cretivox Communal Space: A Bold Visual Identity for Gen-Z Creativity",
    description: "A vibrant brand identity for a Gen-Z community hub",
    image: "/images/graphic-design/cretivox/0. Thumbnail.png",
    tags: ["Branding", "Visual Identity", "Gen-Z", "Community Space"],
    tools: ["Adobe Illustrator"],
    overview: "As part of an internship registration process, I was tasked with designing a visual concept for Cretivox Communal Space—a hub for Gen-Z communities to share ideas, explore lifestyle trends, and engage in F&B entrepreneurship. The goal was to develop a strong brand identity that reflects the vibrant and dynamic spirit of the target audience.",
    process: [
      "📌 Design Approach – Created a bold and expressive visual identity inspired by maximalist aesthetics, incorporating inflated 3D elements, fluid layouts, background gradients, repeating text, squiggles, and curvy geometry. The concept embraces organized disorder, ensuring a visually stimulating experience that fosters creativity, networking, and community engagement.",
      "📌 Visual Identity Development – The design features bright, energetic colors and playful typography, reinforcing the youthful and collaborative nature of Cretivox Communal Space."
    ],
    features: [
      "✅ Key Visual – A distinct visual language defining the brand's colors, typography, and layout",
      "✅ Moodboard & References – A structured direction for the overall aesthetic and theme",
      "✅ Merchandise & Collaterals – Sample designs for branded merchandise, reflecting the communal and creative essence of Cretivox"
    ],
    visualIdentity: "The design features bright, energetic colors and playful typography, reinforcing the youthful and collaborative nature of Cretivox Communal Space.",
    screens: [
      "/images/graphic-design/cretivox/0. Thumbnail.png",
      "/images/graphic-design/cretivox/1. Key Visual.png",
      "/images/graphic-design/cretivox/2. Merchandise Packs.png",
      "/images/graphic-design/cretivox/3. Korban Pepes Transum Pack.png",
      "/images/graphic-design/cretivox/4. Si Paling Perintilan Pack.png",
      "/images/graphic-design/cretivox/5. Derita Anak Kos Pack.png",
      "/images/graphic-design/cretivox/6. Moodboard.png",
      "/images/graphic-design/cretivox/7. Reference.png"
    ],
    captions: [
      "Project Overview",
      "Key Visual Design",
      "Merchandise Packs Overview",
      "Korban Pepes Transum Pack",
      "Si Paling Perintilan Pack",
      "Derita Anak Kos Pack",
      "Design Moodboard",
      "Visual References"
    ]
  },
  {
    id: 2,
    title: "BookClan: A Cult-Inspired Merch Pack & Vibrant Rebrand",
    description: "A vibrant rebrand and merchandise collection for a Jakarta-based book club",
    image: "/images/graphic-design/bookclan/0. Bookclan Thumbnail.png",
    tags: ["Branding", "Visual Identity", "Merchandise", "Social Media"],
    tools: ["Adobe Illustrator", "Canva"],
    overview: "BookClan, a Jakarta-based book club, wanted to embrace their 'book cult' identity while refining their visual branding for a more cohesive and playful look. To achieve this, I designed the Book Cult Starter Pack, a collection of themed merchandise reflecting their quirky persona, and led the BookClan 2.0 Rebrand, introducing a fresh, structured visual identity that better aligned with their fun and laid-back community.",
    process: [
      "📌 Research & Analysis – Identified gaps in BookClan's previous branding, ensuring the new designs enhanced cohesion while maintaining the club's unique charm.",
      "📌 Concept Development – Developed a new visual identity that balanced BookClan's quirky personality with a polished, professional look.",
      "📌 Execution – Designed the merchandise pack and reworked BookClan's entire visual system, ensuring consistency across platforms."
    ],
    features: [
      "✅ Book Cult Starter Pack – A collectible merch set featuring:",
      "• Sticker Sheet",
      "• Three Pins",
      "• Themed T-Shirts",
      "✅ Visual Identity & Rebranding – A refreshed and structured brand identity with:",
      "• Playful Color Palette & Typography – Introduced new colors and fonts to reflect BookClan's fun, casual, and welcoming vibe.",
      "• Fun Geometric Graphic Elements – Implemented quirky design motifs that added personality and structure.",
      "• Cohesive Weekly Instagram Templates – Redesigned layouts for recurring posts, ensuring a polished and recognizable social media presence.",
      "• Organized Instagram Story Highlight Covers – Created custom icons to improve navigation and consistency across their page."
    ],
    visualIdentity: "The new branding features a vibrant, playful color palette and bold typography, reinforcing BookClan's fun, laid-back, and community-driven spirit. Geometric graphic elements add an extra layer of personality, making the brand visually engaging while maintaining consistency across platforms.",
    screens: [
      "/images/graphic-design/bookclan/0. Bookclan Thumbnail.png",
      "/images/graphic-design/bookclan/1. Visual Brand.png",
      "/images/graphic-design/bookclan/2. Book Cult Starter Pack.png",
      "/images/graphic-design/bookclan/3. Instagram Post Template & Story Highlights Cover.png",
      "/images/graphic-design/bookclan/4. Rebranding Process.png"
    ],
    captions: [
      "Project Overview",
      "Visual Brand Identity",
      "Book Cult Starter Pack",
      "Instagram Templates & Story Highlights",
      "Rebranding Process"
    ]
  },
  {
    id: 3,
    title: "Sunshine Tonic: A Playful Fusion of Color & Self-Expression",
    description: "A vibrant jewelry brand celebrating individuality through colorful bead accessories",
    image: "/images/graphic-design/sunshine-tonic/0. Packaging.png",
    tags: ["Branding", "Product Design", "Packaging", "Identity"],
    tools: ["Adobe Illustrator", "Canva"],
    overview: "Sunshine Tonic's packaging and branding were designed to reflect its vibrant, playful, and expressive identity. Inspired by the philosophy of bringing color to a monochrome world, the brand encourages self-expression through bold, handcrafted bead jewelry. The packaging design amplifies this mission with dynamic patterns, lively colors, and fluid graphics, ensuring a delightful and memorable unboxing experience. Every element is crafted to make each piece feel like wearable art, empowering customers to embrace their individuality and stand out.",
      process: [
      "📌 Research & Analysis – Studied trends in fashion and accessories branding, identifying a gap in colorful, youthful, and expressive packaging.",
      "📌 Concept Development – Developed a maximalist yet inclusive visual identity, striking a balance between fun, creativity, and accessibility for all styles.",
      "📌 Execution – Designed a cohesive branding system, including packaging, typography, and signature design elements that embody Sunshine Tonic's philosophy, making every piece personal, unique, and full of life."
      ],
    features: [
      "✅ Branding & Identity – A lively and expressive design system featuring:",
      "• Vibrant Color Palette & Typography – A mix of bold, joyful hues and groovy fonts, balanced with structured simplicity.",
      "• Playful Graphic Elements – Abstract swirls, floral details, and sunbursts for a dynamic, engaging look.",
      "• Maximalist Yet Versatile Approach – Designed to appeal to both color-loving maximalists and minimalists who enjoy a subtle pop of color.",

      "✅ Packaging Design – A bold and fun packaging system, including:",
      "• Custom Jewelry Boxes – Designed for an exciting unboxing experience with playful, interactive elements.",
      "• Branded Pouches & Stickers – Small but impactful details that enhance personalization and collectability.",
      "• Eco-Friendly Considerations – Ensuring aesthetic appeal while being mindful of sustainability."
    ],
    visualIdentity: "The branding is built around vibrant, eye-catching colors and modern groovy typography, balanced with a cleaner sans-serif (Poppins) for contrast. The visual elements include sun motifs, organic swirls, and floral accents, reinforcing the name Sunshine Tonic—where \"Sunshine\" represents brightness and energy, and \"Tonic\" symbolizes healing and joy. This bold and expressive identity ensures that customers feel confident and noticed when wearing Sunshine Tonic's accessories, transforming small details into powerful statements of self-expression.",
    screens: [
      "/images/graphic-design/sunshine-tonic/0. Packaging.png",
      "/images/graphic-design/sunshine-tonic/1. Visual Brand.png",
      "/images/graphic-design/sunshine-tonic/2. Instagram Posts.png",
      "/images/graphic-design/sunshine-tonic/3. Display.png"
    ],
    captions: [
      "Project Overview & Packaging Design",
      "Visual Brand Identity",
      "Social Media Content",
      "Product Display & Presentation"
    ]
  },
  {
    id: 4,
    title: "Rayain.ID: Modern & Joyful Digital Card Branding",
    description: "A clean yet celebratory visual system for digital card platform",
    image: "/images/graphic-design/rayain/1. overview.png",
    tags: ["Branding", "Social Media", "Print Design"],
    tools: ["Adobe Illustrator", "Figma"],
    overview: "For Rayain.ID's Instagram post templates and brochure, I developed a clean yet celebratory visual system that balances modern simplicity with vibrant accents. The goal was to highlight Rayain Card's convenience and personalization while maintaining a tech-savvy, engaging, and professional aesthetic. Through a structured layout and dynamic design elements, the visuals effectively convey the joy and ease of creating personalized digital cards.",
      process: [
      "📌 Research & Strategy – Analyzed Rayain.ID's branding and user expectations to create a visually cohesive and engaging design.",
      "📌 Concept Development – Focused on clear visual hierarchy, ensuring that the product's key features stand out while keeping the layouts user-friendly and interactive.",
      "📌 Execution – Designed a versatile set of Instagram templates and a sleek brochure, maintaining consistency with Rayain's identity."
      ],
    features: [
      "✅ Instagram Templates – Designed customizable templates for Rayain.ID's social media, ensuring brand consistency across posts.",
      "✅ Brochure Design – A sleek, visually appealing print & digital brochure outlining Rayain Card's features, pricing, and benefits.",
      "✅ Call-to-Action Focus – Strategic CTA placements guiding users to engage, explore, and create their own Rayain Card."
    ],
    visualIdentity: "The branding for this project integrates Rayain's official color palette and sleek typography, reflecting modernity and ease of use. To enhance the celebratory feel, I incorporated:\n\n✅ Colorful Accents – Bright yet balanced hues to bring out the joy and personalization aspect of Rayain Card.\n\n✅ Minimalist Tech-Inspired Graphics – Clean lines, soft gradients, and subtle geometric elements for a modern, polished look.\n\n✅ Structured Yet Playful Layouts – A combination of bold headers, engaging iconography, and dynamic compositions that ensure clarity while keeping the designs fresh and inviting.",
    screens: [
      "/images/graphic-design/rayain/1. overview.png",
      "/images/graphic-design/rayain/2. visual brand.png",
      "/images/graphic-design/rayain/3. brochure.png",
      "/images/graphic-design/rayain/4. instagram templates.png"
    ],
    captions: [
      "Project Overview",
      "Visual Brand Identity",
      "Brochure Design",
      "Instagram Templates"
    ]
  },
  {
    id: 5,
    title: "AFAIR 2024: Evolving Visual Identity for an Architectural Exhibition",
    description: "A dynamic brand system for Indonesia's largest architectural career fair",
    image: "/images/graphic-design/afair/0. overview.png",
    tags: ["Printed Media", "Event Design", "Exhibition", "Architecture"],
    tools: ["Figma", "Adobe Illustrator"],
    overview: "For AFAIR's exhibition branding and decor, I developed banners, posters, and standees that adapted to the evolving theme and purpose of the event. The exhibition's visual identity transformed over time—from playful and colorful in the early stages to a mature and professional aesthetic toward the main event. This shift reflected AFAIR's philosophy of growth through adversity, symbolized by a catalyst reaction, where experiences shape and refine us into something new.\n\nAs Vice Head of Creative & Décor, my role was to oversee and guide the creative team, ensuring cohesive designs while also contributing hands-on to the physical media that defined the exhibition space.",
      process: [
      "📌 Research & Strategy – Developed visual guidelines for different phases of the event, ensuring alignment with AFAIR's evolving identity.",
      "📌 Concept Development – Incorporated fragmented visuals inspired by catalytic reactions to symbolize resilience, later transitioning to a more structured look as the event matured.",
      "📌 Execution – Designed banners, posters, and standees that functioned as both decor and information tools, enhancing the atmosphere without overwhelming the space."
      ],
    features: [
      "✅ Posters – Designed to capture the essence of each phase, ensuring that the visual language aligned with the event's goals.",
      "✅ Banners & Standees – Created as functional décor, enhancing talk shows, student presentations, and networking areas while reinforcing the exhibition's identity.",
      "✅ Adaptive Design System – Ensured that all materials felt cohesive yet adaptable, making a seamless transition from the early energetic phase to the more polished final stage."
    ],
    visualIdentity: "The branding evolved alongside the exhibition:\n\n✅ Early-Stage Branding – Bright, fragmented visuals with playful compositions to reflect the dynamic and creative spirit of the initial exhibition.\n\n✅ Main Exhibition Branding – A refined, sophisticated aesthetic that emphasized structure, elegance, and professionalism for the student presentations and talk shows.\n\n✅ Color & Typography – Transitioned from bold, vibrant hues and expressive typography to a more muted, sleek color palette and structured typefaces, reinforcing the growth narrative of the event.",
    screens: [
      "/images/graphic-design/afair/0. overview.png",
      "/images/graphic-design/afair/1. afair standee and posters.png",
      "/images/graphic-design/afair/2. afair banners.png"
    ],
    captions: [
      "Project Overview",
      "Standees & Posters Design",
      "Exhibition Banners"
    ]
  },
  {
    id: 6,
    title: "Indokrisna Technology: Elevating Brand Consistency & Digital Presence",
    description: "Expanding and refining a SaaS startup's visual identity across digital platforms",
    image: "/images/graphic-design/indokrisna/ikt overview.png",
    tags: ["Digital Design", "Social Media", "Corporate", "Tech"],
    tools: ["Figma", "Adobe Illustrator", "Canva"],
    overview: "As a Visual Communication Intern at Indokrisna Technology, I played a key role in expanding and refining the company's branding across multiple platforms. My work encompassed social media design, marketing collateral, event materials, and internal assets, ensuring a consistent, polished, and professional identity fitting for a SaaS startup.\n\nI designed for Instagram, LinkedIn, Facebook, YouTube, and the company website, adapting visuals to platform-specific needs while reinforcing Indokrisna's identity. Additionally, I created pitch decks, case study brochures, webinar materials, and corporate presentations for both internal use and client-facing projects.",
    visualIdentity: "📌 Modern & Professional – Established a clean, tech-forward aesthetic that reflects Indokrisna's position as a SaaS startup.\n\n📌 Expanded Color Palette – Introduced color variations, transparency effects, and additional shades to enhance flexibility.\n\n📌 Refined Typography – Ensured consistency with a balance of professional sans-serif fonts that maintain readability across platforms.\n\n📌 Dynamic Assets & Layouts – Developed visual elements, icons, and layouts that enhance brand storytelling while keeping designs efficient and impactful.",
      process: [
      "📌 Refined Visual Guidelines – Built upon existing branding by introducing a broader color palette, transparent variations, and new assets to enhance flexibility and consistency.",
      "📌 Created a Brand Kit in Canva – Standardized logos, icons, typography, and frequently used assets for efficient content creation across teams.",
      "📌 Developed Templates – Designed reusable templates for newsletters, event posts, story highlights, webinar promotions, and corporate celebrations, streamlining content production."
    ],
    features: [
      "✅ Social Media & Digital Content",
      "• Designed thumbnails, banners, and templates for LinkedIn newsletters, Instagram, Facebook, and YouTube.",
      "• Created platform-specific post variations to optimize engagement across different dimensions and algorithms.",
      "• Developed email and LinkedIn banners for onboarding and corporate announcements.",

      "✅ Marketing & Corporate Materials",
      "• Designed pitch decks and case study brochures to support client presentations.",
      "• Developed company profile presentations to showcase Indokrisna's expertise.",
      "• Created webinar PowerPoint decks and promotional posters for event marketing.",

      "✅ Event & Internal Assets",
      "• Crafted visuals for webinars and corporate events, ensuring cohesive branding across promotional materials and live presentations.",
      "• Designed templates for internal celebrations, national holidays, and company milestones to maintain a strong brand presence."
    ],
    screens: [
      "/images/graphic-design/indokrisna/ikt overview.png",
      "/images/graphic-design/indokrisna/social Media & digital content.png",
      "/images/graphic-design/indokrisna/Marketing & Corporate materials.png",
      "/images/graphic-design/indokrisna/events & internal content.png"
    ],
    captions: [
      "Project Overview",
      "Social Media & Digital Content",
      "Marketing & Corporate Materials",
      "Events & Internal Content"
    ]
  }
];

interface GraphicDesignSectionProps {
  bestWork?: boolean | number;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  navigateToSection: () => void;
  openPopup?: (project: Project) => void;
}

export default function GraphicDesignSection({ 
  bestWork = false, 
  selectedCategory, 
  setSelectedCategory,
  navigateToSection,
  openPopup
}: GraphicDesignSectionProps) {
  const projectsToShow = typeof bestWork === 'number' ? projects.slice(0, bestWork) : bestWork ? projects.slice(0, 6) : projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    if (openPopup) {
      openPopup(project);
    } else {
      setIsPopupOpen(true);
    }
  };

  const handleClose = () => {
    setSelectedProject(null);
    setIsPopupOpen(false);
  };

  const handlePrevious = () => {
    if (!selectedProject) return;
    const currentIndex = projectsToShow.findIndex(p => p.id === selectedProject.id);
    const previousIndex = currentIndex === 0 ? projectsToShow.length - 1 : currentIndex - 1;
    setSelectedProject(projectsToShow[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = projectsToShow.findIndex(p => p.id === selectedProject.id);
    const nextIndex = currentIndex === projectsToShow.length - 1 ? 0 : currentIndex + 1;
    setSelectedProject(projectsToShow[nextIndex]);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-red-500 mb-4">
        Graphic Design
      </h3>
      <ClientSideGraphicDesignGrid 
        projects={projectsToShow}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
        onClose={handleClose}
      />
      {!openPopup && selectedProject && (
        <GraphicDesignPopup
          project={selectedProject}
          isOpen={isPopupOpen}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
          navigateToSection={navigateToSection}
        />
      )}
    </div>
  )
}

