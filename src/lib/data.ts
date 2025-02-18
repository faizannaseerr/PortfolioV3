import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export interface Project {
    title: string;
    description: string;
    tools: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export const projects: Project[] = [
    {
        title: "Inspply",
        description: "A job application assistant that provides users with resume-tailored, company-centric road maps from application to job offer, as well as aims to automate the monotonous application process with AI agents.",
        tools: ["Next", "Supabase", "Clerk", "Tailwind", "Exa", "LangChain", "Browser Use"],
        githubUrl: "https://github.com/faizannaseerr/InspplyV2"
    },

    {
        title: "Content Management System",
        description: "Developed a content management system that utilizes authorization and allows users to create, edit and delete content.",
        tools: ["React", "Tailwind", "JWT", "Node", "Express", "MongoDB", "AWS EC2"],
        liveUrl: "https://cmsfend.vercel.app/",
        githubUrl: "https://github.com/faizannaseerr/CMS"
    },
    {
        title: "Degree Design",
        description: "An app that allows students to generate a degree timetable based on prerequisites of their desirable courses, as well as allows admins to edit, delete, and add courses.",
        tools: ["Android Studio", "Java", "Git", "Firebase", "Jira"],
        githubUrl: "https://github.com/faizannaseerr/TimelineGenerator"
    },
    {
        title: "Animal Classifier",
        description: "A program that implements a neural network to recognize images of cats and dogs and classify them.",
        tools: ["Python", "Numpy", "Scikit-Learn"],
        githubUrl: "https://github.com/faizannaseerr/AnimalClassifer/"
    },
    {
        title: "Android Assist",
        description: "An application designed to assist immigrants and the elderly in maximizing the utility & comfortability of their mobile devices, through providing accessibility enhancements.",
        tools: ["Kotlin", "Android Studio"],
        githubUrl: "https://github.com/faizannaseerr/AndroidAssist"
    },
    {
        title: "Audio Intellect",
        description: "An artificially intelligent web app that allows users to record or upload recordings of meetings & lectures, and then receive summaries based on the recordings and user requirements.",
        tools: ["Whisper-API", "GPT4", "React", "Tailwind", "HTML", "Express", "Node", "MongoDB", "AWS S3"],
        liveUrl: "https://au-in.vercel.app",
        githubUrl: "https://github.com/faizannaseerr/AudioIntellect"
        // could add YouTube here too/loom
    },
    {
        title: "Pixel Peril",
        description: "Developed a dynamic 2D game using MIPS assembly language, through pixel mapping and connecting to a MARS bitmap display.",
        tools: ["MIPS Assembly", "MARS Bitmap Display"],
        githubUrl: "https://github.com/faizannaseerr/ProjectB58"
        // could add YouTube here too/loom
    },
    {
        title: "Driver Statistics",
        description: "Web scraping program that displays F1 statistics from the internet on the current season based on user input, e.g. standings, DNFs, wins, etc.",
        tools: ["Python", "BeautifulSoup", "Requests"],
        githubUrl: "https://github.com/faizannaseerr/DriverStatistics"
    },
]; 