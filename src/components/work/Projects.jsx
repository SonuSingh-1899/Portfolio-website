import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  const navigate = useNavigate();

  const revealAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 3,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const buttons = [
    { id: 1, label: "Omnexa", path: "/omnexa", position: "top-[10%] left-[8%]" },
    { id: 2, label: "Limestreet", path: "/hrms", position: "top-1/2 -translate-y-1/2 right-[8%]" },
    { id: 3, label: "HR Management", path: "/portfolio", position: "bottom-[10%] left-[8%]" },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {buttons.map((button, index) => (
        <div
          key={button.id}
          className={`absolute ${button.position} overflow-hidden whitespace-nowrap`}
        >
          <motion.button
            initial="hidden"
            animate="visible"
            variants={revealAnimation}
            onClick={() => navigate(button.path)}
            className="block text-white text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-black leading-tight tracking-[-0.03em] cursor-pointer bg-transparent border-none z-10 w-max"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.12), 0 0 25px rgba(255,255,255,0.08)",
            }}
          >
            {button.label}
          </motion.button>
        </div>
      ))}
    </div>
  );
};

export default Projects;