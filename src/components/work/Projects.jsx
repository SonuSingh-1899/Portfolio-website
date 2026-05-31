import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import omnexaBanner from "../../assets/projectbannerimages/foromnexa.jpg";
import limestreetBanner from "../../assets/projectbannerimages/limestreet.jpg";
import hrManagementBanner from "../../assets/projectbannerimages/hrmanagement.jpg";

const Projects = () => {
  const navigate = useNavigate();

  const revealAnimation = {
    hidden: { y: "110%" },
    visible: { 
      y: 0,
      transition: {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const buttons = [
    {
      id: 1,
      label: "Omnexa Chat",
      path: "/omnexa",
      image: omnexaBanner,
      position: "top-[12%] md:left-[2%] left-[5%]",
    },
    {
      id: 2,
      label: "Limestreet",
      path: "/hrms",
      image: limestreetBanner,
      position: "top-1/2 -translate-y-1/3 md:left-[58%] left-[5%]",
    },
    {
      id: 3,
      label: "HR Management",
      path: "/portfolio",
      image: hrManagementBanner,
      position: "md:bottom-[4%] bottom-[8%] md:left-[4%] left-[2%]",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {buttons.map((button) => (
        <div
          key={button.id}
          className={`absolute ${button.position} overflow-hidden whitespace-nowrap`}
        >
          <button
            onClick={() => navigate(button.path)}
            className="group relative grid min-h-37.5 min-w-[320px] place-items-center overflow-hidden rounded-4xl border-none bg-transparent px-10 py-10 text-white text-[2.5rem] sm:min-w-105 sm:text-[3rem] md:min-h-60 md:min-w-170 md:px-16 md:py-14 md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-black leading-tight tracking-[-0.03em] cursor-pointer z-10"
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.12), 0 0 25px rgba(255,255,255,0.08)",
            }}
          >
            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <span
                className="absolute left-0 top-0 h-full w-1/2 origin-right scale-x-0 overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                style={{
                  backgroundImage: `url(${button.image})`,
                  backgroundPosition: "left center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "200% auto",
                }}
                aria-hidden="true"
              />
              <span
                className="absolute right-0 top-0 h-full w-1/2 origin-left scale-x-0 overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                style={{
                  backgroundImage: `url(${button.image})`,
                  backgroundPosition: "right center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "200% auto",
                }}
                aria-hidden="true"
              />
              <span className="absolute inset-0 bg-black/35" />
            </span>
            <span className="relative z-10 block overflow-hidden pb-2">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={revealAnimation}
                className="block"
              >
                {button.label}
              </motion.span>
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
