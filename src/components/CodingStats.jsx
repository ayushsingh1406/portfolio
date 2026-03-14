import { GitHubCalendar } from "react-github-calendar"
import Reveal from "./Reveal"

export default function CodingStats() {
    return (
        <section
            id="coding"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-24 scroll-mt-24 text-slate-900 dark:text-slate-100"
        >
            <Reveal>
                <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">Coding Activity</h2>
                        <div className="w-16 h-1 bg-blue-600 rounded"></div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
                        Check my GitHub streak and real-time coding snapshots across repositories and challenges.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg dark:shadow-black/20">
                        <div className="flex items-start justify-between gap-3 mb-4">
                            <div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-300">GitHub</p>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Contributions</h3>
                            </div>
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 text-xs font-semibold px-2 py-1">
                                Live
                            </span>
                        </div>
                        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-600">
                            <GitHubCalendar
                                username="ayushsingh1406"
                                blockSize={14}
                                blockMargin={4}
                                fontSize={12}
                            />
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg dark:shadow-black/20">
                        <div className="mb-4">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-300">LeetCode</p>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Problem Solving Stats</h3>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-2">
                            <img
                                src="https://leetcard.jacoblin.cool/ayushsingh06"
                                alt="LeetCode Stats"
                                className="w-full h-auto"
                            />
                        </div>
                        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                            Real-time profile card with solved problems, acceptance rates, and rating improvements.
                        </p>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}