import { useState } from "react"
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"

export default function Navbar({ isDark, onThemeToggle }) {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 shadow-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Ayush <span className="text-blue-600 dark:text-blue-400">Kumar Singh</span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-6 text-slate-700 dark:text-slate-200 font-medium">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <a
                  href={link.href}
                  className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-300"
                >
                  {link.name}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          <button
            onClick={onThemeToggle}
            className="relative h-7 w-12 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 p-[2px] flex items-center transition-all duration-300 ml-2"
            aria-label="Toggle dark mode"
          >
            <span className={`h-6 w-6 rounded-full bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 ${isDark ? "translate-x-5" : "translate-x-0"}`}>
              <span className="flex items-center justify-center h-full w-full text-yellow-500 dark:text-yellow-300 text-[10px]">
                {isDark ? <FaMoon /> : <FaSun />}
              </span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onThemeToggle}
            className="relative h-7 w-12 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 p-[2px] flex items-center transition-all duration-300"
          >
            <span className={`h-6 w-6 rounded-full bg-white dark:bg-slate-900 shadow-sm transition-all duration-300 ${isDark ? "translate-x-5" : "translate-x-0"}`}>
              <span className="flex items-center justify-center h-full w-full text-yellow-500 dark:text-yellow-300 text-[10px]">
                {isDark ? <FaMoon /> : <FaSun />}
              </span>
            </span>
          </button>
          <button
            className="text-xl text-slate-700 dark:text-slate-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <ul className="flex flex-col items-center gap-6 py-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-700 dark:text-slate-200 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}