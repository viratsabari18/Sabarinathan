// components/Experience.tsx - Combined Responsive Version
import React from 'react'
import { motion } from 'framer-motion'

export default function Experience({ items }: {items: any[]}) {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl transform -rotate-2"></div>
      
      <div className="relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <i className="fas fa-briefcase mr-4"></i>
          Professional Journey
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Mobile: Single Column Layout */}
          <div className="lg:hidden space-y-8 px-4">
            {items.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline line and dot for mobile */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600">
                  <div className="absolute -left-1.5 top-6 w-3 h-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-slate-900"></div>
                </div>

                {/* Mobile Experience Card */}
                <motion.div 
                  className="ml-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700 hover:border-blue-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="flex flex-col gap-2 mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {exp.position}
                      </h3>
                      <p className="text-blue-400 font-medium text-sm mt-1">
                        <i className="fas fa-building mr-2"></i>
                        {exp.company}
                      </p>
                    </div>
                    <div className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30 whitespace-nowrap self-start">
                      <i className="fas fa-calendar mr-1"></i>
                      {exp.period}
                    </div>
                  </div>
                  
                  {/* Points */}
                  <ul className="space-y-2 mt-3">
                    {exp.points.map((point: string, i: number) => (
                      <motion.li 
                        key={i}
                        className="flex items-start space-x-2 text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}

            {/* Mobile Next Opportunity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-600 to-green-600">
                <div className="absolute -left-1.5 top-6 w-4 h-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full border-4 border-slate-900 flex items-center justify-center">
                  <i className="fas fa-rocket text-white text-xs"></i>
                </div>
              </div>

              <div className="ml-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700 border-dashed">
                <div className="text-center">
                  <i className="fas fa-question-circle text-2xl text-green-400 mb-2"></i>
                  <h3 className="text-lg font-bold text-white mb-2">Next Opportunity</h3>
                  <p className="text-gray-400 mb-3 text-sm">Ready for new challenges and exciting projects</p>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white text-sm font-medium hover:scale-105 transition-transform"
                  >
                    Let's Connect
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Original Horizontal Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline line - Extended to bottom */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-cyan-600 to-blue-600 rounded-full"></div>
            
            <div className="space-y-20">
              {items.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-slate-900 z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-6/12 ${idx % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div 
                      className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-700 hover:border-blue-500/30 transition-all duration-500"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Header with proper spacing */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white leading-tight">
                            {exp.position}
                          </h3>
                          <p className="text-blue-400 font-semibold mt-1 leading-tight">
                            <i className="fas fa-building mr-2"></i>
                            {exp.company}
                          </p>
                        </div>
                        <div className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30 whitespace-nowrap flex-shrink-0 md:mt-0 mt-2">
                          <i className="fas fa-calendar mr-1"></i>
                          {exp.period}
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mt-4">
                        {exp.points.map((point: string, i: number) => (
                          <motion.li 
                            key={i}
                            className="flex items-start space-x-3 text-gray-300"
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed text-sm">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty space with decorative element */}
                  <div className={`w-4/12 ${idx % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-center p-4"
                    >
                      <div className="bg-slate-800/30 rounded-2xl p-4 border border-slate-700/50">
                        <i className="fas fa-code-branch text-3xl text-blue-500/50 mb-2"></i>
                        <p className="text-gray-500 text-xs">
                          {idx % 2 === 0 ? 'Building the future' : 'Creating impact'}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Next Opportunity */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-center pb-20"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full border-4 border-slate-900 z-10 flex items-center justify-center">
                  <i className="fas fa-rocket text-white text-xs"></i>
                </div>
                
                {/* Next Opportunity Card */}
                <div className="w-6/12 pr-8">
                  <motion.div 
                    className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-700 border-dashed"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-center">
                      <i className="fas fa-question-circle text-3xl text-green-400 mb-3"></i>
                      <h3 className="text-lg font-bold text-white mb-2">Next Opportunity</h3>
                      <p className="text-gray-400 mb-3 text-sm">Ready for new challenges and exciting projects</p>
                      <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white text-xs font-medium hover:scale-105 transition-transform"
                      >
                        Let's Connect
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space with decorative element for Next Opportunity */}
                <div className="w-4/12 pl-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center p-4"
                  >
                    <div className="bg-slate-800/30 rounded-2xl p-4 border border-slate-700/50">
                      <i className="fas fa-lightbulb text-3xl text-yellow-500/50 mb-2"></i>
                      <p className="text-gray-500 text-xs">Innovating solutions</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}