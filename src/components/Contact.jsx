import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import Reveal from "./Reveal"

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-white">
      <Reveal>
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#993131] dark:text-cyan-400">Contact</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Connect for Collaboration & Opportunities</h2>
        </div>
        <p className="max-w-3xl text-slate-600 dark:text-slate-300 mb-12 text-lg leading-relaxed font-light">I’m actively looking for opportunities in software engineering, AI product development, and full stack systems. Reach out for collaborative projects, internships, or mentorship conversations.</p>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Email", "ayushsingh1406p@gmail.com", "bg-slate-100/70 text-slate-800 dark:bg-slate-800/70 dark:text-slate-200 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-slate-950", <FaEnvelope size={20} />],
            ["GitHub", "github.com/ayushsingh1406", "bg-slate-100/70 text-slate-800 dark:bg-slate-800/70 dark:text-slate-200 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900", <FaGithub size={20} />],
            ["LinkedIn", "linkedin.com/in/ayushsingh1406", "bg-slate-100/70 text-slate-800 dark:bg-slate-800/70 dark:text-slate-200 group-hover:bg-[#0A66C2] group-hover:text-white dark:group-hover:bg-[#0A66C2]", <FaLinkedin size={20} />],
          ].map(([title, value, colorClass, icon]) => (
            <a key={title} href={title === "Email" ? "mailto:ayushsingh1406p@gmail.com" : title === "GitHub" ? "https://github.com/ayushsingh1406" : "https://linkedin.com/in/ayushsingh1406"} target="_blank" rel="noreferrer" className="group rounded-[2rem] border border-white/40 dark:border-white/10 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl p-6 shadow-xl shadow-indigo-500/5 dark:shadow-black/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 transition-all duration-500">
              <div className="flex items-center gap-3">
                <div className={`h-14 w-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${colorClass}`}>
                  {icon}
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">{title}</p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}