"use client"

import { motion } from 'framer-motion'
import ApiPlayground from '@/components/ApiPlayground'

export default function ApiPlaygroundPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">API Playground</h1>
        <p className="mt-4 text-gray-300">
          Test and explore our API endpoints in real-time. The playground provides a safe environment to experiment with different requests and see the responses.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black/20 backdrop-blur-sm rounded-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Try It Out</h2>
        <ApiPlayground />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-black/20 backdrop-blur-sm rounded-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Tips & Tricks</h2>
        <ul className="space-y-4 text-gray-300">
          <li>
            <span className="font-semibold text-white">Authentication:</span> The playground automatically includes your API key in the requests.
          </li>
          <li>
            <span className="font-semibold text-white">Rate Limits:</span> Requests made in the playground count towards your API rate limits.
          </li>
          <li>
            <span className="font-semibold text-white">Response Format:</span> All responses are formatted for readability with proper indentation.
          </li>
          <li>
            <span className="font-semibold text-white">Error Handling:</span> The playground provides detailed error messages when something goes wrong.
          </li>
        </ul>
      </motion.div>
    </div>
  )
} 