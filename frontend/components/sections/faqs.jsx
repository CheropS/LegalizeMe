"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        { question: "What is LegalizeMe?", answer: "LegalizeMe is a transformative AI-powered legal platform that simplifies legal processes - providing fast research, dynamic document generation, and access to expert insights for both legal professionals and individuals." },
        { question: "How does LegalizeMe work?", answer: "Our platform combines AI with legal expertise to automate key tasks. Users can conduct legal research, generate contracts instantly, via Counsel, our 24/7 AI chatbot." },
        { question: "Who can benefit from LegalizeMe?", answer: "Whether you are a law student, researcher, legal professional, small business, or individual needing legal support, LegalizeMe offers streamlined tools tailored to your need." },
        { question: "Is LegalizeMe secure and compliant?", answer: "Yes, security and privacy are paramount. We use end-to-end encryption and adhere to industry standards to protect your data while delivering efficient, reliable services." },
        { question: "How can I get started with LegalizeMe?", answer: "Getting started is easy! Click on the Register Now button to stand the chance to gain access to the beta version of exclusive tools, AI-powered insights, and be part of a growing community shaping the future of legal services across Kenya and Africa." }
    ];

    return (
        <section className="py-20 font-montserrat">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white text-center">Frequently Asked Questions</h2>
                    <p className="mt-3 text-gray-300 text-center text-md">
                        How can we help you?
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqItems.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                            <div className="relative p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full text-left focus:outline-none"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                                        {faq.question}
                                    </span>
                                    <motion.svg
                                        className="w-5 h-5 text-blue-400 transition-transform duration-300"
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6">
                                                <p className="text-gray-300 text-md">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.p 
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <span className="text-gray-400">Still have questions?</span>{' '}
                    <a 
                        href="/contact" 
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                        Contact our support
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
