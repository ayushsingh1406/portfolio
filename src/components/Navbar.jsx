import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold tracking-tight text-slate-900"
        >
          Ayush <span className="text-blue-600">Kumar Singh</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-slate-700 font-medium">

          {navLinks.map((link, index) => (
            <li key={index} className="relative group">

              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-blue-600"
              >
                {link.name}
              </a>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

            </li>
          ))}

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96" : "max-h-0"
          }`}
      >

        <ul className="flex flex-col items-center gap-6 py-6 bg-white border-t border-slate-200">

          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-700 font-medium hover:text-blue-600 transition"
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