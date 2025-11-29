// components/Contact.tsx - Complete Working Version
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ref, push } from 'firebase/database'
import { db } from '../firebase/firebase.config.js'
import emailjs from 'emailjs-com'

// ✅ YOUR ACTUAL CREDENTIALS
const EMAILJS_CONFIG = {
  serviceId: 'service_v3d7z39',
  templateId: 'template_nrj8kjv', 
  userId: 'KP3fHJ_hXK_eoORsM'
}

export default function Contact({ personal }: {personal: any}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const sendEmailNotification = async (data: any) => {
    try {
      const templateParams = {
        to_name: 'Sabarinathan',
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        reply_to: data.email,
        timestamp: new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      console.log('📧 Attempting to send email...')
      console.log('🔑 Using credentials:', {
        serviceId: EMAILJS_CONFIG.serviceId,
        templateId: EMAILJS_CONFIG.templateId,
        userId: EMAILJS_CONFIG.userId.substring(0, 10) + '...' // Hide full key in logs
      })

      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.userId
      )

      console.log('✅ Email sent successfully! Status:', response.status)
      console.log('📨 Response:', response)
      return { success: true, response }
    } catch (error: any) {
      console.error('❌ Email sending failed!')
      console.error('Error details:', error)
      if (error.text) {
        console.error('Error message:', error.text)
      }
      return { success: false, error }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      console.log('🚀 Starting form submission process...')

      // 1. Save to Firebase
      console.log('💾 Saving to Firebase...')
      const messageRef = ref(db, 'messages')
      await push(messageRef, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
        read: false
      })

      console.log('✅ Message saved to Firebase')

      // 2. Send email notification
      console.log('📨 Sending email notification...')
      const emailResult = await sendEmailNotification(formData)
      
      if (emailResult.success) {
        console.log('🎉 Success! Both Firebase and Email worked')
        setSubmitStatus('success')
      } else {
        console.log('⚠️ Message saved to Firebase but email failed')
        setSubmitStatus('success') // Still show success to user
      }

      // Reset form
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 4 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 4000)
      
    } catch (error) {
      console.error('💥 Form submission failed:', error)
      setSubmitStatus('error')
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Professional success animation
  const MessageJourney = () => (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1, 0] }}
        transition={{ duration: 2, times: [0, 0.3, 0.7, 1] }}
      >
        <motion.div
          className="text-4xl"
          initial={{ rotate: -45 }}
          animate={{ 
            rotate: [-45, 0, 45],
            x: [-300, 0, 300],
            y: [200, 0, -200]
          }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          ✉️
        </motion.div>
        
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-full"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>
    </div>
  )

  // Professional particle effect
  const SuccessParticles = () => {
    const particles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      angle: (i * 45) * (Math.PI / 180),
      distance: 60
    }))

    return (
      <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            initial={{ 
              scale: 0,
              x: 0,
              y: 0,
              opacity: 0
            }}
            animate={{ 
              scale: [0, 1, 0],
              x: Math.cos(particle.angle) * particle.distance,
              y: Math.sin(particle.angle) * particle.distance,
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 1.2,
              delay: 0.5
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <>
      {/* Professional Magical Effects */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <>
            <MessageJourney />
            <SuccessParticles />
          </>
        )}
      </AnimatePresence>

      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 to-cyan-500/5 rounded-3xl transform -rotate-1"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll get back to you!
            </p>

            {/* Contact Methods */}
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className="fas fa-envelope text-white"></i>
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href={`mailto:${personal.email}`} 
                    className="text-white font-medium hover:text-blue-400 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className="fas fa-phone text-white"></i>
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a 
                    href={`tel:${personal.phone}`} 
                    className="text-white font-medium hover:text-cyan-400 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className="fas fa-map-marker-alt text-white"></i>
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">{personal.address}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 pt-4">
              <motion.a
                href={`https://www.linkedin.com/in/sabarinathan-s-aaa86437b`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin text-white"></i>
              </motion.a>
              <motion.a
                href="https://github.com/Sabari1689"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center hover:bg-slate-600 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github text-white"></i>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-3xl p-8 backdrop-blur-sm border border-slate-700 relative overflow-hidden"
          >
            {/* Subtle animated background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-cyan-500/3"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            {/* Status Messages */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl text-green-400"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      <i className="fas fa-check-circle text-lg"></i>
                    </motion.div>
                    <div>
                      <p className="font-semibold">Message Sent Successfully!</p>
                      <p className="text-sm opacity-90">I'll respond within 24 hours</p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl text-red-400"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ x: [0, -2, 2, -2, 2, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <i className="fas fa-exclamation-circle text-lg"></i>
                    </motion.div>
                    <div>
                      <p className="font-semibold">Delivery Failed</p>
                      <p className="text-sm opacity-90">Please try again or email directly</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <i className="fas fa-user mr-2 text-blue-400"></i>
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter your name"
                  whileFocus={{ 
                    scale: 1.01,
                    borderColor: "rgb(59, 130, 246)",
                  }}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <i className="fas fa-envelope mr-2 text-cyan-400"></i>
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter your email"
                  whileFocus={{ 
                    scale: 1.01,
                    borderColor: "rgb(6, 182, 212)",
                  }}
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  <i className="fas fa-comment mr-2 text-blue-400"></i>
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  whileFocus={{ 
                    scale: 1.01,
                    borderColor: "rgb(59, 130, 246)",
                  }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                whileHover={!isSubmitting ? { 
                  scale: 1.01,
                  boxShadow: "0 8px 25px -5px rgba(59, 130, 246, 0.3)"
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.995 } : {}}
              >
                <div className="relative z-10 flex items-center justify-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Delivering Message...</span>
                    </>
                  ) : (
                    <>
                      <motion.i 
                        className="fas fa-paper-plane"
                        whileHover={{ translateY: -1 }}
                      />
                      <span>Send Message</span>
                    </>
                  )}
                </div>

                {/* Loading bar animation */}
                {isSubmitting && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-white/30"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                )}

                {/* Subtle hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

           
       
            </form>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}