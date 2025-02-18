'use client'
import { GithubIcon } from '@/components/ui/githubSmall'
import { LinkIcon } from '@/components/ui/link'
import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import Link from 'next/link'
import { type Project } from '@/lib/data'

interface CreationProps {
    project: Project;
}

const Creation = ({ project }: CreationProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className='flex flex-col gap-5 items-start font-serif p-4 border-[1px] 
        border-gray-800 rounded-sm w-full bg-gray-100 z-[2]'>
            <div className='flex text-sm sm:text-md items-center justify-between font-semibold min-w-full'>
                <div className='flex-1 break-words max-w-[75%]'>
                    {project.title}
                </div>

                <motion.div
                    onClick={handleClick}
                    className='px-2 py-1 rounded-md hover:bg-gray-200 
                    cursor-pointer transition-colors duration-200 border-[1px] border-gray-800 w-8 text-center'
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.2 }}
                >
                    {isClicked ? '-' : '+'}
                </motion.div>
            </div>
            <AnimatePresence>
                {isClicked && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='text-xs sm:text-sm overflow-hidden flex flex-col gap-4'
                    >
                        <div>
                            {project.description}
                        </div>
                        <div className='flex flex-wrap gap-1.5'>
                            {project.tools.map((tool) => (
                                <motion.span
                                    key={tool}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className='px-1.5 py-0.5 bg-gray-200 rounded-md text-[8px] sm:text-[10px] font-mono'
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>
                        <motion.div
                            className='flex gap-1 items-center justify-end'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {project.githubUrl && (
                                <Link href={project.githubUrl} target="_blank" className="hover:text-gray-600 transition-colors">
                                    <GithubIcon />
                                </Link>
                            )}
                            {project.liveUrl && (
                                <Link href={project.liveUrl} target="_blank" className="hover:text-gray-600 transition-colors">
                                    <LinkIcon className="w-4 h-4" />
                                </Link>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Creation