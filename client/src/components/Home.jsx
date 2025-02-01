'use client'

import { FingerPrintIcon, ChatBubbleLeftIcon, PaperAirplaneIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Brief from './Brief';
import Cta from './CTA';
import Services from './Services';
import FAQs from './FAQs';
import Hero from './Hero';
import NavbarWithHero from './NavbarWithHero';
import Footer from './Footer';

const features = [
    {
        name: 'AI-Powered Legal Database',
        description:
            'Our AI-driven database transforms legal research with rapid, precise searches, personalized insights, and instant summaries. Whether you are a legal professional or seeking quick access to legal information, LegalizeMe saves you time, turning complex searches into effortless results. Embrace smarter, faster legal work.',
        icon: ChatBubbleLeftIcon,
    },
    {
        name: '"Counsel" Your Personal Legal Assistant',
        description:
            '"Counsel" isn’t just a chatbot—it’s your real-time document generator. From contracts to agreements, "Counsel" delivers. Fast, accurate, and as easy as a conversation, "Counsel" puts legal support at your fingertips.',
        icon: PaperAirplaneIcon,
    },
    {
        name: 'Security You Can Trust',
        description:
            'At LegalizeMe, your privacy is paramount. We utilize the latest security protocols and industry-leading best practices to safeguard your data, ensuring that your information is always protected. With us, you can approach your legal work with confidence, knowing your data is in safe hands.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Coming Soon: A Glimpse into the Future',
        description: 'We’re just getting started. Soon, you’ll have access to cutting-edge features like advanced contract analysis to identify risks and optimize terms—plus much more. Stay tuned.',
        icon: EllipsisHorizontalCircleIcon,
    },
];

const links = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'View pricing', href: '/pricing' },
    { name: 'Feedback', href: '/feedback' },
];

const stats = [
    { name: 'Targeted Users', value: '2000+' },
    { name: 'Documents generated daily', value: '50+' },
    { name: 'Time saved per week', value: '15 hours' },
];

const partners = [
    { name: 'Kenya Law', src: '/klaw.jpeg', url: 'https://www.kenyalaw.org' },
    { name: 'ALX Academy', src: '/alxacademy2.jpeg', url: 'https://www.alxafrica.com' },
    { name: 'Sand Technologies', src: './sandtech.jpeg', url: 'https://www.sandtech.com' },
    { name: 'ALX Ventures', src: './alxventures.jpeg', url: 'https://www.alxafrica.com/ventures' },
    { name: 'The FutureList', src: './future2.png', url: 'https://www.futurelist.com' },
    { name: 'NVIDIA Inception Program', src:'./nvidia1.svg', url:'https://www.nvidia.com/en-us/startups/'}
];


export default function Home() {
    return (
        <>
            <div className="bg-white font-montserrat">
                <NavbarWithHero />
                <main className="relative isolate px-6 pt-8 lg:px-8">
                    <hr className="mx-auto max-w-7xl border-t border-gray-300" />
                    <Brief />
                    <hr className="mx-auto max-w-7xl border-t border-gray-200" />
                    <Hero />
                    <hr className="mx-auto max-w-7xl border-t border-gray-200" />

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
                                    With smart recommendations and robust security, the future of legal services is just a click away.
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

                    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-10">
                        <img
                            alt=""
                            src="/innovation.jpg"
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
                                    We’re evolving to deliver smarter legal solutions for legal professionals, researchers, students, and business founders. There's something for everyone.<br /><br />
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
                                            className="col-span-2 h-16 w-36 object-contain lg:col-span-1 group bounce-hover"
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

                    <Cta />
                    <hr className="mx-auto max-w-7xl border-t border-gray-200" />

                    <Services />
                    <hr className="mx-auto max-w-7xl border-t border-gray-200" />

                    <FAQs />

                </main>

            </div>
            <Footer />
        </>
    );
}