import { GitHubCalendar } from "react-github-calendar"

export default function CodingStats() {
  return (
    <section
      id="coding"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24"
    >

      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">
          Coding Activity
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded"></div>
      </div>


      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-10">

        {/* GitHub */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm overflow-x-auto">

          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            GitHub Contributions
          </h3>

          <GitHubCalendar
            username="ayushsingh1406"
            blockSize={14}
            blockMargin={5}
            fontSize={14}
          />

        </div>


        {/* LeetCode */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-center">

          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            LeetCode Profile
          </h3>

          <img
            src="https://leetcard.jacoblin.cool/ayushsingh06"
            alt="LeetCode Stats"
            className="w-full"
          />

        </div>

      </div>

    </section>
  )
}