import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 mt-24 bg-white/40 dark:bg-slate-950/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-600 dark:text-slate-400">
        <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
          © {new Date().getFullYear()} <span className="font-bold text-slate-900 dark:text-white">Ayush K. Singh</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/ayushsingh1406" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 flex items-center justify-center rounded-xl border-2 border-slate-300 text-slate-700 hover:text-white hover:bg-slate-900 hover:border-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:text-slate-900 dark:hover:bg-white dark:hover:border-white transition-all duration-300">
            <FaGithub size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com/in/ayushsingh1406" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 flex items-center justify-center rounded-xl border-2 border-slate-300 text-blue-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 dark:border-slate-700 dark:text-blue-400 dark:hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all duration-300">
            <FaLinkedin size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  )
}