import toast from "react-hot-toast"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Reveal from "./Reveal"

export default function Projects() {

  const projects = [
    {
      title: "Grievance Spam Filter",
      description:
        "Machine learning model that predicts spam and ham grievances submitted by citizens to government platforms.",
      tech: ["Python", "Machine Learning", "TF-IDF"],
      image: "/images/stock1.jpg",
      github: "https://github.com/ayushsingh1406/grievance-spam-filter.git",
      demo: "https://grievance-spam-filter.streamlit.app/"
    },
    {
      title: "Career Guidance Chatbot",
      description:
        "Intelligent chatbot that recommends career paths based on user interests and preferences.",
      tech: ["Flask", "Machine Learning", "Scikit-learn", "Mistral 7B"],
      image: "/images/stock2.png",
      github: "https://github.com/ayushsingh1406/career-guidance-chatbot.git",
      demo: ""
    },
    {
      title: "Skills & Projects Analyzer",
      description:
        "Django-based backend API that analyzes developer skills and project data to generate gamified learning scores.",
      tech: ["Django", "Django REST Framework"],
      image: "/images/stock3.jpg",
      github: "https://github.com/ayushsingh1406/DevSphere.git",
      demo: ""
    }
  ]

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-slate-100"
    >
      <Reveal>
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-300">Projects</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Selected Work & Case Studies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-slate-800 dark:border-slate-700 border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-52 object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-md hover:bg-black transition">
                    <FaGithub /> GitHub
                  </a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-sm rounded-md hover:bg-slate-100 transition">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <button onClick={() => toast("🚀 Live demo will be available soon", { duration: 2000 })} className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-sm rounded-md hover:bg-slate-100 transition">
                      <FaExternalLinkAlt /> Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}