import React, { useState, useEffect, useRef } from "react";
import contactimg from "../../assets/contactimage.jpg";
import github from "../../assets/github.svg";
import x from "../../assets/twitter-original.svg";
import whatsapp from "../../assets/whatsapp.svg";
import insta from "../../assets/instagram.svg";
import { motion, AnimatePresence } from "framer-motion";

// Line animation settings
const ICON_R   = 160;   // reference radius (icon offset ke liye base)
const LINE_R   = 200;   // line kitni door jaaye center se
const LINE_DUR = 700;   // line animation duration (ms)
const STAGGER  = 180;   // har line ke beech delay (ms)

// Circle & Image — Desktop (lg)
const CIRCLE_R_LG   = 250;   // profile circle ka radius (SVG units)
const IMAGE_SIZE_LG = 330;  // profile image width & height (SVG units) — usually CIRCLE_R_LG * 2
const GLOW_R_LG     = 180;   // bahari glow ring ka radius

// Circle & Image — Mobile (sm, max-width: 640px)
const CIRCLE_R_SM   = 174;
const IMAGE_SIZE_SM = 320;
const GLOW_R_SM     = 170;

// Icon button size
const ICON_BTN_SIZE = 64;   // px — white circle button ka size
const ICON_IMG_SIZE = 28;   // px — andar wali icon image ka size

// Icon positions (SVG units, center = 0,0)
// iconOffset      → desktop
// iconOffsetMob   → mobile
const DIRECTIONS = [
  {
    id: "top",
    lineEnd: { x: 0, y: -LINE_R },
    iconOffset:    { x: -35,  y: -280 },
    iconOffsetMob: { x: -60,  y: -270 },
  },
  {
    id: "right",
    lineEnd: { x: LINE_R, y: 0 },
    iconOffset:    { x: 210,  y: -35  },
    iconOffsetMob: { x: 210,   y: -50  },
  },
  {
    id: "bottom",
    lineEnd: { x: 0, y: LINE_R },
    iconOffset:    { x: -33,  y: 210  },
    iconOffsetMob: { x: -60,  y: 170   },
  },
  {
    id: "left",
    lineEnd: { x: -LINE_R, y: 0 },
    iconOffset:    { x: -280, y: -35  },
    iconOffsetMob: { x: -330, y: -48  },
  },
];

const SOCIALS = [
  { dir: "top",    href: "https://github.com/sonu595",          label: "GitHub",    icon: github  },
  { dir: "right",  href: "https://www.instagram.com/code___ez", label: "Instagram", icon: insta   },
  { dir: "bottom", href: "https://wa.me/8279278341",            label: "WhatsApp",  icon: whatsapp},
  { dir: "left",   href: "https://x.com/sonu2016841",           label: "Twitter",   icon: x       },
];

// ─────────────────────────────────────────────
//  Hook — window width detect karne ke liye
// ─────────────────────────────────────────────

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

// ─────────────────────────────────────────────
//  Line animation hook
// ─────────────────────────────────────────────

function useLine(tx, ty, delay, triggered) {
  const [prog, setProg] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let raf, start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start - delay;
      if (elapsed < 0) { raf = requestAnimationFrame(step); return; }
      const t    = Math.min(elapsed / LINE_DUR, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setProg(ease);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [triggered, delay]);

  return { cx: tx * prog, cy: ty * prog, done: prog >= 1 };
}

// ─────────────────────────────────────────────
//  Icon tooltip label
// ─────────────────────────────────────────────

function IconLabel({ id, label }) {
  const base = "absolute bg-black/80 backdrop-blur-sm text-white text-xs font-medium whitespace-nowrap pointer-events-none px-2 py-1 rounded-full";
  const pos = {
    top:    "bottom-full left-1/2 -translate-x-1/2 mb-3",
    right:  "left-full top-1/2 -translate-y-1/2 ml-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left:   "right-full top-1/2 -translate-y-1/2 mr-3",
  }[id];

  const slideInit = {
    top:    { opacity: 0, y: 6 },
    right:  { opacity: 0, x: -6 },
    bottom: { opacity: 0, y: -6 },
    left:   { opacity: 0, x: 6 },
  }[id];

  return (
    <motion.span
      className={`${base} ${pos}`}
      initial={slideInit}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.span>
  );
}

// ─────────────────────────────────────────────
//  Line branch component
// ─────────────────────────────────────────────

function LineBranch({ direction, index, triggered }) {
  const { cx, cy, done } = useLine(
    direction.lineEnd.x,
    direction.lineEnd.y,
    index * STAGGER,
    triggered
  );

  return (
    <g>
      <line
        x1={0} y1={0} x2={cx} y2={cy}
        stroke="white" strokeWidth={1.5}
        strokeLinecap="round" opacity={0.5}
      />
      {done && (
        <motion.circle
          cx={direction.lineEnd.x} cy={direction.lineEnd.y}
          r={3} fill="white" opacity={0.4}
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </g>
  );
}

// ─────────────────────────────────────────────
//  Social icon component
// ─────────────────────────────────────────────

function SocialIcon({ dir, social, direction, iconsVisible, hoveredIcon, setHoveredIcon, isMobile }) {
  const VB = 300;
  const isVisible = iconsVisible[dir];
  const isHovered = hoveredIcon === dir;

  // Mobile ya desktop ke hisaab se offset choose karo
  const iconOffset = isMobile ? direction.iconOffsetMob : direction.iconOffset;

  const left = ((VB + iconOffset.x) / (VB * 2)) * 100;
  const top  = ((VB + iconOffset.y) / (VB * 2)) * 100;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-100 cursor-pointer shadow-lg"
          style={{
            left: `${left}%`,
            top:  `${top}%`,
            transform: "translate(-50%, -50%)",
            width:  `${ICON_BTN_SIZE}px`,
            height: `${ICON_BTN_SIZE}px`,
            boxShadow: isHovered
              ? "0 0 0 8px rgba(255,255,255,0.2), 0 8px 25px rgba(0,0,0,0.2)"
              : "0 4px 15px rgba(0,0,0,0.1)",
            transition: "box-shadow 0.3s ease",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          onMouseEnter={() => setHoveredIcon(dir)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <motion.img
            src={social.icon}
            alt={social.label}
            style={{ width: `${ICON_IMG_SIZE}px`, height: `${ICON_IMG_SIZE}px` }}
            animate={{ scale: isHovered ? 1.15 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          />
          <AnimatePresence>
            {isHovered && <IconLabel id={dir} label={social.label} />}
          </AnimatePresence>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────
//  Main component
// ─────────────────────────────────────────────

const Home7 = () => {
  const text = "SAY HELLO ! ";
  const [hoveredIcon, setHoveredIcon]   = useState(null);
  const [triggered, setTriggered]       = useState(false);
  const [iconsVisible, setIconsVisible] = useState({});
  const containerRef = useRef(null);
  const VB = 300;

  const windowWidth = useWindowWidth();
  const isMobile    = windowWidth < 640; // sm breakpoint

  // Responsive values
  const circleR   = isMobile ? CIRCLE_R_SM   : CIRCLE_R_LG;
  const imageSize = isMobile ? IMAGE_SIZE_SM  : IMAGE_SIZE_LG;
  const glowR     = isMobile ? GLOW_R_SM      : GLOW_R_LG;

  // Intersection observer — animation tab shuru ho jab section visible ho
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Icons ko stagger ke saath visible karo
  useEffect(() => {
    if (!triggered) return;
    DIRECTIONS.forEach((dir, i) => {
      setTimeout(
        () => setIconsVisible((prev) => ({ ...prev, [dir.id]: true })),
        i * STAGGER + LINE_DUR
      );
    });
  }, [triggered]);

  return (
    <div className="min-h-screen bg-black flex flex-col overflow-x-hidden">

      {/* ── MARQUEE ── */}
      <div className="w-full overflow-hidden pt-20 sm:pt-24 md:pt-28">
        <div className="flex animate-marquee w-max text-white font-bold gap-6 sm:gap-8 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="whitespace-nowrap tracking-tighter">{text}</span>
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={`dup-${i}`} className="whitespace-nowrap tracking-tighter">{text}</span>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16 px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-20 xl:px-28 flex-1">

        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 text-white space-y-5 sm:space-y-6">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hey there.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Got an idea, a project, or a problem to solve? I'm always open to
            building, collaborating, and exploring new opportunities.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            I enjoy turning ideas into real-world applications and continuously
            improving my skills along the way.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white pt-3">
            Drop a message — let's make something real.
          </p>
        </div>

        {/* Right — SVG + Icons */}
        <div
          ref={containerRef}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-100 h-100 sm:w-112.5 sm:h-112.5 md:w-125 md:h-125 lg:w-137.5 lg:h-137.5">

            {/* SVG Layer — Lines & Profile Image */}
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${VB * 2} ${VB * 2}`}
              className="absolute top-0 left-0 overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform={`translate(${VB}, ${VB})`}>

                {/* Animated Lines */}
                {DIRECTIONS.map((dir, i) => (
                  <LineBranch
                    key={dir.id}
                    direction={dir}
                    index={i}
                    triggered={triggered}
                  />
                ))}

                {/* Profile Image */}
                <defs>
                  <clipPath id="img-clip">
                    <circle cx={0} cy={0} r={circleR} />
                  </clipPath>
                </defs>

                <motion.image
                  href={contactimg}
                  x={-(imageSize / 2)}
                  y={-(imageSize / 2)}
                  width={imageSize}
                  height={imageSize}
                  clipPath="url(#img-clip)"
                  preserveAspectRatio="xMidYMid slice"
                  className="cursor-pointer transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  style={{ filter: "grayscale(100%)" }}
                  onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
                  onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
                />

                {/* Glow ring */}
                <circle
                  cx={0} cy={0} r={glowR}
                  fill="none"
                  stroke="rgba(255,255,255,1)"
                  strokeWidth={3}
                />
              </g>
            </svg>

            {/* HTML Icon Layer */}
            {DIRECTIONS.map((dir) => {
              const social = SOCIALS.find((s) => s.dir === dir.id);
              return (
                <SocialIcon
                  key={dir.id}
                  dir={dir.id}
                  social={social}
                  direction={dir}
                  iconsVisible={iconsVisible}
                  hoveredIcon={hoveredIcon}
                  setHoveredIcon={setHoveredIcon}
                  isMobile={isMobile}
                />
              );
            })}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Home7;