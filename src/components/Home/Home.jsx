import React from 'react';
import { motion } from 'framer-motion';
import video from '../../assets/Animation.mp4';

const wordVariant = {
  hidden: { y: 80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const Word = ({ children }) => (
  <motion.h1
    variants={wordVariant}
    className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl hover-text cursor-none"
  >
    {children}
  </motion.h1>
);

const Home = () => (
  <div className="h-screen flex justify-center items-center text-white relative">

    {/* Background video */}
    <video
      autoPlay loop muted playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src={video} type="video/mp4" />
    </video>

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40 z-10" />

    {/* Text block */}
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      className="relative z-20 pt-20 md:pt-28 px-4 w-full max-w-7xl mx-auto"
    >

    {/* Line 1: I'm a  FULL-STACK */}
    <div className="flex flex-wrap items-baseline justify-center md:justify-start gap-x-4 md:gap-x-6">
      
      <motion.span
        variants={wordVariant}
        className="text-2xl sm:text-3xl md:text-4xl cursor-none font-light italic"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        I'm a
      </motion.span>

      <Word>FULL-STACK</Word>
    </div>

      {/* Line 2: DEVELOPER & */}
      <div className="flex flex-wrap items-baseline  font-light justify-end">
        <Word>DEVELOPER &</Word>
      </div>

      {/* Line 3: SOFTWARE */}
      <div className="flex flex-wrap items-baseline justify-start">
        <Word>SOFTWARE</Word>
      </div>

      {/* Line 4: ENGINEER */}
      <div className="flex flex-wrap items-baseline justify-end">
        <Word>ENGINEER</Word>
      </div>

    </motion.div>
  </div>
);

export default Home;