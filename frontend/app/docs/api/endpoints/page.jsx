"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

const endpoints = [
  {
    name: 'Documents',
    endpoints: [
      {
        method: 'GET',
        path: '/v1/documents',
        description: 'List all documents',
        parameters: [
          { name: 'limit', type: 'integer', description: 'Number of documents to return (default: 10)' },
          { name: 'offset', type: 'integer', description: 'Number of documents to skip (default: 0)' },
          { name: 'status', type: 'string', description: 'Filter by document status (draft, published, archived)' }
        ]
      },
      {
        method: 'POST',
        path: '/v1/documents',
        description: 'Create a new document',
        parameters: [
          { name: 'template', type: 'string', description: 'Template ID to use' },
          { name: 'data', type: 'object', description: 'Document data to populate template' }
        ]
      },
      {
        method: 'GET',
        path: '/v1/documents/{id}',
        description: 'Get a specific document',
        parameters: [
          { name: 'id', type: 'string', description: 'Document ID' }
        ]
      }
    ]
  },
  {
    name: 'Templates',
    endpoints: [
      {
        method: 'GET',
        path: '/v1/templates',
        description: 'List all templates',
        parameters: [
          { name: 'category', type: 'string', description: 'Filter by template category' }
        ]
      },
      {
        method: 'POST',
        path: '/v1/templates',
        description: 'Create a new template',
        parameters: [
          { name: 'name', type: 'string', description: 'Template name' },
          { name: 'content', type: 'string', description: 'Template content' },
          { name: 'variables', type: 'array', description: 'Template variables' }
        ]
      }
    ]
  }
]

export default function EndpointsPage() {
  const [activeCategory, setActiveCategory] = useState('Documents')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-white">API Endpoints</h1>
        
        <div className="p-4 border-l-4 border-blue-500 bg-black/20 backdrop-blur-sm mb-8">
          <p className="text-sm text-gray-300">
            Comprehensive reference for all available API endpoints in the LegalizeMe API.
          </p>
        </div>

        <div className="flex space-x-4 mb-8">
          {endpoints.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category.name
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-black/30'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {endpoints.map((category) => (
          <div
            key={category.name}
            className={`space-y-6 ${activeCategory === category.name ? 'block' : 'hidden'}`}
          >
            {category.endpoints.map((endpoint) => (
              <div key={endpoint.path} className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-md text-sm font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                    endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-white">{endpoint.path}</code>
                </div>
                <p className="text-gray-300 mb-4">{endpoint.description}</p>
                
                {endpoint.parameters && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-white mb-2">Parameters</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-black/20">
                          <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase">Name</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase">Type</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase">Description</th>
                          </tr>
                        </thead>
                        <tbody className="bg-black/10 divide-y divide-gray-700">
                          {endpoint.parameters.map((param) => (
                            <tr key={param.name}>
                              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-white">{param.name}</td>
                              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{param.type}</td>
                              <td className="px-4 py-2 text-sm text-gray-300">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
          <ul className="space-y-2 text-gray-300">
            <li>→ <a href="/docs/api/authentication" className="text-blue-400 hover:text-blue-300">Learn about authentication</a></li>
            <li>→ <a href="/docs/api/rate-limits" className="text-blue-400 hover:text-blue-300">Understand rate limits</a></li>
            <li>→ <a href="/docs/guides/best-practices" className="text-blue-400 hover:text-blue-300">Review best practices</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 