"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const partners = [
    { name: 'Kenya Law', src: '/klaw.jpeg', url: 'https://www.kenyalaw.org' },
    { name: 'ALX Academy', src: '/alxacademy2.jpeg', url: 'https://www.alxafrica.com' },
    { name: 'Sand Technologies', src: '/sandtech.jpeg', url: 'https://www.sandtech.com' },
    { name: 'ALX Ventures', src: '/alxventures.jpeg', url: 'https://www.alxafrica.com/ventures' },
    { name: 'The FutureList', src: '/future2.png', url: 'https://www.futurelist.com' },
    { name: 'NVIDIA Inception Program', src: '/nvidia1.svg', url: 'https://www.nvidia.com/en-us/startups/' },
    { name: 'Amazon Web Services', src: '/aws_light.svg', url: 'https://aws.amazon.com/' },
    { name: 'Microsoft for Startups', src: '/microsoft.svg', url: 'https://startups.microsoft.com/en-us/' },
    { name: 'Microsoft Azure', src: '/azure.svg', url: 'https://azure.microsoft.com/en-us/' },
];

export default function Partners() {
    const [isHovered, setIsHovered] = useState(false)
    const containerRef = useRef(null)

    return (
        <section className="py-16 bg-gray-50 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Our Trusted Partners
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
                        We are proud to collaborate with industry leaders and innovators including
                    </p>
                </motion.div>
                
                <div 
                    ref={containerRef}
                    className="relative overflow-hidden mt-16"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="flex gap-8"
                        animate={{
                            x: [0, -1000],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                        style={{
                            animationPlayState: isHovered ? 'paused' : 'running',
                        }}
                    >
                        {/* First set of partners */}
                        {partners.map((partner, index) => (
                            <motion.a
                                key={`${partner.name}-1`}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="relative h-16 w-36">
                                    <Image
                                        src={partner.src}
                                        alt={partner.name}
                                        fill
                                        sizes="144px"
                                        className="object-contain transition-opacity group-hover:opacity-80"
                                        quality={85}
                                    />
                                </div>
                            </motion.a>
                        ))}
                        
                        {/* Duplicate set for seamless loop */}
                        {partners.map((partner, index) => (
                            <motion.a
                                key={`${partner.name}-2`}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="relative h-16 w-36">
                                    <Image
                                        src={partner.src}
                                        alt={partner.name}
                                        fill
                                        sizes="144px"
                                        className="object-contain transition-opacity group-hover:opacity-80"
                                        quality={85}
                                    />
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}