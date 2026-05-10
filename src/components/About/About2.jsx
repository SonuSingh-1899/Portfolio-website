import React from 'react'
import { motion } from 'framer-motion'
import SlideButton from '../../hooks/Button'
import resume from '../../assets/Sonu_Singh_Resume.pdf'
import img from '../../assets/laptop4.jpeg'
import mobileImg from '../../assets/laptop2.jpg'

const About2 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Image Desktop */}
      <motion.img
        src={img}
        alt="laptop"
        className="hidden sm:block absolute inset-0 w-full h-full object-cover opacity-100"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Background Image Mobile */}
      <motion.img
        src={mobileImg}
        alt="mobile laptop"
        className="block sm:hidden absolute inset-0 w-full h-full object-cover opacity-100"
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black z-0"
        initial={{ y: 0 }}
        whileInView={{ y: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.77, 0, 0.18, 1],
        }}
      />

      {/* Extra Dark Layer */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-24">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto w-full"
        >

          <h1 className="italic font-heading text-5xl sm:text-6xl text-center mb-6">
            The Resume
          </h1>

          <p className="text-center text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed md:leading-loose text-gray-300 font-light px-2">
            I have been working for the past
            <span className="text-white font-bold mx-1">2+ years</span>
            with
            <span className="text-white font-bold mx-1">Java & javascript.</span>
            I've been writing and debugging code and connecting RESTful APIs using
            <span className="text-white font-bold mx-1">
              Springboot, React and PostgreSQL
            </span>
            for a couple of months, and currently I am working on a production ready web app.
          </p>

          <div className="flex flex-col mt-8 sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full">
            <SlideButton href={resume} label="Go to resume →" />
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default About2