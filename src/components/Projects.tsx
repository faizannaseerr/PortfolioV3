import React from 'react'
import Creation from '@/components/Creation'
import { projects } from '@/lib/data'

const Projects = () => {
    // Calculate the midpoint to split projects array
    const midPoint = Math.ceil(projects.length / 2)
    const firstHalf = projects.slice(0, midPoint)
    const secondHalf = projects.slice(midPoint)

    return (
        <div className='flex flex-row gap-4 mt-4 min-w-2xl max-w-2xl'>
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
        </div>
    )
}

export default Projects