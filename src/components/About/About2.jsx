import React from 'react'
import { motion } from 'framer-motion'
import SlideButton from '../../hooks/Button'
import resume from '../../assets/Sonu_Singh_Resume.pdf'
import img from '../../assets/laptop4.jpeg'
import mobileImg from '../../assets/laptop2.jpg'

const About2 = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 pt-0 py-16 sm:py-24">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto w-full"
      >
        <h1 className="italic font-heading text-5xl sm:text-4xl text-center mb-4">
          The Resume
        </h1>

        <p className="text-center text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed md:leading-loose text-gray-300 font-light px-2">
          I have been working for the past
          <span className="text-white font-bold mx-1">1+ years</span>
          with
          <span className="text-white font-bold mx-1">Java.</span>
          I've been writing and debugging code and connecting RESTful APIs using
          <span className="text-white font-bold mx-1">Springboot, React and PostgreSQL</span>
          for a couple of months, and currently I am working on a production ready web app.
        </p>

        <div className="flex flex-col mt-4 sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full">
          <SlideButton href={resume} label="Go to resume →" />
        </div>
      </motion.div>

      {/* IMAGE SECTION */}
      <motion.div
        className="relative mx-auto flex justify-center w-full overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/*Mobile Image */}
        <motion.img
          src={mobileImg}
          alt="mobile laptop"
          className="block sm:hidden mt-6 w-full h-75 object-cover rounded-xl shadow-lg"
          initial={{ scale: 1.3 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/*Desktop Image */}
        <motion.img
          src={img}
          alt="laptop"
          className="hidden sm:block mt-6 w-full max-w-full rounded-xl shadow-lg object-cover"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* ✅ Black Slide Overlay (same for both) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-black z-10"
          initial={{ y: 0 }}
          whileInView={{ y: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.77, 0, 0.18, 1],
          }}
        />

      </motion.div>
    </div>
  )
}

export default About2