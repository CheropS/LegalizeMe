import React from 'react';

const DataGovernance = () => {
    return (
        <>
            <section className="py-10 bg-white sm:py-16 lg:py-24 animate-fadeIn font-montserrat">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Data Governance Policy</h2>

                    <div className="flow-root mt-12 sm:mt-16">
                        <div className="divide-y divide-gray-200 -my-9">
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">LegalizeMe Data Governance Policy</p>
                                <p className="mt-3 text-base text-gray-600">
                                    Effective Date: <strong>September 19, 2024</strong><br />
                                    Version: <strong>1.0</strong>
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    At LegalizeMe, we are dedicated to managing data responsibly, ethically, and securely to ensure compliance with legal standards, privacy laws, and industry best practices. This policy details our approach to data collection, storage, management, and protection. It also sets forth user rights and provides transparency on our data handling practices.
                                </p>
                            </div>

                            {/* Scope and Objectives Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">1. Scope and Objectives</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>1.1 Scope:</strong> This Data Governance Policy applies to all data interactions on the LegalizeMe platform, covering user data, legal documents, AI-generated content, and third-party data sources. It applies to all employees, contractors, partners, and users of LegalizeMe.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>1.2 Objectives:</strong> This policy aims to:
                                    <ul className="list-disc list-inside mt-2">
                                        <li>Ensure compliance with relevant data protection laws (e.g., Kenya Data Protection Act, GDPR).</li>
                                        <li>Establish standards for data quality, security, and integrity.</li>
                                        <li>Define data ownership, access, and usage protocols.</li>
                                        <li>Promote transparency in data collection, processing, and sharing.</li>
                                    </ul>
                                </p>
                            </div>

                            {/* Data Collection and Usage Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">2. Data Collection and Usage</p>
                                <p className="mt-3 text-base text-gray-600">
                                    LegalizeMe collects personal data, usage data, legal document data, and case law data to provide access to legal tools, improve platform functionality, enhance security, and ensure regulatory compliance.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>2.1 Types of Data Collected:</strong> LegalizeMe collects the following data types:
                                    <ul className="list-disc list-inside mt-2">
                                        <li><strong>Personal Data:</strong> Information provided during registration (e.g., name, email, contact information).</li>
                                        <li><strong>Usage Data:</strong> Information about platform interactions (e.g., IP addresses, browser types, usage patterns).</li>
                                        <li><strong>Legal Document Data:</strong> Documents uploaded, created, or generated on the platform.</li>
                                        <li><strong>Case Law Data:</strong> Publicly available legal information, such as court rulings and statutory references.</li>
                                    </ul>
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>2.2 Purpose of Data Collection:</strong> Data is collected to:
                                    <ul className="list-disc list-inside mt-2">
                                        <li>Provide access to legal tools and services.</li>
                                        <li>Improve platform functionality and performance.</li>
                                        <li>Generate insights to enhance the user experience.</li>
                                        <li>Ensure regulatory compliance.</li>
                                        <li>Enhance security and prevent fraud.</li>
                                    </ul>
                                </p>
                            </div>

                            {/* Data Ownership Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">3. Data Ownership</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>3.1 User Ownership:</strong> Users retain ownership of their personal data and any legal documents they upload or create. LegalizeMe acts as a data processor, facilitating data storage, management, and retrieval. By using the platform, users grant LegalizeMe the necessary rights to process their data as outlined in this policy.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>3.2 Platform Ownership:</strong> LegalizeMe owns all operational data generated by the platform, including system logs, AI-generated content (e.g., summaries, templates), and aggregated analytics data. This data will be anonymized and used for platform improvement and AI model optimization.
                                </p>
                            </div>

                            {/* Data Storage, Retention, and Backup Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">4. Data Storage, Retention, and Backup</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>4.1 Data Storage:</strong> All collected data is securely stored using AES-256 encryption for data at rest and TLS/SSL encryption for data in transit. LegalizeMe hosts data on servers located in compliant jurisdictions to ensure adherence to data protection laws.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>4.2 Data Retention:</strong> Data is retained for the duration of a user’s account. Upon deactivation, data is retained only as long as required for legal obligations, dispute resolution, or agreement enforcement, after which it is securely deleted.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>4.3 Backup and Recovery:</strong> Regular data backups ensure continuity. In the event of a data loss, LegalizeMe’s disaster recovery plan will restore data integrity promptly.
                                </p>
                            </div>

                            {/* Data Security Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">5. Data Security</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>5.1 Security Measures:</strong> LegalizeMe employs the following measures:
                                    <ul className="list-disc list-inside mt-2">
                                        <li><strong>Encryption:</strong> AES-256 encryption for data at rest, TLS/SSL for data in transit.</li>
                                        <li><strong>Access Controls:</strong> Role-based access control (RBAC) limits access to sensitive data.</li>
                                        <li><strong>Monitoring:</strong> Continuous monitoring for unauthorized access and suspicious activities.</li>
                                        <li><strong>Regular Audits:</strong> Security audits are conducted to uphold high standards of data protection.</li>
                                    </ul>
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>5.2 Incident Response:</strong> In case of a data breach:
                                    <ul className="list-disc list-inside mt-2">
                                        <li>The breach is immediately contained and mitigated.</li>
                                        <li>Affected users are notified within 72 hours, in compliance with legal requirements.</li>
                                        <li>A full investigation is conducted to identify causes and prevent future incidents.</li>
                                    </ul>
                                </p>
                            </div>

                            {/* User Data Rights and Access Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">6. User Data Rights and Access</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>6.1 User Rights:</strong> Users have the following rights under data protection laws:
                                    <ul className="list-disc list-inside mt-2">
                                        <li>Right to Access: Request access to personal data.</li>
                                        <li>Right to Rectification: Update inaccurate or incomplete data.</li>
                                        <li>Right to Erasure: Request deletion of data, subject to legal obligations.</li>
                                        <li>Right to Data Portability: Obtain personal data in a machine-readable format.</li>
                                        <li>Right to Restrict Processing: Limit processing of personal data in specific situations.</li>
                                        <li>Right to Object: Object to data processing for particular purposes, such as marketing.</li>
                                    </ul>
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>6.2 Exercising Rights:</strong> To exercise these rights, users can contact <a href="mailto:info.support@legalizeme.site" className="text-blue-600 underline">info.support@legalizeme.site</a>. LegalizeMe will respond within 30 days and may require additional verification for security.
                                </p>
                            </div>

                            {/* Data Sharing and Third-Party Access Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">7. Data Sharing and Third-Party Access</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>7.1 Third-Party Service Providers:</strong> LegalizeMe may share data with third-party providers (e.g., cloud hosting, analytics) for platform functionality. Providers adhere to stringent data protection standards and are given access only as needed to fulfill their services.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>7.2 Legal Compliance:</strong> We may disclose data if required by law or in response to requests from public authorities.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>7.3 Data Sharing for Product Improvement:</strong> Aggregated and anonymized data may be shared for research, analysis, or product improvement. Individual users will not be identifiable in this data.
                                </p>
                            </div>

                            {/* Data Governance Roles and Responsibilities Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">8. Data Governance Roles and Responsibilities</p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>8.1 Data Governance Committee:</strong> The Data Governance Committee is responsible for:
                                    <ul className="list-disc list-inside mt-2">
                                        <li>Establishing and enforcing data governance policies.</li>
                                        <li>Monitoring compliance with data laws and internal policies.</li>
                                        <li>Ensuring data quality and consistency.</li>
                                    </ul>
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>8.2 Chief Data Officer (CDO):</strong> The CDO implements data governance strategy, ensuring data security and compliance. They are also the primary contact for data privacy concerns and access requests.
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    <strong>8.3 Data Stewards:</strong> Data Stewards ensure proper data use and security within their respective domains, handling data integrity, quality assurance, and access controls.
                                </p>
                            </div>

                            {/* Compliance and Audits Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">9. Compliance and Audits</p>
                                <p className="mt-3 text-base text-gray-600">
                                    LegalizeMe adheres to:
                                    <ul className="list-disc list-inside mt-2">
                                        <li><strong>Kenya Data Protection Act:</strong> Compliance with Kenya’s personal data laws.</li>
                                        <li><strong>GDPR:</strong> Compliance with GDPR requirements for EU users.</li>
                                    </ul>
                                    Regular audits by internal teams and third-party entities ensure alignment with data protection standards.
                                </p>
                            </div>

                            {/* Policy Updates and Communication Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">10. Policy Updates and Communication</p>
                                <p className="mt-3 text-base text-gray-600">
                                    LegalizeMe reserves the right to modify this policy as necessary. Significant changes will be communicated to users via email or platform notification. Users are encouraged to review the policy regularly.
                                </p>
                            </div>

                            {/* Payment Data and Transactions Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">11. Payment Data and Transactions</p>
                                <p className="mt-3 text-base text-gray-600">
                                    LegalizeMe collects payment-related data (e.g., billing information, transaction history) strictly to process payments for services. Payment data is encrypted and handled by compliant payment service providers. LegalizeMe retains payment data only as long as necessary for legal, accounting, or compliance purposes.
                                </p>
                            </div>

                            {/* Contact Information Section */}
                            <div className="py-9">
                                <p className="text-xl font-semibold text-black">12. Contact Information</p>
                                <p className="mt-3 text-base text-gray-600">
                                    For inquiries, concerns, or data access requests, please contact:
                                </p>
                                <p className="mt-3 text-base text-gray-600">
                                    LegalizeMe<br />
                                    Email: <a href="mailto:info.support@legalizeme.site" className="text-blue-600 underline">info.support@legalizeme.site</a><br />
                                    Address: Eldoret, Kenya
                                </p>
                                <p className="mt-3 text-base text-gray-600 font-bold">
                                    By using LegalizeMe, you acknowledge and agree to this Data Governance Policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DataGovernance;