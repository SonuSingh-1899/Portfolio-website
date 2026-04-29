import React, { useState, useEffect, useRef } from 'react'
import contactimg from '../../assets/contactimage.jpg'

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
          observer.disconnect() // Stop observing once visible
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the image is visible
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

        {/* Image Container */}
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
              className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6
              transition-all duration-1500 z-20
              ${isVisible ? 'opacity-100 -translate-y-14' : 'opacity-0'}`}
            >
              <div className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                <svg width="36" height="36" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </a>

            {/* Right - Instagram */}
            <a
              href="https://www.instagram.com/code___ez?igsh=MWhmN2xtZDhnbGlnNA=="
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIcon('instagram')}
              onMouseLeave={() => setHoveredIcon(null)}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6
              transition-all duration-1500 z-20
              ${isVisible ? 'opacity-100 translate-x-14' : 'opacity-0'}`}
            >
              <div className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" fill="#000000" fillOpacity="0.8"></path>
                    <circle cx="17" cy="7" r="1" fill="#000000"></circle>
                    <circle cx="12" cy="12" r="3" fill="#000000"></circle>
                  </g>
                </svg>
              </div>
            </a>

            {/* Bottom - WhatsApp */}
            <a
              href="https://wa.me/8279278341"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIcon('whatsapp')}
              onMouseLeave={() => setHoveredIcon(null)}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6
              transition-all duration-[1500ms] z-20
              ${isVisible ? 'opacity-100 translate-y-14' : 'opacity-0'}`}
            >
              <div className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                <svg width="36" height="36" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <defs>
                      <path id="a" d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"></path>
                    </defs>
                    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="512.001" y1=".978" x2="512.001" y2="1025.023">
                      <stop offset="0" stopColor="#61fd7d"></stop>
                      <stop offset="1" stopColor="#2bb826"></stop>
                    </linearGradient>
                    <use href="#a" overflow="visible" fill="url(#b)"></use>
                    <g>
                      <path fill="#000000" d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"></path>
                    </g>
                  </g>
                </svg>
              </div>
            </a>

            {/* Left - X/Twitter */}
            <a
              href="https://x.com/sonu2016841"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIcon('twitter')}
              onMouseLeave={() => setHoveredIcon(null)}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6
              transition-all duration-[1500ms] z-20
              ${isVisible ? 'opacity-100 -translate-x-14' : 'opacity-0'}`}
            >
              <div className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.7828 3.91825C20.1313 3.83565 20.3743 3.75444 20.5734 3.66915C20.8524 3.54961 21.0837 3.40641 21.4492 3.16524C21.7563 2.96255 22.1499 2.9449 22.4739 3.11928C22.7979 3.29366 23 3.6319 23 3.99986C23 5.08079 22.8653 5.96673 22.5535 6.7464C22.2911 7.40221 21.9225 7.93487 21.4816 8.41968C21.2954 11.7828 20.3219 14.4239 18.8336 16.4248C17.291 18.4987 15.2386 19.8268 13.0751 20.5706C10.9179 21.3121 8.63863 21.4778 6.5967 21.2267C4.56816 20.9773 2.69304 20.3057 1.38605 19.2892C1.02813 19.0108 0.902313 18.5264 1.07951 18.109C1.25671 17.6916 1.69256 17.4457 2.14144 17.5099C3.42741 17.6936 4.6653 17.4012 5.6832 16.9832C5.48282 16.8742 5.29389 16.7562 5.11828 16.6346C4.19075 15.9925 3.4424 15.1208 3.10557 14.4471C2.96618 14.1684 2.96474 13.8405 3.10168 13.5606C3.17232 13.4161 3.27562 13.293 3.40104 13.1991C2.04677 12.0814 1.49999 10.5355 1.49999 9.49986C1.49999 9.19192 1.64187 8.90115 1.88459 8.71165C1.98665 8.63197 2.10175 8.57392 2.22308 8.53896C2.12174 8.24222 2.0431 7.94241 1.98316 7.65216C1.71739 6.3653 1.74098 4.91284 2.02985 3.75733C2.1287 3.36191 2.45764 3.06606 2.86129 3.00952C3.26493 2.95299 3.6625 3.14709 3.86618 3.50014C4.94369 5.36782 6.93116 6.50943 8.78086 7.18568C9.6505 7.50362 10.4559 7.70622 11.0596 7.83078C11.1899 6.61019 11.5307 5.6036 12.0538 4.80411C12.7439 3.74932 13.7064 3.12525 14.74 2.84698C16.5227 2.36708 18.5008 2.91382 19.7828 3.91825ZM10.7484 9.80845C10.0633 9.67087 9.12171 9.43976 8.09412 9.06408C6.7369 8.56789 5.16088 7.79418 3.84072 6.59571C3.86435 6.81625 3.89789 7.03492 3.94183 7.24766C4.16308 8.31899 4.5742 8.91899 4.94721 9.10549C5.40342 9.3336 5.61484 9.8685 5.43787 10.3469C5.19827 10.9946 4.56809 11.0477 3.99551 10.9046C4.45603 11.595 5.28377 12.2834 6.66439 12.5135C7.14057 12.5929 7.49208 13.0011 7.49986 13.4838C7.50765 13.9665 7.16949 14.3858 6.69611 14.4805L5.82565 14.6546C5.95881 14.7703 6.103 14.8838 6.2567 14.9902C6.95362 15.4727 7.65336 15.6808 8.25746 15.5298C8.70991 15.4167 9.18047 15.6313 9.39163 16.0472C9.60278 16.463 9.49846 16.9696 9.14018 17.2681C8.49626 17.8041 7.74425 18.2342 6.99057 18.5911C6.63675 18.7587 6.24134 18.9241 5.8119 19.0697C6.14218 19.1402 6.48586 19.198 6.84078 19.2417C8.61136 19.4594 10.5821 19.3126 12.4249 18.6792C14.2614 18.0479 15.9589 16.9385 17.2289 15.2312C18.497 13.5262 19.382 11.1667 19.5007 7.96291C19.51 7.71067 19.6144 7.47129 19.7929 7.29281C20.2425 6.84316 20.6141 6.32777 20.7969 5.7143C20.477 5.81403 20.1168 5.90035 19.6878 5.98237C19.3623 6.04459 19.0272 5.94156 18.7929 5.70727C18.0284 4.94274 16.5164 4.43998 15.2599 4.77822C14.6686 4.93741 14.1311 5.28203 13.7274 5.89906C13.3153 6.52904 13 7.51045 13 8.9999C13 9.28288 12.8801 9.5526 12.6701 9.74221C12.1721 10.1917 11.334 9.92603 10.7484 9.80845Z" fill="#000000"></path>
                  </g>
                </svg>
              </div>
            </a>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home7