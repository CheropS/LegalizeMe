"use client"

import { motion } from 'framer-motion'

export default function QuickStartPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-white">Quick Start Guide</h1>
        
        <div className="p-4 border-l-4 border-blue-500 bg-black/20 backdrop-blur-sm mb-8">
          <p className="text-sm text-gray-300">
            Get up and running with LegalizeMe in less than 10 minutes. This guide will walk you through the basic setup and your first API request.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Installation</h2>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
          <pre className="text-gray-300">
            <code>npm install legalizeme-sdk</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Basic Setup</h2>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
          <pre className="text-gray-300">
            <code>{`import { LegalizeMe } from 'legalizeme-sdk';

const client = new LegalizeMe({
  apiKey: 'your_api_key',
  environment: 'production'
});`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Your First Document</h2>
        <p className="text-gray-300 mb-4">
          Generate your first legal document with just a few lines of code:
        </p>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
          <pre className="text-gray-300">
            <code>{`const document = await client.documents.create({
  template: 'nda',
  data: {
    companyName: 'Your Company',
    effectiveDate: new Date(),
    parties: ['Party A', 'Party B']
  }
});

console.log(document.downloadUrl);`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Explore Templates</h3>
            <p className="text-gray-300">Browse our collection of pre-built legal document templates.</p>
            <a href="/docs/features/document-generation" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
              View Templates →
            </a>
          </div>
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">API Reference</h3>
            <p className="text-gray-300">Dive into our comprehensive API documentation.</p>
            <a href="/docs/api/authentication" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
              View API Docs →
            </a>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Need Help?</h2>
          <p className="text-gray-300 mb-4">
            If you run into any issues during setup, you can:
          </p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Check our <a href="/docs/guides/troubleshooting" className="text-blue-400 hover:text-blue-300">troubleshooting guide</a></li>
            <li>Join our <a href="#" className="text-blue-400 hover:text-blue-300">Discord community</a></li>
            <li>Contact our <a href="#" className="text-blue-400 hover:text-blue-300">support team</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 