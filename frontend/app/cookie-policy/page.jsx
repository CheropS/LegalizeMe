"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-gray-300 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">What Are Cookies</h2>
                <p className="text-gray-300 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and provide a better user experience.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">How We Use Cookies</h2>
                <p className="text-gray-300 mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Essential cookies: Required for the website to function properly</li>
                  <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                  <li>Preference cookies: Remember your settings and preferences</li>
                  <li>Marketing cookies: Used to track visitors across websites</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">1. Essential Cookies</h3>
                    <p className="text-gray-300">
                      These cookies are necessary for the website to function and cannot be switched off. 
                      They are usually only set in response to actions made by you.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">2. Analytics Cookies</h3>
                    <p className="text-gray-300">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">3. Preference Cookies</h3>
                    <p className="text-gray-300">
                      These cookies enable the website to provide enhanced functionality and personalization.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">4. Marketing Cookies</h3>
                    <p className="text-gray-300">
                      These cookies are used to track visitors across websites to display relevant advertisements.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
                <p className="text-gray-300 mb-4">
                  You can manage your cookie preferences through your browser settings. 
                  Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>See what cookies are stored on your device</li>
                  <li>Block all or some cookies</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="text-gray-300">
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about our Cookie Policy, please contact us at{' '}
                  <a href="mailto:info@legalizeme.com" className="text-blue-400 hover:text-blue-300">
                    info@legalizeme.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 