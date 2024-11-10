import React, { useState } from "react";

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
        <>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 animate-fadeIn">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">How can we help you?</p>
                    </div>

                    <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                        {faqItems.map((faq, index) => (
                            <div key={index} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="flex text-lg font-semibold text-black">{faq.question}</span>

                                    <svg
                                        className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`px-4 pb-5 sm:px-6 sm:pb-6 transition-all duration-200 ${openIndex === index ? "block" : "hidden"}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-600 textbase mt-9">For more information: <a href="/contact" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
                </div>
            </section>
        </>
    );
}
