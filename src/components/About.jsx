
export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24"
    >

      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">
          About Me
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded"></div>
      </div>


      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT TEXT CONTENT */}
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">

          <p>
            I’m a <span className="font-semibold text-slate-800">Computer Science and Engineering student </span> 
            specializing in <span className="font-semibold text-blue-600">Machine Learning</span> with a strong 
            interest in building practical software and solving real-world problems through technology.
          </p>

          <p>
            My experience includes programming with <span className="font-medium text-slate-800">C++, Python, and JavaScript</span>, 
            and working with technologies such as <span className="font-medium text-slate-800">React, HTML, CSS, Tailwind CSS, and Django</span>.
            I enjoy learning by building projects, exploring new tools, and strengthening my understanding of 
            data structures, algorithms, and modern software development practices.
          </p>

          <p>
            I enjoy challenging problems, improving my skills step by step, and building things that create 
            real value. I'm always looking for opportunities to grow, collaborate with talented people, 
            and contribute to meaningful projects as I continue developing my career in software engineering.
          </p>

        </div>


        {/* RIGHT INFO CARDS */}
        <div className="grid gap-6">

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-slate-900 mb-2">
              Education
            </h3>
            <p className="text-slate-600">
              B.Tech in Computer Science & Engineering  
              <br />
              Specialization: Machine Learning
              <br />
              Status: Ongoing
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-slate-900 mb-2">
              Interests
            </h3>
            <p className="text-slate-600">
              Software Development, Machine Learning,
              Full Stack Development and Problem Solving
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-slate-900 mb-2">
              Current Focus
            </h3>
            <p className="text-slate-600">
              Full-stack development, backend engineering,
              and building practical real-world applications
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}