import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ReactTyped } from "react-typed"

export default function Hero({ isDark }) {
  return (
    <section
      id="home"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-28 scroll-mt-24 text-slate-900 dark:text-slate-100"
    >
      {/* Background glow - REMOVED */}

      <motion.div
        className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-[#10304A]/60 dark:border-white/10 dark:bg-slate-900/40 p-10 md:p-14 shadow-2xl shadow-[#10304A]/20 dark:shadow-black/60 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-12 group"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E2D0B6]/80 via-transparent to-[#246869]/40 dark:from-slate-800/80 dark:via-transparent dark:to-indigo-900/40" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 w-full">

          {/* TEXT */}
          <div className="flex-1 relative z-10 order-2 md:order-1 mt-6 md:mt-0">
            <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
              Hi, I'm Ayush
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: isDark ? '#0d96ab' : '#d0c0a8' }}>
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "Machine Learning Enthusiast"
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
                showCursor={false}
              />
            </h2>

            <p className="text-lg md:text-xl text-slate-800 dark:text-slate-300 mb-10 max-w-xl leading-relaxed">
              Building impactful digital solutions with expertise in web development, AI, and scalable systems. Explore my work, skills, and journey below.
            </p>

            {/* BUTTONS (FIXED) */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/ayushsingh1406"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://linkedin.com/in/ayushsingh1406"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0d96ab] text-white dark:text-slate-950 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg shadow-[#0d96ab]/25 transition-all duration-300"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href="/resume/ayush_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full font-semibold text-slate-900 dark:text-white hover:bg-white dark:hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 flex justify-center order-1 md:order-2">
            <ImageSwitcher isDark={isDark} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

/* IMAGE SWITCHER */

function ImageSwitcher({ isDark }) {
  const [index, setIndex] = useState(0)

  const images = [
    { src: "/images/ayush.png", position: "center 30%" },
    { src: "/images/ayush2.png", position: "center 15%" },
  ]

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <motion.div
      onClick={nextImage}
      whileHover={{ scale: 1.03 }}
      className="relative cursor-pointer"
    >
      {/* STACK CARD 1 (theme aware) */}
      <div className="absolute w-56 h-72 md:w-64 md:h-80 border border-white/50 dark:border-white/10 rounded-[2rem] rotate-[8deg] top-4 left-4 z-0 transition-transform duration-500 group-hover:rotate-[12deg]" style={{ backgroundColor: isDark ? '#2d5a70' : '#d0c0a8' }}></div>

      {/* STACK CARD 2 */}
      <div className="absolute w-56 h-72 md:w-64 md:h-80 bg-white/60 dark:bg-slate-800/60 border border-white/50 dark:border-white/10 backdrop-blur-md rounded-[2rem] -rotate-[4deg] top-2 left-2 z-0 shadow-xl transition-transform duration-500 group-hover:-rotate-[8deg]"></div>

      {/* MAIN IMAGE */}
      <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[6px] border-white/80 dark:border-slate-800/80 z-10 bg-slate-100 dark:bg-slate-900 transition-transform duration-500">

        <AnimatePresence mode="wait">
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt="Ayush Singh"
            className="w-full h-full object-cover"
            style={{ objectPosition: images[index].position }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

      </div>
    </motion.div>
  )
}