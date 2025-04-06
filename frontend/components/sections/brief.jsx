"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Brief = () => {
    return (
        <section className="overflow-hidden py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between -mx-4">
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="flex items-center -mx-3 sm:-mx-4">
                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                <motion.div 
                                    className="py-3 sm:py-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        src="/legal_ai.jpg"
                                        alt="Legal document"
                                        width={500}
                                        height={300}
                                        className="w-full rounded-2xl shadow-lg"
                                        quality={85}
                                    />
                                </motion.div>
                                <motion.div 
                                    className="py-3 sm:py-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Image
                                        src="/legaldocs.jpg"
                                        alt="Team meeting"
                                        width={500}
                                        height={300}
                                        className="w-full rounded-2xl shadow-lg"
                                        quality={85}
                                    />
                                </motion.div>
                            </div>
                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                <motion.div 
                                    className="relative z-10 my-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <Image
                                        src="/legalsolutions.jpg"
                                        alt="Modern office space"
                                        width={500}
                                        height={300}
                                        className="w-full rounded-2xl shadow-lg"
                                        quality={85}
                                    />
                                    <span className="absolute -right-7 -bottom-7 z-[-1] floating-dots animate-pulse">
                                        <svg
                                            width={134}
                                            height={106}
                                            viewBox="0 0 134 106"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="opacity-50"
                                        >
                                            <circle
                                                cx="1.66667"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 31 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3334"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 60.3334 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 117.667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 103 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy={104}
                                                r="1.66667"
                                                transform="rotate(-90 132 104)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 31 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="89.3333"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 89.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 103 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="89.3338"
                                                r="1.66667"
                                                transform="rotate(-90 132 89.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="74.6673"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 74.6673)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 31 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 31 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="31.0003"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 31.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 103 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 103 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="74.6668"
                                                r="1.66667"
                                                transform="rotate(-90 132 74.6668)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="30.9998"
                                                r="1.66667"
                                                transform="rotate(-90 132 30.9998)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 31 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 31 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 103 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 103 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="60.0003"
                                                r="1.66667"
                                                transform="rotate(-90 132 60.0003)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="16.3333"
                                                r="1.66667"
                                                transform="rotate(-90 132 16.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.66667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 1.66667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="16.3333"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 16.3333 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 31 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={31}
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 31 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="45.3333"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 45.3333)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="45.6667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 45.6667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="60.3333"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 60.3333 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="88.6667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 88.6667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="117.667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 117.667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="74.6667"
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 74.6667 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 103 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={103}
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 103 1.66683)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="45.3338"
                                                r="1.66667"
                                                transform="rotate(-90 132 45.3338)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx={132}
                                                cy="1.66683"
                                                r="1.66667"
                                                transform="rotate(-90 132 1.66683)"
                                                fill="#3056D3"
                                            />
                                        </svg>
                                    </span>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <motion.div 
                            className="mt-10 lg:mt-0"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="block mb-4 text-lg font-semibold text-blue-600">
                                Why Choose Us
                            </span>
                            <h2 className="mb-5 text-3xl font-bold text-white sm:text-[40px]/[48px] lg:text-5xl">
                                The Future of Law Today
                            </h2>
                            <p className="mb-5 text-lg leading-relaxed text-gray-300">
                                We are not just adapting to the future of law - we are creating it.
                                LegalizeMe is revolutionizing the legal landscape, making legal services smarter, faster and more accessible to everyone.
                                With AI-powered solutions at your fingertips, we empower you to save time, cut costs, and focus on what truly matters - delivering justice.
                            </p>
                            <p className="mb-8 text-lg leading-relaxed text-gray-300">
                                Justice delayed is justice denied. Don't get left behind. Join us today and be a part of a movement that is transforming
                                how the legal world operates. Experience the future of law now, and let LegalizeMe be your trusted partner on this journey.
                            </p>
                            <motion.a
                                href="/docs"
                                className="relative group inline-flex items-center justify-center py-3 px-7 text-base font-medium text-white rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                                <div className="relative text-white transition-all duration-300 hover:text-blue-400 flex items-center">
                                    Start Free
                                    <svg
                                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline-flex"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </div>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brief;
