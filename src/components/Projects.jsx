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
      image: "/images/spam.jpg",
      github: "https://github.com/ayushsingh1406/grievance-spam-filter.git",
      demo: "https://grievance-spam-filter.streamlit.app/"
    },
    {
      title: "Career Guidance Chatbot",
      description:
        "Intelligent chatbot that recommends career paths based on user interests and preferences.",
      tech: ["Flask", "Machine Learning", "Scikit-learn", "Mistral 7B"],
      image: "/images/chatbot.jpg",
      github: "https://github.com/ayushsingh1406/career-guidance-chatbot.git",
      demo: "https://career-chatbot-xhs2.onrender.com/"
    },
    {
      title: "Skills & Projects Analyzer",
      description:
        "Django-based backend API that analyzes developer skills and project data to generate gamified learning scores.",
      tech: ["Django", "Django REST Framework"],
      image: "/images/analyzer.png",
      github: "https://github.com/ayushsingh1406/DevSphere.git",
      demo: ""
    },
    {
      title: "Static E-Commerce Website",
      description:
        "Static E-commerce webiste built solely using static technologies and inspired from powerlook.in",
      tech: ["HTML", "CSS","JS"],
      image: "/images/e-commerce.jpg",
      github: "https://github.com/ayushsingh1406/StreetStyle.git",
      demo: "https://s-style.netlify.app"
    },
    {
      title: "Student Clustering",
      description:
        "Clustering of students on the basis of their academic results and attendance for academic prevention.",
      tech: ["Flask", "Scikit-learn","Pandas","Streamlit","Seaborn and Matplotlib"],
      image: "/images/clustering.webp",
      github: "https://github.com/ayushsingh1406/student-performance-clustering.git",
      demo: "https://student-performance-clustering.streamlit.app/"
    }
  ]

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-white"
    >
      <Reveal>
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-cyan-400">Projects</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Selected Work & Case Studies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-xl shadow-indigo-500/5 dark:shadow-black/40 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm leading-relaxed font-light flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold tracking-wide bg-blue-50 dark:bg-slate-800/80 text-blue-700 dark:text-cyan-300 px-3 py-1 rounded-full border border-blue-100 dark:border-slate-700 whitespace-nowrap">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a href={project.github} target="_blank" className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-semibold rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 shadow-md">
                    <FaGithub /> GitHub
                  </a>
                  {project.demo ? (
                      <a href={project.demo} target="_blank" className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <button onClick={() => toast("🚀 Live demo will be available soon", { duration: 2000 })} className="flex items-center justify-center gap-2 flex-1 px-4 py-2.5 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
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