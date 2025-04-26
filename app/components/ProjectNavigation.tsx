'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'

type Category = 'all' | 'ui' | 'graphic' | 'video' | 'sunshine' | 'architectural'

const categories: { key: Category; label: string; color: string }[] = [
  { key: 'all', label: 'All', color: 'bg-[#0052A3]' },
  { key: 'ui', label: 'UI/UX Design', color: 'bg-blue-500' },
  { key: 'graphic', label: 'Graphic Design', color: 'bg-red-500' },
  { key: 'video', label: 'Video Editing', color: 'bg-green-500' },
  { key: 'sunshine', label: 'Sunshine Tonic', color: 'bg-orange-500' },
  { key: 'architectural', label: 'Architectural Design', color: 'bg-purple-500' },
]

export default function ProjectNavigation() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const category = searchParams.get('category') as Category || 'all'

  const handleCategoryChange = (newCategory: Category) => {
    const params = new URLSearchParams(searchParams)
    params.set('category', newCategory)
    router.push(`/projects?${params.toString()}`, { scroll: false })
  }

  return (
    <motion.div 
      className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md py-4 shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {categories.map(({ key, label, color }, index) => (
            <motion.button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`m-2 px-4 py-2 rounded-full text-[#0052A3] border-2 border-[#0052A3] ${
                category === key ? color + ' text-white' : 'bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

