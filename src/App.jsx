import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav     from "./components/Nav";
import Home    from "./components/Home/Home";
import Home3   from "./components/Home/Home3";
import About   from "./components/About/About";
import Work    from "./components/work/work";   
import Contact from "./components/contact/contact";
import Intro   from "./Intro";
import useCursor from "./hooks/useCursor";
import ScrollToTop from "./hooks/ScrollToTop";
import Home4 from "./components/Home/Home4";
import Home5 from "./components/Home/Home5";
import Home6 from "./components/Home/Home6";
import Home7 from "./components/Home/Home7";

// Landing page — sab sections ek saath
const HomePage = ({ isHoveringRef }) => (
  <>
    <Home isHoveringRef={isHoveringRef} />
    <Home3 />
    <Home4 />
    <Home5 />
    {/* <Home6 /> */}
    <Home7 />
    
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
        <ScrollToTop />
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