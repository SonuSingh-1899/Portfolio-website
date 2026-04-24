import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img from '../../assets/b_change_my_image_back (2).jpeg'
import About2 from './About2'
import About3 from './About3'

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      {/* ── ABOUT SECTION ── */}
      <div ref={ref} className='bg-black min-h-screen text-white relative overflow-hidden'>

        {/* ── MOBILE VIEW ── */}
        <div className='relative md:hidden'>
          <motion.img
            src={img}
            alt="Sonu Singh"
            className='w-full h-screen object-cover object-top'
            initial={{ scale: 1.2, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
          <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
          <div className='absolute bottom-8 left-6 right-6 z-30'>
            <motion.h1
              className='text-2xl font-serifHero italic font-light tracking-widest text-white/80'
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              hi there, i'm
            </motion.h1>
            <div className='overflow-hidden'>
              <motion.h1
                className='text-6xl font-sansHero font-bold leading-none text-white'
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : { y: '100%' }}
                transition={{ duration: 0.9, delay: 0.75, ease: [0.76, 0, 0.24, 1] }}
              >
                Sonu&nbsp;Singh
              </motion.h1>
            </div>
          </div>
        </div>

        {/* ── DESKTOP VIEW ── */}
        <div className='hidden md:block relative min-h-screen'>
          <motion.div
            className='absolute right-0 top-0 w-[30%] h-full overflow-hidden'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.img
              src={img}
              alt="Sonu Singh"
              className='w-full h-full object-cover object-top'
              initial={{ scale: 1.2 }}
              animate={inView ? { scale: 1 } : { scale: 1.2 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            />
            <div className='absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent' />
          </motion.div>

          <div className='absolute bottom-10 left-12 lg:left-20 z-10'>
            <motion.h1
              className='text-5xl font-serifHero italic lg:text-6xl font-light tracking-widest text-white/70 leading-tight'
              initial={{ opacity: 0, x: -80 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
              transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            >
              hi there, i'm
            </motion.h1>
            <div className='overflow-hidden'>
              <motion.h1
                className='text-[10vw] font-bold font-sansHero leading-none text-white whitespace-nowrap'
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : { y: '100%' }}
                transition={{ duration: 1, delay: 0.65, ease: [0.76, 0, 0.24, 1] }}
              >
                Sonu Singh
              </motion.h1>
            </div>
          </div>
        </div>

      </div>

      <About2 />
    </>
  )
}

export default About