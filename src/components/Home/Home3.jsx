import React from 'react'
import { motion } from 'framer-motion'
import SlideButton from '../../hooks/Button'
import { useNavigate } from 'react-router-dom'

const Home3 = () => {

  const navigate = useNavigate()
  return (

  <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto w-full"
      >
      {/* Bio text */}
      <p className="text-center text-xl flex-wrap sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed md:leading-loose text-gray-300 font-light px-2">
        I have been working for the past
        <span className="text-white font-bold mx-1">1+ years</span>
        with
        <span className="text-white font-bold mx-1">Javascript/java</span>.
        I've been writing and debugging code and connecting RESTful APIs using
        <span className="text-white font-bold mx-1">Springboot, React and postgresql</span>
        for a couple of months. and currently i am working on a production redy web app.
      </p>

      {/* Divider */}
      <div className="flex justify-center my-10 sm:my-12">
        <div className="w-40 h-px bg-white" />
      </div>

      {/* Buttons — stack on mobile, row on sm+ */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <SlideButton label="Know more →" onClick={() => navigate("/about")} />
        <SlideButton label="Contact →" onClick={() => navigate("/contact")} />
      </div>
    </motion.div>
  </div>
 )
};

export default Home3;