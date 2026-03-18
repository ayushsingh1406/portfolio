import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ReactTyped } from "react-typed"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-28 scroll-mt-24 text-slate-900 dark:text-slate-100"
    >
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full blur-3xl opacity-35"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-200 via-purple-300 to-fuchsia-400 rounded-full blur-3xl opacity-30"></div>

      <motion.div
        className="relative overflow-hidden rounded-3xl border border-slate-200/40 bg-white/90 p-8 md:p-10 shadow-xl shadow-slate-300/30 dark:border-slate-700/50 dark:bg-slate-900/80 dark:shadow-black/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background */}
        <div className="absolute inset-0 opacity-40 dark:opacity-25">
          <div className="h-full w-full bg-[url('/images/whitebg.jpg')] bg-cover bg-center dark:hidden" />
          <div className="h-full w-full hidden bg-[url('/images/blackbg.avif')] bg-cover bg-center dark:block" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-slate-100/60 dark:from-slate-950/80 dark:via-slate-900/40 dark:to-slate-900/90" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 w-full">
          
          {/* TEXT */}
          <div className="flex-1 relative z-10 order-2 md:order-1 mt-6 md:mt-0">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Hi, I'm Ayush
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6">
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "Machine Learning Enthusiast",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
                showCursor={false}
              />
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-xl">
              Welcome to my portfolio. Explore my projects, skills,
              and experience in software development and ML.
            </p>

            {/* BUTTONS (FIXED) */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/ayushsingh1406"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-700 text-white rounded-full hover:-translate-y-0.5 transition"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://linkedin.com/in/ayushsingh1406"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full hover:-translate-y-0.5 transition"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href="/resume/ayush_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-slate-300 dark:border-slate-600 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 flex justify-center order-1 md:order-2">
            <ImageSwitcher />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

/* IMAGE SWITCHER */

function ImageSwitcher() {
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
      <div className="absolute w-56 h-72 md:w-64 md:h-80 bg-blue-100 dark:bg-slate-700 rounded-2xl rotate-6 top-4 left-4 z-0"></div>

      {/* STACK CARD 2 */}
      <div className="absolute w-56 h-72 md:w-64 md:h-80 bg-white dark:bg-slate-800 rounded-2xl -rotate-6 top-2 left-2 z-0 shadow-lg"></div>

      {/* MAIN IMAGE */}
      <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl z-10 bg-white dark:bg-slate-900">
        
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