"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

const tabs = [
  { name: 'Node.js', content: 'node' },
  { name: 'Python', content: 'python' },
  { name: 'REST API', content: 'rest' }
]

export default function AuthenticationPage() {
  const [activeTab, setActiveTab] = useState('node')

  const codeExamples = {
    node: `const { LegalizeMe } = require('legalizeme-sdk');

const client = new LegalizeMe({
  apiKey: 'YOUR_API_KEY',
  environment: 'production'
});

// Generate a new API key
const newKey = await client.auth.createApiKey({
  name: 'My Application',
  permissions: ['documents:read', 'documents:write']
});

// List all API keys
const keys = await client.auth.listApiKeys();

// Revoke an API key
await client.auth.revokeApiKey('key_123');`,
    python: `from legalizeme import LegalizeMe

client = LegalizeMe(
    api_key='YOUR_API_KEY',
    environment='production'
)

# Generate a new API key
new_key = client.auth.create_api_key(
    name='My Application',
    permissions=['documents:read', 'documents:write']
)

# List all API keys
keys = client.auth.list_api_keys()

# Revoke an API key
client.auth.revoke_api_key('key_123')`,
    rest: `# Generate a new API key
POST https://api.legalizeme.site/v1/auth/api-keys
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "name": "My Application",
  "permissions": ["documents:read", "documents:write"]
}

# List all API keys
GET https://api.legalizeme.site/v1/auth/api-keys
Authorization: Bearer YOUR_API_KEY

# Revoke an API key
DELETE https://api.legalizeme.site/v1/auth/api-keys/key_123
Authorization: Bearer YOUR_API_KEY`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-white">Authentication</h1>
        
        <div className="p-4 border-l-4 border-blue-500 bg-black/20 backdrop-blur-sm mb-8">
          <p className="text-sm text-gray-300">
            Learn how to authenticate your requests to the LegalizeMe API using API keys and manage your authentication credentials.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">API Keys</h2>
        <p className="text-gray-300 mb-6">
          API keys are the primary method of authentication for the LegalizeMe API. Each API key has specific permissions that determine what actions it can perform.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-white">Generate an API Key</h3>
        <div className="mb-8">
          <div className="flex space-x-1 rounded-t-lg bg-black/20 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.content}
                onClick={() => setActiveTab(tab.content)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.content
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-black/30'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="rounded-b-lg bg-black/20 backdrop-blur-sm p-4">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{codeExamples[activeTab]}</code>
            </pre>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Permissions</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full">
            <thead className="bg-black/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Permission</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="bg-black/10 divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">documents:read</td>
                <td className="px-6 py-4 text-sm text-gray-300">Read access to documents</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">documents:write</td>
                <td className="px-6 py-4 text-sm text-gray-300">Create and update documents</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">templates:read</td>
                <td className="px-6 py-4 text-sm text-gray-300">Read access to templates</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">templates:write</td>
                <td className="px-6 py-4 text-sm text-gray-300">Create and update templates</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Security Best Practices</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">API Key Management</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Store API keys securely and never commit them to version control</li>
              <li>Use environment variables or secure secret management systems</li>
              <li>Regularly rotate API keys and revoke unused ones</li>
              <li>Use the principle of least privilege when assigning permissions</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
          <ul className="space-y-2 text-gray-300">
            <li>→ <a href="/docs/api/endpoints" className="text-blue-400 hover:text-blue-300">Explore API endpoints</a></li>
            <li>→ <a href="/docs/api/rate-limits" className="text-blue-400 hover:text-blue-300">Learn about rate limits</a></li>
            <li>→ <a href="/docs/guides/security" className="text-blue-400 hover:text-blue-300">Review security best practices</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 