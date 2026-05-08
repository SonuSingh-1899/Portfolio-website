import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const skillsData = [
  {
    title: "Frontend Architecture",
    tagline: "Building beautiful, responsive interfaces",
    description:
      "Crafting seamless user experiences with modern frontend technologies, focusing on performance, accessibility, and pixel-perfect implementations that delight users.",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 78 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 82 },
    ],
    dir: "left",
  },
  {
    title: "Backend Engineering",
    tagline: "Scalable & robust server solutions",
    description:
      "Designing powerful backend systems with Java ecosystem, ensuring data integrity, security, and optimal performance for enterprise-level applications.",
    skills: [
      { name: "Java", level: 92 },
      { name: "Spring Boot", level: 90 },
      { name: "Spring MVC", level: 88 },
      { name: "Hibernate", level: 86 },
      { name: "REST APIs", level: 94 },
      { name: "Microservices", level: 60 },
    ],
    dir: "left",
  },
  {
    title: "Database Management",
    tagline: "Efficient data storage & retrieval",
    description:
      "Expertise in designing optimized database schemas, writing complex queries, and implementing data relationships for scalable applications.",
    skills: [
      { name: "MySQL", level: 50 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 50 },
      { name: "Redis", level: 75 },
    ],
    dir: "left",
  },
  {
    title: "Tools & DevOps",
    tagline: "Streamlining development workflows",
    description:
      "Automating deployment pipelines, managing version control, and implementing CI/CD practices for efficient software delivery.",
    skills: [
      { name: "Git", level: 70 },
      { name: "GitHub", level: 80 },
      { name: "Docker", level: 60 },
      { name: "Linux", level: 50 },
      { name: "AWS Basics", level: 60 },
    ],
    dir: "left",
  },
  {
    title: "Core Concepts",
    tagline: "Strong fundamentals & best practices",
    description:
      "Deep understanding of computer science principles, design patterns, and security practices that form the foundation of great software.",
    skills: [
      { name: "DSA", level: 50 },
      { name: "OOPs", level: 80 },
      { name: "System Design", level: 40 },
      { name: "API Security", level: 75 },
      { name: "JWT", level: 75 },
    ],
    dir: "left",
  },
];

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });
  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

const getVariants = (dir, isMobile) => {
  const offset = isMobile ? 30 : 60;
  const map = {
    left:  { hidden: { opacity: 0, x: -offset }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: offset },  visible: { opacity: 1, x: 0 } },
    up:    { hidden: { opacity: 0, y: offset },  visible: { opacity: 1, y: 0 } },
    down:  { hidden: { opacity: 0, y: -offset }, visible: { opacity: 1, y: 0 } },
  };
  return map[dir] || map.left;
};

const SkillItem = ({ skill, index, isInView, dir }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const variants = getVariants(dir, isMobile);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        delay: index * (isMobile ? 0.04 : 0.06),
        duration: 1.5,
        ease: "easeOut",
      }}
      className="group py-4 md:py-5  border-b border-white/10 hover:border-white/20 transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-lg sm:text-xl md:text-2xl lg:text-[1.6rem] font-medium text-white/85 group-hover:text-white transition-colors duration-200">
          {skill.name}
        </span>
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="text-xs sm:text-sm text-white/45 font-mono">
            {skill.level}%
          </span>
          <div className="h-[1.5px] bg-gray-500 w-8 group-hover:w-14 transition-all duration-300" />
        </div>
      </div>

      <div className="h-px bg-white/6 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{
            delay: index * 0.04 + 0.25,
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="h-full bg-white/30"
        />
      </div>
    </motion.div>
  );
};

/* ─── Skill Section ──────────────────────────────────────────────────────── */
const SkillSection = ({ title, tagline, description, skills, dir }) => {
  const ref = useRef(null);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const isInView = useInView(ref, {
    margin: isMobile ? "-40px" : "-80px",
    once: true,
    amount: 0.08,
  });

  const titleVariants = getVariants(dir, isMobile);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center
                 px-6 sm:px-10 md:px-16 lg:px-24
                 py-10 sm:py-14 md:py-18
                 border-b border-white/10
                 overflow-hidden"
    >
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: isMobile ? 40 : 60 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-0.5 bg-gray-300 mb-10 sm:mb-14"
      />

      {/* Header */}
      <div className="mb-12 sm:mb-16 md:mb-20 max-w-3xl">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ fontSize: "clamp(2.25rem, 7vw, 6rem)",textShadow: "2px 2px 8px rgba(255, 0, 0, 0.5)"  }}
          className="font-extrabold  text-white leading-[1.05] mb-4 tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0,}}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.12, duration: 1.5, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg text-white/80 mb-3 font-light tracking-wide"
        >
          / {tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.22, duration: 1.5, ease: "easeOut" }}
          className="text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-16 lg:gap-x-20 gap-y-0">
        {skills.map((skill, idx) => (
          <SkillItem
            key={idx}
            skill={skill}
            index={idx}
            isInView={isInView}
            dir={dir}
          />
        ))}
      </div>
    </section>
  );
};



const Skills = () => (
  <div className="bg-black text-white selection:bg-white/10  w-full ">

    {skillsData.map((section, index) => (
      <SkillSection key={index} {...section} sectionIndex={index} />
    ))}

    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="h-40  sm:min-h-[30vh] flex flex-col items-center justify-center
                 gap-4 px-6  text-center"
    >
      <h2 className="text-xl sm:text-3xl md:text-4xl font-light tracking-tight leading-snug">
        Let's Create
        <br />
        <span className="font-semibold">Something Amazing</span>
      </h2>
      <p className="text-white/40 text-xs sm:text-sm tracking-widest">
        Available for collaborations
      </p>
      <div className="w-14 sm:w-16 h-px bg-white/20 my-2" />
    </motion.footer>
  </div>
);

export default Skills;