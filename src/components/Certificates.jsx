import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa"

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
        <section
            id="certificates"
            className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24"
        >

            {/* Section Header */}
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-slate-900 mb-2">
                    Certificates
                </h2>
                <div className="w-16 h-1 bg-blue-600 rounded"></div>
            </div>


            {/* Certificates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                {certificates.map((cert, index) => (

                    <a
                        key={index}
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >

                        {/* Icon */}
                        <div className="flex items-center justify-center w-14 h-14 bg-slate-50 rounded-lg mb-4 group-hover:scale-110 transition">
                            <img
                                src={cert.logo}
                                alt={cert.issuer}
                                className="w-full h-full object-contain p-2"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">
                            {cert.title}
                        </h3>


                        {/* Issuer */}
                        <p className="text-slate-600 text-sm">
                            {cert.issuer}
                        </p>


                        {/* Year */}
                        <p className="text-xs text-slate-500 mt-1 mb-4">
                            {cert.year}
                        </p>


                        {/* View indicator */}
                        <div className="flex items-center gap-2 text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">
                            View Certificate
                            <FaExternalLinkAlt size={12} />
                        </div>

                    </a>

                ))}

            </div>

        </section>
    )
}