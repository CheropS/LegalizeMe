"use client"

import { motion } from 'framer-motion'

export default function RateLimitsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-white">Rate Limits</h1>
        
        <div className="p-4 border-l-4 border-blue-500 bg-black/20 backdrop-blur-sm mb-8">
          <p className="text-sm text-gray-300">
            Learn about LegalizeMe's API rate limits and how to handle them in your applications.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
        <p className="text-gray-300 mb-6">
          LegalizeMe implements rate limits to ensure fair usage of our API and maintain service quality for all users. Rate limits are applied on a per-API key basis.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">Rate Limit Tiers</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full">
            <thead className="bg-black/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Requests per Minute</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Burst Limit</th>
              </tr>
            </thead>
            <tbody className="bg-black/10 divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Free</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">60</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">100</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Pro</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">300</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">500</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Enterprise</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Custom</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Custom</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Rate Limit Headers</h2>
        <p className="text-gray-300 mb-4">
          Every API response includes headers with rate limit information:
        </p>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
          <pre className="text-sm text-gray-300">
            <code>{`X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1625097600`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Handling Rate Limits</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Best Practices</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Implement exponential backoff when hitting rate limits</li>
              <li>Cache responses when possible to reduce API calls</li>
              <li>Monitor your rate limit usage through response headers</li>
              <li>Consider implementing a queue system for high-volume applications</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Example: Implementing Backoff</h2>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg mb-6">
          <pre className="text-sm text-gray-300">
            <code>{`async function makeRequest(url, options = {}, retryCount = 0) {
  try {
    const response = await fetch(url, options);
    
    if (response.status === 429) {
      const resetTime = parseInt(response.headers.get('X-RateLimit-Reset'));
      const waitTime = Math.max(resetTime - Date.now() / 1000, 0);
      
      if (retryCount < 3) {
        await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
        return makeRequest(url, options, retryCount + 1);
      }
    }
    
    return response;
  } catch (error) {
    throw error;
  }
}`}</code>
          </pre>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
          <ul className="space-y-2 text-gray-300">
            <li>→ <a href="/docs/api/authentication" className="text-blue-400 hover:text-blue-300">Learn about authentication</a></li>
            <li>→ <a href="/docs/api/endpoints" className="text-blue-400 hover:text-blue-300">Explore API endpoints</a></li>
            <li>→ <a href="/docs/guides/best-practices" className="text-blue-400 hover:text-blue-300">Review best practices</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 