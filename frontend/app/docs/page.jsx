"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    title: 'Document Generation',
    description: 'Automate the creation of legal documents with our powerful AI-driven templates.',
    href: '/docs/features/document-generation'
  },
  {
    title: 'Legal Research',
    description: 'Access comprehensive legal databases and get AI-powered insights.',
    href: '/docs/features/legal-research'
  },
  {
    title: 'Case Management',
    description: 'Streamline your case workflow with our intuitive management tools.',
    href: '/docs/features/case-management'
  }
]

export default function DocsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-6">LegalizeMe Documentation</h1>
        
        <div className="p-4 border-l-4 border-blue-500 bg-blue-50 mb-8">
          <p className="text-sm text-blue-900">
            Welcome to the LegalizeMe documentation. Here you'll find comprehensive guides and documentation to help you start working with our platform as quickly as possible.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="text-gray-300 mb-6">
          LegalizeMe is a comprehensive legal technology platform that helps legal professionals, researchers, and business founders streamline their legal processes. Our platform combines AI-powered tools with intuitive interfaces to make legal work more efficient.
        </p>

        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group block p-6 bg-black/20 backdrop-blur-sm rounded-lg hover:bg-black/30 transition-all duration-300 border border-white/10"
            >
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </Link>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-300">
          <li>A valid LegalizeMe account</li>
          <li>Basic understanding of legal terminology</li>
          <li>Modern web browser (Chrome, Firefox, Safari, or Edge)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
        <div className="space-y-4 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">1</span>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-white">Create an Account</h4>
              <p className="text-gray-300">Sign up for a LegalizeMe account to access all features.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">2</span>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-white">Set Up Your Profile</h4>
              <p className="text-gray-300">Complete your profile with professional information.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">3</span>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-white">Explore Features</h4>
              <p className="text-gray-300">Familiarize yourself with our core features and tools.</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
          <p className="text-gray-300 mb-4">
            If you can't find what you're looking for in the documentation, you can:
          </p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Join our <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">community forum</a></li>
            <li>Contact our <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">support team</a></li>
            <li>Check our <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">FAQ section</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 