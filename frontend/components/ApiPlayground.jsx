"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Copy, Check } from 'lucide-react'
import CodeBlock from '@/components/CodeBlock'

const endpoints = [
  {
    name: 'Generate Document',
    method: 'POST',
    path: '/api/v1/documents',
    description: 'Generate a new legal document using a template',
    example: {
      request: `{
  "templateId": "nda",
  "data": {
    "companyName": "Acme Inc",
    "clientName": "John Doe",
    "effectiveDate": "2024-03-20"
  }
}`,
      response: `{
  "id": "doc_123",
  "status": "processing",
  "url": "https://legalizeme.site/documents/doc_123"
}`
    }
  },
  {
    name: 'Get Document',
    method: 'GET',
    path: '/api/v1/documents/{id}',
    description: 'Retrieve a generated document',
    example: {
      request: null,
      response: `{
  "id": "doc_123",
  "status": "completed",
  "url": "https://legalizeme.site/documents/doc_123",
  "createdAt": "2024-03-20T10:00:00Z"
}`
    }
  }
]

export default function ApiPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0])
  const [requestBody, setRequestBody] = useState(selectedEndpoint.example.request || '')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleExecute = async () => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setResponse(selectedEndpoint.example.response)
    } catch (error) {
      setResponse(JSON.stringify({ error: 'Failed to execute request' }, null, 2))
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <select
          value={selectedEndpoint.name}
          onChange={(e) => {
            const endpoint = endpoints.find(ep => ep.name === e.target.value)
            if (endpoint) {
              setSelectedEndpoint(endpoint)
              setRequestBody(endpoint.example.request || '')
              setResponse('')
            }
          }}
          className="flex-1 px-4 py-2 text-sm text-gray-300 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {endpoints.map((endpoint) => (
            <option key={endpoint.name} value={endpoint.name}>
              {endpoint.method} {endpoint.path}
            </option>
          ))}
        </select>
        <button
          onClick={handleExecute}
          disabled={isLoading}
          className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Play className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Request</h3>
            {requestBody && (
              <button
                onClick={() => copyToClipboard(requestBody)}
                className="p-2 text-gray-400 hover:text-white"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            )}
          </div>
          {selectedEndpoint.example.request ? (
            <CodeBlock code={requestBody} language="json" />
          ) : (
            <div className="p-4 text-sm text-gray-400 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10">
              No request body required
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Response</h3>
            {response && (
              <button
                onClick={() => copyToClipboard(response)}
                className="p-2 text-gray-400 hover:text-white"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            )}
          </div>
          {response ? (
            <CodeBlock code={response} language="json" />
          ) : (
            <div className="p-4 text-sm text-gray-400 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10">
              Execute request to see response
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 