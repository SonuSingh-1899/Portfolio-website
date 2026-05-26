import React from "react";
import { motion } from "framer-motion";
import video from "../../assets/Animation.mp4";

const wordVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const Word = ({ children }) => (
  <div className="overflow-hidden">
    <motion.h1
      variants={wordVariant}
      className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl hover-text cursor-none"
    >
      {children}
    </motion.h1>
  </div>
);

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center text-white relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="relative z-20 pt-20 md:pt-28 px-4 w-full max-w-7xl mx-auto"
      >
        {/* Line 1 */}
        <div className="flex flex-wrap items-baseline gap-x-4 md:gap-x-6">
          <div className="overflow-hidden">
            <motion.span
              variants={wordVariant}
              className="text-2xl sm:text-3xl md:text-4xl cursor-none font-light italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              I'm a
            </motion.span>
          </div>

          <Word>FULL-STACK</Word>
        </div>

        {/* Line 2 */}
        <div className="flex justify-end overflow-hidden">
          <Word>DEVELOPER &</Word>
        </div>

        {/* Line 3 */}
        <div className="flex justify-start overflow-hidden">
          <Word>SOFTWARE</Word>
        </div>

        {/* Line 4 */}
        <div className="flex justify-end overflow-hidden">
          <Word>ENGINEER</Word>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;