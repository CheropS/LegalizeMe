'use client'

import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, FingerPrintIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const features = [
    {
        name: 'Push to deploy',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
];

const links = [
    { name: 'Open roles', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet the team', href: '#' },
];

const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
];

export default function Home() {
    return (
        <div className="bg-white">
            {/* Main Content Section */}
            <main className="relative isolate px-6 pt-8 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Justice Delayed, is Justice Denied
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        The future of law today. LegalizeMe is a platform that helps you find the best law resources and services. We are here to help you with your legal needs. We provide a platform for you to find the best legal resources and services.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        <strong>Welcome to LegalizeMe, the future of law today.</strong>
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </motion.div>

                <hr className="mx-auto max-w-7xl border-t border-gray-300" />

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
                                Everything you need to get your cases solved faster
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Some of the features that make LegalizeMe the best platform for legal professionals. Feel free to reach out to us if you have any questions. We are here to help you with your legal needs.
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
                                The best place to get started
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-6 text-lg leading-8 text-gray-300"
                            >
                                We are always looking for talented individuals to join our team. If you are passionate about law and technology, we would love to hear from you.
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
                            className="text-center text-lg font-semibold leading-8 text-gray-900"
                        >
                            Trusted by legal professionals worldwide
                        </motion.h2>
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            {['Transistor', 'Reform', 'Tuple', 'SavvyCal', 'Statamic'].map((company, index) => (
                                <motion.img
                                    key={index}
                                    alt={company}
                                    src={`https://tailwindui.com/plus/img/logos/158x48/${company.toLowerCase()}-logo-gray-900.svg`}
                                    width={158}
                                    height={48}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="mx-auto max-w-7xl border-t border-gray-200" />

                
            </main>
        </div>
    );
}
