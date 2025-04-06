"use client"
import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Blog from "@/components/sections/blog"
import { motion } from "framer-motion"

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10">
                <button
                    className="w-full text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors duration-300">{title}</span>
                    <motion.svg
                        className="w-5 h-5 text-blue-400 transition-transform duration-300"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </button>
                <motion.div 
                    initial={false}
                    animate={{ 
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className="px-6 pb-6">
                        {children}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default function AboutPage() {
    return (
        <div>
            {/* Page Title */}
            <motion.section 
                className="py-[70px] text-center font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="mx-auto px-4 sm:container">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">About Us</h2>
                    </div>
                </div>
            </motion.section>

            <section className="py-8 sm:py-16 lg:py-24 font-montserrat">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                        <motion.div 
                            className="relative lg:mb-12"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image 
                                className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4 floating-dots" 
                                src="/dots-pattern.svg" 
                                alt="Dots pattern"
                                width={100}
                                height={100}
                            />
                            <div className="pl-12 pr-6">
                                <Image 
                                    className="relative rounded-lg" 
                                    src="/about.jpg" 
                                    alt="About LegalizeMe"
                                    width={600}
                                    height={400}
                                    priority
                                />
                            </div>
                            <motion.div 
                                className="absolute left-0 pr-12 bottom-8 xl:bottom-20"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="max-w-xs bg-[#2A538D] rounded-lg sm:max-w-md xl:max-w-md">
                                    <div className="px-3 py-4 sm:px-5 sm:py-8">
                                        <div className="flex items-start">
                                            <p className="text-3xl sm:text-4xl">👋</p>
                                            <blockquote className="ml-5">
                                                <p className="text-sm font-medium text-white sm:text-lg">
                                                    "Embrace the future of law - transform your legal experience
                                                    with our AI-powered solutions. Be part of the revolution and
                                                    unlock effortless access to justice with LegalizeMe."
                                                </p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="2xl:pl-16"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Get to know us</h2>
                            <p className="text-lg leading-relaxed text-gray-300 mt-9">
                                LegalizeMe is revolutionizing the legal landscape with technology that makes legal services faster, more reliable, and accessible for everyone. Our platform empowers users to save time, cut costs, and streamline their processes—whether you're a legal professional, student, or individual seeking justice.
                            </p>
                            <p className="mt-6 text-lg leading-relaxed text-gray-300">
                                At LegalizeMe, we believe in breaking down barriers because justice delayed is justice denied. We're not just transforming the law; we're making it work for you.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Accordion Section */}
            <motion.div 
                className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto mb-16">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Our Values</h3>
                        <p className="mt-3 text-lg leading-relaxed text-gray-400">
                            At LegalizeMe, we believe in breaking down barriers because justice delayed is justice denied. We're not just transforming the law; we're making it work for you.
                        </p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div id="accordion-flush" className="space-y-4">
                        {/* Mission */}
                        <AccordionItem title="Mission">
                            <p className="text-md leading-relaxed text-gray-300">To revolutionize the legal landscape by providing innovative, AI powered solutions that make legal services fast, accessible, and affordable for everyone, ensuring no one is left behind in the pursuit of justice.</p>
                        </AccordionItem>

                        {/* Vision */}
                        <AccordionItem title="Vision">
                            <p className="text-md leading-relaxed text-gray-300">To be the premier legal hub that revolutionizes law across Africa and beyond, empowering individuals and legal professionals with groundbreaking tools to make justice swift, accessible, and efficient for all.</p>
                        </AccordionItem>

                        {/* Core Values */}
                        <AccordionItem title="Core Values">
                            <ul className="list-disc pl-5 text-md leading-relaxed text-gray-300">
                                <li><strong className="text-white">Innovation</strong> - Redefining possibilities in legal tech for impactful solutions.</li>
                                <li><strong className="text-white">Accessibility</strong> - Making justice swift, affordable, and available to all.</li>
                                <li><strong className="text-white">Integrity</strong> - Committed to trust, transparency, and fairness in every step.</li>
                            </ul>
                        </AccordionItem>
                    </div>
                </div>
            </motion.div>

            <Blog />

            <motion.section 
                className="py-10 sm:py-16 lg:py-24 font-montserrat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <motion.div 
                        className="max-w-2xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                        <p className="mt-3 text-lg leading-relaxed text-gray-300 md:mt-8">
                            What started as a dream has now become a reality. Our numbers speak for themselves, showcasing our growth, impact, and commitment to excellence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                        {[
                            {
                                number: "500+",
                                title: "Documents",
                                subtitle: "Generated daily"
                            },
                            {
                                number: "2000+",
                                title: "Active users",
                                subtitle: "Since inception"
                            },
                            {
                                number: "5s",
                                title: "To Generate",
                                subtitle: "Summary for a document"
                            }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="font-bold text-7xl">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">{stat.number}</span>
                                </h3>
                                <p className="mt-4 text-xl font-medium text-gray-300">{stat.title}</p>
                                <p className="text-base mt-0.5 text-gray-400">{stat.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
}