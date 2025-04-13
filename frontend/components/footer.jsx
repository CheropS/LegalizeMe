"use client"

import React, { useState } from 'react'
import { Facebook, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('https://legalizeme.onrender.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()
      if (response.ok) {
        setMessage('Thank you for subscribing!')
        setEmail('')
      } else {
        setMessage(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-black text-white py-6 sm:py-8 font-montserrat overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* News Subscription */}
        <div className="flex flex-col items-center border-b border-gray-600 pb-6 mb-6">
          <div className="mb-4 sm:mb-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Mail className="h-5 w-5 text-blue-400" />
              <h2 className="text-base sm:text-lg font-semibold">Get the latest news and updates</h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md">Stay up-to-date with the latest happenings. Subscribe to our newsletter.</p>
          </div>
          <form onSubmit={handleSubscribe} className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-lg bg-black/50 backdrop-blur-sm border border-white/50 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 hover:border-white/20 text-sm"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <button
                type="submit"
                className="relative group w-full sm:w-auto inline-flex items-center justify-center rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                disabled={isSubmitting}
              >
                <div className="absolute -inset-0.5 rounded-lg opacity-25 group-hover:opacity-50 transition-duration-1000 group-hover:duration-200" />
                <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 backdrop-blur-sm text-white transition-all duration-300 hover:text-blue-400 border border-white/10 rounded-lg px-4 sm:px-6 py-2 flex items-center font-medium text-sm">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    'Subscribe'
                  )}
                </div>
              </button>
            </div>
            {message && (
              <p className={`mt-2 text-xs sm:text-sm text-center ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
          </form>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and description */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <Link href="/" className="text-lg sm:text-xl font-bold">LegalizeMe</Link>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">Bringing you the latest in tech and innovation. Join us on the journey.</p>
            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100069216433282" className="text-gray-400 hover:text-[#2A538D] transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://x.com/Legalizee_Me" className="text-gray-400 hover:text-[#2A538D] transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div className="text-center sm:text-left">
            <h3 className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold">Support</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li><Link href="/pricing" className="hover:underline text-xs sm:text-sm text-gray-400 hover:text-[#2A538D]">Pricing</Link></li>
              <li><Link href="/feedback" className="hover:underline text-xs sm:text-sm text-gray-400 hover:text-[#2A538D]">Feedback</Link></li>
              <li><Link href="/docs" className="hover:underline text-xs sm:text-sm text-gray-400 hover:text-[#2A538D]">Documentation</Link></li>
              <li><Link href="/resources" className="hover:underline text-xs sm:text-sm text-gray-400 hover:text-[#2A538D]">Resources</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="text-center sm:text-left">
            <h3 className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold">Company</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li><Link href="/about" className="hover:underline text-xs sm:text-sm text-gray-400 hover:text-[#2A538D]">About</Link></li>
              <li><Link href="/counsel" className="hover:underline text-xs sm:text-sm text-gray-400 hover:text-[#2A538D]">Counsel</Link></li>
              <li><Link href="/terms" className="hover:underline text-xs sm:text-sm text-gray-400 hover:text-[#2A538D]">Terms of Service</Link></li>
              <li><Link href="/data-governance" className="hover:underline text-xs sm:text-sm text-gray-400 hover:text-[#2A538D]">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h3 className="mb-4 sm:mb-6 text-xs sm:text-sm font-semibold">Contact us</h3>
            <ul className="space-y-2 sm:space-y-4">
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <a href="mailto:info.support@legalizeme.site" className="text-xs sm:text-sm text-gray-400 hover:text-[#2A538D] transition-colors">
                  info.support@legalizeme.site
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <span className="text-xs sm:text-sm text-gray-400 hover:text-[#2A538D]">Eldoret East View Elgon Road</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} LegalizeMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}