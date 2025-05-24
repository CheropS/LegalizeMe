"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link href="/register" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Sign Up
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <h1 className="text-3xl font-bold mb-6">Data Governance Policy</h1>
            <p className="text-gray-300 mb-8">
              Effective Date: <strong>September 19, 2024</strong><br />
              Version: <strong>1.0</strong>
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">LegalizeMe Data Governance Policy</h2>
                <p className="text-gray-300">
                  At LegalizeMe, we are dedicated to managing data responsibly, ethically, and securely to ensure compliance with legal standards, privacy laws, and industry best practices. This policy details our approach to data collection, storage, management, and protection. It also sets forth user rights and provides transparency on our data handling practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">1. Scope and Objectives</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">1.1 Scope</h3>
                    <p className="text-gray-300">
                      This Data Governance Policy applies to all data interactions on the LegalizeMe platform, covering user data, legal documents, AI-generated content, and third-party data sources. It applies to all employees, contractors, partners, and users of LegalizeMe.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">1.2 Objectives</h3>
                    <p className="text-gray-300">
                      This policy aims to:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                      <li>Ensure compliance with relevant data protection laws (e.g., Kenya Data Protection Act, GDPR).</li>
                      <li>Establish standards for data quality, security, and integrity.</li>
                      <li>Define data ownership, access, and usage protocols.</li>
                      <li>Promote transparency in data collection, processing, and sharing.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Data Collection and Usage</h2>
                <p className="text-gray-300">
                  LegalizeMe collects personal data, usage data, legal document data, and case law data to provide access to legal tools, improve platform functionality, enhance security, and ensure regulatory compliance.
                </p>
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">2.1 Types of Data Collected</h3>
                    <p className="text-gray-300">
                      LegalizeMe collects the following data types:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                      <li><strong>Personal Data:</strong> Information provided during registration (e.g., name, email, contact information).</li>
                      <li><strong>Usage Data:</strong> Information about platform interactions (e.g., IP addresses, browser types, usage patterns).</li>
                      <li><strong>Legal Document Data:</strong> Documents uploaded, created, or generated on the platform.</li>
                      <li><strong>Case Law Data:</strong> Publicly available legal information, such as court rulings and statutory references.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">2.2 Purpose of Data Collection</h3>
                    <p className="text-gray-300">
                      Data is collected to:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                      <li>Provide access to legal tools and services.</li>
                      <li>Improve platform functionality and performance.</li>
                      <li>Generate insights to enhance the user experience.</li>
                      <li>Ensure regulatory compliance.</li>
                      <li>Enhance security and prevent fraud.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Data Ownership</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">3.1 User Ownership</h3>
                    <p className="text-gray-300">
                      Users retain ownership of their personal data and any legal documents they upload or create. LegalizeMe acts as a data processor, facilitating data storage, management, and retrieval. By using the platform, users grant LegalizeMe the necessary rights to process their data as outlined in this policy.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">3.2 Platform Ownership</h3>
                    <p className="text-gray-300">
                      LegalizeMe owns all operational data generated by the platform, including system logs, AI-generated content (e.g., summaries, templates), and aggregated analytics data. This data will be anonymized and used for platform improvement and AI model optimization.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Data Storage, Retention, and Backup</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">4.1 Data Storage</h3>
                    <p className="text-gray-300">
                      All collected data is securely stored using AES-256 encryption for data at rest and TLS/SSL encryption for data in transit. LegalizeMe hosts data on servers located in compliant jurisdictions to ensure adherence to data protection laws.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">4.2 Data Retention</h3>
                    <p className="text-gray-300">
                      Data is retained for the duration of a user's account. Upon deactivation, data is retained only as long as required for legal obligations, dispute resolution, or agreement enforcement, after which it is securely deleted.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">4.3 Backup and Recovery</h3>
                    <p className="text-gray-300">
                      Regular data backups ensure continuity. In the event of a data loss, LegalizeMe's disaster recovery plan will restore data integrity promptly.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">5.1 Security Measures</h3>
                    <p className="text-gray-300">
                      LegalizeMe employs the following measures:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                      <li><strong>Encryption:</strong> AES-256 encryption for data at rest, TLS/SSL for data in transit.</li>
                      <li><strong>Access Controls:</strong> Role-based access control (RBAC) limits access to sensitive data.</li>
                      <li><strong>Monitoring:</strong> Continuous monitoring for unauthorized access and suspicious activities.</li>
                      <li><strong>Regular Audits:</strong> Security audits are conducted to uphold high standards of data protection.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">5.2 Incident Response</h3>
                    <p className="text-gray-300">
                      In case of a data breach:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                      <li>The breach is immediately contained and mitigated.</li>
                      <li>Affected users are notified within 72 hours, in compliance with legal requirements.</li>
                      <li>A full investigation is conducted to identify causes and prevent future incidents.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. User Data Rights and Access</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">6.1 User Rights</h3>
                    <p className="text-gray-300">
                      Users have the following rights under data protection laws:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                      <li>Right to Access: Request access to personal data.</li>
                      <li>Right to Rectification: Update inaccurate or incomplete data.</li>
                      <li>Right to Erasure: Request deletion of data, subject to legal obligations.</li>
                      <li>Right to Data Portability: Obtain personal data in a machine-readable format.</li>
                      <li>Right to Restrict Processing: Limit processing of personal data in specific situations.</li>
                      <li>Right to Object: Object to data processing for particular purposes, such as marketing.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">6.2 Exercising Rights</h3>
                    <p className="text-gray-300">
                      To exercise these rights, users can contact <a href="mailto:info.support@legalizeme.site" className="text-blue-400 hover:text-blue-300">info.support@legalizeme.site</a>. LegalizeMe will respond within 30 days and may require additional verification for security.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Data Sharing and Third-Party Access</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">7.1 Third-Party Service Providers</h3>
                    <p className="text-gray-300">
                      LegalizeMe may share data with third-party providers (e.g., cloud hosting, analytics) for platform functionality. Providers adhere to stringent data protection standards and are given access only as needed to fulfill their services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">7.2 Legal Compliance</h3>
                    <p className="text-gray-300">
                      We may disclose data if required by law or in response to requests from public authorities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">7.3 Data Sharing for Product Improvement</h3>
                    <p className="text-gray-300">
                      Aggregated and anonymized data may be shared for research, analysis, or product improvement. Individual users will not be identifiable in this data.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Data Governance Roles and Responsibilities</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">8.1 Data Governance Committee</h3>
                    <p className="text-gray-300">
                      The Data Governance Committee is responsible for:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                      <li>Establishing and enforcing data governance policies.</li>
                      <li>Monitoring compliance with data laws and internal policies.</li>
                      <li>Ensuring data quality and consistency.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">8.2 Chief Data Officer (CDO)</h3>
                    <p className="text-gray-300">
                      The CDO implements data governance strategy, ensuring data security and compliance. They are also the primary contact for data privacy concerns and access requests.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">8.3 Data Stewards</h3>
                    <p className="text-gray-300">
                      Data Stewards ensure proper data use and security within their respective domains, handling data integrity, quality assurance, and access controls.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Compliance and Audits</h2>
                <p className="text-gray-300">
                  LegalizeMe adheres to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                  <li><strong>Kenya Data Protection Act:</strong> Compliance with Kenya's personal data laws.</li>
                  <li><strong>GDPR:</strong> Compliance with GDPR requirements for EU users.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Regular audits by internal teams and third-party entities ensure alignment with data protection standards.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">10. Policy Updates and Communication</h2>
                <p className="text-gray-300">
                  LegalizeMe reserves the right to modify this policy as necessary. Significant changes will be communicated to users via email or platform notification. Users are encouraged to review the policy regularly.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">11. Payment Data and Transactions</h2>
                <p className="text-gray-300">
                  LegalizeMe collects payment-related data (e.g., billing information, transaction history) strictly to process payments for services. Payment data is encrypted and handled by compliant payment service providers. LegalizeMe retains payment data only as long as necessary for legal, accounting, or compliance purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">12. Contact Information</h2>
                <p className="text-gray-300">
                  For inquiries, concerns, or data access requests, please contact:
                </p>
                <p className="text-gray-300 mt-2">
                  LegalizeMe<br />
                  Email: <a href="mailto:info.support@legalizeme.site" className="text-blue-400 hover:text-blue-300">info.support@legalizeme.site</a><br />
                  Address: Eldoret, Kenya
                </p>
                <p className="text-gray-300 mt-4 font-bold">
                  By using LegalizeMe, you acknowledge and agree to this Data Governance Policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 