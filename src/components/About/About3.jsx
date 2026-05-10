import React from 'react'
import {motion} from 'framer-motion'
import { tr } from 'framer-motion/client'

const About3 = () => {
  return (
    <div className='max-h-screen bg-black text-white flex flex-col lg:flex-row items-center justify-center px-6 lg:px-30 pt-17 py-16 gap-10'>

      <motion.p
      initial={{opacity: 0,y: 50}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration: 0.8, ease: "easeOut"}}
      viewport={{once: true}}
      className='text-gray-300 lg:text-2xl sm:xl leading-relaxed'>
        I’m a Full Stack Developer currently pursuing my college degree and building projects to improve my practical skills. I mainly work with Java for backend development and React for frontend. I have experience working on freelance projects where I learned how to structure applications, manage APIs, and write clean and understandable code. I focus on building things that work well and are easy to maintain rather than overcomplicating solutions.
      </motion.p>

      <motion.p
        initial={{opacity: 0,y: 50}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration: 0.8, ease: "easeOut"}}
      viewport={{once: true}}
      className='text-gray-300 lg:text-2xl sm:xl leading-relaxed'>
        Right now, I’m working on a chat application where I am practicing API development, authentication, validation, and handling data properly. I’m also learning how to manage API responses on the frontend to create smooth user experiences. Along with this, I regularly practice Data Structures and Algorithms to improve my logic and problem-solving skills. I’m continuously learning and trying to become better with each project I build.
      </motion.p>

    </div>
  )
}

export default About3