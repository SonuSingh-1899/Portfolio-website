import React from 'react'

const work = () => {
  return (
    <div className='w-full mt-20 gap-x-10 min-h-screen bg-black text-white'>
      <div className='flex flex-col p-20' >
        <div className='text-[160px]  justify-start  leading-none'>
          PROJECTS
        </div>
        <div className='text-6xl font-style  justify-start leading-none ' >
          Selection
        </div>
      </div>


      {/* paragraph section */}
      <div className='flex flex-row p-20 gap-x-30 justify-between' >
        <div className='flex w-100 items-end justify-end'>
          <div className='text-2xl border-2 w-70 rounded-4xl p-3'>
            projects
          </div>
        </div>
        <div className='w-180' >
          <p className='text-xl text-left'>
            Over the past few years, I have focused on building modern full-stack applications using Java, Spring Boot, React, PostgreSQL, and Redis. My experience includes designing scalable backend architectures, developing secure RESTful APIs, implementing real-time communication systems, optimizing database performance, and creating responsive user interfaces. I enjoy solving complex engineering challenges, writing clean and maintainable code, and transforming ideas into reliable software solutions. Through hands-on development across multiple projects, I have gained practical expertise in backend systems, authentication, caching strategies, database design, and modern web technologies. Explore my work below to see how I combine technical expertise with a passion for building impactful digital experiences.
          </p>
        </div>
      </div>

    </div>
  )
}

export default work