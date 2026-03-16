import { motion } from "framer-motion"
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

        {/* Background images */}
        <div className="absolute inset-0 opacity-40 dark:opacity-25">
          <div className="h-full w-full bg-[url('/images/whitebg.jpg')] bg-cover bg-center dark:hidden" />
          <div className="h-full w-full hidden bg-[url('/images/blackbg.avif')] bg-cover bg-center dark:block" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-slate-100/60 dark:from-slate-950/80 dark:via-slate-900/40 dark:to-slate-900/90" />
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 w-full">

          {/* TEXT SECTION */}
          <div className="flex-1 relative z-10 order-2 md:order-1 mt-6 md:mt-0">

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Hi, I'm Ayush
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 dark:text-blue-300 mb-6">
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

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-xl leading-relaxed">
              Welcome to my portfolio. Explore my projects, technical skills,
              and experience in software development and machine learning.
            </p>

            {/* LINKS */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/ayushsingh1406"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full hover:from-slate-800 hover:to-slate-600 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-slate-900/30"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/ayushsingh1406"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-500 hover:to-indigo-500 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-700/25"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="/resume/ayush_resume.pdf"
                target="_blank"
                className="px-5 py-2.5 border border-slate-300 dark:border-slate-600 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
              >
                Download Resume
              </a>
            </div>

          </div>

          {/* IMAGE SECTION */}
          <div className="flex-1 flex justify-center order-1 md:order-2">

            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-20"></div>

              {/* Smaller image on mobile */}
              <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-blue-900 shadow-xl relative">
                <img
                  src="/images/ayush.png"
                  alt="Ayush Singh"
                  className="w-full h-full object-cover scale-[1.50] md:scale-150"
                />
              </div>

            </motion.div>

          </div>

        </div>

      </motion.div>
    </section>
  )
}