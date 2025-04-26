'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Palette, Video, Briefcase, PenTool, Book, Dumbbell, Coffee, Globe, Shirt, Home } from 'lucide-react'
import { useRef } from 'react'

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

const skills = [
  {
    name: 'UI/UX Design',
    description: 'Crafting intuitive and user-friendly landing pages',
    tools: ['Figma', 'v0', 'Cursor'],
    icon: <PenTool className="w-6 h-6" />,
    color: 'text-blue-500',
    hoverBg: 'hover:bg-blue-500'
  },
  {
    name: 'Graphic Design',
    description: 'Creating logos, branding, and marketing assets',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Canva'],
    icon: <Palette className="w-6 h-6" />,
    color: 'text-red-500',
    hoverBg: 'hover:bg-red-500'
  },
  {
    name: 'Video Editing & Motion Graphics',
    description: 'Editing short and long form videos and designing basic logo animations',
    tools: ['Adobe Premiere Pro', 'Adobe After Effects', 'Capcut'],
    icon: <Video className="w-6 h-6" />,
    color: 'text-green-500',
    hoverBg: 'hover:bg-green-500'
  },
  {
    name: 'Architecture & Interior Design',
    description: 'Designing functional and aesthetic spaces with a focus on user experience',
    tools: ['Rhino 3D', 'Twinmotion', 'AutoCAD', 'SketchUp'],
    icon: <Home className="w-6 h-6" />,
    color: 'text-purple-500',
    hoverBg: 'hover:bg-purple-500'
  },
  {
    name: 'Entrepreneurship',
    description: 'Founder of Sunshine Tonic, specializing in unique bead accessory designs',
    tools: ['Business Management', 'Product Design'],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'text-orange-500',
    hoverBg: 'hover:bg-orange-500',
    className: 'md:col-span-2'
  }
]

const experiences = [
  {
    year: '2024 – Present',
    title: 'Product Designer',
    company: 'IUL Technologies',
    description: 'Currently working as a Product Designer, contributing to innovative projects and user-centric designs.',
    color: 'bg-blue-500'
  },
  {
    year: '2024',
    title: 'Visual Communication Intern',
    company: 'PT Indokrisna Teknologi',
    description: 'Designed 15+ assets and template for 5+ platforms, created prototypes for 2 major websites, managed a 10+ employee photoshoot.',
    color: 'bg-green-500'
  },
  {
    year: '2023-2024',
    title: 'Volunteer Content Creator & Graphic Designer',
    company: 'BookClan',
    description: 'Grew TikTok to 15K, directed 20+ shoots, rebranded visual guideline and 3 merchandise.',
    color: 'bg-yellow-500'
  },
  {
    year: '2023',
    title: 'Vice Head of Creative',
    company: 'AFAIR UI 2024',
    description: 'Decorated venue for 100+ attendees, led an 8-person team on 5+ major design & video projects for exhibitions and events.',
    color: 'bg-purple-500'
  },
  {
    year: '2022',
    title: 'Creative Deputy Manager',
    company: 'E-Corp FTUI',
    description: 'Designed 5–10 templates, revamped a publication system for 5 projects, mentored 8 creatives in Figma, and created 2 logo animations.',
    color: 'bg-red-500'
  }
]

const hobbies = [
  {
    name: 'Reading',
    caption: 'Adventure and fantasy novels fuel my creativity',
    icon: Book,
    color: 'text-indigo-500',
    hoverBg: 'hover:bg-indigo-500',
    image: '/images/about/reading.JPG'
  },
  {
    name: 'Running',
    caption: 'Clears my head and keeps me focused',
    icon: Dumbbell,
    color: 'text-green-500',
    hoverBg: 'hover:bg-green-500',
    image: '/images/about/running.jpg'
  },
  {
    name: 'Café Hopping',
    caption: 'New cafés fuel my creativity (and caffeine fixes!).',
    icon: Coffee,
    color: 'text-yellow-500',
    hoverBg: 'hover:bg-yellow-500',
    image: '/images/about/cafe.JPG'
  },
  {
    name: 'Traveling',
    caption: 'Exploring new places, finding fresh inspiration.',
    icon: Globe,
    color: 'text-blue-500',
    hoverBg: 'hover:bg-blue-500',
    image: '/images/about/travel.JPG'
  },
  {
    name: 'Fashion',
    caption: 'Mixing and matching clothes and colors.',
    icon: Shirt,
    color: 'text-purple-500',
    hoverBg: 'hover:bg-purple-500',
    image: '/images/about/fashion.png'
  },
]

const Blob = ({ className }: { className: string }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      scale: [1, 1.1, 0.9, 1],
      rotate: [0, 10, -10, 0],
      x: [0, 20, -20, 0],
      y: [0, -20, 20, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  >
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M45.4,-77.5C58.9,-69.7,70,-57.4,79.2,-43.3C88.5,-29.2,95.9,-14.6,96.7,0.4C97.4,15.5,91.4,31,82.4,44.6C73.4,58.2,61.3,69.9,47.3,77.9C33.2,85.9,16.6,90.2,-0.2,90.5C-16.9,90.8,-33.9,87.2,-48.5,79.2C-63.1,71.2,-75.4,58.8,-83.7,44.3C-92,29.8,-96.3,14.9,-96.2,0C-96.1,-14.8,-91.6,-29.6,-83.5,-42.4C-75.3,-55.2,-63.5,-66,-49.8,-73.8C-36.1,-81.6,-20.5,-86.4,-3.6,-81.1C13.4,-75.8,31.9,-85.3,45.4,-77.5Z" transform="translate(100 100)" />
    </svg>
  </motion.div>
)

export default function About() {
  const timelineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  })

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1])


  return (
    <section id="about" className={`relative py-16 bg-gradient-to-br from-yellow-300 to-yellow-200 overflow-hidden ${poppins.className}`}>
      <Blob className="w-[150vw] h-[150vw] sm:w-[130vw] sm:h-[130vw] md:w-[110vw] md:h-[110vw] lg:w-[90vw] lg:h-[90vw] text-blue-500 opacity-20 -top-1/3 -left-1/3" />
      <Blob className="w-[140vw] h-[140vw] sm:w-[120vw] sm:h-[120vw] md:w-[100vw] md:h-[100vw] lg:w-[80vw] lg:h-[80vw] text-red-500 opacity-20 -bottom-1/3 -right-1/3" />
      <Blob className="w-[130vw] h-[130vw] sm:w-[110vw] sm:h-[110vw] md:w-[90vw] md:h-[90vw] lg:w-[70vw] lg:h-[70vw] text-green-500 opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      <Blob className="w-[120vw] h-[120vw] sm:w-[100vw] sm:h-[100vw] md:w-[80vw] md:h-[80vw] lg:w-[60vw] lg:h-[60vw] text-purple-500 opacity-20 top-1/4 right-1/4" />
      <Blob className="w-[110vw] h-[110vw] sm:w-[90vw] sm:h-[90vw] md:w-[70vw] md:h-[70vw] lg:w-[50vw] lg:h-[50vw] text-yellow-500 opacity-20 bottom-1/4 left-1/4" />
      <Blob className="w-[125vw] h-[125vw] sm:w-[105vw] sm:h-[105vw] md:w-[85vw] md:h-[85vw] lg:w-[65vw] lg:h-[65vw] text-pink-500 opacity-20 top-1/3 left-1/3" />
      <Blob className="w-[115vw] h-[115vw] sm:w-[95vw] sm:h-[95vw] md:w-[75vw] md:h-[75vw] lg:w-[55vw] lg:h-[55vw] text-indigo-500 opacity-20 bottom-1/3 right-1/3" />
      <Blob className="w-[105vw] h-[105vw] sm:w-[85vw] sm:h-[85vw] md:w-[65vw] md:h-[65vw] lg:w-[45vw] lg:h-[45vw] text-orange-500 opacity-20 top-2/3 left-2/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#0052A3]">
          About Me
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/about/portrait.jpg"
              alt="Nailah's portrait"
              width={500}
              height={500}
              className="rounded-full mx-auto w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] object-cover"
              style={{ objectPosition: '40% center' }}
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="px-4 sm:px-0"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#0052A3]">Hi, I'm Nailah!</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 text-justify">
              I'm Nailah (or Naepop for fun)! I'm a <strong>multidisciplinary designer</strong> passionate about crafting intuitive, user-friendly designs. With expertise in <strong>UI/UX design</strong>, <strong>graphic design</strong>, and <strong>video editing</strong>, I've delivered <strong>40+ high-quality assets</strong> and contributed to <strong>15+ branding projects</strong>, blending creativity with functionality.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
              In my role as a <strong>Product Designer at IUL Technologies</strong>, I designed user-centric solutions, including a prototype for an <strong>AI-powered "second brain" platform</strong> that helps individuals and corporate teams manage digital information more intuitively. During my internship at <strong>PT Indokrisna Teknologi</strong>, I developed <strong>10+ visual templates</strong>, created <strong>40+ assets</strong>, designed <strong>20 website pages</strong>, and organized video shoots for professional branding.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
              As the founder of <strong>Sunshine Tonic</strong>, I've led successful collaborations, participated in art markets, crafted <strong>550+ wedding souvenirs</strong>, and hosted creative workshops, like the bookmark DIY event in partnership with a local community. I also grew <strong>BookClan's TikTok to 15K followers</strong>, where we create relatable Gen Z humor content to promote reading and the community itself.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#0052A3]">What I Do Best</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.slice(0, 2).map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden transition-all duration-300 group ${skill.hoverBg}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`mr-4 ${skill.color} group-hover:text-white`}>
                        {skill.icon}
                      </div>
                      <h4 className={`font-semibold text-lg ${skill.color} group-hover:text-white`}>{skill.name}</h4>
                    </div>
                    <p className="text-gray-700 mb-4 group-hover:text-white">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className={`${skill.color.replace('text-', 'bg-').replace('500', '100')} ${skill.color.replace('500', '700')} text-xs font-medium px-2.5 py-0.5 rounded group-hover:bg-white group-hover:text-current`}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {skills.slice(2).map((skill, index) => (
              <motion.div
                key={index + 2}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              >
                <Card className={`overflow-hidden transition-all duration-300 group ${skill.hoverBg}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`mr-4 ${skill.color} group-hover:text-white`}>
                        {skill.icon}
                      </div>
                      <h4 className={`font-semibold text-lg ${skill.color} group-hover:text-white`}>{skill.name}</h4>
                    </div>
                    <p className="text-gray-700 mb-4 group-hover:text-white">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className={`${skill.color.replace('text-', 'bg-').replace('500', '100')} ${skill.color.replace('500', '700')} text-xs font-medium px-2.5 py-0.5 rounded group-hover:bg-white group-hover:text-current`}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div ref={timelineRef} className="relative">
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#0052A3]">Highlights from My Journey</h3>
          <div className="relative w-full overflow-hidden px-4 md:px-12">
            <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full" width="200" height="100%" viewBox="0 0 200 1300" preserveAspectRatio="none">
              <motion.path
                d="M100,0 C50,162.5 150,325 100,487.5 C50,650 150,812.5 100,975 C50,1137.5 150,1300 100,1300"
                fill="none"
                stroke="#0052A3"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                style={{ pathLength: pathLength }}
              />
            </svg>
            <div className="relative z-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`mb-16 ${index === experiences.length - 1 ? 'mb-32' : ''} flex ${index % 2 === 0 ? 'justify-end pr-16 md:pr-32' : 'justify-start pl-16 md:pl-32'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className={`${exp.color} text-white rounded-3xl p-6 shadow-lg max-w-md relative transition-all duration-300 hover:scale-105`}
                    whileHover={{ boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h5 className="text-xl font-bold mb-2">{exp.year} | {exp.title}</h5>
                    <h6 className="text-lg font-semibold mb-2">{exp.company}</h6>
                    <p className="text-base">{exp.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#0052A3]">What Inspires Me</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden transition-all duration-300 group ${hobby.hoverBg}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={hobby.image}
                      alt={`${hobby.name} hobby`}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        objectPosition: hobby.name === 'Running' ? 'center 60%' : 
                                      hobby.name === 'Café Hopping' ? 'center 55%' :
                                      'center' 
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                  <CardContent className="p-4 flex flex-col items-center text-center relative z-10">
                    <div className={`mb-2 ${hobby.color} group-hover:text-white`}>
                      <hobby.icon className="w-12 h-12" />
                    </div>
                    <h4 className={`font-bold text-lg mb-1 ${hobby.color} group-hover:text-white`}>{hobby.name}</h4>
                    <p className="text-sm text-gray-700 group-hover:text-white">{hobby.caption}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

