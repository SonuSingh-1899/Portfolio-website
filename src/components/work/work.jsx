import React from 'react'
import { BsArrowDownRight } from "react-icons/bs";
import projects from './../work/Projects'
import SlideButton from './../../hooks/Button'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const work = () => {
    const navigate = useNavigate();

    const headingVariants = {
        hidden: { 
            y: 100, 
            opacity: 0 
        },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 2.5,
                delay: custom * 0.15,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    const paragraphVariants = {
        hidden: { 
            y: 50, 
            opacity: 0 
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2.5,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const buttonVariants = {
        hidden: { 
            scale: 0.9, 
            opacity: 0 
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='w-full mt-20 md:mt-20 gap-x-10 min-h-screen bg-black text-white px-4 md:px-0'>
            {/* Heading Section */}
            <div className='flex flex-col p-4 md:p-10 lg:p-20'>
                {/* PROJECTS heading */}
                <div className='overflow-hidden'>
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={headingVariants}
                        className='text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[160px] justify-start leading-none  font-bold'
                    >
                        PROJECTS
                    </motion.div>
                </div>
                
                {/* Selection subheading */}
                <div className='overflow-hidden mt-2 md:mt-4'>
                    <motion.div
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={headingVariants}
                        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-style justify-start leading-none mt-2 md:mt-4'
                    >
                        Selection
                    </motion.div>
                </div>
            </div>

            {/* Paragraph Section */}
            <div className='flex flex-col lg:flex-row p-4 md:p-10 lg:p-20 gap-8 lg:gap-16 xl:gap-30 justify-between'>
                {/* Button Section - Left side on desktop, top on mobile */}
                <div className='flex w-full lg:w-100 items-start lg:items-end justify-start lg:justify-end order-1 lg:order-0'>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={buttonVariants}
                    >
                        <SlideButton label="projects →" onClick={() => navigate("/projects")} />
                    </motion.div>
                </div>
                
                {/* Paragraph Content */}
                <div className='w-full lg:w-180'>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={paragraphVariants}
                        className='text-sm sm:text-base md:text-lg lg:text-xl text-left leading-relaxed'
                    >
                        Over the past few years, I have focused on building modern full-stack applications 
                        using <span className='text-white font-semibold'>Java, Spring Boot, React, PostgreSQL, and Redis</span>. 
                        My experience includes designing scalable backend architectures, developing secure RESTful APIs, 
                        implementing real-time communication systems, optimizing database performance, and creating 
                        responsive user interfaces. I enjoy solving complex engineering challenges, writing clean and 
                        maintainable code, and transforming ideas into reliable software solutions. Through hands-on 
                        development across multiple projects, I have gained practical expertise in backend systems, 
                        authentication, caching strategies, database design, and modern web technologies. Explore my 
                        work below to see how I combine technical expertise with a passion for building impactful 
                        digital experiences.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default work