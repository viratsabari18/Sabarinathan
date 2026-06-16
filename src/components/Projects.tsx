// Projects.tsx - Updated with stunning store buttons
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
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    
                    {/* Store Buttons - Premium Design */}
                    {(project.playStore || project.appStore) && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {project.playStore && (
                          <motion.a
                            href={project.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group/btn relative inline-flex items-center gap-3 px-5 py-2.5 rounded-xl overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
                          >
                            {/* Animated shine effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                            
                            {/* Icon with glow */}
                            <span className="relative">
                              <i className="fab fa-google-play text-lg"></i>
                              <span className="absolute inset-0 blur-md bg-green-400/50 rounded-full"></span>
                            </span>
                            
                            <span className="relative flex flex-col items-start">
                              <span className="text-[10px] opacity-80 leading-none">GET IT ON</span>
                              <span className="text-sm leading-none font-bold">Google Play</span>
                            </span>
                            
                            {/* Decorative dots */}
                            <span className="absolute top-1 right-1 flex gap-0.5">
                              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                            </span>
                          </motion.a>
                        )}

                        {project.appStore && (
                          <motion.a
                            href={project.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group/btn relative inline-flex items-center gap-3 px-5 py-2.5 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                          >
                            {/* Animated shine effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                            
                            {/* Icon with glow */}
                            <span className="relative">
                              <i className="fab fa-apple text-xl"></i>
                              <span className="absolute inset-0 blur-md bg-blue-400/50 rounded-full"></span>
                            </span>
                            
                            <span className="relative flex flex-col items-start">
                              <span className="text-[10px] opacity-80 leading-none">DOWNLOAD ON THE</span>
                              <span className="text-sm leading-none font-bold">App Store</span>
                            </span>
                            
                            {/* Decorative dots */}
                            <span className="absolute top-1 right-1 flex gap-0.5">
                              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                            </span>
                          </motion.a>
                        )}
                      </div>
                    )}
                  </div>
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

                {/* Tools Used - Enhanced Design */}
                <div className="flex flex-wrap gap-2">
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

                {/* Live Status Badge - Shows if app is published */}
                {(project.playStore || project.appStore) && (
                  <div className="mt-4 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-green-400 font-medium">Live on Stores</span>
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
