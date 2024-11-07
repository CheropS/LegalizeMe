import React from 'react';
import {
    FingerPrintIcon,
    ChatBubbleLeftIcon,
    PaperAirplaneIcon,
    EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import Brief from './Brief';
import Cta from './CTA';
import Services from './Services';
import FAQs from './FAQs';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';

import { features, links, stats, partners } from './constants';

export default function Home() {
    return (
        <div className="bg-white font-roboto">
            <Navbar />
            <HeroSection />
            <main className="relative isolate px-6 pt-8 lg:px-8">
                <hr className="mx-auto max-w-7xl border-t border-gray-300" />
                <Brief />
                <hr className="mx-auto max-w-7xl border-t border-gray-200" />
                <Hero />
                <hr className="mx-auto max-w-7xl border-t border-gray-200" />

                <FeaturesSection features={features} />
                <WorkWithUsSection />

                <Cta />
                <Services />
                <FAQs />
            </main>
            <Footer />
        </div>
    );
}

// Hero Section Component
const HeroSection = () => (
    <section className="py-10 sm:py-16 lg:py-24 animate-fadeIn bg-gradient-to-tr from-indigo-500 to-purple-300">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">LegalizeMe</h1>
                <Tagline />
                <Description />
                <CallToActions />
            </div>
            <img
                className="w-full hover:animate-pulse"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                alt="Hero"
            />
        </div>
    </section>
);

const Tagline = () => (
    <div className="relative inline-flex">
        <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]" />
        <span className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Lubricating the wheels of justice</span>
    </div>
);

const Description = () => (
    <p className="mt-8 text-base text-black sm:text-xl">
        At LegalizeMe, we’re not just keeping up with the change - we’re driving it.
        Our mission is to revolutionize the legal landscape with tools that make legal
        services faster, smarter, and accessible to everyone. We ensure justice is never out
        of reach. <br /><br /> Sign up now, and be part of the change.
    </p>
);

const CallToActions = () => (
    <div className="mt-8 sm:flex sm:items-center sm:space-x-8">
        <a href="/signup" className="inline-flex items-center px-10 py-4 text-white bg-indigo-500 transition-all duration-200 hover:bg-indigo-600 focus:bg-green-600">
            Get Started
        </a>
        <a href="/about" className="text-sm font-semibold text-gray-900 px-2">
            Learn more →
        </a>
    </div>
);

// Features Section Component
const FeaturesSection = ({ features }) => (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto max-w-2xl lg:text-center"
            >
                <h2 className="text-base font-semibold text-indigo-600">Get your cases solved faster</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    LegalizeMe: Fast, Efficient, Reliable, and Accessible
                </p>
                <p className="mt-6 text-lg text-gray-600">
                    We leverage AI to simplify legal services. From lightning-fast research to automated document generation, LegalizeMe is your go-to solution.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
            >
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (
                        <FeatureItem key={feature.name} feature={feature} />
                    ))}
                </dl>
            </motion.div>
        </div>
    </div>
);

const FeatureItem = ({ feature }) => (
    <motion.div
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
);

// Work with Us Section Component
const WorkWithUsSection = () => (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-10">
        <img
            alt=""
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
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
                    Continuously evolving to enhance your experience. For inquiries, reach out anytime at <strong>info.support@legalizeme.site</strong>.
                </motion.p>
            </div>
        </div>
    </div>
);
