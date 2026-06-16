// components/Skills.tsx - Improved version
import React from 'react'
import { motion } from 'framer-motion'

const skillIcons: { [key: string]: string } = {
  'Flutter': 'fas fa-mobile-screen',
  'Dart': 'fas fa-code',
  'Android': 'fab fa-android',
  'iOS': 'fab fa-apple',

  'Firebase': 'fas fa-fire',
  'Firestore': 'fas fa-database',
  'GraphQL': 'fas fa-diagram-project',
  'REST APIs': 'fas fa-cloud-arrow-up',

  'Bloc': 'fas fa-layer-group',
  'Provider': 'fas fa-share-nodes',
  'GetX': 'fas fa-bolt',
  'Riverpod': 'fas fa-water',
  'Redux': 'fas fa-code-branch',

  'Hive': 'fas fa-box-archive',
  'Keycloak': 'fas fa-key',
  'JWT': 'fas fa-shield-halved',

  'Clean Architecture': 'fas fa-sitemap',
  'MVVM': 'fas fa-cubes',
  'Repository Pattern': 'fas fa-folder-tree',

  'React.js': 'fab fa-react',
  'Node.js': 'fab fa-node-js',
  'Go': 'fas fa-gears',
  'JavaScript': 'fab fa-js',
  'SQL': 'fas fa-database',
  'MongoDB': 'fas fa-leaf'
}

const toolIcons: { [key: string]: string } = {
  // Source Control
  'Git': 'fab fa-git-alt',
  'GitHub Actions': 'fab fa-github',

  // IDEs
  'Android Studio': 'fab fa-android',
  'VS Code': 'fas fa-code',

  // API Tools
  'Postman': 'fas fa-paper-plane',
  'Bruno': 'fas fa-rocket',

  // Deployment
  'Google Play Console': 'fab fa-google-play',

  // Database / Admin
  'PgAdmin': 'fas fa-database',

  // Diagramming
  'Draw.io': 'fas fa-diagram-project',

  // Optional extras
  'Firebase': 'fas fa-fire',
  'Keycloak': 'fas fa-key',
  'GraphQL': 'fas fa-circle-nodes'
}

export default function Skills({ skills, tools }: {skills: string[], tools: string[]}) {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-cyan-500/5 rounded-3xl transform rotate-1"></div>
      
      <div className="relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <i className="fas fa-tools mr-4"></i>
          Skills & Technologies
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <i className="fas fa-laptop-code mr-3 text-blue-400"></i>
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative p-4 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform">
                      <i className={`${skillIcons[skill] || 'fas fa-code'} text-white text-lg`}></i>
                    </div>
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <i className="fas fa-toolbox mr-3 text-cyan-400"></i>
              Development Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative p-4 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform">
                      <i className={`${toolIcons[tool] || 'fas fa-toolbox'} text-white text-lg`}></i>
                    </div>
                    <span className="text-white font-medium">{tool}</span>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expertise Areas - Clean Design */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Expertise Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
    name: 'Mobile Development',
    icon: 'mobile-alt',
    description:
      'Building scalable Android and iOS applications using Flutter, focusing on responsive UI, performance optimization, and seamless user experiences.'
  },
  {
    name: 'State Management & Architecture',
    icon: 'layer-group',
    description:
      'Implementing Bloc, Provider, GetX, and Riverpod with Clean Architecture, MVVM, and Repository Pattern for maintainable applications.'
  },
  {
    name: 'Backend & API Integration',
    icon: 'server',
    description:
      'Integrating REST APIs, GraphQL, Firebase, Firestore, authentication systems, and offline-first synchronization for production-ready apps.'
  }
         
            ].map((area, i) => (
              <motion.div
                key={i}
                className="text-center p-8 bg-slate-800/50 rounded-3xl border border-slate-700 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`fas fa-${area.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-white font-bold text-xl mb-4">{area.name}</h4>
                <p className="text-gray-300 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
