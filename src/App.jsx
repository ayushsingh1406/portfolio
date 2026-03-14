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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-sky-100 to-indigo-100 text-slate-900 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900 dark:text-slate-100 transition-all duration-500 overflow-x-hidden">
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />

      {animating && (
        <div className="fixed inset-0 z-[999] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-slate-900/20 dark:bg-white/20 backdrop-blur-sm"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className={`absolute h-64 w-64 rounded-full ${animationDirection === "light-to-dark" ? "bg-gradient-to-br from-blue-300 via-indigo-400 to-slate-700" : "bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400"} opacity-90 blur-2xl animate-theme-glow`} />
              <div className="relative h-28 w-28 flex items-center justify-center text-5xl animate-pop">
                {animationDirection === "light-to-dark" ? "🌙" : "☀"}
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingStats />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App