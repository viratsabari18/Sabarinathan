// components/Navbar.tsx - Updated with full width Gmail & GitHub
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const personalInfo = {
  linkedin: "sabarinathan-s-aaa86437b",
  email: "sabarivirat2@gmail.com",
  phone: "+91 93458 02937",
  github: "viratsabari18"
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = links.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        if (section) {
          const offsetTop = section.offsetTop
          const height = section.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleClick(e: React.MouseEvent, id: string) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      setActiveSection(id)
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Magical Email Solutions
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      fallbackCopyTextToClipboard(personalInfo.email)
    }
  }

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea")
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    document.body.removeChild(textArea)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openGmailCompose = () => {
    const subject = encodeURIComponent("Portfolio Inquiry - Let's Work Together!")
    const body = encodeURIComponent(`Hello Sabarinathan,\n\nI came across your portfolio and would like to discuss potential opportunities.\n\nBest regards,`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`, '_blank')
  }

  const showEmailMagic = () => {
    setShowEmailPopup(true)
    setTimeout(() => setShowEmailPopup(false), 3000)
  }

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a 
              href="#home"
              onClick={(e) => handleClick(e, 'home')}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <i className="fas fa-code text-blue-400"></i>
              </motion.div>
              <span>SABARINATHAN</span>
            </motion.a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-xl -z-10 border border-blue-500/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Magical Social Links */}
            <div className="flex items-center space-x-3">
              {/* LinkedIn */}
              <motion.a
                href={`https://www.linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors group relative"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <i className="fab fa-linkedin text-lg"></i>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors group relative"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <i className="fab fa-github text-lg"></i>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </div>
              </motion.a>

              {/* Magical Email Button */}
              <motion.div className="relative">
                <motion.button
                  onClick={showEmailMagic}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors group relative"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    animate={{ rotate: copied ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="fas fa-envelope text-lg"></i>
                  </motion.div>
                  
                  {/* Email Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 bg-cyan-400 rounded-full opacity-20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 3 }}
                  />
                  
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {copied ? 'Copied!' : 'Get Email'}
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Magical Email Popup */}
      <AnimatePresence>
        {showEmailPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="fixed top-20 right-6 z-50 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-6 max-w-sm"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            
            <div className="text-center space-y-4">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center space-x-2 mb-2"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <i className="fas fa-envelope-open-text text-white text-lg"></i>
                </div>
                <h3 className="text-white font-bold text-lg">Let's Connect!</h3>
              </motion.div>

              {/* Email Display */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-700/50 rounded-xl p-4 border border-slate-600"
              >
                <p className="text-gray-400 text-sm mb-2">Email Address</p>
                <div className="flex items-center justify-between">
                  <code className="text-cyan-300 font-mono text-lg">{personalInfo.email}</code>
                  <motion.button
                    onClick={copyEmailToClipboard}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 transition-colors"
                  >
                    <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} text-sm`}></i>
                  </motion.button>
                </div>
              </motion.div>

              {/* Action Buttons - Full Width Gmail */}
              <div className="w-full space-y-3">
                <motion.button
                  onClick={openGmailCompose}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl text-white font-semibold text-sm hover:shadow-lg hover:shadow-red-500/25 transition-all flex items-center justify-center space-x-2"
                >
                  <i className="fab fa-google text-lg"></i>
                  <span className="text-base">Open Gmail</span>
                </motion.button>
              </div>

              {/* Additional Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-3 border-t border-slate-700/50"
              >
                <p className="text-gray-400 text-xs mb-2">Prefer other methods?</p>
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={`https://www.linkedin.com/in/${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition-colors"
                  >
                    <i className="fab fa-linkedin-in text-xs"></i>
                  </motion.a>
                  
                  <motion.a
                    href={`https://github.com/${personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-gray-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-500/30 transition-colors"
                  >
                    <i className="fab fa-github text-xs"></i>
                  </motion.a>
                </div>
              </motion.div>

              {/* Success Message */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1"
                  >
                    <i className="fas fa-check"></i>
                    <span>Copied to clipboard!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Close Button */}
            <motion.button
              onClick={() => setShowEmailPopup(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-times text-xs"></i>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Notification */}
      <AnimatePresence>
        {copied && !showEmailPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: -20 }}
            exit={{ opacity: 0, y: 20, x: -20 }}
            className="fixed top-20 right-6 z-50 bg-green-500 text-white px-4 py-2 rounded-xl shadow-2xl flex items-center space-x-2"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
              <i className="fas fa-check"></i>
            </motion.div>
            <span className="text-sm font-semibold">Email copied!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}