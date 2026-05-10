import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Intro = ({ onComplete }) => {

  // Auto-dismiss after 2.5s
  useEffect(() => {
    const timer = setTimeout(onComplete, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Name */}
      <motion.h1
        className="text-white text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-center z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      >
        SONU SINGH
      </motion.h1>

      {/* Underline */}
      <motion.div
        className="absolute bottom-1/3 h-px bg-linear-to-r from-transparent via-white to-transparent"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "60%", opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      />

      {/* Curtain closes over everything */}
      <motion.div
        className="absolute inset-0 bg-black z-20 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
      />
    </motion.div>
  );
};

export default Intro;