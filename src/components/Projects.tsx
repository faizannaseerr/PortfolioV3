'use client'

import React from 'react'
import Creation from '@/components/Creation'
import { projects } from '@/lib/data'
import { motion } from "motion/react"

const Projects = () => {
    // Calculate the midpoint to split projects array
    const midPoint = Math.ceil(projects.length / 2)
    const firstHalf = projects.slice(0, midPoint)
    const secondHalf = projects.slice(midPoint)

    return (
        <motion.div
            className='flex flex-col md:flex-row gap-4 mt-4 min-w-2xl max-w-2xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
        >
            <div className='flex gap-4 flex-col w-full'>
                {firstHalf.map((project) => (
                    <Creation key={project.title} project={project} />
                ))}
            </div>
            <div className='flex gap-4 flex-col w-full'>
                {secondHalf.map((project) => (
                    <Creation key={project.title} project={project} />
                ))}
            </div>
        </motion.div>
    )
}

export default Projects