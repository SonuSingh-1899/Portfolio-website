import React, { useRef, useState } from 'react';

const Nav = ({ isHoveringRef }) => {
  const linkRefs = useRef([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const AnimatedLink = ({ text, index }) => (
    <div
      ref={el => linkRefs.current[index] = el}
      className="relative overflow-hidden cursor-pointer group px-1 py-1 animated-link-wrapper hover-text"
    >
      <span className="inline-block transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
        {text}
      </span>
      <span className="absolute top-0 left-0 inline-block transition-all duration-300 ease-out translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-white/70 group-hover:text-white/85">
        {text}
      </span>
    </div>
  );

  const MobileMenu = () => (
    <div className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-2xl`}>
      <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl text-white hover:text-gray-300 transition-colors"
        >
          ✕
        </button>
        <AnimatedLink text="Work" index={0} />
        <AnimatedLink text="About" index={1} />
        <AnimatedLink text="Contact" index={2} />
        <AnimatedLink text="Blog" index={3} />
      </div>
    </div>
  );

  return (
    <>
      <div className='absolute top-0 left-0 w-full flex text-white justify-between items-center z-50 px-4 sm:px-8'>
        <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer py-4'>
          Sonu Singh
        </span>

        <div className='hidden md:flex gap-6 lg:gap-16 py-6 px-3 text-xl lg:text-2xl items-center'>
          <AnimatedLink text="Work" index={0} />
          <AnimatedLink text="About" index={1} />
          <AnimatedLink text="Contact" index={2} />
          <h2 className="text-gray-500 text-3xl">|</h2>
          <AnimatedLink text="Blog" index={3} />
        </div>

        <div className='md:hidden'>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className='text-3xl sm:text-4xl text-white hover:text-gray-300 transition-colors focus:outline-none'
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>
      <MobileMenu />
    </>
  );
};

export default Nav;