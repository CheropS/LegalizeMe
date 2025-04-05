"use client"

import { motion } from 'framer-motion'

export default function SecurityPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="prose prose-blue max-w-none">
        <h1 className="text-4xl font-bold mb-6 text-white">Security Guide</h1>
        
        <div className="p-4 border-l-4 border-blue-500 bg-black/20 backdrop-blur-sm mb-8">
          <p className="text-sm text-gray-300">
            Comprehensive security guidelines and best practices for using LegalizeMe securely.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Authentication & Authorization</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">API Keys</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Generate separate API keys for different environments (development, staging, production)</li>
              <li>Use the principle of least privilege when assigning permissions</li>
              <li>Regularly rotate API keys and revoke unused ones</li>
              <li>Never commit API keys to version control</li>
              <li>Use environment variables or secure secret management systems</li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Access Control</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Implement role-based access control (RBAC)</li>
              <li>Regularly review and update access permissions</li>
              <li>Use multi-factor authentication where possible</li>
              <li>Implement session management and timeout policies</li>
              <li>Monitor and log all access attempts</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Data Protection</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Encryption</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Use HTTPS for all API communications</li>
              <li>Encrypt sensitive data at rest</li>
              <li>Use strong encryption algorithms and key management</li>
              <li>Implement proper key rotation policies</li>
              <li>Use secure protocols for data transfer</li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Data Handling</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Implement proper data sanitization</li>
              <li>Follow data minimization principles</li>
              <li>Establish clear data retention policies</li>
              <li>Implement secure data deletion procedures</li>
              <li>Regularly audit data access and usage</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Compliance</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Regulatory Requirements</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>GDPR compliance for EU data</li>
              <li>CCPA compliance for California residents</li>
              <li>HIPAA compliance for healthcare data</li>
              <li>Industry-specific regulations</li>
              <li>Regular compliance audits and updates</li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Maintain security policies and procedures</li>
              <li>Document data processing activities</li>
              <li>Keep audit trails and logs</li>
              <li>Document incident response procedures</li>
              <li>Regularly update security documentation</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-white">Monitoring & Incident Response</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Security Monitoring</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Implement real-time security monitoring</li>
              <li>Set up alerting for suspicious activities</li>
              <li>Monitor API usage patterns</li>
              <li>Track authentication attempts</li>
              <li>Regularly review security logs</li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Incident Response</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Establish incident response procedures</li>
              <li>Define roles and responsibilities</li>
              <li>Create communication plans</li>
              <li>Document recovery procedures</li>
              <li>Conduct regular incident response drills</li>
            </ul>
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
          <ul className="space-y-2 text-gray-300">
            <li>→ <a href="/docs/guides/best-practices" className="text-blue-400 hover:text-blue-300">Review general best practices</a></li>
            <li>→ <a href="/docs/guides/integration" className="text-blue-400 hover:text-blue-300">Learn about secure integration</a></li>
            <li>→ <a href="/docs/api/authentication" className="text-blue-400 hover:text-blue-300">Understand authentication</a></li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 