import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import Reveal from "./Reveal"

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <Reveal>
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded"></div>
        </div>

        <p className="text-slate-600 text-lg max-w-2xl mb-12">
          Feel free to reach out if you'd like to collaborate, discuss a project,
          or explore opportunities together.
        </p>


        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <a
            href="mailto:ayushsingh1406p@gmail.com"
            className="group bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >

            <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg mb-4 group-hover:scale-110 transition">
              <FaEnvelope size={20} />
            </div>

            <h3 className="font-semibold text-slate-900 mb-1">
              Email
            </h3>

            <p className="text-slate-600 text-sm">
              ayushsingh1406p@gmail.com
            </p>

          </a>


          {/* GitHub */}
          <a
            href="https://github.com/ayushsingh1406"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >

            <div className="w-12 h-12 flex items-center justify-center bg-slate-100 text-slate-800 rounded-lg mb-4 group-hover:scale-110 transition">
              <FaGithub size={20} />
            </div>

            <h3 className="font-semibold text-slate-900 mb-1">
              GitHub
            </h3>

            <p className="text-slate-600 text-sm">
              github.com/ayushsingh1406
            </p>

          </a>


          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/ayushsingh1406"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >

            <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg mb-4 group-hover:scale-110 transition">
              <FaLinkedin size={20} />
            </div>

            <h3 className="font-semibold text-slate-900 mb-1">
              LinkedIn
            </h3>

            <p className="text-slate-600 text-sm">
              linkedin.com/in/ayushsingh1406
            </p>

          </a>

        </div>
      </Reveal>
    </section>
  )
}