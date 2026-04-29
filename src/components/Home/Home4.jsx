import React from 'react'
import { motion } from 'framer-motion'
import img from '../../assets/laptop.jpg'

const wordVariant = {
  hidden: { y: 80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const Home4 = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* MOBILE BG IMAGE — visible only on small screens */}
      <div className="md:hidden absolute inset-0 z-0">
        <motion.img
          src={img}
          alt="preview"
          className="w-full h-full object-cover -translate-y-20"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* TEXT */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full h-screen z-20"
      >

        {/* WHERE */}
        <motion.h1
          variants={wordVariant}
          className="absolute top-[7%] left-[5%] text-[6vw] md:text-[3vw] font-serif italic text-white/80"
        >
          where
        </motion.h1>

        {/* EXPERTISE */}
        <motion.h1
          variants={wordVariant}
          className="absolute top-[14%] left-[5%] md:top-[20%] md:left-[15%] text-[14vw] md:text-[10vw] hover-text font-sans leading-none"
        >
          EXPERTISE
        </motion.h1>

        <motion.h1
          variants={wordVariant}
          className="absolute top-[26%] lg:top-[50%] left-[5%] text-[12vw] md:text-[8vw] hover-text font-sans leading-none"
        >
          MEETS
        </motion.h1>

        {/* INNOVATION */}
        <motion.h1
          variants={wordVariant}
          className="absolute top-[38%] md:top-auto left-[5%] md:bottom-[9%] md:left-[25%] text-[12vw] md:text-[10vw] hover-text font-sans leading-none"
        >
          INNOVATION
        </motion.h1>

      </motion.div>

      {/* DESKTOP RIGHT IMAGE — hidden on mobile */}
      <div className="hidden md:block absolute right-0 top-0 w-[50%] h-full overflow-hidden z-10">
        <motion.img
          src={img}
          alt="preview"
          className="w-full h-full object-cover object-top"
          initial={{ scale: 1.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{once: true, margin: "-20%"  }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
      </div>

    </div>
  )
}

export default Home4