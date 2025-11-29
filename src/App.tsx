// App.tsx - Fixed with no white flash and removed footer border
import React, { useState, useEffect } from 'react'
import portfolioDataDefault from './data/portfolioData'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

export default function App() {
  const [data] = useState(portfolioDataDefault)
  const [isLoading, setIsLoading] = useState(true)

  // Fix for white flash on mobile
  useEffect(() => {
    // Prevent white flash by ensuring background is applied immediately
    document.documentElement.style.background = '#0f1729'
    document.documentElement.style.overflowX = 'hidden'
    
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Function to open resume in new window
  const openResume = () => {
    window.open('/src/assets/RESUME_SABARI.pdf', '_blank', 'noopener,noreferrer')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Preload background fix */}
      <style>
        {`
          html, body {
            background: #0f1729;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
      
      <Navbar />
      
      <main className="relative">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-slate-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 space-y-20 py-16">
          {/* Home Section - Creative Design */}
          <section id="home" className="pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="relative z-10">
                    <motion.h1 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4"
                    >
                      {data.personalInfo.name.split(' ')[0]}
                    </motion.h1>
                    <motion.h2
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-lg sm:text-xl lg:text-2xl text-blue-400 mb-4"
                    >
                      Mobile App Developer
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed"
                    >
                      {data.homeSummary}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="flex gap-3 sm:gap-4 flex-wrap"
                    >
                      <button 
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:scale-105 transition-transform text-white shadow-lg text-sm sm:text-base"
                      >
                        View Projects
                      </button>
                      <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-4 sm:px-6 py-2 sm:py-3 border border-blue-600 rounded-full font-semibold hover:bg-blue-600/10 transition-colors text-blue-300 hover:text-blue-200 text-sm sm:text-base"
                      >
                        Contact Me
                      </button>
                      {/* Resume Download Button */}
                      <button 
                        onClick={openResume}
                        className="px-4 sm:px-6 py-2 sm:py-3 border border-green-600 rounded-full font-semibold hover:bg-green-600/10 transition-colors flex items-center gap-2 text-green-300 hover:text-green-200 text-sm sm:text-base"
                      >
                        <i className="fas fa-download text-xs sm:text-sm"></i>
                        Download Resume
                      </button>
                    </motion.div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative"
                >
                  {/* Creative Code Animation Container */}
                  <div className="relative w-full h-80 sm:h-96 bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-4 sm:p-6 overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-20 right-16 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute bottom-16 left-20 w-5 h-5 bg-green-400 rounded-full animate-pulse delay-500"></div>
                      <div className="absolute bottom-24 right-24 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1500"></div>
                    </div>

                    {/* Floating Code Elements */}
                    <div className="relative z-10 h-full flex flex-col justify-center space-y-3 sm:space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center space-x-2 sm:space-x-3"
                      >
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                        <code className="text-blue-300 font-mono text-xs sm:text-sm">class <span className="text-cyan-300">MobileDeveloper</span></code>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center space-x-2 sm:space-x-3 ml-3 sm:ml-4"
                      >
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                        <code className="text-gray-400 font-mono text-xs sm:text-sm">def <span className="text-green-300">build_app</span>():</code>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center space-x-2 sm:space-x-3 ml-6 sm:ml-8"
                      >
                        <code className="text-purple-300 font-mono text-xs sm:text-sm">return <span className="text-yellow-300">"Amazing UX"</span></code>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 }}
                        className="flex items-center space-x-2 sm:space-x-3 mt-4 sm:mt-6"
                      >
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                        <code className="text-blue-300 font-mono text-xs sm:text-sm">skills = [</code>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="grid grid-cols-2 gap-1 sm:gap-2 ml-6 sm:ml-8"
                      >
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"></div>
                          <code className="text-cyan-300 font-mono text-xs">"Flutter"</code>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                          <code className="text-blue-300 font-mono text-xs">"Dart"</code>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                          <code className="text-green-300 font-mono text-xs">"Firebase"</code>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                          <code className="text-purple-300 font-mono text-xs">"API"</code>
                        </div>
                      </motion.div>

                      {/* Animated cursor */}
                      <motion.div
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8"
                      >
                        <div className="flex items-center space-x-1">
                          <div className="w-1 h-3 sm:h-4 bg-green-400"></div>
                          <span className="text-green-400 text-xs font-mono">Terminal</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Floating icons */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-xl sm:text-2xl">
                      <i className="fab fa-flutter text-blue-400 animate-bounce"></i>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-lg sm:text-xl">
                      <i className="fas fa-mobile-alt text-cyan-400 animate-pulse"></i>
                    </div>
                  </div>

                  {/* 3 Key Points BELOW the creative container */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8"
                  >
                    <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-slate-700 group hover:bg-slate-800/70 transition-all duration-300">
                      <i className="fas fa-mobile-alt text-xl sm:text-2xl text-blue-400 mb-2"></i>
                      <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Flutter Enthusiastic</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">Cross-Platform Development</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                      <i className="fas fa-bolt text-xl sm:text-2xl text-yellow-400 mb-2"></i>
                      <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Fast Performance</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">Optimized & Efficient</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                      <i className="fas fa-palette text-xl sm:text-2xl text-green-400 mb-2"></i>
                      <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">Beautiful UI</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">Modern & Responsive</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          <section id="about">
            <About summary={data.profileSummary} personal={data.personalInfo} />
          </section>

          <section id="projects">
            <Projects items={data.projects} />
          </section>

          <section id="skills">
            <Skills skills={data.skills} tools={data.tools} />
          </section>

          <section id="experience">
            <Experience items={data.experience} />
          </section>

          <section id="contact">
            <Contact personal={data.personalInfo} />
          </section>
        </div>
      </main>
      
      {/* Fixed footer - removed border line */}
      <footer className="relative z-10 text-center py-6 sm:py-8 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm">Built with React, TypeScript, Tailwind & Framer Motion</p>
          <div className="flex justify-center space-x-4 sm:space-x-6 mt-2 sm:mt-3">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-github text-base sm:text-lg"></i>
            </a>
            <a href={`https://www.linkedin.com/in/sabarinathan-s-aaa86437b`} className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-base sm:text-lg"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}