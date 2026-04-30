import React, { useState, useEffect, useRef } from 'react'
import contactimg from '../../assets/contactimage.jpg'
import github from '../../assets/github.svg'
import x from '../../assets/twitter-original.svg'
import whatsapp from '../../assets/whatsapp.svg'
import insta from '../../assets/instagram.svg'
import { ins } from 'framer-motion/client'

const Home7 = () => {
  const text = "SAY HELLO ! "
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.3, 
        rootMargin: '0px'
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-black flex flex-col">

      {/* say hellow */}
      <div className="w-full overflow-hidden pt-16 sm:pt-20">
        <div className="flex animate-marquee w-max text-white font-bold gap-8
          text-6xl sm:text-7xl md:text-9xl lg:text-[10rem]">
          
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="whitespace-nowrap">{text}</span>
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={`dup-${i}`} className="whitespace-nowrap">{text}</span>
          ))}

        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start
        gap-10 md:gap-0 my-10 sm:my-10 md:my-10 lg:my-10
        px-6 py-8 sm:px-10 sm:py-15 md:px-16 md:py-20 lg:px-20 lg:py-30">

        {/* Text */}
        <div className="w-full md:w-1/2 text-white">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Hey there.
          </p>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4 sm:mt-6">
            Got an idea, a project, or a problem to solve? I'm always open to
            building, collaborating, and exploring new opportunities.
          </p>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4">
            I enjoy turning ideas into real-world applications and continuously
            improving my skills along the way.
          </p>

          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6">
            Drop a message — let's make something real.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center relative">
          <div 
            ref={imageRef}
            className="relative group w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96
                h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96"
          >
            <img
              src={contactimg}
              alt="Contact"
              className="w-full h-full object-cover rounded-lg grayscale
              group-hover:grayscale-0 transition-all relative z-10"
            />

            {/* Top - GitHub */}
            <a
              href="https://github.com/sonu595"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIcon('github')}
              onMouseLeave={() => setHoveredIcon(null)}
            className={`absolute top-0 left-1/2 -translate-x-1/2 
            transition-all duration-1500 z-20
            ${isVisible ? 'opacity-100 -translate-y-8 sm:-translate-y-14' : 'opacity-0'}`}
            >
              <div className="bg-white p-1 rounded-full hover:bg-gray-200 transition-colors">
                <img className='h-10 w-10 ' src={github} ></img>
              </div>
            </a>

            {/* Right - Instagram */}
            <a
              href="https://www.instagram.com/code___ez?igsh=MWhmN2xtZDhnbGlnNA=="
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIcon('instagram')}
              onMouseLeave={() => setHoveredIcon(null)}
              // RIGHT ICON
              className={`absolute right-0 top-1/2 -translate-y-1/2 
              transition-all duration-1500 z-20
              ${isVisible ? 'opacity-100 translate-x-8 sm:translate-x-14' : 'opacity-0'}`}
            >
              <div className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                <img className='h-10 w-10 ' src={insta} ></img>
              </div>
            </a>

            {/* Bottom - WhatsApp */}
            <a
              href="https://wa.me/8279278341"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIcon('whatsapp')}
              onMouseLeave={() => setHoveredIcon(null)}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 
              transition-all duration-1500 z-20
              ${isVisible ? 'opacity-100 translate-y-14 sm:translate-y-14' : 'opacity-0'}`}
            >
              <div className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                <img className='h-10 w-10 ' src={whatsapp} ></img>
              </div>
            </a>

            {/* Left - X/Twitter */}
            <a
              href="https://x.com/sonu2016841"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIcon('twitter')}
              onMouseLeave={() => setHoveredIcon(null)}
              // LEFT ICON
              className={`absolute left-0 top-1/2 -translate-y-1/2 
              transition-all duration-1500 z-20
              ${isVisible ? 'opacity-100 -translate-x-8 sm:-translate-x-14' : 'opacity-0'}`}
            >
              <div className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                <img className='h-9 w-9 ' src={x} ></img>
              </div>
            </a>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home7