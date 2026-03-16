import Reveal from "./Reveal"
import { GraduationCap, Lightbulb, Target } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-slate-100"
    >
      <Reveal>

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT TEXT CONTENT */}
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">

            {/* Intro */}
            <p>
              I'm a <span className="font-semibold text-slate-800 dark:text-white">
              Computer Science and Engineering student</span> specializing in 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> Machine Learning</span>.
              I enjoy building software that solves practical problems and improves everyday experiences
              through technology.
            </p>

            {/* Skills */}
            <p>
              My development experience includes working with
              <span className="font-medium text-slate-800 dark:text-white"> C++, Python, and JavaScript</span>,
              along with modern technologies such as
              <span className="font-medium text-blue-600 dark:text-blue-400">
              {" "}React, Tailwind CSS, HTML, CSS, and Django</span>.
              I actively practice <span className="font-medium">data structures and algorithms</span> and enjoy
              building projects that strengthen both my problem-solving ability and my understanding of
              full-stack development.
            </p>

            {/* Mindset */}
            <p>
              I’m passionate about continuous improvement, whether it's learning new technologies,
              solving complex problems, or building products that create real value.
              My goal is to grow into a strong <span className="font-semibold text-slate-800 dark:text-white">
              software engineer</span> capable of designing scalable systems and contributing
              to impactful technology.
            </p>

          </div>


          {/* RIGHT INFO CARDS */}
          <div className="grid gap-6">

            {/* CARD 1 */}
            <div className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:-translate-y-1">

              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-l-2xl"></div>

              <div className="flex items-start gap-4">

                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                  <GraduationCap className="text-blue-600 dark:text-blue-300" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Education
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
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
            <div className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:-translate-y-1">

              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-l-2xl"></div>

              <div className="flex items-start gap-4">

                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                  <Lightbulb className="text-purple-600 dark:text-purple-300" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Interests
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Software Development, Machine Learning,
                    Full Stack Development and Problem Solving
                  </p>
                </div>

              </div>
            </div>


            {/* CARD 3 */}
            <div className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-2xl p-6 transition duration-300 hover:shadow-xl hover:-translate-y-1">

              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-l-2xl"></div>

              <div className="flex items-start gap-4">

                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg">
                  <Target className="text-emerald-600 dark:text-emerald-300" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Current Focus
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
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