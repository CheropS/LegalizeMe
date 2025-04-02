"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        { question: "What is LegalizeMe", answer: "LegalizeMe is a transformative AI-powered legal platform that simplifies legal processes - providing fast research, dynamic document generation, and access to expert insights for both legal professionals and individuals." },
        { question: "How does LegalizeMe work?", answer: "Our platform combines AI with legal expertise to automate key tasks. Users can conduct legal research, generate contracts instantly, via Counsel, our 24/7 AI chatbot." },
        { question: "Who can benefit from LegalizeMe?", answer: "Whether you are a law student, researcher, legal professional, small business, or individual needing legal support, LegalizeMe offers streamlined tools tailored to your need." },
        { question: "Is LegalizeMe secure and compliant?", answer: "Yes, security and privacy are paramount. We use end-to-end encryption and adhere to industry standards to protect your data while delivering efficient, reliable services." },
        { question: "How can I get started with LegalizeMe?", answer: "Getting started is easy! Click on the Register Now button to stand the chance to gain access to the beta version of exclusive tools, AI-powered insights, and be part of a growing community shaping the future of legal services across Kenya and Africa." }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <motion.div 
                    className="max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
                        How can we help you?
                    </p>
                </motion.div>

                <motion.div 
                    className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {faqItems.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-xl font-semibold text-gray-900">{faq.question}</span>
                                <motion.svg
                                    className="w-6 h-6 text-gray-500"
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
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5">
                                            <p className="text-lg leading-relaxed text-gray-600">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p 
                    className="text-center text-lg text-gray-600 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    For more information:{' '}
                    <a 
                        href="/contact" 
                        className="font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline"
                    >
                        Contact our support
                    </a>
                </motion.p>
            </div>
        </section>
    );
}
