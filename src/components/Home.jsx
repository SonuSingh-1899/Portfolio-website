import React from 'react';
import { motion } from 'framer-motion';
// import video from '../assets/video2.mp4';
// import video from '../assets/Image_to_Zooming_Code_Video.mp4';
import video from '../assets/Animation.mp4';

const wordVariant = {
  hidden: { y: 80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

// gap added between "I'm a" and "FULL-STACK" so they don't clash on mobile
const LINES = [
  { text: ["I'm a", "FULL-STACK"], justify: "justify-center md:justify-start", gap: true },
  { text: ["DEVELOPER &"],         justify: "justify-end" },
  { text: ["SOFTWARE"],            justify: "justify-start" },
  { text: ["ENGINEER"],            justify: "justify-end" },
];

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

    {/* Text block — pt-28 instead of pt-30 (safe Tailwind value) */}
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      className="relative z-20 pt-20 md:pt-28 px-4 w-full max-w-7xl mx-auto"
    >
      {LINES.map((line, i) => (
        <div key={i} className={`flex flex-wrap items-baseline ${line.justify} ${line.gap ? 'gap-x-4 md:gap-x-6' : ''}`}>
          {line.text.map((word) => (
            <motion.h1
              key={word}
              variants={wordVariant}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl hover-text cursor-none"
            >
              {word}
            </motion.h1>
          ))}
        </div>
      ))}
    </motion.div>
  </div>
);

export default Home;