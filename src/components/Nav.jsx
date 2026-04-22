import React, { useEffect, useRef } from 'react'

const Nav = ({ isHoveringRef }) => {
  const linkRefs = useRef([]);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    const handlers = [];

    linkRefs.current.forEach((el) => {
      if (!el) return;

      const handleMouseEnter = () => {
        const rect = el.getBoundingClientRect();

        isHoveringRef.current = true;

        cursor.classList.add("active");
        cursor.style.width = rect.width + "px";
        cursor.style.height = rect.height + "px";
        cursor.style.transition = "width 0.2s ease, height 0.2s ease, top 0.2s ease, left 0.2s ease";
        cursor.style.top = rect.top + rect.height / 2 + "px";
        cursor.style.left = rect.left + rect.width / 2 + "px";
      };

      const handleMouseLeave = () => {
        isHoveringRef.current = false;

        cursor.classList.remove("active");
        cursor.style.transition = "";
        cursor.style.width = "30px";
        cursor.style.height = "30px";
      };

      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
      handlers.push({ el, handleMouseEnter, handleMouseLeave });
    });

    return () => {
      handlers.forEach(({ el, handleMouseEnter, handleMouseLeave }) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isHoveringRef]);

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

  return (
    <div className='bg-transparent flex text-white justify-between items-center relative z-50 px-8'>
      <span className='text-6xl cursor-pointer py-4'>Sonu Singh</span>

      <div className='flex gap-16 py-6 px-3 text-2xl items-center'>
        <AnimatedLink text="Work" index={0} />
        <AnimatedLink text="About" index={1} />
        <AnimatedLink text="Contact" index={2} />
        <h2 className="text-gray-500 text-3xl">|</h2>
        <AnimatedLink text="Blog" index={3} />
      </div>
    </div>
  )
}

export default Nav