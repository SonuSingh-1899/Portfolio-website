import React from 'react'
import contactimg from '../../assets/contactimage.jpg'

const Home6 = () => {
  const text = "SAY HELLO ! "

  return (
    <div className="min-h-screen bg-black flex flex-col">

      {/* Marquee */}
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
        gap-10 md:gap-0 mt-16 sm:mt-24 md:mt-32 lg:mt-40
        px-6 py-3 sm:px-10 sm:py-5 md:px-16 md:py-8 lg:px-20 lg:py-10">

        <div className="w-full md:w-1/2 text-white">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed">
            Hey there.
          </p>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed
            text-gray-300 mt-4 sm:mt-6">
            Got an idea, a project, or a problem to solve? I'm always open to
            building, collaborating, and exploring new opportunities. Whether
            it's development or security, I focus on creating efficient and
            impactful solutions.
          </p>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed
            text-gray-300 mt-4">
            I enjoy turning ideas into real-world applications and continuously
            improving my skills along the way. If you'd like to work together
            or just connect, feel free to reach out.
          </p>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl
            text-white font-semibold mt-6">
            Drop a message — let's make something real.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={contactimg}
            alt="Contact"
            className="w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96
              h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96
              object-cover rounded-lg grayscale hover:grayscale-0
              transition-all duration-500"
          />
        </div>

      </div>
    </div>
  )
}

export default Home6