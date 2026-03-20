import Reveal from "./Reveal";
import {
	FaGraduationCap,
	FaBriefcase,
	FaCode,
	FaDatabase,
	FaProjectDiagram,
	FaBrain,
	FaCertificate,
	FaLaptopCode,
	FaStar,
} from "react-icons/fa";

const timelineData = [
	{
		icon: <FaGraduationCap className="text-blue-500 dark:text-cyan-400" size={24} />,
		hoverColor: "group-hover:text-blue-600 dark:group-hover:text-cyan-400",
		title: "Joined LPU",
		date: "2023",
		description:
			"Started my B.Tech (CSE) journey at Lovely Professional University with a strong focus on building a solid foundation in technology.",
	},
	{
		icon: <FaCode className="text-green-500 dark:text-green-400" size={24} />,
		hoverColor: "group-hover:text-green-600 dark:group-hover:text-green-400",
		title: "Semester 1 – Programming Foundations",
		date: "Aug 2023 - Dec 2023",
		description:
			"Learned core programming concepts and the importance of problem solving. Worked with Python, HTML, CSS, and JavaScript to build basic applications.",
	},
	{
		icon: <FaDatabase className="text-orange-500 dark:text-orange-400" size={24} />,
		hoverColor: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
		title: "Semester 2 – Core CS & Development",
		date: "Jan 2024 - May 2024",
		description:
			"Started programming in C, studied DBMS and software development principles, and began understanding full stack development requirements.",
	},
	{
		icon: <FaProjectDiagram className="text-purple-500 dark:text-purple-400" size={24} />,
		hoverColor: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
		title: "Semester 3 – DSA & C++",
		date: "Aug 2024 - Dec 2024",
		description:
			"Focused on Data Structures and Algorithms using C++, improving problem-solving skills and preparing for technical interviews.",
	},
	{
		icon: <FaBrain className="text-red-500 dark:text-red-400" size={24} />,
		hoverColor: "group-hover:text-red-600 dark:group-hover:text-red-400",
		title: "Semester 4 – Machine Learning & React",
		date: "Jan 2025 - May 2025",
		description:
			"Explored Machine Learning concepts including supervised learning and AI fundamentals, while also practicing frontend development using React.",
	},
	{
		icon: <FaCertificate className="text-yellow-500 dark:text-yellow-400" size={24} />,
		hoverColor: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
		title: "NPTEL Deep Learning Course",
		date: "Apr 2025",
		description:
			"Completed a certified Deep Learning course by IIT Kharagpur through NPTEL, gaining knowledge of neural networks and advanced ML concepts.",
	},
	{
		icon: <FaLaptopCode className="text-indigo-500 dark:text-indigo-400" size={24} />,
		hoverColor: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
		title: "Summer Training – DSA with C++",
		date: "June 2025 - July 2025",
		description:
			"Completed intensive DSA training with C++ at Splen Technologies, strengthening algorithmic thinking and coding efficiency.",
	},
	{
		icon: <FaBrain className="text-pink-500 dark:text-pink-400" size={24} />,
		hoverColor: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
		title: "Semester 5 – Advanced ML & NLP",
		date: "Sep 2025 - Jan 2026",
		description:
			"Focused on unsupervised learning, NLP, and worked extensively with Python libraries including Pandas, NumPy, Scikit-learn, and TensorFlow.",
	},
	{
		icon: <FaBriefcase className="text-teal-500 dark:text-teal-400" size={24} />,
		hoverColor: "group-hover:text-teal-600 dark:group-hover:text-teal-400",
		title: "Winter Training – Django & DRF",
		date: "Feb 2026",
		description:
			"Completed backend development training with Django and Django REST Framework at AlgoTutor, building scalable APIs and web applications.",
	},
	{
		icon: <FaStar className="text-emerald-500 dark:text-emerald-400" size={24} />,
		hoverColor: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
		title: "Semester 6 – Ongoing & Beyond",
		date: "Feb 2026 - Present",
		description:
			"Currently continuing my journey in Computer Science, actively exploring advanced Machine Learning, system design, and full stack development. Constantly learning, building, and evolving to become a better engineer every day.",
	},
];

export default function Timeline() {
	return (
		<section id="timeline" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-white">
			<Reveal>
				<div className="mb-8">
					<p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#993131] dark:text-cyan-400">Timeline</p>
					<h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#10304A] dark:text-white">Milestones & Growth Over Time</h2>
				</div>

				<div className="relative border-l-2 border-[#993131] dark:border-cyan-400 pl-8 ml-4 md:ml-0">
					{timelineData.map((item, idx) => (
						<Reveal key={idx}>
							<div className="mb-12 flex items-start group">
								<div className="absolute -left-[30px] flex items-center justify-center w-14 h-14 rounded-full bg-[#E2D0B6] dark:bg-slate-950 shadow-[0_0_20px_rgba(153,49,49,0.3)] dark:shadow-none border-[3px] border-[#993131] dark:border-cyan-400 transition-transform duration-500 group-hover:scale-110">
									{item.icon}
								</div>
								<div className="ml-8">
									<h3 className={`text-2xl font-bold mb-1 text-slate-900 dark:text-white ${item.hoverColor} transition-colors`}>
										{item.title}
									</h3>
									<span className="block text-sm font-semibold tracking-wider text-blue-600 dark:text-cyan-500 mb-3">{item.date}</span>
									<p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl font-light">
										{item.description}
									</p>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</Reveal>
		</section>
	);
}
