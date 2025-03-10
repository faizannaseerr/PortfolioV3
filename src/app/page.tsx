'use client'
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Links from "@/components/Links";
import WobblyLine from "@/components/WobblyLine";
import { motion } from "motion/react";


export default function Home() {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.05 }}
    //   className="sm:py-12 sm:px-12 sm:border-gray-800 sm:rounded-sm sm:border-[1.5px] sm:shadow-lg sm:bg-[#F4F4F4] p-0"
    // >
    <div className="flex flex-col gap-4">
      <Intro />
      <Projects /> {/* TODO: Add experience section here, that changes back and forth between experience and projects */}
      <WobblyLine />
      <Links />
    </div>
    // </motion.div>

  );
}
