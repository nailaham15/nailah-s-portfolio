'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  tools: string[];
  overview?: string;
  process?: string[];
  features?: string[];
  visualIdentity?: string;
  screens?: string[];
  captions?: string[];
}

interface ClientSideGraphicDesignGridProps {
  projects: Project[]
  selectedProject: Project | null
  onProjectClick: (project: Project) => void
  onClose: () => void
}

export default function ClientSideGraphicDesignGrid({
  projects,
  selectedProject,
  onProjectClick,
  onClose
}: ClientSideGraphicDesignGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="relative overflow-hidden rounded-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => onProjectClick(project)}
        >
          <div className="relative aspect-square">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
            <motion.div
              className="absolute inset-0 bg-red-500 bg-opacity-75 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="text-white text-center p-4">
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-sm">{project.description}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

