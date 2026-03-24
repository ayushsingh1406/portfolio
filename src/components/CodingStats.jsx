import { GitHubCalendar } from "react-github-calendar"
import { useEffect, useState } from "react"
import { FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import Reveal from "./Reveal"

export default function CodingStats() {

    const [blockSize, setBlockSize] = useState(12)

    const [repos, setRepos] = useState(null)
    const [followers, setFollowers] = useState(null)
    const [stars, setStars] = useState(null)

    /* ---------------- GitHub Stats Fetch ---------------- */

    useEffect(() => {

        async function fetchGithubStats() {

            try {

                const userRes = await fetch(
                    "https://api.github.com/users/ayushsingh1406"
                )

                const userData = await userRes.json()

                if (userData.message) {
                    console.error(userData.message)
                    return
                }

                setRepos(userData.public_repos)
                setFollowers(userData.followers)

                let page = 1
                let allRepos = []

                while (true) {

                    const repoRes = await fetch(
                        `https://api.github.com/users/ayushsingh1406/repos?per_page=100&page=${page}`
                    )

                    const repoData = await repoRes.json()

                    if (repoData.length === 0) break

                    allRepos = [...allRepos, ...repoData]

                    page++
                }

                const totalStars = allRepos.reduce(
                    (acc, repo) => acc + repo.stargazers_count,
                    0
                )

                setStars(totalStars)

            } catch (error) {
                console.error("GitHub API error:", error)
            }

        }

        fetchGithubStats()

    }, [])


    /* ---------------- Responsive Calendar ---------------- */

    useEffect(() => {

        function updateBlockSize() {

            if (window.innerWidth < 640) setBlockSize(8)
            else if (window.innerWidth < 1024) setBlockSize(10)
            else setBlockSize(12)

        }

        updateBlockSize()

        window.addEventListener("resize", updateBlockSize)

        return () => window.removeEventListener("resize", updateBlockSize)

    }, [])


    return (

        <section
            id="stats"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-24 scroll-mt-24 text-slate-900 dark:text-white"
        >

            <Reveal>

                {/* Header */}

                <div className="mb-12 flex flex-wrap items-end justify-between gap-4">

                    <div className="mb-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#993131] dark:text-cyan-400">Coding Stats</p>
                        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-display">My Coding Journey & Insights</h2>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                        My development activity across GitHub repositories and competitive programming platforms.
                    </p>

                </div>


                {/* Grid */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


                    {/* ================= GITHUB CARD ================= */}

                    <div className="
                        relative overflow-hidden
                        p-6
                        rounded-2xl
                        border border-truffle-200/70 dark:border-truffleDark-800/70
                        bg-gradient-to-br
                        from-truffle-50 via-truffle-50 to-truffle-100
                        dark:from-truffleDark-950 dark:via-truffleDark-950 dark:to-truffleDark-900
                        shadow-xl shadow-truffle-200/40 dark:shadow-black/40
                        transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                    ">

                        {/* glow */}

                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_60%)]"></div>


                        {/* Header */}

                        <div className="flex justify-between items-center mb-6">

                            <div>

                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                                    GitHub
                                </p>

                                <h3 className="text-2xl font-bold font-display">
                                    Contribution Activity
                                </h3>

                            </div>

                            <span className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-green-100/80 text-green-700 dark:bg-green-900/40 dark:text-green-300 border border-green-200 dark:border-green-800/50 shadow-sm">
                                Live
                            </span>

                        </div>


                        {/* Calendar */}

                        <div className="flex justify-center overflow-x-auto rounded-xl border border-white/50 dark:border-white/10 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm p-5 shadow-inner">

                            <GitHubCalendar
                                username="ayushsingh1406"
                                blockSize={blockSize}
                                blockMargin={3}
                                fontSize={11}

                                transformData={(data) => {
                                    const sixMonthsAgo = new Date()
                                    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 7)

                                    return data.filter(
                                        (day) => new Date(day.date) >= sixMonthsAgo
                                    )
                                }}

                                labels={{
                                    totalCount: "{{count}} contributions in the last 6 months"
                                }}
                            />

                        </div>


                        {/* Stats */}

                        <div className="grid grid-cols-3 gap-4 mt-6 text-center">

                            <div className="rounded-xl bg-slate-100/50 dark:bg-slate-800/50 border border-white/40 dark:border-white/5 backdrop-blur-sm p-4 hover:bg-white dark:hover:bg-slate-700/50 transition-colors">

                                <p className="text-lg font-bold">
                                    {repos !== null ? repos : "..."}
                                </p>

                                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                                    Repos
                                </p>

                            </div>


                            <div className="rounded-xl bg-slate-100/50 dark:bg-slate-800/50 border border-white/40 dark:border-white/5 backdrop-blur-sm p-4 hover:bg-white dark:hover:bg-slate-700/50 transition-colors">

                                <p className="text-lg font-bold">
                                    {followers !== null ? followers : "..."}
                                </p>

                                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                                    Followers
                                </p>

                            </div>


                            <div className="rounded-xl bg-slate-100/50 dark:bg-slate-800/50 border border-white/40 dark:border-white/5 backdrop-blur-sm p-4 hover:bg-white dark:hover:bg-slate-700/50 transition-colors">

                                <p className="text-lg font-bold">
                                    {stars !== null ? stars : "..."}
                                </p>

                                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                                    Stars
                                </p>

                            </div>

                        </div>


                        {/* GitHub Button */}

                        <a
                            href="https://github.com/ayushsingh1406"
                            target="_blank"
                            rel="noreferrer"
                            className="
                            mt-8 inline-flex items-center gap-2
                            px-6 py-3
                            rounded-full
                            text-sm font-semibold
                            bg-slate-900
                            text-white
                            hover:bg-slate-800
                            dark:bg-white
                            dark:text-slate-900
                            dark:hover:bg-slate-200
                            transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5
                            "
                        >

                            <FaGithub className="text-lg" />

                            Visit GitHub Profile

                        </a>

                    </div>


                    {/* ================= LEETCODE CARD ================= */}

                    <div className="
                        relative overflow-hidden
                        p-6
                        rounded-2xl
                        border border-truffle-200/70 dark:border-truffleDark-800/70
                        bg-gradient-to-br
                        from-truffle-50 via-truffle-50 to-truffle-100
                        dark:from-truffleDark-950 dark:via-truffleDark-950 dark:to-truffleDark-900
                        shadow-xl shadow-truffle-200/40 dark:shadow-black/40
                        transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                    ">

                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.15),transparent_60%)]"></div>


                        {/* Header */}

                        <div className="mb-6">

                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                                LeetCode
                            </p>

                            <h3 className="text-2xl font-bold font-display">
                                Problem Solving Stats
                            </h3>

                        </div>


                        {/* LeetCode Card */}

                        <div className="rounded-xl border border-white/50 dark:border-white/10 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm p-4 shadow-inner">

                            <img
                                src="https://leetcard.jacoblin.cool/ayushsingh06?theme=dark&font=baloo&ext=contest"
                                alt="LeetCode Stats"
                                className="w-full rounded-lg"
                            />

                        </div>


                        <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                            Includes solved problems, acceptance rate, and contest ranking.
                        </p>


                        {/* LeetCode Button */}

                        <a
                            href="https://leetcode.com/ayushsingh06/"
                            target="_blank"
                            rel="noreferrer"
                            className="
                            mt-4 inline-flex items-center gap-2
                            px-6 py-3
                            rounded-full
                            text-sm font-semibold
                            bg-yellow-500
                            text-white
                            hover:bg-yellow-600
                            transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5
                            "
                        >

                            <SiLeetcode className="text-lg" />

                            Visit LeetCode Profile

                        </a>

                    </div>


                </div>

            </Reveal>

        </section>

    )
}