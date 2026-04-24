import React from 'react'
import {motion} from 'framer-motion'
import SlideButton from '../../hooks/Button'
import resume from '../../assets/Sonu_Singh_Resume.pdf'
import img from '../../assets/laptop.jpg'

const About2 = () => {
  return (
    <div className="min-h-screen bg-black text-white  items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto w-full"
    >
      {/* Title */}
      <h1 className="italic font-[Playfair_Display] text-5xl sm:text-4xl text-center mb-4">
        the Resume
      </h1>

      {/* Bio text */}
      <p className="text-center text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed md:leading-loose text-gray-300 font-light px-2">
        I have been working for the past
        <span className="text-white font-bold mx-1">1+ years</span>
        with
        <span className="text-white font-bold mx-1">Java.</span>
        I've been writing and debugging code and connecting RESTful APIs using
        <span className="text-white font-bold mx-1">Springboot, React and PostgreSQL</span>
        for a couple of months, and currently I am working on a production ready web app.
      </p>

      <div className="flex flex-col mt-4 sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <SlideButton href={resume} label="Go to resume →"/>
      </div>
    </motion.div>
    <motion.div
      className="relative mx-auto flex justify-center w-full overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Image */}
      <motion.img
        src={img}
        alt="laptop"
        className="mt-6 rounded-xl shadow-lg relative z-0"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Black Slide Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black z-10"
        initial={{ y: 0 }}
        whileInView={{ y: "100%" }}
        transition={{
          duration: 1,
          ease: [0.77, 0, 0.18, 1], // smooth cinematic
        }}
      />
    </motion.div>
  </div>
  )
}

export default About2