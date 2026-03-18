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
		icon: <FaGraduationCap className="text-blue-500 dark:text-blue-300" size={24} />,
		title: "Joined LPU",
		date: "2023",
		description:
			"Started my B.Tech (CSE) journey at Lovely Professional University with a strong focus on building a solid foundation in technology.",
	},
	{
		icon: <FaCode className="text-green-500 dark:text-green-300" size={24} />,
		title: "Semester 1 – Programming Foundations",
		date: "Aug 2023 - Dec 2023",
		description:
			"Learned core programming concepts and the importance of problem solving. Worked with Python, HTML, CSS, and JavaScript to build basic applications.",
	},
	{
		icon: <FaDatabase className="text-orange-500 dark:text-orange-300" size={24} />,
		title: "Semester 2 – Core CS & Development",
		date: "Jan 2024 - May 2024",
		description:
			"Started programming in C, studied DBMS and software development principles, and began understanding full stack development requirements.",
	},
	{
		icon: <FaProjectDiagram className="text-purple-500 dark:text-purple-300" size={24} />,
		title: "Semester 3 – DSA & C++",
		date: "Aug 2024 - Dec 2024",
		description:
			"Focused on Data Structures and Algorithms using C++, improving problem-solving skills and preparing for technical interviews.",
	},
	{
		icon: <FaBrain className="text-pink-500 dark:text-pink-300" size={24} />,
		title: "Semester 4 – Machine Learning & React",
		date: "Jan 2025 - May 2025",
		description:
			"Explored Machine Learning concepts including supervised learning and AI fundamentals, while also practicing frontend development using React.",
	},
	{
		icon: <FaCertificate className="text-yellow-500 dark:text-yellow-300" size={24} />,
		title: "NPTEL Deep Learning Course",
		date: "Apr 2025",
		description:
			"Completed a certified Deep Learning course by IIT Kharagpur through NPTEL, gaining knowledge of neural networks and advanced ML concepts.",
	},
	{
		icon: <FaLaptopCode className="text-indigo-500 dark:text-indigo-300" size={24} />,
		title: "Summer Training – DSA with C++",
		date: "June 2025 - July 2025",
		description:
			"Completed intensive DSA training with C++ at SPlen Technologies, strengthening algorithmic thinking and coding efficiency.",
	},
	{
		icon: <FaBrain className="text-teal-500 dark:text-teal-300" size={24} />,
		title: "Semester 5 – Advanced ML & NLP",
		date: "Sep 2025 - Jan 2026",
		description:
			"Focused on unsupervised learning, NLP, and worked extensively with Python libraries including Pandas, NumPy, Scikit-learn, and TensorFlow.",
	},
	{
		icon: <FaBriefcase className="text-fuchsia-500 dark:text-fuchsia-300" size={24} />,
		title: "Winter Training – Django & DRF",
		date: "Feb 2026",
		description:
			"Completed backend development training with Django and Django REST Framework at AlgoTutor, building scalable APIs and web applications.",
	},
	{
		icon: <FaStar className="text-cyan-500 dark:text-cyan-300" size={24} />,
		title: "Semester 6 – Ongoing & Beyond",
		date: "Feb 2026 - Present",
		description:
			"Currently continuing my journey in Computer Science, actively exploring advanced Machine Learning, system design, and full stack development. Constantly learning, building, and evolving to become a better engineer every day.",
	},
];

export default function Timeline() {
	return (
		<section id="timeline" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-slate-100">
			<Reveal>
				<div className="mb-8">
					<p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-300">Timeline</p>
					<h2 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Milestones & Growth Over Time</h2>
				</div>

				<div className="relative border-l-4 border-gradient-to-b from-blue-400 via-fuchsia-400 to-yellow-300 dark:from-blue-700 dark:via-fuchsia-700 dark:to-yellow-500 pl-8">
					{timelineData.map((item, idx) => (
						<Reveal key={idx}>
							<div className="mb-12 flex items-start group">
								<div className="absolute -left-7 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-lg border-4 border-gradient-to-br from-blue-400 via-fuchsia-400 to-yellow-300 dark:from-blue-700 dark:via-fuchsia-700 dark:to-yellow-500">
									{item.icon}
								</div>
								<div className="ml-8">
									<h3 className="text-2xl font-semibold mb-1 text-slate-900 dark:text-slate-100 group-hover:text-gradient transition">
										{item.title}
									</h3>
									<span className="block text-sm font-medium text-blue-500 dark:text-blue-300 mb-2">{item.date}</span>
									<p className="text-slate-600 dark:text-slate-300 max-w-xl">
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
