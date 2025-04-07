"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Welcome() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 animate-fadeIn font-montserrat">
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
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Grow with LegalizeMe
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-300">
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
                                className="relative group inline-flex items-center justify-center py-3 px-7 text-base font-medium text-white rounded-lg"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-25 blur group-hover:opacity-100 transition duration-300" />
                                <div className="relative text-white transition-all duration-300 hover:text-blue-400 flex items-center px-6 py-2.5">
                                    Get Started
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
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}