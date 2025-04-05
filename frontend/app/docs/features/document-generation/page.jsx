"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

const tabs = [
  { name: 'Node.js', content: 'node' },
  { name: 'Python', content: 'python' },
  { name: 'REST API', content: 'rest' }
]

export default function DocumentGenerationPage() {
  const [activeTab, setActiveTab] = useState('node')

  const codeExamples = {
    node: `const { LegalizeMe } = require('legalizeme-sdk');

const client = new LegalizeMe({ apiKey: 'YOUR_API_KEY' });

async function generateDocument() {
  const document = await client.documents.create({
    template: 'nda',
    data: {
      companyName: 'Tech Corp',
      effectiveDate: new Date(),
      parties: ['John Doe', 'Jane Smith'],
      confidentialInfo: 'Product specifications and designs'
    }
  });

  return document.downloadUrl;
}`,
    python: `from legalizeme import LegalizeMe

client = LegalizeMe(api_key='YOUR_API_KEY')

def generate_document():
    document = client.documents.create(
        template='nda',
        data={
            'company_name': 'Tech Corp',
            'effective_date': datetime.now(),
            'parties': ['John Doe', 'Jane Smith'],
            'confidential_info': 'Product specifications and designs'
        }
    )
    
    return document.download_url`,
    rest: `curl -X POST https://api.legalizeme.site/v1/documents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "template": "nda",
    "data": {
      "companyName": "Tech Corp",
      "effectiveDate": "2024-03-20T00:00:00Z",
      "parties": ["John Doe", "Jane Smith"],
      "confidentialInfo": "Product specifications and designs"
    }
  }'`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-white">Document Generation</h1>
        
        <div className="p-4 border-l-4 border-blue-500 bg-black/20 backdrop-blur-sm mb-8">
          <p className="text-sm text-gray-300">
            Learn how to generate legal documents programmatically using our document generation API.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Available Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Non-Disclosure Agreement</h3>
            <p className="text-gray-300 mb-4">Standard NDA template with customizable terms.</p>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Most Popular
            </span>
          </div>
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Service Agreement</h3>
            <p className="text-gray-300 mb-4">Professional services contract template.</p>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              New
            </span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Generate a Document</h2>
        <p className="text-gray-300 mb-6">
          Choose your preferred programming language to see how to generate documents:
        </p>

        {/* Code Tabs */}
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

        <h2 className="text-2xl font-semibold mb-4 text-white">Template Variables</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full">
            <thead className="bg-black/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Variable</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="bg-black/10 divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">companyName</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">string</td>
                <td className="px-6 py-4 text-sm text-gray-300">Name of the company</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">effectiveDate</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">date</td>
                <td className="px-6 py-4 text-sm text-gray-300">When the document becomes effective</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">parties</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">array</td>
                <td className="px-6 py-4 text-sm text-gray-300">List of parties involved</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Customization Options</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Template Styling</h3>
            <p className="text-gray-300">Customize fonts, colors, and layouts of your documents.</p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Dynamic Content</h3>
            <p className="text-gray-300">Add conditional clauses and dynamic sections based on your data.</p>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
          <ul className="space-y-2 text-gray-300">
            <li>→ <a href="/docs/api/authentication" className="text-blue-400 hover:text-blue-300">Set up authentication</a></li>
            <li>→ <a href="/docs/features/legal-research" className="text-blue-400 hover:text-blue-300">Explore legal research tools</a></li>
            <li>→ <a href="/docs/guides/best-practices" className="text-blue-400 hover:text-blue-300">Review best practices</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 