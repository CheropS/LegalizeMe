"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
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
            <h1 className="text-3xl font-bold mb-6">Terms of Service and Conditions of Use</h1>
            <p className="text-gray-300 mb-8">
              Effective Date: <strong>September 19, 2024</strong>
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Welcome to LegalizeMe</h2>
                <p className="text-gray-300">
                  Welcome to LegalizeMe ("we," "our," or "the Platform"), an AI-powered legal technology platform designed to streamline access to legal resources, including documents, case law data, and legal education. By accessing or using the Platform, you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms"), our Privacy Policy, and any related policies referenced herein. If you do not agree with these Terms, please discontinue use of the Platform immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">1.1 Eligibility</h3>
                    <p className="text-gray-300">
                      By creating an account or accessing the Platform, you confirm that you are at least 18 years of age, or the age of legal majority in your jurisdiction, and are legally capable of entering into this agreement. You represent and warrant that all information provided is accurate, complete, and up-to-date, and that your use of the Platform complies with all applicable laws and regulations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">1.2 Binding Agreement</h3>
                    <p className="text-gray-300">
                      These Terms constitute a legally binding agreement between you and LegalizeMe. By accessing the Platform, you consent to abide by these Terms and any applicable rules or regulations.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Modification of Terms</h2>
                <p className="text-gray-300">
                  LegalizeMe reserves the right to amend or modify these Terms at any time. Updates will be posted on the Platform and may be communicated via email or in-app notifications. Your continued use of the Platform following any updates constitutes acceptance of the revised Terms. Material changes will be clearly indicated, and we encourage regular review of these Terms. Should you disagree with any modifications, you must discontinue use of the Platform.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. LegalizeMe Services</h2>
                <p className="text-gray-300 mb-4">
                  LegalizeMe provides the following services ("Services"):
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong>AI-Powered Document Generation:</strong> Access templates for personal, business, and corporate legal documents (e.g., contracts, agreements).</li>
                  <li><strong>AI-Enhanced Case Law Database:</strong> Access a searchable, AI-powered database containing legal precedents, court rulings, and case summaries.</li>
                  <li><strong>AI Summarization Tools:</strong> Summarize legal cases, documents, and laws into easy-to-understand formats tailored to both laypersons and legal professionals.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  <strong>Important Notice:</strong> LegalizeMe is not a law firm and does not offer legal advice. Use of the Platform does not establish an attorney-client relationship. Users are encouraged to consult qualified legal professionals for specific legal guidance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Account Responsibilities</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">4.1 Account Creation</h3>
                    <p className="text-gray-300">
                      To access certain Platform features, you are required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information as needed. Failure to maintain accurate information may result in account suspension or termination.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">4.2 Security and Unauthorized Use</h3>
                    <p className="text-gray-300">
                      You are responsible for safeguarding your account credentials (e.g., username and password). You must promptly notify us of any security breach, unauthorized access, or suspicious activity. LegalizeMe disclaims all liability for loss or damages resulting from unauthorized account use.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">4.3 Prohibited Uses</h3>
                    <p className="text-gray-300">
                      You agree not to:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                      <li>Reverse-engineer, decompile, or tamper with any part of the Platform.</li>
                      <li>Use AI or machine learning technologies to compete with LegalizeMe.</li>
                      <li>Engage in fraudulent, illegal, or harmful activities, including phishing, data scraping, or unauthorized data collection.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Intellectual Property Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">5.1 Ownership</h3>
                    <p className="text-gray-300">
                      All content on the Platform—including templates, AI models, algorithms, design elements, text, graphics, and code—is the intellectual property of LegalizeMe or its licensors, protected by copyright, trademark, and other intellectual property laws.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">5.2 User-Generated Content</h3>
                    <p className="text-gray-300">
                      By submitting content (e.g., documents, comments, feedback), you grant LegalizeMe a perpetual, non-exclusive, royalty-free, worldwide license to use, modify, distribute, and display your content for the purposes of Platform operation and enhancement. You retain ownership of your content, while LegalizeMe retains rights necessary for service optimization.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">5.3 Kenya Law Data Attribution</h3>
                    <p className="text-gray-300">
                      Some legal content (e.g., case law) is sourced from <a href="https://kenyalaw.org/kl/" className="text-blue-400 hover:text-blue-300" target="_blank">Kenya Law Report: Home Page</a> and is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/" className="text-blue-400 hover:text-blue-300" target="_blank">Creative Commons Attribution 4.0 International License</a>. Users must comply with this license, including providing proper attribution and links to the original source.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. License to Use</h2>
                <p className="text-gray-300">
                  LegalizeMe grants you a non-exclusive, limited, revocable, and non-transferable license to use the Platform for personal or commercial purposes, contingent on compliance with these Terms. Unauthorized use, including copying, redistributing, or altering Platform materials, may result in immediate license termination and potential legal action.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. No Legal Advice Disclaimer</h2>
                <p className="text-gray-300">
                  The content provided on the Platform, including documents, summaries, and legal case insights, is for informational purposes only and does not constitute legal advice. We strongly recommend consulting a licensed attorney for specific legal concerns. LegalizeMe disclaims all warranties related to the use or reliance on its tools and services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-300">
                  To the fullest extent permitted by law, LegalizeMe, its affiliates, officers, directors, employees, and licensors are not liable for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                  <li>Indirect, incidental, punitive, or consequential damages, including loss of profits, data, business opportunities, or goodwill.</li>
                  <li>Damages exceeding the amount you have paid LegalizeMe in the 12 months preceding the claim.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  LegalizeMe's total liability for any claim arising from your use of the Platform shall not exceed the fees paid in the preceding 12 months.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Termination</h2>
                <p className="text-gray-300">
                  We reserve the right to suspend or terminate your account at any time for violations of these Terms, misuse of the Platform, or at our discretion. Upon termination, your license to use the Platform ceases immediately. Any outstanding fees or obligations remain enforceable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">10. Governing Law and Jurisdiction</h2>
                <p className="text-gray-300">
                  These Terms are governed by and construed under the laws of the Republic of Kenya. Disputes arising out of your use of the Platform will be resolved exclusively in Kenyan courts.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">11. Force Majeure</h2>
                <p className="text-gray-300">
                  LegalizeMe shall not be held liable for delays or failures in performance due to circumstances beyond reasonable control, including natural disasters, acts of war, government action, communication failures, or similar events.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">12. Indemnification</h2>
                <p className="text-gray-300">
                  You agree to indemnify, defend, and hold harmless LegalizeMe, its affiliates, officers, directors, employees, and licensors from any claims, damages, liabilities, costs, or expenses (including attorney's fees) arising from your breach of these Terms, misuse of the Platform, or violation of applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">13. Dispute Resolution</h2>
                <p className="text-gray-300">
                  In the event of any dispute, the parties agree to first attempt resolution through good-faith negotiations. If unresolved, the dispute will be settled through binding arbitration under the Kenya Arbitration Act. You waive the right to a jury trial or participation in a class action lawsuit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">14. Entire Agreement</h2>
                <p className="text-gray-300">
                  These Terms, along with any referenced policies, constitute the entire agreement between you and LegalizeMe, superseding all prior agreements and communications, whether written or oral.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">15. Contact Information</h2>
                <p className="text-gray-300">
                  For any questions or concerns regarding these Terms, please contact us at:
                </p>
                <p className="text-gray-300 mt-2">
                  LegalizeMe<br />
                  Email: <a href="mailto:info.support@legalizeme.site" className="text-blue-400 hover:text-blue-300">info.support@legalizeme.site</a><br />
                  Address: Eldoret, Kenya
                </p>
                <p className="text-gray-300 mt-4 font-bold">
                  By continuing to use the Platform, you confirm that you have read, understood, and agreed to these Terms of Service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 