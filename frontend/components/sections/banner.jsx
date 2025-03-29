"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

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

const Banner = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-500 font-montserrat">
      <div className="relative h-full w-full">
        <Image
          alt="Innovation background"
          src="/innovation.jpg"
          fill
          sizes="100vw"
          quality={100}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
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
              Where Law Meets Innovation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-gray-100 drop-shadow-md"
            >
              We're evolving to deliver smarter legal solutions for legal professionals, researchers, students, and business founders. There's something for everyone.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 text-base leading-7 text-gray-300 drop-shadow-md"
            >
              For inquiries, details, or personalized support, reach out to us anytime at{' '}
              <a href="mailto:info.support@legalizeme.site" className="text-blue-300 hover:text-blue-200 transition-colors font-medium">
                info.support@legalizeme.site
              </a>
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
      </div>
    </div>
  )
}

export default Banner