import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav     from "./components/Nav";
import Home    from "./components/Home";
import Home3   from "./components/Home3";
import About   from "./components/About/About";
import Work    from "./components/work/work";   
import Contact from "./components/contact/contact";
import Intro   from "./Intro";
import useCursor from "./hooks/useCursor";

// Landing page — sab sections ek saath
const HomePage = ({ isHoveringRef }) => (
  <>
    <Home isHoveringRef={isHoveringRef} />
    <Home3 />
  </>
);

function AppContent() {
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
          <Routes>
            <Route path="/"        element={<HomePage isHoveringRef={isHoveringRef} />} />
            <Route path="/work"    element={<Work />} />
            <Route path="/about"   element={<About isHoveringRef={isHoveringRef} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </motion.div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;