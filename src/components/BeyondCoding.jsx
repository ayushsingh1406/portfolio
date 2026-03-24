import Reveal from "./Reveal"

export default function BeyondCoding() {
  const images = [
    { 
      src: "/images/powerlifting.jpeg", 
      alt: "Main heavy lift", 
      styles: "col-span-4 row-span-2" 
    },
    { 
      src: "/images/pose.jpeg", 
      alt: "Powerlifting pose", 
      styles: "col-span-2 row-span-1" 
    },
    { 
      src: "/images/rack.jpeg", 
      alt: "Squat rack setup", 
      styles: "col-span-2 row-span-1" 
    },
    { 
      src: "/images/back.jpeg", 
      alt: "Back engagement", 
      styles: "col-span-3 row-span-1" 
    },
    { 
      src: "/images/medal.jpeg", 
      alt: "Competition medals", 
      styles: "col-span-3 row-span-1" 
    }
  ]

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
            <div className="grid grid-cols-6 grid-rows-3 gap-3 sm:gap-4 w-full h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
              {images.map((img) => (
                <div
                  key={img.src}
                  className={`relative shadow-2xl rounded-2xl overflow-hidden border-[4px] border-[#D2C4B4] dark:border-[#0d96ab]/60 transition-all hover:scale-[1.03] duration-300 hover:z-10 group ${img.styles}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Premium Aesthetic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>
              ))}
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
      </div >
    </section >
  )
}
