'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import ArchitecturalDesignPopup from './ArchitecturalDesignPopup'

type Category = 'all' | 'ui' | 'graphic' | 'video' | 'sunshine' | 'architectural'

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
  images?: string[];
  keyFeatures?: string[];
  sustainability?: string[];
  collaborations?: string[];
}

const projects = [
  {
    id: 1,
    title: "Naskopi Café Relocation – Optimizing Layout & Space Utilization",
    description: "Strategic redesign of a relocated café, optimizing space utilization through innovative layout solutions and enhanced customer experience design",
    image: "/images/architectural-design/naskopi-cafe/thumbnail.png",
    tags: ["Interior Design", "Space Planning", "Café Design", "Renovation"],
    tools: ["Rhino 3D", "Twinmotion"],
    overview: "As a freelance interior designer, I led the spatial redesign of Naskopi Café after its relocation to a new site. My primary challenge was reconfiguring the layout to fit all existing furniture, lighting, and equipment from the previous location, ensuring a seamless transition while enhancing functionality and visual cohesion. I strategically relocated key areas such as the bar, seating zones, and functional spaces, optimizing the workflow and customer experience. To maximize space, I proposed a new balcony for outdoor seating, redefined traffic flow, and introduced design elements like murals, mirrors, textured walls, paintings, and other decorative elements to add character to the café.",
    process: [
      "✅ Analyzed and mapped the previous café layout to efficiently place existing furniture and key areas in the new space.",
      "✅ Designed a new seating arrangement that balanced comfort, aesthetics, and functionality.",
      "✅ Proposed the relayout of the bar, musholla (prayer room), storage, and admin room to enhance workflow and usability.",
      "✅ Recommended a second-floor balcony addition by modifying the facade to accommodate outdoor seating.",
      "✅ Developed interior and exterior mockups, refining design elements to create a cohesive atmosphere."
    ],
    features: [
      "✅ Provided design solutions and proposals that optimized space efficiency while maintaining an inviting and organized layout.",
      "✅ Suggested decorative enhancements, including murals, textured finishes, mirrors, paintings, and other décor elements, to elevate the café's ambiance.",
      "✅ Developed a strategic layout that improved functionality and customer experience.",
      "✅ Helped establish a strong visual identity by incorporating elements that aligned with the café's branding and existing furniture."
    ],
    visualIdentity: "",
    screens: [
      "/images/architectural-design/naskopi-cafe/thumbnail.png",
      "/images/architectural-design/naskopi-cafe/0. project overview.png",
      "/images/architectural-design/naskopi-cafe/3. floorplan design 1st floor.png",
      "/images/architectural-design/naskopi-cafe/4. floorplan design 2nd floor.png",
      "/images/architectural-design/naskopi-cafe/5. section a design.png",
      "/images/architectural-design/naskopi-cafe/6. section b design.png",
      "/images/architectural-design/naskopi-cafe/7. section c design.png",
      "/images/architectural-design/naskopi-cafe/8. section d design.png",
      "/images/architectural-design/naskopi-cafe/9. first floor perspectives.png",
      "/images/architectural-design/naskopi-cafe/10. 2nd floor perspectives.png",
      "/images/architectural-design/naskopi-cafe/11. facade lighting.png",
      "/images/architectural-design/naskopi-cafe/12. lighting 1st floorplan.png",
      "/images/architectural-design/naskopi-cafe/13. lighting 2nd floorplan.png",
      "/images/architectural-design/naskopi-cafe/14. lighting section a.png",
      "/images/architectural-design/naskopi-cafe/15. lighitng section b.png",
      "/images/architectural-design/naskopi-cafe/16. lighting section c.png",
      "/images/architectural-design/naskopi-cafe/17. lighting section d.png",
      "/images/architectural-design/naskopi-cafe/18. lighting reference.png",
      "/images/architectural-design/naskopi-cafe/19. naskopi reference.png",
      "/images/architectural-design/naskopi-cafe/20. naskopi reference (2).png",
      "/images/architectural-design/naskopi-cafe/21. naskopi field notes.png",
      "/images/architectural-design/naskopi-cafe/22. naskopi fieldnotes.png",
      "/images/architectural-design/naskopi-cafe/23. naskopi fieldnotes (2).png"
    ],
    captions: [
      "Project Thumbnail",
      "Project Overview",
      "First Floor Plan Design",
      "Second Floor Plan Design",
      "Section A Design",
      "Section B Design",
      "Section C Design",
      "Section D Design",
      "First Floor Perspectives",
      "Second Floor Perspectives",
      "Facade Lighting Design",
      "First Floor Lighting Plan",
      "Second Floor Lighting Plan",
      "Lighting Section A",
      "Lighting Section B",
      "Lighting Section C",
      "Lighting Section D",
      "Lighting Reference",
      "Site Reference",
      "Additional Site Reference",
      "Field Study Notes",
      "Detailed Field Notes",
      "Additional Field Notes"
    ]
  },
  {
    id: 2,
    title: "Naskopi Café – Cozy Meets Chic in a Modern Coffee Space",
    description: "A thoughtful transformation of a corner-lot space into an inviting coffee destination that balances aesthetics, functionality, and community engagement",
    image: "/images/architectural-design/naskopi-cafe-redesign/0. project thumbnail.png",
    tags: ["Interior Design", "Café Design", "Space Planning", "Concept Development"],
    tools: ["Rhino 3D"],
    overview: "As a freelance interior designer, I transformed Naskopi Café's rented corner-lot space into a warm and inviting coffee destination. Working within the existing brand identity, I developed concept mood boards, designed spatial layouts, and created interior and exterior mockups that balanced aesthetics, functionality, and flexibility. The design maximized seating capacity while maintaining a cozy atmosphere, integrating materials like wood, tile, and greenery to enhance the café's ambiance.",
    process: [
      "✅ Developed concept mood boards, translating branding elements and reference images into spatial design.",
      "✅ Designed interior and exterior mockups, optimizing seating layouts across two floors.",
      "✅ Integrated warm ambient lighting, greenery, and materials like wood and tile to enhance comfort and aesthetics.",
      "✅ Considered environmental factors, such as heat control for the second-floor workspace, ensuring functionality.",
      "✅ Created flexible seating arrangements to accommodate both everyday visitors and large-scale café events."
    ],
    features: [
      "✅ Successfully expanded the café's visual identity into a cohesive physical space.",
      "✅ Increased seating capacity by 10 seats while maintaining a cozy and uncluttered layout.",
      "✅ Designed a space that balanced work-friendly environments with social and leisure areas.",
      "✅ Provided an adaptable layout, allowing the café to host community events seamlessly."
    ],
    visualIdentity: "",
    screens: [
      "/images/architectural-design/naskopi-cafe-redesign/0. project thumbnail.png",
      "/images/architectural-design/naskopi-cafe-redesign/1. logo breakdown.png",
      "/images/architectural-design/naskopi-cafe-redesign/2. client reference breakdown.png",
      "/images/architectural-design/naskopi-cafe-redesign/3. site.png",
      "/images/architectural-design/naskopi-cafe-redesign/4. first floor moodboard.png",
      "/images/architectural-design/naskopi-cafe-redesign/5. 2nd floor moodboard.png",
      "/images/architectural-design/naskopi-cafe-redesign/6. new reference.png",
      "/images/architectural-design/naskopi-cafe-redesign/7. 1st floorplan.png",
      "/images/architectural-design/naskopi-cafe-redesign/8. 2nd floor plan.png",
      "/images/architectural-design/naskopi-cafe-redesign/9. section a and b 1st floor.png",
      "/images/architectural-design/naskopi-cafe-redesign/10. section c and d 1st floor.png",
      "/images/architectural-design/naskopi-cafe-redesign/11. section e dan f 2nd floor.png",
      "/images/architectural-design/naskopi-cafe-redesign/12. section g dan h 2nd floor.png",
      "/images/architectural-design/naskopi-cafe-redesign/13. sectrion i and j 1st floor.png",
      "/images/architectural-design/naskopi-cafe-redesign/14. south elevation.png",
      "/images/architectural-design/naskopi-cafe-redesign/15. west elevation.png",
      "/images/architectural-design/naskopi-cafe-redesign/16. 1st floor perspectives.png",
      "/images/architectural-design/naskopi-cafe-redesign/17. 1st floor outdoor perspectives.png"
    ],
    captions: [
      "Project Overview",
      "Logo & Brand Analysis",
      "Client Reference Analysis",
      "Site Analysis",
      "First Floor Concept Moodboard",
      "Second Floor Concept Moodboard",
      "Design References",
      "First Floor Plan Design",
      "Second Floor Plan Design",
      "Sections A & B - First Floor",
      "Sections C & D - First Floor",
      "Sections E & F - Second Floor",
      "Sections G & H - Second Floor",
      "Sections I & J - First Floor",
      "South Elevation",
      "West Elevation",
      "First Floor Interior Perspectives",
      "First Floor Outdoor Perspectives"
    ]
  },
  {
    id: 3,
    title: "Japandi Apartment Design – Internship Enrollment Test for Dekoroma",
    description: "A modern apartment design that blends Japanese minimalism with Scandinavian functionality for a serene living space",
    image: "/images/architectural-design/japandi-apartment/0. project thumbnail.png",
    tags: ["Interior Design", "Residential", "Japandi Style", "Space Planning"],
    tools: ["SketchUp"],
    overview: "For my internship enrollment test at Dekoroma, I was tasked with designing a Japandi-style apartment for a young married couple, Pak Krishna (35) and his wife. The apartment layout included a kitchen, living room, master bedroom, and bathroom, with a fixed floor plan where walls couldn't be moved, but furniture and spatial arrangements could be redesigned.\n\nTo create a functional and future-proof living space, I analyzed the client's needs, hobbies, and potential future lifestyle changes, including:\n\n• Storage solutions for their formal clothing and dress collection\n\n• Display areas for their book and watch collections\n\n• A seamless dressing area for an efficient morning routine\n\n• Multifunctional spaces that could adapt to a growing family\n\nI explored modern Japandi aesthetics, known for clean lines, natural materials, neutral color palettes, and functional design, incorporating rattan, wood, linen, marble patterns, and gold accents. The final design focused on three main elements:\n\n• A Seamless Dressing Area – Optimized flow from bathroom → wardrobe → vanity\n\n• Transformable & Multifunctional Spaces – Space-saving furniture & adaptable layouts\n\n• Collection Displays – Public book display & cozy reading corner, private watch display",
    process: [
      "✅ Conducted a client analysis, breaking down needs, hobbies, and future lifestyle considerations",
      "✅ Created a functional layout optimizing existing spaces for efficiency and comfort",
      "✅ Designed a floor-to-ceiling custom bookshelf for book storage and easy accessibility",
      "✅ Integrated a transformable dining table to save space in the kitchen",
      "✅ Developed a flexible living area with floor cushions and movable furniture to enhance comfort and usability",
      "✅ Proposed a private watch display in the bedroom to protect valuable collections",
      "✅ Designed mood boards, mockups, and visualizations to illustrate the user experience"
    ],
    features: [
      "✅ Delivered a Japandi-inspired interior concept balancing aesthetics, functionality, and flexibility",
      "✅ Designed a child-friendly space with future adaptability in mind",
      "✅ Created a smooth and efficient dressing flow, catering to the couple's lifestyle",
      "✅ Proposed semi-permanent furniture and space-saving elements to maximize usability"
    ],
    visualIdentity: "",
    screens: [
      "/images/architectural-design/japandi-apartment/0. project thumbnail.png",
      "/images/architectural-design/japandi-apartment/1. existing framework'.png",
      "/images/architectural-design/japandi-apartment/2. client analysis.png",
      "/images/architectural-design/japandi-apartment/3. modern japandi theme breakdown.png",
      "/images/architectural-design/japandi-apartment/4. main ideas.png",
      "/images/architectural-design/japandi-apartment/5. final moodboard.png",
      "/images/architectural-design/japandi-apartment/6. floorplan.png",
      "/images/architectural-design/japandi-apartment/7. section a and b.png",
      "/images/architectural-design/japandi-apartment/8. section c and d.png",
      "/images/architectural-design/japandi-apartment/9. section e and f.png",
      "/images/architectural-design/japandi-apartment/10. section g and h.png",
      "/images/architectural-design/japandi-apartment/11. living room and kitchen perspectives.png",
      "/images/architectural-design/japandi-apartment/12. bedroom and bathroom perspectives.png"
    ],
    captions: [
      "Project Overview",
      "Existing Framework Analysis",
      "Client Analysis & Requirements",
      "Modern Japandi Theme Breakdown",
      "Main Design Ideas & Solutions",
      "Final Design Moodboard",
      "Floor Plan Design",
      "Sections A & B",
      "Sections C & D",
      "Sections E & F",
      "Sections G & H",
      "Living Room & Kitchen Perspectives",
      "Bedroom & Bathroom Perspectives"
    ]
  },
  {
    id: 4,
    title: "Rajawali Residence – Residential Interior Mockups",
    description: "Creating detailed 3D visualizations for three distinct residential houses, focusing on interior design and space planning",
    image: "/images/architectural-design/rajawali-residence/0. project thumbnail.png",
    tags: ["Interior Design", "3D Visualization", "Residential", "Space Planning"],
    tools: ["Rhino 3D"],
    overview: "As a freelance interior designer, I created detailed 3D visualizations for three distinct residential houses in the Rajawali Residence project. The focus was on developing interior mockups that would help clients visualize their future living spaces and make informed decisions about their home designs.",
    process: [
      "✅ Analyzed client requirements and preferences for each house type",
      "✅ Developed detailed floor plans for optimal space utilization",
      "✅ Created 3D visualizations of key living spaces",
      "✅ Designed interior layouts for living rooms, kitchens, bedrooms, and bathrooms",
      "✅ Produced high-quality renderings to showcase design concepts"
    ],
    features: [
      "✅ Provided comprehensive interior mockups for three different house types",
      "✅ Created detailed visualizations of living spaces, kitchens, and bedrooms",
      "✅ Developed bathroom design concepts for each house type",
      "✅ Produced high-quality 3D renderings to help clients visualize their future homes"
    ],
    visualIdentity: "",
    screens: [
      "/images/architectural-design/rajawali-residence/0. project thumbnail.png",
      "/images/architectural-design/rajawali-residence/1. two Floor Houseplan.png",
      "/images/architectural-design/rajawali-residence/2. Block A two floor Houseplan.png",
      "/images/architectural-design/rajawali-residence/3. Block b two floor houseplan.png",
      "/images/architectural-design/rajawali-residence/4. one floor house plan.png",
      "/images/architectural-design/rajawali-residence/5. block a and b one floor house plan.png"
    ],
    captions: [
      "Project Overview",
      "Two Floor House Plan - Overview",
      "Block A - Two Floor House Plan",
      "Block B - Two Floor House Plan",
      "One Floor House Plan - Overview",
      "Block A & B - One Floor House Plan"
    ]
  }
]

export default function ArchitecturalDesign({ 
  bestWork = false, 
  selectedCategory, 
  setSelectedCategory, 
  navigateToSection,
  openPopup 
}: { 
  bestWork?: boolean | number, 
  selectedCategory: string, 
  setSelectedCategory: (category: string) => void, 
  navigateToSection: () => void,
  openPopup: (project: ArchitecturalProject) => void
}) {
  const projectsToShow = typeof bestWork === 'number' 
    ? projects.slice(0, bestWork) 
    : bestWork 
      ? projects.filter(p => p.id <= 3)  // Only show first 3 projects in best works
      : projects;  // Show all projects in full library

  console.log('bestWork:', bestWork);
  console.log('projectsToShow:', projectsToShow.map(p => p.id));
  console.log('projects:', projects.map(p => p.id));

  const [selectedProject, setSelectedProject] = useState<ArchitecturalProject | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleOpenPopup = (project: ArchitecturalProject) => {
    setSelectedProject(project)
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
    setSelectedProject(null)
  }

  const handlePrevious = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length
    setSelectedProject(projects[previousIndex])
  }

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    setSelectedProject(projects[nextIndex])
  }

  return (
    <div className="space-y-4">
      <motion.h3 
        className="text-2xl font-bold text-purple-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Architectural Design
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projectsToShow.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleOpenPopup(project)}
          >
            <div className="relative aspect-video">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
              <motion.div
                className="absolute inset-0 bg-purple-500 bg-opacity-75 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="text-white text-center p-4">
                  <h4 className="text-lg font-semibold mb-2 line-clamp-2">{project.title}</h4>
                  <p className="text-sm mb-4 line-clamp-3">{project.description}</p>
                  <button
                    className="mt-2 bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 transition duration-300"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <ArchitecturalDesignPopup
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

