import {
    FaReact,
    FaPython,
    FaHtml5,
    FaJava,
    FaCss3Alt,
    FaGitAlt,
    FaNodeJs,
    FaDocker,
    FaLinux
} from "react-icons/fa"

import {
    SiCplusplus,
    SiJavascript,
    SiTailwindcss,
    SiDjango,
    SiTensorflow,
    SiPytorch,
    SiNumpy,
    SiPandas,
    SiScikitlearn,
    SiFastapi,
    SiPostgresql,
    SiMongodb,
    SiJupyter,
    SiPostman
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"

import Reveal from "./Reveal"

export default function Skills() {

    const skillGroups = [

        {
            title: "Languages",
            skills: [
                { name: "C++", icon: <SiCplusplus size={28} color="#00599C" />, link: "https://learn.microsoft.com/en-us/cpp/" },
                { name: "Python", icon: <FaPython size={28} color="#3776AB" />, link: "https://www.python.org/" },
                { name: "Java", icon: <FaJava size={28} color="#f89820" />, link: "https://www.oracle.com/java/" },
                { name: "JavaScript", icon: <SiJavascript size={28} color="#F7DF1E" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
            ]
        },

        {
            title: "Frontend",
            skills: [
                { name: "React", icon: <FaReact size={28} color="#61DAFB" />, link: "https://react.dev/" },
                { name: "HTML", icon: <FaHtml5 size={28} color="#E34F26" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                { name: "CSS", icon: <FaCss3Alt size={28} color="#1572B6" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                { name: "Tailwind", icon: <SiTailwindcss size={28} color="#06B6D4" />, link: "https://tailwindcss.com/" }
            ]
        },

        {
            title: "Backend",
            skills: [
                { name: "Django", icon: <SiDjango size={28} color="#092E20" />, link: "https://www.djangoproject.com/" },
                { name: "FastAPI", icon: <SiFastapi size={28} color="#009688" />, link: "https://fastapi.tiangolo.com/" },
                { name: "Node.js", icon: <FaNodeJs size={28} color="#3C873A" />, link: "https://nodejs.org/" }
            ]
        },

        {
            title: "Machine Learning",
            skills: [
                { name: "NumPy", icon: <SiNumpy size={28} color="#013243" />, link: "https://numpy.org/" },
                { name: "Pandas", icon: <SiPandas size={28} color="#150458" />, link: "https://pandas.pydata.org/" },
                { name: "Scikit-Learn", icon: <SiScikitlearn size={28} color="#F7931E" />, link: "https://scikit-learn.org/" },
                { name: "TensorFlow", icon: <SiTensorflow size={28} color="#FF6F00" />, link: "https://www.tensorflow.org/" },
                { name: "PyTorch", icon: <SiPytorch size={28} color="#EE4C2C" />, link: "https://pytorch.org/" },
                { name: "Jupyter", icon: <SiJupyter size={28} color="#F37626" />, link: "https://jupyter.org/" }
            ]
        },

        {
            title: "Databases",
            skills: [
                { name: "PostgreSQL", icon: <SiPostgresql size={28} color="#336791" />, link: "https://www.postgresql.org/" },
                { name: "MongoDB", icon: <SiMongodb size={28} color="#47A248" />, link: "https://www.mongodb.com/" }
            ]
        },

        {
            title: "Tools",
            skills: [
                { name: "Git", icon: <FaGitAlt size={28} color="#F05032" />, link: "https://git-scm.com/" },
                { name: "Docker", icon: <FaDocker size={28} color="#2496ED" />, link: "https://www.docker.com/" },
                { name: "Linux", icon: <FaLinux size={28} color="#FCC624" />, link: "https://www.linux.org/" },
                { name: "Postman", icon: <SiPostman size={28} color="#FF6C37" />, link: "https://www.postman.com/" },
                { name: "VS Code", icon: <VscVscode size={28} color="#007ACC" />, link: "https://code.visualstudio.com/" }
            ]
        }

    ]

    return (

        <section
            id="skills"
            className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-white"
        >

            <Reveal>

                <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#993131] dark:text-cyan-400">Skills</p>
                    <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#10304A] dark:text-white">Technologies & Tools I Use</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {skillGroups.map((group, i) => (

                        <div
                            key={i}
                            className="
relative
overflow-hidden
rounded-[2rem]
p-8
border border-white/40 dark:border-white/10
bg-white/60 dark:bg-slate-900/50
backdrop-blur-xl
shadow-xl shadow-indigo-500/5 dark:shadow-black/40
transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/10 hover:-translate-y-1
"
                        >

                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_60%)]"></div>

                            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                                {group.title}
                            </h3>


                            <div className="flex flex-col gap-4">

                                {group.skills.map((skill, idx) => (

                                    <a
                                        key={idx}
                                        href={skill.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
flex items-center gap-4
p-3
rounded-xl
bg-slate-100/50 dark:bg-slate-800/50
hover:bg-white dark:hover:bg-slate-700
transition-all duration-300
cursor-pointer
group
"
                                    >

                                        <div className="
w-10 h-10
rounded-lg
bg-white dark:bg-slate-900
shadow-sm
group-hover:scale-110 transition-transform duration-300
">
                                            {skill.icon}
                                        </div>

                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                                            {skill.name}
                                        </p>

                                    </a>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </Reveal>

        </section>

    )

}