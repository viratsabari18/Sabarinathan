// Projects.tsx - Multiple Store Button Design Options
import React from 'react'
import { motion } from 'framer-motion'

export default function Projects({ items }: {items: any[]}) {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 rounded-3xl transform -skew-y-2"></div>
      
      <div className="relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {items.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Project Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-8">
                {/* Project Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>

                {/* Project Description */}
                <ul className="space-y-3 mb-6">
                  {project.points.map((point: string, i: number) => (
                    <motion.li 
                      key={i}
                      className="flex items-start space-x-3 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-blue-500/50"></div>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools?.map((tool: string, i: number) => (
                    <motion.span
                      key={i}
                      whileHover={{ 
                        scale: 1.08, 
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        borderColor: "rgba(59, 130, 246, 0.5)"
                      }}
                      className="px-3 py-1.5 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-slate-600 transition-all duration-300 cursor-default backdrop-blur-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                      {tool}
                    </motion.span>
                  ))}
                </div>

                {/* ===== STORE BUTTONS - CHOOSE YOUR STYLE ===== */}
                
                {/* 
                  OPTION 1: Full Width Stacked Buttons (Clean & Bold)
                  Uncomment this and comment out the other options
                */}
                /* {(project.playStore || project.appStore) && (
                  <div className="flex flex-col gap-3">
                    {project.playStore && (
                      <motion.a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 relative overflow-hidden group/btn"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
                        <i className="fab fa-google-play text-2xl"></i>
                        <span>Available on Google Play</span>
                        <i className="fas fa-arrow-right opacity-0 group-hover/btn:opacity-100 transform translate-x-[-10px] group-hover/btn:translate-x-0 transition-all duration-300"></i>
                      </motion.a>
                    )}
                    {project.appStore && (
                      <motion.a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 relative overflow-hidden group/btn"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
                        <i className="fab fa-apple text-2xl"></i>
                        <span>Available on the App Store</span>
                        <i className="fas fa-arrow-right opacity-0 group-hover/btn:opacity-100 transform translate-x-[-10px] group-hover/btn:translate-x-0 transition-all duration-300"></i>
                      </motion.a>
                    )}
                  </div>
                )} */


                {/* 
                  OPTION 2: Side-by-Side Pill Buttons (Modern & Compact)
                  Uncomment this and comment out the other options
                */}
                {{(project.playStore || project.appStore) && (
                  <div className="flex flex-wrap gap-3">
                    {project.playStore && (
                      <motion.a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-black/40 backdrop-blur-sm border border-green-500/30 hover:border-green-500 text-white font-medium transition-all duration-300 group/btn relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                        <i className="fab fa-google-play text-green-400 text-xl group-hover/btn:scale-110 transition-transform duration-300"></i>
                        <span className="text-sm">Play Store</span>
                        <span className="absolute -right-8 -top-8 w-16 h-16 bg-green-500/20 rounded-full blur-2xl group-hover/btn:scale-150 transition-transform duration-500"></span>
                      </motion.a>
                    )}
                    {project.appStore && (
                      <motion.a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, rotate: [1, -1, 0] }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-black/40 backdrop-blur-sm border border-blue-500/30 hover:border-blue-500 text-white font-medium transition-all duration-300 group/btn relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                        <i className="fab fa-apple text-blue-400 text-xl group-hover/btn:scale-110 transition-transform duration-300"></i>
                        <span className="text-sm">App Store</span>
                        <span className="absolute -left-8 -bottom-8 w-16 h-16 bg-blue-500/20 rounded-full blur-2xl group-hover/btn:scale-150 transition-transform duration-500"></span>
                      </motion.a>
                    )}
                  </div>
                )} 


                {/* 
                  OPTION 3: Card-Style Buttons with Badge (Premium & Informative)
                  Uncomment this and comment out the other options
                */}
                { {(project.playStore || project.appStore) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.playStore && (
                      <motion.a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 group/btn overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/25 group-hover/btn:shadow-green-500/50 transition-all duration-300">
                            <i className="fab fa-google-play text-white text-xl"></i>
                          </div>
                          <div>
                            <div className="text-xs text-green-400 font-medium">⭐ Available on</div>
                            <div className="text-white font-bold">Google Play</div>
                          </div>
                          <i className="fas fa-chevron-right text-green-400 ml-auto opacity-0 group-hover/btn:opacity-100 transform translate-x-[-10px] group-hover/btn:translate-x-0 transition-all duration-300"></i>
                        </div>
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-green-500/20 rounded-full blur-2xl group-hover/btn:scale-150 transition-transform duration-500"></div>
                      </motion.a>
                    )}
                    {project.appStore && (
                      <motion.a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group/btn overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover/btn:shadow-blue-500/50 transition-all duration-300">
                            <i className="fab fa-apple text-white text-xl"></i>
                          </div>
                          <div>
                            <div className="text-xs text-blue-400 font-medium">📱 Available on</div>
                            <div className="text-white font-bold">App Store</div>
                          </div>
                          <i className="fas fa-chevron-right text-blue-400 ml-auto opacity-0 group-hover/btn:opacity-100 transform translate-x-[-10px] group-hover/btn:translate-x-0 transition-all duration-300"></i>
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover/btn:scale-150 transition-transform duration-500"></div>
                      </motion.a>
                    )}
                  </div>
                )} }

                {/* Live Status Badge */}
                {(project.playStore || project.appStore) && (
                  <div className="mt-4 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-green-400 font-medium">Live on {project.playStore && project.appStore ? 'Play Store & App Store' : project.playStore ? 'Play Store' : 'App Store'}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
