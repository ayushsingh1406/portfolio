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
className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-slate-100"
>

<Reveal>

<div className="mb-16">

<h2 className="text-4xl font-bold mb-2">
Technical Skills
</h2>

<div className="w-20 h-1 bg-blue-600 rounded"></div>

</div>


<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{skillGroups.map((group, i) => (

<div
key={i}
className="
relative
overflow-hidden
rounded-2xl
p-6
border border-slate-200/70 dark:border-slate-700/70
bg-gradient-to-br
from-white via-slate-50 to-slate-100
dark:from-slate-900 dark:via-slate-900 dark:to-slate-800
shadow-lg shadow-slate-200/60 dark:shadow-black/40
transition duration-300 hover:shadow-2xl
"
>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_60%)]"></div>

<h3 className="text-lg font-semibold mb-6 text-slate-800 dark:text-slate-200">
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
flex items-center gap-3
p-3
rounded-lg
bg-slate-100 dark:bg-slate-800
hover:bg-slate-200 dark:hover:bg-slate-700
transition
cursor-pointer
"
>

<div className="
flex items-center justify-center
w-10 h-10
rounded-md
bg-white dark:bg-slate-900
shadow-sm
">
{skill.icon}
</div>

<p className="text-sm font-medium">
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