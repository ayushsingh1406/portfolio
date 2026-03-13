import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ReactTyped } from "react-typed"

export default function Hero() {

  return (
    <section
      id="home"
      className="relative max-w-7xl mx-auto px-6 py-32 scroll-mt-24"
    >

      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <motion.div
        className="relative flex flex-col md:flex-row items-center justify-between gap-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* LEFT CONTENT */}
        <div className="flex-1">

          {/* Name */}
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Hi, I'm Ayush K. Singh
          </h1>

          {/* Typed role */}
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-6">
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

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            Welcome to my portfolio. Explore my projects, technical skills,
            and experience in software development and machine learning.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <a
              href="https://github.com/ayushsingh1406"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-black hover:scale-105 transition-all duration-200 shadow-md"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/ayushsingh1406"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-md"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="/resume/ayush_resume.pdf"
              target="_blank"
              className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 hover:scale-105 transition-all duration-200"
            >
              Download Resume
            </a>

          </div>

        </div>


        {/* PROFILE IMAGE */}
        <div className="flex-1 flex justify-center">

          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-20"></div>

            <div className="w-72 h-72 rounded-full overflow-hidden ring-4 ring-blue-500 shadow-xl relative">

              <img
                src="/images/ayush.png"
                alt="Ayush Singh"
                className="w-full h-full object-cover scale-150"
              />

            </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  )
}