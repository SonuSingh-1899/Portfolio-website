import React, { useState } from "react";
import { motion } from "framer-motion";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Home3 from "./components/Home3";
import Intro from "./Intro";
import useCursor from "./hooks/useCursor";
import About from "./components/About/About";
import ComingSoon from "./ComingSoon";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const { isHoveringRef } = useCursor();

  return (
    <motion.div
      className="bg-black overflow-hidden"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {showIntro ? (
        <Intro onComplete={() => setShowIntro(false)} />
      ) : (
        <>
          <Nav isHoveringRef={isHoveringRef} />
          <Home isHoveringRef={isHoveringRef} />
          <Home3 />
          <About isHoveringRef={isHoveringRef} />
          {/* <ComingSoon /> */}
        </>
      )}
    </motion.div>
  );
}

export default App;