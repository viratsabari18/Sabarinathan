// Projects.tsx - Updated with blue theme and store buttons
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
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    
                    {/* Store Buttons - Live App Links */}
                    {(project.playStore || project.appStore) && (
                      <div className="flex gap-3 mt-3">
                        {project.playStore && (
                          <a
                            href={project.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white transition-all duration-300 text-sm font-medium"
                          >
                            <i className="fab fa-google-play"></i>
                            Play Store
                          </a>
                        )}

                        {project.appStore && (
                          <a
                            href={project.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-all duration-300 text-sm font-medium"
                          >
                            <i className="fab fa-apple"></i>
                            App Store
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  {/* Optional: You can uncomment this for a link icon */}
                  {/* <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <i className="fas fa-external-link-alt text-white"></i>
                  </motion.div> */}
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
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((tool: string, i: number) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-slate-600"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                    >
                      <i className="fas fa-code mr-2 text-blue-400"></i>
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
