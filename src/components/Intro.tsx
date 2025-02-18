'use client'
import React, { useState } from 'react'
import { ArrowRightIcon } from "@/components/ui/arrow-right"

const Intro = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className="flex flex-col" >
                <div className="text-6xl font-serif"> My name is Faizan. </div>
                {/* <div className="bg-gray-900 h-[0.5px] mt-8"></div> */}
                <div className="text-2xl mt-12 font-serif max-w-3xl">
                    I'm a software engineer and a UofT graduate, specializing in building valuable products that help people.
                </div>
                <div className="flex text-2xl mt-8 font-serif max-w-3xl gap-2">
                    Here are some of my
                    <div
                        className="text-[#13315c] cursor-pointer font-semibold flex group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        creations
                        <ArrowRightIcon
                            className='rotate-90 cursor-pointer items-end'
                            groupHovered={isHovered}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;