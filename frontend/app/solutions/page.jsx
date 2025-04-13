"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Solutions() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Transforming Legal Services with AI-Driven Technology
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We craft innovative solutions designed to meet the unique needs of the legal landscape, empowering individuals and professionals alike.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Create a free account",
                description: "Signup to LegalizeMe and get started with your legal needs. We provide you with the best solutions for your legal needs and business growth.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                title: "Find Solutions",
                description: "Navigate to the cases section and find the best solutions to your legal needs. Get started with your LegalizeMe and explore the best solutions.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                )
              },
              {
                title: "Interact with Counsel",
                description: "Interact with our AI powered chatbot to get instant solutions to your legal needs. Counsel is available 24/7 to help you with your queries.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
                    {feature.icon}
              </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-gray-300">{feature.description}</p>
              </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Explore Our Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              We are committed to providing you with the best solutions for your legal needs and business growth.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "AI-Enhanced Legal Access",
                description: "Tap into trusted legal sources like Kenya Law in real time. Instantly search, summarize, and generate documents—powered by AI for faster, smarter legal work.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                )
              },
              {
                title: "Automated Document Generation",
                description: "Generate customized legal documents in minutes—contracts, agreements, policies, and more. Our system ensures precision and speed.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                )
              },
              {
                title: "Your Legal Ally",
                description: "From drafting documents to navigating legal complexities, we're here to simplify, support, and empower. With expert guidance always available.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
                    {feature.icon}
              </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Trusted by Renowned Companies
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                quote: "LegalizeMe is a game-changer for my team. We've significantly reduced the time spent on documentation, allowing us to focus on growth.",
                author: "Jenny Wilson",
                role: "Project Manager at Microsoft"
              },
              {
                quote: "This platform is so user-friendly. It has simplified my business processes in ways I hadn't thought possible.",
                author: "Robert Fox",
                role: "Founder at Brain.co"
              },
              {
                quote: "Highly recommend LegalizeMe! It's streamlined my daily tasks, freeing up more time to innovate and expand my work.",
                author: "Kristin Watson",
                role: "UX Designer at Google"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10">
                  <blockquote className="text-lg text-gray-300 italic">
                    "{testimonial.quote}"
                </blockquote>
                  <div className="mt-4">
                    <p className="text-base font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}