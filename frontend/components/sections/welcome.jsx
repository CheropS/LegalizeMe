"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Welcome() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white animate-fadeIn font-montserrat">
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center md:grid-cols-2 gap-y-8 md:gap-x-28">
                    <motion.div 
                        className="relative mx-auto md:mr-0 max-w-lg md:max-w-none"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            <Image
                                className="object-cover rounded-lg shadow-xl w-full md:max-w-md lg:max-w-lg"
                                src="/welcome1.jpeg"
                                alt="Legal professional working"
                                width={400}
                                height={450}
                                quality={85}
                                priority
                            />

                            <Image
                                className="absolute origin-bottom-right -bottom-10 -right-10 md:-right-16 w-full md:w-2/3 rounded-lg shadow-xl"
                                src="/welcome2.jpeg"
                                alt="Happy client"
                                width={400}
                                height={400}
                                quality={85}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Grow with LegalizeMe
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600">
                            Our platform is designed to provide you with the best legal
                            experience possible. We are committed to making the law
                            accessible to everyone, everywhere. LegalizeMe is the future
                            of law, today.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-8"
                        >
                            <a
                                href="/register"
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Get Started
                                <svg
                                    className="w-5 h-5 ml-2"
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
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}