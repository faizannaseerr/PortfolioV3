'use client'
import React, { useState } from 'react'
import { ArrowRightIcon } from "@/components/ui/arrow-right"
import { motion } from "motion/react"

const Intro = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className="flex flex-col" >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-6xl font-serif"
                >
                    My name is Faizan.
                </motion.div>
                {/* <div className="bg-gray-900 h-[0.5px] mt-8"></div> */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl mt-12 font-serif max-w-3xl"
                >
                    I'm a software engineer and a UofT graduate, specializing in building valuable products that help people.
                </motion.div>
                <div className="flex text-2xl mt-8 font-serif max-w-3xl gap-2">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Here are some of my
                    </motion.div>
                    <motion.div
                        className="text-[#13315c] cursor-pointer font-semibold flex group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        creations
                        <ArrowRightIcon
                            className='rotate-90 cursor-pointer items-end'
                            groupHovered={isHovered}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Intro