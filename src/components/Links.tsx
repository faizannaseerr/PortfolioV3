import React from 'react'
import { LinkedinIcon } from '@/components/ui/linkedin'
import { GithubIcon } from '@/components/ui/github'
import { AtSignIcon } from '@/components/ui/at-sign'
import { AttachFileIcon } from '@/components/ui/attach-file'

const Links = () => {
    return (
        <div className='flex items-center justify-start'>
            <div className='flex items-center'>
                <a href="/CV.pdf" target='_blank'><AttachFileIcon /></a>
                <a href="https://www.github.com/faizannaseerr" target='_blank'><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/faizan-naseerr" target='_blank'><LinkedinIcon /></a>
                <a href="mailto:f.naseer@mail.utoronto.ca" target='_blank'><AtSignIcon /></a>

            </div>

        </div>

    )
}

export default Links