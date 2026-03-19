import Reveal from "./Reveal"
import { GraduationCap, Lightbulb, Target } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-white"
    >
      <Reveal>

        {/* Section Title */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-cyan-400">About Me</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Who am I ?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT TEXT CONTENT */}
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-light">

            {/* Intro */}
            <p>
              I'm a <span className="font-semibold text-slate-900 dark:text-white">
              Computer Science and Engineering student</span> specializing in 
              <span className="font-semibold text-blue-600 dark:text-cyan-400"> Machine Learning</span>.
              I enjoy building software that solves practical problems and improves everyday experiences
              through technology.
            </p>

            {/* Skills */}
            <p>
              My development experience includes working with
              <span className="font-medium text-slate-900 dark:text-white"> C++, Python, and JavaScript</span>,
              along with modern technologies such as
              <span className="font-medium text-blue-600 dark:text-cyan-400">
              {" "}React, Tailwind CSS, HTML, CSS, and Django</span>.
              I actively practice <span className="font-medium">data structures and algorithms</span> and enjoy
              building projects that strengthen both my problem-solving ability and my understanding of
              full-stack development.
            </p>

            {/* Mindset */}
            <p>
              I’m passionate about continuous improvement, whether it's learning new technologies,
              solving complex problems, or building products that create real value.
              My goal is to grow into a strong <span className="font-semibold text-slate-900 dark:text-white">
              software engineer</span> capable of designing scalable systems and contributing
              to impactful technology.
            </p>

          </div>


          {/* RIGHT INFO CARDS */}
          <div className="grid gap-6">

            {/* CARD 1 */}
            <div className="group relative bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 hover:-translate-y-1">

              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600 dark:from-cyan-400 dark:to-blue-500 rounded-l-[2rem]"></div>

              <div className="flex items-start gap-4">

                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl shadow-inner">
                  <GraduationCap className="text-blue-600 dark:text-cyan-400" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Education
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    B.Tech in Computer Science & Engineering
                    <br />
                    Specialization: Machine Learning
                    <br />
                    Status: Ongoing
                  </p>
                </div>

              </div>
            </div>


            {/* CARD 2 */}
            <div className="group relative bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-blue-500/10 hover:-translate-y-1">

              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 dark:from-blue-500 dark:to-purple-500 rounded-l-[2rem]"></div>

              <div className="flex items-start gap-4">

                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl shadow-inner">
                  <Lightbulb className="text-purple-600 dark:text-blue-400" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Interests
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Software Development, Machine Learning,
                    Full Stack Development and Problem Solving
                  </p>
                </div>

              </div>
            </div>


            {/* CARD 3 */}
            <div className="group relative bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 dark:hover:shadow-fuchsia-500/10 hover:-translate-y-1">

              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-pink-500 to-rose-500 dark:from-fuchsia-400 dark:to-pink-500 rounded-l-[2rem]"></div>

              <div className="flex items-start gap-4">

                <div className="p-3 bg-pink-50 dark:bg-pink-900/30 rounded-xl shadow-inner">
                  <Target className="text-pink-600 dark:text-fuchsia-400" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Current Focus
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Full-stack development, backend engineering,
                    and building practical real-world applications
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </Reveal>
    </section>
  )
}