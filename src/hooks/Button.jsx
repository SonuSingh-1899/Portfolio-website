import { motion } from 'framer-motion'

const SlideButton = ({ label, onClick, href }) => {

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      whileHover="hover"
      initial="rest"
      className="relative overflow-hidden cursor-pointer select-none
                 px-8 sm:px-10 py-3 sm:py-4
                 text-base sm:text-lg font-semibold
                 border-2 border-white text-white
                 w-full lg:w-60 sm:min-w-40 text-center"
    >

      {/* Top text */}
      <motion.span
        className="block"
        variants={{ rest: { y: 0 }, hover: { y: '-200%' } }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        {label}
      </motion.span>

      {/* Slide text */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        variants={{ rest: { y: '200%' }, hover: { y: 0 } }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        {label}
      </motion.span>

    </Component>
  )
}

export default SlideButton