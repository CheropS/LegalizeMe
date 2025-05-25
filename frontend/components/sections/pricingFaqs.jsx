"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function PricingFAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        {
          question: "What is a token?",
          answer: `A token is a small chunk of text — usually about <strong>4 characters</strong>. For example, the word <em>lawyer</em> is one token. The sentence <em>I need a contract template</em> is about 6 tokens.<br /><br />
          When you interact with our AI, every question you ask and every response you receive uses tokens.`
        },
        {
          question: "Why are tokens important?",
          answer: `Tokens help us calculate how much AI processing you’re using. The more tokens your prompt or response contains, the more resources are used — and that’s what determines the cost.`
        },
        {
          question: "How many tokens does a typical task use?",
          answer: `Here’s a rough estimate:<br /><br />
          <ul>
            <li><strong>A legal question or prompt:</strong> ~100–150 tokens</li>
            <li><strong>A legal contract draft:</strong> ~500–2,000 tokens</li>
            <li><strong>A case summary:</strong> ~400–1,000 tokens</li>
          </ul><br />
          Your dashboard shows how many tokens you’ve used, so you can track your usage in real time.`
        },
        {
          question: "What happens if I exceed my token limit?",
          answer: `You’ll be notified and can either:<br /><br />
          <ul>
            <li>Pause usage until your next billing cycle</li>
            <li>Upgrade to a higher plan</li>
            <li>Purchase additional tokens (coming soon)</li>
          </ul>`
        },
        {
          question: "Can I get more tokens if I need them?",
          answer: `Absolutely. You can upgrade your tier or top-up at flexible rates. See the pricing table for details.`
        }
      ];

    return (
        <section className="py-20 font-montserrat">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white text-center">Frequently Asked Questions - Understanding Tokens</h2>
                    <p className="mt-3 text-gray-300 text-center text-md">
                        Need help understanding tokens?
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
                                            <div
                                                className="px-6 pb-6"
                                                // eslint-disable-next-line react/no-danger
                                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                                            />
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
