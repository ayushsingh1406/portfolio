import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} <span className="font-medium text-slate-700">Ayush K. Singh</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">

          <a
            href="https://github.com/ayushsingh1406"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300"
          >
            <FaGithub size={18} className="group-hover:scale-110 transition" />
          </a>

          <a
            href="https://linkedin.com/in/ayushsingh1406"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-blue-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
          >
            <FaLinkedin size={18} className="group-hover:scale-110 transition" />
          </a>

        </div>

      </div>

    </footer>
  )
}