import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa"
import Reveal from "./Reveal"

export default function Certificates() {

    const certificates = [
        {
            title: "Deep Learning",
            issuer: "NPTEL",
            year: "2025",
            file: "/certificates/deep_learning.pdf",
            logo: "/logos/nptel.png"
        },
        {
            title: "Data Structures and Algorithms",
            issuer: "NeoColab",
            year: "2024",
            file: "/certificates/dsa.pdf",
            logo: "/logos/neocolab.png"
        },
        {
            title: "DSA with C++",
            issuer: "Splen",
            year: "2025",
            file: "/certificates/dsa_pep.pdf",
            logo: "/logos/splen.jpg"
        }
    ]
    return (
        <section id="certificates" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
            <Reveal>
                <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-300">Certifications</p>
                    <h2 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Professional Credentials & Achievements</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <a key={index} href={cert.file} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-indigo-900/30 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center">
                                    <img src={cert.logo} alt={cert.issuer} className="h-8 w-8 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-300">{cert.issuer}</p>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between text-slate-600 dark:text-slate-300">
                                <span className="text-xs">Year: {cert.year}</span>
                                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-300">View</span>
                            </div>
                        </a>
                    ))}
                </div>
            </Reveal>
        </section>
    )
}