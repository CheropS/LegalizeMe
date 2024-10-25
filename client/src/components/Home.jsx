'use client'

import { FingerPrintIcon, ChatBubbleLeftIcon, FolderIcon, PaperAirplaneIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Brief from './Brief';
import Cta from './CTA';
import Services from './Services';
import FAQs from './FAQs';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';

const features = [
    {
        name: 'AI Powered Database',
        description:
            'Our AI-powered datbase transforms the way you search and retrieve legal information. Experience lightning-fast searches, tailored recommendations, and instant summaries. Whether you are a legal professional or just need quick answers. LegalizeMe makes your research precise and effortless. Say goodbye to complex searches and hello to efficient legal work.',
        icon: ChatBubbleLeftIcon,
    },
    {
        name: '"Counsel" Your Personal Legal Assistant',
        description:
            '"Counsel" is more than just a chatbot - it is your real-time document generator. Whether you need contracts, agreements, or legal templates, "Counsel" delivers fast, error-free, and accessible documents at your fingertips. Draft contracts in minutes, not hours, and get your legal tasks done anytime, anywhere. With "Counsel", legal support is as easy as having a conversation. Simplify your legal needs with "Counsel" today.',
        icon: PaperAirplaneIcon,
    },
    {
        name: 'Security You Can Trust',
        description:
            'Your privacy is our priority. We have implemented the latest security protocals and best practices to ensure that your data is always protected. With LegalizeMe, you can focus on your legal work with complete peace of mind, knowing that your information is safe with us.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Coming Soon: A Glimpse into the Future',
        description: (
            <>
                <p>We are just getting started. Stay tuned for advanced features including:</p>
                <ul className="list-disc ml-4">
                    <li>Contract analysis to spot risks and optimize terms</li>
                    <li>E-discovery tools to streamline case preparation</li>
                    <li>Lawyer recommendations for specialized legal assistance</li>
                    <li>Augmented document retrieval for more comprehensive results</li>
                </ul>
            </>
        ),
        icon: EllipsisHorizontalCircleIcon,
    },
];

const links = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'View pricing', href: '/pricing' },
];

const stats = [
    { name: 'Targeted Users', value: '2000+' },
    { name: 'Documents generated', value: '50+' },
    { name: 'Time saved per week', value: '15 hours' },
];

const partners = [
    { name: 'Kenya Law', src: '/klaw.jpeg', url: 'https://www.kenyalaw.org' },
    { name: 'ALX Academy', src: '/alxacademy.png', url: 'https://www.alxafrica.com' },
    { name: 'Sand Technologies', src: './sandtech.jpeg', url: 'https://www.sandtech.com' },
    { name: 'ALX Ventures', src: './alxventures.jpeg', url: 'https://www.alxafrica.com/ventures' },
    { name: 'The FutureList', src: './futurelist.png', url: 'https://www.futurelist.com' },
];

export default function Home() {
    return (
        <>
            <div className="bg-white font-roboto">
                <Navbar />
                <section className="py-10 sm:py-16 lg:py-24 animate-fadeIn bg-gradient-to-tr from-indigo-500 to-purple-300">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">

                            <div>
                                <h1 className="text-4xl font-bold font-roboto text-black sm:text-6xl lg:text-7xl">
                                    LegalizeMe
                                </h1>
                                <div className="relative inline-flex">
                                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                                    <span className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Lubricating the wheels of justice</span>
                                </div>

                                <p className="mt-8 text-base text-black sm:text-xl">
                                    At LegalizeMe, we are not just keeping up with the change - we are driving it.
                                    Our mission is to revolutionize the legal landscape by delivering state-of-the-art tools that make legal
                                    services faster, smarter, and accessible to everyone. We break down barriers, eliminate delays and ensure justice is
                                    never out of reach. With us, every second saved is justice unlocked, every document generated is a problem solved,
                                    and evert user empowered is a step towards a fairer world. LegalizeMe isn't just a platform - it's
                                    the future of law in motion.<br /><br /> Sign up now, and be part of the change.
                                </p>

                                <div className="mt-8 sm:flex sm:items-center sm:space-x-8">
                                    <a href="/signup" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-indigo-500 hover:bg-indigo-600 focus:bg-green-600 border-r-2" role="button">
                                        Get Started
                                    </a>

                                    <a href="/about" className="text-sm font-semibold leading-6 text-gray-900 px-2">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <img className="w-full hover:animate-pulse" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="Hero" />
                            </div>
                        </div>
                    </div>
                </section>
                <main className="relative isolate px-6 pt-8 lg:px-8">
                    <hr className="mx-auto max-w-7xl border-t border-gray-300" />
                    <Brief />
                    <hr className="mx-auto max-w-7xl border-t border-gray-200" />
                    <Hero />
                    <hr className="mx-auto max-w-7xl border-t border-gray-200" />

                    {/* Features Section */}
                    <div className="bg-white py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mx-auto max-w-2xl lg:text-center"
                            >
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Get your cases solved faster</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    LegalizeMe: Fast, Efficient, Reliable and Accessible
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    We leverage cutting-edge AI technology to simplify legal services and streamline your workflow.
                                    From lightning-fast research to automated document generation, we empower you to focus on what matters.
                                    With smart recommendations nd robust security, the future of legal services is just a click away.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
                            >
                                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                    {features.map((feature) => (
                                        <motion.div
                                            key={feature.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative pl-16"
                                        >
                                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                                <feature.icon className="absolute left-0 top-0 h-10 w-10 text-indigo-600" aria-hidden="true" />
                                                {feature.name}
                                            </dt>
                                            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                        </motion.div>
                                    ))}
                                </dl>
                            </motion.div>
                        </div>
                    </div>

                    <hr className="mx-auto max-w-7xl border-t border-gray-200" />

                    {/* Third Section: Work with Us */}
                    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-10">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                        />
                        <div
                            aria-hidden="true"
                            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                        >
                            <div
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                            />
                        </div>
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:mx-0">
                                <motion.h2
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                                >
                                    Where Law Meets Innovation
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="mt-6 text-lg leading-8 text-gray-300"
                                >
                                    We are continuously evolving to nhance our platform and offer smarter legal solutions. Whether you are a legal professional or running a firm, there is something for everyone.<br /><br />
                                    For inquiries, details, or personalized support, reach out to us anytime at <strong>info.support@legalizeme.site</strong> by clicking the links below.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
                            >
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                                    {links.map((link) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.8 }}
                                        >
                                            {link.name} <span aria-hidden="true">&rarr;</span>
                                        </motion.a>
                                    ))}
                                </div>
                                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                                    {stats.map((stat) => (
                                        <motion.div
                                            key={stat.name}
                                            className="flex flex-col-reverse"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                        </motion.div>
                                    ))}
                                </dl>
                            </motion.div>
                        </div>
                    </div>
                    <hr className="mx-auto max-w-7xl border-t border-gray-200" />

                    {/* Third Section: Partners */}
                    <div className="bg-white py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-center text-4xl font-bold leading-8 text-gray-900"
                            >
                                Our Trusted Partners
                            </motion.h2>
                            <motion.p className="mt-2 text-md tracking-tight text-center text-gray-900 sm:text-2xl"> We are proud to collaborate with industry leaders and innovators including</motion.p>
                            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                {partners.map(({ name, src, url }, index) => (
                                    <a href={url} key={name} target="_blank" rel="noopener noreferrer">
                                        <motion.img
                                            src={src}
                                            alt={name}
                                            className="col-span-2 h-16 w-36 object-contain lg:col-span-1"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <hr className="mx-auto max-w-7xl border-t border-gray-200" />

                    {/* CTA */}
                    <Cta />
                    <hr className="mx-auto max-w-7xl border-t border-gray-200" />

                    {/* Services Section */}
                    <Services />
                    <hr className="mx-auto max-w-7xl border-t border-gray-200" />

                    {/* FAQs Section */}
                    <FAQs />

                </main>
            </div>
            <Footer />
        </>
    );
}
