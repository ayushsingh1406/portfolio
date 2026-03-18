import Reveal from "./Reveal";
import { FaGraduationCap, FaBriefcase, FaStar } from "react-icons/fa";

const timelineData = [
	{
		icon: <FaGraduationCap className="text-blue-500 dark:text-blue-300" size={24} />,
		title: "Graduated B.Tech (CSE)",
		date: "2025",
		description: "Completed my B.Tech in Computer Science & Engineering with a focus on Machine Learning and Software Engineering.",
	},
	{
		icon: <FaBriefcase className="text-fuchsia-500 dark:text-fuchsia-300" size={24} />,
		title: "Internship at TechCorp",
		date: "2024",
		description: "Worked as a Full Stack Developer Intern, building scalable web applications using React, Node.js, and Tailwind CSS.",
	},
	{
		icon: <FaStar className="text-yellow-500 dark:text-yellow-300" size={24} />,
		title: "Open Source Contributor",
		date: "2023",
		description: "Contributed to open source projects, collaborating with global teams and improving codebases in JavaScript and Python.",
	},
	// Add more timeline events as needed
];

export default function Timeline() {
	return (
		<section id="timeline" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 text-slate-900 dark:text-slate-100">
			<Reveal>
				<div className="mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">Timeline</h2>
					<div className="w-16 h-1 bg-blue-600 rounded"></div>
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
