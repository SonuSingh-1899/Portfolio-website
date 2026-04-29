import React, { useEffect, useRef } from 'react'

const AnimatedSection = ({ heading, text, showLine }) => {
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const wrapperRef = useRef(null)  // wrapper observe karenge

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // wrapper ke andar sabko animate karo
            entry.target.querySelectorAll('.anim-el').forEach(el => {
              el.classList.add('animate-in')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    if (wrapperRef.current) observer.observe(wrapperRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapperRef} className='flex flex-col gap-6'>

      <div className='flex flex-col sm:flex-row gap-6 sm:gap-16'>
        {/* Heading */}
        <h1
          className='anim-el text-3xl sm:text-4xl sm:w-50 sm:shrink-0
            opacity-0 -translate-x-10 transition-all duration-700 ease-out
            [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0'
        >
          {heading}
        </h1>

        {/* Paragraph */}
        <p
          className='anim-el text-base sm:text-xl sm:w-125 sm:shrink-0
            opacity-0 translate-x-10 transition-all duration-700 ease-out delay-200
            [&.animate-in]:opacity-100 [&.animate-in]:translate-x-0
            text-gray-300 leading-relaxed'
        >
          {text}
        </p>
      </div>

      {/* Line */}
      {showLine && (
        <div
          className='anim-el bg-white h-px w-0 transition-all duration-1000 ease-out delay-400
            [&.animate-in]:w-full sm:[&.animate-in]:w-180'
        />
      )}

    </div>
  )
}

const Home5 = () => {
  const sections = [
    {
      heading: 'development',
      text: "From designing backend APIs to crafting responsive frontends, I enjoy working on complete applications. I've built multiple projects that reflect practical problem-solving and real implementation skills.",
      showLine: true,
    },
    {
      heading: 'Mindset',
      text: 'I bring a fresh and innovative mindset to development, experimenting with new ideas and improving user experience through clean and efficient solutions. I am constantly improving my skills, exploring new technologies, and aiming to build impactful, scalable applications while growing as a developer.',
      showLine: true,
    },
    {
      heading: 'qualification',
      text: 'I completed my BCA from Subodh College, where I explored multiple programming languages and core computer science concepts. During my journey, I gained exposure to different technologies but chose to focus deeply on Java for building strong backend and application development skills.',
      showLine: true,
    },
  ]

  return (
    <div className='min-h-screen text-white bg-black'>
      <div className='
        flex flex-col gap-12 sm:gap-16
        px-6 sm:px-12 md:px-0
        md:ml-[40%]
      '>
        {sections.map((section, index) => (
          <AnimatedSection
            key={index}
            heading={section.heading}
            text={section.text}
            showLine={section.showLine}
          />
        ))}
      </div>
    </div>
  )
}

export default Home5