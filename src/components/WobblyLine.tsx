'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'

const WobblyLine = () => {
    const path = useRef<SVGPathElement>(null);
    let progress: number = 0;
    let x: number = 0.5;
    let time: number = Math.PI / 2;
    let reqId: number | null = null;

    useEffect(() => {
        if (path.current) {
            setPath(progress);
        }

        const handleResize = () => {
            setPath(progress);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (reqId) {
                cancelAnimationFrame(reqId);
            }
        };
    }, [])

    const setPath = (progress: number) => {
        if (!path.current) return;
        const width = window.innerWidth * 0.75;
        path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
    }

    const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

    const manageMouseEnter = () => {
        if (reqId) {
            cancelAnimationFrame(reqId)
            resetAnimation()
        }
    }

    const manageMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!path.current) return;

        let clientX: number;
        let movementY: number;

        if ('touches' in e) {
            // Touch event
            const touch = e.touches[0];
            clientX = touch.clientX;

            // Calculate movement for touch events using stored previous position
            const prevTouch = (e as any).prevTouch || touch;
            movementY = touch.clientY - prevTouch.clientY;
            (e as any).prevTouch = touch;
        } else {
            // Mouse event
            clientX = e.clientX;
            movementY = (e as React.MouseEvent).movementY;
        }

        const pathBound = path.current.getBoundingClientRect();
        x = (clientX - pathBound.left) / pathBound.width;
        progress += movementY;
        setPath(progress);
    }

    const manageMouseLeave = () => {
        animateOut();
    }

    const animateOut = () => {
        const newProgress = progress * Math.sin(time);
        progress = lerp(progress, 0, 0.025);
        time += 0.2;
        setPath(newProgress);
        if (Math.abs(progress) > 0.75) {
            reqId = requestAnimationFrame(animateOut);
        }
        else {
            resetAnimation();
        }
    }

    const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
    }


    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className='my-8 h-2 w-[75vw] relative'>
            <div onMouseEnter={() => { manageMouseEnter() }}
                onMouseMove={(e) => { manageMouseMove(e) }}
                onMouseLeave={() => { manageMouseLeave() }}
                onTouchStart={() => { manageMouseEnter() }}
                onTouchMove={(e) => { manageMouseMove(e) }}
                onTouchEnd={() => { manageMouseLeave() }}
                className='relative h-[40px] w-full top-[-20px]
                 hover:h-[500px] hover:top-[-250px] z-[1]'></div>
            <svg className='w-full h-[500px] absolute top-[-250px]'>
                <path className='stroke-[1px] stroke-gray-800 fill-none' ref={path}></path>
            </svg>
        </motion.div>
    )
}

export default WobblyLine