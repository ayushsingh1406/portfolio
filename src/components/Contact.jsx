import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import Reveal from "./Reveal"

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
      <Reveal>
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-300">Contact</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Connect for Collaboration & Opportunities</h2>
        </div>
        <p className="max-w-3xl text-slate-600 dark:text-slate-300 mb-8">I’m actively looking for opportunities in software engineering, AI product development, and full stack systems. Reach out for collaborative projects, internships, or mentorship conversations.</p>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Email", "ayushsingh1406p@gmail.com", "bg-blue-100 text-blue-700", <FaEnvelope size={20}/>],
            ["GitHub", "github.com/ayushsingh1406", "bg-slate-100 text-slate-700", <FaGithub size={20}/>],
            ["LinkedIn", "linkedin.com/in/ayushsingh1406", "bg-blue-100 text-blue-700", <FaLinkedin size={20}/>],
          ].map(([title, value, colorClass, icon]) => (
            <a key={title} href={title === "Email" ? "mailto:ayushsingh1406p@gmail.com" : title === "GitHub" ? "https://github.com/ayushsingh1406" : "https://linkedin.com/in/ayushsingh1406"} target="_blank" rel="noreferrer" className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${colorClass}`}>
                  {icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-300">{value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}