"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

const tabs = [
  { name: 'Node.js', content: 'node' },
  { name: 'Python', content: 'python' },
  { name: 'REST API', content: 'rest' }
]

export default function CaseManagementPage() {
  const [activeTab, setActiveTab] = useState('node')

  const codeExamples = {
    node: `const { LegalizeMe } = require('legalizeme-sdk');

const client = new LegalizeMe({ apiKey: 'YOUR_API_KEY' });

// Create a new case
const newCase = await client.cases.create({
  title: 'Intellectual Property Dispute',
  description: 'Trademark infringement case',
  status: 'active',
  parties: ['Company A', 'Company B'],
  documents: ['doc_123', 'doc_456']
});

// Update case status
await client.cases.update('case_123', {
  status: 'closed',
  outcome: 'settled'
});

// List all cases
const cases = await client.cases.list({
  status: 'active',
  sort: 'created_at',
  order: 'desc'
});`,
    python: `from legalizeme import LegalizeMe

client = LegalizeMe(api_key='YOUR_API_KEY')

# Create a new case
new_case = client.cases.create(
    title='Intellectual Property Dispute',
    description='Trademark infringement case',
    status='active',
    parties=['Company A', 'Company B'],
    documents=['doc_123', 'doc_456']
)

# Update case status
client.cases.update('case_123',
    status='closed',
    outcome='settled'
)

# List all cases
cases = client.cases.list(
    status='active',
    sort='created_at',
    order='desc'
)`,
    rest: `# Create a new case
POST https://api.legalizeme.site/v1/cases
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "title": "Intellectual Property Dispute",
  "description": "Trademark infringement case",
  "status": "active",
  "parties": ["Company A", "Company B"],
  "documents": ["doc_123", "doc_456"]
}

# Update case status
PATCH https://api.legalizeme.site/v1/cases/case_123
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "status": "closed",
  "outcome": "settled"
}

# List all cases
GET https://api.legalizeme.site/v1/cases
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "status": "active",
  "sort": "created_at",
  "order": "desc"
}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-white">Case Management</h1>
        
        <div className="p-4 border-l-4 border-blue-500 bg-black/20 backdrop-blur-sm mb-8">
          <p className="text-sm text-gray-300">
            Manage your legal cases efficiently with our comprehensive case management system.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Case Tracking</h3>
            <p className="text-gray-300 mb-4">Keep track of all your legal cases in one place.</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Case status monitoring</li>
              <li>Document management</li>
              <li>Party information</li>
              <li>Timeline tracking</li>
            </ul>
          </div>
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Collaboration</h3>
            <p className="text-gray-300 mb-4">Work together with your team on cases.</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Team assignments</li>
              <li>Comments and notes</li>
              <li>Task management</li>
              <li>Activity logging</li>
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

        <h2 className="text-2xl font-semibold mb-4 text-white">Case Statuses</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full">
            <thead className="bg-black/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="bg-black/10 divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">draft</td>
                <td className="px-6 py-4 text-sm text-gray-300">Case is being prepared</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">active</td>
                <td className="px-6 py-4 text-sm text-gray-300">Case is currently being handled</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">on_hold</td>
                <td className="px-6 py-4 text-sm text-gray-300">Case is temporarily paused</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">closed</td>
                <td className="px-6 py-4 text-sm text-gray-300">Case has been resolved</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
          <ul className="space-y-2 text-gray-300">
            <li>→ <a href="/docs/features/legal-research" className="text-blue-400 hover:text-blue-300">Learn about legal research</a></li>
            <li>→ <a href="/docs/features/document-generation" className="text-blue-400 hover:text-blue-300">Explore document generation</a></li>
            <li>→ <a href="/docs/guides/best-practices" className="text-blue-400 hover:text-blue-300">Review best practices</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 