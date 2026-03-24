import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Reveal from "./Reveal"

export default function BeyondCoding() {
  const [activeIdx, setActiveIdx] = useState(0)

  // Array of images with descriptions for alt text
  const images = [
    { src: "/images/powerlifting.jpeg", alt: "Powerlifting setup" },
    { src: "/images/pose.jpeg", alt: "Powerlifting pose" },
    { src: "/images/medal.jpeg", alt: "Powerlifting competition medals" }
  ]

  // Automatically cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prevIdx) => (prevIdx + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  // Click handler to manually cycle images
  const cycleImages = () => {
    setActiveIdx((prevIdx) => (prevIdx + 1) % images.length)
  }

  return (
    <section
      id="beyond-coding"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-white"
    >
      <Reveal>
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#993131] dark:text-cyan-400">Beyond Coding</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#10304A] dark:text-white font-display">Strength & Discipline</h2>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Animated Image Stack */}
        <div className="lg:w-1/2 w-full">
          <Reveal>
            <div
              className="relative flex justify-center items-center w-full h-[350px] sm:h-[450px] lg:h-[500px] cursor-pointer mt-8 lg:mt-0"
              onClick={cycleImages}
              title="Click to change images"
            >
              <AnimatePresence>
                {images.map((img, index) => {
                  // Calculate position relative to currently active index
                  const offset = (index - activeIdx + images.length) % images.length

                  // Configuration for the stack visual (front, middle, back)
                  let zIndex = 0
                  let xOffset = 0
                  let yOffset = 0
                  let scale = 1
                  let rotate = 0
                  let opacity = 1
                  let filter = "grayscale(0%)"

                  if (offset === 0) {
                    // Front image
                    zIndex = 30
                    scale = 1
                    rotate = 0
                    xOffset = 0
                    yOffset = 0
                  } else if (offset === 1) {
                    // Middle image (Right & Back)
                    zIndex = 20
                    scale = 0.9
                    rotate = 6
                    xOffset = 30
                    yOffset = 15
                    filter = "grayscale(30%) brightness(80%)"
                  } else if (offset === 2) {
                    // Back image (Left & Furthest Back)
                    zIndex = 10
                    scale = 0.8
                    rotate = -8
                    xOffset = -30
                    yOffset = 30
                    filter = "grayscale(60%) brightness(60%)"
                  }

                  return (
                    <motion.div
                      key={img.src}
                      className="absolute shadow-2xl rounded-[2rem] overflow-hidden border-4 border-white dark:border-slate-800"
                      initial={false}
                      animate={{
                        zIndex,
                        scale,
                        rotate,
                        x: xOffset,
                        y: yOffset,
                        opacity,
                        filter
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                      }}
                      style={{
                        width: "280px",
                        height: "380px",
                        maxWidth: "80%",
                        maxHeight: "100%",
                      }}
                    >
                      <div className="w-full h-full relative">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                        {/* Aesthetic overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full">
          <Reveal>
            <div className="flex flex-col justify-center space-y-8 lg:pr-8">
              <h3 className="text-3xl font-bold text-[#C65000] dark:text-[#0d96ab] font-display">The Powerlifting Mindset</h3>

              <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                <p>
                  Outside of coding, I train as a powerlifter, a discipline that has profoundly shaped my approach to both life and engineering.
                </p>

                <div className="pl-6 border-l-4 border-[#993131] dark:border-cyan-400 py-2 bg-[#E2D0B6]/30 dark:bg-slate-900/40 rounded-r-xl">
                  <p className="font-medium italic text-[#10304A] dark:text-white">
                    "Powerlifting is built on consistency, progressive overload, and long-term thinking, the same principles I apply when building systems and improving my technical skills."
                  </p>
                </div>

                <p>
                  Over the past 1.5+ years, I've focused on getting stronger both physically and mentally. This means meticulously tracking performance metrics, refining my technique, and pushing my limits with sheer intent.
                </p>

                <p>
                  The gym is my debugging environment for the body and mind. Every failed lift is just feedback, and every PR is a successful deployment.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
