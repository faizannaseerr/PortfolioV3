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
                    className="text-4xl sm:text-6xl font-serif"
                >
                    My name is Faizan.
                </motion.div>
                {/* <div className="bg-gray-900 h-[0.5px] mt-8"></div> */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl mt-12 font-serif max-w-3xl"
                >
                    I'm a software engineer and a UofT graduate, specializing in building valuable products that help people.
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-xl mt-8 font-serif max-w-3xl"
                >
                    Here are some of my {" "}
                    <span
                        className="text-[#13315c] cursor-pointer font-semibold inline-flex items-center gap-1"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        creations
                        <ArrowRightIcon
                            className='rotate-90 cursor-pointer'
                            groupHovered={isHovered}
                        />
                    </span>
                </motion.div>
            </div>
        </div>
    )
}

export default Intro