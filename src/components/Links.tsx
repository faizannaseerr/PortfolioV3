'use client'

import React from 'react'
import { LinkedinIcon } from '@/components/ui/linkedin'
import { GithubIcon } from '@/components/ui/github'
import { AtSignIcon } from '@/components/ui/at-sign'
import { AttachFileIcon } from '@/components/ui/attach-file'
import { motion } from "motion/react"

const Links = () => {
    return (
        <motion.div
            className='flex items-center sm:justify-start justify-center mt-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }} // Starts after Projects animation
        >
            <div className='flex items-center'>
                <a href="/CV.pdf" target='_blank'><AttachFileIcon /></a>
                <a href="https://www.github.com/faizannaseerr" target='_blank'><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/faizan-naseerr" target='_blank'><LinkedinIcon /></a>
                <a href="mailto:f.naseer@mail.utoronto.ca" target='_blank'><AtSignIcon /></a>
            </div>
        </motion.div>
    )
}

export default Links