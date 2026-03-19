import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CodingStats from "./components/CodingStats"
import ScrollProgress from "./components/ScrollProgress"
import Timeline from "./components/timeline"

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false
    const stored = localStorage.getItem("theme")
    if (stored) return stored === "dark"
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches
  })
  const [animating, setAnimating] = useState(false)
  const [animationDirection, setAnimationDirection] = useState("light-to-dark")

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  const toggleTheme = () => {
    setAnimationDirection(isDark ? "dark-to-light" : "light-to-dark")
    setAnimating(true)
    setTimeout(() => {
      setIsDark((prev) => !prev)
      setTimeout(() => setAnimating(false), 200)
    }, 700)
  }

  return (
    <div className={`relative min-h-screen transition-all duration-500 overflow-x-hidden ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-700">
        <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob ${isDark ? 'bg-indigo-600/40' : 'bg-blue-300'}`}></div>
        <div className={`absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-2000 ${isDark ? 'bg-fuchsia-600/40' : 'bg-purple-300'}`}></div>
        <div className={`absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000 ${isDark ? 'bg-cyan-600/40' : 'bg-pink-300'}`}></div>
      </div>

      <div className="relative z-10 w-full h-full">
        <ScrollProgress />
        <Navbar isDark={isDark} onThemeToggle={toggleTheme} />

        {animating && (
          <div className="fixed inset-0 z-[999] overflow-hidden pointer-events-none transition-all">
            <div className="absolute inset-0 bg-slate-900/10 dark:bg-white/5 backdrop-blur-md" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className={`absolute h-64 w-64 rounded-full ${animationDirection === "light-to-dark" ? "bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500" : "bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"} opacity-70 blur-3xl animate-theme-glow`} />
                <div className="relative h-28 w-28 flex items-center justify-center text-6xl animate-pop drop-shadow-2xl">
                  {animationDirection === "light-to-dark" ? "🌙" : "☀"}
                </div>
              </div>
            </div>
          </div>
        )}

        <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline/>
          <CodingStats />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App