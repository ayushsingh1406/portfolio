import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa"
import Reveal from "./Reveal"

export default function Certificates() {

    const certificates = [
        {
            title: "Deep Learning",
            issuer: "IIT Ropar",
            year: "2025",
            file: "/certificates/deep_learning.pdf",
            logo: "/logos/iitropar.png"
        },
        {
            title: "DSA with C++",
            issuer: "Splen",
            year: "2025",
            file: "/certificates/dsa_pep.pdf",
            logo: "/logos/splen.jpg"
        },
        {
            title: "Computational Theory",
            issuer: "Infosys",
            year: "2025",
            file: "/certificates/ct.pdf",
            logo: "/logos/infosys.png"
        },
        {
            title: "Java",
            issuer: "NeoColab",
            year: "2025",
            file: "/certificates/java.pdf",
            logo: "/logos/neocolab.png"
        },
        {
            title: "Data Structures and Algorithms",
            issuer: "NeoColab",
            year: "2024",
            file: "/certificates/dsa.pdf",
            logo: "/logos/neocolab.png"
        },
        {
            title: "C++",
            issuer: "NeoColab",
            year: "2024",
            file: "/certificates/cpp.pdf",
            logo: "/logos/neocolab.png"
        },
        {
            title: "Computer Communications",
            issuer: "University of Colorado",
            year: "2024",
            file: "/certificates/ccs.pdf",
            logo: "/logos/CU.png"
        },
        {
            title: "Full Stack Development",
            issuer: "Board Infinity",
            year: "2024",
            file: "/certificates/fsd.jpg",
            logo: "/logos/Board.png"
        },
        {
            title: "Network Communications",
            issuer: "University of Colorado",
            year: "2024",
            file: "/certificates/fonc.pdf",
            logo: "/logos/CU.png"
        },
        {
            title: "Hardware and Operating Systems",
            issuer: "IBM",
            year: "2024",
            file: "/certificates/hos.pdf",
            logo: "/logos/IBM.png"
        },
        {
            title: "Machine Learning",
            issuer: "Board Infinity",
            year: "2024",
            file: "/certificates/ML.png",
            logo: "/logos/Board.png"
        },
        {
            title: "Python",
            issuer: "HackerRank",
            year: "2023",
            file: "/certificates/python.pdf",
            logo: "/logos/hr.jpg"
        }
    ]
    return (
        <section id="certificates" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-white">
            <Reveal>
                <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#993131] dark:text-cyan-400">Certifications</p>
                    <h2 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-display">Professional Credentials & Achievements</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <a key={index} href={cert.file} target="_blank" rel="noopener noreferrer" className="group rounded-[2rem] border border-white/40 dark:border-white/10 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl p-6 shadow-xl shadow-indigo-500/5 dark:shadow-black/40 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-500">
                            <div className="flex items-center gap-3">
                                <div className="h-14 w-14 rounded-xl bg-slate-100/70 dark:bg-slate-800/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <img src={cert.logo} alt={cert.issuer} className="h-8 w-8 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#993131] dark:group-hover:text-[#0d96ab] transition-colors font-display">{cert.title}</h3>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                                </div>
                            </div>
                            <div className="mt-5 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between text-slate-600 dark:text-slate-400">
                                <span className="text-xs font-semibold tracking-wider">Year: {cert.year}</span>
                                <span className="text-xs font-bold text-[#993131] dark:text-[#0d96ab] flex items-center gap-1 group-hover:gap-2 transition-all">View <FaExternalLinkAlt className="text-[10px]" /></span>
                            </div>
                        </a>
                    ))}
                </div>
            </Reveal>
        </section>
    )
}