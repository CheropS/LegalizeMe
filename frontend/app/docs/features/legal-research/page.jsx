"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

const tabs = [
  { name: 'Node.js', content: 'node' },
  { name: 'Python', content: 'python' },
  { name: 'REST API', content: 'rest' }
]

export default function LegalResearchPage() {
  const [activeTab, setActiveTab] = useState('node')

  const codeExamples = {
    node: `const { LegalizeMe } = require('legalizeme-sdk');

const client = new LegalizeMe({ apiKey: 'YOUR_API_KEY' });

// Search for legal cases
const cases = await client.legal.search({
  query: 'intellectual property rights',
  jurisdiction: 'US',
  year: 2020
});

// Get case details
const caseDetails = await client.legal.getCase('case_123');

// Analyze legal text
const analysis = await client.legal.analyze({
  text: 'This agreement is governed by the laws of California...',
  type: 'contract'
});`,
    python: `from legalizeme import LegalizeMe

client = LegalizeMe(api_key='YOUR_API_KEY')

# Search for legal cases
cases = client.legal.search(
    query='intellectual property rights',
    jurisdiction='US',
    year=2020
)

# Get case details
case_details = client.legal.get_case('case_123')

# Analyze legal text
analysis = client.legal.analyze(
    text='This agreement is governed by the laws of California...',
    type='contract'
)`,
    rest: `# Search for legal cases
GET https://api.legalizeme.site/v1/legal/search
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "query": "intellectual property rights",
  "jurisdiction": "US",
  "year": 2020
}

# Get case details
GET https://api.legalizeme.site/v1/legal/cases/case_123
Authorization: Bearer YOUR_API_KEY

# Analyze legal text
POST https://api.legalizeme.site/v1/legal/analyze
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "text": "This agreement is governed by the laws of California...",
  "type": "contract"
}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-white">Legal Research</h1>
        
        <div className="p-4 border-l-4 border-blue-500 bg-black/20 backdrop-blur-sm mb-8">
          <p className="text-sm text-gray-300">
            Access comprehensive legal research tools and databases through our API to enhance your legal document generation process.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Case Search</h3>
            <p className="text-gray-300 mb-4">Search through millions of legal cases with advanced filtering options.</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Filter by jurisdiction</li>
              <li>Search by date range</li>
              <li>Advanced keyword search</li>
              <li>Related cases suggestions</li>
            </ul>
          </div>
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Legal Analysis</h3>
            <p className="text-gray-300 mb-4">AI-powered analysis of legal documents and text.</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Contract analysis</li>
              <li>Legal clause identification</li>
              <li>Compliance checking</li>
              <li>Risk assessment</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Getting Started</h2>
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

        <h2 className="text-2xl font-semibold mb-4 text-white">Search Parameters</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full">
            <thead className="bg-black/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Parameter</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="bg-black/10 divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">query</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">string</td>
                <td className="px-6 py-4 text-sm text-gray-300">Search keywords or phrases</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">jurisdiction</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">string</td>
                <td className="px-6 py-4 text-sm text-gray-300">Legal jurisdiction (e.g., US, EU, UK)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">year</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">integer</td>
                <td className="px-6 py-4 text-sm text-gray-300">Filter by year</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">type</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">string</td>
                <td className="px-6 py-4 text-sm text-gray-300">Document type (case, statute, regulation)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
          <ul className="space-y-2 text-gray-300">
            <li>→ <a href="/docs/features/document-generation" className="text-blue-400 hover:text-blue-300">Learn about document generation</a></li>
            <li>→ <a href="/docs/features/case-management" className="text-blue-400 hover:text-blue-300">Explore case management</a></li>
            <li>→ <a href="/docs/guides/best-practices" className="text-blue-400 hover:text-blue-300">Review best practices</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 