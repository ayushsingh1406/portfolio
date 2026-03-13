
import { FaReact, FaPython, FaHtml5, FaJava, FaCss3Alt, FaGitAlt } from "react-icons/fa"
import { SiCplusplus, SiJavascript, SiTailwindcss, SiDjango } from "react-icons/si"

export default function Skills() {

  const skills = [
    { name: "C++", icon: <SiCplusplus size={42} color="#00599C" /> },
    { name: "Python", icon: <FaPython size={42} color="#3776AB" /> },
    { name: "Java", icon: <FaJava size={42} color="#f89820" /> },
    { name: "JavaScript", icon: <SiJavascript size={42} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={42} color="#61DAFB" /> },
    { name: "HTML", icon: <FaHtml5 size={42} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={42} color="#1572B6" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={42} color="#06B6D4" /> },
    { name: "Git", icon: <FaGitAlt size={42} color="#F05032" /> },
    { name: "Django", icon: <SiDjango size={42} color="#092E20" /> }
  ]

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24"
    >

      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">
          Technical Skills
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded"></div>
      </div>


      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-white border border-slate-200 rounded-xl p-7 flex flex-col items-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.04] transition-all duration-300"
          >

            {/* Icon */}
            <div className="group-hover:scale-110 transition duration-300">
              {skill.icon}
            </div>

            {/* Skill Name */}
            <p className="text-slate-700 font-medium text-sm tracking-wide">
              {skill.name}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}