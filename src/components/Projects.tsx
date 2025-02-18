import React from 'react'
import Creation from '@/components/Creation'
import { projects } from '@/lib/data'

const Projects = () => {
    return (
        <div className='grid grid-cols-2 gap-2 mt-4 justify-start'>
            {projects.map((project) => (
                <Creation key={project.title} project={project} />
            ))}
        </div>
    )
}

export default Projects