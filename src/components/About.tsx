// About.tsx - Updated with profile image and blue theme
import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'

export default function About({ summary, personal }: {summary: string, personal: any}) {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl -rotate-1 transform"></div>
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
            
            {/* Main image container - Original Design */}
            <div className="relative bg-slate-800 rounded-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-1">
                <div className="bg-slate-900 rounded-2xl p-4 flex items-center justify-center h-80 overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt={personal.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            {summary}
          </motion.p>

          {/* Contact Info Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-phone text-blue-400"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium">{personal.phone}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-envelope text-cyan-400"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">{personal.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-blue-400"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">{personal.address}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700">
              <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                <i className="fas fa-briefcase text-cyan-400"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400">Profession</p>
                <p className="text-white font-medium">{personal.title}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}