"use client"

import { motion } from 'framer-motion'

export default function InstallationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-white">Installation Guide</h1>
        
        <div className="p-4 border-l-4 border-blue-500 bg-black/20 backdrop-blur-sm mb-8">
          <p className="text-sm text-gray-300">
            Follow this guide to install and configure LegalizeMe in your development environment.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">System Requirements</h2>
        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg mb-8 border border-white/10">
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Node.js 14.x or higher</li>
            <li>npm 6.x or higher or yarn 1.22.x or higher</li>
            <li>Modern web browser (Chrome, Firefox, Safari, or Edge)</li>
            <li>Minimum 2GB RAM for development</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Installation Methods</h2>
        
        <h3 className="text-xl font-semibold mb-4 text-white">1. NPM Installation</h3>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
          <pre className="text-gray-300">
            <code>npm install legalizeme-sdk</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-white">2. Yarn Installation</h3>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
          <pre className="text-gray-300">
            <code>yarn add legalizeme-sdk</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-white">3. CDN Installation</h3>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
          <pre className="text-gray-300">
            <code>{`<script src="https://cdn.legalizeme.site/sdk/latest.js"></script>`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Configuration</h2>
        <p className="text-gray-300 mb-4">
          After installation, you'll need to configure your environment:
        </p>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
          <pre className="text-gray-300">
            <code>{`// Initialize the SDK
import { LegalizeMe } from 'legalizeme-sdk';

const client = new LegalizeMe({
  apiKey: process.env.LEGALIZEME_API_KEY,
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  options: {
    timeout: 30000,
    retries: 3
  }
});`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Environment Variables</h2>
        <p className="text-gray-300 mb-4">
          Create a .env file in your project root with the following variables:
        </p>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
          <pre className="text-gray-300">
            <code>{`LEGALIZEME_API_KEY=your_api_key_here
LEGALIZEME_ENVIRONMENT=development
LEGALIZEME_API_URL=https://api.legalizeme.site/v1`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Verification</h2>
        <p className="text-gray-300 mb-4">
          Verify your installation by running a test request:
        </p>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
          <pre className="text-gray-300">
            <code>{`try {
  const status = await client.system.healthCheck();
  console.log('Installation successful:', status);
} catch (error) {
  console.error('Installation verification failed:', error);
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Troubleshooting</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Common Issues</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>API key not recognized - Verify your API key in the dashboard</li>
              <li>Connection timeout - Check your network settings</li>
              <li>Version conflicts - Ensure all dependencies are up to date</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
          <ul className="space-y-2 text-gray-300">
            <li>→ <a href="/docs/quick-start" className="text-blue-400 hover:text-blue-300">Follow our Quick Start guide</a></li>
            <li>→ <a href="/docs/api/authentication" className="text-blue-400 hover:text-blue-300">Learn about authentication</a></li>
            <li>→ <a href="/docs/features/document-generation" className="text-blue-400 hover:text-blue-300">Explore document generation</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 