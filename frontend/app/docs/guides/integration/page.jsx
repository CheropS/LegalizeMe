"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import CodeBlock from '@/components/CodeBlock'

const tabs = [
  { name: 'Node.js', content: 'node' },
  { name: 'Python', content: 'python' },
  { name: 'REST API', content: 'rest' }
]

export default function IntegrationPage() {
  const [activeTab, setActiveTab] = useState('node')

  const codeExamples = {
    node: `// Webhook Integration Example
const express = require('express');
const { LegalizeMe } = require('legalizeme-sdk');

const app = express();
const client = new LegalizeMe({
  apiKey: process.env.LEGALIZEME_API_KEY
});

// Handle document generation webhook
app.post('/webhooks/document-generated', async (req, res) => {
  const { documentId, status, url } = req.body;
  
  // Verify webhook signature
  const signature = req.headers['x-legalizeme-signature'];
  const isValid = client.webhooks.verifySignature(
    req.body,
    signature,
    process.env.WEBHOOK_SECRET
  );

  if (!isValid) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  // Process the generated document
  if (status === 'completed') {
    // Store document URL in your database
    await db.documents.update({
      where: { id: documentId },
      data: { url, status: 'completed' }
    });
  }

  res.status(200).json({ received: true });
});

// Start server
app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`,
    python: `# Webhook Integration Example
from flask import Flask, request, jsonify
from legalizeme import LegalizeMe
import os

app = Flask(__name__)
client = LegalizeMe(api_key=os.getenv('LEGALIZEME_API_KEY'))

@app.route('/webhooks/document-generated', methods=['POST'])
def handle_webhook():
    data = request.get_json()
    document_id = data['documentId']
    status = data['status']
    url = data['url']
    
    # Verify webhook signature
    signature = request.headers.get('X-LegalizeMe-Signature')
    is_valid = client.webhooks.verify_signature(
        request.data,
        signature,
        os.getenv('WEBHOOK_SECRET')
    )
    
    if not is_valid:
        return jsonify({'error': 'Invalid signature'}), 401
    
    # Process the generated document
    if status == 'completed':
        # Store document URL in your database
        db.documents.update(
            where={'id': document_id},
            data={'url': url, 'status': 'completed'}
        )
    
    return jsonify({'received': True})

if __name__ == '__main__':
    app.run(port=3000)`,
    rest: `# Webhook Integration Example
# Your server should expose an endpoint to receive webhooks
POST /webhooks/document-generated

# Webhook payload example
{
  "documentId": "doc_123",
  "status": "completed",
  "url": "https://legalizeme.site/documents/doc_123"
}

# Verify webhook signature
X-LegalizeMe-Signature: t=1234567890,v1=abc123...
`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-white">Integration Guide</h1>
        
        <div className="p-4 border-l-4 border-blue-500 bg-black/20 backdrop-blur-sm mb-8">
          <p className="text-sm text-gray-300">
            Learn how to integrate LegalizeMe with your applications and systems.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Integration Patterns</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Webhook Integration</h3>
            <p className="text-gray-300 mb-4">
              Receive real-time notifications when documents are generated or updated.
            </p>
            <div className="mb-4">
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
              <CodeBlock code={codeExamples[activeTab]} language={activeTab === 'rest' ? 'bash' : activeTab} />
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Database Integration</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Store document metadata in your database</li>
              <li>Track document status and versions</li>
              <li>Maintain audit trails and history</li>
              <li>Sync document data across systems</li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Authentication Integration</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Single Sign-On (SSO) integration</li>
              <li>OAuth 2.0 authentication</li>
              <li>API key management</li>
              <li>Role-based access control</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Platform Integration</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">CMS Integration</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>WordPress plugin integration</li>
              <li>Drupal module integration</li>
              <li>Custom CMS integration</li>
              <li>Content synchronization</li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">CRM Integration</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Salesforce integration</li>
              <li>HubSpot integration</li>
              <li>Custom CRM integration</li>
              <li>Contact and lead management</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Best Practices</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Error Handling</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Implement proper error handling</li>
              <li>Use retry mechanisms for transient failures</li>
              <li>Log integration errors</li>
              <li>Set up monitoring and alerts</li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Implement caching where appropriate</li>
              <li>Use batch operations for bulk data</li>
              <li>Optimize API calls</li>
              <li>Monitor integration performance</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
          <ul className="space-y-2 text-gray-300">
            <li>→ <a href="/docs/guides/best-practices" className="text-blue-400 hover:text-blue-300">Review best practices</a></li>
            <li>→ <a href="/docs/guides/security" className="text-blue-400 hover:text-blue-300">Learn about security</a></li>
            <li>→ <a href="/docs/api/endpoints" className="text-blue-400 hover:text-blue-300">Explore API endpoints</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 