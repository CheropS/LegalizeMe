"use client"

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const links = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'View pricing', href: '/pricing' },
  { name: 'Feedback', href: '/feedback' },
]

const stats = [
  { name: 'Targeted Users', value: '2000+' },
  { name: 'Documents generated daily', value: '50+' },
  { name: 'Time saved per week', value: '15 hours' },
]

const carouselImages = [
  {
    src: '/innovation.jpg',
    title: 'Where Law Meets Innovation',
    description: <>We're evolving to deliver smarter legal solutions for legal professionals, researchers, students, and business founders. For inquiries, details, or personalized support, reach out to us anytime at{' '}
      <a href="mailto:info.support@legalizeme.site" className="text-blue-300 hover:text-blue-200 transition-colors">
        info.support@legalizeme.site
      </a>{' '}
      by clicking the links below.</>
  },
  {
    src: '/justice.jpg',
    title: 'Lubricating the Wheels of Justice',
    description: "Breaking down barriers to make legal services available to everyone, everywhere. Get in touch with us for more information and support."
  },
  {
    src: '/technology.jpg',
    title: 'Powered by AI',
    description: "Leveraging cutting-edge technology to transform the legal landscape. Get in touch with us for more information and support."
  },
  {
    src: '/community.jpg',
    title: 'Building Community',
    description: "Join a growing community of legal professionals and innovators shaping the future of law. Explore our platform and get legal insights and assistance today."
  }
]

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying, isHovered])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 px-4 font-montserrat">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative isolate overflow-hidden rounded-2xl bg-gray-900"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setIsAutoPlaying(true)
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="relative h-[600px] w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                alt={carouselImages[currentSlide].title}
                src={carouselImages[currentSlide].src}
                fill
                sizes="100vw"
                quality={100}
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
                priority
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/50 z-0"></div>

              {/* Content */}
              <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg"
                  >
                    {carouselImages[currentSlide].title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 text-lg leading-8 text-gray-100 drop-shadow-md"
                  >
                    {carouselImages[currentSlide].description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
                >
                  <div className="grid grid-cols-1 gap-y-4 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                    {links.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="group flex items-center gap-2 hover:text-purple-400 transition-colors drop-shadow-md"
                      >
                        {link.name}
                        <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </motion.a>
                    ))}
                  </div>

                  <dl className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat) => (
                      <motion.div
                        key={stat.name}
                        className="flex flex-col gap-y-3 border-l-2 border-white/20 pl-6 drop-shadow-md"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                        <dt className="text-base leading-6 text-gray-300">{stat.name}</dt>
                      </motion.div>
                    ))}
                  </dl>
                </motion.div>
              </div>

              {/* Carousel Controls */}
              <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all duration-300"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Banner