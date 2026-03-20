import { useState } from "react"
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"

export default function Navbar({ isDark, onThemeToggle }) {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#timeline" },
    { name: "Stats", href: "#stats" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <nav className="fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] md:w-[calc(100%-4rem)] -translate-x-1/2 rounded-full border border-white/20 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <a href="#home" className="text-base md:text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-black text-white">A</span>
          <span className="leading-none font-semibold tracking-tight">
            Ayush Kumar Singh
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link, index) => (
              <li key={index} className="group relative">
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 transition text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-400"
                >
                  {link.name}
                </a>
                <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-cyan-400 dark:to-blue-500 transition-all duration-300 group-hover:w-7 group-hover:-translate-x-1/2" />
              </li>
            ))}
          </ul>
          <div className="relative group">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 opacity-0 transition group-hover:opacity-30 blur-md" />
            <button
              onClick={onThemeToggle}
              className="relative z-10 flex h-8 w-14 items-center rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-800/50 p-1 backdrop-blur-md transition-colors"
              aria-label="Toggle dark mode"
            >
              <span className={`h-6 w-6 rounded-full bg-white dark:bg-slate-950 shadow transition-all duration-300 ${isDark ? "translate-x-6" : "translate-x-0"}`}>
                <span className="flex h-full w-full items-center justify-center text-[10px] text-yellow-500 dark:text-yellow-300">{isDark ? <FaMoon /> : <FaSun />}</span>
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={onThemeToggle} className="relative h-8 w-14 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-800/50 p-[2px] transition-colors">
            <span className={`h-7 w-7 rounded-full bg-white dark:bg-slate-950 shadow-sm transition-all duration-300 ${isDark ? "translate-x-6" : "translate-x-0"}`}>
              <span className="flex h-full w-full items-center justify-center text-[10px] text-yellow-500 dark:text-yellow-300">{isDark ? <FaMoon /> : <FaSun />}</span>
            </span>
          </button>
          <button className="text-xl text-slate-800 dark:text-slate-100 ml-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-72" : "max-h-0"}`}>
        <ul className="flex flex-col items-center gap-3 py-4 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200/50 dark:border-slate-800/50 backdrop-blur-xl rounded-b-3xl">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="text-slate-600 dark:text-slate-300 font-medium hover:text-blue-600 dark:hover:text-cyan-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}